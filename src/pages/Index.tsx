import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Quote
} from 'lucide-react';
import heroImage from '@/assets/hero-dashboard.jpg';

const Index = () => {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Lead Scoring",
      description: "Automatically score and prioritize leads based on behavior, demographics, and engagement patterns."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Sales Pipeline",
      description: "Visualize and manage your entire sales pipeline with drag-and-drop simplicity."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Lead Nurturing",
      description: "Automated email sequences and follow-ups to nurture leads through the sales funnel."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Analytics & Reporting",
      description: "Comprehensive dashboards and reports to track performance and ROI."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Data Security",
      description: "Enterprise-grade security with SOC 2 compliance and GDPR protection."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "CRM Integration",
      description: "Seamless integration with popular CRM platforms and sales tools."
    }
  ];

  const testimonials = [
    {
      company: "TechFlow Solutions",
      industry: "SaaS",
      quote: "iLMS increased our lead conversion rate by 40% within the first quarter. The lead scoring feature is incredibly accurate.",
      author: "Sarah Chen",
      role: "VP of Sales"
    },
    {
      company: "InnovateB2B",
      industry: "Consulting",
      quote: "The automation capabilities saved our team 20 hours per week. ROI was evident within 30 days.",
      author: "Michael Rodriguez",
      role: "Sales Director"
    },
    {
      company: "GrowthCorp",
      industry: "Marketing",
      quote: "Best lead management system we've used. The pipeline visualization transformed our sales process.",
      author: "Emily Johnson",
      role: "Chief Revenue Officer"
    }
  ];

  const stats = [
    { value: "40%", label: "Increase in Lead Conversion" },
    { value: "30+", label: "CRM Integrations" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "500+", label: "Happy Customers" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge variant="secondary" className="text-primary bg-white/20 border-white/30">
                #1 iLMS Platform for B2B Sales Teams
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Streamline Your
                  <span className="block text-accent"> Lead Management</span>
                </h1>
                <p className="text-xl text-white/90 max-w-2xl">
                  Transform your sales process with our intelligent Lead Management System (iLMS). 
                  Score, nurture, and convert leads more efficiently than ever before.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={() => handleExternalLink('https://salescentri.com/get-started/free-trial')}
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={() => handleExternalLink('https://salescentri.com/get-started/book-demo')}
                  className="border-white text-white hover:bg-white/10"
                >
                  Book a Demo
                </Button>
              </div>

              <div className="flex items-center space-x-4 text-sm text-white/80">
                <CheckCircle className="h-4 w-4" />
                <span>No Credit Card Required</span>
                <CheckCircle className="h-4 w-4" />
                <span>14-Day Free Trial</span>
              </div>
            </div>

            <div className="relative animate-float">
              <img 
                src={heroImage} 
                alt="iLMS Dashboard Interface" 
                className="rounded-lg shadow-hero w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-in">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Powerful Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything You Need for Lead Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive iLMS platform provides all the tools and features you need 
              to capture, nurture, and convert leads into customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Customer Success
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how businesses like yours are transforming their sales processes with our iLMS platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company} • {testimonial.industry}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Lead Management?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of sales teams who trust our iLMS platform to streamline 
              their lead management and boost conversion rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => handleExternalLink('https://salescentri.com/get-started/free-trial')}
                className="bg-white text-primary hover:bg-white/90"
              >
                Start Free Trial Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => handleExternalLink('https://salescentri.com/contact/sales-inquiry')}
                className="border-white text-white hover:bg-white/10"
              >
                Talk to Sales
              </Button>
            </div>
            <p className="text-sm text-white/70">
              No setup fees • Cancel anytime • 24/7 support included
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
