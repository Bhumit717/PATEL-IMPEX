
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Search, Globe, FileText, Phone } from "lucide-react";
import { Link } from "react-router-dom";
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
              <span className="bg-white/20 px-4 py-2 rounded-full">50+ Expert Answers</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Export Procedures</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Market Insights</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Trade Guidelines</span>
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
                              <p className="text-blue-800 font-semibold">
                                For direct export inquiries, contact{" "}
                                <Link to="/" className="text-blue-600 hover:text-blue-800 underline font-bold">
                                  Patel Impex
                                </Link>
                              </p>
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
