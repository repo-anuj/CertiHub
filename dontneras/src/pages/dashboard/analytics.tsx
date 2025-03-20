import { motion } from "framer-motion";
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart2, 
  TrendingUp, 
  Eye, 
  Share2, 
  Award, 
  Download, 
  Calendar, 
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Globe,
  MapPin,
  Smartphone,
  Laptop,
  ChevronDown
} from "lucide-react";

// Analytic Card Component
interface AnalyticCardProps {
  title: string;
  value: number;
  change: number;
  icon: React.ReactNode;
}

function AnalyticCard({ title, value, change, icon }: AnalyticCardProps) {
  return (
    <Card className="bg-black/40 border-white/5 p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-white/60">{title}</p>
          <h3 className="text-2xl font-bold text-white mt-2">{value}</h3>
          <p className={`text-xs ${change >= 0 ? 'text-green-500' : 'text-red-500'} mt-1 flex items-center`}>
            {change >= 0 ? (
              <ArrowUpRight size={12} className="mr-1" />
            ) : (
              <ArrowDownRight size={12} className="mr-1" />
            )}
            {change >= 0 ? '+' : ''}{change}% vs last month
          </p>
        </div>
        <div className="p-3 rounded-full bg-white/5">
          {icon}
        </div>
      </div>
    </Card>
  );
}

// Sample analytics data
const overviewData = {
  totalViews: 334,
  viewsChange: 12.5,
  totalShares: 28,
  sharesChange: 8.3,
  totalDownloads: 47,
  downloadsChange: -3.2,
  activeCertificates: 12,
  certificatesChange: 25,
};

// Sample monthly views data for chart
const monthlyViewsData = [
  { month: "Jan", views: 120 },
  { month: "Feb", views: 150 },
  { month: "Mar", views: 180 },
  { month: "Apr", views: 220 },
  { month: "May", views: 190 },
  { month: "Jun", views: 240 },
  { month: "Jul", views: 270 },
  { month: "Aug", views: 250 },
  { month: "Sep", views: 310 },
  { month: "Oct", views: 290 },
  { month: "Nov", views: 320 },
  { month: "Dec", views: 334 },
];

// Sample top certificates data
const topCertificates = [
  {
    id: 1,
    title: "Advanced React Development",
    issuer: "React Academy",
    views: 87,
    viewsChange: 12,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    issuer: "Design School",
    views: 64,
    viewsChange: 8,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Data Science Essentials",
    issuer: "Data Institute",
    views: 53,
    viewsChange: -2,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Project Management Professional",
    issuer: "PM Institute",
    views: 41,
    viewsChange: 5,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=250&auto=format&fit=crop",
  },
];

// Sample visitor demographics data
const visitorDemographics = {
  locations: [
    { name: "United States", percentage: 42 },
    { name: "India", percentage: 18 },
    { name: "United Kingdom", percentage: 12 },
    { name: "Germany", percentage: 8 },
    { name: "Canada", percentage: 6 },
    { name: "Other", percentage: 14 },
  ],
  devices: [
    { name: "Desktop", percentage: 64 },
    { name: "Mobile", percentage: 31 },
    { name: "Tablet", percentage: 5 },
  ],
  referrers: [
    { name: "Direct", percentage: 38 },
    { name: "LinkedIn", percentage: 27 },
    { name: "Email", percentage: 15 },
    { name: "Twitter", percentage: 12 },
    { name: "Other", percentage: 8 },
  ],
};

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("year");

  return (
    <DashboardLayout>
      <div className="py-6 space-y-8">
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Analytics</h1>
            <p className="text-white/60 mt-1">
              Track and analyze your certificate performance
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="border-white/10 text-white/70 hover:text-white hover:bg-white/10"
            >
              <Calendar size={16} className="mr-2" />
              <span>Last 12 months</span>
              <ChevronDown size={16} className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white/10 text-white/70 hover:text-white hover:bg-white/10"
            >
              <Download size={16} className="mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Overview cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnalyticCard 
            title="Total Views" 
            value={overviewData.totalViews} 
            change={overviewData.viewsChange} 
            icon={<Eye className="text-primary" size={24} />} 
          />
          <AnalyticCard 
            title="Total Shares" 
            value={overviewData.totalShares} 
            change={overviewData.sharesChange} 
            icon={<Share2 className="text-blue-500" size={24} />} 
          />
          <AnalyticCard 
            title="Total Downloads" 
            value={overviewData.totalDownloads} 
            change={overviewData.downloadsChange} 
            icon={<Download className="text-purple-500" size={24} />} 
          />
          <AnalyticCard 
            title="Active Certificates" 
            value={overviewData.activeCertificates} 
            change={overviewData.certificatesChange} 
            icon={<Award className="text-secondary" size={24} />} 
          />
        </div>

        {/* Tabs for different analytics views */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-black/40 border border-white/10 p-1">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              Overview
            </TabsTrigger>
            <TabsTrigger value="certificates" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              Certificates
            </TabsTrigger>
            <TabsTrigger value="shares" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              Shares
            </TabsTrigger>
            <TabsTrigger value="audience" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              Audience
            </TabsTrigger>
          </TabsList>

          {/* Overview tab content */}
          <TabsContent value="overview" className="mt-6 space-y-6">
            {/* Monthly views chart */}
            <Card className="bg-black/40 border-white/5 p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">Monthly Views</h3>
                  <p className="text-sm text-white/60">Total views over time</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`px-3 py-1 rounded-full text-sm ${
                      timeRange === 'year' 
                        ? 'bg-primary/20 text-primary' 
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setTimeRange('year')}
                  >
                    Year
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`px-3 py-1 rounded-full text-sm ${
                      timeRange === 'quarter' 
                        ? 'bg-primary/20 text-primary' 
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setTimeRange('quarter')}
                  >
                    Quarter
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`px-3 py-1 rounded-full text-sm ${
                      timeRange === 'month' 
                        ? 'bg-primary/20 text-primary' 
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setTimeRange('month')}
                  >
                    Month
                  </Button>
                </div>
              </div>
              
              {/* Chart visualization (simplified for this example) */}
              <div className="h-64 w-full">
                <div className="flex h-full items-end">
                  {monthlyViewsData.map((data, index) => (
                    <div 
                      key={data.month} 
                      className="flex-1 flex flex-col items-center"
                    >
                      <div 
                        className="w-full max-w-[30px] bg-gradient-to-t from-primary/40 to-primary/80 rounded-t-sm"
                        style={{ 
                          height: `${(data.views / Math.max(...monthlyViewsData.map(d => d.views))) * 100}%`,
                          opacity: timeRange === 'month' && index < 9 ? 0.3 : 1
                        }}
                      ></div>
                      <span className="text-xs text-white/50 mt-2">{data.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Top certificates */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Top Performing Certificates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {topCertificates.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="overflow-hidden bg-black/40 border-white/5 hover:border-primary/20 transition-all">
                      <div className="relative h-32">
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
                        <h4 className="font-semibold text-white text-sm line-clamp-1">{cert.title}</h4>
                        <p className="text-xs text-white/60 mt-1">{cert.issuer}</p>
                        <div className="flex items-center mt-3 text-xs">
                          {cert.viewsChange > 0 ? (
                            <span className="flex items-center text-green-500">
                              <ArrowUpRight size={12} className="mr-1" /> +{cert.viewsChange}% views
                            </span>
                          ) : (
                            <span className="flex items-center text-red-500">
                              <ArrowDownRight size={12} className="mr-1" /> {cert.viewsChange}% views
                            </span>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Certificates tab content */}
          <TabsContent value="certificates" className="mt-6 space-y-6">
            <Card className="bg-black/40 border-white/5 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Certificate Performance</h3>
              <p className="text-white/60 mb-6">Detailed analytics for individual certificates</p>
              
              <div className="space-y-4">
                {topCertificates.map((cert, index) => (
                  <div 
                    key={cert.id}
                    className="flex items-center p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="h-12 w-12 rounded-md overflow-hidden mr-4 flex-shrink-0">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-white text-sm truncate">{cert.title}</h4>
                      <p className="text-xs text-white/60">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-xs text-white/60">Views</p>
                        <p className="font-semibold text-white">{cert.views}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-white/60">Trend</p>
                        <p className={cert.viewsChange > 0 ? "text-green-500 font-medium" : "text-red-500 font-medium"}>
                          {cert.viewsChange > 0 ? "+" : ""}{cert.viewsChange}%
                        </p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 rounded-full text-white/70 hover:text-white hover:bg-white/10"
                      >
                        <BarChart2 size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                className="w-full mt-4 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              >
                View All Certificates
              </Button>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-black/40 border-white/5 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Certificate Types</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Development</span>
                    <span className="text-sm text-white/90 font-medium">42%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "42%" }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Design</span>
                    <span className="text-sm text-white/90 font-medium">28%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "28%" }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Data Science</span>
                    <span className="text-sm text-white/90 font-medium">18%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "18%" }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Management</span>
                    <span className="text-sm text-white/90 font-medium">12%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: "12%" }}></div>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-black/40 border-white/5 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Certificate Age</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Less than 3 months</span>
                    <span className="text-sm text-white/90 font-medium">25%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">3-6 months</span>
                    <span className="text-sm text-white/90 font-medium">33%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "33%" }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">6-12 months</span>
                    <span className="text-sm text-white/90 font-medium">30%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Over 1 year</span>
                    <span className="text-sm text-white/90 font-medium">12%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: "12%" }}></div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Shares tab content */}
          <TabsContent value="shares" className="mt-6 space-y-6">
            <Card className="bg-black/40 border-white/5 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Shared Links Performance</h3>
              <p className="text-white/60 mb-6">Analytics for your shared certificate links</p>
              
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 text-sm font-medium text-white/70">Link Name</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-white/70">Type</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-white/70">Views</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-white/70">Clicks</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-white/70">CTR</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-white/70">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 px-4 text-sm text-white">Portfolio Collection</td>
                      <td className="py-3 px-4 text-sm text-white/70 text-center">Collection</td>
                      <td className="py-3 px-4 text-sm text-white/70 text-center">124</td>
                      <td className="py-3 px-4 text-sm text-white/70 text-center">87</td>
                      <td className="py-3 px-4 text-sm text-green-500 text-center">70.2%</td>
                      <td className="py-3 px-4 text-center">
                        <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                          Active
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 px-4 text-sm text-white">React Development Certificate</td>
                      <td className="py-3 px-4 text-sm text-white/70 text-center">Single</td>
                      <td className="py-3 px-4 text-sm text-white/70 text-center">87</td>
                      <td className="py-3 px-4 text-sm text-white/70 text-center">64</td>
                      <td className="py-3 px-4 text-sm text-green-500 text-center">73.6%</td>
                      <td className="py-3 px-4 text-center">
                        <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                          Active
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 px-4 text-sm text-white">Design Certifications</td>
                      <td className="py-3 px-4 text-sm text-white/70 text-center">Collection</td>
                      <td className="py-3 px-4 text-sm text-white/70 text-center">42</td>
                      <td className="py-3 px-4 text-sm text-white/70 text-center">28</td>
                      <td className="py-3 px-4 text-sm text-yellow-500 text-center">66.7%</td>
                      <td className="py-3 px-4 text-center">
                        <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                          Active
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 px-4 text-sm text-white">Data Science Certificate</td>
                      <td className="py-3 px-4 text-sm text-white/70 text-center">Single</td>
                      <td className="py-3 px-4 text-sm text-white/70 text-center">67</td>
                      <td className="py-3 px-4 text-sm text-white/70 text-center">0</td>
                      <td className="py-3 px-4 text-sm text-red-500 text-center">0%</td>
                      <td className="py-3 px-4 text-center">
                        <Badge className="bg-red-500/20 text-red-500 border-red-500/30">
                          Expired
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full mt-6 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              >
                View All Shared Links
              </Button>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-black/40 border-white/5 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Traffic Sources</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">LinkedIn</span>
                    <span className="text-sm text-white/90 font-medium">45%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Direct</span>
                    <span className="text-sm text-white/90 font-medium">28%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "28%" }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Email</span>
                    <span className="text-sm text-white/90 font-medium">15%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">Twitter</span>
                    <span className="text-sm text-white/90 font-medium">12%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "12%" }}></div>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-black/40 border-white/5 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Engagement Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <p className="text-sm text-white/60">Avg. Time on Page</p>
                    <p className="text-xl font-semibold text-white mt-2">2m 34s</p>
                    <p className="text-xs text-green-500 mt-1 flex items-center">
                      <ArrowUpRight size={12} className="mr-1" /> +12% vs last month
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white/5 rounded-lg">
                    <p className="text-sm text-white/60">Bounce Rate</p>
                    <p className="text-xl font-semibold text-white mt-2">32.4%</p>
                    <p className="text-xs text-green-500 mt-1 flex items-center">
                      <ArrowDownRight size={12} className="mr-1" /> -5% vs last month
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white/5 rounded-lg">
                    <p className="text-sm text-white/60">Click-through Rate</p>
                    <p className="text-xl font-semibold text-white mt-2">68.7%</p>
                    <p className="text-xs text-green-500 mt-1 flex items-center">
                      <ArrowUpRight size={12} className="mr-1" /> +3% vs last month
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white/5 rounded-lg">
                    <p className="text-sm text-white/60">Return Visitors</p>
                    <p className="text-xl font-semibold text-white mt-2">24.2%</p>
                    <p className="text-xs text-green-500 mt-1 flex items-center">
                      <ArrowUpRight size={12} className="mr-1" /> +8% vs last month
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Audience tab content */}
          <TabsContent value="audience" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-black/40 border-white/5 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Visitor Locations</h3>
                <div className="space-y-4">
                  {visitorDemographics.locations.map((location, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2 text-white/60" />
                        <span className="text-sm text-white/70">{location.name}</span>
                      </div>
                      <span className="text-sm text-white/90 font-medium">{location.percentage}%</span>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="bg-black/40 border-white/5 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Devices</h3>
                <div className="space-y-4">
                  {visitorDemographics.devices.map((device, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          {device.name === "Desktop" ? (
                            <Laptop size={14} className="mr-2 text-white/60" />
                          ) : device.name === "Mobile" ? (
                            <Smartphone size={14} className="mr-2 text-white/60" />
                          ) : (
                            <Laptop size={14} className="mr-2 text-white/60" />
                          )}
                          <span className="text-sm text-white/70">{device.name}</span>
                        </div>
                        <span className="text-sm text-white/90 font-medium">{device.percentage}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                        <div 
                          className={`h-2 rounded-full ${
                            device.name === "Desktop" 
                              ? "bg-primary" 
                              : device.name === "Mobile" 
                                ? "bg-purple-500" 
                                : "bg-blue-500"
                          }`} 
                          style={{ width: `${device.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="bg-black/40 border-white/5 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Referrers</h3>
                <div className="space-y-4">
                  {visitorDemographics.referrers.map((referrer, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Globe size={14} className="mr-2 text-white/60" />
                        <span className="text-sm text-white/70">{referrer.name}</span>
                      </div>
                      <span className="text-sm text-white/90 font-medium">{referrer.percentage}%</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            
            <Card className="bg-black/40 border-white/5 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Audience Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white/60">Total Visitors</p>
                    <Users className="text-primary" size={18} />
                  </div>
                  <p className="text-xl font-semibold text-white mt-2">1,248</p>
                  <p className="text-xs text-green-500 mt-1 flex items-center">
                    <ArrowUpRight size={12} className="mr-1" /> +15% vs last month
                  </p>
                </div>
                
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white/60">New Visitors</p>
                    <Users className="text-blue-500" size={18} />
                  </div>
                  <p className="text-xl font-semibold text-white mt-2">945</p>
                  <p className="text-xs text-green-500 mt-1 flex items-center">
                    <ArrowUpRight size={12} className="mr-1" /> +18% vs last month
                  </p>
                </div>
                
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white/60">Returning Visitors</p>
                    <Users className="text-purple-500" size={18} />
                  </div>
                  <p className="text-xl font-semibold text-white mt-2">303</p>
                  <p className="text-xs text-green-500 mt-1 flex items-center">
                    <ArrowUpRight size={12} className="mr-1" /> +8% vs last month
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-md font-medium text-white mb-3">Visitor Engagement</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/70">High Engagement</span>
                      <span className="text-sm text-white/90 font-medium">35%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 mt-1">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "35%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/70">Medium Engagement</span>
                      <span className="text-sm text-white/90 font-medium">45%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-white/70">Low Engagement</span>
                      <span className="text-sm text-white/90 font-medium">20%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 mt-1">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
