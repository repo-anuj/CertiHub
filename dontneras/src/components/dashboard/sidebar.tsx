import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  Home, 
  Award, 
  Settings, 
  User, 
  LogOut, 
  Share2, 
  BarChart2,
  HelpCircle,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  className?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const navItems = [
  { icon: <Home size={20} />, label: "Dashboard", path: "/dashboard" },
  { icon: <Award size={20} />, label: "Certificates", path: "/dashboard/certificates" },
  { icon: <Share2 size={20} />, label: "Shared Links", path: "/dashboard/shared" },
  { icon: <BarChart2 size={20} />, label: "Analytics", path: "/dashboard/analytics" },
  { icon: <User size={20} />, label: "Profile", path: "/dashboard/profile" },
  { icon: <Settings size={20} />, label: "Settings", path: "/dashboard/settings" },
];

export function Sidebar({ className, isOpen, setIsOpen }: SidebarProps) {
  const isMobile = useIsMobile();
  
  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && isOpen) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar && !sidebar.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile, isOpen]);
  
  // Sidebar variants for animations
  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0.5 }
  };
  
  return (
    <>
      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      
      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="sidebar"
            className={`${isMobile ? 'w-[240px]' : 'w-56'} h-screen bg-black border-r border-white/10 flex flex-col fixed left-0 top-0 z-40 ${className}`}
            variants={sidebarVariants}
            initial={isMobile ? "closed" : "open"}
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Toggle Button */}
            {isMobile && (
              <motion.button
                className="absolute -right-10 top-4 p-2 rounded-full bg-primary/20 text-white"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            )}
          {/* Logo */}
          <div className="p-6">
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
          </div>

          <Separator className="bg-white/10" />

          {/* Navigation */}
          <nav className="flex-1 py-4 px-2 space-y-0.5 overflow-y-auto">
            {navItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <Link to={item.path} onClick={() => isMobile && setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10 py-1.5 px-2 text-sm"
                  >
                    <span className="mr-2 text-primary">{item.icon}</span>
                    {item.label}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </nav>

          <Separator className="bg-white/10" />

          {/* Help and Logout */}
          <div className="p-2 space-y-0.5">
            <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
              <Button
                variant="ghost"
                className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10 py-1.5 px-2 text-sm"
              >
                <HelpCircle size={18} className="mr-2 text-primary" />
                Help & Support
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
              <Button
                variant="ghost"
                className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10 py-1.5 px-2 text-sm"
              >
                <LogOut size={18} className="mr-2 text-primary" />
                Logout
              </Button>
            </motion.div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
