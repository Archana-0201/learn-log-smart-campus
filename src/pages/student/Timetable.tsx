import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User,
  BookOpen
} from "lucide-react";

const Timetable = () => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeSlots = ['09:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00', '14:00-15:00', '15:00-16:00', '16:00-17:00'];

  const timetableData: Record<string, Record<string, any>> = {
    'Monday': {
      '09:00-10:00': { subject: 'Data Structures', teacher: 'Dr. Smith', room: 'CS-101', type: 'theory' },
      '10:00-11:00': { subject: 'Data Structures Lab', teacher: 'Prof. Johnson', room: 'CS-Lab1', type: 'lab' },
      '11:00-12:00': { subject: 'Database Systems', teacher: 'Dr. Brown', room: 'CS-102', type: 'theory' },
      '14:00-15:00': { subject: 'Machine Learning', teacher: 'Dr. Davis', room: 'CS-201', type: 'theory' },
      '15:00-16:00': { subject: 'Free Period', teacher: '', room: '', type: 'free' },
    },
    'Tuesday': {
      '09:00-10:00': { subject: 'Web Development', teacher: 'Prof. Wilson', room: 'CS-103', type: 'theory' },
      '10:00-11:00': { subject: 'Software Engineering', teacher: 'Dr. Miller', room: 'CS-104', type: 'theory' },
      '11:00-12:00': { subject: 'Database Lab', teacher: 'Prof. Johnson', room: 'CS-Lab2', type: 'lab' },
      '12:00-13:00': { subject: 'Machine Learning', teacher: 'Dr. Davis', room: 'CS-201', type: 'theory' },
      '14:00-15:00': { subject: 'Project Work', teacher: 'Dr. Smith', room: 'CS-301', type: 'project' },
    },
    'Wednesday': {
      '09:00-10:00': { subject: 'Data Structures', teacher: 'Dr. Smith', room: 'CS-101', type: 'theory' },
      '10:00-11:00': { subject: 'Web Development Lab', teacher: 'Prof. Wilson', room: 'CS-Lab3', type: 'lab' },
      '11:00-12:00': { subject: 'Database Systems', teacher: 'Dr. Brown', room: 'CS-102', type: 'theory' },
      '14:00-15:00': { subject: 'Software Engineering', teacher: 'Dr. Miller', room: 'CS-104', type: 'theory' },
      '15:00-16:00': { subject: 'Machine Learning Lab', teacher: 'Dr. Davis', room: 'CS-Lab4', type: 'lab' },
    },
    'Thursday': {
      '09:00-10:00': { subject: 'Web Development', teacher: 'Prof. Wilson', room: 'CS-103', type: 'theory' },
      '10:00-11:00': { subject: 'Data Structures', teacher: 'Dr. Smith', room: 'CS-101', type: 'theory' },
      '11:00-12:00': { subject: 'Project Work', teacher: 'Dr. Smith', room: 'CS-301', type: 'project' },
      '12:00-13:00': { subject: 'Free Period', teacher: '', room: '', type: 'free' },
      '14:00-15:00': { subject: 'Database Systems', teacher: 'Dr. Brown', room: 'CS-102', type: 'theory' },
      '15:00-16:00': { subject: 'Software Engineering', teacher: 'Dr. Miller', room: 'CS-104', type: 'theory' },
    },
    'Friday': {
      '09:00-10:00': { subject: 'Machine Learning', teacher: 'Dr. Davis', room: 'CS-201', type: 'theory' },
      '10:00-11:00': { subject: 'Comprehensive Viva', teacher: 'All Faculty', room: 'CS-Seminar', type: 'viva' },
      '11:00-12:00': { subject: 'Project Presentation', teacher: 'External', room: 'CS-Auditorium', type: 'presentation' },
      '14:00-15:00': { subject: 'Free Period', teacher: '', room: '', type: 'free' },
      '15:00-16:00': { subject: 'Mentoring Session', teacher: 'Dr. Smith', room: 'CS-101', type: 'mentoring' },
    },
    'Saturday': {
      '09:00-10:00': { subject: 'Extra Curricular', teacher: 'Sports Coordinator', room: 'Playground', type: 'sports' },
      '10:00-11:00': { subject: 'Library Session', teacher: 'Librarian', room: 'Library', type: 'library' },
      '11:00-12:00': { subject: 'Free Period', teacher: '', room: '', type: 'free' },
    }
  };

  const getClassTypeColor = (type: string) => {
    switch (type) {
      case 'theory': return 'bg-primary text-primary-foreground';
      case 'lab': return 'bg-success text-success-foreground';
      case 'project': return 'bg-warning text-warning-foreground';
      case 'free': return 'bg-muted text-muted-foreground';
      case 'viva': return 'bg-destructive text-destructive-foreground';
      case 'presentation': return 'bg-secondary text-secondary-foreground';
      case 'mentoring': return 'bg-accent text-accent-foreground';
      case 'sports': return 'bg-orange-500 text-white';
      case 'library': return 'bg-purple-500 text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Timetable</h1>
          <p className="text-muted-foreground">Your weekly class schedule and academic calendar</p>
        </div>
      </div>

      {/* Current Day Highlight */}
      <Card className="bg-gradient-primary text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm">Today's Schedule</p>
              <p className="text-2xl font-bold">Wednesday</p>
              <p className="text-white/60 text-sm">5 classes scheduled</p>
            </div>
            <Calendar className="h-12 w-12 text-white/80" />
          </div>
        </CardContent>
      </Card>

      {/* Weekly Timetable */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Weekly Schedule
          </CardTitle>
          <CardDescription>Complete timetable for the current semester</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-8 gap-2 mb-4">
                <div className="font-semibold text-sm text-muted-foreground p-2">Time</div>
                {weekDays.map(day => (
                  <div key={day} className="font-semibold text-sm text-muted-foreground p-2 text-center">
                    {day}
                  </div>
                ))}
              </div>
              
              {timeSlots.map(timeSlot => (
                <div key={timeSlot} className="grid grid-cols-8 gap-2 mb-2">
                  <div className="font-medium text-sm p-2 text-center bg-card-secondary rounded">
                    {timeSlot}
                  </div>
                  {weekDays.map(day => {
                    const classData = timetableData[day]?.[timeSlot];
                    
                    return (
                      <div key={`${day}-${timeSlot}`} className="min-h-[80px]">
                        {classData ? (
                          <div className={`p-2 rounded-lg h-full ${getClassTypeColor(classData.type)}`}>
                            <div className="text-xs font-semibold mb-1">
                              {classData.subject}
                            </div>
                            {classData.teacher && (
                              <div className="text-xs opacity-90 mb-1">
                                {classData.teacher}
                              </div>
                            )}
                            {classData.room && (
                              <div className="text-xs opacity-80">
                                {classData.room}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="p-2 h-full bg-muted/50 rounded-lg"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Class Types Legend
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { type: 'theory', label: 'Theory Class' },
              { type: 'lab', label: 'Laboratory' },
              { type: 'project', label: 'Project Work' },
              { type: 'free', label: 'Free Period' },
              { type: 'viva', label: 'Viva/Exam' },
              { type: 'presentation', label: 'Presentation' },
              { type: 'mentoring', label: 'Mentoring' },
              { type: 'sports', label: 'Sports/Extra' },
            ].map(item => (
              <div key={item.type} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded ${getClassTypeColor(item.type)}`}></div>
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">25</p>
            <p className="text-sm text-muted-foreground">Hours/Week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <User className="h-8 w-8 text-success mx-auto mb-2" />
            <p className="text-2xl font-bold">8</p>
            <p className="text-sm text-muted-foreground">Lab Sessions</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <MapPin className="h-8 w-8 text-warning mx-auto mb-2" />
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-muted-foreground">Different Rooms</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Timetable;