import { Outlet, NavLink } from "react-router-dom";
import { 
  CheckCircle, 
  Calendar, 
  BarChart3, 
  TrendingUp, 
  Target, 
  User,
  Home
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarHeader
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", url: "/student", icon: Home },
  { title: "Attendance", url: "/student/attendance", icon: CheckCircle },
  { title: "Timetable", url: "/student/timetable", icon: Calendar },
  { title: "Internal Marks", url: "/student/marks", icon: BarChart3 },
  { title: "Overall Performance", url: "/student/performance", icon: TrendingUp },
  { title: "Goals", url: "/student/goals", icon: Target },
  { title: "Personal Profile", url: "/student/profile", icon: User },
];

function StudentSidebar() {
  return (
    <Sidebar className="border-r bg-card">
      <SidebarHeader className="border-b p-4">
        <h2 className="text-lg font-semibold text-primary">Learn Log</h2>
        <p className="text-sm text-muted-foreground">Student Portal</p>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/student"}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                          isActive 
                            ? "bg-primary text-primary-foreground" 
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

const StudentLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <StudentSidebar />
        
        <div className="flex-1">
          <header className="h-16 border-b bg-background flex items-center px-6">
            <SidebarTrigger className="mr-4" />
            <div className="flex items-center justify-between w-full">
              <div>
                <h1 className="text-xl font-semibold">Student Dashboard</h1>
              </div>
              <div className="text-sm text-muted-foreground">
                Welcome back, Alex Johnson
              </div>
            </div>
          </header>
          
          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default StudentLayout;