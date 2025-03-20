import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Mail, 
  Briefcase, 
  MapPin, 
  Calendar, 
  Edit, 
  Upload, 
  Trash2, 
  Link, 
  Shield, 
  Award,
  FileText,
  Clock
} from "lucide-react";

// Sample user data
const userData = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  role: "Software Engineer",
  location: "San Francisco, CA",
  joinDate: "March 2023",
  bio: "Passionate software engineer with expertise in React, TypeScript, and Node.js. Focused on building intuitive user interfaces and scalable applications.",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=250&auto=format&fit=crop",
  skills: ["React", "TypeScript", "Node.js", "UI/UX Design", "API Development"],
  education: [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      year: "2018-2020"
    },
    {
      degree: "Bachelor of Engineering",
      institution: "University of California",
      year: "2014-2018"
    }
  ],
  experience: [
    {
      position: "Senior Software Engineer",
      company: "TechCorp Inc.",
      duration: "2021-Present",
      description: "Leading frontend development for enterprise applications."
    },
    {
      position: "Software Developer",
      company: "InnovateTech",
      duration: "2018-2021",
      description: "Developed and maintained web applications using React and Node.js."
    }
  ],
  certificates: [
    {
      title: "Advanced React Development",
      issuer: "React Academy",
      date: "December 2022",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=250&auto=format&fit=crop"
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Design School",
      date: "August 2022",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=250&auto=format&fit=crop"
    },
    {
      title: "Node.js Certification",
      issuer: "Node Foundation",
      date: "March 2022",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=250&auto=format&fit=crop"
    }
  ],
  activity: [
    {
      action: "Added new certificate",
      item: "Advanced React Development",
      time: "2 days ago"
    },
    {
      action: "Updated profile information",
      item: "Bio and skills",
      time: "1 week ago"
    },
    {
      action: "Shared certificate collection",
      item: "Frontend Development",
      time: "2 weeks ago"
    },
    {
      action: "Added new certificate",
      item: "UI/UX Design Fundamentals",
      time: "1 month ago"
    }
  ]
};

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <DashboardLayout>
      <div className="py-6 space-y-8">
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">Profile</h1>
            <p className="text-white/60 mt-1">
              Manage your personal information and certificates
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit size={16} className="mr-2" />
              {isEditing ? "Cancel Editing" : "Edit Profile"}
            </Button>
            {isEditing && (
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                Save Changes
              </Button>
            )}
          </div>
        </div>

        {/* Profile overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile card */}
          <Card className="bg-black/40 border-white/5 p-6 lg:col-span-1">
            <div className="flex flex-col items-center text-center">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 mb-4">
                  <img 
                    src={userData.avatar} 
                    alt={userData.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {isEditing && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:bg-white/20"
                    >
                      <Upload size={18} />
                    </Button>
                  </div>
                )}
              </div>
              <h2 className="text-xl font-bold text-white">{userData.name}</h2>
              <p className="text-white/60 mt-1">{userData.role}</p>
              
              <div className="flex items-center justify-center mt-3 space-x-2">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  Pro Member
                </Badge>
                <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                  <Award size={12} className="mr-1" /> 12 Certificates
                </Badge>
              </div>
              
              <div className="w-full mt-6 space-y-4">
                <div className="flex items-center text-white/70">
                  <Mail size={16} className="mr-3" />
                  <span>{userData.email}</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Briefcase size={16} className="mr-3" />
                  <span>{userData.role}</span>
                </div>
                <div className="flex items-center text-white/70">
                  <MapPin size={16} className="mr-3" />
                  <span>{userData.location}</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Calendar size={16} className="mr-3" />
                  <span>Joined {userData.joinDate}</span>
                </div>
              </div>
              
              <div className="w-full mt-6">
                <h3 className="text-white font-semibold text-left mb-3">Bio</h3>
                {isEditing ? (
                  <textarea 
                    className="w-full h-32 bg-white/5 border border-white/10 rounded-md p-3 text-white resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                    defaultValue={userData.bio}
                  />
                ) : (
                  <p className="text-white/70 text-left">{userData.bio}</p>
                )}
              </div>
              
              <div className="w-full mt-6">
                <h3 className="text-white font-semibold text-left mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {userData.skills.map((skill, index) => (
                    <div key={index} className="relative group">
                      <Badge className="bg-white/10 text-white/80 hover:bg-white/20">
                        {skill}
                      </Badge>
                      {isEditing && (
                        <button className="absolute -top-1 -right-1 w-4 h-4 bg-red-500/80 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <Trash2 size={10} />
                        </button>
                      )}
                    </div>
                  ))}
                  {isEditing && (
                    <Badge className="bg-primary/20 text-primary border-primary/30 cursor-pointer">
                      + Add Skill
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </Card>
          
          {/* Tabs for additional profile information */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="certificates" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-black/40 border border-white/10 p-1">
                <TabsTrigger value="certificates" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                  Certificates
                </TabsTrigger>
                <TabsTrigger value="education" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                  Education
                </TabsTrigger>
                <TabsTrigger value="experience" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                  Experience
                </TabsTrigger>
                <TabsTrigger value="activity" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                  Activity
                </TabsTrigger>
              </TabsList>
              
              {/* Certificates tab */}
              <TabsContent value="certificates" className="mt-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userData.certificates.map((cert, index) => (
                    <Card key={index} className="bg-black/40 border-white/5 overflow-hidden">
                      <div className="flex">
                        <div className="w-24 h-24 flex-shrink-0">
                          <img 
                            src={cert.image} 
                            alt={cert.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 flex-1">
                          <div className="flex justify-between">
                            <h4 className="font-semibold text-white text-sm">{cert.title}</h4>
                            {isEditing && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="h-6 w-6 p-0 text-white/50 hover:text-white hover:bg-white/10"
                              >
                                <Trash2 size={14} />
                              </Button>
                            )}
                          </div>
                          <p className="text-xs text-white/60 mt-1">{cert.issuer}</p>
                          <div className="flex items-center mt-2 text-xs text-white/50">
                            <Calendar size={12} className="mr-1" /> {cert.date}
                          </div>
                          <div className="flex mt-3 gap-2">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-7 px-2 text-xs text-white/70 hover:text-white hover:bg-white/10"
                            >
                              <Link size={12} className="mr-1" /> Share
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-7 px-2 text-xs text-white/70 hover:text-white hover:bg-white/10"
                            >
                              <FileText size={12} className="mr-1" /> View
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                  
                  {isEditing && (
                    <Card className="bg-black/40 border-white/5 border-dashed p-6 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors">
                      <div className="text-center">
                        <Upload size={24} className="mx-auto mb-2 text-primary/70" />
                        <p className="text-white/70 text-sm">Upload New Certificate</p>
                      </div>
                    </Card>
                  )}
                </div>
              </TabsContent>
              
              {/* Education tab */}
              <TabsContent value="education" className="mt-6 space-y-4">
                {userData.education.map((edu, index) => (
                  <Card key={index} className="bg-black/40 border-white/5 p-4">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-semibold text-white">{edu.degree}</h4>
                        <p className="text-sm text-white/60 mt-1">{edu.institution}</p>
                        <p className="text-xs text-white/50 mt-2">{edu.year}</p>
                      </div>
                      {isEditing && (
                        <div className="flex gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 w-8 p-0 text-white/50 hover:text-white hover:bg-white/10"
                          >
                            <Edit size={14} />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 w-8 p-0 text-white/50 hover:text-white hover:bg-white/10"
                          >
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
                
                {isEditing && (
                  <Button 
                    variant="outline" 
                    className="w-full mt-2 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
                  >
                    + Add Education
                  </Button>
                )}
              </TabsContent>
              
              {/* Experience tab */}
              <TabsContent value="experience" className="mt-6 space-y-4">
                {userData.experience.map((exp, index) => (
                  <Card key={index} className="bg-black/40 border-white/5 p-4">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-semibold text-white">{exp.position}</h4>
                        <p className="text-sm text-white/60 mt-1">{exp.company}</p>
                        <p className="text-xs text-white/50 mt-2">{exp.duration}</p>
                        <p className="text-sm text-white/70 mt-3">{exp.description}</p>
                      </div>
                      {isEditing && (
                        <div className="flex gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 w-8 p-0 text-white/50 hover:text-white hover:bg-white/10"
                          >
                            <Edit size={14} />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 w-8 p-0 text-white/50 hover:text-white hover:bg-white/10"
                          >
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
                
                {isEditing && (
                  <Button 
                    variant="outline" 
                    className="w-full mt-2 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
                  >
                    + Add Experience
                  </Button>
                )}
              </TabsContent>
              
              {/* Activity tab */}
              <TabsContent value="activity" className="mt-6">
                <Card className="bg-black/40 border-white/5 p-4">
                  <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {userData.activity.map((item, index) => (
                      <div key={index} className="flex items-start pb-4 border-b border-white/5 last:border-0 last:pb-0">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                          {item.action.includes("certificate") ? (
                            <Award size={18} className="text-primary" />
                          ) : item.action.includes("profile") ? (
                            <User size={18} className="text-blue-500" />
                          ) : item.action.includes("Shared") ? (
                            <Link size={18} className="text-green-500" />
                          ) : (
                            <FileText size={18} className="text-purple-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium">{item.action}</p>
                          <p className="text-white/60 text-sm">{item.item}</p>
                          <div className="flex items-center mt-1 text-xs text-white/50">
                            <Clock size={12} className="mr-1" /> {item.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
