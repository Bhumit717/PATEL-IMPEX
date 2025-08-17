
import { useState, useEffect, lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OpeningAnimation from "@/components/OpeningAnimation";
import LogoScroll from "@/components/LogoScroll";

// Lazy load non-critical components for better performance
const WhatsAppChat = lazy(() => import("@/components/WhatsAppChat"));
import { useLocationTracking } from "@/hooks/useLocationTracking";

const Index = () => {
  const [showAnimation, setShowAnimation] = useState(() => {
    // Check if animation has been seen before
    const hasSeenAnimation = localStorage.getItem('patel-impex-animation-seen');
    return !hasSeenAnimation;
  });
  
  // Track user location and send to API (deferred and optimized)
  useLocationTracking();

  const handleAnimationComplete = () => {
    // Mark animation as seen in localStorage
    localStorage.setItem('patel-impex-animation-seen', 'true');
    setShowAnimation(false);
  };

  // Optimized resource preloading
  useEffect(() => {
    if (!showAnimation) {
      // Preload critical resources after animation
      const preloadCriticalAssets = () => {
        const criticalImages = [
          '/lovable-uploads/53ec340c-22b1-40c1-b206-d24555cba152.png'
        ];
        
        criticalImages.forEach(src => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = src;
          link.fetchPriority = 'high';
          document.head.appendChild(link);
        });
      };

      // Use requestIdleCallback for non-critical preloading
      if ('requestIdleCallback' in window) {
        requestIdleCallback(preloadCriticalAssets);
      } else {
        setTimeout(preloadCriticalAssets, 100);
      }
    }
  }, [showAnimation]);

  if (showAnimation) {
    return <OpeningAnimation onComplete={handleAnimationComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <LogoScroll />
      <Products />
      <About />
      <Services />
      <Contact />
      <Footer />
      
      {/* Lazy load WhatsApp chat with better fallback */}
      <Suspense fallback={<div className="sr-only">Loading chat support...</div>}>
        <WhatsAppChat />
      </Suspense>
    </div>
  );
};

export default Index;
