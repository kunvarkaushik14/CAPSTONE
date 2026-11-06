import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Sparkles,
  Code2,
  Cpu,
  Layers,
  Terminal,
  Play,
  CheckCircle2,
  Route,
  BrainCircuit,
  Bot,
  BriefcaseBusiness,
  TrendingUp,
  Award,
  ExternalLink,
  GitBranch,
  FolderGit2
} from "lucide-react";
import { useNexora } from "../../context/NexoraContext.jsx";
import "./portals.css";

const TECH_TRACKS = [
  {
    id: "spring-boot-java",
    title: "Enterprise Java & Spring Boot 3",
    role: "Backend & Systems Developer",
    badge: "HIGH DEMAND",
    description: "Build robust REST APIs, Spring Security JWT, Spring Data JPA, and Microservices architecture.",
    skills: ["Java 17+", "Spring Boot", "Spring Data JPA", "PostgreSQL", "RESTful Architecture"],
    videoId: "mU6anWqZJcc"
  },
  {
    id: "react-fullstack",
    title: "Modern React 19 & Full-Stack MERN",
    role: "Full-Stack Web Engineer",
    badge: "CAMPUS FAVORITE",
    description: "Design reactive frontends, state management with Context/Redux, Node.js Express APIs, and MongoDB.",
    skills: ["React 19", "JavaScript ES6+", "Node.js", "Express", "Tailwind CSS"],
    videoId: "nu_pCVPKzTk"
  },
  {
    id: "ai-ml-python",
    title: "AI, Machine Learning & PyTorch",
    role: "AI & Data Engineer",
    badge: "NEXT GEN",
    description: "Train neural networks, build LLM pipelines, prompt engineering, and scikit-learn models.",
    skills: ["Python", "PyTorch", "Data Science", "Pandas & NumPy", "Transformers"],
    videoId: "aircAruvnKk"
  },
  {
    id: "dsa-placement",
    title: "Data Structures & Algorithms (DSA)",
    role: "Product SDE Interview Track",
    badge: "CORE PLACEMENT",
    description: "Master arrays, two-pointers, trees, graphs, dynamic programming, and LeetCode problem patterns.",
    skills: ["Time Complexity", "Binary Trees", "Graphs & BFS/DFS", "Dynamic Programming"],
    videoId: "8hly31xKli0"
  }
];

export default function CollegePortalPage() {
  const navigate = useNavigate();
  const { user, profile, updateProfile, openVideoPlayer, intelligence } = useNexora();
  const [activeTab, setActiveTab] = useState("tracks"); // tracks | placement | capstone

  const collegeSkills = profile.skills || [
    "Java",
    "Python",
    "Data Structures",
    "React",
    "SQL"
  ];

  return (
    <div className="nx-portal-view college-portal">
      {/* Hero Banner */}
      <section className="nx-portal-hero college-hero">
        <div className="nx-portal-hero-content">
          <div className="nx-portal-pill-row">
            <span className="nx-portal-badge college">
              <Cpu size={14} /> COLLEGE & UNIVERSITY PORTAL
            </span>
            <span className="nx-portal-grade-tag">
              {profile.degree || "B.Tech Computer Science / Engineering"} • Semester & Placement Hub
            </span>
          </div>

          <h1>
            Accelerating Campus Placement & <em>Production Engineering Skills.</em>
          </h1>
          <p>
            Bridge university syllabus with modern industry tech stacks: Spring Boot, Full-Stack React,
            Machine Learning, and Data Structures & Algorithms.
          </p>

          <div className="nx-portal-quick-stats">
            <div className="stat-card">
              <span className="stat-num">{collegeSkills.length}</span>
              <span className="stat-label">Verified Tech Skills</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">{intelligence?.activeCareer?.readinessScore || 78}%</span>
              <span className="stat-label">Placement Readiness</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">{profile.targetRole || "Software Development Engineer"}</span>
              <span className="stat-label">Target Role</span>
            </div>
          </div>
        </div>

        <div className="nx-portal-hero-action-card">
          <div className="action-card-header">
            <Terminal size={18} className="cyan-icon" />
            <div>
              <h3>Placement AI Simulator Ready</h3>
              <p>Practice coding questions, system design walkthroughs, and technical HR rounds.</p>
            </div>
          </div>
          <div className="action-card-buttons">
            <Link to="/roadmap" className="btn-portal-primary">
              <Route size={16} /> Campus Placement Roadmap
            </Link>
            <Link to="/nexora-ai" className="btn-portal-secondary">
              <Bot size={16} /> Practice with NEXORA AI
            </Link>
          </div>
        </div>
      </section>

      {/* Portal Tabs */}
      <div className="nx-portal-tab-bar">
        <button
          className={`portal-tab ${activeTab === "tracks" ? "active" : ""}`}
          onClick={() => setActiveTab("tracks")}
        >
          <Layers size={16} /> Industry Tech Tracks
        </button>
        <button
          className={`portal-tab ${activeTab === "placement" ? "active" : ""}`}
          onClick={() => setActiveTab("placement")}
        >
          <Award size={16} /> Campus Placement & DSA Prep
        </button>
        <button
          className={`portal-tab ${activeTab === "capstone" ? "active" : ""}`}
          onClick={() => setActiveTab("capstone")}
        >
          <FolderGit2 size={16} /> Capstone Projects & Hackathons
        </button>
      </div>

      {/* Tab 1: Industry Tech Tracks */}
      {activeTab === "tracks" && (
        <div className="portal-tab-content">
          <div className="section-title-wrap">
            <div>
              <h2>Production Engineering Tech Tracks</h2>
              <p>Curated curriculums designed to get you hired into high-growth software teams.</p>
            </div>
            <Link to="/skills" className="btn-portal-outline">
              <BrainCircuit size={16} /> Explore All Skills Catalog
            </Link>
          </div>

          <div className="portal-cards-grid">
            {TECH_TRACKS.map((track) => (
              <div key={track.id} className="portal-course-card college-card">
                <div className="card-top-row">
                  <span className="category-pill college">{track.badge}</span>
                  <span className="duration-pill">{track.role}</span>
                </div>
                <h3>{track.title}</h3>
                <p>{track.description}</p>

                <div className="tech-tags-list">
                  {track.skills.map((s) => (
                    <span key={s} className="tech-tag">{s}</span>
                  ))}
                </div>

                <div className="card-actions">
                  <button
                    type="button"
                    className="btn-watch-pointer"
                    onClick={() =>
                      openVideoPlayer({
                        videoId: track.videoId,
                        title: track.title,
                        channel: "NEXORA Engineering Academy",
                        pointerNote: "Key architectural breakdown for college engineers."
                      })
                    }
                  >
                    <Play size={14} /> Master Track Video
                  </button>
                  <Link to="/roadmap" className="btn-toggle-skill">
                    <Route size={14} /> Roadmap
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Campus Placement & DSA */}
      {activeTab === "placement" && (
        <div className="portal-tab-content">
          <div className="section-title-wrap">
            <div>
              <h2>Campus Placement Blueprint</h2>
              <p>Step-by-step checklist to clear online assessment (OA) and technical rounds.</p>
            </div>
            <Link to="/analytics" className="btn-portal-outline">
              <TrendingUp size={16} /> Skill Deficit Audit
            </Link>
          </div>

          <div className="syllabus-grid">
            <div className="syllabus-card">
              <h3>⚡ Round 1: Online Coding Assessment (OA)</h3>
              <p>Time management, edge case handling, and optimal time complexities.</p>
              <ul>
                <li><CheckCircle2 size={14} className="green" /> Array manipulation & HashMaps (O(N))</li>
                <li><CheckCircle2 size={14} className="green" /> Two pointers & sliding window</li>
                <li><Clock size={14} className="gold" /> Graph traversal (DFS & BFS)</li>
              </ul>
              <button
                className="btn-card-link"
                onClick={() =>
                  openVideoPlayer({
                    videoId: "8hly31xKli0",
                    title: "Algorithms and Data Structures Tutorial",
                    channel: "freeCodeCamp.org"
                  })
                }
              >
                <Play size={14} /> Watch DSA Breakdown
              </button>
            </div>

            <div className="syllabus-card">
              <h3>🏗️ Round 2: Technical & Core Computer Science</h3>
              <p>Object-Oriented Programming, DBMS SQL queries, and Operating Systems.</p>
              <ul>
                <li><CheckCircle2 size={14} className="green" /> 4 OOP Pillars with real-world examples</li>
                <li><Clock size={14} className="gold" /> SQL Joins, Indexing & ACID transactions</li>
                <li><Clock size={14} className="gold" /> Multithreading and memory management</li>
              </ul>
              <Link to="/nexora-ai" className="btn-card-link">
                <Bot size={14} /> Mock Interview Simulator
              </Link>
            </div>

            <div className="syllabus-card">
              <h3>📄 Round 3: Resume Review & Capstone Defense</h3>
              <p>Articulating your architecture decisions, metrics, and technical contributions.</p>
              <ul>
                <li><CheckCircle2 size={14} className="green" /> STAR framework project bullets</li>
                <li><CheckCircle2 size={14} className="green" /> Live deployed URL on GitHub README</li>
                <li><Clock size={14} className="gold" /> Why did you choose Spring Boot / React?</li>
              </ul>
              <Link to="/profile" className="btn-card-link">
                <Award size={14} /> Polish Profile
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Capstone Projects & Hackathons */}
      {activeTab === "capstone" && (
        <div className="portal-tab-content">
          <div className="section-title-wrap">
            <div>
              <h2>Standout Capstone Projects for Your Resume</h2>
              <p>Real-world projects that impress hiring managers far beyond typical tutorial clones.</p>
            </div>
          </div>

          <div className="planner-schedule-grid">
            <div className="planner-day-card">
              <h4>Project 1: Spring Boot Microservices Hub</h4>
              <p>Service discovery with Eureka, API Gateway, JWT authentication, and Docker deployment.</p>
              <div className="planner-badge">Backend SDE</div>
            </div>
            <div className="planner-day-card">
              <h4>Project 2: Real-Time Collaborative Canvas</h4>
              <p>WebSockets, React 19, Redis caching, and canvas drawing state synchronization.</p>
              <div className="planner-badge highlight">Full Stack</div>
            </div>
            <div className="planner-day-card">
              <h4>Project 3: AI Document Semantic Search</h4>
              <p>Vector embeddings, LangChain / PyTorch, and interactive semantic querying.</p>
              <div className="planner-badge green">AI Engineer</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

