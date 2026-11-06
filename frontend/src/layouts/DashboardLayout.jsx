import React, { useState, useEffect } from "react";
import { Outlet, useLocation, Link, useNavigate } from "react-router-dom";
import {
  Menu,
  Bot,
  Route,
  SlidersHorizontal,
  TrendingUp,
  BrainCircuit,
  GraduationCap,
  Cpu,
  BriefcaseBusiness,
  Sparkles
} from "lucide-react";

import Sidebar from "../components/navigation/Sidebar.jsx";
import Logo from "../components/common/Logo.jsx";
import YouTubePlayerModal from "../components/youtube/YouTubePlayerModal.jsx";
import NexoraAiFloatingWidget from "../components/ai/NexoraAiFloatingWidget.jsx";
import { useNexora } from "../context/NexoraContext.jsx";

export default function DashboardLayout({ onLogout }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, intelligence, setAiDrawerOpen, activePortal, setActivePortal } = useNexora();

  const currentRole =
    activePortal === "college" || profile?.personaType === "college"
      ? "College Student"
      : activePortal === "fresher" || profile?.personaType === "fresher"
      ? "Job Fresher"
      : "School Student";

  const currentPersona =
    activePortal === "college" || profile?.personaType === "college"
      ? "college"
      : activePortal === "fresher" || profile?.personaType === "fresher"
      ? "fresher"
      : "student";

  // =========================================================================
  // STRICT PERSONA WEBSITE ENFORCEMENT
  // A student ONLY gets the student website.
  // A college student ONLY gets the college website.
  // A fresher ONLY gets the fresher job launchpad website.
  // =========================================================================
  useEffect(() => {
    const path = location.pathname;

    // 1. If user hits /dashboard, redirect to their dedicated website home
    if (path === "/dashboard") {
      if (currentPersona === "student") navigate("/student", { replace: true });
      else if (currentPersona === "college") navigate("/college", { replace: true });
      else if (currentPersona === "fresher") navigate("/fresher", { replace: true });
      return;
    }

    // 2. Cross-portal isolation guard
    if (currentPersona === "student") {
      if (path === "/college" || path === "/college-hub" || path === "/fresher" || path === "/fresher-hub") {
        navigate("/student", { replace: true });
      }
    } else if (currentPersona === "college") {
      if (path === "/student" || path === "/student-hub" || path === "/fresher" || path === "/fresher-hub") {
        navigate("/college", { replace: true });
      }
    } else if (currentPersona === "fresher") {
      if (path === "/student" || path === "/student-hub" || path === "/college" || path === "/college-hub") {
        navigate("/fresher", { replace: true });
      }
    }
  }, [location.pathname, currentPersona, navigate]);

  // Dynamic persona-specific page titles
  const getPageTitle = (path) => {
    if (path === "/student" || path === "/student-hub") return "School Student Portal • K-12 Future Skills & Academics";
    if (path === "/college" || path === "/college-hub") return "College & University Portal • Degree Placement Lab";
    if (path === "/fresher" || path === "/fresher-hub") return "Fresher Job Seeker Portal • First Tech Job Launchpad";
    if (path === "/skills") {
      return currentPersona === "student"
        ? "Skills to Learn in School (Python, AI, Web)"
        : currentPersona === "college"
        ? "Java, Spring Boot & React Engineering Hub"
        : "In-Demand Tech Skills & Video Curricula";
    }
    if (path === "/roadmap") {
      return currentPersona === "student"
        ? "School Exam & Coding Study Roadmap"
        : currentPersona === "college"
        ? "Degree Campus Placement Roadmap"
        : "First Tech Job Milestones & Roadmap";
    }
    if (path === "/nexora-ai") {
      return currentPersona === "student"
        ? "School AI Tutor (Homework & Math Helper)"
        : currentPersona === "college"
        ? "College AI Mentor (DSA & Code Architect)"
        : "Job Search AI Assistant (Interview & Resume)";
    }
    if (path === "/analytics") {
      return currentPersona === "student"
        ? "Academic Progress & Future Skills Report"
        : currentPersona === "college"
        ? "Placement Readiness & Gap Audit"
        : "ATS Resume Keyword & Skill Deficit Audit";
    }
    if (path === "/profile") {
      return currentPersona === "student"
        ? "School Scholar Profile & Skills"
        : currentPersona === "college"
        ? "Engineering Candidate Portfolio"
        : "Job Seeker Candidate Profile";
    }
    return `${currentRole} Workspace`;
  };

  const title = getPageTitle(location.pathname);
  const initial = (user?.name || "L")[0].toUpperCase();

  return (
    <div className="nx-workspace">
      <div
        className={`nx-mobile-overlay ${mobileOpen ? "show" : ""}`}
        onClick={() => setMobileOpen(false)}
      />

      <div className={`nx-workspace-sidebar ${mobileOpen ? "mobile-open" : ""}`}>
        <Sidebar
          collapsed={collapsed}
          onToggle={() => setCollapsed((value) => !value)}
          onNavigate={() => setMobileOpen(false)}
          onLogout={onLogout}
        />
      </div>

      <div className="nx-workspace-main">
        <header className="nx-workspace-topbar">
          <button
            className="nx-workspace-menu"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={21} />
          </button>

          <div className="nx-mobile-brand">
            <Logo compact />
          </div>

          <div className="nx-page-heading">
            <span>
              {currentRole.toUpperCase()} WEBSITE • ACTIVE TRACK: {intelligence?.activeCareer?.title?.toUpperCase() || "CAREER TRACK"} ({intelligence?.activeCareer?.matchScore || 96}% MATCH)
            </span>
            <h1>{title}</h1>
          </div>

          <div className="nx-topbar-actions">
            {/* Quick action button for assessment */}
            <Link
              to={`/onboarding?role=${currentPersona}`}
              className="nx-topbar-pill-btn"
              title="Update your assessment questions & skills"
            >
              <SlidersHorizontal size={14} />
              <span>Assessment Wizard</span>
            </Link>

            <Link
              to="/roadmap"
              className="nx-topbar-pill-btn sage"
              title="Open your active roadmap & YouTube tutorials"
            >
              <Route size={14} />
              <span>My Roadmap</span>
            </Link>

            <button
              type="button"
              className="nx-topbar-ai-btn"
              onClick={() => setAiDrawerOpen(true)}
              title="Open NEXORA AI Mentor"
            >
              <Bot size={16} />
              <span>NEXORA AI</span>
            </button>

            <button
              type="button"
              className="nx-avatar"
              title={`Profile: ${user?.name || "Learner"}`}
              onClick={() => navigate("/profile")}
            >
              {initial}
            </button>
          </div>
        </header>

        <main className="nx-workspace-content">
          <Outlet />
        </main>
      </div>

      {/* Global In-App YouTube Player Modal & Floating NEXORA AI Mentor */}
      <YouTubePlayerModal />
      <NexoraAiFloatingWidget />
    </div>
  );
}
