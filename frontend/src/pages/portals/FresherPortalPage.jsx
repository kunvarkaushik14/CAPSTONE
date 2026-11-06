import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BriefcaseBusiness,
  Sparkles,
  Search,
  FileText,
  TrendingUp,
  Award,
  Play,
  CheckCircle2,
  Route,
  BrainCircuit,
  Bot,
  MapPin,
  Clock,
  ExternalLink,
  Target,
  SlidersHorizontal,
  ChevronRight
} from "lucide-react";
import { useNexora } from "../../context/NexoraContext.jsx";
import "./portals.css";

const FRESHER_JOB_ROLES = [
  {
    id: "job-1",
    title: "Junior Backend Engineer (Spring Boot / Java)",
    company: "NexScale Cloud Systems",
    location: "Bengaluru / Hybrid",
    salary: "₹6.5 – ₹10 LPA",
    type: "Full-Time (Fresher Batch 2024-2026)",
    matchScore: 94,
    skills: ["Java 17", "Spring Boot", "REST APIs", "SQL", "Git"],
    summary: "Build scalable microservices and database queries for cloud-native enterprise products."
  },
  {
    id: "job-2",
    title: "Associate Full-Stack Developer",
    company: "Veloce Technologies",
    location: "Remote / India",
    salary: "₹5.0 – ₹8.5 LPA",
    type: "Full-Time (Entry Level)",
    matchScore: 91,
    skills: ["React 19", "Node.js", "Express", "PostgreSQL", "CSS3"],
    summary: "Develop interactive web application features, responsive dashboards, and client APIs."
  },
  {
    id: "job-3",
    title: "Junior AI & Data Analyst",
    company: "InsightAI Labs",
    location: "Hyderabad / Pune",
    salary: "₹6.0 – ₹9.5 LPA",
    type: "Full-Time (Fresh Graduate)",
    matchScore: 88,
    skills: ["Python", "Pandas", "SQL", "Data Visualization", "Machine Learning"],
    summary: "Analyze customer behavioral datasets, build predictive dashboards, and clean ML pipelines."
  },
  {
    id: "job-4",
    title: "Cloud Support & DevOps Associate",
    company: "Apex Cloud Services",
    location: "Noida / Delhi NCR",
    salary: "₹5.5 – ₹8.0 LPA",
    type: "Full-Time (Immediate Joiner)",
    matchScore: 86,
    skills: ["Linux", "AWS Basics", "Docker", "Bash Scripting", "CI/CD"],
    summary: "Assist in cloud container deployment, infrastructure monitoring, and release pipelines."
  }
];

export default function FresherPortalPage() {
  const navigate = useNavigate();
  const { user, profile, openVideoPlayer, intelligence } = useNexora();
  const [activeTab, setActiveTab] = useState("jobs"); // jobs | ats | interview
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [appliedNotice, setAppliedNotice] = useState("");

  const handleApply = (jobTitle) => {
    if (!appliedJobs.includes(jobTitle)) {
      setAppliedJobs([...appliedJobs, jobTitle]);
      setAppliedNotice(`Application submitted for ${jobTitle}! Resume sent via NEXORA.`);
      setTimeout(() => setAppliedNotice(""), 4000);
    }
  };

  return (
    <div className="nx-portal-view fresher-portal">
      {/* Hero Banner */}
      <section className="nx-portal-hero fresher-hero">
        <div className="nx-portal-hero-content">
          <div className="nx-portal-pill-row">
            <span className="nx-portal-badge fresher">
              <BriefcaseBusiness size={14} /> FRESHER JOB SEEKER PORTAL
            </span>
            <span className="nx-portal-grade-tag">
              Entry-Level Placements & Job Hunt Acceleration
            </span>
          </div>

          <h1>
            Your Launchpad to Landing Your <em>First Full-Time Job.</em>
          </h1>
          <p>
            Curated fresh graduate openings, ATS resume calibration, live skill deficit audits,
            and AI-driven mock interview preparation.
          </p>

          <div className="nx-portal-quick-stats">
            <div className="stat-card">
              <span className="stat-num">{FRESHER_JOB_ROLES.length}</span>
              <span className="stat-label">Active Openings</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">{appliedJobs.length}</span>
              <span className="stat-label">Applications Sent</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">87%</span>
              <span className="stat-label">ATS Resume Score</span>
            </div>
          </div>
        </div>

        <div className="nx-portal-hero-action-card">
          <div className="action-card-header">
            <Target size={18} className="emerald-icon" />
            <div>
              <h3>AI Interview Coach Active</h3>
              <p>Simulate realistic technical and HR interview rounds with real-time feedback.</p>
            </div>
          </div>
          <div className="action-card-buttons">
            <Link to="/nexora-ai" className="btn-portal-primary">
              <Bot size={16} /> Start Mock Interview
            </Link>
            <Link to="/analytics" className="btn-portal-secondary">
              <TrendingUp size={16} /> Audit Skill Deficit
            </Link>
          </div>
        </div>
      </section>

      {/* Portal Tabs */}
      <div className="nx-portal-tab-bar">
        <button
          className={`portal-tab ${activeTab === "jobs" ? "active" : ""}`}
          onClick={() => setActiveTab("jobs")}
        >
          <BriefcaseBusiness size={16} /> Fresh Graduate Openings
        </button>
        <button
          className={`portal-tab ${activeTab === "ats" ? "active" : ""}`}
          onClick={() => setActiveTab("ats")}
        >
          <FileText size={16} /> ATS Resume & Skill Gap
        </button>
        <button
          className={`portal-tab ${activeTab === "interview" ? "active" : ""}`}
          onClick={() => setActiveTab("interview")}
        >
          <Award size={16} /> Interview Questions & Prep
        </button>
      </div>

      {/* Applied Notice */}
      {appliedNotice && (
        <div className="nx-portal-alert">
          <CheckCircle2 size={18} />
          <span>{appliedNotice}</span>
        </div>
      )}

      {/* Tab 1: Fresh Graduate Openings */}
      {activeTab === "jobs" && (
        <div className="portal-tab-content">
          <div className="section-title-wrap">
            <div>
              <h2>Verified Fresher Opportunities</h2>
              <p>Roles looking specifically for 0-1 years of experience or fresh graduates.</p>
            </div>
            <Link to="/roadmap" className="btn-portal-outline">
              <Route size={16} /> Target Skill Roadmap
            </Link>
          </div>

          <div className="portal-cards-grid">
            {FRESHER_JOB_ROLES.map((job) => {
              const isApplied = appliedJobs.includes(job.title);
              return (
                <div key={job.id} className="portal-job-card">
                  <div className="job-card-top">
                    <div>
                      <span className="company-badge">{job.company}</span>
                      <h3>{job.title}</h3>
                    </div>
                    <span className="match-tag">{job.matchScore}% Match</span>
                  </div>

                  <p className="job-summary">{job.summary}</p>

                  <div className="job-meta-row">
                    <span><MapPin size={13} /> {job.location}</span>
                    <span><Clock size={13} /> {job.type}</span>
                    <strong className="salary-text">{job.salary}</strong>
                  </div>

                  <div className="job-skills-row">
                    {job.skills.map((s) => (
                      <span key={s} className="job-skill-chip">{s}</span>
                    ))}
                  </div>

                  <div className="job-card-actions">
                    <button
                      type="button"
                      disabled={isApplied}
                      className={`btn-apply-job ${isApplied ? "applied" : ""}`}
                      onClick={() => handleApply(job.title)}
                    >
                      {isApplied ? (
                        <>
                          <CheckCircle2 size={15} /> Application Sent
                        </>
                      ) : (
                        <>
                          <BriefcaseBusiness size={15} /> 1-Click Apply
                        </>
                      )}
                    </button>
                    <Link to="/skills" className="btn-card-link-subtle">
                      View Required Skills
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: ATS Resume & Skill Gap */}
      {activeTab === "ats" && (
        <div className="portal-tab-content">
          <div className="section-title-wrap">
            <div>
              <h2>ATS Resume Calibration & Skill Deficit</h2>
              <p>Ensure your resume passes Applicant Tracking Systems and matches recruiter keywords.</p>
            </div>
            <Link to="/profile" className="btn-portal-outline">
              <FileText size={16} /> Edit My Profile
            </Link>
          </div>

          <div className="syllabus-grid">
            <div className="syllabus-card">
              <h3>🎯 ATS Keyword Optimization</h3>
              <p>Top keywords currently sought by hiring algorithms in 2026.</p>
              <ul>
                <li><CheckCircle2 size={14} className="green" /> REST APIs, Spring Boot & Microservices</li>
                <li><CheckCircle2 size={14} className="green" /> Unit Testing (JUnit, Jest) & Git CI/CD</li>
                <li><CheckCircle2 size={14} className="green" /> Cloud Deployment & Docker Containers</li>
              </ul>
            </div>

            <div className="syllabus-card">
              <h3>📊 Impact-Driven Project Bullets</h3>
              <p>Transform generic task descriptions into measurable accomplishments.</p>
              <ul>
                <li><CheckCircle2 size={14} className="green" /> ❌ "Built a todo app in React"</li>
                <li><CheckCircle2 size={14} className="green" /> ✔ "Built responsive full-stack task hub serving 50+ daily users with sub-100ms response time"</li>
              </ul>
            </div>

            <div className="syllabus-card">
              <h3>🔍 Skill Gap Indicator</h3>
              <p>Most common missing skill for fresher backend candidates:</p>
              <ul>
                <li><Clock size={14} className="gold" /> Spring Boot 3 & Hibernate JPA</li>
                <li><Clock size={14} className="gold" /> System Design & Scalability Basics</li>
              </ul>
              <Link to="/roadmap" className="btn-card-link">
                <Route size={14} /> Learn Missing Skills
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Interview Questions & Prep */}
      {activeTab === "interview" && (
        <div className="portal-tab-content">
          <div className="section-title-wrap">
            <div>
              <h2>Fresher Interview Toolkit</h2>
              <p>Master technical interview coding questions and behavioral frameworks.</p>
            </div>
            <Link to="/nexora-ai" className="btn-portal-outline">
              <Bot size={16} /> Ask AI Interviewer
            </Link>
          </div>

          <div className="syllabus-grid">
            <div className="syllabus-card">
              <h3>💡 Tell Me About Yourself</h3>
              <p>Deliver a 90-second elevator pitch highlighting your degree, projects, and tech stack.</p>
              <button
                className="btn-card-link"
                onClick={() =>
                  openVideoPlayer({
                    videoId: "aircAruvnKk",
                    title: "Interview Communication & Confidence",
                    channel: "NEXORA Career Studio"
                  })
                }
              >
                <Play size={14} /> Watch Strategy Video
              </button>
            </div>

            <div className="syllabus-card">
              <h3>⚡ Live Coding & DSA Tips</h3>
              <p>How to communicate your thought process aloud before typing a single line of code.</p>
              <button
                className="btn-card-link"
                onClick={() =>
                  openVideoPlayer({
                    videoId: "8hly31xKli0",
                    title: "Coding Interview Algorithm Walkthrough",
                    channel: "freeCodeCamp.org"
                  })
                }
              >
                <Play size={14} /> Watch Live Coding Tips
              </button>
            </div>

            <div className="syllabus-card">
              <h3>🤝 Behavioral & STAR Framework</h3>
              <p>Situation, Task, Action, Result answers for teamwork and resolving technical blockers.</p>
              <Link to="/nexora-ai" className="btn-card-link">
                <Bot size={14} /> Practice Behavioral Rounds
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

