
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'terser', // Switch to terser for better minification
    cssCodeSplit: true,
    sourcemap: false, // Disable sourcemaps in production for smaller files
    target: 'es2022', // Modern target for smaller bundles
    cssMinify: true,
    rollupOptions: {
      output: {
        // Enhanced chunking strategy for better performance
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('@radix-ui')) {
              return 'ui-components';
            }
            if (id.includes('react-router')) {
              return 'routing';
            }
            if (id.includes('@tanstack/react-query')) {
              return 'data-fetching';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            // Group other vendor libraries
            return 'vendor';
          }
        },
        // Optimized asset naming for better caching
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `assets/styles/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
      // Tree-shaking configuration
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
      },
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 500,
    // Additional build optimizations
    reportCompressedSize: false, // Faster builds
    assetsInlineLimit: 4096, // Inline smaller assets
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react', '@tanstack/react-query'],
    exclude: ['@tanstack/react-query-devtools'],
    force: true, // Force optimization
  },
  // Enhanced performance optimizations
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
    target: 'es2022',
    legalComments: 'none',
    treeShaking: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
  // Add compression and caching headers configuration
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-Content-Type-Options': 'nosniff',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
    },
  },
}));
