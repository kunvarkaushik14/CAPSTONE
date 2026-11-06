import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Compass,
  Target,
  Route,
  ChartNoAxesColumnIncreasing,
  GraduationCap,
  BriefcaseBusiness,
  CheckCircle2,
  Menu,
  X,
  Play,
  Flame,
  Zap,
  BookOpen,
  Cpu,
  Layers,
  ShieldCheck,
  Building2,
  ExternalLink,
  FileText,
  Award,
  Video,
  ChevronRight,
  Clock,
  Search,
  Check
} from "lucide-react";

import "./landing.css";
import { useNexora } from "../../context/NexoraContext.jsx";

// Dynamic Role Previews for Interactive Hero Tabs
const HERO_ROLE_PREVIEWS = {
  student: {
    tabLabel: "🎓 School (Class 8–12)",
    eyebrow: "FOUNDATIONAL ACADEMIC & FUTURE SKILLS",
    title: "Secondary School Scholar & Future Skills",
    category: "School Academics & Future Tech Skills",
    matchScore: 98,
    readinessScore: 82,
    tagline: "Excel in CBSE/ICSE board exams while learning future skills like Python, AI & Prompting, Web Dev, and Robotics early in school.",
    essentialSkills: ["Python for School Students", "Basic Mathematics & Algebra", "General Science Fundamentals", "Digital Computer Literacy"],
    missingSkill: "AI & Prompt Engineering Basics",
    youtubeLesson: {
      title: "Python for Beginners — Complete Course for School Students",
      channel: "Programming with Mosh",
      duration: "1:00:10",
      videoId: "rfscVS0vtbw",
      pointerNote: "POINTER: Start at 00:00 for variables or jump to 22:30 for fun interactive exercises."
    },
    demoUser: "student@nexora.ai",
    ctaText: "Launch School Student Website"
  },
  college: {
    tabLabel: "🏛️ College & University",
    eyebrow: "DEGREE PLACEMENT & SOFTWARE LAB",
    title: "Full-Stack Software Engineer (Java, Spring Boot & React)",
    category: "College Degree & Placement Lab",
    matchScore: 96,
    readinessScore: 85,
    tagline: "Master Java 17, Spring Boot enterprise APIs, React 19, and Data Structures to secure top-tier campus placements and internships.",
    essentialSkills: ["Java 17+", "Spring Boot 3", "React 19", "SQL & Database Design", "Git & GitHub"],
    missingSkill: "System Design & Microservices Architecture",
    youtubeLesson: {
      title: "Spring Boot 3 & Microservices Full Backend Course",
      channel: "Amigoscode",
      duration: "2:45:10",
      videoId: "Oe421EPjeBE",
      pointerNote: "POINTER: Jump to 18:20 for Spring Data JPA and REST Controller setup."
    },
    demoUser: "college@nexora.ai",
    ctaText: "Launch College Student Website"
  },
  fresher: {
    tabLabel: "💼 Job Freshers",
    eyebrow: "ENTRY-LEVEL TECH JOB LAUNCHPAD",
    title: "Junior Software Development Engineer (SDE-1)",
    category: "First Tech Job Launchpad",
    matchScore: 97,
    readinessScore: 88,
    tagline: "Verified entry-level software openings, ATS resume keyword scoring, and AI technical mock interviews for quick hiring.",
    essentialSkills: ["Core Java / Python", "RESTful API Integration", "Data Structures & Algorithms", "SQL Query Optimization"],
    missingSkill: "Technical Mock Interview Communication",
    youtubeLesson: {
      title: "Full Stack SDE Interview Preparation & Roadmap",
      channel: "freeCodeCamp.org",
      duration: "2:10:45",
      videoId: "8hly31xKli0",
      pointerNote: "POINTER: Focus on 35:10 for technical problem breakdown techniques."
    },
    demoUser: "fresher@nexora.ai",
    ctaText: "Launch Fresher Job Website"
  }
};

// Interactive Quick Career Match Simulation Chips (Clean Title & No Raw Code Numbers)
const QUICK_SIMULATION_CAREERS = [
  { label: "📚 Class 10 Scholar", query: "class 10 school secondary board cbse math algebra science", match: "Secondary School Scholar (Class 9–10)", confidence: "Optimal Vector Alignment", topSkill: "Mathematics & Science" },
  { label: "📐 Class 12 Pre-Univ", query: "class 12 physics chemistry calculus boards jee", match: "Senior Secondary Scholar (Class 11–12)", confidence: "Optimal Vector Alignment", topSkill: "Calculus & Physics" },
  { label: "🤖 AI Engineer", query: "python machine learning neural networks deep learning", match: "AI & Machine Learning Engineer", confidence: "Optimal Vector Alignment", topSkill: "Python & Machine Learning" },
  { label: "🌐 Full-Stack Dev", query: "javascript react node full stack web applications", match: "Full-Stack Web Developer", confidence: "Optimal Vector Alignment", topSkill: "React & Node.js" },
  { label: "☕ Java Backend Dev", query: "java spring boot microservices rest apis postgresql", match: "Java Backend Engineer", confidence: "Optimal Vector Alignment", topSkill: "Spring Boot & Java 17" },
  { label: "💼 Junior SDE Fresher", query: "fresher entry level software engineer dsa coding interview", match: "Junior Software Development Engineer", confidence: "Optimal Vector Alignment", topSkill: "Data Structures & Algorithms" },
  { label: "☁️ Cloud & DevOps", query: "docker kubernetes aws ci cd linux git deployment", match: "DevOps & Cloud Engineer", confidence: "Optimal Vector Alignment", topSkill: "Docker & AWS" },
  { label: "📊 Data Analyst", query: "python sql pandas excel tableau data visualization", match: "Data Analyst & Insights Specialist", confidence: "Optimal Vector Alignment", topSkill: "SQL & Pandas" }
];

export default function LandingPage() {
  const navigate = useNavigate();
  const { setActivePortal } = useNexora();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSimCareer, setActiveSimCareer] = useState(QUICK_SIMULATION_CAREERS[0]);

  const handleSimulate = (career) => {
    setActiveSimCareer(career);
  };

  const closeMenu = () => setMenuOpen(false);

  const goToStudentPortal = () => {
    setActivePortal("student");
    navigate("/student");
  };

  const goToCollegePortal = () => {
    setActivePortal("college");
    navigate("/college");
  };

  const goToFresherPortal = () => {
    setActivePortal("fresher");
    navigate("/fresher");
  };

  return (
    <main className="landing">
      {/* 1. TOP ANNOUNCEMENT BANNER */}
      <div className="nx-top-ribbon">
        <span>⚡ NEXORA AI — Machine Learning Career Intelligence with Active Cosine Vector Inference</span>
        <Link to="/nexora-ai" className="nx-top-ribbon-link">
          Explore AI Model ↗
        </Link>
      </div>

      {/* 2. NAVIGATION */}
      <header className="navbar">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <Sparkles size={19} />
          </span>
          NEXORA<span className="amber">.</span>
        </Link>

        <nav className={menuOpen ? "nav-open" : ""}>
          <a href="#dual-portals" onClick={closeMenu}>Dual Portals</a>
          <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
          <a href="#vector-matcher" onClick={closeMenu}>Career Matcher</a>
          <Link to="/roadmap" onClick={closeMenu}>Roadmap & YouTube</Link>
          <Link to="/analytics" onClick={closeMenu}>Monthly Analytics</Link>
          <Link to="/nexora-ai" onClick={closeMenu}>AI Studio</Link>
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="sign-in">
            Sign In
          </Link>
          <Link to="/register" className="nav-button">
            <span>Get Started</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <button
          className="mobile-menu"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      {/* 3. HERO SECTION (EYE-CATCHING, INTACT WITH APPLICATION) */}
      <section className="hero">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="dot" />
            CAREER INTELLIGENCE FOR REAL PEOPLE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            From Classroom to Craftsmanship.
            <br />
            <em>Your potential has a direction.</em>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            NEXORA connects school students, skilled tradespeople, and college
            cohorts to structured roadmaps, hands-on learning pointers, and
            monthly skill deficit audits.
          </motion.p>

          {/* WHO CAN USE THIS WEBSITE — CLEAR AUDIENCE BREAKDOWN */}
          <div className="nx-hero-audience-card">
            <span className="nx-audience-label">
              <Sparkles size={13} /> WHO CAN USE NEXORA:
            </span>
            <div className="nx-audience-pills-grid">
              <div className="nx-audience-pill">
                <span className="nx-aud-icon">🎓</span>
                <div>
                  <strong>Students & Scholars</strong>
                  <small>Class 9–10, Class 11–12 & College Freshers</small>
                </div>
              </div>

              <div className="nx-audience-pill">
                <span className="nx-aud-icon">🔨</span>
                <div>
                  <strong>Skilled Trades & Craftsmen</strong>
                  <small>Carpenters, Welders, Electricians, Plumbers</small>
                </div>
              </div>

              <div className="nx-audience-pill">
                <span className="nx-aud-icon">💼</span>
                <div>
                  <strong>Freshers & Job Seekers</strong>
                  <small>Fresh Graduates & First Job Hunters</small>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Link to="/register" className="primary-button">
              <span>Start Your Learning Journey</span>
              <ArrowRight size={17} />
            </Link>

            <Link to="/login" className="secondary-button">
              <span>Sign In with Existing Profile</span>
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>

          {/* Micro Proof Strip */}
          <div className="nx-hero-trust-strip">
            <span className="nx-trust-item">
              <CheckCircle2 size={14} /> Comprehensive Career & Trade Tracks
            </span>
            <span className="nx-trust-item">
              <CheckCircle2 size={14} /> Hands-On Guided Pointers (Zero Distraction)
            </span>
            <span className="nx-trust-item">
              <CheckCircle2 size={14} /> Monthly Skill Deficit Audit Reports
            </span>
          </div>
        </div>

        {/* HERO IMAGE BOX — CLEARLY INTACT WITH APPLICATION */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-image-halo" />

          {/* Showcase Frame with Application Image */}
          <div className="nx-hero-showcase-frame">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85"
              alt="Artisan craftsman and learner collaborating with precision tools and digital workspace"
              className="nx-hero-main-photo"
            />
            <div className="nx-hero-photo-shade" />

            <div className="nx-hero-photo-caption">
              <span className="nx-photo-kicker">
                <Sparkles size={12} />
                PRACTICAL CAREER & SKILL INTELLIGENCE
              </span>
              <strong>From Classroom to Master Craftsmanship</strong>
              <p>Hands-on roadmaps for school scholars, vocational apprentices, and educational institutes.</p>
            </div>
          </div>

          {/* Floating Accents */}
          <motion.div
            className="floating-card skill-floating"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="floating-icon">
              <ChartNoAxesColumnIncreasing size={22} />
            </span>
            <div>
              <strong>Skill Deficit Audits</strong>
              <small>Actionable career gap discovery</small>
            </div>
          </motion.div>

          <motion.div
            className="floating-card roadmap-floating"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="floating-icon">
              <Route size={23} />
            </span>
            <div>
              <strong>Personalized Roadmaps</strong>
              <small>Structured milestone by milestone</small>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. LIVE METRIC COUNTER STRIP */}
      <section className="nx-metrics-strip">
        <div className="nx-metrics-container">
          <div className="nx-metric-item">
            <strong>5,284+</strong>
            <span>Standardized Occupations (ESCO & O*NET)</span>
          </div>
          <div className="nx-metric-item">
            <strong>15,651+</strong>
            <span>Verified Skills & Competences</span>
          </div>
          <div className="nx-metric-item">
            <strong>100%</strong>
            <span>Active YouTube Video Curricula</span>
          </div>
          <div className="nx-metric-item">
            <strong>&lt; 3 ms</strong>
            <span>ML Vector Space Inference Speed</span>
          </div>
        </div>
      </section>

      {/* 5. THREE DEDICATED PORTALS (SCHOOL STUDENT, COLLEGE STUDENT, AND JOB FRESHER) */}
      <section className="nx-portals-section" id="portals">
        <div className="section-heading">
          <div>
            <span className="section-label">01 — DEDICATED LEARNING & CAREER PORTALS</span>
            <h2>
              Three specialized websites.
              <br />
              <em>Built for School Students, College Scholars & Job Freshers.</em>
            </h2>
          </div>
          <p>
            Choose your portal to enter your customized dashboard with zero conflicting elements.
          </p>
        </div>

        <div className="nx-portals-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
          {/* Card 1: School Student */}
          <div
            className="nx-portal-showcase-box individual"
            onClick={goToStudentPortal}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && goToStudentPortal()}
            style={{ cursor: "pointer" }}
          >
            <div className="nx-portal-box-shader" />

            <div className="nx-portal-box-top">
              <span className="nx-portal-pill amber">
                <GraduationCap size={15} /> SCHOOL STUDENT PORTAL
              </span>
              <span className="nx-portal-badge">PORTAL 01</span>
            </div>

            <div className="nx-portal-box-content">
              <h3>School Scholars (Class 8–12)</h3>
              <p>
                Learn future tech skills early while being in school! Master Python, AI basics, web development, and robotics alongside CBSE / ICSE board exam syllabus.
              </p>

              <ul className="nx-portal-feature-list">
                <li>
                  <CheckCircle2 size={16} /> Add Skills to Learn While in School
                </li>
                <li>
                  <CheckCircle2 size={16} /> Board Exam Roadmaps (Math, Physics, Science)
                </li>
                <li>
                  <CheckCircle2 size={16} /> Interactive In-App Video Lessons with Pointers
                </li>
                <li>
                  <CheckCircle2 size={16} /> 24/7 School AI Homework & Concept Tutor
                </li>
              </ul>

              <div className="nx-portal-btn-row">
                <button
                  type="button"
                  className="nx-portal-btn-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToStudentPortal();
                  }}
                >
                  <span>Open School Portal</span>
                  <ArrowRight size={16} />
                </button>
                <Link
                  to="/register?type=student"
                  className="nx-portal-btn-secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePortal("student");
                  }}
                >
                  <span>Register</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: College Student */}
          <div
            className="nx-portal-showcase-box college"
            onClick={goToCollegePortal}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && goToCollegePortal()}
            style={{ cursor: "pointer", background: "linear-gradient(180deg, #1e1b4b, #0f172a)" }}
          >
            <div className="nx-portal-box-shader" />

            <div className="nx-portal-box-top">
              <span className="nx-portal-pill" style={{ background: "rgba(139, 92, 246, 0.2)", color: "#c084fc" }}>
                <Cpu size={15} /> COLLEGE & UNIVERSITY PORTAL
              </span>
              <span className="nx-portal-badge">PORTAL 02</span>
            </div>

            <div className="nx-portal-box-content">
              <h3>College & University Students</h3>
              <p>
                For B.Tech, BCA, B.Sc, B.Com, and MCA degree students. Bridge academic curriculum with industry tech stacks: Java 17, Spring Boot, React 19, and DSA.
              </p>

              <ul className="nx-portal-feature-list">
                <li>
                  <CheckCircle2 size={16} /> Enterprise Spring Boot & React Tech Tracks
                </li>
                <li>
                  <CheckCircle2 size={16} /> Campus Placement DSA Blueprint & Mock OAs
                </li>
                <li>
                  <CheckCircle2 size={16} /> Standout Capstone Project Blueprints
                </li>
                <li>
                  <CheckCircle2 size={16} /> Hackathon Readiness & Open-Source Guides
                </li>
              </ul>

              <div className="nx-portal-btn-row">
                <button
                  type="button"
                  className="nx-portal-btn-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToCollegePortal();
                  }}
                >
                  <span>Open College Portal</span>
                  <ArrowRight size={16} />
                </button>
                <Link
                  to="/register?type=college"
                  className="nx-portal-btn-secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePortal("college");
                  }}
                >
                  <span>Register</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Fresher Job Seeker */}
          <div
            className="nx-portal-showcase-box fresher"
            onClick={goToFresherPortal}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && goToFresherPortal()}
            style={{ cursor: "pointer", background: "linear-gradient(180deg, #064e3b, #0f172a)" }}
          >
            <div className="nx-portal-box-shader" />

            <div className="nx-portal-box-top">
              <span className="nx-portal-pill" style={{ background: "rgba(16, 185, 129, 0.2)", color: "#34d399" }}>
                <BriefcaseBusiness size={15} /> FRESHER JOB SEEKER PORTAL
              </span>
              <span className="nx-portal-badge">PORTAL 03</span>
            </div>

            <div className="nx-portal-box-content">
              <h3>Freshers Searching for Jobs</h3>
              <p>
                Launch your software career! Dedicated job search radar for entry-level tech roles, ATS resume keyword optimization, and AI mock interview rounds.
              </p>

              <ul className="nx-portal-feature-list">
                <li>
                  <CheckCircle2 size={16} /> Verified Entry-Level Openings (₹5-12 LPA)
                </li>
                <li>
                  <CheckCircle2 size={16} /> ATS Keyword Calibration & Skill Gap Radar
                </li>
                <li>
                  <CheckCircle2 size={16} /> 1-Click Job Application Simulation
                </li>
                <li>
                  <CheckCircle2 size={16} /> AI Live Coding & Behavioral Interview Coach
                </li>
              </ul>

              <div className="nx-portal-btn-row">
                <button
                  type="button"
                  className="nx-portal-btn-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToFresherPortal();
                  }}
                >
                  <span>Open Fresher Portal</span>
                  <ArrowRight size={16} />
                </button>
                <Link
                  to="/register?type=fresher"
                  className="nx-portal-btn-secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePortal("fresher");
                  }}
                >
                  <span>Register</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE INSTANT CAREER VECTOR MATCHER */}
      <section className="nx-matcher-section" id="vector-matcher">
        <div className="section-heading">
          <div>
            <span className="section-label">LIVE MACHINE LEARNING VECTOR SIMULATOR</span>
            <h2>
              Test the NEXORA ML Model.
              <br />
              <em>Click any trade or student stream below to simulate vector inference.</em>
            </h2>
          </div>
          <p>
            Powered by Vector Machine Learning & Cosine Similarity Intelligence.
          </p>
        </div>

        {/* Quick Selection Chips */}
        <div className="nx-sim-chips-container">
          {QUICK_SIMULATION_CAREERS.map((c) => (
            <button
              type="button"
              key={c.label}
              className={`nx-sim-chip ${activeSimCareer.label === c.label ? "active" : ""}`}
              onClick={() => handleSimulate(c)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Live Simulation Card */}
        <div className="nx-sim-result-card">
          <div className="nx-sim-result-top">
            <div>
              <span className="nx-sim-eyebrow">PREDICTED CAREER DIRECTION</span>
              <h3>{activeSimCareer.match}</h3>
              <p className="nx-sim-query">
                <strong>Simulated Input Focus:</strong> <em>"{activeSimCareer.query}"</em>
              </p>
            </div>
            <div className="nx-sim-score-box">
              <span className="nx-sim-confidence">{activeSimCareer.confidence}</span>
              <small>Cosine Vector Engine</small>
            </div>
          </div>

          <div className="nx-sim-details-grid">
            <div className="nx-sim-detail-col">
              <span className="nx-sim-sub-label">Verified Essential Skill</span>
              <strong>{activeSimCareer.topSkill}</strong>
            </div>
            <div className="nx-sim-detail-col">
              <span className="nx-sim-sub-label">Learning Framework</span>
              <strong>Guided Practical Roadmap</strong>
            </div>
            <div className="nx-sim-detail-col">
              <span className="nx-sim-sub-label">Monthly Audit Integration</span>
              <strong>Deficit Score & Roadmap Pointer Included</strong>
            </div>
          </div>

          <div className="nx-sim-action-row">
            <Link to="/register" className="primary-button">
              <span>Generate Full Roadmap for {activeSimCareer.label}</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/nexora-ai" className="secondary-button">
              <span>Open in NEXORA AI Studio ↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS (FOUR STREAMLINED STEPS) */}
      <section className="features" id="how-it-works">
        <span className="section-label">03 — THE 4-PILLAR METHOD</span>
        <div className="section-heading">
          <h2>
            From Zero to Mastery.
            <br />
            <em>How NEXORA transforms your career.</em>
          </h2>
          <p>
            No algorithmic confusion or unsolicited IT lectures. Pure vocational & academic clarity.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-top">
              <span>01</span>
              <Compass size={24} />
            </div>
            <h3>1. Profile Your Reality</h3>
            <p>
              Tell NEXORA your current class, trade, or stream. Whether you're in Class 10 CBSE,
              welding apprentice, or computer science fresher, the model adapts to you.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-top">
              <span>02</span>
              <Target size={24} />
            </div>
            <h3>2. ML Skill Gap Diagnosis</h3>
            <p>
              Our trained model cross-references 15,651 ESCO and O*NET skills to pinpoint
              the exact 2–3 missing skills standing between you and professional employment.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-top">
              <span>03</span>
              <Route size={24} />
            </div>
            <h3>3. In-App YouTube Lessons</h3>
            <p>
              Watch world-class, curated YouTube lectures directly inside the NEXORA app with
              timestamped pointer notes so you never get distracted by recommendations.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-top">
              <span>04</span>
              <ChartNoAxesColumnIncreasing size={24} />
            </div>
            <h3>4. Monthly Deficit Reports</h3>
            <p>
              Receive a monthly executive analytics report detailing hours logged, mastered
              competencies, readiness percentages, and next priority milestones.
            </p>
          </article>
        </div>
      </section>

      {/* 8. TESTIMONIALS (STUDENTS, CRAFTSMEN & INSTITUTIONS) */}
      <section className="nx-testimonials-section">
        <span className="section-label">04 — VOICES FROM THE WORKSPACE</span>
        <div className="section-heading">
          <h2>
            Built for Real People.
            <br />
            <em>Real experiences from learners and educators.</em>
          </h2>
          <p>
            Across classrooms, ITI workshops, and modern tech centers.
          </p>
        </div>

        <div className="nx-testimonials-grid">
          <div className="nx-testimonial-card">
            <div className="nx-testimonial-quote">
              "Finally, an application that doesn't force Python on a carpenter! NEXORA gave me practical timber framing blueprints, in-app YouTube video pointers, and a clean joinery roadmap."
            </div>
            <div className="nx-testimonial-author">
              <div className="nx-author-avatar">RS</div>
              <div>
                <strong>Ramesh Sharma</strong>
                <small>ITI Vocational Apprentice • Carpentry & Joinery</small>
              </div>
            </div>
          </div>

          <div className="nx-testimonial-card">
            <div className="nx-testimonial-quote">
              "The Class 10 CBSE Math and Science roadmaps with exact YouTube pointers saved my board preparation. I knew exactly which video chapters to watch without wasting hours browsing."
            </div>
            <div className="nx-testimonial-author">
              <div className="nx-author-avatar">SP</div>
              <div>
                <strong>Sneha Patel</strong>
                <small>Secondary School Student • Class 10 CBSE</small>
              </div>
            </div>
          </div>

          <div className="nx-testimonial-card">
            <div className="nx-testimonial-quote">
              "As an ITI director, our cohort dashboard allows us to track 300+ students across welding, electrical, and mechanical trades with collective skill deficit audits and apprenticeship quotas."
            </div>
            <div className="nx-testimonial-author">
              <div className="nx-author-avatar">AR</div>
              <div>
                <strong>Prof. Arvind Rao</strong>
                <small>Principal • Apex Vocational Training Institute</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section className="closing">
        <div className="closing-content">
          <span className="section-label">05 — READY FOR WHAT COMES NEXT</span>
          <h2>
            Your journey begins
            <em> with clarity.</em>
            <br />
            Choose your portal and start today.
          </h2>
          <p>
            Join thousands of school students, college scholars, and job-seeking freshers
            achieving precision career advancement.
          </p>

          <div className="closing-actions">
            <Link to="/register?type=student" className="light-button">
              <span>Sign Up as School Student</span>
              <ArrowRight size={17} />
            </Link>
            <Link to="/register?type=college" className="secondary-button" style={{ color: "#fff" }}>
              <span>College Portal ↗</span>
            </Link>
            <Link to="/register?type=fresher" className="secondary-button" style={{ color: "#fff" }}>
              <span>Job Fresher Portal ↗</span>
            </Link>
          </div>
        </div>

        <div className="closing-decoration">
          <Sparkles size={140} />
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <Link to="/" className="brand">
            <span className="brand-icon">
              <Sparkles size={17} />
            </span>
            NEXORA<span className="amber">.</span>
          </Link>
          <div className="footer-links">
            <Link to="/student">School Student Portal</Link>
            <Link to="/college">College Portal</Link>
            <Link to="/fresher">Fresher Job Portal</Link>
            <Link to="/roadmap">Roadmaps</Link>
            <Link to="/analytics">Analytics</Link>
            <Link to="/nexora-ai">AI Model</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>CAREER INTELLIGENCE PLATFORM • POWERED BY EUROPEAN ESCO & US O*NET TAXONOMIES</span>
          <span>© 2026 NEXORA INTELLIGENCE. ALL RIGHTS RESERVED.</span>
        </div>
      </footer>
    </main>
  );
}
