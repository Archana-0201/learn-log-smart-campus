import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  XCircle, 
  Calendar, 
  Camera,
  BarChart3,
  Clock
} from "lucide-react";

const Attendance = () => {
  const attendanceData = [
    { subject: "Data Structures", present: 24, total: 28, percentage: 85.7 },
    { subject: "Database Systems", present: 26, total: 30, percentage: 86.7 },
    { subject: "Machine Learning", present: 22, total: 25, percentage: 88.0 },
    { subject: "Web Development", present: 20, total: 24, percentage: 83.3 },
    { subject: "Software Engineering", present: 18, total: 22, percentage: 81.8 },
  ];

  const todayAttendance = [
    { time: "09:00 AM", subject: "Data Structures", status: "present", room: "CS-101" },
    { time: "11:00 AM", subject: "Database Systems", status: "pending", room: "CS-102" },
    { time: "02:00 PM", subject: "Machine Learning", status: "pending", room: "CS-201" },
  ];

  const overallPercentage = attendanceData.reduce((acc, subject) => acc + subject.percentage, 0) / attendanceData.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Attendance</h1>
          <p className="text-muted-foreground">Track your class attendance and maintain good academic standing</p>
        </div>
        <Button className="bg-gradient-primary text-white border-0">
          <Camera className="mr-2 h-4 w-4" />
          Mark Attendance
        </Button>
      </div>

      {/* Overall Attendance */}
      <Card className="bg-gradient-primary text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Overall Attendance</p>
              <p className="text-3xl font-bold">{overallPercentage.toFixed(1)}%</p>
              <p className="text-white/60 text-sm mt-1">Keep it above 75% for eligibility</p>
            </div>
            <CheckCircle className="h-12 w-12 text-white/80" />
          </div>
          <Progress value={overallPercentage} className="mt-4 h-3" />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Attendance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Today's Attendance
            </CardTitle>
            <CardDescription>Mark your attendance for today's classes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayAttendance.map((classItem, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-card-secondary rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-center">
                      <p className="font-semibold text-sm">{classItem.time}</p>
                      <p className="text-xs text-muted-foreground">{classItem.room}</p>
                    </div>
                    <div>
                      <p className="font-medium">{classItem.subject}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {classItem.status === "present" ? (
                      <Badge className="bg-success text-success-foreground">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Present
                      </Badge>
                    ) : (
                      <Badge variant="secondary">
                        <Clock className="h-3 w-3 mr-1" />
                        Pending
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subject-wise Attendance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Subject-wise Breakdown
            </CardTitle>
            <CardDescription>Detailed attendance for each subject</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {attendanceData.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{subject.subject}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {subject.present}/{subject.total}
                      </span>
                      <Badge variant={subject.percentage >= 75 ? "default" : "destructive"}>
                        {subject.percentage.toFixed(1)}%
                      </Badge>
                    </div>
                  </div>
                  <Progress value={subject.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Calendar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Attendance History
          </CardTitle>
          <CardDescription>Your attendance record for the current month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 30 }, (_, i) => {
              const day = i + 1;
              const isPresent = Math.random() > 0.2; // Simulate attendance data
              const isToday = day === 15;
              
              return (
                <div
                  key={day}
                  className={`aspect-square flex items-center justify-center text-sm rounded-md ${
                    isToday
                      ? 'bg-primary text-primary-foreground font-bold'
                      : isPresent
                      ? 'bg-success/20 text-success hover:bg-success/30'
                      : 'bg-destructive/20 text-destructive hover:bg-destructive/30'
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>Present</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-destructive rounded-full"></div>
              <span>Absent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>Today</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Attendance;