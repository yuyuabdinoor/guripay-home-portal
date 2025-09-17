import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DemoModal } from './DemoModal';
import heroImage from '@/assets/hero-image.jpg';
import { 
  Building2, 
  Users, 
  CreditCard, 
  BarChart3, 
  Shield, 
  Smartphone,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Play,
  Banknote,
  TrendingUp,
  Calendar
} from 'lucide-react';

export function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: Users,
      title: "Tenant Management",
      description: "Comprehensive tenant profiles, lease tracking, and communication tools all in one place."
    },
    {
      icon: CreditCard,
      title: "MPesa & Hormuud Integration",
      description: "Seamless payment processing with real-time confirmations and automated receipts."
    },
    {
      icon: BarChart3,
      title: "Financial Reports",
      description: "Detailed analytics, income tracking, and automated financial reporting."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-level security with full compliance to Kenyan financial regulations."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for mobile use with offline capabilities and push notifications."
    },
    {
      icon: Building2,
      title: "Multi-Property Support",
      description: "Manage multiple properties and unit types from a single dashboard."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "KSh 2,500",
      period: "/month",
      description: "Perfect for small landlords",
      features: [
        "Up to 10 units",
        "Basic tenant management",
        "MPesa integration",
        "Monthly reports",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "KSh 5,000",
      period: "/month",
      description: "For growing property portfolios",
      features: [
        "Up to 50 units",
        "Advanced analytics",
        "Multi-property support",
        "Automated receipts",
        "Priority support",
        "Custom reports"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large property managers",
      features: [
        "Unlimited units",
        "White-label solution",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold text-primary">GURIPAY</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-smooth">Features</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-smooth">Pricing</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a>
              <DemoModal 
                type="demo"
                trigger={<Button variant="outline">Book Demo</Button>}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-light/90 to-secondary/80"></div>
        <div className="absolute inset-0 opacity-20 bg-white/5"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              {/* Social Proof */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-secondary rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">J</div>
                  <div className="w-8 h-8 bg-warning rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">M</div>
                  <div className="w-8 h-8 bg-success rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">A</div>
                </div>
                <div className="text-sm">
                  <span className="text-yellow-300">★★★★★</span>
                  <span className="ml-2 text-white/80">4.9 from 500+ landlords</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Simple
                <span className="block text-secondary">property management</span>
                <span className="block text-white">for Kenyan landlords</span>
              </h1>
              
              <p className="text-xl mb-8 text-white/90 max-w-lg leading-relaxed">
                From tenant screening to M-Pesa rent collection. GURIPAY helps you build a more profitable rental portfolio directly from your phone.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold"
                  onClick={() => setIsModalOpen(true)}
                >
                  Watch Demo
                  <Play className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Free 14-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>No setup costs</span>
                </div>
              </div>
            </div>
            
            {/* Dashboard Preview */}
            <div className="relative lg:ml-8">
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-primary rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Dashboard Overview</h3>
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-secondary">KSH 850K</div>
                      <div className="text-sm text-white/80">Monthly Revenue</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-warning">24</div>
                      <div className="text-sm text-white/80">Active Tenants</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-secondary rounded-full"></div>
                        <div>
                          <div className="font-medium">John Kamau</div>
                          <div className="text-xs text-white/60">Apt 2B</div>
                        </div>
                      </div>
                      <div className="text-success text-sm font-medium">Paid</div>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-warning rounded-full"></div>
                        <div>
                          <div className="font-medium">Mary Wanjiku</div>
                          <div className="text-xs text-white/60">Apt 1A</div>
                        </div>
                      </div>
                      <div className="text-warning text-sm font-medium">Due</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary text-white rounded-full p-3 shadow-lg animate-bounce">
                <Smartphone className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-success text-white rounded-full p-3 shadow-lg">
                <Banknote className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Everything You Need to Manage Properties
            </h2>  
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From tenant screening to rent collection, GURIPAY covers all your property management needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-500 border-0 shadow-custom-md hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-secondary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground">Properties Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">98%</div>
              <div className="text-muted-foreground">Payment Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-muted-foreground">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your property portfolio. All plans include core features 
              with no hidden fees.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative border-0 shadow-custom-md hover:shadow-elegant transition-all duration-300 ${plan.popular ? 'ring-2 ring-secondary scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="secondary" className="px-4 py-1">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-primary">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <DemoModal 
                    type="trial"
                    trigger={
                      <Button 
                        variant={plan.popular ? "default" : "outline"} 
                        className="w-full"
                        size="lg"
                      >
                        Get Started
                      </Button>
                    }
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join hundreds of landlords who trust GURIPAY to manage their properties
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <Phone className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-muted-foreground">+254 700 123 456</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <Mail className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">hello@guripay.co.ke</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-secondary/10 p-3 rounded-lg">
                        <MapPin className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Office</p>
                        <p className="text-muted-foreground">Westlands, Nairobi, Kenya</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-2xl shadow-custom-md">
                <h3 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <DemoModal 
                      type="demo"
                      trigger={
                        <Button variant="outline" className="flex-1" size="lg">
                          Schedule Demo
                        </Button>
                      }
                    />
                    <DemoModal 
                      type="trial"
                      trigger={
                        <Button className="flex-1" size="lg">
                          Start Free Trial
                        </Button>
                      }
                    />
                  </div>
                  <p className="text-center text-muted-foreground">
                    Questions? Call us at +254 700 123 456
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Building2 className="h-6 w-6" />
                <span className="text-xl font-bold">GURIPAY</span>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Simplifying property management for landlords across Kenya with modern, 
                secure, and user-friendly solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#features" className="hover:text-primary-foreground transition-smooth">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary-foreground transition-smooth">Pricing</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Security</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Help Center</a></li>
                <li><a href="#contact" className="hover:text-primary-foreground transition-smooth">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Documentation</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Training</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">About Us</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 GURIPAY. All rights reserved. Built for Kenya's property managers.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}