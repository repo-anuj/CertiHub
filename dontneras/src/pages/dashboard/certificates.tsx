import { motion } from "framer-motion";
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Award, 
  Upload, 
  Search, 
  Filter, 
  Eye, 
  Clock, 
  Plus,
  Download,
  Share2,
  MoreHorizontal,
  Star,
  StarOff
} from "lucide-react";

// Sample certificate data
const certificates = [
  {
    id: 1,
    title: "Advanced React Development",
    issuer: "React Academy",
    date: "March 10, 2025",
    views: 24,
    category: "Development",
    starred: true,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    issuer: "Design School",
    date: "February 15, 2025",
    views: 18,
    category: "Design",
    starred: false,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Data Science Essentials",
    issuer: "Data Institute",
    date: "January 5, 2025",
    views: 32,
    category: "Data Science",
    starred: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Cloud Architecture Certification",
    issuer: "Cloud Academy",
    date: "December 12, 2024",
    views: 15,
    category: "Cloud Computing",
    starred: false,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Cybersecurity Fundamentals",
    issuer: "Security Institute",
    date: "November 20, 2024",
    views: 27,
    category: "Security",
    starred: false,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Project Management Professional",
    issuer: "PM Institute",
    date: "October 5, 2024",
    views: 41,
    category: "Management",
    starred: true,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=250&auto=format&fit=crop",
  },
];

// Categories for filtering
const categories = [
  "All",
  "Development",
  "Design",
  "Data Science",
  "Cloud Computing",
  "Security",
  "Management",
];

export default function Certificates() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  // Filter certificates based on search query and category
  const filteredCertificates = certificates.filter((cert) => {
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || cert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <DashboardLayout>
      <div className="py-6 space-y-8">
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">My Certificates</h1>
            <p className="text-white/60 mt-1">
              Manage and organize all your professional certificates
            </p>
          </div>
          <motion.button 
            className="flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-sm font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Upload size={16} className="mr-2" />
            Upload Certificate
          </motion.button>
        </div>

        {/* Search and filter section */}
        <Card className="bg-black/40 border-white/5 p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={18} />
              <Input 
                placeholder="Search certificates..." 
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              >
                <Filter size={16} className="mr-2" />
                Filter
              </Button>
              <div className="flex rounded-md overflow-hidden border border-white/10">
                <Button 
                  variant="ghost" 
                  className={`px-3 rounded-none ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-white/50'}`}
                  onClick={() => setViewMode('grid')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                  </svg>
                </Button>
                <Button 
                  variant="ghost" 
                  className={`px-3 rounded-none ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-white/50'}`}
                  onClick={() => setViewMode('list')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Category tabs */}
          <div className="mt-4 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  size="sm"
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedCategory === category
                      ? 'bg-primary/20 text-primary'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </Card>

        {/* Tabs for different certificate views */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-black/40 border border-white/10 p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              All
            </TabsTrigger>
            <TabsTrigger value="starred" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              Starred
            </TabsTrigger>
            <TabsTrigger value="recent" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              Recent
            </TabsTrigger>
            <TabsTrigger value="shared" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              Shared
            </TabsTrigger>
          </TabsList>

          {/* All certificates tab content */}
          <TabsContent value="all" className="mt-6">
            {filteredCertificates.length === 0 ? (
              <div className="text-center py-12">
                <Award className="mx-auto h-12 w-12 text-white/20" />
                <h3 className="mt-4 text-lg font-medium text-white">No certificates found</h3>
                <p className="mt-2 text-white/60">Try adjusting your search or filters</p>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCertificates.map((cert, index) => (
                  <CertificateCard key={cert.id} certificate={cert} index={index} />
                ))}
                <AddCertificateCard />
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCertificates.map((cert, index) => (
                  <CertificateListItem key={cert.id} certificate={cert} index={index} />
                ))}
              </div>
            )}
          </TabsContent>

          {/* Starred certificates tab content */}
          <TabsContent value="starred" className="mt-6">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCertificates
                  .filter(cert => cert.starred)
                  .map((cert, index) => (
                    <CertificateCard key={cert.id} certificate={cert} index={index} />
                  ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCertificates
                  .filter(cert => cert.starred)
                  .map((cert, index) => (
                    <CertificateListItem key={cert.id} certificate={cert} index={index} />
                  ))}
              </div>
            )}
          </TabsContent>

          {/* Recent certificates tab content */}
          <TabsContent value="recent" className="mt-6">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCertificates
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .slice(0, 6)
                  .map((cert, index) => (
                    <CertificateCard key={cert.id} certificate={cert} index={index} />
                  ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCertificates
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .slice(0, 6)
                  .map((cert, index) => (
                    <CertificateListItem key={cert.id} certificate={cert} index={index} />
                  ))}
              </div>
            )}
          </TabsContent>

          {/* Shared certificates tab content */}
          <TabsContent value="shared" className="mt-6">
            <div className="text-center py-12">
              <Share2 className="mx-auto h-12 w-12 text-white/20" />
              <h3 className="mt-4 text-lg font-medium text-white">No shared certificates</h3>
              <p className="mt-2 text-white/60">Share your certificates to see them here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

// Certificate Card Component
function CertificateCard({ certificate, index }: { certificate: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      className="relative"
    >
      <Card className="overflow-hidden bg-black/40 border-white/5 hover:border-primary/20 transition-all">
        <div className="relative h-40">
          <img 
            src={certificate.image} 
            alt={certificate.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute top-3 right-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full bg-black/40 text-white hover:bg-black/60"
            >
              {certificate.starred ? (
                <Star size={16} className="text-yellow-400" />
              ) : (
                <StarOff size={16} />
              )}
            </Button>
          </div>
          <div className="absolute bottom-3 left-3 flex items-center">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              <Eye size={12} className="mr-1" /> {certificate.views} views
            </Badge>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-white">{certificate.title}</h3>
          <p className="text-sm text-white/60 mt-1">Issued by {certificate.issuer}</p>
          <div className="flex items-center mt-3 text-xs text-white/50">
            <Clock size={12} className="mr-1" /> {certificate.date}
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
              <Share2 size={12} className="mr-1" /> Share
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs text-white/70 hover:text-white hover:bg-white/10 ml-auto"
            >
              <MoreHorizontal size={12} />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

// Certificate List Item Component
function CertificateListItem({ certificate, index }: { certificate: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.05 + index * 0.03 }}
      whileHover={{ scale: 1.01 }}
    >
      <Card className="bg-black/40 border-white/5 hover:border-primary/20 transition-all p-4">
        <div className="flex items-center">
          <div className="h-16 w-16 rounded-md overflow-hidden mr-4 flex-shrink-0">
            <img 
              src={certificate.image} 
              alt={certificate.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white truncate">{certificate.title}</h3>
              <div className="flex items-center space-x-2 ml-4">
                <Badge className="bg-primary/10 text-primary/90 border-primary/20">
                  {certificate.category}
                </Badge>
                {certificate.starred && (
                  <Star size={16} className="text-yellow-400" />
                )}
              </div>
            </div>
            <p className="text-sm text-white/60 mt-1">Issued by {certificate.issuer}</p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center text-xs text-white/50">
                <Clock size={12} className="mr-1" /> {certificate.date}
                <span className="mx-2">•</span>
                <Eye size={12} className="mr-1" /> {certificate.views} views
              </div>
              <div className="flex gap-1">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0 rounded-full text-white/70 hover:text-white hover:bg-white/10"
                >
                  <Eye size={14} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0 rounded-full text-white/70 hover:text-white hover:bg-white/10"
                >
                  <Download size={14} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0 rounded-full text-white/70 hover:text-white hover:bg-white/10"
                >
                  <Share2 size={14} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0 rounded-full text-white/70 hover:text-white hover:bg-white/10"
                >
                  <MoreHorizontal size={14} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

// Add Certificate Card Component
function AddCertificateCard() {
  return (
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
  );
}
