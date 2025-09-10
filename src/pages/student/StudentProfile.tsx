import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  BookOpen,
  GraduationCap,
  IdCard
} from "lucide-react";

const StudentProfile = () => {
  const studentInfo = {
    name: "Alex Johnson",
    rollNo: "CS21B1001",
    registerNo: "711721104001",
    class: "IV Year B.Tech",
    department: "Computer Science & Engineering",
    email: "alex.johnson@college.edu",
    phone: "+91 98765 43210",
    address: "Chennai, Tamil Nadu",
    dateOfBirth: "15th March 2003",
    bloodGroup: "B+",
    fatherName: "Robert Johnson",
    motherName: "Sarah Johnson",
    admissionYear: "2021",
    currentSemester: "VII"
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Student Profile</h1>
          <p className="text-muted-foreground">Your personal information and academic details</p>
        </div>
      </div>

      {/* Profile Header */}
      <Card className="bg-gradient-primary text-white border-0">
        <CardContent className="p-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <User className="h-12 w-12 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">{studentInfo.name}</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/80 text-sm">Roll Number</p>
                  <p className="text-white font-semibold">{studentInfo.rollNo}</p>
                </div>
                <div>
                  <p className="text-white/80 text-sm">Register Number</p>
                  <p className="text-white font-semibold">{studentInfo.registerNo}</p>
                </div>
                <div>
                  <p className="text-white/80 text-sm">Class</p>
                  <p className="text-white font-semibold">{studentInfo.class}</p>
                </div>
                <div>
                  <p className="text-white/80 text-sm">Department</p>
                  <p className="text-white font-semibold">{studentInfo.department}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
            <CardDescription>Basic personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-card-secondary rounded-lg">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{studentInfo.email}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-card-secondary rounded-lg">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{studentInfo.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-card-secondary rounded-lg">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="font-medium">{studentInfo.address}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-card-secondary rounded-lg">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Date of Birth</p>
                <p className="font-medium">{studentInfo.dateOfBirth}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Academic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Academic Information
            </CardTitle>
            <CardDescription>Academic details and records</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-card-secondary rounded-lg">
              <IdCard className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Admission Year</p>
                <p className="font-medium">{studentInfo.admissionYear}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-card-secondary rounded-lg">
              <BookOpen className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Current Semester</p>
                <p className="font-medium">{studentInfo.currentSemester}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-card-secondary rounded-lg">
              <GraduationCap className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Blood Group</p>
                <Badge variant="outline">{studentInfo.bloodGroup}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Family Information */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Family Information
            </CardTitle>
            <CardDescription>Guardian and family details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card-secondary rounded-lg">
                <User className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Father's Name</p>
                  <p className="font-medium">{studentInfo.fatherName}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card-secondary rounded-lg">
                <User className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Mother's Name</p>
                  <p className="font-medium">{studentInfo.motherName}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentProfile;