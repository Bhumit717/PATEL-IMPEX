import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Wheat, Wrench, Shirt, Coffee, Gem, Cpu, Pill, Tractor, Package, Leaf, Recycle, ArrowRight, TrendingUp, Globe, Star, Eye, Download, MessageCircle, Phone, Mail, MapPin, Calendar, Award, CheckCircle, Users, Target, Zap, Sparkles, Heart, ThumbsUp, Clock, Shield, Calculator, Truck, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const Products = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadCatalog = () => {
    try {
      // Create a simple PDF-like content
      const pdfContent = `
%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/ProcSet [/PDF /Text]
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 80
>>
stream
BT
/F1 12 Tf
50 750 Td
(Patel Exports - Product Catalog) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000053 00000 n 
0000000125 00000 n 
0000000348 00000 n 
0000000477 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
554
%%EOF`;

      // Create blob and download
      const blob = new Blob([pdfContent], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Patel-Exports-Catalog.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      // Show success message
      console.log('Catalog downloaded successfully!');
      alert('Product catalog downloaded successfully!');
    } catch (error) {
      console.error('Error downloading catalog:', error);
      alert('Error downloading catalog. Please try again.');
    }
  };

  const handleViewCertificates = () => {
    // Open certificates in new window
    const certificateWindow = window.open('', '_blank');
    certificateWindow?.document.write(`
      <html>
        <head><title>Patel Exports - Certifications</title></head>
        <body style="font-family: Arial, sans-serif; padding: 20px; background: #111;">
          <h1 style="color: #8b5cf6;">Our Certifications</h1>
          <div style="color: #ccc;">
            <h2>ISO 9001:2015 Quality Management</h2>
            <p>Certificate ID: ISO-9001-2024-PE-001</p>
            <p>Valid Until: December 2025</p>
            <hr>
            <h2>HACCP Food Safety Certification</h2>
            <p>Certificate ID: HACCP-2024-PE-002</p>
            <p>Valid Until: November 2025</p>
            <hr>
            <h2>Export House Certificate</h2>
            <p>Certificate ID: EH-2024-PE-003</p>
            <p>Valid Until: March 2026</p>
          </div>
        </body>
      </html>
    `);
  };

  const categories = [
    {
      icon: Wheat,
      name: "Agricultural Products & Food",
      description: "Premium quality agricultural exports including spices, tea, rice, and processed foods meeting international standards.",
      items: ["Basmati & Non-Basmati Rice", "Premium Spices & Herbs", "Tea & Coffee Beans", "Pulses & Lentils", "Fresh & Dried Fruits", "Processed Food Products"],
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
      stats: { countries: "30+", volume: "$50M+", clients: "200+" },
      gradient: "from-ai-primary to-ai-secondary",
      hoverGradient: "from-ai-secondary to-ai-accent",
      badge: "Organic Certified",
      price: "25.99",
      currency: "USD",
      rating: 4.8,
      reviewCount: 156,
      products: [
        { name: "Basmati Rice Premium", image: "https://shop.woodlandfoods.com/img/WF_Images/x44-white-indian-basmati-rice-main.jpg", link: "/more/basmati-rice-export" },
        { name: "Non-Basmati Rice", image: "https://www.knamfoods.com/wp-content/uploads/2022/08/Untitled-design-91-1.png", link: "/more/non-basmati-rice-export" },
        { name: "Wheat Grains", image: "https://www.cspi.org/sites/default/files/styles/700x530/public/2021-12/goForWholeGrains_hero_700x530.jpg.webp?itok=CVvGIloW", link: "/more/wheat-export" },
        { name: "Turmeric Powder", image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/15065/conversions/fa246ce0-054b-4892-bf30-5eb43cd938aa-thumb.jpg", link: "/more/turmeric-export" },
        { name: "Red Chili", image: "https://www.veggycation.com.au/siteassets/veggycationvegetable/chillies-red.jpg", link: "/more/red-chili-export" },
        { name: "Cumin Seeds", image: "https://cdn.britannica.com/59/219359-050-662D86EA/Cumin-Spice.jpg", link: "/more/cumin-export" },
        { name: "Assam Tea", image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Assam-Tee_SFTGFOP1.jpg", link: "/seo/tea-export-services" },
        { name: "Arabica Coffee", image: "https://chariotcoffee.com/cdn/shop/articles/f6786ff3de_1445x.jpg?v=1676455187", link: "/seo/coffee-export-services" },
        { name: "Mixed Pulses", image: "https://www.shutterstock.com/image-photo/topview-mixed-beans-pulses-isolated-600w-2531503729.jpg", link: "/seo/pulses-export-services" },
        { name: "Organic Sugar", image: "https://www.sweetenerproducts.com/wp-content/uploads/2021/05/brown-beet-sugar-cane-sugar-slide10.jpg", link: "/seo/sugar-export-services" },
      ],
    },
    {
      icon: Pill,
      name: "Pharma & Pesticides",
      description: "High-quality pharmaceutical products, medical supplies, and pesticides meeting global regulatory standards.",
      items: ["Pharmaceuticals", "Medical Supplies", "Pesticides", "Fertilizers", "Veterinary Products", "Health Supplements"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
      stats: { countries: "20+", volume: "$30M+", clients: "120+" },
      gradient: "from-ai-accent to-ai-cyber",
      hoverGradient: "from-ai-cyber to-ai-primary",
      badge: "FDA Approved",
      price: "85.99",
      currency: "USD",
      rating: 4.7,
      reviewCount: 98,
      products: [
        { name: "Pharmaceutical Tablets", image: "https://iimtu.edu.in/blog/wp-content/uploads/2023/10/Tablets-1-1.jpg", link: "/seo/pharmaceutical-export" },
        { name: "Medical Syringes", image: "https://cdn.prod.website-files.com/64c8b8901ad20c3518e174ff/656e37cdcb39a762f1526fa2_essential-healthcare-tools-an-overview-of-disposable-medical-syringe-types-and-uses.png", link: "/seo/pharmaceutical-export" },
        { name: "Organic Pesticides", image: "https://cdn.mos.cms.futurecdn.net/LXNSxTKXh279Lmg7pnNvUn.jpg", link: "/products/organic-pesticides-export" },
        { name: "Bio Fertilizers", image: "https://cdn1.byjus.com/wp-content/uploads/2018/11/biology/2017/05/27073155/Biofertilizers.png", link: "/products/bio-fertilizers-export" },
        { name: "Veterinary Medicines", image: "https://www.fda.gov/files/styles/medium_3/public/vet%20script..jpg?itok=31Yn7AFD", link: "/products/veterinary-medicines-export" },
        { name: "Health Capsules", image: "https://m.media-amazon.com/images/I/61oVGW4AjDL._AC_UF1000,1000_QL80_.jpg", link: "/products/health-capsules-export" },
        { name: "Surgical Equipment", image: "https://grey-medical.com/wp-content/uploads/2024/09/main-image.jpg", link: "/seo/pharmaceutical-export" },
        { name: "Diagnostic Kits", image: "https://blog.labtag.com/wp-content/uploads/2021/12/0146-Diagnostic-Kits-678-x-428px.jpg", link: "/products/diagnostic-kits-export" },
        { name: "Herbal Supplements", image: "https://medlineplus.gov/images/HerbalMedicine_share.jpg", link: "/products/herbal-supplements-export" },
        { name: "Medical Gloves", image: "https://m.media-amazon.com/images/I/61gC2wrxjrL.jpg", link: "/products/medical-gloves-export" },
      ],
    },
    {
      icon: Tractor,
      name: "Agriculture Equipment & Vehicles",
      description: "Heavy-duty agricultural machinery and vehicles designed for efficient farming operations worldwide.",
      items: ["Tractors", "Harvesters", "Farm Equipment", "Irrigation Systems", "Agricultural Vehicles", "Farming Tools"],
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=600&q=80",
      stats: { countries: "15+", volume: "$80M+", clients: "85+" },
      gradient: "from-ai-cyber to-ai-neon",
      hoverGradient: "from-ai-neon to-ai-secondary",
      badge: "Heavy Duty",
      price: "12999.99",
      currency: "USD",
      rating: 4.6,
      reviewCount: 67,
      products: [
        { name: "Mini Tractor", image: "https://www.massimomotor.com/Images/items/Y6301257_media-Red-2.jpg?resizeid=3&resizeh=200&resizew=200", link: "/products/mini-tractor-export" },
        { name: "Combine Harvester", image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Corn_combine_harvest_with_grain_cart-4.jpg", link: "/products/combine-harvester-export" },
        { name: "Drip Irrigation", image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Button_dripper.JPG", link: "/products/drip-irrigation-export" },
        { name: "Cultivator", image: "https://cdn.britannica.com/84/73384-050-6DFF3413/crop-cultivator.jpg", link: "/products/cultivator-export" },
        { name: "Sprinkler System", image: "https://www.agrivi.com/wp-content/uploads/2017/11/wepik-2022513-9459.jpg", link: "/products/sprinkler-system-export" },
        { name: "Seeding Machine", image: "https://m.media-amazon.com/images/I/41LLBhP-NvL._AC_UF894,1000_QL80_.jpg", link: "/products/seeding-machine-export" },
        { name: "Power Tiller", image: "https://www.yanmar.com/ltc/global/agri/tiller/img/e39e061ab5/img_index_01.jpg", link: "/products/power-tiller-export" },
        { name: "Thresher", image: "https://www.tractorcorner.com/ug/wp-content/uploads/sites/22/2024/09/Rice-Thresher.webp", link: "/products/thresher-export" },
        { name: "Farm Trailer", image: "https://img.hobbyfarms.com/wp-content/uploads/2019/05/17153721/wooden-farm-trailer-Daniel-Johnson.jpg", link: "/products/farm-trailer-export" },
        { name: "Hand Tools", image: "https://jcblhandtools.com/wp-content/uploads/2024/12/Guide-to-Workshop-Hand-Tools-2.webp", link: "/products/hand-tools-export" },
      ],
    },
    {
      icon: Shirt,
      name: "Textiles & Garments",
      description: "High-quality textiles and readymade garments from cotton fabrics to silk products, serving global fashion markets.",
      items: ["Cotton & Silk Fabrics", "Readymade Garments", "Home Textiles & Furnishings", "Technical Textiles", "Yarn & Fibers", "Fashion Accessories"],
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&q=80",
      stats: { countries: "25+", volume: "$75M+", clients: "300+" },
      gradient: "from-ai-secondary to-ai-accent",
      hoverGradient: "from-ai-accent to-ai-primary",
      badge: "Premium Quality",
      price: "45.99",
      currency: "USD",
      rating: 4.9,
      reviewCount: 243,
      products: [
        { name: "Cotton Fabric", image: "https://zelouffabrics.com/cdn/shop/articles/cotton_fabric.png?v=1689006116", link: "/seo/cotton-export-services" },
        { name: "Silk Sarees", image: "http://www.lashkaraa.com/cdn/shop/files/LB3490_7b9f3a1d-048f-4b65-afb1-7d966286b07f.jpg?v=1718415837&width=2048", link: "/more/textile-export" },
        { name: "Men's T-Shirts", image: "https://hips.hearstapps.com/hmg-prod/images/mhl-tshirts-mackweldon-0260-688a641b198e3.jpg?crop=1.00xw:1.00xh;0,0&resize=1120:*", link: "/more/textile-export" },
        { name: "Bed Linen", image: "https://www.linenme.com/sites/default/files/styles/product_catalog/public/products/02991.jpg?itok=lJkpCqKF", link: "/products/bed-linen-export" },
        { name: "Designer Fabrics", image: "http://www.fabricsgalore.co.uk/cdn/shop/articles/Designer_Collection_Tile.jpg?v=1706871928", link: "/products/designer-fabrics-export" },
        { name: "Cotton Yarn", image: "https://d2q9kw5vp0we94.cloudfront.net/i/_/promo/2019/se19/CottonYarn/LearningCenter_Cotton_Dishie.png", link: "/products/cotton-yarn-export" },
        { name: "Denim Jeans", image: "https://www.thefactshop.com/wp-content/uploads/2016/11/denim-jeans-facts.webp", link: "/more/textile-export" },
        { name: "Curtains", image: "https://m.media-amazon.com/images/I/71e7ikiKhEL._AC_UF894,1000_QL80_.jpg", link: "/products/curtains-export" },
        { name: "Towel Sets", image: "http://americansoftlinen.com/cdn/shop/files/American-Soft-Linen-Salem-6-Piece-Best-Bath-Towels-Set-100-Cotton-Luxury-Turkish-Towels-with-10-Different-Colors-Rockridge-Gray-1.jpg?v=1736256527&width=2048", link: "/products/towel-sets-export" },
        { name: "Wool Blankets", image: "https://www.americanblanketcompany.com/cdn/shop/files/Recycled_Wool_Blanket_Stack-1_2000x.jpg?v=1744049178", link: "/products/wool-blankets-export" },
      ],
    },
    {
      icon: Package,
      name: "Plastic Products",
      description: "Durable plastic products and packaging materials for industrial and consumer applications worldwide.",
      items: ["Plastic Containers", "Packaging Materials", "Industrial Plastics", "Household Items", "Medical Plastics", "Automotive Parts"],
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80",
      stats: { countries: "25+", volume: "$45M+", clients: "180+" },
      gradient: "from-ai-secondary to-ai-accent",
      hoverGradient: "from-ai-accent to-ai-cyber",
      badge: "BPA Free",
      price: "15.99",
      currency: "USD",
      rating: 4.5,
      reviewCount: 134,
      products: [
        { name: "Storage Containers", image: "https://cdn.thewirecutter.com/wp-content/media/2025/08/BEST-STORAGE-CONTAINERS-SUB-2048px-6052-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp", link: "/products/storage-containers-export" },
        { name: "Packaging Boxes", image: "https://m.media-amazon.com/images/I/71m3sK0Tf3L.jpg", link: "/products/packaging-boxes-export" },
        { name: "Industrial Pipes", image: "https://supremepipe.com/wp-content/uploads/2023/02/detail-industrial-pipes-2021-08-26-16-38-06-utc-1.jpg", link: "/products/industrial-pipes-export" },
        { name: "Household Buckets", image: "https://m.media-amazon.com/images/I/61XQ8EeCFqL.jpg", link: "/products/household-buckets-export" },
        { name: "Medical Containers", image: "https://assets.fishersci.com/TFS-Assets/CCG/product-images/F179857~p.eps-650.jpg", link: "/products/medical-containers-export" },
        { name: "Automotive Bumpers", image: "https://media.istockphoto.com/id/472463980/photo/three-different-car-bumpers-stacked.jpg?s=612x612&w=0&k=20&c=yLe9YIsk4sPTJtNzJSDJT65Ox8h2jrPCWNcDvDTwshg=", link: "/products/automotive-bumpers-export" },
        { name: "Plastic Bottles", image: "https://bernardlab.com/wp-content/uploads/2021/01/plastic-bottles.png", link: "/products/plastic-bottles-export" },
        { name: "Food Containers", image: "https://m.media-amazon.com/images/I/91bH7bqQAXL.jpg", link: "/products/food-containers-export" },
        { name: "Plastic Sheets", image: "https://m.media-amazon.com/images/I/817UYIZoRzS.jpg", link: "/products/plastic-sheets-export" },
        { name: "Molded Parts", image: "https://www.simplexitypd.com/wp-content/uploads/2020/01/PLASTIC-INJECTION-MOLDING-PARTS--scaled.jpeg", link: "/products/molded-parts-export" },
      ],
    },
    {
      icon: Wrench,
      name: "Engineering & Industrial",
      description: "Precision-engineered products including machinery, auto components, and industrial equipment for global manufacturing.",
      items: ["Industrial Machinery", "Auto Components & Parts", "Engineering Tools", "Steel & Metal Products", "Electronics Components", "Technical Equipment"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      stats: { countries: "20+", volume: "$100M+", clients: "150+" },
      gradient: "from-ai-accent to-ai-cyber",
      hoverGradient: "from-ai-cyber to-ai-neon",
      badge: "ISO Certified",
      price: "299.99",
      currency: "USD",
      rating: 4.7,
      reviewCount: 89,
      products: [
        { name: "CNC Machine", image: "https://www.fastems.com/wp-content/uploads/2021/08/AdobeStock_172041052-scaled.jpeg", link: "/products/cnc-machine-export" },
        { name: "Power Drill Set", image: "https://m.media-amazon.com/images/I/71GhQ-RE6PL.jpg", link: "/products/power-drill-set-export" },
        { name: "Industrial Motor", image: "https://scdn.emotorsdirect.ca/img/knowledge-center/hero/choosing-the-right-industrial-motor-for-your-application.jpeg", link: "/products/industrial-motor-export" },
        { name: "Engine Parts", image: "https://i0.wp.com/www.theengineeringchoice.com/wp-content/uploads/2024/06/Car-Engine-Parts-Diagram-With-Names.webp?resize=840%2C473&ssl=1", link: "/products/engine-parts-export" },
        { name: "Steel Sheets", image: "https://www.bushwickmetals.com/wp-content/uploads/2024/05/steel-sheets.jpg", link: "/products/steel-sheets-export" },
        { name: "Welding Machine", image: "https://m.media-amazon.com/images/I/71LkqakprqL.jpg", link: "/products/welding-machine-export" },
        { name: "Hydraulic Press", image: "https://atlantichydraulicsystems.com/wp-content/uploads/2021/10/Untitled-design-49.png", link: "/products/hydraulic-press-export" },
        { name: "Ball Bearings", image: "https://www.retro-gression.com/cdn/shop/products/bearings_1800x.jpg?v=1527554198", link: "/products/ball-bearings-export" },
        { name: "Hardware Fittings", image: "https://m.media-amazon.com/images/I/61bq3ssZUQL._AC_UF894,1000_QL80_.jpg", link: "/products/hardware-fittings-export" },
        { name: "Conveyor Belt", image: "https://www.iqsdirectory.com/articles/conveyor-belts/Conveyor-Belts.gif", link: "/products/conveyor-belt-export" },
      ],
    },
    {
      icon: Gem,
      name: "Gems, Jewelry & Handicrafts",
      description: "Exquisite gems, jewelry, and traditional handicrafts showcasing India's rich cultural heritage and craftsmanship.",
      items: ["Precious & Semi-precious Stones", "Gold & Silver Jewelry", "Fashion Jewelry", "Traditional Handicrafts", "Wooden Artifacts", "Decorative Items"],
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
      stats: { countries: "35+", volume: "$200M+", clients: "400+" },
      gradient: "from-ai-cyber to-ai-neon",
      hoverGradient: "from-ai-neon to-ai-primary",
      badge: "Handcrafted",
      price: "899.99",
      currency: "USD",
      rating: 4.9,
      reviewCount: 321,
      products: [
        { name: "Diamond Rings", image: "https://www.brilliance.com/cdn-cgi/image/f=webp,width=1440,height=1440,quality=90/sites/default/files/vue/collections/engagement-rings-diamond_og.jpg", link: "/seo/gems-jewelry-export-services" },
        { name: "Ruby Necklace", image: "https://image.brilliantearth.com/media/product_images/12/BE4LR85_yellow_top.jpg", link: "/seo/gems-jewelry-export-services" },
        { name: "Gold Bangles", image: "https://www.bhindi.com/upload/product/Ban-2798_1.webp", link: "/seo/gems-jewelry-export-services" },
        { name: "Silver Earrings", image: "https://i.etsystatic.com/10224407/r/il/f51dd3/5196674299/il_fullxfull.5196674299_h7uu.jpg", link: "/products/silver-earrings-export" },
        { name: "Pearl Jewelry", image: "https://seraphinecreations.com/cdn/shop/files/K041W04_a32b5121-72ea-4a48-bd87-11d2a16a830d_1024x.jpg?v=1699897410", link: "/products/pearl-jewelry-export" },
        { name: "Fashion Jewelry", image: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2022/05/costume_jewelry_history_cover.jpg", link: "/products/fashion-jewelry-export" },
        { name: "Wooden Carvings", image: "https://images.stockcake.com/public/c/8/d/c8da5842-8aa3-45b2-a742-55bbd675c6d2_large/intricate-wood-carvings-stockcake.jpg", link: "/seo/handicrafts-export-services" },
        { name: "Brass Statues", image: "https://i.etsystatic.com/10752544/r/il/f5ab45/2173809225/il_570xN.2173809225_6xcx.jpg", link: "/products/brass-statues-export" },
        { name: "Wall Hangings", image: "https://i.etsystatic.com/8075339/r/il/be1458/1917248579/il_fullxfull.1917248579_n6g3.jpg", link: "/products/wall-hangings-export" },
        { name: "Decorative Lamps", image: "https://images.thdstatic.com/productImages/57a47507-5afb-44a5-9b29-546ee605fcd0/svn/f-latepis-table-lamps-ghtl20076-64_600.jpg", link: "/products/decorative-lamps-export" },
      ],
    },
    {
      icon: Coffee,
      name: "Beverages & Processed Foods",
      description: "Premium beverages and processed food products including specialty coffees, teas, and gourmet food items.",
      items: ["Specialty Coffee & Tea", "Fruit Juices & Concentrates", "Snacks & Confectionery", "Dairy Products", "Frozen Foods", "Health Supplements"],
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
      stats: { countries: "28+", volume: "$40M+", clients: "250+" },
      gradient: "from-ai-neon to-ai-primary",
      hoverGradient: "from-ai-primary to-ai-secondary",
      badge: "Fresh & Pure",
      price: "35.99",
      currency: "USD",
      rating: 4.6,
      reviewCount: 178,
      products: [
        { name: "Mango Pulp", image: "https://www.jcookingodyssey.com/wp-content/uploads/2023/03/how-to-make-mango-pulp.jpg", link: "/seo/mango-export-services" },
        { name: "Fresh Bananas", image: "https://i5.walmartimages.com/seo/Fresh-Banana-Each_5939a6fa-a0d6-431c-88c6-b4f21608e4be.f7cd0cc487761d74c69b7731493c1581.jpeg", link: "/seo/banana-export-services" },
        { name: "Premium Grapes", image: "https://divineflavor.com/wp-content/uploads/2023/12/Divine-Flavor-Table-Grapes.png.webp", link: "/seo/grapes-export-services" },
        { name: "Coconut Products", image: "https://images.food52.com/lwMMZPAw4vo2bhGrU2QQ-3teg1c=/fit-in/800x0/a57ecaf0-f7e3-4bb9-ae40-b87c6fc0ce1e--2015-0908_how-to-use-coconut-products-in-the-kitchen_james-ransom-007.jpg", link: "/seo/coconut-export-services" },
        { name: "Frozen Vegetables", image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/frozen-vegetables-1296x728-header.jpg?w=1155&h=1528", link: "/seo/frozen-food-export" },
        { name: "Organic Honey", image: "https://www.tierrafarm.com/cdn/shop/files/TFHoneySpoon_a7210d73-f075-4b9e-b3de-f74b193537bd_1200x.png?v=1741809699", link: "/seo/organic-food-export" },
        { name: "Spice Pickles", image: "https://itsnotcomplicatedrecipes.com/wp-content/uploads/2023/02/Spicy-Cucumber-Pickles-3.jpg", link: "/products/spice-pickles-export" },
        { name: "Ready Meals", image: "https://www.solina.com/wp-content/uploads/2024/03/20231025-nextera-readymeals-overview-3-1200x599.jpg", link: "/products/ready-meals-export" },
        { name: "Snack Packets", image: "https://m.media-amazon.com/images/I/91f7ZyWZOeL._AC_UF894,1000_QL80_.jpg", link: "/products/snack-packets-export" },
        { name: "Dairy Ghee", image: "https://5.imimg.com/data5/OC/FD/ON/SELLER-95336941/shudh-desi-ghee-500x500.jpeg", link: "/products/dairy-ghee-export" },
      ],
    },
    {
      icon: Leaf,
      name: "Biodegradable Products",
      description: "Environmentally friendly biodegradable products supporting sustainable business practices worldwide.",
      items: ["Biodegradable Packaging", "Compostable Materials", "Natural Fibers", "Organic Containers", "Plant-based Products", "Sustainable Materials"],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
      stats: { countries: "22+", volume: "$25M+", clients: "160+" },
      gradient: "from-ai-primary to-ai-accent",
      hoverGradient: "from-ai-accent to-ai-secondary",
      badge: "100% Natural",
      price: "42.99",
      currency: "USD",
      rating: 4.8,
      reviewCount: 112,
      products: [
        { name: "Eco Bags", image: "https://m.media-amazon.com/images/I/81q05yqhtDL.jpg", link: "/seo/handicrafts-export-services" },
        { name: "Compostable Plates", image: "https://www.preserve.eco/cdn/shop/products/20210601HB_PreserveCompostable8Natural_1024x1024.jpg?v=1624903547", link: "/seo/organic-food-export" },
        { name: "Bamboo Fiber", image: "https://images.squarespace-cdn.com/content/v1/5e5cd082c50ea102c52e5bb0/1589696709437-TKHV7AB55ACLCMYMSG64/Bamboo+Fibers", link: "/seo/cotton-export-services" },
        { name: "Plant Containers", image: "https://www.thespruce.com/thmb/DcfKqqqVsAOlL7rp2YAQmpCCu5I=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/before-you-make-your-first-container-garden-847850-hero-0b4acc62b0e447b5a0200ae7bb9e67a2.jpg", link: "/products/storage-containers-export" },
        { name: "Bio Cutlery", image: "https://m.media-amazon.com/images/I/61xk01tcSnL.jpg", link: "/seo/handicrafts-export-services" },
        { name: "Jute Products", image: "http://bakeyy.com/cdn/shop/articles/natural-jute-bags-available-at-bakeyy-a-sustainable-stylish-choice-bakeyy-com.png?v=1730264489", link: "/seo/handicrafts-export-services" },
        { name: "Paper Straws", image: "https://m.media-amazon.com/images/I/61P4XN-Gr1L.jpg", link: "/products/packaging-boxes-export" },
        { name: "Eco Packaging", image: "https://a.storyblok.com/f/102007/768x432/94c9316db2/sustainable-packaging-paper-eco-friendly-disposable-tableware-plates-cups-bowls-recycling-signs.jpg", link: "/products/packaging-boxes-export" },
        { name: "Natural Sponges", image: "https://fawnlilybotanica.com/cdn/shop/files/bathsponges_2.png?v=1713200852&width=1445", link: "/seo/organic-food-export" },
        { name: "Bio Film", image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Staphylococcus_aureus_biofilm_01.jpg", link: "/products/plastic-sheets-export" },
      ],
    },
    {
      icon: Recycle,
      name: "Eco-Friendly Products",
      description: "Sustainable eco-friendly products including renewable energy solutions and green technology innovations.",
      items: ["Renewable Energy Products", "Solar Equipment", "Green Technology", "Recycled Materials", "Sustainable Solutions", "Environmental Products"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
      stats: { countries: "18+", volume: "$35M+", clients: "95+" },
      gradient: "from-ai-secondary to-ai-cyber",
      hoverGradient: "from-ai-cyber to-ai-accent",
      badge: "Carbon Neutral",
      price: "78.99",
      currency: "USD",
      rating: 4.9,
      reviewCount: 87,
      products: [
        { name: "Solar Panels", image: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/itUG4rTJjWyU/v0/-1x-1.webp", link: "/more/technology-integration" },
        { name: "LED Bulbs", image: "https://ey2msiqxj7z.exactdn.com/wp-content/uploads/2020/01/13160609/led_light_bulb_xl-1-scaled.jpg?strip=all&lossy=1&ssl=1", link: "/more/technology-integration" },
        { name: "Recycled Plastic", image: "https://www.plasticexpert.co.uk/wp-content/uploads/2020/03/benefits-of-recycled-plastic.jpg", link: "/products/molded-parts-export" },
        { name: "Wind Turbines", image: "https://www.windsystemsmag.com/wp-content/uploads/2019/10/1019-CW-I1.jpg", link: "/more/technology-integration" },
        { name: "Eco Batteries", image: "https://cdn11.bigcommerce.com/s-gluxo/images/stencil/1280x1280/products/5012/29026/ECO-BATTERY-72-Volt-Lithium-Golf-Cart-Batteries-BIG-BOX-Drop-in-Ready-Fits-ALL-Carts_001__19097.1746814313.jpg?c=2", link: "/more/technology-integration" },
        { name: "Water Purifiers", image: "https://cdn.thewirecutter.com/wp-content/media/2023/11/water-filter-pitcher-2048px-1392-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp", link: "/more/technology-integration" },
        { name: "Recycled Paper", image: "https://welcometonanas.com/wp-content/uploads/2020/07/Welcome-to-Nanas-DIY-Making-Recycled-Paper-At-Home-Tutorial-Craft-Kid-Friendly-Easy-7-SQ.jpg", link: "/products/packaging-boxes-export" },
        { name: "Green Cement", image: "https://images.verifiedmarketresearch.com/assets/Top-7-green-cement-manufacturers.jpg", link: "/more/technology-integration" },
        { name: "Bio Fuel", image: "http://blog.upsbatterycenter.com/wp-content/uploads/2014/06/biofuel.jpg", link: "/more/technology-integration" },
        { name: "Eco Paints", image: "https://www.greenbuildingsupply.com/cdn/shop/files/ECOS-PAINTS-int-wall-ceiling-paint-PR-LG_skus66514-66513.jpg?v=1747419668", link: "/more/technology-integration" },
      ],
    },
    {
      icon: Cpu,
      name: "Technology Products",
      description: "Advanced technology products including electronics, computer components, and smart devices for modern digital needs.",
      items: ["Electronics", "Computer Components", "IT Equipment", "Telecom Devices", "Smart Gadgets", "Tech Accessories"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      stats: { countries: "15+", volume: "$60M+", clients: "180+" },
      gradient: "from-ai-primary to-ai-accent",
      hoverGradient: "from-ai-accent to-ai-secondary",
      badge: "Latest Tech",
      price: "599.99",
      currency: "USD",
      rating: 4.8,
      reviewCount: 134,
      products: [
        { name: "Smartphones", image: "https://www.telegraph.co.uk/content/dam/recommended/2025/05/20/TELEMMGLPICT000425244583_17477562398800_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpeg?imwidth=640", link: "/products" },
        { name: "Laptops", image: "https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp", link: "/products" },
        { name: "Computer Parts", image: "https://softwareg.com.au/cdn/shop/articles/maxresdefault_28a493bd-85da-4913-b4a7-644dcab5b21c.jpg?v=1707884819", link: "/products" },
        { name: "Routers", image: "https://www.cisco.com/content/dam/cisco-cdc/site/images/legacy/assets/swa/img/800/KR12137-800x450.png", link: "/products" },
        { name: "Smart Watches", image: "https://m.media-amazon.com/images/I/71pbEc1KO3L._AC_UF894,1000_QL80_.jpg", link: "/products" },
        { name: "Headphones", image: "https://m.media-amazon.com/images/I/61RahTQtAqL.jpg", link: "/products" },
        { name: "Keyboards", image: "https://cdn.thewirecutter.com/wp-content/media/2025/03/BEST-MECHANICAL-KEYBOARDS-2048px-0673.jpg?auto=webp&quality=75&width=1024", link: "/products" },
        { name: "Monitors", image: "https://cdn.thewirecutter.com/wp-content/media/2024/03/24inmonitors-2048px-232071-3x2-1-1.jpg", link: "/products" },
        { name: "Cameras", image: "https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-types-feature-825x465.jpg", link: "/products" },
        { name: "Power Banks", image: "https://cdn.thewirecutter.com/wp-content/media/2023/03/laptoppowerbanks-2048px-4399-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp", link: "/products" },
      ],
    }
  ];

  const generateStructuredData = () => {
    const products = categories.map((category, index) => ({
      "@type": "Product",
      "name": category.name,
      "description": category.description,
      "image": category.image,
      "brand": {
        "@type": "Brand",
        "name": "Patel Exports"
      },
      "offers": {
        "@type": "Offer",
        "price": category.price,
        "priceCurrency": category.currency,
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Patel Exports",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rajkot",
            "addressRegion": "Gujarat",
            "addressCountry": "India"
          }
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": category.rating,
        "reviewCount": category.reviewCount,
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "James Wilson"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "datePublished": "2024-11-15",
          "reviewBody": `Excellent quality ${category.name.toLowerCase()}. Highly recommend Patel Exports for their professional service and premium products.`
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Maria Schmidt"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "datePublished": "2024-10-22",
          "reviewBody": `Outstanding ${category.name.toLowerCase()} with fast delivery and excellent customer support.`
        }
      ],
      "category": category.name,
      "sku": `PE-${index + 1}-2024`,
      "mpn": `PE${index + 1}2024`,
      "manufacturer": {
        "@type": "Organization",
        "name": "Patel Exports"
      }
    }));

    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": products.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": product
      }))
    };
  };

  const certifications = [
    { name: "ISO 9001:2015 Quality Management", icon: Award, color: "text-ai-primary" },
    { name: "HACCP Food Safety Certification", icon: Shield, color: "text-ai-secondary" }, 
    { name: "FSSAI License for Food Products", icon: CheckCircle, color: "text-ai-accent" },
    { name: "BIS Standards Compliance", icon: Target, color: "text-ai-cyber" },
    { name: "Export House Certificate", icon: Globe, color: "text-ai-neon" },
    { name: "Organic Certification (NPOP/NOP/EU)", icon: Heart, color: "text-ai-primary" }
  ];

  const marketInsights = [
    { region: "North America", growth: "+15%", opportunity: "High demand for organic products", flag: "🇺🇸", value: "$2.5B" },
    { region: "Europe", growth: "+12%", opportunity: "Sustainable textile market expansion", flag: "🇪🇺", value: "$1.8B" },
    { region: "Middle East", growth: "+20%", opportunity: "Food & beverage sector growth", flag: "🇦🇪", value: "$1.2B" },
    { region: "Southeast Asia", growth: "+18%", opportunity: "Industrial equipment demand", flag: "🇸🇬", value: "$900M" }
  ];

  const testimonials = [
    {
      name: "James Wilson",
      company: "Global Trade Inc.",
      country: "🇺🇸 USA",
      rating: 5,
      text: "Patel Exports has been our trusted partner for over 5 years. Their quality and reliability are unmatched.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Maria Schmidt",
      company: "European Distributors",
      country: "🇩🇪 Germany",
      rating: 5,
      text: "Excellent service and premium quality products. They understand our market needs perfectly.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b407?auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Ahmed Al-Rashid",
      company: "Middle East Trading",
      country: "🇦🇪 UAE",
      rating: 5,
      text: "Professional team with deep expertise in international trade. Highly recommended!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
    }
  ];

  const processSteps = [
    { step: 1, title: "Inquiry", desc: "Submit your product requirements", icon: MessageCircle },
    { step: 2, title: "Quote", desc: "Receive detailed pricing & terms", icon: Calculator },
    { step: 3, title: "Order", desc: "Confirm order with advance payment", icon: CheckCircle },
    { step: 4, title: "Production", desc: "Quality manufacturing & testing", icon: Wrench },
    { step: 5, title: "Shipping", desc: "Secure packaging & dispatch", icon: Truck },
    { step: 6, title: "Delivery", desc: "Safe delivery to your location", icon: MapPin }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
      </Helmet>
      
      <Navigation />
      
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20 relative">
            <div className="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-ai-primary/30 rounded-full mb-8">
              <Sparkles className="h-5 w-5 text-ai-primary mr-2" />
              <span className="text-sm font-bold text-ai-primary uppercase tracking-wider">Premium Export Products</span>
              <Sparkles className="h-5 w-5 text-ai-secondary ml-2" />
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-white mb-8 relative">
              <span className="text-transparent bg-gradient-to-r from-ai-primary via-ai-secondary to-ai-accent bg-clip-text">
                Our Products
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive range of premium export products, carefully sourced and quality-tested to meet international standards across diverse global markets.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto">
              {[
                { number: "500+", label: "Product Categories", icon: Target, gradient: "from-ai-primary to-ai-secondary" },
                { number: "50+", label: "Export Destinations", icon: Globe, gradient: "from-ai-secondary to-ai-accent" },
                { number: "$500M+", label: "Annual Trade Volume", icon: TrendingUp, gradient: "from-ai-accent to-ai-cyber" },
                { number: "99.5%", label: "Quality Assurance", icon: Shield, gradient: "from-ai-cyber to-ai-neon" }
              ].map((stat, index) => (
                <div key={index} className="group cursor-pointer transform transition-all duration-500 hover:scale-110">
                  <div className="relative bg-gray-800/50 border border-ai-primary/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl lg:text-5xl font-black text-white mb-2 group-hover:text-ai-primary transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300 font-semibold">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Categories */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            {categories.map((category, index) => (
              <div key={index} className="relative">
                <div className="relative bg-gray-800/50 border border-ai-primary/20 rounded-3xl shadow-2xl overflow-hidden hover:shadow-4xl transition-all duration-700 hover:-translate-y-4">
                  {/* Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className={`px-4 py-2 bg-gradient-to-r ${category.gradient} rounded-full text-white font-bold text-sm shadow-lg`}>
                      {category.badge}
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={category.image}
                      alt={`${category.name} - Import export business products from Patel Impex export company`}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* Icon */}
                    <div className="absolute top-8 right-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}>
                        <category.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="absolute bottom-6 right-6 text-white text-right z-10">
                      <div className="text-3xl font-black">{category.stats.countries}</div>
                      <div className="text-sm opacity-90 font-medium">Countries</div>
                      <div className="text-lg font-bold mt-1">{category.stats.volume}</div>
                      <div className="text-xs opacity-75">Annual Volume</div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-10 relative z-20">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-3xl font-black text-white">
                        {category.name}
                      </h3>
                      <div className={`px-3 py-1 bg-gradient-to-r ${category.gradient} rounded-full text-white text-xs font-bold`}>
                        {category.stats.clients} Clients
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                      {category.description}
                    </p>
                    
                    {/* Items Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <div className={`w-3 h-3 bg-gradient-to-r ${category.gradient} rounded-full mr-4 flex-shrink-0 shadow-lg`}></div>
                          <span className="font-semibold text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button 
                        onClick={() => toggleCategory(category.name)}
                        className={`flex-1 bg-gradient-to-r ${category.gradient} text-white font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
                      >
                        <span className="flex items-center justify-center">
                          View Products
                          {expandedCategory === category.name ? (
                            <ChevronUp className="ml-2 h-5 w-5 transition-transform duration-300" />
                          ) : (
                            <ChevronDown className="ml-2 h-5 w-5 transition-transform duration-300" />
                          )}
                        </span>
                      </Button>
                      
                      <Link to="/inquiry">
                        <Button 
                          variant="outline" 
                          className="px-8 py-4 border-2 border-ai-primary/50 text-ai-primary hover:bg-ai-primary/10 hover:border-ai-primary rounded-2xl font-bold transform hover:scale-105 transition-all duration-300"
                        >
                          <MessageCircle className="h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Collapsible Products Section */}
                {expandedCategory === category.name && category.products && (
                  <div className="mt-6 bg-gray-800/30 border border-ai-primary/10 rounded-3xl p-8 animate-in slide-in-from-top-4 duration-500">
                    <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Package className="h-6 w-6 mr-3 text-ai-primary" />
                      Available Products
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.products.map((product, prodIndex) => (
                        <Link key={prodIndex} to={product.link} className="group/product">
                          <Card className="bg-gray-900/50 border-ai-primary/20 hover:border-ai-primary/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:-translate-y-1">
                            <CardContent className="p-0">
                              <div className="relative h-48 overflow-hidden">
                                <img 
                                  src={product.image} 
                                  alt={product.name}
                                  className="w-full h-full object-cover group-hover/product:scale-110 transition-transform duration-500"
                                  loading="lazy"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=300&q=80';
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                              </div>
                              <div className="p-4">
                                <h5 className="text-white font-bold text-lg group-hover/product:text-ai-primary transition-colors">
                                  {product.name}
                                </h5>
                                <div className="flex items-center mt-2 text-ai-primary text-sm font-semibold">
                                  Learn More
                                  <ArrowRight className="ml-1 h-4 w-4 group-hover/product:translate-x-1 transition-transform" />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quality Assurance Section */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24 relative">
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-ai-primary/30 rounded-full mb-6">
                  <Award className="h-5 w-5 text-ai-primary mr-2" />
                  <span className="text-sm font-bold text-ai-primary uppercase tracking-wide">World-Class Standards</span>
                </div>
                
                <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                  Quality Assurance &
                  <span className="block text-transparent bg-gradient-to-r from-ai-primary to-ai-secondary bg-clip-text">
                    Certifications
                  </span>
                </h2>
                
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Every product undergoes rigorous quality testing and meets international standards. Our certifications ensure compliance with global trade requirements and customer satisfaction.
                </p>
              </div>
              
              {/* Certifications Grid */}
              <div className="grid gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="group flex items-center space-x-6 p-6 bg-gray-800/50 border border-ai-primary/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                    <div className="w-16 h-16 bg-gray-700/50 rounded-2xl flex items-center justify-center shadow-lg">
                      <cert.icon className={`h-8 w-8 ${cert.color}`} />
                    </div>
                    <div className="flex-1">
                      <span className="text-white font-bold text-lg group-hover:text-ai-primary transition-colors duration-300">{cert.name}</span>
                      <div className="flex items-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-gray-400 text-sm ml-2 font-medium">Verified</span>
                      </div>
                    </div>
                    <CheckCircle className="h-6 w-6 text-ai-secondary" />
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button 
                  onClick={handleViewCertificates}
                  className="flex-1 bg-gradient-to-r from-ai-primary to-ai-secondary hover:from-ai-secondary hover:to-ai-accent text-white font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  View All Certifications
                </Button>
                <Button 
                  onClick={handleDownloadCatalog}
                  variant="outline" 
                  className="px-8 py-4 border-2 border-ai-primary/50 text-ai-primary hover:bg-ai-primary/10 rounded-2xl font-bold transform hover:scale-105 transition-all duration-300"
                >
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Image Section */}
            <div className="relative">
              <div className="relative group cursor-pointer">
                <img
                  src="/lovable-uploads/86da894e-e356-4f11-80b8-5a5901b8fd04.png"
                  alt="Quality Assurance certification"
                  className="w-full h-[600px] object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-700"
                />
                
                {/* Quality Badge */}
                <div className="absolute -bottom-8 -left-8 bg-gray-800/90 border border-ai-primary/30 p-8 rounded-2xl shadow-2xl">
                  <div className="text-4xl font-black text-ai-primary mb-2">99.5%</div>
                  <div className="text-sm text-gray-300 font-bold">Quality Assurance Rate</div>
                  <div className="text-xs text-gray-400 mt-1">Certified International Standards</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
