import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Wheat, Wrench, Shirt, Coffee, Gem, Cpu, Pill, Tractor, Package, Leaf, Recycle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Products = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategory(expandedCategory === categoryTitle ? null : categoryTitle);
  };

  const categories = [
    {
      icon: Wheat,
      name: "Agricultural Products",
      items: ["Rice", "Wheat", "Spices", "Tea", "Coffee", "Pulses"],
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80",
      products: [
        { name: "Basmati Rice Premium", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop", link: "/more/basmati-rice-export" },
        { name: "Non-Basmati Rice", image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=300&h=300&fit=crop", link: "/more/non-basmati-rice-export" },
        { name: "Wheat Grains", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=300&fit=crop", link: "/more/wheat-export" },
        { name: "Turmeric Powder", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300&h=300&fit=crop", link: "/more/turmeric-export" },
        { name: "Red Chili", image: "https://images.unsplash.com/photo-1583827432310-e6b6d6b8af3b?w=300&h=300&fit=crop", link: "/more/red-chili-export" },
        { name: "Cumin Seeds", image: "https://images.unsplash.com/photo-1596040033229-a0b935b1c3e3?w=300&h=300&fit=crop", link: "/more/cumin-export" },
        { name: "Assam Tea", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cda9?w=300&h=300&fit=crop", link: "/seo/tea-export-services" },
        { name: "Arabica Coffee", image: "https://images.unsplash.com/photo-1447933601403-0c4c3acd3789?w=300&h=300&fit=crop", link: "/seo/coffee-export-services" },
        { name: "Mixed Pulses", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=300&fit=crop", link: "/seo/pulses-export-services" },
        { name: "Organic Sugar", image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=300&h=300&fit=crop", link: "/seo/sugar-export-services" },
      ],
    },
    {
      icon: Pill,
      name: "Pharma & Pesticides", 
      items: ["Pharmaceuticals", "Medical Supplies", "Pesticides", "Fertilizers", "Veterinary Products", "Health Supplements"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
      products: [
        { name: "Pharmaceutical Tablets", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&h=300&fit=crop", link: "/seo/pharmaceutical-export" },
        { name: "Medical Syringes", image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=300&h=300&fit=crop", link: "/seo/pharmaceutical-export" },
        { name: "Organic Pesticides", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=300&fit=crop", link: "/products" },
        { name: "Bio Fertilizers", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=300&h=300&fit=crop", link: "/products" },
        { name: "Veterinary Medicines", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=300&h=300&fit=crop", link: "/products" },
        { name: "Health Capsules", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=300&h=300&fit=crop", link: "/products" },
        { name: "Surgical Equipment", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=300&h=300&fit=crop", link: "/seo/pharmaceutical-export" },
        { name: "Diagnostic Kits", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=300&fit=crop", link: "/products" },
        { name: "Herbal Supplements", image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=300&h=300&fit=crop", link: "/products" },
        { name: "Medical Gloves", image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=300&h=300&fit=crop", link: "/products" },
      ],
    },
    {
      icon: Tractor,
      name: "Agriculture Equipment & Vehicles",
      items: ["Tractors", "Harvesters", "Farm Equipment", "Irrigation Systems", "Agricultural Vehicles", "Farming Tools"],
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=400&q=80",
      products: [
        { name: "Mini Tractor", image: "https://images.unsplash.com/photo-1527847263472-aa5338d178b8?w=300&h=300&fit=crop", link: "/products" },
        { name: "Combine Harvester", image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=300&h=300&fit=crop", link: "/products" },
        { name: "Drip Irrigation", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=300&fit=crop", link: "/products" },
        { name: "Cultivator", image: "https://images.unsplash.com/photo-1625246424009-1c8f5f99e140?w=300&h=300&fit=crop", link: "/products" },
        { name: "Sprinkler System", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop", link: "/products" },
        { name: "Seeding Machine", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=300&h=300&fit=crop", link: "/products" },
        { name: "Power Tiller", image: "https://images.unsplash.com/photo-1589923188900-af2072f0dd5f?w=300&h=300&fit=crop", link: "/products" },
        { name: "Thresher", image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=300&h=300&fit=crop", link: "/products" },
        { name: "Farm Trailer", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=300&fit=crop", link: "/products" },
        { name: "Hand Tools", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=300&h=300&fit=crop", link: "/products" },
      ],
    },
    {
      icon: Wrench,
      name: "Industrial Equipment",
      items: ["Machinery", "Tools", "Electronics", "Auto Parts", "Steel", "Hardware"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
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
      icon: Package,
      name: "Plastic Products",
      items: ["Plastic Containers", "Packaging Materials", "Industrial Plastics", "Household Items", "Medical Plastics", "Automotive Parts"],
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=400&q=80",
      products: [
        { name: "Storage Containers", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=300&h=300&fit=crop", link: "/products" },
        { name: "Packaging Boxes", image: "https://images.unsplash.com/photo-1594834284393-62e5ee774018?w=300&h=300&fit=crop", link: "/products" },
        { name: "Industrial Pipes", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=300&fit=crop", link: "/products" },
        { name: "Household Buckets", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=300&fit=crop", link: "/products" },
        { name: "Medical Containers", image: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?w=300&h=300&fit=crop", link: "/products" },
        { name: "Automotive Bumpers", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=300&fit=crop", link: "/products" },
        { name: "Plastic Bottles", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop", link: "/products" },
        { name: "Food Containers", image: "https://images.unsplash.com/photo-1591879711566-8f83f53fb998?w=300&h=300&fit=crop", link: "/products" },
        { name: "Plastic Sheets", image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=300&h=300&fit=crop", link: "/products" },
        { name: "Molded Parts", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=300&fit=crop", link: "/products" },
      ],
    },
    {
      icon: Shirt,
      name: "Textiles & Garments",
      items: ["Cotton", "Silk", "Readymade Garments", "Home Textiles", "Fabrics", "Yarn"],
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=400&q=80",
      products: [
        { name: "Cotton Fabric", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&h=300&fit=crop", link: "/seo/cotton-export-services" },
        { name: "Silk Sarees", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=300&fit=crop", link: "/more/textile-export" },
        { name: "Men's T-Shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop", link: "/more/textile-export" },
        { name: "Bed Linen", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300&h=300&fit=crop", link: "/products" },
        { name: "Designer Fabrics", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=300&fit=crop", link: "/products" },
        { name: "Cotton Yarn", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=300&h=300&fit=crop", link: "/products" },
        { name: "Denim Jeans", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=300&fit=crop", link: "/more/textile-export" },
        { name: "Curtains", image: "https://images.unsplash.com/photo-1616627177346-84a6417e5e8c?w=300&h=300&fit=crop", link: "/products" },
        { name: "Towel Sets", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=300&h=300&fit=crop", link: "/products" },
        { name: "Wool Blankets", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=300&h=300&fit=crop", link: "/products" },
      ],
    },
    {
      icon: Coffee,
      name: "Food & Beverages",
      items: ["Processed Foods", "Beverages", "Snacks", "Condiments", "Frozen Foods", "Dairy"],
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80",
      products: [
        { name: "Mango Pulp", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=300&q=80", link: "/seo/mango-export-services" },
        { name: "Fresh Bananas", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=300&q=80", link: "/seo/banana-export-services" },
        { name: "Premium Grapes", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=300&q=80", link: "/seo/grapes-export-services" },
        { name: "Coconut Products", image: "https://images.unsplash.com/photo-1598511757337-fe2cafc31ba1?auto=format&fit=crop&w=300&q=80", link: "/seo/coconut-export-services" },
        { name: "Frozen Vegetables", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80", link: "/seo/frozen-food-export" },
        { name: "Organic Honey", image: "https://images.unsplash.com/photo-1587049352846-4a222e784690?auto=format&fit=crop&w=300&q=80", link: "/seo/organic-food-export" },
        { name: "Pickle Varieties", image: "https://images.unsplash.com/photo-1610969716728-6cf4f525ffe2?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Ready Meals", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Snack Packets", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Dairy Ghee", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=300&q=80", link: "/products" },
      ],
    },
    {
      icon: Leaf,
      name: "Biodegradable Products",
      items: ["Biodegradable Packaging", "Compostable Materials", "Natural Fibers", "Organic Containers", "Plant-based Products", "Sustainable Materials"],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80",
      products: [
        { name: "Eco Bags", image: "https://images.unsplash.com/photo-1592085529812-5c0fcfe30daf?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Compostable Plates", image: "https://images.unsplash.com/photo-1610464620283-3e4f7c76f8b8?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Bamboo Fiber", image: "https://images.unsplash.com/photo-1594834284393-62e5ee774018?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Plant Containers", image: "https://images.unsplash.com/photo-1592085529812-5c0fcfe30daf?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Bio Cutlery", image: "https://images.unsplash.com/photo-1622794699639-adf2f56bb1b7?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Jute Products", image: "https://images.unsplash.com/photo-1610464620283-3e4f7c76f8b8?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Paper Straws", image: "https://images.unsplash.com/photo-1531316630768-c2ecd4933a3e?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Eco Packaging", image: "https://images.unsplash.com/photo-1594834284393-62e5ee774018?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Natural Sponges", image: "https://images.unsplash.com/photo-1582735689249-38d43d9bac0c?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Biodegradable Film", image: "https://images.unsplash.com/photo-1592085529812-5c0fcfe30daf?auto=format&fit=crop&w=300&q=80", link: "/products" },
      ],
    },
    {
      icon: Recycle,
      name: "Eco-Friendly Products",
      items: ["Renewable Energy Products", "Solar Equipment", "Green Technology", "Recycled Materials", "Sustainable Solutions", "Environmental Products"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
      products: [
        { name: "Solar Panels", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "LED Bulbs", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Recycled Plastic", image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Wind Turbine Parts", image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Eco Batteries", image: "https://images.unsplash.com/photo-1609976163195-f68a6f68241c?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Water Purifiers", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Recycled Paper", image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Green Cement", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Bio Fuel", image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Eco Paints", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=300&q=80", link: "/products" },
      ],
    },
    {
      icon: Gem,
      name: "Gems & Jewelry",
      items: ["Diamonds", "Precious Stones", "Gold Jewelry", "Silver Items", "Pearls", "Handicrafts"],
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80",
      products: [
        { name: "Diamond Rings", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=300&q=80", link: "/seo/gems-jewelry-export-services" },
        { name: "Ruby Necklace", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300&q=80", link: "/seo/gems-jewelry-export-services" },
        { name: "Gold Bangles", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=300&q=80", link: "/seo/gems-jewelry-export-services" },
        { name: "Silver Coins", image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Pearl Earrings", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Emerald Stones", image: "https://images.unsplash.com/photo-1583521214690-73421a1829a9?auto=format&fit=crop&w=300&q=80", link: "/seo/gems-jewelry-export-services" },
        { name: "Handcrafted Jewelry", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=300&q=80", link: "/seo/handicrafts-export-services" },
        { name: "Silver Bracelets", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Sapphire Rings", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Gold Chains", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=300&q=80", link: "/products" },
      ],
    },
    {
      icon: Cpu,
      name: "Technology Products",
      items: ["Electronics", "Software", "IT Services", "Telecom", "Components", "Gadgets"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
      products: [
        { name: "Mobile Phones", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Laptops", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Smart Watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Tablets", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Computer Parts", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Network Routers", image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Smart Speakers", image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Cameras", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=300&q=80", link: "/products" },
        { name: "Drones", image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=300&q=80", link: "/products" },
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-ai-primary mb-2 uppercase tracking-wide">
            Our Products
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Quality Products Worldwide
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We deal in a wide range of premium products across various industries, 
            ensuring quality and reliability in every shipment. Learn more about our 
            <a href="/services" className="text-ai-primary hover:underline ml-1">export services</a> and 
            <a href="/about" className="text-ai-primary hover:underline ml-1">import export company experience</a>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="space-y-4">
              <div 
                className="group cursor-pointer"
                onClick={() => toggleCategory(category.name)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 border border-ai-primary/20 hover:border-ai-primary/40">
                  <img
                    src={category.image}
                    alt={`${category.name} - Import export business products from Patel Impex export company`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <category.icon className="h-6 w-6 mr-2 text-ai-primary" />
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                      </div>
                      {expandedCategory === category.name ? (
                        <ChevronUp className="h-5 w-5 text-ai-primary" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-ai-primary" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {expandedCategory === category.name && (
                <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-ai-primary/20 backdrop-blur-sm animate-in slide-in-from-top-2">
                  <h4 className="text-lg font-semibold text-white mb-4">Featured Products</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {category.products && category.products.slice(0, 10).map((product, idx) => (
                      <Link 
                        key={idx} 
                        to={product.link}
                        className="group/product relative overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300"
                      >
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-24 object-cover group-hover/product:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                          <span className="text-xs text-white p-2 w-full truncate">{product.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
