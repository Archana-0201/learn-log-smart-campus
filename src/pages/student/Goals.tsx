import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Target, 
  Plus, 
  CheckCircle, 
  Clock, 
  Calendar,
  TrendingUp,
  BookOpen,
  Award,
  Briefcase
} from "lucide-react";

const Goals = () => {
  const [goals] = useState([
    {
      id: 1,
      title: "Achieve 9.0+ CGPA",
      description: "Maintain excellent academic performance throughout the semester",
      category: "Academic",
      priority: "high",
      progress: 85,
      target: "End of Semester VII",
      status: "in-progress",
      tasks: [
        { task: "Score 90+ in all internals", completed: true },
        { task: "Complete all assignments on time", completed: true },
        { task: "Prepare thoroughly for final exams", completed: false },
      ]
    },
    {
      id: 2,
      title: "Complete Machine Learning Certification",
      description: "Finish the Advanced ML course on Coursera with certification",
      category: "Skill Development",
      priority: "medium",
      progress: 60,
      target: "April 2024",
      status: "in-progress",
      tasks: [
        { task: "Complete modules 1-5", completed: true },
        { task: "Submit capstone project", completed: false },
        { task: "Pass final assessment", completed: false },
      ]
    },
    {
      id: 3,
      title: "Secure Internship at Tech Company",
      description: "Land a software development internship for summer 2024",
      category: "Career",
      priority: "high",
      progress: 40,
      target: "May 2024",
      status: "in-progress",
      tasks: [
        { task: "Update resume and portfolio", completed: true },
        { task: "Apply to 20+ companies", completed: false },
        { task: "Prepare for technical interviews", completed: false },
      ]
    },
    {
      id: 4,
      title: "Publish Research Paper",
      description: "Complete and publish research on AI in healthcare",
      category: "Research",
      priority: "medium",
      progress: 30,
      target: "June 2024",
      status: "in-progress",
      tasks: [
        { task: "Literature review completed", completed: true },
        { task: "Data collection and analysis", completed: false },
        { task: "Draft manuscript", completed: false },
      ]
    },
    {
      id: 5,
      title: "Win Hackathon Competition",
      description: "Participate and win in at least one major hackathon",
      category: "Competition",
      priority: "medium",
      progress: 20,
      target: "July 2024",
      status: "planning",
      tasks: [
        { task: "Form team with skilled members", completed: false },
        { task: "Register for upcoming hackathons", completed: false },
        { task: "Prepare project ideas", completed: false },
      ]
    },
    {
      id: 6,
      title: "Learn Full-Stack Development",
      description: "Master React, Node.js, and database technologies",
      category: "Skill Development",
      priority: "low",
      progress: 75,
      target: "Ongoing",
      status: "in-progress",
      tasks: [
        { task: "Complete React fundamentals", completed: true },
        { task: "Build 3 full-stack projects", completed: true },
        { task: "Deploy projects to cloud", completed: false },
      ]
    }
  ]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Academic': return BookOpen;
      case 'Skill Development': return TrendingUp;
      case 'Career': return Briefcase;
      case 'Research': return Target;
      case 'Competition': return Award;
      default: return Target;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic': return 'bg-primary text-primary-foreground';
      case 'Skill Development': return 'bg-success text-success-foreground';
      case 'Career': return 'bg-warning text-warning-foreground';
      case 'Research': return 'bg-purple-500 text-white';
      case 'Competition': return 'bg-orange-500 text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success text-success-foreground';
      case 'in-progress': return 'bg-primary text-primary-foreground';
      case 'planning': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const overallProgress = goals.reduce((acc, goal) => acc + goal.progress, 0) / goals.length;
  const completedGoals = goals.filter(goal => goal.status === 'completed').length;
  const highPriorityGoals = goals.filter(goal => goal.priority === 'high').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Goals & Objectives</h1>
          <p className="text-muted-foreground">Track your personal and academic goals for continuous growth</p>
        </div>
        <Button className="bg-gradient-primary text-white border-0">
          <Plus className="mr-2 h-4 w-4" />
          Add New Goal
        </Button>
      </div>

      {/* Progress Overview */}
      <Card className="bg-gradient-primary text-white border-0">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-white/80 text-sm">Overall Progress</p>
              <p className="text-3xl font-bold">{overallProgress.toFixed(0)}%</p>
              <Progress value={overallProgress} className="mt-2 h-2" />
            </div>
            <div className="text-center">
              <p className="text-white/80 text-sm">Active Goals</p>
              <p className="text-3xl font-bold">{goals.length}</p>
              <p className="text-white/60 text-sm">Currently tracking</p>
            </div>
            <div className="text-center">
              <p className="text-white/80 text-sm">High Priority</p>
              <p className="text-3xl font-bold">{highPriorityGoals}</p>
              <p className="text-white/60 text-sm">Requires focus</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Goals List */}
      <div className="space-y-6">
        {goals.map((goal) => {
          const IconComponent = getCategoryIcon(goal.category);
          const completedTasks = goal.tasks.filter(task => task.completed).length;
          
          return (
            <Card key={goal.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${getCategoryColor(goal.category)}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2 mb-2">
                        {goal.title}
                        <Badge className={getPriorityColor(goal.priority)} variant="outline">
                          {goal.priority}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="text-base">
                        {goal.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className={getStatusColor(goal.status)}>
                    {goal.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-3" />
                  </div>

                  {/* Target Date */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Target: {goal.target}</span>
                  </div>

                  {/* Tasks Breakdown */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium">Tasks ({completedTasks}/{goal.tasks.length})</h4>
                      <Badge variant="outline">{goal.category}</Badge>
                    </div>
                    <div className="space-y-2">
                      {goal.tasks.map((task, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 bg-card-secondary rounded">
                          <CheckCircle 
                            className={`h-4 w-4 ${task.completed ? 'text-success' : 'text-muted-foreground'}`}
                          />
                          <span className={`text-sm flex-1 ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                            {task.task}
                          </span>
                          {task.completed && (
                            <Badge variant="outline" className="text-xs">
                              ✓
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Goal Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Goal Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {['Academic', 'Skill Development', 'Career', 'Research', 'Competition'].map(category => {
                const count = goals.filter(goal => goal.category === category).length;
                const IconComponent = getCategoryIcon(category);
                
                return (
                  <div key={category} className="flex items-center justify-between p-3 bg-card-secondary rounded-lg">
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <span className="font-medium">{category}</span>
                    </div>
                    <Badge variant="outline">{count}</Badge>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {goals
                .filter(goal => goal.status !== 'completed')
                .slice(0, 4)
                .map((goal, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-card-secondary rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{goal.title}</p>
                      <p className="text-xs text-muted-foreground">{goal.target}</p>
                    </div>
                    <Badge className={getPriorityColor(goal.priority)}>
                      {goal.priority}
                    </Badge>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Goals;