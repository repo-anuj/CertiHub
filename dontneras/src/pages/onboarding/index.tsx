import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  ArrowRight, 
  CheckCircle2
} from "lucide-react";

// Define the steps for the onboarding process
const steps = [
  {
    id: "personal",
    title: "Personal Information",
    description: "Tell us about yourself",
    icon: <User size={20} />,
  },
  {
    id: "professional",
    title: "Professional Details",
    description: "Your work experience",
    icon: <Briefcase size={20} />,
  },
  {
    id: "education",
    title: "Education",
    description: "Your educational background",
    icon: <GraduationCap size={20} />,
  },
  {
    id: "certificates",
    title: "Certificates",
    description: "Add your first certificate",
    icon: <Award size={20} />,
  },
];

// Define the industries for the dropdown
const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Marketing",
  "Design",
  "Engineering",
  "Consulting",
  "Other",
];

// Define the education levels for the dropdown
const educationLevels = [
  "High School",
  "Associate's Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctorate",
  "Professional Certification",
  "Other",
];

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Personal information
    firstName: "",
    lastName: "",
    bio: "",
    
    // Professional details
    jobTitle: "",
    company: "",
    industry: "",
    yearsOfExperience: "",
    
    // Education
    institution: "",
    degree: "",
    fieldOfStudy: "",
    graduationYear: "",
    
    // First certificate
    certificateTitle: "",
    certificateIssuer: "",
    certificateDate: "",
    certificateUrl: "",
  });
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle next step
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Submit the form and redirect to dashboard
      handleSubmit();
    }
  };
  
  // Handle previous step
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };
  
  // Handle form submission
  const handleSubmit = () => {
    // Here you would typically save the data to your backend
    console.log("Form submitted:", formData);
    
    // Redirect to dashboard
    navigate("/dashboard");
  };
  
  // Handle skip to dashboard
  const handleSkip = () => {
    navigate("/dashboard");
  };
  
  // Check if current step is valid to proceed
  const isStepValid = () => {
    switch (currentStep) {
      case 0: // Personal information
        return formData.firstName.trim() !== "" && formData.lastName.trim() !== "";
      case 1: // Professional details
        return formData.jobTitle.trim() !== "" && formData.industry !== "";
      case 2: // Education
        return formData.institution.trim() !== "" && formData.degree !== "";
      case 3: // First certificate
        return formData.certificateTitle.trim() !== "" && formData.certificateIssuer.trim() !== "";
      default:
        return true;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-black p-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90"></div>
        
        {/* Animated gradient circles */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: 360,
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3 + 0.2,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Header */}
      <header className="relative z-10 text-center py-8">
        <div className="flex justify-center mb-4">
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            CH
          </motion.div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Set Up Your Profile</h1>
        <p className="text-white/60 max-w-md mx-auto">
          Let's personalize your CertifyHub experience. You can always update these details later.
        </p>
      </header>
      
      {/* Main content */}
      <main className="flex-grow flex items-center justify-center relative z-10 py-4">
        <div className="w-full max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Steps sidebar */}
            <div className="md:w-64">
              <Card className="p-6 bg-black/40 backdrop-blur-sm border-white/5">
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-start">
                      <div 
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          index === currentStep 
                            ? "bg-primary text-white" 
                            : index < currentStep 
                              ? "bg-primary/20 text-primary" 
                              : "bg-white/10 text-white/40"
                        }`}
                      >
                        {index < currentStep ? <CheckCircle2 size={16} /> : index + 1}
                      </div>
                      <div>
                        <h3 
                          className={`text-sm font-medium ${
                            index === currentStep 
                              ? "text-white" 
                              : index < currentStep 
                                ? "text-white/80" 
                                : "text-white/40"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p 
                          className={`text-xs mt-1 ${
                            index === currentStep 
                              ? "text-white/60" 
                              : index < currentStep 
                                ? "text-white/40" 
                                : "text-white/30"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-white/50 hover:text-white hover:bg-white/5"
                    onClick={handleSkip}
                  >
                    Skip for now
                  </Button>
                </div>
              </Card>
            </div>
            
            {/* Form content */}
            <div className="flex-grow">
              <div className="relative rounded-xl overflow-hidden before:absolute before:inset-0 before:p-[2px] before:rounded-xl before:bg-gradient-to-r before:from-primary/50 before:to-secondary/50 before:-z-10">
                <Card className="p-8 bg-black/60 backdrop-blur-sm border-none min-h-[500px] flex flex-col">
                  <div className="mb-6">
                    <Badge className="mb-2 px-4 py-1 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                      {steps[currentStep].icon}
                      <span className="ml-2">{steps[currentStep].title}</span>
                    </Badge>
                    <h2 className="text-xl font-bold text-white">
                      {currentStep === 0 && "Tell us about yourself"}
                      {currentStep === 1 && "Your professional background"}
                      {currentStep === 2 && "Your educational history"}
                      {currentStep === 3 && "Add your first certificate"}
                    </h2>
                    <p className="text-white/60 text-sm mt-1">
                      {currentStep === 0 && "This information will be displayed on your profile"}
                      {currentStep === 1 && "Help us tailor your experience based on your profession"}
                      {currentStep === 2 && "Share your educational achievements"}
                      {currentStep === 3 && "Start building your certificate portfolio"}
                    </p>
                  </div>
                  
                  <div className="flex-grow">
                    {/* Step 1: Personal Information */}
                    {currentStep === 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-white/80" htmlFor="firstName">
                              First Name*
                            </label>
                            <input
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              type="text"
                              placeholder="Enter your first name"
                              className="w-full p-3 rounded-md border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-white/80" htmlFor="lastName">
                              Last Name*
                            </label>
                            <input
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              type="text"
                              placeholder="Enter your last name"
                              className="w-full p-3 rounded-md border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80" htmlFor="bio">
                            Bio <span className="text-white/40">(optional)</span>
                          </label>
                          <textarea
                            id="bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            placeholder="Tell us a bit about yourself"
                            className="w-full p-3 rounded-md border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all min-h-[120px]"
                          />
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Step 2: Professional Details */}
                    {currentStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80" htmlFor="jobTitle">
                            Job Title*
                          </label>
                          <input
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            type="text"
                            placeholder="e.g. Software Engineer"
                            className="w-full p-3 rounded-md border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80" htmlFor="company">
                            Company <span className="text-white/40">(optional)</span>
                          </label>
                          <input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            type="text"
                            placeholder="e.g. Acme Inc."
                            className="w-full p-3 rounded-md border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-white/80" htmlFor="industry">
                              Industry*
                            </label>
                            <select
                              id="industry"
                              name="industry"
                              value={formData.industry}
                              onChange={handleChange}
                              className="w-full p-3 rounded-md border border-white/10 bg-black/40 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                              required
                            >
                              <option value="" disabled>Select an industry</option>
                              {industries.map(industry => (
                                <option key={industry} value={industry}>{industry}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-white/80" htmlFor="yearsOfExperience">
                              Years of Experience <span className="text-white/40">(optional)</span>
                            </label>
                            <input
                              id="yearsOfExperience"
                              name="yearsOfExperience"
                              value={formData.yearsOfExperience}
                              onChange={handleChange}
                              type="number"
                              min="0"
                              max="50"
                              placeholder="e.g. 5"
                              className="w-full p-3 rounded-md border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Step 3: Education */}
                    {currentStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80" htmlFor="institution">
                            Institution*
                          </label>
                          <input
                            id="institution"
                            name="institution"
                            value={formData.institution}
                            onChange={handleChange}
                            type="text"
                            placeholder="e.g. University of Technology"
                            className="w-full p-3 rounded-md border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80" htmlFor="degree">
                            Degree/Level*
                          </label>
                          <select
                            id="degree"
                            name="degree"
                            value={formData.degree}
                            onChange={handleChange}
                            className="w-full p-3 rounded-md border border-white/10 bg-black/40 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            required
                          >
                            <option value="" disabled>Select education level</option>
                            {educationLevels.map(level => (
                              <option key={level} value={level}>{level}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-white/80" htmlFor="fieldOfStudy">
                              Field of Study <span className="text-white/40">(optional)</span>
                            </label>
                            <input
                              id="fieldOfStudy"
                              name="fieldOfStudy"
                              value={formData.fieldOfStudy}
                              onChange={handleChange}
                              type="text"
                              placeholder="e.g. Computer Science"
                              className="w-full p-3 rounded-md border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-white/80" htmlFor="graduationYear">
                              Graduation Year <span className="text-white/40">(optional)</span>
                            </label>
                            <input
                              id="graduationYear"
                              name="graduationYear"
                              value={formData.graduationYear}
                              onChange={handleChange}
                              type="number"
                              min="1950"
                              max="2030"
                              placeholder="e.g. 2022"
                              className="w-full p-3 rounded-md border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Step 4: First Certificate */}
                    {currentStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80" htmlFor="certificateTitle">
                            Certificate Title*
                          </label>
                          <input
                            id="certificateTitle"
                            name="certificateTitle"
                            value={formData.certificateTitle}
                            onChange={handleChange}
                            type="text"
                            placeholder="e.g. Advanced React Development"
                            className="w-full p-3 rounded-md border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80" htmlFor="certificateIssuer">
                            Issuing Organization*
                          </label>
                          <input
                            id="certificateIssuer"
                            name="certificateIssuer"
                            value={formData.certificateIssuer}
                            onChange={handleChange}
                            type="text"
                            placeholder="e.g. React Academy"
                            className="w-full p-3 rounded-md border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-white/80" htmlFor="certificateDate">
                              Issue Date <span className="text-white/40">(optional)</span>
                            </label>
                            <input
                              id="certificateDate"
                              name="certificateDate"
                              value={formData.certificateDate}
                              onChange={handleChange}
                              type="date"
                              className="w-full p-3 rounded-md border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-white/80" htmlFor="certificateUrl">
                              Certificate URL <span className="text-white/40">(optional)</span>
                            </label>
                            <input
                              id="certificateUrl"
                              name="certificateUrl"
                              value={formData.certificateUrl}
                              onChange={handleChange}
                              type="url"
                              placeholder="e.g. https://example.com/cert"
                              className="w-full p-3 rounded-md border border-white/10 bg-black/40 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            />
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <p className="text-white/40 text-sm italic">
                            You'll be able to upload the certificate image after completing the onboarding.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Navigation buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                    <Button
                      variant="ghost"
                      className="text-white/60 hover:text-white hover:bg-white/10"
                      onClick={handlePrevious}
                      disabled={currentStep === 0}
                    >
                      {currentStep > 0 ? "Previous" : ""}
                    </Button>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white px-6"
                        onClick={handleNext}
                        disabled={!isStepValid()}
                      >
                        {currentStep < steps.length - 1 ? (
                          <>
                            Next
                            <ArrowRight size={16} className="ml-2" />
                          </>
                        ) : (
                          "Complete Setup"
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Progress indicator */}
      <div className="relative z-10 py-6 flex justify-center">
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentStep 
                  ? "bg-primary" 
                  : index < currentStep 
                    ? "bg-primary/60" 
                    : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
