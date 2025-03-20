import { motion } from "framer-motion";
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Share2, 
  Search, 
  Link, 
  Copy, 
  Clock, 
  Eye, 
  Settings, 
  MoreHorizontal,
  Globe,
  Lock,
  Calendar,
  Trash2,
  CheckCircle2
} from "lucide-react";

// Sample shared links data
const sharedLinks = [
  {
    id: 1,
    name: "Portfolio Collection",
    url: "https://certifyhub.com/s/portfolio-123456",
    type: "Collection",
    visibility: "Public",
    certificates: 5,
    views: 124,
    created: "March 15, 2025",
    expires: "Never",
    active: true,
  },
  {
    id: 2,
    name: "React Development Certificate",
    url: "https://certifyhub.com/s/react-cert-789012",
    type: "Single Certificate",
    visibility: "Private",
    certificates: 1,
    views: 8,
    created: "March 10, 2025",
    expires: "April 10, 2025",
    active: true,
  },
  {
    id: 3,
    name: "Design Certifications",
    url: "https://certifyhub.com/s/design-345678",
    type: "Collection",
    visibility: "Password Protected",
    certificates: 3,
    views: 42,
    created: "February 28, 2025",
    expires: "Never",
    active: true,
  },
  {
    id: 4,
    name: "Data Science Certificate",
    url: "https://certifyhub.com/s/data-901234",
    type: "Single Certificate",
    visibility: "Public",
    certificates: 1,
    views: 67,
    created: "February 15, 2025",
    expires: "Never",
    active: false,
  },
  {
    id: 5,
    name: "Technical Certifications",
    url: "https://certifyhub.com/s/tech-567890",
    type: "Collection",
    visibility: "Public",
    certificates: 4,
    views: 93,
    created: "January 20, 2025",
    expires: "Never",
    active: true,
  },
];

export default function SharedLinks() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Filter shared links based on search query
  const filteredLinks = sharedLinks.filter((link) => {
    return link.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           link.url.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Handle copy link to clipboard
  const handleCopyLink = (id: number, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <DashboardLayout>
      <div className="py-6 space-y-8">
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Shared Links</h1>
            <p className="text-white/60 mt-1">
              Manage and track all your shared certificate links
            </p>
          </div>
          <motion.button 
            className="flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-sm font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Share2 size={16} className="mr-2" />
            Create New Link
          </motion.button>
        </div>

        {/* Search section */}
        <Card className="bg-black/40 border-white/5 p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={18} />
              <Input 
                placeholder="Search shared links..." 
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              variant="outline" 
              className="border-white/10 text-white/70 hover:text-white hover:bg-white/10"
            >
              <Settings size={16} className="mr-2" />
              Link Settings
            </Button>
          </div>
        </Card>

        {/* Tabs for different link views */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-black/40 border border-white/10 p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              All Links
            </TabsTrigger>
            <TabsTrigger value="active" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              Active
            </TabsTrigger>
            <TabsTrigger value="expired" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              Expired
            </TabsTrigger>
          </TabsList>

          {/* All links tab content */}
          <TabsContent value="all" className="mt-6">
            {filteredLinks.length === 0 ? (
              <div className="text-center py-12">
                <Share2 className="mx-auto h-12 w-12 text-white/20" />
                <h3 className="mt-4 text-lg font-medium text-white">No shared links found</h3>
                <p className="mt-2 text-white/60">Try adjusting your search or create a new shared link</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredLinks.map((link, index) => (
                  <SharedLinkCard 
                    key={link.id} 
                    link={link} 
                    index={index} 
                    copiedId={copiedId}
                    onCopy={handleCopyLink}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          {/* Active links tab content */}
          <TabsContent value="active" className="mt-6">
            {filteredLinks.filter(link => link.active).length === 0 ? (
              <div className="text-center py-12">
                <Share2 className="mx-auto h-12 w-12 text-white/20" />
                <h3 className="mt-4 text-lg font-medium text-white">No active links found</h3>
                <p className="mt-2 text-white/60">Try adjusting your search or create a new shared link</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredLinks
                  .filter(link => link.active)
                  .map((link, index) => (
                    <SharedLinkCard 
                      key={link.id} 
                      link={link} 
                      index={index} 
                      copiedId={copiedId}
                      onCopy={handleCopyLink}
                    />
                  ))}
              </div>
            )}
          </TabsContent>

          {/* Expired links tab content */}
          <TabsContent value="expired" className="mt-6">
            {filteredLinks.filter(link => !link.active).length === 0 ? (
              <div className="text-center py-12">
                <Share2 className="mx-auto h-12 w-12 text-white/20" />
                <h3 className="mt-4 text-lg font-medium text-white">No expired links found</h3>
                <p className="mt-2 text-white/60">All your links are currently active</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredLinks
                  .filter(link => !link.active)
                  .map((link, index) => (
                    <SharedLinkCard 
                      key={link.id} 
                      link={link} 
                      index={index} 
                      copiedId={copiedId}
                      onCopy={handleCopyLink}
                    />
                  ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Analytics summary */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Link Analytics Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-black/40 border-white/5 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-white/60">Total Views</p>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    {sharedLinks.reduce((sum, link) => sum + link.views, 0)}
                  </h3>
                  <p className="text-xs text-white/50 mt-2">Across all shared links</p>
                </div>
                <div className="p-3 rounded-full bg-white/5">
                  <Eye className="text-primary" size={24} />
                </div>
              </div>
            </Card>
            
            <Card className="bg-black/40 border-white/5 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-white/60">Active Links</p>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    {sharedLinks.filter(link => link.active).length}
                  </h3>
                  <p className="text-xs text-white/50 mt-2">Out of {sharedLinks.length} total links</p>
                </div>
                <div className="p-3 rounded-full bg-white/5">
                  <Link className="text-blue-500" size={24} />
                </div>
              </div>
            </Card>
            
            <Card className="bg-black/40 border-white/5 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-white/60">Shared Certificates</p>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    {sharedLinks.reduce((sum, link) => sum + link.certificates, 0)}
                  </h3>
                  <p className="text-xs text-white/50 mt-2">Individual and collections</p>
                </div>
                <div className="p-3 rounded-full bg-white/5">
                  <Share2 className="text-purple-500" size={24} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

// Shared Link Card Component
function SharedLinkCard({ 
  link, 
  index, 
  copiedId,
  onCopy
}: { 
  link: any, 
  index: number,
  copiedId: number | null,
  onCopy: (id: number, url: string) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.05 + index * 0.03 }}
      whileHover={{ scale: 1.01 }}
    >
      <Card className={`bg-black/40 border-white/5 hover:border-primary/20 transition-all p-5 ${!link.active ? 'opacity-60' : ''}`}>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center">
              <h3 className="font-semibold text-white">{link.name}</h3>
              <Badge 
                className={`ml-3 ${
                  link.active 
                    ? 'bg-green-500/20 text-green-500 border-green-500/30' 
                    : 'bg-red-500/20 text-red-500 border-red-500/30'
                }`}
              >
                {link.active ? 'Active' : 'Expired'}
              </Badge>
              <Badge 
                className="ml-2 bg-primary/10 text-primary/90 border-primary/20"
              >
                {link.type}
              </Badge>
            </div>
            
            <div className="flex items-center mt-2 text-sm text-white/70">
              <div className="flex items-center">
                <Link size={14} className="mr-1" />
                <span className="truncate max-w-[200px] md:max-w-[300px]">{link.url}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 px-2 ml-2 text-xs text-white/70 hover:text-white hover:bg-white/10"
                onClick={() => onCopy(link.id, link.url)}
              >
                {copiedId === link.id ? (
                  <>
                    <CheckCircle2 size={12} className="mr-1 text-green-500" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={12} className="mr-1" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-xs text-white/50">
              <div className="flex items-center">
                <Globe size={12} className="mr-1" /> 
                {link.visibility}
              </div>
              <div className="flex items-center">
                <Eye size={12} className="mr-1" /> 
                {link.views} views
              </div>
              <div className="flex items-center">
                <Clock size={12} className="mr-1" /> 
                Created: {link.created}
              </div>
              <div className="flex items-center">
                <Calendar size={12} className="mr-1" /> 
                Expires: {link.expires}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:self-start">
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
              <Settings size={14} />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0 rounded-full text-white/70 hover:text-white hover:bg-white/10"
            >
              <Trash2 size={14} />
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
      </Card>
    </motion.div>
  );
}
