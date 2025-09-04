
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
import CertificateOfOrigin from "./pages/more/CertificateOfOrigin";
import TextileExport from "./pages/more/TextileExport";
import CustomsClearance from "./pages/more/CustomsClearance";
import FreightForwarding from "./pages/more/FreightForwarding";
import MarketResearch from "./pages/more/MarketResearch";
import WarehouseServices from "./pages/more/WarehouseServices";
import InsuranceServices from "./pages/more/InsuranceServices";
import BuyerVerification from "./pages/more/BuyerVerification";
import DigitalMarketing from "./pages/more/DigitalMarketing";
import ComplianceTraining from "./pages/more/ComplianceTraining";
import AfricanMarkets from "./pages/more/AfricanMarkets";
import MiddleEastMarkets from "./pages/more/MiddleEastMarkets";
import AmericanMarkets from "./pages/more/AmericanMarkets";
import LegalCompliance from "./pages/more/LegalCompliance";
import TechnologyIntegration from "./pages/more/TechnologyIntegration";
import PackagingServices from "./pages/more/PackagingServices";
import CertificationServices from "./pages/more/CertificationServices";
import SupplyChainManagement from "./pages/more/SupplyChainManagement";
import NorthAmericanMarkets from "./pages/more/NorthAmericanMarkets";
import SouthAmericanMarkets from "./pages/more/SouthAmericanMarkets";
import OceaniaMarkets from "./pages/more/OceaniaMarkets";
import EasternEuropeanMarkets from "./pages/more/EasternEuropeanMarkets";
import CentralAsianMarkets from "./pages/more/CentralAsianMarkets";
import SoutheastAsianMarkets from "./pages/more/SoutheastAsianMarkets";
import NortheastAsianMarkets from "./pages/more/NortheastAsianMarkets";
import SouthernAfricanMarkets from "./pages/more/SouthernAfricanMarkets";
import WestAfricanMarkets from "./pages/more/WestAfricanMarkets";
import EastAfricanMarkets from "./pages/more/EastAfricanMarkets";
import NorthAfricanMarkets from "./pages/more/NorthAfricanMarkets";
import GulfCooperationCouncil from "./pages/more/GulfCooperationCouncil";
import LevantMarkets from "./pages/more/LevantMarkets";
import ScandinavianMarkets from "./pages/more/ScandinavianMarkets";
import MediterraneanMarkets from "./pages/more/MediterraneanMarkets";
import BasmatiRiceExport from "./pages/more/BasmatiRiceExport";
import NonBasmatiRiceExport from "./pages/more/NonBasmatiRiceExport";
import WheatExport from "./pages/more/WheatExport";
import CornExport from "./pages/more/CornExport";
import MilletExport from "./pages/more/MilletExport";
import BarleyExport from "./pages/more/BarleyExport";
import TurmericExport from "./pages/more/TurmericExport";
import CuminExport from "./pages/more/CuminExport";
import CorianderExport from "./pages/more/CorianderExport";
import CardamomExport from "./pages/more/CardamomExport";
import BlackPepperExport from "./pages/more/BlackPepperExport";
import RedChiliExport from "./pages/more/RedChiliExport";
import GingerExport from "./pages/more/GingerExport";
import GarlicExport from "./pages/more/GarlicExport";
import OnionExport from "./pages/more/OnionExport";
import CashewExport from "./pages/more/CashewExport";
import AlmondExport from "./pages/more/AlmondExport";
import SesameSeedsExport from "./pages/more/SesameSeedsExport";
import SunflowerSeedsExport from "./pages/more/SunflowerSeedsExport";

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
          <Route path="/more/certificate-of-origin" element={<CertificateOfOrigin />} />
          <Route path="/more/textile-export" element={<TextileExport />} />
          <Route path="/more/customs-clearance" element={<CustomsClearance />} />
          <Route path="/more/freight-forwarding" element={<FreightForwarding />} />
          <Route path="/more/market-research" element={<MarketResearch />} />
          <Route path="/more/warehouse-services" element={<WarehouseServices />} />
          <Route path="/more/insurance-services" element={<InsuranceServices />} />
          <Route path="/more/buyer-verification" element={<BuyerVerification />} />
          <Route path="/more/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/more/compliance-training" element={<ComplianceTraining />} />
          <Route path="/more/african-markets" element={<AfricanMarkets />} />
          <Route path="/more/middle-east-markets" element={<MiddleEastMarkets />} />
          <Route path="/more/american-markets" element={<AmericanMarkets />} />
          <Route path="/more/legal-compliance" element={<LegalCompliance />} />
          <Route path="/more/technology-integration" element={<TechnologyIntegration />} />
          <Route path="/more/packaging-services" element={<PackagingServices />} />
          <Route path="/more/certification-services" element={<CertificationServices />} />
          <Route path="/more/supply-chain-management" element={<SupplyChainManagement />} />
          <Route path="/more/north-american-markets" element={<NorthAmericanMarkets />} />
          <Route path="/more/south-american-markets" element={<SouthAmericanMarkets />} />
          <Route path="/more/oceania-markets" element={<OceaniaMarkets />} />
          <Route path="/more/eastern-european-markets" element={<EasternEuropeanMarkets />} />
          <Route path="/more/central-asian-markets" element={<CentralAsianMarkets />} />
          <Route path="/more/southeast-asian-markets" element={<SoutheastAsianMarkets />} />
          <Route path="/more/northeast-asian-markets" element={<NortheastAsianMarkets />} />
          <Route path="/more/southern-african-markets" element={<SouthernAfricanMarkets />} />
          <Route path="/more/west-african-markets" element={<WestAfricanMarkets />} />
          <Route path="/more/east-african-markets" element={<EastAfricanMarkets />} />
          <Route path="/more/north-african-markets" element={<NorthAfricanMarkets />} />
          <Route path="/more/gulf-cooperation-council" element={<GulfCooperationCouncil />} />
          <Route path="/more/levant-markets" element={<LevantMarkets />} />
          <Route path="/more/scandinavian-markets" element={<ScandinavianMarkets />} />
          <Route path="/more/mediterranean-markets" element={<MediterraneanMarkets />} />
          <Route path="/more/basmati-rice-export" element={<BasmatiRiceExport />} />
          <Route path="/more/non-basmati-rice-export" element={<NonBasmatiRiceExport />} />
          <Route path="/more/wheat-export" element={<WheatExport />} />
          <Route path="/more/corn-export" element={<CornExport />} />
          <Route path="/more/millet-export" element={<MilletExport />} />
          <Route path="/more/barley-export" element={<BarleyExport />} />
          <Route path="/more/turmeric-export" element={<TurmericExport />} />
          <Route path="/more/cumin-export" element={<CuminExport />} />
          <Route path="/more/coriander-export" element={<CorianderExport />} />
          <Route path="/more/cardamom-export" element={<CardamomExport />} />
          <Route path="/more/black-pepper-export" element={<BlackPepperExport />} />
          <Route path="/more/red-chili-export" element={<RedChiliExport />} />
          <Route path="/more/ginger-export" element={<GingerExport />} />
          <Route path="/more/garlic-export" element={<GarlicExport />} />
          <Route path="/more/onion-export" element={<OnionExport />} />
          <Route path="/more/cashew-export" element={<CashewExport />} />
          <Route path="/more/almond-export" element={<AlmondExport />} />
          <Route path="/more/sesame-seeds-export" element={<SesameSeedsExport />} />
          <Route path="/more/sunflower-seeds-export" element={<SunflowerSeedsExport />} />
          
          {/* Sitemap is served as a static file from /public/sitemap.xml */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
