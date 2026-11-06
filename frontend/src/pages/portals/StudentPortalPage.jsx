import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Plus,
  Play,
  CheckCircle2,
  Route,
  BrainCircuit,
  Bot,
  Calendar,
  Clock,
  ArrowRight,
  TrendingUp,
  Award,
  BookmarkCheck,
  Compass,
  Code2
} from "lucide-react";
import { useNexora } from "../../context/NexoraContext.jsx";
import "./portals.css";

// Predefined modern skills students can learn while in school
const CURATED_SCHOOL_SKILLS = [
  {
    id: "school-python",
    title: "Python for School Students",
    category: "Coding & Logic",
    level: "Beginner",
    duration: "4 Weeks",
    videoId: "rfscVS0vtbw",
    description: "Learn Python fundamentals, build fun text games and turtle graphics without any prior coding experience."
  },
  {
    id: "school-ai",
    title: "AI & Prompt Engineering Basics",
    category: "Modern Tech",
    level: "Beginner",
    duration: "2 Weeks",
    videoId: "aircAruvnKk",
    description: "Understand how artificial intelligence and neural networks work, and learn to write effective prompts."
  },
  {
    id: "school-webdev",
    title: "Build Your First Website (HTML/CSS)",
    category: "Web Development",
    level: "Beginner",
    duration: "3 Weeks",
    videoId: "mU6anWqZJcc",
    description: "Create your personal portfolio website or school club page from scratch using simple HTML and CSS."
  },
  {
    id: "school-robotics",
    title: "Robotics & Micro:bit / Arduino",
    category: "Hardware & STEM",
    level: "Hands-on",
    duration: "4 Weeks",
    videoId: "3r3883aLg5w",
    description: "Learn basic circuit logic, sensors, and micro-controller programming for school science fairs."
  },
  {
    id: "school-design",
    title: "Graphic Design & Digital Art",
    category: "Creative Arts",
    level: "Beginner",
    duration: "2 Weeks",
    videoId: "c9Wg6Cb_YlU",
    description: "Master Canva, Figma, and color theory to make stunning school presentations and digital posters."
  },
  {
    id: "school-finance",
    title: "Financial Literacy & Money Basics",
    category: "Life Skills",
    level: "Essential",
    duration: "2 Weeks",
    videoId: "8jPQjjsBbIc",
    description: "Understand budgeting, savings, investing concepts, and compound interest early before college."
  }
];

export default function StudentPortalPage() {
  const navigate = useNavigate();
  const { user, profile, updateProfile, openVideoPlayer, intelligence } = useNexora();

  const [newSkillInput, setNewSkillInput] = useState("");
  const [activeTab, setActiveTab] = useState("skills"); // skills | academics | planner
  const [successMessage, setSuccessMessage] = useState("");

  const currentSchoolSkills = profile.skills || [
    "Basic Mathematics",
    "General Science",
    "Computer Literacy"
  ];

  const handleAddCustomSkill = (e) => {
    e.preventDefault();
    const trimmed = newSkillInput.trim();
    if (!trimmed) return;

    if (!currentSchoolSkills.includes(trimmed)) {
      const updated = [...currentSchoolSkills, trimmed];
      updateProfile({ skills: updated });
      setSuccessMessage(`Added "${trimmed}" to your school skills list!`);
      setTimeout(() => setSuccessMessage(""), 3500);
    }
    setNewSkillInput("");
  };

  const handleAddCuratedSkill = (skillTitle) => {
    if (!currentSchoolSkills.includes(skillTitle)) {
      const updated = [...currentSchoolSkills, skillTitle];
      updateProfile({ skills: updated });
      setSuccessMessage(`Added "${skillTitle}" to your learning track!`);
      setTimeout(() => setSuccessMessage(""), 3500);
    }
  };

  return (
    <div className="nx-portal-view student-portal">
      {/* Hero Banner */}
      <section className="nx-portal-hero">
        <div className="nx-portal-hero-content">
          <div className="nx-portal-pill-row">
            <span className="nx-portal-badge student">
              <GraduationCap size={14} /> SCHOOL STUDENT PORTAL
            </span>
            <span className="nx-portal-grade-tag">
              {profile.classOrGrade || "Class 9–12"} • CBSE / ICSE / State Board
            </span>
          </div>

          <h1>
            Empowering School Students to <em>Learn Future Skills Early.</em>
          </h1>
          <p>
            Excelling in school academics while exploring modern skills like Python, AI,
            Web Development, and Robotics right from your school years.
          </p>

          <div className="nx-portal-quick-stats">
            <div className="stat-card">
              <span className="stat-num">{currentSchoolSkills.length}</span>
              <span className="stat-label">Active Skills</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">{intelligence?.activeCareer?.matchScore || 96}%</span>
              <span className="stat-label">Academic Fit</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">{profile.targetRole || "School Scholar"}</span>
              <span className="stat-label">Target Track</span>
            </div>
          </div>
        </div>

        <div className="nx-portal-hero-action-card">
          <div className="action-card-header">
            <Sparkles size={18} className="gold-icon" />
            <div>
              <h3>School AI Mentor Ready</h3>
              <p>Ask homework questions, explain math steps, or get school project ideas.</p>
            </div>
          </div>
          <div className="action-card-buttons">
            <Link to="/nexora-ai" className="btn-portal-primary">
              <Bot size={16} /> Open NEXORA AI Tutor
            </Link>
            <Link to="/roadmap" className="btn-portal-secondary">
              <Route size={16} /> View Board Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* Portal Tabs */}
      <div className="nx-portal-tab-bar">
        <button
          className={`portal-tab ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => setActiveTab("skills")}
        >
          <Code2 size={16} /> Skills to Learn in School
        </button>
        <button
          className={`portal-tab ${activeTab === "academics" ? "active" : ""}`}
          onClick={() => setActiveTab("academics")}
        >
          <BookOpen size={16} /> Board Exam Syllabus & Roadmap
        </button>
        <button
          className={`portal-tab ${activeTab === "planner" ? "active" : ""}`}
          onClick={() => setActiveTab("planner")}
        >
          <Calendar size={16} /> Study Schedule & Weekly Goals
        </button>
      </div>

      {/* Success Notification */}
      {successMessage && (
        <div className="nx-portal-alert">
          <CheckCircle2 size={18} />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Tab 1: Skills to Learn While in School */}
      {activeTab === "skills" && (
        <div className="portal-tab-content">
          <div className="section-title-wrap">
            <div>
              <h2>Skills You Can Learn While in School</h2>
              <p>Add new tech, creative, or life skills to study alongside your school classes.</p>
            </div>

            {/* Custom Skill Addition Form */}
            <form onSubmit={handleAddCustomSkill} className="portal-add-skill-form">
              <input
                type="text"
                placeholder="E.g. App Development, Game Design, 3D Modeling..."
                value={newSkillInput}
                onChange={(e) => setNewSkillInput(e.target.value)}
              />
              <button type="submit" className="btn-add-skill">
                <Plus size={16} /> Add to My School Skills
              </button>
            </form>
          </div>

          {/* Current Skills In Student Profile */}
          <div className="current-skills-box">
            <span className="box-label">Your Active School Skills:</span>
            <div className="skills-badge-grid">
              {currentSchoolSkills.map((sk) => (
                <span key={sk} className="skill-chip active">
                  <CheckCircle2 size={13} /> {sk}
                </span>
              ))}
            </div>
          </div>

          {/* Curated School Skills Grid */}
          <div className="portal-cards-grid">
            {CURATED_SCHOOL_SKILLS.map((skill) => {
              const isAdded = currentSchoolSkills.includes(skill.title);
              return (
                <div key={skill.id} className="portal-course-card">
                  <div className="card-top-row">
                    <span className="category-pill">{skill.category}</span>
                    <span className="duration-pill"><Clock size={12} /> {skill.duration}</span>
                  </div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>

                  <div className="card-actions">
                    <button
                      type="button"
                      className="btn-watch-pointer"
                      onClick={() =>
                        openVideoPlayer({
                          videoId: skill.videoId,
                          title: skill.title,
                          channel: "NEXORA Student Academy",
                          pointerNote: "Interactive video lesson tailored for school students."
                        })
                      }
                    >
                      <Play size={14} /> Watch Lesson
                    </button>

                    <button
                      type="button"
                      disabled={isAdded}
                      className={`btn-toggle-skill ${isAdded ? "added" : ""}`}
                      onClick={() => handleAddCuratedSkill(skill.title)}
                    >
                      {isAdded ? (
                        <>
                          <CheckCircle2 size={14} /> Added
                        </>
                      ) : (
                        <>
                          <Plus size={14} /> Add Skill
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Board Exam Syllabus & Academic Roadmap */}
      {activeTab === "academics" && (
        <div className="portal-tab-content">
          <div className="section-title-wrap">
            <div>
              <h2>Board Exam & Core Academic Roadmaps</h2>
              <p>Topic-by-topic breakdowns for Class 9, 10, 11, and 12.</p>
            </div>
            <Link to="/roadmap" className="btn-portal-outline">
              <Route size={16} /> Open Full Interactive Roadmap
            </Link>
          </div>

          <div className="syllabus-grid">
            <div className="syllabus-card">
              <h3>📐 Mathematics & Algebra</h3>
              <p>Real numbers, Polynomials, Linear equations, Coordinate geometry, Trigonometry.</p>
              <ul>
                <li><CheckCircle2 size={14} className="green" /> Euclid's division & Real numbers</li>
                <li><CheckCircle2 size={14} className="green" /> Quadratic equations formula proofs</li>
                <li><Clock size={14} className="gold" /> Trigonometric ratios & heights/distances</li>
              </ul>
              <button
                className="btn-card-link"
                onClick={() =>
                  openVideoPlayer({
                    videoId: "rfscVS0vtbw",
                    title: "Class 10 CBSE Math: Complete Real Numbers",
                    channel: "Physics Wallah Foundation"
                  })
                }
              >
                <Play size={14} /> Watch Math Proofs
              </button>
            </div>

            <div className="syllabus-card">
              <h3>🔬 Science & Experiments</h3>
              <p>Light reflection & refraction, Electricity, Chemical reactions, Life processes.</p>
              <ul>
                <li><CheckCircle2 size={14} className="green" /> Ray diagrams for concave & convex mirrors</li>
                <li><Clock size={14} className="gold" /> Ohm's law & circuit series/parallel calculations</li>
                <li><Clock size={14} className="gold" /> Balancing chemical oxidation equations</li>
              </ul>
              <button
                className="btn-card-link"
                onClick={() =>
                  openVideoPlayer({
                    videoId: "aircAruvnKk",
                    title: "Science & Physics Fundamentals",
                    channel: "3Blue1Brown"
                  })
                }
              >
                <Play size={14} /> Watch Science Visuals
              </button>
            </div>

            <div className="syllabus-card">
              <h3>💻 Computer Science & Digital Literacy</h3>
              <p>Algorithms, Flowcharts, Python scripting, Internet safety & ethics.</p>
              <ul>
                <li><CheckCircle2 size={14} className="green" /> Variables, loops, and conditions in Python</li>
                <li><Clock size={14} className="gold" /> Writing clean algorithmic functions</li>
                <li><Clock size={14} className="gold" /> Cyber security & ethical web usage</li>
              </ul>
              <Link to="/skills" className="btn-card-link">
                <BrainCircuit size={14} /> Open Coding Exercises
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Study Schedule & Weekly Goals */}
      {activeTab === "planner" && (
        <div className="portal-tab-content">
          <div className="section-title-wrap">
            <div>
              <h2>School Study Schedule & Milestones</h2>
              <p>Balance school homework, board exam revision, and 4 hours/week of future tech skills.</p>
            </div>
          </div>

          <div className="planner-schedule-grid">
            <div className="planner-day-card">
              <h4>Monday – Wednesday: School Core</h4>
              <p>Math problem sets, Science revision & laboratory notes.</p>
              <div className="planner-badge">2 hrs/day</div>
            </div>
            <div className="planner-day-card">
              <h4>Thursday – Friday: Future Skill Hour</h4>
              <p>Python coding practice or AI Prompt Engineering on NEXORA.</p>
              <div className="planner-badge highlight">1 hr/day</div>
            </div>
            <div className="planner-day-card">
              <h4>Weekend: Mini-Project & Quizzes</h4>
              <p>Build your school website page or test your concepts with NEXORA AI.</p>
              <div className="planner-badge green">3 hrs total</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

