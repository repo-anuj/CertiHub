import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Bell, 
  Shield, 
  Eye, 
  Lock, 
  CreditCard, 
  LogOut, 
  Trash2, 
  Moon, 
  Sun, 
  Monitor, 
  Smartphone, 
  Mail, 
  MessageSquare, 
  Globe, 
  UserPlus,
  Download,
  Upload,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

export default function Settings() {
  const [theme, setTheme] = useState("dark");
  const [notificationEmail, setNotificationEmail] = useState(true);
  const [notificationApp, setNotificationApp] = useState(true);
  const [notificationSMS, setNotificationSMS] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState("public");
  const [certificateVisibility, setCertificateVisibility] = useState("selected");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  
  return (
    <DashboardLayout>
      <div className="py-6 space-y-8">
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Settings</h1>
            <p className="text-white/60 mt-1">
              Manage your account preferences and settings
            </p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            Save Changes
          </Button>
        </div>

        {/* Settings tabs */}
        <Tabs defaultValue="account" className="w-full">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar navigation */}
            <div className="md:w-64 flex-shrink-0">
              <TabsList className="flex flex-col h-auto bg-black/40 border border-white/10 p-1 rounded-lg">
                <TabsTrigger 
                  value="account" 
                  className="justify-start px-4 py-3 data-[state=active]:bg-primary/20 data-[state=active]:text-primary w-full"
                >
                  <User size={16} className="mr-2" />
                  Account
                </TabsTrigger>
                <TabsTrigger 
                  value="notifications" 
                  className="justify-start px-4 py-3 data-[state=active]:bg-primary/20 data-[state=active]:text-primary w-full"
                >
                  <Bell size={16} className="mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger 
                  value="privacy" 
                  className="justify-start px-4 py-3 data-[state=active]:bg-primary/20 data-[state=active]:text-primary w-full"
                >
                  <Eye size={16} className="mr-2" />
                  Privacy
                </TabsTrigger>
                <TabsTrigger 
                  value="appearance" 
                  className="justify-start px-4 py-3 data-[state=active]:bg-primary/20 data-[state=active]:text-primary w-full"
                >
                  <Moon size={16} className="mr-2" />
                  Appearance
                </TabsTrigger>
                <TabsTrigger 
                  value="security" 
                  className="justify-start px-4 py-3 data-[state=active]:bg-primary/20 data-[state=active]:text-primary w-full"
                >
                  <Shield size={16} className="mr-2" />
                  Security
                </TabsTrigger>
                <TabsTrigger 
                  value="billing" 
                  className="justify-start px-4 py-3 data-[state=active]:bg-primary/20 data-[state=active]:text-primary w-full"
                >
                  <CreditCard size={16} className="mr-2" />
                  Billing
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Tab content */}
            <div className="flex-1">
              {/* Account Settings */}
              <TabsContent value="account" className="mt-0">
                <Card className="bg-black/40 border-white/5 p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">Account Information</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Full Name
                        </label>
                        <input 
                          type="text" 
                          defaultValue="Alex Johnson"
                          className="w-full bg-white/5 border border-white/10 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          defaultValue="alex.johnson@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Username
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white/40">
                            @
                          </span>
                          <input 
                            type="text" 
                            defaultValue="alexjohnson"
                            className="w-full bg-white/5 border border-white/10 rounded-md p-2.5 pl-8 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          defaultValue="+1 (555) 123-4567"
                          className="w-full bg-white/5 border border-white/10 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-black/40 border-white/5 p-6 mt-6">
                  <h2 className="text-xl font-semibold text-white mb-6">Account Actions</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                      <div className="flex items-center">
                        <LogOut size={20} className="text-white/70 mr-3" />
                        <div>
                          <h3 className="text-white font-medium">Sign Out</h3>
                          <p className="text-white/60 text-sm">Sign out from your account</p>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        className="border-white/10 text-white/70 hover:text-white hover:bg-white/10"
                      >
                        Sign Out
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-red-500/20 rounded-lg">
                      <div className="flex items-center">
                        <Trash2 size={20} className="text-red-500/70 mr-3" />
                        <div>
                          <h3 className="text-red-500/90 font-medium">Delete Account</h3>
                          <p className="text-white/60 text-sm">Permanently delete your account and all data</p>
                        </div>
                      </div>
                      <Button 
                        variant="destructive" 
                        className="bg-red-500/20 text-red-500 hover:bg-red-500/30 border-0"
                      >
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              {/* Notification Settings */}
              <TabsContent value="notifications" className="mt-0">
                <Card className="bg-black/40 border-white/5 p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">Notification Preferences</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                      <div className="flex items-center">
                        <Mail size={20} className="text-white/70 mr-3" />
                        <div>
                          <h3 className="text-white font-medium">Email Notifications</h3>
                          <p className="text-white/60 text-sm">Receive notifications via email</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={notificationEmail}
                          onChange={() => setNotificationEmail(!notificationEmail)}
                        />
                        <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                      <div className="flex items-center">
                        <MessageSquare size={20} className="text-white/70 mr-3" />
                        <div>
                          <h3 className="text-white font-medium">In-App Notifications</h3>
                          <p className="text-white/60 text-sm">Receive notifications within the app</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="sr-only peer" 
                          checked={notificationApp}
                          onChange={() => setNotificationApp(!notificationApp)}
                        />
                        <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              {/* Privacy Settings */}
              <TabsContent value="privacy" className="mt-0">
                <Card className="bg-black/40 border-white/5 p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">Privacy Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-medium mb-4">Profile Visibility</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { 
                            id: "public", 
                            title: "Public", 
                            desc: "Anyone can view your profile", 
                            icon: <Globe size={20} className="text-green-500" /> 
                          },
                          { 
                            id: "private", 
                            title: "Private", 
                            desc: "Only you can view your profile", 
                            icon: <Lock size={20} className="text-red-500" /> 
                          },
                          { 
                            id: "connections", 
                            title: "Connections Only", 
                            desc: "Only your connections can view", 
                            icon: <UserPlus size={20} className="text-blue-500" /> 
                          }
                        ].map((option) => (
                          <div 
                            key={option.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-all ${
                              profileVisibility === option.id 
                                ? "border-primary bg-primary/10" 
                                : "border-white/10 hover:border-white/30"
                            }`}
                            onClick={() => setProfileVisibility(option.id)}
                          >
                            <div className="flex items-center mb-2">
                              {option.icon}
                              <h4 className="text-white font-medium ml-2">{option.title}</h4>
                            </div>
                            <p className="text-white/60 text-sm">{option.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              {/* Appearance Settings */}
              <TabsContent value="appearance" className="mt-0">
                <Card className="bg-black/40 border-white/5 p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">Appearance Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-medium mb-4">Theme</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { 
                            id: "light", 
                            title: "Light", 
                            desc: "Light mode interface", 
                            icon: <Sun size={20} className="text-yellow-500" /> 
                          },
                          { 
                            id: "dark", 
                            title: "Dark", 
                            desc: "Dark mode interface", 
                            icon: <Moon size={20} className="text-blue-400" /> 
                          },
                          { 
                            id: "system", 
                            title: "System", 
                            desc: "Follow system preference", 
                            icon: <Monitor size={20} className="text-green-500" /> 
                          }
                        ].map((option) => (
                          <div 
                            key={option.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-all ${
                              theme === option.id 
                                ? "border-primary bg-primary/10" 
                                : "border-white/10 hover:border-white/30"
                            }`}
                            onClick={() => setTheme(option.id)}
                          >
                            <div className="flex items-center mb-2">
                              {option.icon}
                              <h4 className="text-white font-medium ml-2">{option.title}</h4>
                            </div>
                            <p className="text-white/60 text-sm">{option.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              {/* Security Settings */}
              <TabsContent value="security" className="mt-0">
                <Card className="bg-black/40 border-white/5 p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">Security Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-medium mb-4">Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-white/70 mb-2">
                            Current Password
                          </label>
                          <input 
                            type="password" 
                            placeholder="••••••••"
                            className="w-full bg-white/5 border border-white/10 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white/70 mb-2">
                            New Password
                          </label>
                          <input 
                            type="password" 
                            placeholder="••••••••"
                            className="w-full bg-white/5 border border-white/10 rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                        <Button className="mt-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                          Update Password
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg">
                      <div className="flex items-center">
                        <Shield size={20} className="text-white/70 mr-3" />
                        <div>
                          <h3 className="text-white font-medium">Two-Factor Authentication</h3>
                          <p className="text-white/60 text-sm">Add an extra layer of security</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer mr-3">
                          <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={twoFactorEnabled}
                            onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                          />
                          <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-white/10 text-white/70 hover:text-white hover:bg-white/10"
                          disabled={!twoFactorEnabled}
                        >
                          Setup
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              {/* Billing Settings */}
              <TabsContent value="billing" className="mt-0">
                <Card className="bg-black/40 border-white/5 p-6">
                  <h2 className="text-xl font-semibold text-white mb-6">Billing Information</h2>
                  
                  <div className="space-y-6">
                    <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
                      <div className="flex items-center mb-4">
                        <Badge className="bg-primary/20 text-primary border-primary/30 mr-2">Current Plan</Badge>
                        <h3 className="text-white font-medium">Professional Plan</h3>
                      </div>
                      <p className="text-white/60 mb-4">Your subscription renews on April 15, 2025</p>
                      <div className="flex gap-3">
                        <Button variant="outline" className="border-white/10 text-white/70 hover:text-white hover:bg-white/10">
                          Change Plan
                        </Button>
                        <Button variant="outline" className="border-red-500/20 text-red-500/90 hover:text-red-500 hover:bg-red-500/10">
                          Cancel Subscription
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
