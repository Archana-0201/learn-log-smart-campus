import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import StudentLayout from "./components/StudentLayout";
import StudentProfile from "./pages/student/StudentProfile";
import Attendance from "./pages/student/Attendance";
import Timetable from "./pages/student/Timetable";
import InternalMarks from "./pages/student/InternalMarks";
import OverallPerformance from "./pages/student/OverallPerformance";
import Goals from "./pages/student/Goals";
import PersonalProfile from "./pages/student/PersonalProfile";
import StaffDashboard from "./pages/StaffDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<StudentProfile />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="marks" element={<InternalMarks />} />
            <Route path="performance" element={<OverallPerformance />} />
            <Route path="goals" element={<Goals />} />
            <Route path="profile" element={<PersonalProfile />} />
          </Route>
          <Route path="/staff" element={<StaffDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;