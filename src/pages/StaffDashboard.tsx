import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BarChart3, 
  Clock, 
  BookOpen, 
  TrendingUp, 
  AlertCircle,
  CheckCircle,
  UserCheck,
  GraduationCap,
  Calendar
} from "lucide-react";

const StaffDashboard = () => {
  const classStats = [
    { subject: "Data Structures", students: 45, present: 38, absent: 7, percentage: 84 },
    { subject: "Database Systems", students: 42, present: 40, absent: 2, percentage: 95 },
    { subject: "Machine Learning", students: 38, present: 35, absent: 3, percentage: 92 },
  ];

  const recentActivities = [
    { action: "Grades entered for DS Assignment 3", time: "2 hours ago", type: "grades" },
    { action: "Attendance marked for DB class", time: "4 hours ago", type: "attendance" },
    { action: "New assignment created", time: "1 day ago", type: "assignment" },
    { action: "Student progress reviewed", time: "2 days ago", type: "review" },
  ];

  const upcomingClasses = [
    { time: "10:00 AM", subject: "Data Structures", room: "CS-101", students: 45 },
    { time: "02:00 PM", subject: "Machine Learning", room: "CS-201", students: 38 },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back, Prof. Johnson</h1>
            <p className="text-muted-foreground">Manage your classes and track student progress</p>
          </div>
          <Button variant="default">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Class
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-success text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">Total Students</p>
                  <p className="text-2xl font-bold">125</p>
                </div>
                <Users className="h-8 w-8 text-white/80" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Classes Today</p>
                  <p className="text-2xl font-bold text-primary">2</p>
                </div>
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Avg Attendance</p>
                  <p className="text-2xl font-bold text-success">90%</p>
                </div>
                <UserCheck className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Pending Reviews</p>
                  <p className="text-2xl font-bold text-warning">8</p>
                </div>
                <AlertCircle className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Class Attendance Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Class Attendance Overview
              </CardTitle>
              <CardDescription>Today's attendance statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classStats.map((classData, index) => (
                  <div key={index} className="p-4 bg-card-secondary rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{classData.subject}</h4>
                      <Badge 
                        variant={classData.percentage >= 90 ? "default" : classData.percentage >= 75 ? "secondary" : "destructive"}
                      >
                        {classData.percentage}%
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Present: {classData.present}</span>
                      <span>Absent: {classData.absent}</span>
                      <span>Total: {classData.students}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Classes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Upcoming Classes
              </CardTitle>
              <CardDescription>Your schedule for today</CardDescription>
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
                        <p className="text-sm text-muted-foreground">{classItem.room} • {classItem.students} students</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Mark Attendance
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Recent Activities
              </CardTitle>
              <CardDescription>Your latest actions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-card-secondary rounded-lg">
                    <div className="flex-shrink-0">
                      {activity.type === 'grades' && <GraduationCap className="h-5 w-5 text-success" />}
                      {activity.type === 'attendance' && <CheckCircle className="h-5 w-5 text-primary" />}
                      {activity.type === 'assignment' && <BookOpen className="h-5 w-5 text-warning" />}
                      {activity.type === 'review' && <BarChart3 className="h-5 w-5 text-muted-foreground" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
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
                <Users className="h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <GraduationCap className="mr-2 h-4 w-4" />
                Enter Grades
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Student Reports
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BookOpen className="mr-2 h-4 w-4" />
                Create Assignment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;