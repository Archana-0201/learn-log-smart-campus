import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Camera, 
  Calendar, 
  Target,
  GraduationCap,
  Clock,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Camera,
      title: "Smart Attendance",
      description: "Biometric and facial recognition for automatic attendance tracking",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time insights and detailed reports on student progress",
      color: "text-success"
    },
    {
      icon: Target,
      title: "Personalized Learning",
      description: "AI-powered daily routines based on individual goals and interests",
      color: "text-warning"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Integrated class schedules with personal goal management",
      color: "text-primary-light"
    }
  ];

  const stats = [
    { number: "10K+", label: "Students" },
    { number: "500+", label: "Teachers" },
    { number: "95%", label: "Attendance Rate" },
    { number: "4.8", label: "Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold">
              Learn Log
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Smart Curriculum & Attendance Management System for Modern Educational Institutions
            </p>
            
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Revolutionize your educational experience with AI-powered attendance tracking, 
              personalized learning paths, and comprehensive performance analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/login">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 h-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Powerful Features for Modern Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage curriculum, track attendance, and enhance learning outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-custom-lg transition-smooth border-0 bg-gradient-card">
                <CardHeader className="pb-4">
                  <div className={`mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Students & Staff Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For Students */}
            <Card className="p-8 border-0 bg-gradient-card hover:shadow-custom-lg transition-smooth">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">For Students</h3>
                    <p className="text-muted-foreground">Take control of your academic journey</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Automatic attendance with biometric recognition</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Live attendance percentage monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Personalized daily routines and tasks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Real-time grade tracking and analytics</span>
                  </div>
                </div>
                
                <Link to="/login" className="block">
                  <Button variant="hero" className="w-full">
                    Student Login
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* For Staff */}
            <Card className="p-8 border-0 bg-gradient-card hover:shadow-custom-lg transition-smooth">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-success/10 rounded-lg p-3">
                    <Users className="h-8 w-8 text-success" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">For Staff</h3>
                    <p className="text-muted-foreground">Efficient classroom and student management</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Monitor student performance and attendance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Easy grade entry and management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Advanced filtering and analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span>Comprehensive reporting tools</span>
                  </div>
                </div>
                
                <Link to="/login" className="block">
                  <Button variant="staff" className="w-full">
                    Staff Login
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Educational Experience?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of students and educators already using Learn Log
          </p>
          <Link to="/login">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 mr-2" />
            <span className="text-2xl font-bold">Learn Log</span>
          </div>
          <p className="text-white/80">
            Smart Curriculum & Attendance Management System
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;