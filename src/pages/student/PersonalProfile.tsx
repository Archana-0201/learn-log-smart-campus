import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Edit, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Heart,
  Code,
  Gamepad2,
  Music,
  Camera,
  BookOpen,
  Trophy
} from "lucide-react";

const PersonalProfile = () => {
  const personalInfo = {
    name: "Alex Johnson",
    email: "alex.johnson@college.edu",
    phone: "+91 98765 43210",
    address: "123 Tech Street, Chennai, Tamil Nadu 600001",
    dateOfBirth: "15th March 2003",
    bloodGroup: "B+",
    emergencyContact: "+91 98765 43211",
    bio: "Passionate computer science student with a keen interest in artificial intelligence and machine learning. Love building innovative solutions and participating in hackathons."
  };

  const interests = [
    { name: 'Artificial Intelligence', icon: Code, category: 'Technical' },
    { name: 'Web Development', icon: Code, category: 'Technical' },
    { name: 'Machine Learning', icon: Code, category: 'Technical' },
    { name: 'Photography', icon: Camera, category: 'Creative' },
    { name: 'Gaming', icon: Gamepad2, category: 'Entertainment' },
    { name: 'Music Production', icon: Music, category: 'Creative' },
    { name: 'Reading Tech Blogs', icon: BookOpen, category: 'Learning' },
    { name: 'Competitive Programming', icon: Trophy, category: 'Technical' },
  ];

  const skills = [
    { name: 'JavaScript', level: 90, category: 'Programming' },
    { name: 'Python', level: 85, category: 'Programming' },
    { name: 'React', level: 88, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Database Design', level: 75, category: 'Database' },
    { name: 'Machine Learning', level: 70, category: 'AI/ML' },
    { name: 'Project Management', level: 82, category: 'Soft Skills' },
    { name: 'Team Leadership', level: 78, category: 'Soft Skills' },
  ];

  const socialLinks = [
    { platform: 'GitHub', username: '@alexjohnson', url: 'https://github.com/alexjohnson' },
    { platform: 'LinkedIn', username: 'Alex Johnson', url: 'https://linkedin.com/in/alexjohnson' },
    { platform: 'Portfolio', username: 'alexjohnson.dev', url: 'https://alexjohnson.dev' },
    { platform: 'Twitter', username: '@alex_codes', url: 'https://twitter.com/alex_codes' },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technical': return 'bg-primary text-primary-foreground';
      case 'Creative': return 'bg-purple-500 text-white';
      case 'Entertainment': return 'bg-orange-500 text-white';
      case 'Learning': return 'bg-success text-success-foreground';
      case 'Programming': return 'bg-blue-500 text-white';
      case 'Frontend': return 'bg-green-500 text-white';
      case 'Backend': return 'bg-red-500 text-white';
      case 'Database': return 'bg-yellow-600 text-white';
      case 'AI/ML': return 'bg-indigo-500 text-white';
      case 'Soft Skills': return 'bg-pink-500 text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Personal Profile</h1>
          <p className="text-muted-foreground">Manage your personal information, interests, and skills</p>
        </div>
        <Button variant="outline">
          <Edit className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      {/* Profile Header */}
      <Card className="bg-gradient-primary text-white border-0">
        <CardContent className="p-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <User className="h-12 w-12 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h2>
              <p className="text-white/80 mb-4">{personalInfo.bio}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-white/80" />
                  <span className="text-white/90 text-sm">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-white/80" />
                  <span className="text-white/90 text-sm">{personalInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
            <CardDescription>Your basic personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3 p-3 bg-card-secondary rounded-lg">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Date of Birth</p>
                  <p className="font-medium">{personalInfo.dateOfBirth}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-card-secondary rounded-lg">
                <Heart className="h-5 w-5 text-red-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Blood Group</p>
                  <p className="font-medium">{personalInfo.bloodGroup}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-card-secondary rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium text-sm">{personalInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-card-secondary rounded-lg">
                <Phone className="h-5 w-5 text-orange-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Emergency Contact</p>
                  <p className="font-medium">{personalInfo.emergencyContact}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Social & Professional Links
            </CardTitle>
            <CardDescription>Your online presence and portfolio</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {socialLinks.map((link, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-card-secondary rounded-lg">
                <div>
                  <p className="font-medium">{link.platform}</p>
                  <p className="text-sm text-muted-foreground">{link.username}</p>
                </div>
                <Button variant="outline" size="sm">
                  Visit
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Interests & Hobbies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Interests & Hobbies
          </CardTitle>
          <CardDescription>Things that inspire and motivate you</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-card-secondary rounded-lg hover:bg-accent transition-colors">
                <interest.icon className="h-8 w-8 text-primary mb-2" />
                <p className="font-medium text-sm text-center">{interest.name}</p>
                <Badge variant="outline" className="mt-2 text-xs">
                  {interest.category}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Skills & Expertise */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Skills & Expertise
          </CardTitle>
          <CardDescription>Your technical and professional competencies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <Badge className={getCategoryColor(skill.category)} variant="outline">
                      {skill.category}
                    </Badge>
                  </div>
                  <span className="text-sm font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Privacy Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Privacy & Settings</CardTitle>
          <CardDescription>Manage your profile visibility and preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-card-secondary rounded-lg">
              <div>
                <p className="font-medium">Profile Visibility</p>
                <p className="text-sm text-muted-foreground">Control who can see your profile</p>
              </div>
              <Badge variant="outline">Public</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-card-secondary rounded-lg">
              <div>
                <p className="font-medium">Contact Information</p>
                <p className="text-sm text-muted-foreground">Share contact details with classmates</p>
              </div>
              <Badge variant="outline">Limited</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-card-secondary rounded-lg">
              <div>
                <p className="font-medium">Academic Records</p>
                <p className="text-sm text-muted-foreground">Show grades and performance</p>
              </div>
              <Badge variant="outline">Private</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalProfile;