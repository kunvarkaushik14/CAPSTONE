import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Cpu,
  BriefcaseBusiness,
  Route,
  BrainCircuit,
  Bot,
  TrendingUp,
  UserRound,
  SlidersHorizontal,
  PanelLeftClose,
  PanelLeftOpen,
  LogOut,
  Sparkles,
  BookOpen,
  Calendar,
  Layers,
  Code2,
  FileCheck2,
  Mic,
  Briefcase
} from "lucide-react";

import Logo from "../common/Logo.jsx";
import { useNexora } from "../../context/NexoraContext.jsx";

export default function Sidebar({
  collapsed = false,
  onToggle,
  onNavigate,
  onLogout
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, intelligence, activePortal } = useNexora();

  // Determine active portal: "student" | "college" | "fresher"
  const currentPortal =
    activePortal === "college" || profile?.personaType === "college"
      ? "college"
      : activePortal === "fresher" || profile?.personaType === "fresher"
      ? "fresher"
      : "student";

  const portalEditionLabel =
    currentPortal === "student"
      ? "SCHOOL STUDENT WEBSITE"
      : currentPortal === "college"
      ? "COLLEGE & UNIVERSITY WEBSITE"
      : "FRESHER JOB LAUNCHPAD";

  const portalBadgeTag =
    currentPortal === "student"
      ? "K-12"
      : currentPortal === "college"
      ? "B.TECH"
      : "JOBS";

  return (
    <aside className={`nx-sidebar ${collapsed ? "nx-sidebar-collapsed" : ""}`}>
      {/* Brand Header */}
      <div className="nx-sidebar-brand">
        <Logo compact={collapsed} />
        {!collapsed && (
          <span className="nx-sidebar-edition">
            {portalEditionLabel}
          </span>
        )}
      </div>

      <button
        className="nx-sidebar-toggle"
        onClick={onToggle}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
      </button>

      <div className="nx-sidebar-content">
        {/* =================================================================
            1. SCHOOL STUDENT WEBSITE EXCLUSIVE NAVIGATION
            ================================================================= */}
        {currentPortal === "student" && (
          <>
            <div className="nx-sidebar-group">
              {!collapsed && <span className="nx-sidebar-heading">SCHOOL STUDENT PORTAL</span>}

              <NavLink
                to="/student"
                end
                title={collapsed ? "School Student Hub" : undefined}
                onClick={onNavigate}
                className={({ isActive }) => `nx-sidebar-link ${isActive ? "active" : ""}`}
              >
                <GraduationCap size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>School Hub & Skills</span>
                    <small className="nx-sidebar-pill">{portalBadgeTag}</small>
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/student"
                title={collapsed ? "Board Exam Syllabus" : undefined}
                onClick={onNavigate}
                className={() => `nx-sidebar-link`}
              >
                <BookOpen size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>Board Syllabus</span>
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/student"
                title={collapsed ? "Study Planner" : undefined}
                onClick={onNavigate}
                className={() => `nx-sidebar-link`}
              >
                <Calendar size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>Study Schedule</span>
                  </span>
                )}
              </NavLink>
            </div>

            <div className="nx-sidebar-group">
              {!collapsed && <span className="nx-sidebar-heading">STUDENT LEARNING TOOLS</span>}

              <NavLink
                to="/roadmap"
                title={collapsed ? "School Study Roadmap" : undefined}
                onClick={onNavigate}
                className={({ isActive }) => `nx-sidebar-link ${isActive ? "active" : ""}`}
              >
                <Route size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>School Roadmap</span>
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/skills"
                title={collapsed ? "Future Skills Library" : undefined}
                onClick={onNavigate}
                className={({ isActive }) => `nx-sidebar-link ${isActive ? "active" : ""}`}
              >
                <BrainCircuit size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>Skills to Learn</span>
                    <small className="nx-sidebar-pill">PYTHON & AI</small>
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/nexora-ai"
                title={collapsed ? "School AI Tutor" : undefined}
                onClick={onNavigate}
                className={({ isActive }) => `nx-sidebar-link ${isActive ? "active" : ""}`}
              >
                <Bot size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>School AI Tutor</span>
                    <small className="nx-sidebar-pill">HOMEWORK</small>
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/analytics"
                title={collapsed ? "School Academic & Skills Analytics" : undefined}
                onClick={onNavigate}
                className={({ isActive }) => `nx-sidebar-link ${isActive ? "active" : ""}`}
              >
                <TrendingUp size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>Academic Analytics</span>
                    <small className="nx-sidebar-pill">STUDY & EXAMS</small>
                  </span>
                )}
              </NavLink>
            </div>
          </>
        )}

        {/* =================================================================
            2. COLLEGE STUDENT WEBSITE EXCLUSIVE NAVIGATION
            ================================================================= */}
        {currentPortal === "college" && (
          <>
            <div className="nx-sidebar-group">
              {!collapsed && <span className="nx-sidebar-heading">COLLEGE PORTAL</span>}

              <NavLink
                to="/college"
                end
                title={collapsed ? "College Placement Lab" : undefined}
                onClick={onNavigate}
                className={({ isActive }) => `nx-sidebar-link ${isActive ? "active" : ""}`}
              >
                <Cpu size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>Placement Lab</span>
                    <small className="nx-sidebar-pill">{portalBadgeTag}</small>
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/college"
                title={collapsed ? "Degree Roadmaps" : undefined}
                onClick={onNavigate}
                className={() => `nx-sidebar-link`}
              >
                <Layers size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>Degree Roadmaps</span>
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/college"
                title={collapsed ? "Engineering Project Lab" : undefined}
                onClick={onNavigate}
                className={() => `nx-sidebar-link`}
              >
                <Code2 size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>Engineering Lab</span>
                  </span>
                )}
              </NavLink>
            </div>

            <div className="nx-sidebar-group">
              {!collapsed && <span className="nx-sidebar-heading">ENGINEERING TOOLS</span>}

              <NavLink
                to="/skills"
                title={collapsed ? "Spring Boot & React Hub" : undefined}
                onClick={onNavigate}
                className={({ isActive }) => `nx-sidebar-link ${isActive ? "active" : ""}`}
              >
                <BrainCircuit size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>Spring Boot & React</span>
                    <small className="nx-sidebar-pill">JAVA 17</small>
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/roadmap"
                title={collapsed ? "Campus Placement Roadmap" : undefined}
                onClick={onNavigate}
                className={({ isActive }) => `nx-sidebar-link ${isActive ? "active" : ""}`}
              >
                <Route size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>Placement Roadmap</span>
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/analytics"
                title={collapsed ? "College Placement & Engineering Analytics" : undefined}
                onClick={onNavigate}
                className={({ isActive }) => `nx-sidebar-link ${isActive ? "active" : ""}`}
              >
                <TrendingUp size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>Placement Analytics</span>
                    <small className="nx-sidebar-pill">READINESS</small>
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/nexora-ai"
                title={collapsed ? "Engineering AI Mentor" : undefined}
                onClick={onNavigate}
                className={({ isActive }) => `nx-sidebar-link ${isActive ? "active" : ""}`}
              >
                <Bot size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>Engineering AI</span>
                    <small className="nx-sidebar-pill">DSA</small>
                  </span>
                )}
              </NavLink>
            </div>
          </>
        )}

        {/* =================================================================
            3. FRESHER JOB SEEKER WEBSITE EXCLUSIVE NAVIGATION
            ================================================================= */}
        {currentPortal === "fresher" && (
          <>
            <div className="nx-sidebar-group">
              {!collapsed && <span className="nx-sidebar-heading">FRESHER JOB PORTAL</span>}

              <NavLink
                to="/fresher"
                end
                title={collapsed ? "Fresher Job Launchpad" : undefined}
                onClick={onNavigate}
                className={({ isActive }) => `nx-sidebar-link ${isActive ? "active" : ""}`}
              >
                <BriefcaseBusiness size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>Job Launchpad</span>
                    <small className="nx-sidebar-pill">{portalBadgeTag}</small>
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/fresher"
                title={collapsed ? "Verified Entry Openings" : undefined}
                onClick={onNavigate}
                className={() => `nx-sidebar-link`}
              >
                <Briefcase size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>Job Openings</span>
                    <small className="nx-sidebar-pill">ACTIVE</small>
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/fresher"
                title={collapsed ? "Technical Mock Interview" : undefined}
                onClick={onNavigate}
                className={() => `nx-sidebar-link`}
              >
                <Mic size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>Mock Interview</span>
                  </span>
                )}
              </NavLink>
            </div>

            <div className="nx-sidebar-group">
              {!collapsed && <span className="nx-sidebar-heading">CAREER TOOLS</span>}

              <NavLink
                to="/analytics"
                title={collapsed ? "Fresher Job Search & ATS Analytics" : undefined}
                onClick={onNavigate}
                className={({ isActive }) => `nx-sidebar-link ${isActive ? "active" : ""}`}
              >
                <TrendingUp size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>Job & ATS Analytics</span>
                    <small className="nx-sidebar-pill">ATS & FUNNEL</small>
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/skills"
                title={collapsed ? "In-Demand Tech Skills" : undefined}
                onClick={onNavigate}
                className={({ isActive }) => `nx-sidebar-link ${isActive ? "active" : ""}`}
              >
                <BrainCircuit size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>In-Demand Skills</span>
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/roadmap"
                title={collapsed ? "First Job Roadmap" : undefined}
                onClick={onNavigate}
                className={({ isActive }) => `nx-sidebar-link ${isActive ? "active" : ""}`}
              >
                <Route size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>First Job Roadmap</span>
                  </span>
                )}
              </NavLink>

              <NavLink
                to="/nexora-ai"
                title={collapsed ? "Job Search AI Mentor" : undefined}
                onClick={onNavigate}
                className={({ isActive }) => `nx-sidebar-link ${isActive ? "active" : ""}`}
              >
                <Bot size={19} strokeWidth={1.7} />
                {!collapsed && (
                  <span className="nx-sidebar-link-label">
                    <span>Job Search AI</span>
                  </span>
                )}
              </NavLink>
            </div>
          </>
        )}

        {/* User Account Section */}
        <div className="nx-sidebar-group">
          {!collapsed && <span className="nx-sidebar-heading">MY ACCOUNT</span>}

          <NavLink
            to="/profile"
            title={collapsed ? "My Profile" : undefined}
            onClick={onNavigate}
            className={({ isActive }) => `nx-sidebar-link ${isActive ? "active" : ""}`}
          >
            <UserRound size={19} strokeWidth={1.7} />
            {!collapsed && (
              <span className="nx-sidebar-link-label">
                <span>{currentPortal === "student" ? "Student Profile" : currentPortal === "college" ? "College Profile" : "Candidate Profile"}</span>
              </span>
            )}
          </NavLink>

          <NavLink
            to={`/onboarding?role=${currentPortal}`}
            title={collapsed ? "Assessment Wizard" : undefined}
            onClick={onNavigate}
            className={({ isActive }) => `nx-sidebar-link ${isActive ? "active" : ""}`}
          >
            <SlidersHorizontal size={19} strokeWidth={1.7} />
            {!collapsed && (
              <span className="nx-sidebar-link-label">
                <span>Assessment Questions</span>
                <small className="nx-sidebar-pill">6-8 Q</small>
              </span>
            )}
          </NavLink>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="nx-sidebar-bottom">
        {!collapsed && (
          <div className="nx-sidebar-tip student-tip">
            <Sparkles size={18} className="nx-tip-icon" />
            <div>
              <strong>{user?.name || "NEXORA Member"}</strong>
              <span>
                {currentPortal === "student"
                  ? "School Scholar (Class 9–12)"
                  : currentPortal === "college"
                  ? "College Engineer (B.Tech)"
                  : "Fresher Job Seeker"}
              </span>
            </div>
          </div>
        )}

        <button
          className="nx-sidebar-logout"
          onClick={onLogout}
          title={collapsed ? "Sign out" : undefined}
        >
          <LogOut size={18} />
          {!collapsed && <span>Sign Out / Switch Website</span>}
        </button>
      </div>
    </aside>
  );
}
