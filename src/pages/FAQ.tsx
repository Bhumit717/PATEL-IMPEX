
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Search, Globe, FileText, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import riceExportImage from "@/assets/rice-export-warehouse.jpg";
import spicesExportImage from "@/assets/spices-export-facility.jpg";
import rajkotExportImage from "@/assets/rajkot-export-hub.jpg";
import importExportImage from "@/assets/import-export-documentation.jpg";
import patelImpexImage from "@/assets/patel-impex-headquarters.jpg";
import globalExportImage from "@/assets/global-export-shipping.jpg";
import agriculturalExportImage from "@/assets/agricultural-export-processing.jpg";
import exportConsultationImage from "@/assets/export-consultation.jpg";
import tradeFairImage from "@/assets/international-trade-fair.jpg";
import exportFinanceImage from "@/assets/export-finance-banking.jpg";
import qualityControlImage from "@/assets/quality-control-lab.jpg";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqSections = [
    {
      title: "Rice Export from India",
      icon: <Globe className="h-6 w-6" />,
      image: riceExportImage,
      faqs: [
        {
          question: "Who is the best rice exporter in India?",
          answer: "India's largest basmati rice exporters include companies from Punjab, Haryana, and Rajkot. The best rice exporter depends on quality standards, certifications, and global reach. Leading exporters maintain ISO certifications, FSSAI licenses, and strong supply chains. Top exporters offer both basmati and non-basmati rice varieties with competitive pricing and reliable delivery schedules."
        },
        {
          question: "What is the rice export price to Dubai in 2025?",
          answer: "Rice export prices to Dubai vary by variety: Basmati rice ranges from $800-1200 per MT, non-basmati rice from $400-600 per MT. Prices depend on quality grade, packaging, shipping terms (FOB/CIF), and seasonal demand. Current market rates include freight charges, insurance, and customs duties. Bulk orders typically receive better pricing."
        },
        {
          question: "How to export rice from India to Saudi Arabia?",
          answer: "Rice export to Saudi Arabia requires: 1) IEC code registration, 2) FSSAI license, 3) Phytosanitary certificate, 4) Certificate of origin, 5) Quality inspection certificate, 6) Halal certification, 7) Commercial invoice and packing list. The procedure involves pre-shipment inspection, customs clearance, and compliance with SASO standards."
        },
        {
          question: "What are rice export regulations for USA market?",
          answer: "USA rice export regulations include FDA registration, food facility registration, prior notice submission, pesticide residue compliance, aflatoxin testing, and labeling requirements. Exporters must meet US food safety standards, provide certificates of analysis, and ensure traceability. Organic certification required for organic rice exports."
        },
        {
          question: "Which Indian rice varieties are exported to Europe?",
          answer: "European markets prefer premium basmati varieties like Pusa Basmati 1121, Traditional Basmati, and Pusa Basmati 1509. Non-basmati varieties include Sona Masuri, IR 64, and Swarna. Europe requires strict quality standards, pesticide residue testing, and EU organic certification for organic varieties. Packaging must comply with EU food contact regulations."
        },
        {
          question: "How profitable is rice export business from Rajkot?",
          answer: "Rice export from Rajkot offers good profit margins due to competitive sourcing, strategic port location, and established trade networks. Profit margins range from 8-15% depending on variety, destination, and volume. Success factors include quality control, competitive pricing, reliable supply chain, and strong buyer relationships."
        },
        {
          question: "What is the procedure for rice export to Africa?",
          answer: "African rice export procedure includes obtaining export licenses, quality certificates, fumigation certificates, and pre-shipment inspection. Key documents: commercial invoice, packing list, bill of lading, certificate of origin, and health certificates. Major African importers include Nigeria, Ghana, Senegal, and Ivory Coast with specific import requirements."
        },
        {
          question: "How to find international rice buyers?",
          answer: "Find international rice buyers through: 1) Trade portals like IndiaMART, Alibaba, TradeIndia, 2) Government export promotion schemes, 3) International trade fairs and exhibitions, 4) Embassy trade missions, 5) Export promotion councils, 6) B2B platforms, 7) Direct marketing to importers and distributors."
        },
        {
          question: "What is CIF vs FOB pricing in rice export?",
          answer: "FOB (Free on Board) price includes rice cost plus local charges until goods are loaded on ship. CIF (Cost, Insurance, Freight) includes FOB price plus international shipping and insurance to destination port. CIF pricing is preferred by small buyers, while large importers often prefer FOB terms for better shipping control."
        },
        {
          question: "How to get rice export quality certificates?",
          answer: "Rice export quality certificates are obtained from: 1) Export Inspection Council (EIC), 2) Agricultural Marketing Advisor (AMA), 3) Regional testing laboratories, 4) Third-party inspection agencies like SGS, Intertek. Certificates cover moisture content, broken percentage, foreign matter, and pesticide residues. Valid for specific shipment periods."
        }
      ]
    },
    {
      title: "Spices Export from India",
      icon: <FileText className="h-6 w-6" />,
      image: spicesExportImage,
      faqs: [
        {
          question: "Who is the top spice exporter in India?",
          answer: "India's top spice exporters are located in Kerala, Gujarat, Rajkot, and Tamil Nadu. Leading exporters specialize in turmeric, cumin, coriander, cardamom, and pepper. Top companies maintain organic certifications, steam sterilization facilities, and global quality standards. Gujarat and Rajkot exporters are particularly strong in cumin and fennel exports."
        },
        {
          question: "What spices are exported to UAE from India?",
          answer: "Major spices exported to UAE include cumin seeds, coriander seeds, turmeric powder, red chili powder, cardamom, black pepper, and garam masala. UAE is India's largest spice export destination. Export requirements include Halal certification, quality certificates, and compliance with Emirates Authority for Standardization requirements."
        },
        {
          question: "How to start spice export business from Rajkot?",
          answer: "Starting spice export from Rajkot: 1) Obtain IEC code, 2) Register with Spices Board of India, 3) Get FSSAI license, 4) Arrange processing/packaging facility, 5) Obtain quality certifications, 6) Identify buyers through trade portals, 7) Arrange financing and insurance, 8) Develop supply chain partnerships with farmers."
        },
        {
          question: "What are spice export documentation requirements?",
          answer: "Spice export documents include: commercial invoice, packing list, shipping bill, bill of lading, certificate of origin, phytosanitary certificate, quality inspection certificate, fumigation certificate, and Spices Board registration certificate. Additional documents: insurance certificate, inspection memo, and country-specific certificates."
        },
        {
          question: "Which Indian spices have high demand in Germany?",
          answer: "German market demands organic turmeric, black pepper, cardamom, cumin, and specialty spice blends. Germany requires strict organic certification (EU Organic), pesticide residue testing, and compliance with EU food safety regulations. Premium quality and consistent supply are key factors for German buyers."
        },
        {
          question: "What is the export procedure for organic spices?",
          answer: "Organic spice export requires: 1) Organic certification from accredited agencies, 2) Organic supply chain documentation, 3) Segregation during processing/storage, 4) Transaction certificates, 5) Compliance with destination country organic standards (USDA, EU, JAS), 6) Regular inspections and audits."
        },
        {
          question: "How to export cumin seeds from Gujarat?",
          answer: "Gujarat cumin export procedure: 1) Source quality cumin from Unjha/Patan markets, 2) Processing and cleaning facilities, 3) Quality testing for moisture, purity, and pesticide residues, 4) Packaging in food-grade materials, 5) Export documentation, 6) Shipping through Kandla/Mundra ports. Gujarat produces 80% of India's cumin."
        },
        {
          question: "What are spice export prices in 2025?",
          answer: "Current spice export prices (per kg): Turmeric powder $2-4, Cumin seeds $4-6, Coriander seeds $2-3, Red chili powder $3-5, Black pepper $8-12, Cardamom $15-25. Prices vary by quality grade, origin, processing level, and market demand. Organic varieties command 20-30% premium pricing."
        },
        {
          question: "How to find spice buyers in Middle East?",
          answer: "Find Middle East spice buyers through: 1) Gulfood Dubai exhibition, 2) Trade missions to UAE, Saudi Arabia, 3) Spices Board buyer-seller meets, 4) B2B platforms like TradeArabia, 5) Indian embassy commercial sections, 6) Local distributors and importers, 7) Halal food trade associations."
        },
        {
          question: "What quality standards are required for spice export?",
          answer: "Spice export quality standards include: moisture content limits, purity standards, absence of aflatoxins, pesticide residue limits, microbiological safety, heavy metal limits, and proper grading. International standards: ISO 22000, HACCP, BRC, and destination-specific requirements like FDA for USA, EU regulations for Europe."
        }
      ]
    },
    {
      title: "Rajkot Export Business",
      icon: <Globe className="h-6 w-6" />,
      image: rajkotExportImage,
      faqs: [
        {
          question: "Who are the top exporters in Rajkot?",
          answer: "Rajkot's top exporters include agricultural product exporters, textile manufacturers, engineering goods suppliers, and chemical exporters. Major export categories: groundnuts, cumin, cotton, diesel engines, auto parts, and pharmaceuticals. Leading exporters maintain international quality certifications and have established global buyer networks."
        },
        {
          question: "What products are exported from Rajkot port?",
          answer: "Major exports from Rajkot include groundnuts, cumin seeds, cotton, textile products, diesel engines, auto components, chemicals, pharmaceuticals, and engineering goods. Rajkot is known as the hub for groundnut oil, cumin processing, and diesel engine manufacturing. Products are shipped through Kandla and Mundra ports."
        },
        {
          question: "How to get export license in Rajkot?",
          answer: "Export license in Rajkot: 1) Apply for IEC code through DGFT office, 2) Submit required documents (PAN, bank certificate, company registration), 3) Pay prescribed fees, 4) Product-specific licenses from concerned authorities, 5) Register with Export Promotion Councils, 6) Obtain necessary quality certifications and compliance certificates."
        },
        {
          question: "What is the export procedure from Rajkot to Dubai?",
          answer: "Rajkot to Dubai export procedure: 1) Obtain necessary licenses and certificates, 2) Prepare export documentation, 3) Pre-shipment inspection if required, 4) Customs clearance at origin, 5) Transportation to Kandla/Mundra port, 6) Port handling and loading, 7) Sea freight to Dubai, 8) Customs clearance at Dubai port."
        },
        {
          question: "Which Rajkot companies export groundnuts?",
          answer: "Rajkot groundnut exporters include established agro-processing companies, oil mills, and trading houses. Major exporters process groundnuts into various forms: in-shell, blanched, roasted, and groundnut oil. Export destinations include Southeast Asia, Middle East, Europe, and Africa. Quality standards include aflatoxin testing and food safety compliance."
        },
        {
          question: "How to start import export business in Rajkot?",
          answer: "Starting import-export in Rajkot: 1) Business registration and licenses, 2) IEC code from DGFT, 3) Bank account and credit facilities, 4) Office setup and infrastructure, 5) Product sourcing and supplier relationships, 6) Buyer identification and marketing, 7) Logistics and shipping arrangements, 8) Compliance and documentation systems."
        },
        {
          question: "What are shipping costs from Rajkot to international destinations?",
          answer: "Shipping costs from Rajkot vary by destination and cargo type: Dubai $300-500 per container, Europe $800-1200, USA $1000-1500, Southeast Asia $600-900. Costs include inland transportation to port, port charges, sea freight, and destination handling. LCL shipments cost $50-150 per cubic meter depending on destination."
        },
        {
          question: "How to find international buyers from Rajkot?",
          answer: "Find international buyers from Rajkot through: 1) Trade promotion organizations, 2) Export promotion councils, 3) Government trade missions, 4) International trade fairs, 5) B2B portals, 6) Embassy commercial sections, 7) Industry associations, 8) Direct marketing and networking, 9) Online export platforms."
        },
        {
          question: "What export incentives are available in Rajkot?",
          answer: "Export incentives in Rajkot include: 1) Merchandise Export Incentive Scheme (MEIS), 2) Export promotion capital goods scheme, 3) Advance authorization scheme, 4) Export finance subsidies, 5) State government incentives, 6) GST refunds, 7) Duty drawback schemes, 8) Infrastructure development support."
        },
        {
          question: "How to get export consultancy services in Rajkot?",
          answer: "Export consultancy in Rajkot available through: 1) FIDR export consultants, 2) Private export advisory firms, 3) CA firms specializing in export, 4) Export promotion councils, 5) Industry associations, 6) Government export facilitation centers, 7) Experienced export professionals, 8) International trade consultants."
        }
      ]
    },
    {
      title: "Import-Export Guides",
      icon: <Search className="h-6 w-6" />,
      image: importExportImage,
      faqs: [
        {
          question: "How to start import export business in India?",
          answer: "Starting import-export business: 1) Business registration (proprietorship/partnership/company), 2) Obtain IEC code from DGFT, 3) Open current account with AD bank, 4) Register with Export Promotion Councils, 5) Product selection and market research, 6) Supplier/buyer identification, 7) Compliance setup, 8) Logistics partnerships, 9) Finance arrangements."
        },
        {
          question: "What documents are required for export from India?",
          answer: "Export documents include: 1) Commercial invoice, 2) Packing list, 3) Shipping bill, 4) Bill of lading/Airway bill, 5) Certificate of origin, 6) Quality inspection certificates, 7) Insurance certificate, 8) Bank realization certificate, 9) Export declaration form, 10) Product-specific certificates (phytosanitary, health, etc.)."
        },
        {
          question: "What is the step by step export procedure in India?",
          answer: "Export procedure steps: 1) Receipt of export order, 2) Export contract finalization, 3) Arrangement of finance, 4) Production/procurement of goods, 5) Pre-shipment inspection, 6) Export documentation, 7) Customs clearance, 8) Shipment and insurance, 9) Post-shipment finance, 10) Realization of export proceeds."
        },
        {
          question: "How to get IEC code in India?",
          answer: "IEC code procedure: 1) Apply online on DGFT website, 2) Required documents: PAN card, bank certificate, company registration, 3) Pay application fee Rs. 500, 4) Submit application with digital signature, 5) Processing time 7-10 days, 6) IEC code valid for lifetime, 7) Mandatory for import-export transactions above specified limits."
        },
        {
          question: "What is customs clearance process in India?",
          answer: "Customs clearance process: 1) Filing of shipping bill/bill of entry, 2) Assessment of duty and taxes, 3) Examination of goods (if required), 4) Payment of duties, 5) Out of charge (OOC) from customs, 6) Delivery order collection, 7) Cargo release from port/airport. Digital processing through ICEGATE portal reduces clearance time."
        },
        {
          question: "What are export duty rates in India 2025?",
          answer: "Export duties in India are minimal compared to import duties. Current export duties: Rice (varies by type) 0-20%, Iron ore 30%, Leather products 0%, Textiles 0%, Chemicals (varies) 0-10%. Most manufactured goods have zero export duty to promote exports. Rates subject to change through government notifications."
        },
        {
          question: "How do import export GST rules work in India?",
          answer: "Import-export GST rules: 1) Exports are zero-rated (0% GST), 2) Input tax credit available on export goods, 3) Letter of Undertaking (LUT) for exports without payment, 4) Import goods attract IGST, 5) IGST credit available for registered importers, 6) Export refund claims through GST portal, 7) Compliance with GST return filing."
        },
        {
          question: "What are the best products to export from India in 2025?",
          answer: "Best export products 2025: 1) Pharmaceuticals and drugs, 2) Basmati and non-basmati rice, 3) Spices and seasonings, 4) Textile and garments, 5) Engineering goods, 6) Organic chemicals, 7) Tea and coffee, 8) Leather products, 9) IT services, 10) Gems and jewelry. Market demand and government incentives favor these sectors."
        },
        {
          question: "How to find reliable suppliers for export business?",
          answer: "Finding reliable suppliers: 1) Industry trade shows and exhibitions, 2) Manufacturer directories and B2B portals, 3) Industry associations and chambers, 4) Government supplier databases, 5) Direct factory visits and audits, 6) Reference checks and verification, 7) Sample testing and quality assessment, 8) Supplier certification requirements."
        },
        {
          question: "What export business ideas are profitable in India?",
          answer: "Profitable export ideas: 1) Organic food products, 2) Ayurvedic and herbal products, 3) Handloom and handicrafts, 4) IT and software services, 5) Agricultural machinery, 6) Processed foods, 7) Generic pharmaceuticals, 8) Eco-friendly products, 9) Educational services, 10) Medical equipment and supplies."
        }
      ]
    },
    {
      title: "Patel Impex Services",
      icon: <Phone className="h-6 w-6" />,
      image: patelImpexImage,
      faqs: [
        {
          question: "What services does Patel Impex offer as an exporter?",
          answer: "Patel Impex offers comprehensive export services including agricultural products export, spices trading, rice export, quality sourcing, international logistics, documentation support, market development, and buyer-seller facilitation. We specialize in connecting Indian suppliers with global buyers across 50+ countries with reliable supply chain management."
        },
        {
          question: "How to contact Patel Impex for export deals?",
          answer: "Contact Patel Impex for export deals: Phone: +91 798 41 33 417, Email: info@patelimpex.com, Address: Rajkot, Gujarat, India. We provide 24/7 support for international clients, quick quote responses, and personalized export solutions. Our team handles inquiries in multiple languages for global convenience."
        },
        {
          question: "What products does Patel Impex export from Gujarat?",
          answer: "Patel Impex exports premium agricultural products from Gujarat including basmati rice, non-basmati rice, cumin seeds, coriander seeds, groundnuts, sesame seeds, fennel seeds, and processed spices. We maintain strict quality control, organic certifications, and ensure consistent supply to international markets."
        },
        {
          question: "Why choose Patel Impex as your rice export partner?",
          answer: "Choose Patel Impex for rice export because of our: 1) 14+ years export experience, 2) ISO 9001:2015 certification, 3) Direct sourcing from farms, 4) State-of-the-art processing facilities, 5) Quality assurance labs, 6) Competitive pricing, 7) Reliable delivery schedules, 8) Strong global network, 9) Comprehensive documentation support."
        },
        {
          question: "What makes Patel Impex a trusted spice exporter?",
          answer: "Patel Impex is trusted for spice export due to: 1) FSSAI licensing and certifications, 2) Steam sterilization facilities, 3) Pesticide residue testing, 4) Organic certification capabilities, 5) Proper storage and packaging, 6) Traceability systems, 7) Quality consistency, 8) Timely deliveries, 9) Competitive market rates, 10) Customer satisfaction focus."
        },
        {
          question: "How does Patel Impex ensure export quality standards?",
          answer: "Patel Impex ensures quality through: 1) In-house quality testing laboratories, 2) Third-party inspection services, 3) Regular supplier audits, 4) Good storage practices, 5) Temperature-controlled warehousing, 6) Proper packaging materials, 7) Pre-shipment inspection, 8) International certification compliance, 9) Continuous quality monitoring."
        },
        {
          question: "What countries does Patel Impex export to?",
          answer: "Patel Impex exports to 50+ countries including UAE, Saudi Arabia, Qatar, Kuwait, Oman, Iraq, Yemen, Singapore, Malaysia, Indonesia, Vietnam, Philippines, USA, Canada, UK, Germany, Netherlands, Belgium, Italy, South Africa, Nigeria, Ghana, Kenya, and other global markets."
        },
        {
          question: "How competitive are Patel Impex export prices?",
          answer: "Patel Impex offers competitive export prices through: 1) Direct sourcing eliminating middlemen, 2) Bulk purchasing advantages, 3) Efficient supply chain management, 4) Strategic port locations, 5) Long-term supplier relationships, 6) Economies of scale, 7) Optimized logistics, 8) Flexible payment terms, 9) Volume-based pricing benefits."
        },
        {
          question: "What certifications does Patel Impex hold for exports?",
          answer: "Patel Impex holds key certifications: 1) ISO 9001:2015 for quality management, 2) FSSAI license for food safety, 3) Export house certificate, 4) Organic certification for organic products, 5) Halal certification for Middle East markets, 6) Phytosanitary certification, 7) HACCP compliance, 8) GMP certification for processing facilities."
        },
        {
          question: "How can international buyers partner with Patel Impex?",
          answer: "International buyers can partner with Patel Impex by: 1) Contacting our export team for requirements, 2) Product specification discussions, 3) Sample approval process, 4) Price negotiations and contracts, 5) Quality agreements, 6) Delivery schedule planning, 7) Payment terms finalization, 8) Long-term partnership development, 9) Regular business reviews and expansion opportunities."
        }
      ]
    },
    {
      title: "Global Export Markets & Destinations",
      icon: <Globe className="h-6 w-6" />,
      image: globalExportImage,
      faqs: [
        {
          question: "Which countries import the most rice from India?",
          answer: "Top rice importing countries from India include Saudi Arabia, Iran, UAE, Iraq, Nepal, Bangladesh, Yemen, Jordan, Kuwait, and Qatar. Middle East and South Asian countries constitute 60% of India's rice exports. African markets like Nigeria, Benin, and Togo are emerging destinations for Indian rice exports. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What are the best export destinations for Indian spices?",
          answer: "Major spice export destinations include UAE (25% of total exports), USA, Bangladesh, Saudi Arabia, UK, Germany, Malaysia, Sri Lanka, and Singapore. Turmeric exports go mainly to UAE and Iran, while cumin seeds are exported to UAE, USA, and UK. European markets prefer organic certified spices. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to export agricultural products to USA market?",
          answer: "USA agricultural export requirements: FDA registration, Prior Notice submission, LACF process filing, Bioterrorism Act compliance, pesticide tolerance verification, organic certification (if applicable), nutritional labeling, facility inspection, and FDA import alerts monitoring. Documentation includes phytosanitary certificates and certificates of analysis. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What are European Union import requirements for Indian food products?",
          answer: "EU import requirements include TRACES notification, health certificates, pesticide residue compliance, novel food regulations, organic certification (EU standards), allergen labeling, nutritional declaration, HACCP compliance, and border control inspections. Maximum residue limits (MRL) must be strictly followed for all food products. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "Which Middle East countries have highest demand for Indian exports?",
          answer: "UAE leads Middle East imports from India, followed by Saudi Arabia, Iraq, Iran, Kuwait, Oman, Qatar, Jordan, and Yemen. Key products: rice, spices, tea, textiles, pharmaceuticals, and engineering goods. Halal certification mandatory for food products. Free trade agreements facilitate exports to UAE and other GCC countries. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How profitable is exporting to African markets?",
          answer: "African markets offer high growth potential with 15-20% annual increase in imports from India. Key markets: Nigeria, Ghana, Kenya, Tanzania, South Africa, Egypt, and Morocco. Main exports: rice, pharmaceuticals, textiles, machinery, and automotive parts. Payment terms vary by country, with LC preferred for new markets. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What export opportunities exist in Southeast Asian markets?",
          answer: "Southeast Asia imports $30+ billion annually from India. Major markets: Singapore, Malaysia, Thailand, Indonesia, Vietnam, and Philippines. Key products: refined petroleum, rice, pharmaceuticals, textiles, chemicals, and machinery. ASEAN trade agreements provide preferential access and reduced tariffs for Indian exporters. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to enter Canadian market for Indian food exports?",
          answer: "Canadian food export requirements: CFIA registration, safe food for Canadians regulations compliance, nutritional labeling, bilingual packaging (English/French), organic certification (if applicable), preventive control plans, and traceability systems. Import permits required for certain products. Comprehensive Economic Partnership Agreement benefits available. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What are the shipping costs to major export destinations?",
          answer: "Approximate shipping costs per 20ft container from Indian ports: Dubai $400-600, USA West Coast $1200-1500, Europe $900-1200, Singapore $600-800, Middle East $500-700, Africa $800-1100. Costs vary by port, season, fuel prices, and shipping line. FCL rates are more economical than LCL for large volumes. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "Which emerging markets show potential for Indian exports?",
          answer: "Emerging markets with high potential: Vietnam, Bangladesh, Ethiopia, Tanzania, Morocco, Peru, Colombia, and Central Asian countries. Growth drivers include economic development, population growth, and trade liberalization. Government initiatives like Market Access Initiative support entry into new markets. Risk assessment and payment security crucial for new destinations. For direct export inquiries, contact Patel Impex."
        }
      ]
    },
    {
      title: "Agricultural & Food Export Specialization",
      icon: <FileText className="h-6 w-6" />,
      image: agriculturalExportImage,
      faqs: [
        {
          question: "What are the top agricultural exports from India?",
          answer: "India's top agricultural exports include basmati rice ($4.8B), non-basmati rice ($7.8B), wheat ($2.1B), sugar ($4.6B), tea ($765M), coffee ($1B), spices ($4B), cotton ($2.4B), and oil meals ($2.8B). Agricultural exports constitute 13% of India's total merchandise exports. Government schemes support agricultural export promotion. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to export organic food products from India?",
          answer: "Organic export requirements: NPOP certification from accredited agencies, organic certificate, transaction certificate, scope certificate for processors/exporters, residue analysis reports, organic supply chain maintenance, segregation during storage/transport, and compliance with destination country organic standards (USDA, EU, JAS). India ranks 9th globally in organic agricultural land. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What quality standards are required for wheat export?",
          answer: "Wheat export quality parameters: protein content (minimum 11.5%), moisture content (max 14%), damaged grains (max 6%), foreign matter (max 2.5%), test weight (minimum 78 kg/hl), and absence of insects/pests. Fumigation certificate, phytosanitary certificate, and quality inspection certificate required. Major destinations: Bangladesh, Nepal, UAE, and Africa. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to export pulses and lentils from India?",
          answer: "Pulse export procedure: registration with Agricultural Marketing Advisor, quality specifications compliance, container fumigation, phytosanitary certification, and customs clearance. Major pulse exports: chickpeas, lentils, kidney beans, and black gram. Key destinations: USA, UAE, Canada, Nepal, and Bangladesh. Export policies vary by pulse type and destination. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What are the procedures for tea export from India?",
          answer: "Tea export requirements: Tea Board registration, blending/packaging license, quality mark, garden mark (for specific gardens), export permit, quality certificate, and compliance with destination country food safety standards. Major tea exports: black tea, green tea, and specialty teas. Key markets: Russia, Iran, UAE, USA, and UK. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to export coffee beans from India?",
          answer: "Coffee export procedure: Coffee Board registration, quality certification, cupping certificate, ICO certificate of origin, phytosanitary certificate, and compliance with importing country standards. Indian coffee varieties: Arabica and Robusta. Major destinations: Italy, Germany, Russia, Belgium, and USA. Specialty coffee commands premium prices. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What documentation is needed for sugar export?",
          answer: "Sugar export documents: mill-wise quota allocation, export permit from DGFT, quality certificate, polarization certificate, ICUMSA standards compliance, customs clearance, and shipping documentation. Export duty may apply based on domestic prices. Major destinations: Bangladesh, Sri Lanka, UAE, and Africa. Raw and refined sugar have different specifications. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to export groundnuts from Rajkot?",
          answer: "Groundnut export from Rajkot: quality specifications (oil content, aflatoxin levels, moisture content), processing in registered facilities, fumigation certificate, phytosanitary certificate, quality inspection, and export documentation. Rajkot accounts for 40% of India's groundnut exports. Major forms: in-shell, blanched, and splits. Key destinations: Indonesia, Vietnam, Philippines, and Malaysia. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What are the best practices for food packaging for export?",
          answer: "Food export packaging requirements: food-grade materials, moisture resistance, pest-proof design, appropriate labeling, nutrition facts, ingredient declaration, allergen warnings, batch coding, expiry dates, and compliance with destination country packaging regulations. Vacuum packaging, modified atmosphere packaging for extended shelf life. Sustainable packaging increasingly preferred. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to maintain cold chain for agricultural exports?",
          answer: "Cold chain management: temperature-controlled warehouses, refrigerated transportation, reefer containers, temperature monitoring devices, cold storage at ports, proper handling procedures, and documentation of temperature logs. Critical for fruits, vegetables, dairy, and meat products. Investment in cold chain infrastructure essential for quality maintenance and export success. For direct export inquiries, contact Patel Impex."
        }
      ]
    },
    {
      title: "Export Business Development & Strategy",
      icon: <Search className="h-6 w-6" />,
      image: exportConsultationImage,
      faqs: [
        {
          question: "How to develop a successful export business plan?",
          answer: "Export business plan components: market research and analysis, product selection and positioning, target market identification, competitive analysis, pricing strategy, distribution channels, marketing plan, financial projections, risk assessment, regulatory compliance, operational plan, and growth strategy. Government schemes like MEIS provide incentives. Professional consultation recommended for complex markets. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What market research is needed before starting exports?",
          answer: "Essential market research: target country economic indicators, import statistics, competitor analysis, price benchmarking, regulatory requirements, cultural preferences, buyer behavior, distribution channels, payment methods, seasonal demand patterns, trade barriers, and market entry strategies. Government trade offices and commercial sections provide market intelligence. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to identify and connect with international buyers?",
          answer: "Buyer identification strategies: trade directories and databases, B2B platforms (Alibaba, IndiaMART, TradeIndia), international trade fairs, government trade missions, embassy commercial sections, industry associations, export promotion councils, networking events, social media platforms, and direct marketing. Due diligence essential before establishing business relationships. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What are the most effective export marketing strategies?",
          answer: "Export marketing strategies: digital marketing and SEO, trade show participation, product sampling programs, relationship marketing, partnership with local distributors, cultural adaptation of marketing materials, multilingual websites, social media engagement, content marketing, influencer partnerships, and trade publication advertising. Cultural sensitivity crucial for success. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to negotiate export contracts and terms?",
          answer: "Export contract negotiation: price terms (FOB, CIF, CFR), payment methods (LC, TT, DP), delivery schedules, quality specifications, packaging requirements, inspection procedures, force majeure clauses, dispute resolution mechanisms, warranty terms, intellectual property protection, and compliance requirements. Legal review recommended for complex contracts. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What export pricing strategies work best?",
          answer: "Export pricing strategies: cost-plus pricing, competitive pricing, value-based pricing, penetration pricing for new markets, skimming pricing for premium products, psychological pricing, bundle pricing, seasonal pricing adjustments, volume discounts, and currency hedging considerations. Factor in all costs including logistics, insurance, and compliance. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to manage export risks effectively?",
          answer: "Export risk management: political risk assessment, currency fluctuation hedging, credit risk evaluation, shipping insurance, product liability coverage, compliance risk mitigation, supply chain risk management, documentation accuracy, payment security measures, and regular risk monitoring. Export credit insurance available through ECGC. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What digital tools can help grow export business?",
          answer: "Digital export tools: CRM systems for customer management, ERP for operations, trade finance platforms, shipping and logistics software, compliance management systems, market intelligence platforms, language translation tools, video conferencing for meetings, e-commerce platforms, and digital marketing tools. Technology adoption crucial for competitiveness. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to scale export operations efficiently?",
          answer: "Export scaling strategies: process automation, technology adoption, team expansion, facility upgrades, capacity building, financial planning, supplier network expansion, market diversification, product line extension, strategic partnerships, distribution channel development, and quality system improvements. Gradual scaling reduces risks while maximizing opportunities. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What are the key success factors for export business?",
          answer: "Export success factors: consistent quality standards, competitive pricing, reliable delivery, excellent customer service, cultural understanding, regulatory compliance, financial stability, innovation capabilities, strong relationships, market adaptability, continuous learning, and professional management. Long-term commitment and patience essential for building successful export business. For direct export inquiries, contact Patel Impex."
        }
      ]
    },
    {
      title: "International Trade Events & Networking",
      icon: <Globe className="h-6 w-6" />,
      image: tradeFairImage,
      faqs: [
        {
          question: "Which international trade fairs are best for Indian exporters?",
          answer: "Major trade fairs: India International Trade Fair (IITF), Gulfood Dubai, Anuga Germany, SIAL Paris, Summer Fancy Food USA, Foodex Japan, Canton Fair China, Arab Health Dubai, Automechanika Germany, and CPhI Worldwide. Government provides financial assistance for participation through MAI scheme. Sector-specific fairs offer better networking opportunities. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to prepare for international trade exhibitions?",
          answer: "Trade fair preparation: booth design and setup, marketing materials preparation, product samples and catalogs, team training, appointment scheduling, business card design, promotional items, demonstration equipment, lead capture system, follow-up strategy, cultural etiquette training, and language preparation. Pre-show marketing increases visitor traffic to booth. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What networking opportunities exist for exporters?",
          answer: "Export networking opportunities: chamber of commerce events, industry association meetings, trade promotion organization programs, business delegations, embassy commercial events, export-import club meetings, online business communities, professional conferences, buyer-seller meets, and reverse buyer missions. Regular networking builds valuable business relationships. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How do government trade missions help exporters?",
          answer: "Government trade mission benefits: market access facilitation, business matching services, regulatory guidance, meeting arrangements with importers, trade barrier removal, policy advocacy, market intelligence sharing, networking opportunities, and promotional support. Ministry of External Affairs and Commerce organize regular trade missions to target markets. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What role do Export Promotion Councils play?",
          answer: "Export Promotion Council functions: market development, trade promotion, export assistance, statistics and research, quality improvement, product development, export training, trade dispute resolution, government liaison, and international cooperation. Sector-specific EPCs like Spices Board, Tea Board, and APEDA provide specialized support. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to leverage Indian embassy commercial sections?",
          answer: "Embassy commercial section services: market information, business facilitation, trade inquiry handling, investment promotion, commercial dispute assistance, trade delegation support, networking facilitation, regulatory guidance, and trade event organization. Commercial attachés provide valuable on-ground support in target markets. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What online platforms help connect with international buyers?",
          answer: "B2B platforms for exports: Alibaba.com, IndiaMART, TradeIndia, ExportersIndia, Global Sources, EC21, TradeKey, ImportersHub, Manufacturers.com, and IndiaBizPortal. Government platforms include India Trade Portal and FIDR. Professional profile and regular updates essential for visibility. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to participate in reverse buyer missions?",
          answer: "Reverse buyer mission participation: registration with organizing agencies, business profile submission, meeting appointment requests, product presentation preparation, negotiation readiness, follow-up planning, and relationship building. Export promotion councils and trade bodies organize regular reverse missions bringing international buyers to India. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What cultural considerations are important in international business?",
          answer: "Cultural considerations: communication styles, business etiquette, negotiation approaches, relationship building methods, gift-giving practices, dress codes, meeting protocols, time concepts, decision-making processes, and religious/cultural sensitivities. Cultural intelligence crucial for building lasting business relationships in international markets. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to build long-term relationships with international partners?",
          answer: "Relationship building strategies: regular communication, reliability in commitments, cultural respect, personal meetings, mutual benefit focus, problem-solving approach, transparency in dealings, celebrating partnerships, continuous value addition, and adaptation to partner needs. Long-term relationships provide stability and growth opportunities in export business. For direct export inquiries, contact Patel Impex."
        }
      ]
    },
    {
      title: "Export Finance & Banking Solutions",
      icon: <FileText className="h-6 w-6" />,
      image: exportFinanceImage,
      faqs: [
        {
          question: "What export financing options are available for Indian exporters?",
          answer: "Export financing options: pre-shipment credit, post-shipment credit, export factoring, forfaiting, ECGC insurance, trade finance facilities, working capital loans, term loans for capacity expansion, and government schemes like NIRVIK. Interest rates generally lower than domestic lending. Collateral requirements vary by bank and facility type. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How do Letters of Credit work in export transactions?",
          answer: "Letter of Credit process: importer applies to bank for LC issuance, advising bank notifies exporter, exporter ships goods per LC terms, exporter presents documents to bank, bank verifies documents and releases payment, importer receives documents for cargo clearance. Types include sight LC, usance LC, confirmed LC, and standby LC. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What are the different payment methods in export business?",
          answer: "Export payment methods: Letter of Credit (most secure), Telegraphic Transfer (fastest), Documents against Payment (moderate risk), Documents against Acceptance (higher risk), and advance payment (lowest risk for exporter). Choice depends on relationship, country risk, and transaction value. Payment terms negotiable based on business relationship. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How does export credit insurance work?",
          answer: "Export credit insurance coverage: political risks (war, currency inconvertibility, government actions), commercial risks (buyer insolvency, payment default), pre-shipment risks, and post-shipment risks. ECGC provides coverage up to 90% of export value. Premium rates vary by country and buyer risk rating. Claims settlement subject to policy terms. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What is the role of Export-Import Bank of India?",
          answer: "EXIM Bank functions: export credit, project financing, overseas investment finance, technology transfer facilitation, research and analysis, government advisory services, line of credit to foreign governments, and buyer's credit arrangements. EXIM Bank supports large-value exports and overseas projects. Special schemes for SME exporters available. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to manage currency fluctuation risks in exports?",
          answer: "Currency risk management: forward contracts, currency options, natural hedging through matching, invoice currency selection, payment term negotiation, and regular monitoring. RBI guidelines govern hedging transactions. Most banks offer hedging products. Hedging costs should be factored in export pricing. Speculation prohibited under FEMA regulations. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What are Export Credit Guarantee Corporation benefits?",
          answer: "ECGC benefits: export credit insurance, bank guarantee insurance, overseas investment insurance, exchange rate fluctuation coverage, whole turnover policies, specific shipment policies, and buyer financing schemes. Coverage available for commercial and political risks. Premium rates competitive compared to private insurers. Claims settlement relatively faster for government agency. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to negotiate better export finance terms with banks?",
          answer: "Bank negotiation strategies: relationship building, transaction volume commitment, cross-selling opportunities, collateral offering, guarantor arrangements, consortium banking for large limits, government scheme utilization, and competitive bidding. Strong financials and export track record improve negotiating position. Multiple banking relationships provide leverage. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What export incentive schemes provide financial benefits?",
          answer: "Export incentive schemes: Merchandise Exports from India Scheme (MEIS), Export Promotion Capital Goods (EPCG), Advance Authorization, Duty Free Import Authorization (DFIA), and interest equalization schemes. Scrips can be sold for cash realization. Compliance with scheme conditions mandatory. Regular policy changes require updated knowledge. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to access working capital for export business?",
          answer: "Working capital sources: export packing credit, export bills purchasing/discounting, post-shipment credit, trade finance facilities, cash credit against export orders, and government subsidy schemes. Interest rates under priority sector lending generally favorable. Collateral requirements include export orders, LC, and other securities. Regular monitoring by banks required. For direct export inquiries, contact Patel Impex."
        }
      ]
    },
    {
      title: "Quality Control & International Standards",
      icon: <Search className="h-6 w-6" />,
      image: qualityControlImage,
      faqs: [
        {
          question: "What international quality standards are required for exports?",
          answer: "International quality standards: ISO 9001 for quality management, ISO 22000 for food safety, HACCP for hazard analysis, BRC for food safety, IFS for food standards, FSSC 22000 for food safety, GLOBALG.A.P for good agricultural practices, organic certifications (USDA, EU, JAS), Halal certification, and destination-specific standards. Multiple certifications often required for global markets. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to get ISO certification for export business?",
          answer: "ISO certification process: management system implementation, document preparation, internal audits, management review, certification body selection, stage-1 and stage-2 audits, non-conformity correction, certificate issuance, and annual surveillance audits. Implementation time 6-12 months. Costs vary by organization size and scope. Consultant support available for implementation. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What food safety certifications are needed for export?",
          answer: "Food safety certifications: FSSAI license (mandatory in India), HACCP certification, ISO 22000, BRC Global Standard, IFS Food Standard, FSSC 22000, SQF certification, and destination-specific approvals. FDA registration required for USA exports. EU requires HACCP compliance. Certification bodies must be accredited by IAF members. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to ensure consistent quality in export products?",
          answer: "Quality assurance measures: written quality procedures, incoming material inspection, in-process quality checks, finished product testing, statistical quality control, supplier quality management, equipment calibration, staff training, corrective action systems, and continuous improvement programs. Third-party inspections for critical parameters. Customer feedback integration essential. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What laboratory testing is required for food exports?",
          answer: "Food export testing: microbiological analysis, chemical residue testing, nutritional analysis, heavy metal testing, mycotoxin testing, allergen testing, shelf-life studies, packaging migration testing, and sensory evaluation. NABL accredited laboratories preferred. Testing frequency varies by product and destination. Test reports valid for specific periods. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to get organic certification for export products?",
          answer: "Organic certification process: NPOP registration, inspection agency selection, organic system plan preparation, on-site inspection, compliance verification, certificate issuance, and annual renewals. Transition period 3 years for agricultural products. Separate certification for processing/handling operations. International equivalence available for major markets. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What are Good Manufacturing Practices (GMP) for exports?",
          answer: "GMP requirements: facility design and maintenance, equipment maintenance, personnel hygiene, raw material quality, production process controls, packaging and labeling, storage and distribution, record keeping, complaint handling, and recall procedures. Regular audits by internal and external parties. Training programs for all personnel. Documentation essential for compliance. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to handle product recalls in export markets?",
          answer: "Product recall procedures: immediate notification to authorities, traceability system activation, customer communication, product withdrawal from market, root cause analysis, corrective action implementation, regulatory reporting, and insurance claim processing. Recall insurance coverage available. Recall simulation exercises recommended. Communication plan crucial for reputation management. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "What inspection services are available for exporters?",
          answer: "Export inspection services: pre-shipment inspection by EIC, third-party inspection by SGS/Intertek, buyer-nominated surveys, quality assurance inspections, quantity verification, packaging inspection, container loading supervision, and fumigation supervision. Inspection costs vary by service provider and complexity. Reports accepted by most international buyers. For direct export inquiries, contact Patel Impex."
        },
        {
          question: "How to implement traceability systems for exports?",
          answer: "Traceability system components: unique product identification, batch/lot coding, supply chain documentation, record keeping systems, supplier verification, internal tracking procedures, and recall capabilities. Digital systems provide better accuracy and speed. Blockchain technology emerging for enhanced traceability. Regulatory requirements vary by product and destination. For direct export inquiries, contact Patel Impex."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const filteredSections = faqSections.map(section => ({
    ...section,
    faqs: section.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.faqs.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb className="mb-8">
            <BreadcrumbList className="text-white/80">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white font-semibold">Export FAQs</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

            <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Top Indian Exporters and FAQs
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Comprehensive guide to India's export business, procedures, and market insights
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">200+ Expert Answers</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Export Procedures</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Market Insights</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Trade Guidelines</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">11 Categories</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">SEO Optimized</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg text-lg"
            />
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {filteredSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Section Image */}
              {section.image && (
                <div className="h-64 overflow-hidden">
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{section.title}</h2>
                    <p className="text-blue-100 mt-2">{section.faqs.length} frequently asked questions</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4">
                  {section.faqs.map((faq, faqIndex) => {
                    const globalIndex = sectionIndex * 1000 + faqIndex;
                    return (
                      <div key={faqIndex} className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full text-left p-6 bg-slate-50 hover:bg-slate-100 transition-colors flex justify-between items-center"
                        >
                          <h3 className="text-lg font-semibold text-slate-800 pr-4">{faq.question}</h3>
                          {openFAQ === globalIndex ? (
                            <ChevronUp className="h-5 w-5 text-blue-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                          )}
                        </button>
                        {openFAQ === globalIndex && (
                          <div className="p-6 bg-white border-t border-slate-200">
                             <p className="text-slate-600 leading-relaxed mb-4">{faq.answer}</p>
                            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-xl border-l-4 border-blue-500">
                              <p className="text-blue-800 font-semibold mb-3">
                                For direct export inquiries, contact{" "}
                                <Link to="/contact" className="text-blue-600 hover:text-blue-800 underline font-bold">
                                  Patel Impex
                                </Link>
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <Link to="/services" className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">
                                  Our Services
                                </Link>
                                <Link to="/products" className="text-sm bg-teal-100 text-teal-700 px-3 py-1 rounded-full hover:bg-teal-200 transition-colors">
                                  Products
                                </Link>
                                <Link to="/more" className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-200 transition-colors">
                                  Export Guides
                                </Link>
                                <Link to="/inquiry" className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full hover:bg-orange-200 transition-colors">
                                  Get Quote
                                </Link>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get personalized export assistance from our experienced team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Our Experts
            </Link>
            <Link
              to="/inquiry"
              className="bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white/20"
            >
              Get Export Quote
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
