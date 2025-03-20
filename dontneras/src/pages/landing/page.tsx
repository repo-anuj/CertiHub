import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check, X, ChevronRight, Twitter, Instagram, Facebook, Linkedin, Github } from "lucide-react";

// Unsplash images for floating effect (certificate-themed)
const floatingImages: string[] = [
  "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503676260728-1f96d765e14e?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580130775562-0cd22b32cefa?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=500&auto=format&fit=crop",
];

// Define types for features, testimonials, and pricing plans
interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface PricingFeature {
  feature: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  highlighted?: boolean;
}

// Define pricing plans
const pricingPlans: PricingPlan[] = [
  {
    name: "Free Plan",
    price: "$0",
    description: "Perfect for individuals just getting started",
    features: [
      { feature: "Store up to 10 certificates", included: true },
      { feature: "Basic organization tools", included: true },
      { feature: "Share via public links", included: true },
      { feature: "Export as PDF", included: true },
      { feature: "Priority support", included: false },
      { feature: "Custom branding", included: false },
    ],
    buttonText: "Get Started",
    highlighted: true,
  },
  {
    name: "Pro Plan",
    price: "$9.99",
    description: "For professionals with growing collections",
    features: [
      { feature: "Unlimited certificates", included: true },
      { feature: "Advanced organization", included: true },
      { feature: "Custom sharing options", included: true },
      { feature: "Export in multiple formats", included: true },
      { feature: "Priority support", included: true },
      { feature: "Custom branding", included: false },
    ],
    buttonText: "Upgrade to Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams and organizations",
    features: [
      { feature: "Team management", included: true },
      { feature: "Advanced security", included: true },
      { feature: "API access", included: true },
      { feature: "Dedicated account manager", included: true },
      { feature: "Priority support", included: true },
      { feature: "Custom branding", included: true },
    ],
    buttonText: "Contact Sales",
  },
];

// Connected background images
const connectedImages: string[] = [
  "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=500&auto=format&fit=crop",
];

interface Testimonial {
  name: string;
  title: string;
  quote: string;
}

const features: Feature[] = [
  {
    title: "Upload Easily",
    description: "Drag and drop your certificates, or browse to upload in seconds",
    icon: "📤",
  },
  {
    title: "Organize Smartly",
    description: "Categorize and manage your achievements effortlessly",
    icon: "📁",
  },
  {
    title: "Share Anywhere",
    description: "Generate shareable links and embed codes instantly",
    icon: "🔗",
  },
  {
    title: "Control Privacy",
    description: "Choose what to share and keep private with granular controls",
    icon: "🔒",
  },
];

// Sample testimonials data (since it was missing in the original)
const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    title: "Software Engineer",
    quote: "CertifyHub made showcasing my certifications so easy and professional!",
  },
  {
    name: "Jane Smith",
    title: "Project Manager",
    quote: "The privacy controls are fantastic—I can share exactly what I want.",
  },
  {
    name: "Alex Carter",
    title: "HR Specialist",
    quote: "A game-changer for managing team credentials efficiently.",
  },
];

const LandingPage: React.FC = () => {
  // References for scroll animations
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Transform values for parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-black overflow-hidden" ref={targetRef}>
      {/* Custom Font Style */}
      <style dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: "Skyscapers";
          src: url("//2ttf.com/webfont/6IF8GLA3aiM/webfont.ttf") format("truetype");
        }
        @font-face {
          font-family: "AlternateFont";
          src: url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #7c3aed, #3b82f6);
          border-radius: 4px;
        }
      `}} />

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              CH
            </motion.div>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              CertifyHub
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <motion.a
              href="#features"
              className="text-white/80 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Features
            </motion.a>
            <motion.a
              href="#testimonials"
              className="text-white/80 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Testimonials
            </motion.a>
            <motion.a
              href="#pricing"
              className="text-white/80 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Pricing
            </motion.a>
          </div>
          <div className="space-x-4">
            <Button
              variant="ghost"
              className="text-sm text-white hover:text-primary hover:bg-primary/10"
              onClick={() => window.location.href = '/auth/sign-in'}
            >
              Sign In
            </Button>
            <Button 
              className="text-sm bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              onClick={() => window.location.href = '/auth/sign-up'}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Section with Parallax and Floating Images */}
      <main className="container mx-auto px-4 pt-32 relative">
        {/* Floating Background Images with enhanced animation */}
        {floatingImages.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Floating Certificate ${index + 1}`}
            className="absolute w-32 h-32 object-cover opacity-10 rounded-lg shadow-lg"
            initial={{
              x: Math.random() * 1200 - 600,
              y: Math.random() * 800 - 400,
              scale: 0.8 + Math.random() * 0.4,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, Math.random() * 10 - 5, 0],
              filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
            }}
            transition={{
              duration: 8 + Math.random() * 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              top: `${15 + index * 18}%`,
              left: `${5 + index * 22}%`,
              zIndex: 0,
            }}
            whileHover={{ scale: 1.2, opacity: 0.3, transition: { duration: 0.3 } }}
          />
        ))}

        {/* Hero Section with Enhanced Gradient Holocircle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-3xl mx-auto relative py-16"
          style={{ color: "white" }}
        >
          {/* Multiple Gradient Holocircles for more dynamic effect */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/30 via-secondary/30 to-transparent blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: 360,
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-l from-blue-500/20 via-purple-500/20 to-transparent blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: -360,
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Animated particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full bg-primary/60"
              initial={{
                x: Math.random() * 600 - 300,
                y: Math.random() * 600 - 300,
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                x: Math.random() * 600 - 300,
                y: Math.random() * 600 - 300,
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                top: "50%",
                left: "50%",
              }}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Badge className="mb-4 px-4 py-1 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
              Certificate Management Reimagined
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight relative z-10 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span
              style={{ fontFamily: "Skyscapers" }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
            >
              Your Achievements,
            </span>{" "}
            <br className="md:hidden" />
            <span
              style={{ fontFamily: "AlternateFont" }}
              className="bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary"
            >
              Organized & Shareable
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Upload, store, and showcase your certificates in one beautiful platform designed for
            professionals who value their achievements.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="text-base bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity px-8 py-6"
                onClick={() => window.location.href = '/auth/sign-up'}
              >
                Get Started Free
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="text-base border-white/20 text-white hover:bg-white/10 px-8 py-6"
              >
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Section with Enhanced Parallax */}
        <div id="features" className="py-24 relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-[-1] rounded-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-4 py-1 bg-primary/20 text-primary border-primary/30">
              Powerful Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              <span style={{ fontFamily: "Skyscapers" }}>Everything You Need</span>{" "}
              <span style={{ fontFamily: "AlternateFont" }} className="text-primary">
                For Your Certificates
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our platform offers a comprehensive suite of tools to manage your professional
              achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(124, 58, 237, 0.1)",
                }}
                className="p-8 rounded-xl bg-black/40 border border-white/5 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 shadow-lg shadow-primary/5"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex items-center justify-center mb-6 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div id="testimonials" className="py-24 relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent z-[-1] rounded-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-4 py-1 bg-secondary/20 text-secondary border-secondary/30">
              What People Say
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              <span style={{ fontFamily: "Skyscapers" }}>Trusted By</span>{" "}
              <span style={{ fontFamily: "AlternateFont" }} className="text-secondary">
                Professionals
              </span>
            </h2>
          </motion.div>

          <Tabs defaultValue="tab1" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-black/40 border border-white/10 p-1">
              <TabsTrigger
                value="tab1"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                Individuals
              </TabsTrigger>
              <TabsTrigger
                value="tab2"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                Teams
              </TabsTrigger>
              <TabsTrigger
                value="tab3"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                Enterprise
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-6">
              <ScrollArea className="h-[400px] rounded-md border border-white/10 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="p-6 rounded-xl bg-black/40 border border-white/5 backdrop-blur-sm hover:border-primary/20 transition-all"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-white font-bold mr-4">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-sm text-white/60">{testimonial.title}</p>
                        </div>
                      </div>
                      <p className="text-white/80 italic">"{testimonial.quote}"</p>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
            {/* Add additional TabsContent for "Teams" and "Enterprise" if needed */}
            <TabsContent value="tab2" className="mt-6">
              <ScrollArea className="h-[400px] rounded-md border border-white/10 p-4">
                <p className="text-white/80">Content for Teams coming soon!</p>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="tab3" className="mt-6">
              <ScrollArea className="h-[400px] rounded-md border border-white/10 p-4">
                <p className="text-white/80">Content for Enterprise coming soon!</p>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Connected Background Images with Scroll Effect */}
        <div className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <motion.div 
              className="relative w-full h-[600px]"
              style={{ y }}
            >
              {connectedImages.map((src, index) => (
                <motion.img
                  key={`connected-${index}`}
                  src={src}
                  alt={`Connected Image ${index + 1}`}
                  className="absolute w-48 h-48 object-cover rounded-lg shadow-lg"
                  initial={{ opacity: 0.6 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  style={{
                    top: `${index * 100}px`,
                    left: `${50 + (index % 2 === 0 ? -200 : 200)}%`,
                    transform: `translateX(-50%) rotate(${index % 2 === 0 ? -5 : 5}deg)`,
                    zIndex: 10 - index,
                  }}
                />
              ))}
              
              {/* Connection lines between images */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
                <motion.path
                  d={`M ${50}% ${50}px 
                      C ${30}% ${150}px, ${70}% ${250}px, ${50}% ${350}px
                      C ${30}% ${450}px, ${70}% ${550}px, ${50}% ${650}px`}
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.5 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </div>
        
        {/* Pricing Section */}
        <div id="pricing" className="py-24 relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-[-1] rounded-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-4 py-1 bg-primary/20 text-primary border-primary/30">
              Simple Pricing
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              <span style={{ fontFamily: "Skyscapers" }}>Choose the Plan</span>{" "}
              <span style={{ fontFamily: "AlternateFont" }} className="text-primary">
                That Fits Your Needs
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Start for free and upgrade as you grow. No hidden fees or complicated pricing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`relative rounded-xl overflow-hidden ${
                  plan.highlighted 
                    ? "before:absolute before:inset-0 before:p-[2px] before:rounded-xl before:bg-gradient-to-r before:from-primary before:to-secondary before:-z-10" 
                    : "border border-white/10"
                }`}
              >
                <Card className="p-6 h-full bg-black/40 backdrop-blur-sm">
                  <div className="space-y-6 h-full flex flex-col">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        {plan.price !== "Custom" && <span className="text-white/60 ml-2">/month</span>}
                      </div>
                      <p className="text-white/60 mt-3">{plan.description}</p>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      {plan.features.map((feature, i) => (
                        <motion.div 
                          key={i} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <div className="mr-3 mt-1">
                            {feature.included ? (
                              <motion.div
                                className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                              >
                                <Check size={12} className="text-white" />
                              </motion.div>
                            ) : (
                              <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                                <X size={12} className="text-white/40" />
                              </div>
                            )}
                          </div>
                          <span className={feature.included ? "text-white" : "text-white/40"}>
                            {feature.feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-6"
                    >
                      <Button 
                        className={`w-full py-6 ${
                          plan.highlighted 
                            ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90" 
                            : "bg-white/10 hover:bg-white/20"
                        }`}
                        onClick={() => window.location.href = '/auth/sign-in'}
                      >
                        {plan.buttonText}
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-black border-t border-white/10 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  CH
                </div>
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  CertifyHub
                </div>
              </div>
              <p className="text-white/60">
                The modern platform for managing and showcasing your professional achievements.
              </p>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="text-white/60 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-white/60 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-white/60 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-white/60 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram size={20} />
                </motion.a>
              </div>
            </div>
            
            {/* Product Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                {["Features", "Pricing", "Testimonials", "FAQ", "Roadmap"].map((item) => (
                  <li key={item}>
                    <motion.a 
                      href="#" 
                      className="text-white/60 hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                {["About Us", "Careers", "Blog", "Press", "Contact"].map((item) => (
                  <li key={item}>
                    <motion.a 
                      href="#" 
                      className="text-white/60 hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {["Terms of Service", "Privacy Policy", "Cookie Policy", "GDPR", "Accessibility"].map((item) => (
                  <li key={item}>
                    <motion.a 
                      href="#" 
                      className="text-white/60 hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 mt-8 text-center text-white/40 text-sm">
            <p>© {new Date().getFullYear()} CertifyHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
