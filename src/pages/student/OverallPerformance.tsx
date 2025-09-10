import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Award, 
  Target,
  BarChart3,
  Calendar,
  Star,
  Trophy,
  BookOpen
} from "lucide-react";

const OverallPerformance = () => {
  const semesterData = [
    { semester: 'I', cgpa: 8.2, credits: 24, rank: 12 },
    { semester: 'II', cgpa: 8.5, credits: 26, rank: 8 },
    { semester: 'III', cgpa: 8.7, credits: 25, rank: 5 },
    { semester: 'IV', cgpa: 8.9, credits: 24, rank: 3 },
    { semester: 'V', cgpa: 9.1, credits: 26, rank: 2 },
    { semester: 'VI', cgpa: 8.8, credits: 25, rank: 4 },
    { semester: 'VII', cgpa: 8.9, credits: 22, rank: 3 },
  ];

  const achievements = [
    { title: 'Dean\'s List', description: 'Semester VI', icon: Award, color: 'text-yellow-500' },
    { title: 'Best Project Award', description: 'ML Project 2024', icon: Trophy, color: 'text-blue-500' },
    { title: 'Coding Competition', description: '1st Place - TechFest', icon: Star, color: 'text-purple-500' },
    { title: 'Research Paper', description: 'IEEE Conference', icon: BookOpen, color: 'text-green-500' },
  ];

  const skillAnalysis = [
    { skill: 'Programming', strength: 92, category: 'Technical' },
    { skill: 'Problem Solving', strength: 88, category: 'Analytical' },
    { skill: 'Database Design', strength: 85, category: 'Technical' },
    { skill: 'Team Collaboration', strength: 90, category: 'Soft Skills' },
    { skill: 'Communication', strength: 82, category: 'Soft Skills' },
    { skill: 'Project Management', strength: 86, category: 'Leadership' },
  ];

  const currentCGPA = 8.9;
  const totalCredits = 172;
  const currentRank = 3;
  const totalStudents = 120;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Overall Performance</h1>
          <p className="text-muted-foreground">Comprehensive analysis of your academic journey</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-primary text-white border-0">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 mx-auto mb-2 text-white/80" />
            <p className="text-2xl font-bold">{currentCGPA}</p>
            <p className="text-white/80 text-sm">Current CGPA</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <BookOpen className="h-8 w-8 text-success mx-auto mb-2" />
            <p className="text-2xl font-bold">{totalCredits}</p>
            <p className="text-muted-foreground text-sm">Total Credits</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Trophy className="h-8 w-8 text-warning mx-auto mb-2" />
            <p className="text-2xl font-bold">#{currentRank}</p>
            <p className="text-muted-foreground text-sm">Class Rank</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Target className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold">{((currentRank / totalStudents) * 100).toFixed(1)}%</p>
            <p className="text-muted-foreground text-sm">Percentile</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CGPA Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              CGPA Progression
            </CardTitle>
            <CardDescription>Semester-wise academic performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {semesterData.map((sem, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-card-secondary rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {sem.semester}
                    </div>
                    <div>
                      <p className="font-medium">Semester {sem.semester}</p>
                      <p className="text-sm text-muted-foreground">{sem.credits} Credits</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{sem.cgpa}</p>
                    <Badge variant="outline" className="text-xs">
                      Rank #{sem.rank}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Achievements & Recognition
            </CardTitle>
            <CardDescription>Your academic and extracurricular accomplishments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-card-secondary rounded-lg">
                  <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                  <div className="flex-1">
                    <p className="font-medium">{achievement.title}</p>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                  <Badge variant="outline">2024</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skills Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Skills Assessment
          </CardTitle>
          <CardDescription>Based on project work, assignments, and peer feedback</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillAnalysis.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{skill.skill}</p>
                    <p className="text-sm text-muted-foreground">{skill.category}</p>
                  </div>
                  <Badge variant="outline">{skill.strength}%</Badge>
                </div>
                <Progress value={skill.strength} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <p className="text-sm">Consistent performance across all semesters</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <p className="text-sm">Strong technical and programming skills</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <p className="text-sm">Excellent project delivery track record</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <p className="text-sm">Leadership and teamwork capabilities</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Improvement Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-warning/10 rounded-lg">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <p className="text-sm">Focus on communication and presentation skills</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-warning/10 rounded-lg">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <p className="text-sm">Explore more research opportunities</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-warning/10 rounded-lg">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <p className="text-sm">Participate in more hackathons and competitions</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-warning/10 rounded-lg">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <p className="text-sm">Develop industry-specific certifications</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grade Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Grade Distribution Summary
          </CardTitle>
          <CardDescription>Overall grade breakdown across all subjects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { grade: 'S', count: 15, percentage: 25, color: 'bg-purple-500' },
              { grade: 'A+', count: 20, percentage: 33, color: 'bg-green-500' },
              { grade: 'A', count: 18, percentage: 30, color: 'bg-blue-500' },
              { grade: 'B+', count: 7, percentage: 12, color: 'bg-yellow-500' },
              { grade: 'B', count: 0, percentage: 0, color: 'bg-orange-500' },
              { grade: 'C', count: 0, percentage: 0, color: 'bg-red-500' },
            ].map(item => (
              <div key={item.grade} className="text-center p-4 bg-card-secondary rounded-lg">
                <div className={`w-12 h-12 ${item.color} rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold`}>
                  {item.grade}
                </div>
                <p className="text-xl font-bold">{item.count}</p>
                <p className="text-xs text-muted-foreground">{item.percentage}%</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverallPerformance;