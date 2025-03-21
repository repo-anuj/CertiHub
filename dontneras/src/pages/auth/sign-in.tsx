import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const SignInPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to onboarding page after successful sign-in
      navigate("/onboarding");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90"></div>
        
        {/* Animated gradient circles */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: 360,
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-l from-blue-500/10 via-purple-500/10 to-transparent blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: -360,
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Animated particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-primary/40"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10 relative"
      >
        <div className="relative">
          {/* Logo and branding */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                CH
              </motion.div>
              <div className="text-2xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                CertifyHub
              </div>
            </div>
          </div>

          {/* Card with gradient border */}
          <div className="relative rounded-xl overflow-hidden before:absolute before:inset-0 before:p-[2px] before:rounded-xl before:bg-gradient-to-r before:from-primary before:to-secondary before:-z-10">
            <Card className="p-8 bg-black/80 backdrop-blur-sm border-none">
              <div className="text-center mb-8 pt-6">
                <Badge className="mb-4 px-4 py-1 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                  Welcome Back
                </Badge>
                <h1 className="text-3xl font-bold mb-2 text-white">Sign In</h1>
                <p className="text-white/60">Access your certificate dashboard</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 rounded-md border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full p-3 rounded-md border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    required
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 text-white/70">
                    <input type="checkbox" className="rounded border-white/20 bg-black/40" />
                    <span>Remember me</span>
                  </label>
                  <motion.a 
                    href="#" 
                    className="text-primary hover:text-primary/80 transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    Forgot password?
                  </motion.a>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="w-full py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white"
                    type="submit" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign in"}
                  </Button>
                </motion.div>
              </form>

              <div className="mt-8 text-center text-sm">
                <span className="text-white/60">Don't have an account? </span>
                <motion.a 
                  href="/auth/sign-up" 
                  className="text-primary hover:text-primary/80 font-medium"
                  whileHover={{ x: 3 }}
                >
                  Sign up
                </motion.a>
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignInPage;
