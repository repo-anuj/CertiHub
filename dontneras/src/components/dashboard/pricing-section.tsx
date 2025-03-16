import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

// Define pricing plan types
interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
}

// Pricing plans data
const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started with certificate management",
    features: [
      { text: "Store up to 5 certificates", included: true },
      { text: "Basic organization tools", included: true },
      { text: "Share via public links", included: true },
      { text: "Standard analytics", included: false },
      { text: "Custom branding", included: false },
      { text: "Priority support", included: false },
    ],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "For professionals who need more features and storage",
    features: [
      { text: "Store unlimited certificates", included: true },
      { text: "Advanced organization tools", included: true },
      { text: "Custom sharing options", included: true },
      { text: "Detailed analytics", included: true },
      { text: "Custom branding", included: true },
      { text: "Priority support", included: false },
    ],
    buttonText: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$29.99",
    description: "For teams and organizations with advanced needs",
    features: [
      { text: "Store unlimited certificates", included: true },
      { text: "Team management tools", included: true },
      { text: "Advanced sharing & permissions", included: true },
      { text: "Advanced analytics & reporting", included: true },
      { text: "Custom branding & white label", included: true },
      { text: "24/7 priority support", included: true },
    ],
    buttonText: "Contact Sales",
  },
];

export function PricingSection() {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <Badge className="mb-4 px-4 py-1 bg-primary/20 text-primary border-primary/30">
          Pricing Plans
        </Badge>
        <h2 className="text-3xl font-bold text-white mb-4">Choose the Right Plan for You</h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Select a plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative"
          >
            {/* Popular badge */}
            {plan.popular && (
              <div className="absolute -top-4 inset-x-0 flex justify-center">
                <Badge className="bg-primary text-white border-primary px-3 py-1">
                  <Star size={14} className="mr-1" /> Most Popular
                </Badge>
              </div>
            )}

            {/* Pricing card */}
            <Card 
              className={`h-full flex flex-col p-6 bg-black/40 backdrop-blur-sm border-white/5 
                ${plan.popular 
                  ? 'relative before:absolute before:inset-0 before:p-[2px] before:rounded-xl before:bg-gradient-to-r before:from-primary before:to-secondary before:-z-10' 
                  : 'hover:border-primary/20'} 
                transition-all duration-300`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  {plan.price !== "$0" && <span className="text-white/60 ml-1">/month</span>}
                </div>
                <p className="text-white/60 text-sm">{plan.description}</p>
              </div>

              <div className="flex-1 space-y-4 mb-6">
                {plan.features.map((feature, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
                  >
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full mr-3 flex items-center justify-center ${
                      feature.included 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-white/10 text-white/40'
                    }`}>
                      {feature.included && <Check size={12} />}
                    </div>
                    <span className={feature.included ? 'text-white/90' : 'text-white/40'}>
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' 
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
