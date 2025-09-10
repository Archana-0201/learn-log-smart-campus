import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Users, BookOpen, Lock } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [collegeId, setCollegeId] = useState("");
  const [password, setPassword] = useState("");

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, navigate directly to student dashboard
    navigate("/student");
  };

  const handleStaffLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, navigate directly to staff dashboard
    navigate("/staff");
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Learn Log</h1>
          <p className="text-white/80">Smart Curriculum & Attendance Management</p>
        </div>

        <Card className="shadow-custom-lg border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl">Welcome Back</CardTitle>
            <CardDescription>Choose your role and sign in to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="student" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Student
                </TabsTrigger>
                <TabsTrigger value="staff" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Staff
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="student">
                <form onSubmit={handleStudentLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-id">College ID</Label>
                    <Input
                      id="student-id"
                      type="text"
                      placeholder="Enter your college ID"
                      value={collegeId}
                      onChange={(e) => setCollegeId(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-password">Password</Label>
                    <Input
                      id="student-password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" variant="hero" className="w-full">
                    <Lock className="mr-2 h-4 w-4" />
                    Sign In as Student
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="staff">
                <form onSubmit={handleStaffLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="staff-id">Staff ID</Label>
                    <Input
                      id="staff-id"
                      type="text"
                      placeholder="Enter your staff ID"
                      value={collegeId}
                      onChange={(e) => setCollegeId(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="staff-password">Password</Label>
                    <Input
                      id="staff-password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" variant="staff" className="w-full">
                    <Lock className="mr-2 h-4 w-4" />
                    Sign In as Staff
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;