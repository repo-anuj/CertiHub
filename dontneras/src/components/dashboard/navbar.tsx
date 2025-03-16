import { motion } from "framer-motion";
import { Bell, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export function Navbar() {
  return (
    <div className="h-16 border-b border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-10">
      {/* Left side - Search */}
      <div className="relative w-64">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/40" size={18} />
        <Input 
          type="text" 
          placeholder="Search certificates..." 
          className="pl-9 bg-white/5 border-white/10 text-white/80 focus:border-primary/50 w-full"
        />
      </div>
      
      {/* Right side - User menu and notifications */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 relative">
              <Bell size={20} />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-primary text-white">
                3
              </Badge>
            </Button>
          </motion.div>
        </div>
        
        {/* User menu */}
        <motion.div 
          className="flex items-center cursor-pointer"
          whileHover={{ opacity: 0.9 }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold mr-2">
            J
          </div>
          <div className="mr-2">
            <div className="text-sm font-medium text-white">John Doe</div>
            <div className="text-xs text-white/50">Premium Plan</div>
          </div>
          <ChevronDown size={16} className="text-white/50" />
        </motion.div>
      </div>
    </div>
  );
}
