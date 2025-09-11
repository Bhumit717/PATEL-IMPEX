import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Search, TrendingUp, Globe, Target, BarChart3, Users, FileText, Award, Zap, Shield } from "lucide-react";

const SEO = () => {
  const seoServices = [
    {
      icon: Search,
      title: "Export Import SEO Strategy",
      description: "Comprehensive SEO strategies for international trade businesses to dominate global search results",
      features: [
        "Global keyword research for export markets",
        "International trade terminology optimization",
        "Multi-language SEO for global reach",
        "Local SEO for export hubs like Rajkot"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: TrendingUp,
      title: "Agricultural Export Marketing",
      description: "Specialized digital marketing for rice, spices, and agricultural product exports",
      features: [
        "Product-specific keyword optimization",
        "Agricultural commodity SEO",
        "B2B buyer targeting",
        "Export market penetration strategies"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Globe,
      title: "International Trade SEO",
      description: "Global SEO solutions for import-export companies targeting worldwide markets",
      features: [
        "Cross-border e-commerce optimization",
        "International shipping SEO",
        "Trade finance keyword targeting",
        "Global compliance content optimization"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const keywordCategories = [
    {
      category: "Rice Export Keywords",
      keywords: ["basmati rice export", "non-basmati rice supplier", "Indian rice exporters", "rice export from India", "premium rice export"]
    },
    {
      category: "Spices Export Keywords", 
      keywords: ["spices export India", "turmeric powder export", "cumin seeds supplier", "cardamom exporters", "Indian spices wholesale"]
    },
    {
      category: "Import Export Services",
      keywords: ["import export consultant", "trade documentation services", "customs clearance", "export finance", "international logistics"]
    },
    {
      category: "Global Trade Keywords",
      keywords: ["international trade company", "export import business", "global supplier network", "B2B export platform", "trade compliance services"]
    }
  ];

  const seoMetrics = [
    { metric: "Organic Traffic Growth", value: "350%", icon: TrendingUp },
    { metric: "Keywords Ranking", value: "2000+", icon: Target },
    { metric: "Global Reach", value: "45 Countries", icon: Globe },
    { metric: "Export Leads", value: "500+ Monthly", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Search className="w-4 h-4 mr-2" />
              SEO & Digital Marketing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Export Import SEO Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Dominate global search results with specialized SEO strategies for import-export businesses. 
              Drive qualified leads from international buyers and suppliers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Get SEO Audit</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/more">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Metrics */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {seoMetrics.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <item.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.metric}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized SEO Services for Export Import Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored SEO strategies designed specifically for international trade companies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Zap className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Keyword Research */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Target Keywords for Export Import Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic keyword research for maximum visibility in international trade searches
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keywordCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-primary" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.keywords.map((keyword, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* More Pages CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="text-center p-8 bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="pt-6">
              <FileText className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-bold mb-4">
                Explore Our Comprehensive Resource Library
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Access detailed guides, market insights, and industry expertise across 30+ specialized pages
              </p>
              <Button size="lg" asChild>
                <Link to="/more">Browse All Resources</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEO;