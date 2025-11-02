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
      items: ["Pharmaceuticals", "Medical Supplies", "Pesticides", "Fertilizers", "Veterinary Products", "Health Supplements"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
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
      items: ["Tractors", "Harvesters", "Farm Equipment", "Irrigation Systems", "Agricultural Vehicles", "Farming Tools"],
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=400&q=80",
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
      icon: Wrench,
      name: "Industrial Equipment",
      items: ["Machinery", "Tools", "Electronics", "Auto Parts", "Steel", "Hardware"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
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
      icon: Package,
      name: "Plastic Products",
      items: ["Plastic Containers", "Packaging Materials", "Industrial Plastics", "Household Items", "Medical Plastics", "Automotive Parts"],
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=400&q=80",
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
      icon: Shirt,
      name: "Textiles & Garments",
      items: ["Cotton", "Silk", "Readymade Garments", "Home Textiles", "Fabrics", "Yarn"],
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=400&q=80",
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
      icon: Coffee,
      name: "Food & Beverages",
      items: ["Processed Foods", "Beverages", "Snacks", "Condiments", "Frozen Foods", "Dairy"],
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80",
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
      items: ["Biodegradable Packaging", "Compostable Materials", "Natural Fibers", "Organic Containers", "Plant-based Products", "Sustainable Materials"],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&q=80",
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
      items: ["Renewable Energy Products", "Solar Equipment", "Green Technology", "Recycled Materials", "Sustainable Solutions", "Environmental Products"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
      products: [
        { name: "Solar Panels", image: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/itUG4rTJjWyU/v0/-1x-1.webp", link: "/more/technology-integration" },
        { name: "LED Bulbs", image: "https://ey2msiqxj7z.exactdn.com/wp-content/uploads/2020/01/13160609/led_light_bulb_xl-1-scaled.jpg?strip=all&lossy=1&ssl=1", link: "/more/technology-integration" },
        { name: "Recycled Plastic", image: "https://www.plasticexpert.co.uk/wp-content/uploads/2020/03/benefits-of-recycled-plastic.jpg", link: "/products/molded-parts-export" },
        { name: "Wind Turbines", image: "https://www.windsystemsmag.com/wp-content/uploads/2019/10/1019-CW-I1.jpg", link: "/more/technology-integration" },
        { name: "Eco Batteries", image: "https://cdn11.bigcommerce.com/s-gluxo/images/stencil/1280x1280/products/5012/29026/ECO-BATTERY-72-Volt-Lithium-Golf-Cart-Batteries-BIG-BOX-Drop-in-Ready-Fits-ALL-Carts_001__19097.1746814313.jpg?c=2", link: "/more/technology-integration" },
        { name: "Water Purifiers", image: "https://cdn.thewirecutter.com/wp-content/media/2023/11/water-filter-pitcher-2048px-1392-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp", link: "/more/technology-integration" },
        { name: "Recycled Paper", image: "https://welcometonanas.com/wp-content/uploads/2020/07/Welcome-to-Nanas-DIY-Making-Recycled-Paper-At-Home-Tutorial-Craft-Kid-Friendly-Easy-7-SQ.jpg", link: "/products/packaging-boxes-export" },
        { name: "Green Cement", image: "https://images.verifiedmarketresearch.com/assets/Top-7-green-cement-manufacturers.jpg", link: "/products/steel-sheets-export" },
        { name: "Bio Fuel", image: "http://blog.upsbatterycenter.com/wp-content/uploads/2014/06/biofuel.jpg", link: "/seo/organic-food-export" },
        { name: "Eco Paints", image: "https://www.greenbuildingsupply.com/cdn/shop/files/ECOS-PAINTS-int-wall-ceiling-paint-PR-LG_skus66514-66513.jpg?v=1747419668", link: "/products/molded-parts-export" },
      ],
    },
    {
      icon: Gem,
      name: "Gems & Jewelry",
      items: ["Diamonds", "Precious Stones", "Gold Jewelry", "Silver Items", "Pearls", "Handicrafts"],
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80",
      products: [
        { name: "Diamond Rings", image: "https://www.brilliance.com/cdn-cgi/image/f=webp,width=1440,height=1440,quality=90/sites/default/files/vue/collections/engagement-rings-diamond_og.jpg", link: "/seo/gems-jewelry-export-services" },
        { name: "Ruby Necklace", image: "https://image.brilliantearth.com/media/product_images/12/BE4LR85_yellow_top.jpg", link: "/seo/gems-jewelry-export-services" },
        { name: "Gold Bangles", image: "https://www.bhindi.com/upload/product/Ban-2798_1.webp", link: "/seo/gems-jewelry-export-services" },
        { name: "Silver Earrings", image: "https://i.etsystatic.com/10224407/r/il/f51dd3/5196674299/il_fullxfull.5196674299_h7uu.jpg", link: "/products/silver-earrings-export" },
        { name: "Pearl Jewelry", image: "https://seraphinecreations.com/cdn/shop/files/K041W04_a32b5121-72ea-4a48-bd87-11d2a16a830d_1024x.jpg?v=1699897410", link: "/products/pearl-jewelry-export" },
        { name: "Fashion Jewelry", image: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2022/05/costume_jewelry_history_cover.jpg", link: "/seo/gems-jewelry-export-services" },
        { name: "Wooden Carvings", image: "https://images.stockcake.com/public/c/8/d/c8da5842-8aa3-45b2-a742-55bbd675c6d2_large/intricate-wood-carvings-stockcake.jpg", link: "/seo/handicrafts-export-services" },
        { name: "Brass Statues", image: "https://i.etsystatic.com/10752544/r/il/f5ab45/2173809225/il_570xN.2173809225_6xcx.jpg", link: "/products/brass-statues-export" },
        { name: "Wall Hangings", image: "https://i.etsystatic.com/8075339/r/il/be1458/1917248579/il_fullxfull.1917248579_n6g3.jpg", link: "/products/wall-hangings-export" },
        { name: "Decorative Lamps", image: "https://images.thdstatic.com/productImages/57a47507-5afb-44a5-9b29-546ee605fcd0/svn/f-latepis-table-lamps-ghtl20076-64_600.jpg", link: "/products/decorative-lamps-export" },
      ],
    },
    {
      icon: Cpu,
      name: "Technology Products",
      items: ["Electronics", "Software", "IT Services", "Telecom", "Components", "Gadgets"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
      products: [
        { name: "Smartphones", image: "https://www.telegraph.co.uk/content/dam/recommended/2025/05/20/TELEMMGLPICT000425244583_17477562398800_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpeg?imwidth=640", link: "/more/technology-integration" },
        { name: "Laptops", image: "https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp", link: "/more/technology-integration" },
        { name: "Smart Watches", image: "https://m.media-amazon.com/images/I/71pbEc1KO3L._AC_UF894,1000_QL80_.jpg", link: "/more/technology-integration" },
        { name: "Computer Parts", image: "https://softwareg.com.au/cdn/shop/articles/maxresdefault_28a493bd-85da-4913-b4a7-644dcab5b21c.jpg?v=1707884819", link: "/products/engine-parts-export" },
        { name: "Headphones", image: "https://m.media-amazon.com/images/I/61RahTQtAqL.jpg", link: "/more/technology-integration" },
        { name: "Routers", image: "https://www.cisco.com/content/dam/cisco-cdc/site/images/legacy/assets/swa/img/800/KR12137-800x450.png", link: "/more/technology-integration" },
        { name: "Keyboards", image: "https://cdn.thewirecutter.com/wp-content/media/2025/03/BEST-MECHANICAL-KEYBOARDS-2048px-0673.jpg?auto=webp&quality=75&width=1024", link: "/more/technology-integration" },
        { name: "Monitors", image: "https://cdn.thewirecutter.com/wp-content/media/2024/03/24inmonitors-2048px-232071-3x2-1-1.jpg", link: "/more/technology-integration" },
        { name: "Cameras", image: "https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-types-feature-825x465.jpg", link: "/more/technology-integration" },
        { name: "Power Banks", image: "https://cdn.thewirecutter.com/wp-content/media/2023/03/laptoppowerbanks-2048px-4399-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp", link: "/more/technology-integration" },
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
