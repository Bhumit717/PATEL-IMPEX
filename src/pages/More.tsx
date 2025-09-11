import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Briefcase, Globe, Truck, FileText, DollarSign, Shield, Users, BarChart3, Target, Zap, Award, Package, Ship, Plane, Building, Factory, Wheat, Spade, Scale, Calendar } from "lucide-react";

const More = () => {
  const resourceCategories = [
    {
      title: "Export Import Basics",
      description: "Essential guides for international trade beginners",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      pages: [
        { title: "Export Import Guide", slug: "export-import-guide", description: "Complete guide to international trade" },
        { title: "International Trade Basics", slug: "international-trade-basics", description: "Fundamentals of global commerce" },
        { title: "Export Documentation", slug: "export-documentation", description: "Essential documents for exports" },
        { title: "Import Procedures", slug: "import-procedures", description: "Step-by-step import process" },
        { title: "Trade Finance", slug: "trade-finance", description: "Financing international trade" }
      ]
    },
    {
      title: "Product Categories",
      description: "Detailed information about our export products",
      icon: Package,
      color: "text-green-600",
      bgColor: "bg-green-50",
      pages: [
        { title: "Rice Export", slug: "rice-export", description: "Premium rice varieties for export" },
        { title: "Spices Export", slug: "spices-export", description: "Authentic Indian spices worldwide" },
        { title: "Agricultural Products", slug: "agricultural-products", description: "Farm-fresh agricultural exports" },
        { title: "Basmati Rice", slug: "basmati-rice", description: "World's finest basmati rice" },
        { title: "Non Basmati Rice", slug: "non-basmati-rice", description: "Quality non-basmati varieties" },
        { title: "Organic Products", slug: "organic-products", description: "Certified organic exports" }
      ]
    },
    {
      title: "Global Markets",
      description: "Market insights and opportunities worldwide",
      icon: Globe,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      pages: [
        { title: "Asian Markets", slug: "asian-markets", description: "Trading opportunities in Asia" },
        { title: "European Markets", slug: "european-markets", description: "Export to European countries" },
        { title: "Middle East Trade", slug: "middle-east-trade", description: "Middle Eastern market insights" },
        { title: "African Markets", slug: "african-markets", description: "Growing African trade opportunities" },
        { title: "American Markets", slug: "american-markets", description: "North and South American trade" },
        { title: "Oceania Trade", slug: "oceania-trade", description: "Australia and Pacific markets" }
      ]
    },
    {
      title: "Logistics & Shipping",
      description: "Transportation and logistics solutions",
      icon: Truck,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      pages: [
        { title: "Sea Freight", slug: "sea-freight", description: "Ocean shipping solutions" },
        { title: "Air Cargo", slug: "air-cargo", description: "Fast air transportation" },
        { title: "Land Transportation", slug: "land-transportation", description: "Overland shipping services" },
        { title: "Warehousing", slug: "warehousing", description: "Storage and distribution" },
        { title: "Packaging Solutions", slug: "packaging-solutions", description: "Export packaging services" },
        { title: "Cold Chain", slug: "cold-chain", description: "Temperature-controlled logistics" }
      ]
    },
    {
      title: "Compliance & Legal",
      description: "Trade regulations and compliance information",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-50",
      pages: [
        { title: "Export Regulations", slug: "export-regulations", description: "International trade regulations" },
        { title: "Quality Standards", slug: "quality-standards", description: "Global quality certifications" },
        { title: "Customs Procedures", slug: "customs-procedures", description: "Customs clearance processes" },
        { title: "Trade Agreements", slug: "trade-agreements", description: "International trade agreements" },
        { title: "Compliance Guide", slug: "compliance-guide", description: "Regulatory compliance help" }
      ]
    },
    {
      title: "Industry Insights",
      description: "Market trends and industry analysis",
      icon: BarChart3,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      pages: [
        { title: "Market Analysis", slug: "market-analysis", description: "Global market trends" },
        { title: "Industry Reports", slug: "industry-reports", description: "Comprehensive industry studies" },
        { title: "Price Trends", slug: "price-trends", description: "Commodity price analysis" },
        { title: "Export Statistics", slug: "export-statistics", description: "Trade data and statistics" }
      ]
    }
  ];

  const totalPages = resourceCategories.reduce((total, category) => total + category.pages.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Resource Library
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Export Import Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive guides, market insights, and expert knowledge to help you succeed in international trade. 
              Access {totalPages}+ specialized pages covering every aspect of export-import business.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl space-y-16">
          {resourceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="text-center mb-8">
                <div className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                <p className="text-xl text-muted-foreground">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.pages.map((page, pageIndex) => (
                  <Card key={pageIndex} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center justify-between">
                        {page.title}
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </CardTitle>
                      <CardDescription>{page.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" size="sm" className="w-full" asChild>
                        <Link to={`/more/${page.slug}`}>
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Personalized Assistance?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our export-import experts are ready to help you navigate international trade successfully
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get Expert Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/inquiry">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default More;