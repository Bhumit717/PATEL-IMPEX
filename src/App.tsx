
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Inquiry from "./pages/Inquiry";
import Logo from "./pages/Logo";
import FAQ from "./pages/FAQ";
import SEO from "./pages/SEO";
import More from "./pages/More";
// import Sitemap from "./pages/Sitemap"; // removed - serving static XML
import NotFound from "./pages/NotFound";

// More pages
import ExportImportGuide from "./pages/more/ExportImportGuide";
import InternationalTradeBasics from "./pages/more/InternationalTradeBasics";
import RiceExport from "./pages/more/RiceExport";
import SpicesExport from "./pages/more/SpicesExport";
import AsianMarkets from "./pages/more/AsianMarkets";
import SeaFreight from "./pages/more/SeaFreight";
import ExportDocumentation from "./pages/more/ExportDocumentation";
import AgriculturalProducts from "./pages/more/AgriculturalProducts";
import TradeFinance from "./pages/more/TradeFinance";
import EuropeanMarkets from "./pages/more/EuropeanMarkets";
import QualityStandards from "./pages/more/QualityStandards";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/more" element={<More />} />
          
          {/* More sub-pages */}
          <Route path="/more/export-import-guide" element={<ExportImportGuide />} />
          <Route path="/more/international-trade-basics" element={<InternationalTradeBasics />} />
          <Route path="/more/rice-export" element={<RiceExport />} />
          <Route path="/more/spices-export" element={<SpicesExport />} />
          <Route path="/more/asian-markets" element={<AsianMarkets />} />
          <Route path="/more/sea-freight" element={<SeaFreight />} />
          <Route path="/more/export-documentation" element={<ExportDocumentation />} />
          <Route path="/more/agricultural-products" element={<AgriculturalProducts />} />
          <Route path="/more/trade-finance" element={<TradeFinance />} />
          <Route path="/more/european-markets" element={<EuropeanMarkets />} />
          <Route path="/more/quality-standards" element={<QualityStandards />} />
          
          {/* Sitemap is served as a static file from /public/sitemap.xml */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
