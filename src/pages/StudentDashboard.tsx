import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  User, 
  BookOpen, 
  BarChart3, 
  Camera, 
  Target,
  TrendingUp,
  Award,
  CheckCircle
} from "lucide-react";

const StudentDashboard = () => {
  const [attendancePercentage] = useState(85);
  
  const upcomingClasses = [
    { time: "09:00 AM", subject: "Data Structures", room: "CS-101", status: "upcoming" },
    { time: "11:00 AM", subject: "Database Systems", room: "CS-102", status: "upcoming" },
    { time: "02:00 PM", subject: "Machine Learning", room: "CS-201", status: "upcoming" },
  ];

  const todayTasks = [
    { task: "Complete DS Assignment", priority: "high", completed: false },
    { task: "Read ML Chapter 5", priority: "medium", completed: true },
    { task: "Prepare for DB Quiz", priority: "high", completed: false },
    { task: "Join Study Group", priority: "low", completed: false },
  ];

  const recentGrades = [
    { subject: "Data Structures", grade: "A", credits: 4 },
    { subject: "Database Systems", grade: "B+", credits: 3 },
    { subject: "Web Development", grade: "A-", credits: 3 },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Good morning, Alex!</h1>
            <p className="text-muted-foreground">Here's your academic overview for today</p>
          </div>
          <Button variant="hero">
            <Camera className="mr-2 h-4 w-4" />
            Mark Attendance
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-primary text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">Attendance</p>
                  <p className="text-2xl font-bold">{attendancePercentage}%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-white/80" />
              </div>
              <Progress value={attendancePercentage} className="mt-4 h-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Current CGPA</p>
                  <p className="text-2xl font-bold text-success">8.7</p>
                </div>
                <Award className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Classes Today</p>
                  <p className="text-2xl font-bold text-primary">3</p>
                </div>
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Tasks Due</p>
                  <p className="text-2xl font-bold text-warning">2</p>
                </div>
                <Target className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Today's Classes
              </CardTitle>
              <CardDescription>Your class schedule for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingClasses.map((classItem, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-card-secondary rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="text-center">
                        <p className="font-semibold text-sm">{classItem.time}</p>
                      </div>
                      <div>
                        <p className="font-medium">{classItem.subject}</p>
                        <p className="text-sm text-muted-foreground">{classItem.room}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Upcoming</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Today's Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Today's Tasks
              </CardTitle>
              <CardDescription>Your personalized learning tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-card-secondary rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle 
                        className={`h-5 w-5 ${task.completed ? 'text-success' : 'text-muted-foreground'}`} 
                      />
                      <div>
                        <p className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                          {task.task}
                        </p>
                      </div>
                    </div>
                    <Badge variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}>
                      {task.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Grades */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Recent Grades
              </CardTitle>
              <CardDescription>Your latest academic performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentGrades.map((grade, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-card-secondary rounded-lg">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{grade.subject}</p>
                        <p className="text-sm text-muted-foreground">{grade.credits} Credits</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-success border-success">
                        {grade.grade}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Full Schedule
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <TrendingUp className="mr-2 h-4 w-4" />
                Performance Report
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <User className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;