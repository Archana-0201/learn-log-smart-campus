import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  BookOpen, 
  TrendingUp, 
  Award,
  FileText,
  Calculator
} from "lucide-react";

const InternalMarks = () => {
  const subjects = [
    {
      name: 'Data Structures',
      code: 'CS301',
      credits: 4,
      internals: [
        { type: 'Test 1', marks: 18, total: 20, date: '2024-02-15' },
        { type: 'Test 2', marks: 17, total: 20, date: '2024-03-20' },
        { type: 'Assignment 1', marks: 19, total: 20, date: '2024-02-28' },
        { type: 'Assignment 2', marks: 18, total: 20, date: '2024-03-25' },
      ],
      totalInternal: 72,
      maxInternal: 80,
      grade: 'A'
    },
    {
      name: 'Database Systems',
      code: 'CS302',
      credits: 3,
      internals: [
        { type: 'Test 1', marks: 16, total: 20, date: '2024-02-18' },
        { type: 'Test 2', marks: 19, total: 20, date: '2024-03-22' },
        { type: 'Assignment 1', marks: 17, total: 20, date: '2024-03-01' },
        { type: 'Assignment 2', marks: 20, total: 20, date: '2024-03-28' },
      ],
      totalInternal: 72,
      maxInternal: 80,
      grade: 'A'
    },
    {
      name: 'Machine Learning',
      code: 'CS303',
      credits: 4,
      internals: [
        { type: 'Test 1', marks: 17, total: 20, date: '2024-02-20' },
        { type: 'Test 2', marks: 16, total: 20, date: '2024-03-24' },
        { type: 'Assignment 1', marks: 18, total: 20, date: '2024-03-05' },
        { type: 'Project', marks: 38, total: 40, date: '2024-03-30' },
      ],
      totalInternal: 89,
      maxInternal: 100,
      grade: 'A+'
    },
    {
      name: 'Web Development',
      code: 'CS304',
      credits: 3,
      internals: [
        { type: 'Test 1', marks: 15, total: 20, date: '2024-02-22' },
        { type: 'Test 2', marks: 18, total: 20, date: '2024-03-26' },
        { type: 'Project 1', marks: 35, total: 40, date: '2024-03-10' },
        { type: 'Project 2', marks: 37, total: 40, date: '2024-04-01' },
      ],
      totalInternal: 105,
      maxInternal: 120,
      grade: 'A+'
    },
    {
      name: 'Software Engineering',
      code: 'CS305',
      credits: 3,
      internals: [
        { type: 'Test 1', marks: 14, total: 20, date: '2024-02-25' },
        { type: 'Test 2', marks: 17, total: 20, date: '2024-03-28' },
        { type: 'Assignment 1', marks: 16, total: 20, date: '2024-03-08' },
        { type: 'Case Study', marks: 18, total: 20, date: '2024-04-03' },
      ],
      totalInternal: 65,
      maxInternal: 80,
      grade: 'B+'
    }
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': return 'bg-success text-success-foreground';
      case 'A': return 'bg-primary text-primary-foreground';
      case 'B+': return 'bg-warning text-warning-foreground';
      case 'B': return 'bg-orange-500 text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const overallPercentage = subjects.reduce((acc, subject) => 
    acc + (subject.totalInternal / subject.maxInternal * 100), 0
  ) / subjects.length;

  const totalCredits = subjects.reduce((acc, subject) => acc + subject.credits, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Internal Marks</h1>
          <p className="text-muted-foreground">Track your continuous assessment scores and progress</p>
        </div>
      </div>

      {/* Overall Performance */}
      <Card className="bg-gradient-primary text-white border-0">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-white/80 text-sm">Overall Average</p>
              <p className="text-3xl font-bold">{overallPercentage.toFixed(1)}%</p>
              <Progress value={overallPercentage} className="mt-2 h-2" />
            </div>
            <div className="text-center">
              <p className="text-white/80 text-sm">Total Credits</p>
              <p className="text-3xl font-bold">{totalCredits}</p>
              <p className="text-white/60 text-sm">Current Semester</p>
            </div>
            <div className="text-center">
              <p className="text-white/80 text-sm">Performance</p>
              <p className="text-3xl font-bold">Excellent</p>
              <p className="text-white/60 text-sm">Keep it up!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subject-wise Marks */}
      <div className="space-y-6">
        {subjects.map((subject, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    {subject.name}
                  </CardTitle>
                  <CardDescription>
                    {subject.code} • {subject.credits} Credits • 
                    <span className="ml-2">
                      {subject.totalInternal}/{subject.maxInternal} 
                      ({((subject.totalInternal / subject.maxInternal) * 100).toFixed(1)}%)
                    </span>
                  </CardDescription>
                </div>
                <Badge className={getGradeColor(subject.grade)}>
                  Grade: {subject.grade}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress 
                  value={(subject.totalInternal / subject.maxInternal) * 100} 
                  className="h-3"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {subject.internals.map((internal, idx) => (
                    <div key={idx} className="p-4 bg-card-secondary rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-sm">{internal.type}</p>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">
                          {internal.marks}/{internal.total}
                        </span>
                        <Badge variant="outline">
                          {((internal.marks / internal.total) * 100).toFixed(0)}%
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(internal.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Calculator className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">{subjects.length}</p>
            <p className="text-sm text-muted-foreground">Subjects</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <BarChart3 className="h-8 w-8 text-success mx-auto mb-2" />
            <p className="text-2xl font-bold">
              {subjects.reduce((acc, subject) => acc + subject.internals.length, 0)}
            </p>
            <p className="text-sm text-muted-foreground">Assessments</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Award className="h-8 w-8 text-warning mx-auto mb-2" />
            <p className="text-2xl font-bold">
              {subjects.filter(s => s.grade === 'A+' || s.grade === 'A').length}
            </p>
            <p className="text-sm text-muted-foreground">A/A+ Grades</p>
          </CardContent>
        </Card>
      </div>

      {/* Grade Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Grade Distribution
          </CardTitle>
          <CardDescription>Your current semester grade breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['A+', 'A', 'B+', 'B', 'C'].map(grade => {
              const count = subjects.filter(s => s.grade === grade).length;
              return (
                <div key={grade} className="text-center p-4 bg-card-secondary rounded-lg">
                  <p className="text-2xl font-bold">{count}</p>
                  <p className="text-sm text-muted-foreground">Grade {grade}</p>
                  <div className={`w-8 h-2 mx-auto mt-2 rounded ${getGradeColor(grade)}`}></div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InternalMarks;