
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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

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

// SEO Pages
import USAMarketExport from "./pages/seo/USAMarketExport";
import UKMarketExport from "./pages/seo/UKMarketExport";
import CanadaMarketExport from "./pages/seo/CanadaMarketExport";
import AustraliaMarketExport from "./pages/seo/AustraliaMarketExport";
import OrganicFoodExport from "./pages/seo/OrganicFoodExport";
import FrozenFoodExport from "./pages/seo/FrozenFoodExport";
import PharmaceuticalExport from "./pages/seo/PharmaceuticalExport";
import AirFreightServices from "./pages/seo/AirFreightServices";
import OceanFreightServices from "./pages/seo/OceanFreightServices";
import ExpressShippingServices from "./pages/seo/ExpressShippingServices";
import GermanyMarketExport from "./pages/seo/GermanyMarketExport";
import FranceMarketExport from "./pages/seo/FranceMarketExport";
import ItalyMarketExport from "./pages/seo/ItalyMarketExport";
import SpainMarketExport from "./pages/seo/SpainMarketExport";
import NetherlandsMarketExport from "./pages/seo/NetherlandsMarketExport";
import JapanMarketExport from "./pages/seo/JapanMarketExport";
import BelgiumMarketExport from "./pages/seo/BelgiumMarketExport";
import SingaporeMarketExport from "./pages/seo/SingaporeMarketExport";
import TeaExportServices from "./pages/seo/TeaExportServices";
import CoffeeExportServices from "./pages/seo/CoffeeExportServices";
import SugarExportServices from "./pages/seo/SugarExportServices";
import PulsesExportServices from "./pages/seo/PulsesExportServices";
import MangoExportServices from "./pages/seo/MangoExportServices";
import BananaExportServices from "./pages/seo/BananaExportServices";
import GrapesExportServices from "./pages/seo/GrapesExportServices";
import CoconutExportServices from "./pages/seo/CoconutExportServices";
import CottonExportServices from "./pages/seo/CottonExportServices";
import WheatFlourExportServices from "./pages/seo/WheatFlourExportServices";
import CasheOilExportServices from "./pages/seo/CasheOilExportServices";
import JaggeryExportServices from "./pages/seo/JaggeryExportServices";
import HandicraftsExportServices from "./pages/seo/HandicraftsExportServices";
import LeatherProductsExportServices from "./pages/seo/LeatherProductsExportServices";
import GemsJewelryExportServices from "./pages/seo/GemsJewelryExportServices";
import UAEMarketExport from "./pages/seo/UAEMarketExport";
import ArharDalExport from "./pages/seo/ArharDalExport";
import MoongDalExport from "./pages/seo/MoongDalExport";
import ChanaDalExport from "./pages/seo/ChanaDalExport";
import UradDalExport from "./pages/seo/UradDalExport";
import MasoorDalExport from "./pages/seo/MasoorDalExport";
import RajmaExport from "./pages/seo/RajmaExport";
import ChickpeaExport from "./pages/seo/ChickpeaExport";
import FenugreekSeedsExport from "./pages/seo/FenugreekSeedsExport";
import MustardSeedsExport from "./pages/seo/MustardSeedsExport";
import CinnamonExport from "./pages/seo/CinnamonExport";
import CloveExport from "./pages/seo/CloveExport";
import StarAniseExport from "./pages/seo/StarAniseExport";
import FennelSeedsExport from "./pages/seo/FennelSeedsExport";
import BlackMustardSeedsExport from "./pages/seo/BlackMustardSeedsExport";
import AjwainExport from "./pages/seo/AjwainExport";
import CelerySeeds from "./pages/seo/CelerySeeds";
import DillSeedsExport from "./pages/seo/DillSeedsExport";
import PopopySeedsExport from "./pages/seo/PopopySeedsExport";
import NigellaSeedsExport from "./pages/seo/NigellaSeedsExport";
import PsylliumHuskExport from "./pages/seo/PsylliumHuskExport";
import MoroccoMarketExport from "./pages/seo/MoroccoMarketExport";
import KenyaMarketExportServices from "./pages/seo/KenyaMarketExportServices";
import NigeriaMarketExportServices from "./pages/seo/NigeriaMarketExportServices";
import WalnutExport from "./pages/seo/WalnutExport";
import PistachioExport from "./pages/seo/PistachioExport";
import HazelnutExport from "./pages/seo/HazelnutExport";
import PecanExport from "./pages/seo/PecanExport";
import PinePnutExport from "./pages/seo/PinePnutExport";
import MacadamiaExport from "./pages/seo/MacadamiaExport";
import BrazilNutExport from "./pages/seo/BrazilNutExport";
import RaisinsExport from "./pages/seo/RaisinsExport";
import DatesExport from "./pages/seo/DatesExport";

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
          
          {/* SEO Pages */}
          <Route path="/seo/usa-market-export" element={<USAMarketExport />} />
          <Route path="/seo/uk-market-export" element={<UKMarketExport />} />
          <Route path="/seo/canada-market-export" element={<CanadaMarketExport />} />
          <Route path="/seo/australia-market-export" element={<AustraliaMarketExport />} />
          <Route path="/seo/organic-food-export" element={<OrganicFoodExport />} />
          <Route path="/seo/frozen-food-export" element={<FrozenFoodExport />} />
          <Route path="/seo/pharmaceutical-export" element={<PharmaceuticalExport />} />
          <Route path="/seo/air-freight-services" element={<AirFreightServices />} />
          <Route path="/seo/ocean-freight-services" element={<OceanFreightServices />} />
          <Route path="/seo/express-shipping-services" element={<ExpressShippingServices />} />
          <Route path="/seo/germany-market-export" element={<GermanyMarketExport />} />
          <Route path="/seo/france-market-export" element={<FranceMarketExport />} />
          <Route path="/seo/italy-market-export" element={<ItalyMarketExport />} />
          <Route path="/seo/spain-market-export" element={<SpainMarketExport />} />
          <Route path="/seo/netherlands-market-export" element={<NetherlandsMarketExport />} />
          <Route path="/seo/japan-market-export" element={<JapanMarketExport />} />
          <Route path="/seo/belgium-market-export" element={<BelgiumMarketExport />} />
          <Route path="/seo/singapore-market-export" element={<SingaporeMarketExport />} />
          <Route path="/seo/tea-export-services" element={<TeaExportServices />} />
          <Route path="/seo/coffee-export-services" element={<CoffeeExportServices />} />
          <Route path="/seo/sugar-export-services" element={<SugarExportServices />} />
          <Route path="/seo/pulses-export-services" element={<PulsesExportServices />} />
          <Route path="/seo/mango-export-services" element={<MangoExportServices />} />
          <Route path="/seo/banana-export-services" element={<BananaExportServices />} />
          <Route path="/seo/grapes-export-services" element={<GrapesExportServices />} />
          <Route path="/seo/coconut-export-services" element={<CoconutExportServices />} />
          <Route path="/seo/cotton-export-services" element={<CottonExportServices />} />
          <Route path="/seo/wheat-flour-export-services" element={<WheatFlourExportServices />} />
          <Route path="/seo/cashew-oil-export-services" element={<CasheOilExportServices />} />
          <Route path="/seo/jaggery-export-services" element={<JaggeryExportServices />} />
          <Route path="/seo/handicrafts-export-services" element={<HandicraftsExportServices />} />
          <Route path="/seo/leather-products-export-services" element={<LeatherProductsExportServices />} />
          <Route path="/seo/gems-jewelry-export-services" element={<GemsJewelryExportServices />} />
          <Route path="/seo/uae-market-export" element={<UAEMarketExport />} />
          <Route path="/seo/arhar-dal-export" element={<ArharDalExport />} />
          <Route path="/seo/moong-dal-export" element={<MoongDalExport />} />
          <Route path="/seo/chana-dal-export" element={<ChanaDalExport />} />
          <Route path="/seo/urad-dal-export" element={<UradDalExport />} />
          <Route path="/seo/masoor-dal-export" element={<MasoorDalExport />} />
          <Route path="/seo/rajma-export" element={<RajmaExport />} />
          <Route path="/seo/chickpea-export" element={<ChickpeaExport />} />
          <Route path="/seo/fenugreek-seeds-export" element={<FenugreekSeedsExport />} />
          <Route path="/seo/mustard-seeds-export" element={<MustardSeedsExport />} />
          <Route path="/seo/cinnamon-export" element={<CinnamonExport />} />
          <Route path="/seo/clove-export" element={<CloveExport />} />
          <Route path="/seo/star-anise-export" element={<StarAniseExport />} />
          <Route path="/seo/fennel-seeds-export" element={<FennelSeedsExport />} />
          <Route path="/seo/black-mustard-seeds-export" element={<BlackMustardSeedsExport />} />
          <Route path="/seo/ajwain-export" element={<AjwainExport />} />
          <Route path="/seo/celery-seeds" element={<CelerySeeds />} />
          <Route path="/seo/dill-seeds-export" element={<DillSeedsExport />} />
          <Route path="/seo/poppy-seeds-export" element={<PopopySeedsExport />} />
          <Route path="/seo/nigella-seeds-export" element={<NigellaSeedsExport />} />
          <Route path="/seo/psyllium-husk-export" element={<PsylliumHuskExport />} />
          <Route path="/seo/morocco-market-export" element={<MoroccoMarketExport />} />
          <Route path="/seo/kenya-market-export-services" element={<KenyaMarketExportServices />} />
          <Route path="/seo/nigeria-market-export-services" element={<NigeriaMarketExportServices />} />
          <Route path="/seo/walnut-export" element={<WalnutExport />} />
          <Route path="/seo/pistachio-export" element={<PistachioExport />} />
          <Route path="/seo/hazelnut-export" element={<HazelnutExport />} />
          <Route path="/seo/pecan-export" element={<PecanExport />} />
          <Route path="/seo/pine-nuts-export" element={<PinePnutExport />} />
          <Route path="/seo/macadamia-export" element={<MacadamiaExport />} />
          <Route path="/seo/brazil-nut-export" element={<BrazilNutExport />} />
          <Route path="/seo/raisins-export" element={<RaisinsExport />} />
          <Route path="/seo/dates-export" element={<DatesExport />} />
          
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          
          {/* Sitemap is served as a static file from /public/sitemap.xml */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
