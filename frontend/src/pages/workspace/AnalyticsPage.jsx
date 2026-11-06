import React, { useEffect, useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Printer,
  RefreshCw,
  Target,
  Clock,
  BookOpen,
  Award,
  Play,
  ExternalLink,
  FileText,
  Sparkles,
  ShieldCheck,
  Calendar,
  Filter,
  BarChart3,
  PieChart as PieIcon,
  ChevronDown,
  ArrowUpRight,
  Flame,
  Check,
  GraduationCap,
  Cpu,
  BriefcaseBusiness,
  Bot,
  Zap,
  Layers,
  Code2,
  Send,
  Users,
  Compass
} from "lucide-react";
import { useNexora } from "../../context/NexoraContext.jsx";

export default function AnalyticsPage() {
  const [searchParams] = useSearchParams();
  const {
    user,
    profile,
    progress,
    intelligence,
    monthlyReport,
    loadingAnalytics,
    fetchMonthlyReport,
    openVideoPlayer,
    activePortal
  } = useNexora();

  // Active persona: "student" | "college" | "fresher"
  const defaultPersona =
    searchParams.get("role") ||
    searchParams.get("portal") ||
    (activePortal === "college" || profile?.personaType === "college"
      ? "college"
      : activePortal === "fresher" || profile?.personaType === "fresher"
      ? "fresher"
      : "student");

  const [currentView, setCurrentView] = useState(defaultPersona);
  const [dateRange, setDateRange] = useState("Last 30 Days (Current Month)");

  useEffect(() => {
    fetchMonthlyReport();
  }, [profile?.skills, progress?.completedSteps]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="nx-ds-analytics-dashboard">
      {/* 1. Top Executive Banner */}
      <section className="nx-ds-promo-banner no-print">
        <div className="nx-ds-promo-left">
          <span className="nx-ds-chip-ai">
            <Sparkles size={14} /> NEXORA ANALYTICS ENGINE
          </span>
          <p>
            Autonomous Career & Skill Diagnostics •{" "}
            {currentView === "student"
              ? "Calibrated for Secondary & Board Exam Scholars (CBSE / ICSE / STEM)"
              : currentView === "college"
              ? "Calibrated for Engineering Degree Students (Java, Spring Boot, React & DSA)"
              : "Calibrated for Entry-Level Tech Job Seekers (ATS Resume, Mock Interviews & Placement Funnel)"}
          </p>
        </div>
        <div className="nx-ds-promo-right">
          <button className="nx-ds-banner-btn" onClick={handlePrint}>
            <Printer size={15} /> Export Official Audit PDF
          </button>
        </div>
      </section>

      {/* 2. Top Portal Selector & Report Controls */}
      <header className="nx-ds-topbar-card">
        <div className="nx-ds-brand-block">
          <div className="nx-ds-brand-icon">
            <BarChart3 size={24} />
          </div>
          <div>
            <span className="nx-ds-eyebrow">
              {currentView === "student"
                ? "SCHOOL ACADEMIC & FUTURE SKILLS REPORT"
                : currentView === "college"
                ? "COLLEGE PLACEMENT & ENGINEERING BENCHMARK"
                : "FRESHER JOB SEARCH & ATS KEYWORD FUNNEL"}
            </span>
            <h1 className="nx-ds-report-title">
              {currentView === "student"
                ? "School Student Academic & Skill Analytics"
                : currentView === "college"
                ? "College Placement Readiness & Tech Stack Analytics"
                : "Fresher Job Search, ATS & Interview Pipeline Analytics"}
            </h1>
          </div>
        </div>

        {/* View Switcher & Date Controls */}
        <div className="nx-ds-controls-group no-print">
          <div className="nx-ds-select-wrap">
            <span className="nx-ds-select-label">Active Website View:</span>
            <div style={{ display: "flex", gap: "6px" }}>
              <button
                type="button"
                onClick={() => setCurrentView("student")}
                className={`nx-portal-switch-tab ${currentView === "student" ? "active" : ""}`}
                style={{
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: currentView === "student" ? "1.5px solid #4A1525" : "1px solid rgba(74, 21, 37, 0.15)",
                  background: currentView === "student" ? "#4A1525" : "#FFFDF9",
                  color: currentView === "student" ? "#FFFDF9" : "#2D0F16",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer"
                }}
              >
                School Student
              </button>
              <button
                type="button"
                onClick={() => setCurrentView("college")}
                className={`nx-portal-switch-tab ${currentView === "college" ? "active" : ""}`}
                style={{
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: currentView === "college" ? "1.5px solid #4A1525" : "1px solid rgba(74, 21, 37, 0.15)",
                  background: currentView === "college" ? "#4A1525" : "#FFFDF9",
                  color: currentView === "college" ? "#FFFDF9" : "#2D0F16",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer"
                }}
              >
                College Student
              </button>
              <button
                type="button"
                onClick={() => setCurrentView("fresher")}
                className={`nx-portal-switch-tab ${currentView === "fresher" ? "active" : ""}`}
                style={{
                  padding: "6px 12px",
                  borderRadius: "6px",
                  border: currentView === "fresher" ? "1.5px solid #4A1525" : "1px solid rgba(74, 21, 37, 0.15)",
                  background: currentView === "fresher" ? "#4A1525" : "#FFFDF9",
                  color: currentView === "fresher" ? "#FFFDF9" : "#2D0F16",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer"
                }}
              >
                Job Fresher
              </button>
            </div>
          </div>

          <button
            className="nx-ds-btn-refresh"
            onClick={fetchMonthlyReport}
            disabled={loadingAnalytics}
            title="Recalculate report"
          >
            <RefreshCw size={15} className={loadingAnalytics ? "spin" : ""} />
            <span>{loadingAnalytics ? "Auditing..." : "Refresh"}</span>
          </button>
        </div>
      </header>

      {/* =========================================================================
          VIEW 1: SCHOOL STUDENT ANALYTICS
          ========================================================================= */}
      {currentView === "student" && (
        <div className="nx-ds-report-grid">
          {/* KPI Tiles Strip */}
          <div className="nx-ds-card" style={{ gridColumn: "1 / -1" }}>
            <div className="nx-ds-kpi-tiles-grid">
              <div className="nx-ds-kpi-tile">
                <span className="kpi-label">Board Exam Readiness</span>
                <strong className="kpi-value">88.4%</strong>
                <span className="kpi-trend positive">↑ +6.2% this month</span>
              </div>
              <div className="nx-ds-kpi-tile">
                <span className="kpi-label">Weekly Study Hours</span>
                <strong className="kpi-value">24.5 hrs</strong>
                <span className="kpi-trend positive">3.5 hrs / day avg</span>
              </div>
              <div className="nx-ds-kpi-tile">
                <span className="kpi-label">Early Skills Active</span>
                <strong className="kpi-value">4 Skills</strong>
                <span className="kpi-trend neutral">Python, AI, Web, Robotics</span>
              </div>
              <div className="nx-ds-kpi-tile">
                <span className="kpi-label">Homework & Quiz Accuracy</span>
                <strong className="kpi-value">94.2%</strong>
                <span className="kpi-trend positive">High Retention</span>
              </div>
            </div>
          </div>

          {/* Academic Subject Performance */}
          <div className="nx-ds-card">
            <div className="nx-ds-card-head">
              <div>
                <h3>Academic Subject Mastery (Class 10 CBSE/ICSE)</h3>
                <small>Curriculum coverage and mock test accuracy by subject</small>
              </div>
              <span className="nx-ds-status-badge mastered">Target: 90%+</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "16px" }}>
              {[
                { subject: "Mathematics & Geometry", score: 94, status: "Excellent", color: "#4A1525" },
                { subject: "Science & Physics Concepts", score: 88, status: "Strong", color: "#6A2437" },
                { subject: "Chemistry & Biology Experiments", score: 84, status: "Good", color: "#8B2C42" },
                { subject: "Computer Applications & Coding", score: 96, status: "Top Tier", color: "#4A1525" },
                { subject: "Social Sciences & History", score: 82, status: "On Track", color: "#6E4B53" }
              ].map((sub) => (
                <div key={sub.subject}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <strong style={{ fontSize: "13px", color: "#2D0F16" }}>{sub.subject}</strong>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: sub.color }}>
                      {sub.score}% • {sub.status}
                    </span>
                  </div>
                  <div style={{ height: "8px", background: "#F4E7EA", borderRadius: "999px", overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${sub.score}%`,
                        background: sub.color,
                        borderRadius: "999px",
                        transition: "width 0.8s ease"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Skills Progress While in School */}
          <div className="nx-ds-card">
            <div className="nx-ds-card-head">
              <div>
                <h3>Future Skills Learned Alongside School</h3>
                <small>Modern coding, AI and creative tech skills completed</small>
              </div>
              <span className="nx-ds-chip-ai">Early Creator</span>
            </div>
            <div className="nx-ds-table-wrap" style={{ marginTop: "14px" }}>
              <table className="nx-ds-table">
                <thead>
                  <tr>
                    <th>Skill Track</th>
                    <th>Level</th>
                    <th>Hours</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Python for School Students", level: "Beginner", hours: "14 hrs", status: "Mastered", pass: true },
                    { name: "AI & Prompt Engineering Basics", level: "Foundational", hours: "6 hrs", status: "Mastered", pass: true },
                    { name: "Build My First Website (HTML/CSS)", level: "Beginner", hours: "9 hrs", status: "In Progress", pass: false },
                    { name: "Robotics & Micro:bit Projects", level: "Hands-on", hours: "4 hrs", status: "Enrolled", pass: false }
                  ].map((sk) => (
                    <tr key={sk.name}>
                      <td><strong>{sk.name}</strong></td>
                      <td>{sk.level}</td>
                      <td>{sk.hours}</td>
                      <td>
                        <span className={`nx-ds-status-badge ${sk.pass ? "mastered" : "deficit"}`}>
                          {sk.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Weekly Learning Rhythm */}
          <div className="nx-ds-card">
            <div className="nx-ds-card-head">
              <div>
                <h3>Weekly Study Velocity (Mon – Sun)</h3>
                <small>Daily logged study hours vs target 3.5 hrs/day</small>
              </div>
              <span style={{ fontSize: "12px", color: "#6E4B53", fontWeight: 700 }}>24.5 hrs / 25 hrs Target</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", height: "180px", padding: "20px 10px 10px" }}>
              {[
                { day: "Mon", hrs: 3.5, height: "70%" },
                { day: "Tue", hrs: 4.0, height: "80%" },
                { day: "Wed", hrs: 3.0, height: "60%" },
                { day: "Thu", hrs: 4.5, height: "90%" },
                { day: "Fri", hrs: 3.5, height: "70%" },
                { day: "Sat", hrs: 3.0, height: "60%" },
                { day: "Sun", hrs: 3.0, height: "60%" }
              ].map((d) => (
                <div key={d.day} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", flex: 1 }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#4A1525" }}>{d.hrs}h</span>
                  <div style={{ width: "32px", height: "120px", background: "#F4E7EA", borderRadius: "6px", display: "flex", alignItems: "flex-end" }}>
                    <div style={{ width: "100%", height: d.height, background: "#4A1525", borderRadius: "6px" }} />
                  </div>
                  <span style={{ fontSize: "11px", color: "#6E4B53", fontWeight: 600 }}>{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* School AI Recommendations */}
          <div className="nx-ds-card">
            <div className="nx-ds-card-head">
              <div>
                <h3>School AI Tutor Recommendations</h3>
                <small>Actionable tips to maximize your board exam score</small>
              </div>
              <Bot size={18} style={{ color: "#4A1525" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "14px" }}>
              <div style={{ padding: "12px", background: "#F8F4E7", borderRadius: "8px", border: "1px solid rgba(74, 21, 37, 0.12)" }}>
                <strong style={{ color: "#4A1525", display: "block", marginBottom: "4px" }}>💡 Revise Quadratic Equations & Coordinate Geometry</strong>
                <p style={{ margin: 0, fontSize: "12px", color: "#6E4B53" }}>Your Mathematics accuracy is high (94%). Solving 10 more sample board questions will guarantee full marks in Section D.</p>
              </div>
              <div style={{ padding: "12px", background: "#F8F4E7", borderRadius: "8px", border: "1px solid rgba(74, 21, 37, 0.12)" }}>
                <strong style={{ color: "#4A1525", display: "block", marginBottom: "4px" }}>🚀 Complete HTML Portfolio Project</strong>
                <p style={{ margin: 0, fontSize: "12px", color: "#6E4B53" }}>You have completed 75% of Build My First Website. Publish it live on GitHub Pages to showcase for your school computer science fair.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW 2: COLLEGE STUDENT ANALYTICS
          ========================================================================= */}
      {currentView === "college" && (
        <div className="nx-ds-report-grid">
          {/* KPI Strip */}
          <div className="nx-ds-card" style={{ gridColumn: "1 / -1" }}>
            <div className="nx-ds-kpi-tiles-grid">
              <div className="nx-ds-kpi-tile">
                <span className="kpi-label">Placement Probability</span>
                <strong className="kpi-value">84.6%</strong>
                <span className="kpi-trend positive">Tier-1 & Product Track</span>
              </div>
              <div className="nx-ds-kpi-tile">
                <span className="kpi-label">Spring Boot & React Stack</span>
                <strong className="kpi-value">91.0%</strong>
                <span className="kpi-trend positive">Production Ready</span>
              </div>
              <div className="nx-ds-kpi-tile">
                <span className="kpi-label">DSA Problems Solved</span>
                <strong className="kpi-value">142 Solved</strong>
                <span className="kpi-trend positive">LeetCode & GFG</span>
              </div>
              <div className="nx-ds-kpi-tile">
                <span className="kpi-label">Mock Coding Percentile</span>
                <strong className="kpi-value">Top 12%</strong>
                <span className="kpi-trend positive">Campus Rank #8</span>
              </div>
            </div>
          </div>

          {/* Core Tech Stack Mastery */}
          <div className="nx-ds-card">
            <div className="nx-ds-card-head">
              <div>
                <h3>Enterprise Engineering Stack Mastery</h3>
                <small>Assessed against campus placement coding requirements</small>
              </div>
              <span className="nx-ds-status-badge mastered">91% Match</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "16px" }}>
              {[
                { tech: "Java 17 & Spring Boot 3", mastery: 94, status: "Enterprise Grade", color: "#4A1525" },
                { tech: "React 19 & Modern JavaScript", mastery: 88, status: "Strong Full-Stack", color: "#6A2437" },
                { tech: "Data Structures & Algorithms (DSA)", mastery: 82, status: "Placement Ready", color: "#8B2C42" },
                { tech: "PostgreSQL & Database Indexing", mastery: 86, status: "Optimized", color: "#4A1525" },
                { tech: "Docker, Microservices & REST APIs", mastery: 74, status: "Intermediate", color: "#6E4B53" }
              ].map((t) => (
                <div key={t.tech}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <strong style={{ fontSize: "13px", color: "#2D0F16" }}>{t.tech}</strong>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: t.color }}>
                      {t.mastery}% • {t.status}
                    </span>
                  </div>
                  <div style={{ height: "8px", background: "#F4E7EA", borderRadius: "999px", overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${t.mastery}%`,
                        background: t.color,
                        borderRadius: "999px"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DSA Topic Diagnostics */}
          <div className="nx-ds-card">
            <div className="nx-ds-card-head">
              <div>
                <h3>DSA Problem Solving Breakdown</h3>
                <small>Problem frequency in Tier-1 technical rounds</small>
              </div>
              <span className="nx-ds-chip-ai">142 Solved</span>
            </div>
            <div className="nx-ds-table-wrap" style={{ marginTop: "14px" }}>
              <table className="nx-ds-table">
                <thead>
                  <tr>
                    <th>DSA Topic</th>
                    <th>Solved</th>
                    <th>Accuracy</th>
                    <th>Readiness</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { topic: "Arrays, Strings & Two Pointers", count: "48 solved", acc: "96%", ready: true },
                    { topic: "HashMaps & Sliding Window", count: "28 solved", acc: "92%", ready: true },
                    { topic: "Binary Trees & BST Traversals", count: "34 solved", acc: "85%", ready: true },
                    { topic: "Dynamic Programming & Graphs", count: "18 solved", acc: "70%", ready: false },
                    { topic: "System Design & Scalability", count: "14 designs", acc: "78%", ready: false }
                  ].map((dsa) => (
                    <tr key={dsa.topic}>
                      <td><strong>{dsa.topic}</strong></td>
                      <td>{dsa.count}</td>
                      <td>{dsa.acc}</td>
                      <td>
                        <span className={`nx-ds-status-badge ${dsa.ready ? "mastered" : "deficit"}`}>
                          {dsa.ready ? "Verified" : "Needs Practice"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* GitHub & Project Portfolio Audit */}
          <div className="nx-ds-card">
            <div className="nx-ds-card-head">
              <div>
                <h3>Production Capstone & Portfolio Audit</h3>
                <small>Deployed applications verified for recruiter review</small>
              </div>
              <Award size={18} style={{ color: "#4A1525" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "14px" }}>
              <div style={{ padding: "14px", background: "#FFFDF9", border: "1px solid rgba(74, 21, 37, 0.12)", borderRadius: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ color: "#4A1525" }}>Spring Boot & React EdTech Platform</strong>
                  <span className="nx-ds-status-badge mastered">Live Deployed</span>
                </div>
                <p style={{ margin: "6px 0 0", fontSize: "12px", color: "#6E4B53" }}>
                  Features JWT security, PostgreSQL schema, Docker containerization, and REST API endpoints.
                </p>
              </div>
              <div style={{ padding: "14px", background: "#FFFDF9", border: "1px solid rgba(74, 21, 37, 0.12)", borderRadius: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ color: "#4A1525" }}>Distributed Task Scheduler & Redis Queue</strong>
                  <span className="nx-ds-status-badge mastered">Live Deployed</span>
                </div>
                <p style={{ margin: "6px 0 0", fontSize: "12px", color: "#6E4B53" }}>
                  High-throughput message queue consumer built with Java 17 and Spring Boot microservices.
                </p>
              </div>
            </div>
          </div>

          {/* Placement Action Items */}
          <div className="nx-ds-card">
            <div className="nx-ds-card-head">
              <div>
                <h3>Placement Officer Action Plan</h3>
                <small>Final sprint steps to maximize Tier-1 offer packages</small>
              </div>
              <Compass size={18} style={{ color: "#4A1525" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "14px" }}>
              <div style={{ padding: "12px", background: "#F8F4E7", borderRadius: "8px", border: "1px solid rgba(74, 21, 37, 0.12)" }}>
                <strong style={{ color: "#4A1525" }}>🎯 Target Companies: Tier-1 Product & FinTech</strong>
                <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#6E4B53" }}>
                  Expected CTC: ₹12.0L – ₹18.0L. Your Java backend and React full-stack foundation meets standard recruiter criteria.
                </p>
              </div>
              <div style={{ padding: "12px", background: "#F8F4E7", borderRadius: "8px", border: "1px solid rgba(74, 21, 37, 0.12)" }}>
                <strong style={{ color: "#4A1525" }}>⚡ Next Sprint: Dynamic Programming & Graph BFS/DFS</strong>
                <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#6E4B53" }}>
                  Solve 15 targeted LeetCode Medium graph problems to push coding round clearance rate above 95%.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW 3: FRESHER JOB SEEKER ANALYTICS
          ========================================================================= */}
      {currentView === "fresher" && (
        <div className="nx-ds-report-grid">
          {/* KPI Strip */}
          <div className="nx-ds-card" style={{ gridColumn: "1 / -1" }}>
            <div className="nx-ds-kpi-tiles-grid">
              <div className="nx-ds-kpi-tile">
                <span className="kpi-label">ATS Resume Score</span>
                <strong className="kpi-value">89.2%</strong>
                <span className="kpi-trend positive">Keyword Optimized</span>
              </div>
              <div className="nx-ds-kpi-tile">
                <span className="kpi-label">Applications Submitted</span>
                <strong className="kpi-value">42 Jobs</strong>
                <span className="kpi-trend positive">14 Active in Pipeline</span>
              </div>
              <div className="nx-ds-kpi-tile">
                <span className="kpi-label">Recruiter Callback Rate</span>
                <strong className="kpi-value">36.4%</strong>
                <span className="kpi-trend positive">Avg response: 4.2 days</span>
              </div>
              <div className="nx-ds-kpi-tile">
                <span className="kpi-label">Mock Interview Pass Rate</span>
                <strong className="kpi-value">84.0%</strong>
                <span className="kpi-trend positive">2 Direct Offers</span>
              </div>
            </div>
          </div>

          {/* Application Pipeline Funnel */}
          <div className="nx-ds-card">
            <div className="nx-ds-card-head">
              <div>
                <h3>Fresher Hiring Pipeline Funnel</h3>
                <small>Conversion breakdown from submission to offer letters</small>
              </div>
              <span className="nx-ds-status-badge mastered">2 Offers</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "16px" }}>
              {[
                { stage: "Applications Submitted", count: 42, pct: "100%", color: "#4A1525" },
                { stage: "ATS Filter Screened & Shortlisted", count: 24, pct: "57%", color: "#6A2437" },
                { stage: "Online Assessment (OA) / Coding Round", count: 14, pct: "33%", color: "#8B2C42" },
                { stage: "Technical Live Coding & System Rounds", count: 6, pct: "14%", color: "#4A1525" },
                { stage: "Final HR Round & Offer Letters", count: 2, pct: "5%", color: "#320C17" }
              ].map((f) => (
                <div key={f.stage}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                    <strong style={{ fontSize: "13px", color: "#2D0F16" }}>{f.stage}</strong>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: f.color }}>
                      {f.count} candidates ({f.pct})
                    </span>
                  </div>
                  <div style={{ height: "10px", background: "#F4E7EA", borderRadius: "999px", overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        width: f.pct,
                        background: f.color,
                        borderRadius: "999px",
                        transition: "width 0.8s ease"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Skill Deficit Matrix */}
          <div className="nx-ds-card">
            <div className="nx-ds-card-head">
              <div>
                <h3>In-Demand Market Skill Match vs Job Openings</h3>
                <small>Calibrated against active entry-level software engineering postings</small>
              </div>
              <span className="nx-ds-chip-ai">High Demand</span>
            </div>
            <div className="nx-ds-table-wrap" style={{ marginTop: "14px" }}>
              <table className="nx-ds-table">
                <thead>
                  <tr>
                    <th>In-Demand Tech Skill</th>
                    <th>Market Weight</th>
                    <th>Your Match</th>
                    <th>ATS Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { skill: "Spring Boot 3 REST APIs", weight: "High (88%)", match: "94%", pass: true },
                    { skill: "React 19 & Next.js Frontend", weight: "High (85%)", match: "90%", pass: true },
                    { skill: "SQL, Indexing & PostgreSQL", weight: "Critical (92%)", match: "86%", pass: true },
                    { skill: "Data Structures & LeetCode DSA", weight: "Critical (95%)", match: "82%", pass: true },
                    { skill: "Docker & AWS Cloud Deployment", weight: "Medium (68%)", match: "72%", pass: false }
                  ].map((row) => (
                    <tr key={row.skill}>
                      <td><strong>{row.skill}</strong></td>
                      <td>{row.weight}</td>
                      <td><strong>{row.match}</strong></td>
                      <td>
                        <span className={`nx-ds-status-badge ${row.pass ? "mastered" : "deficit"}`}>
                          {row.pass ? "Matched" : "Skill Gap"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Mock Interview Performance */}
          <div className="nx-ds-card">
            <div className="nx-ds-card-head">
              <div>
                <h3>Technical Mock Interview Scorecard</h3>
                <small>Real-time telemetry from AI and peer interview simulations</small>
              </div>
              <ShieldCheck size={18} style={{ color: "#4A1525" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "14px" }}>
              {[
                { category: "Live Coding & Algorithm Speed", score: 88, tip: "Completed two LeetCode Medium problems within 32 minutes." },
                { category: "Backend Architecture & Database Defense", score: 84, tip: "Clear explanation of REST vs gRPC and database indexing." },
                { category: "Behavioral & STAR Method Answers", score: 90, tip: "Strong answers regarding conflict resolution and project ownership." },
                { category: "Project Codebase Walkthrough", score: 92, tip: "Clean GitHub commit history and live demo URL verified." }
              ].map((item) => (
                <div key={item.category} style={{ padding: "12px", background: "#FFFDF9", border: "1px solid rgba(74, 21, 37, 0.12)", borderRadius: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <strong style={{ color: "#4A1525", fontSize: "13px" }}>{item.category}</strong>
                    <span style={{ fontWeight: 700, color: "#4A1525", fontSize: "13px" }}>{item.score}%</span>
                  </div>
                  <p style={{ margin: 0, fontSize: "12px", color: "#6E4B53" }}>{item.tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Compensation Benchmark & Location Insights */}
          <div className="nx-ds-card">
            <div className="nx-ds-card-head">
              <div>
                <h3>CTC Benchmark & Hiring Market Insights</h3>
                <small>Salary statistics for entry-level SDE roles across India & Remote</small>
              </div>
              <TrendingUp size={18} style={{ color: "#4A1525" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "14px" }}>
              <div style={{ padding: "14px", background: "#F8F4E7", borderRadius: "8px", border: "1px solid rgba(74, 21, 37, 0.12)" }}>
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#6E4B53", textTransform: "uppercase" }}>YOUR COMPENSATION TARGET</span>
                <h4 style={{ margin: "4px 0", fontSize: "20px", color: "#4A1525" }}>₹7.50 LPA — ₹12.00 LPA</h4>
                <p style={{ margin: 0, fontSize: "12px", color: "#6E4B53" }}>Based on your verified skills in Spring Boot, React 19, and DSA readiness.</p>
              </div>
              <div style={{ padding: "12px", background: "#FFFDF9", borderRadius: "8px", border: "1px solid rgba(74, 21, 37, 0.12)" }}>
                <strong style={{ color: "#4A1525", fontSize: "13px", display: "block", marginBottom: "4px" }}>Top Active Tech Hubs for Freshers:</strong>
                <p style={{ margin: 0, fontSize: "12px", color: "#6E4B53" }}>Bengaluru (44% openings), Pune (22%), Hyderabad (18%), Remote (16%). Immediate joiners receive 2.4x higher interview calls.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Audit Seal */}
      <footer className="nx-ds-footer-seal no-print" style={{ marginTop: "32px", textAlign: "center", color: "#6E4B53", fontSize: "12px" }}>
        <span>NEXORA 3.0 Career Intelligence • Certified Analytical Engine • Updated Daily</span>
      </footer>
    </div>
  );
}
