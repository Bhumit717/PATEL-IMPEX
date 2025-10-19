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
        { name: "Basmati Rice Premium", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80", link: "/more/basmati-rice-export" },
        { name: "Non-Basmati Rice", image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=300&q=80", link: "/more/non-basmati-rice-export" },
        { name: "Wheat Grains", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=300&q=80", link: "/more/wheat-export" },
        { name: "Turmeric Powder", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=300&q=80", link: "/more/turmeric-export" },
        { name: "Red Chili", image: "https://images.unsplash.com/photo-1583827432310-e6b6d6b8af3b?auto=format&fit=crop&w=300&q=80", link: "/more/red-chili-export" },
        { name: "Cumin Seeds", image: "https://images.unsplash.com/photo-1596040033229-a0b935b1c3e3?auto=format&fit=crop&w=300&q=80", link: "/more/cumin-export" },
        { name: "Assam Tea", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cda9?auto=format&fit=crop&w=300&q=80", link: "/seo/tea-export-services" },
        { name: "Arabica Coffee", image: "https://images.unsplash.com/photo-1447933601403-0c4c3acd3789?auto=format&fit=crop&w=300&q=80", link: "/seo/coffee-export-services" },
        { name: "Mixed Pulses", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=300&q=80", link: "/seo/pulses-export-services" },
        { name: "Organic Sugar", image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=300&q=80", link: "/seo/sugar-export-services" },
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
        { name: "Pharmaceutical Tablets", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=300&q=80", link: "/seo/pharmaceutical-export" },
        { name: "Medical Syringes", image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=300&q=80", link: "/seo/pharmaceutical-export" },
        { name: "Organic Pesticides", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Bio Fertilizers", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Veterinary Medicines", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Health Capsules", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Surgical Equipment", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=300&q=80", link: "/seo/pharmaceutical-export" },
        { name: "Diagnostic Kits", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Herbal Supplements", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Medical Gloves", image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=300&q=80", link: "/products" },
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
        { name: "Mini Tractor", image: "https://images.unsplash.com/photo-1527847263472-aa5338d178b8?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Combine Harvester", image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Drip Irrigation", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Cultivator", image: "https://images.unsplash.com/photo-1625246424009-1c8f5f99e140?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Sprinkler System", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Seeding Machine", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Power Tiller", image: "https://images.unsplash.com/photo-1589923188900-af2072f0dd5f?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Thresher", image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Farm Trailer", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Hand Tools", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=300&q=80", link: "/products" },
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
        { name: "Cotton Fabric", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=300&q=80", link: "/seo/cotton-export-services" },
        { name: "Silk Sarees", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=300&q=80", link: "/more/textile-export" },
        { name: "Men's T-Shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80", link: "/more/textile-export" },
        { name: "Bed Linen", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Designer Fabrics", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Cotton Yarn", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Denim Jeans", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=300&q=80", link: "/more/textile-export" },
        { name: "Curtains", image: "https://images.unsplash.com/photo-1616627177346-84a6417e5e8c?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Towel Sets", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Wool Blankets", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=300&q=80", link: "/products" },
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
        { name: "Storage Containers", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Packaging Boxes", image: "https://images.unsplash.com/photo-1594834284393-62e5ee774018?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Industrial Pipes", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Household Buckets", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Medical Containers", image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Automotive Bumpers", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Plastic Bottles", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Food Containers", image: "https://images.unsplash.com/photo-1591879711566-8f83f53fb998?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Plastic Sheets", image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Molded Parts", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=300&q=80", link: "/products" },
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
        { name: "CNC Machine", image: "https://images.unsplash.com/photo-1565085737614-0e9d03c7e4d4?w=300&h=300&fit=crop", link: "/products" },
        { name: "Power Drill Set", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=300&h=300&fit=crop", link: "/products" },
        { name: "Industrial Motor", image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=300&h=300&fit=crop", link: "/products" },
        { name: "Engine Parts", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=300&fit=crop", link: "/products" },
        { name: "Steel Sheets", image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=300&h=300&fit=crop", link: "/products" },
        { name: "Welding Machine", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=300&fit=crop", link: "/products" },
        { name: "Hydraulic Press", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=300&fit=crop", link: "/products" },
        { name: "Ball Bearings", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=300&h=300&fit=crop", link: "/products" },
        { name: "Hardware Fittings", image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=300&h=300&fit=crop", link: "/products" },
        { name: "Conveyor Belt", image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?w=300&h=300&fit=crop", link: "/products" },
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
        { name: "Diamond Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop", link: "/seo/gems-jewelry-export-services" },
        { name: "Ruby Necklace", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=300&h=300&fit=crop", link: "/seo/gems-jewelry-export-services" },
        { name: "Gold Bangles", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop", link: "/seo/gems-jewelry-export-services" },
        { name: "Silver Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop", link: "/products" },
        { name: "Pearl Jewelry", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop", link: "/products" },
        { name: "Fashion Jewelry", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=300&h=300&fit=crop", link: "/products" },
        { name: "Wooden Carvings", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&h=300&fit=crop", link: "/seo/handicrafts-export-services" },
        { name: "Brass Statues", image: "https://images.unsplash.com/photo-1551431009-a802eeec77b1?w=300&h=300&fit=crop", link: "/seo/handicrafts-export-services" },
        { name: "Wall Hangings", image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=300&h=300&fit=crop", link: "/products" },
        { name: "Decorative Lamps", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300&h=300&fit=crop", link: "/products" },
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
        { name: "Mango Pulp", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=300&h=300&fit=crop", link: "/seo/mango-export-services" },
        { name: "Fresh Bananas", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop", link: "/seo/banana-export-services" },
        { name: "Premium Grapes", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=300&h=300&fit=crop", link: "/seo/grapes-export-services" },
        { name: "Coconut Products", image: "https://images.unsplash.com/photo-1598511757337-fe2cafc31ba1?w=300&h=300&fit=crop", link: "/seo/coconut-export-services" },
        { name: "Frozen Vegetables", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=300&h=300&fit=crop", link: "/seo/frozen-food-export" },
        { name: "Organic Honey", image: "https://images.unsplash.com/photo-1587049352846-4a222e784690?w=300&h=300&fit=crop", link: "/seo/organic-food-export" },
        { name: "Spice Pickles", image: "https://images.unsplash.com/photo-1583827432310-e6b6d6b8af3b?w=300&h=300&fit=crop", link: "/products" },
        { name: "Ready Meals", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop", link: "/products" },
        { name: "Snack Packets", image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=300&h=300&fit=crop", link: "/products" },
        { name: "Dairy Ghee", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=300&h=300&fit=crop", link: "/products" },
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
        { name: "Eco Bags", image: "https://images.unsplash.com/photo-1592085529812-5c0fcfe30daf?w=300&h=300&fit=crop", link: "/products" },
        { name: "Compostable Plates", image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=300&h=300&fit=crop", link: "/products" },
        { name: "Bamboo Fiber", image: "https://images.unsplash.com/photo-1604667182878-e2d6985e9ea5?w=300&h=300&fit=crop", link: "/products" },
        { name: "Plant Containers", image: "https://images.unsplash.com/photo-1592085529812-5c0fcfe30daf?w=300&h=300&fit=crop", link: "/products" },
        { name: "Bio Cutlery", image: "https://images.unsplash.com/photo-1622794699639-adf2f56bb1b7?w=300&h=300&fit=crop", link: "/products" },
        { name: "Jute Products", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=300&fit=crop", link: "/products" },
        { name: "Paper Straws", image: "https://images.unsplash.com/photo-1531316630768-c2ecd4933a3e?w=300&h=300&fit=crop", link: "/products" },
        { name: "Eco Packaging", image: "https://images.unsplash.com/photo-1594834284393-62e5ee774018?w=300&h=300&fit=crop", link: "/products" },
        { name: "Natural Sponges", image: "https://images.unsplash.com/photo-1582735689249-38d43d9bac0c?w=300&h=300&fit=crop", link: "/products" },
        { name: "Bio Film", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=300&fit=crop", link: "/products" },
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
        { name: "Solar Panels", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=300&h=300&fit=crop", link: "/products" },
        { name: "LED Bulbs", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300&h=300&fit=crop", link: "/products" },
        { name: "Recycled Plastic", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=300&h=300&fit=crop", link: "/products" },
        { name: "Wind Turbines", image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=300&h=300&fit=crop", link: "/products" },
        { name: "Eco Batteries", image: "https://images.unsplash.com/photo-1609976163195-f68a6f68241c?w=300&h=300&fit=crop", link: "/products" },
        { name: "Water Purifiers", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop", link: "/products" },
        { name: "Recycled Paper", image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=300&h=300&fit=crop", link: "/products" },
        { name: "Green Cement", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop", link: "/products" },
        { name: "Bio Fuel", image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=300&h=300&fit=crop", link: "/products" },
        { name: "Eco Paints", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300&h=300&fit=crop", link: "/products" },
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
        { name: "Smartphones", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop", link: "/products" },
        { name: "Laptops", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop", link: "/products" },
        { name: "Computer Parts", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=300&h=300&fit=crop", link: "/products" },
        { name: "Routers", image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=300&h=300&fit=crop", link: "/products" },
        { name: "Smart Watches", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&h=300&fit=crop", link: "/products" },
        { name: "Headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop", link: "/products" },
        { name: "Keyboards", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop", link: "/products" },
        { name: "Monitors", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop", link: "/products" },
        { name: "Cameras", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop", link: "/products" },
        { name: "Power Banks", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop", link: "/products" },
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
