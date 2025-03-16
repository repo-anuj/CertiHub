import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Upload, 
  Share2, 
  TrendingUp, 
  Eye, 
  Clock, 
  Plus 
} from "lucide-react";

// Sample certificate data
const recentCertificates = [
  {
    id: 1,
    title: "Advanced React Development",
    issuer: "React Academy",
    date: "March 10, 2025",
    views: 24,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    issuer: "Design School",
    date: "February 15, 2025",
    views: 18,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Data Science Essentials",
    issuer: "Data Institute",
    date: "January 5, 2025",
    views: 32,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=250&auto=format&fit=crop",
  },
];

// Stats data
const stats = [
  {
    title: "Total Certificates",
    value: "12",
    icon: <Award className="text-primary" size={24} />,
    change: "+2 this month",
    trend: "up",
  },
  {
    title: "Total Views",
    value: "287",
    icon: <Eye className="text-blue-500" size={24} />,
    change: "+45 this week",
    trend: "up",
  },
  {
    title: "Shared Links",
    value: "8",
    icon: <Share2 className="text-purple-500" size={24} />,
    change: "Active now",
    trend: "neutral",
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="py-6 space-y-8">
        {/* Welcome section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Welcome back, John</h1>
            <p className="text-white/60 mt-1">
              Here's what's happening with your certificates
            </p>
          </div>
          <div className="flex gap-3">
            <motion.button 
              className="flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-sm font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Upload size={16} className="mr-2" />
              Upload Certificate
            </motion.button>
            <motion.button 
              className="flex items-center px-4 py-2 rounded-md border border-white/20 text-white hover:bg-white/10 text-sm font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Share2 size={16} className="mr-2" />
              Share Portfolio
            </motion.button>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="bg-black/40 border-white/5 backdrop-blur-sm hover:border-primary/20 transition-all p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-white/60">{stat.title}</p>
                    <h3 className="text-2xl font-bold text-white mt-2">{stat.value}</h3>
                    <div className="flex items-center mt-2">
                      {stat.trend === "up" && (
                        <TrendingUp size={14} className="text-green-500 mr-1" />
                      )}
                      <span className={`text-xs ${
                        stat.trend === "up" ? "text-green-500" : "text-white/60"
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className="p-3 rounded-full bg-white/5">{stat.icon}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Recent certificates */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Recent Certificates</h2>
            <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/10">
              View all
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="overflow-hidden bg-black/40 border-white/5 hover:border-primary/20 transition-all">
                  <div className="relative h-40">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 flex items-center">
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        <Eye size={12} className="mr-1" /> {cert.views} views
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white">{cert.title}</h3>
                    <p className="text-sm text-white/60 mt-1">Issued by {cert.issuer}</p>
                    <div className="flex items-center mt-3 text-xs text-white/50">
                      <Clock size={12} className="mr-1" /> {cert.date}
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-xs text-white/70 hover:text-white hover:bg-white/10"
                      >
                        View
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-xs text-white/70 hover:text-white hover:bg-white/10"
                      >
                        Share
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Add new certificate card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="flex items-center justify-center h-full min-h-[280px] bg-black/20 border-dashed border-white/20 hover:border-primary/30 transition-all">
                <Button 
                  variant="ghost" 
                  className="flex flex-col items-center p-6 text-white/50 hover:text-primary hover:bg-primary/5"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3">
                    <Plus size={24} />
                  </div>
                  <span className="font-medium">Add New Certificate</span>
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
