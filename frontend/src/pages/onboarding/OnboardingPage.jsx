import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
  GraduationCap,
  BriefcaseBusiness,
  Cpu,
  Target,
  Code2,
  BookOpen,
  Plus,
  X,
  CheckCircle2,
  Clock,
  Layers,
  Award,
  Zap,
  Play,
  Bot
} from "lucide-react";
import "./onboarding.css";
import { useNexora } from "../../context/NexoraContext.jsx";

const RAW_API = import.meta.env.VITE_SPRINGBOOT_API_URL || import.meta.env.VITE_API_URL || "http://localhost:8085/api";
const API = RAW_API.endsWith("/api") ? RAW_API.replace(/\/+$/, "") : `${RAW_API.replace(/\/+$/, "")}/api`;

const PERSONA_TYPES = [
  {
    id: "student",
    label: "School Student",
    sub: "Class 8, 9, 10 (Secondary) or Class 11, 12 (Science / Commerce / Arts)",
    icon: GraduationCap,
    portalPath: "/student"
  },
  {
    id: "college",
    label: "College / University Student",
    sub: "B.Tech, BCA, B.Sc, B.Com, MCA, Engineering & Degree Students",
    icon: Cpu,
    portalPath: "/college"
  },
  {
    id: "fresher",
    label: "Fresher Searching for Jobs",
    sub: "Fresh graduate, entry-level job seeker, internship hunter",
    icon: BriefcaseBusiness,
    portalPath: "/fresher"
  }
];

// Adaptive 6-8 Questions Data for each persona
const QUESTIONS_BY_PERSONA = {
  student: [
    {
      id: "q_grade",
      question: "1. Which grade or class are you currently studying in?",
      options: [
        "Class 8th / 9th Foundation",
        "Class 10th (Secondary Board Exams)",
        "Class 11th Science (Physics, Chemistry, Maths/Bio)",
        "Class 11th Commerce / Economics",
        "Class 12th Science (Board & Entrance Prep)",
        "Class 12th Commerce / Humanities"
      ]
    },
    {
      id: "q_subjects",
      question: "2. Which subjects excite you the most in school?",
      options: [
        "Mathematics & Logical Puzzles",
        "Science & Physics Experiments",
        "Computer Science & Coding",
        "Biology & Environmental Science",
        "Business Studies & Accountancy",
        "Creative Arts & Design"
      ]
    },
    {
      id: "q_focus",
      question: "3. What is your primary academic goal this year?",
      options: [
        "Score 90%+ in Board Examinations",
        "Learn future tech skills early (Coding & AI)",
        "Prepare for Science Olympiads & Quizzes",
        "Explore which career field suits me best"
      ]
    },
    {
      id: "q_school_skills",
      isMulti: true,
      question: "4. What new modern skills do you want to learn while being in school?",
      options: [
        "Python for School Students",
        "Artificial Intelligence & Prompt Basics",
        "Build My First Website (HTML/CSS)",
        "Robotics & Arduino Science Models",
        "Graphic Design & Canva/Figma",
        "Financial Literacy & Money Basics",
        "Public Speaking & Debate",
        "Mobile App Development"
      ]
    },
    {
      id: "q_time",
      question: "5. How much time per week can you dedicate to learning new skills alongside school?",
      options: [
        "1 to 2 hours on weekends",
        "3 to 5 hours spread across the week",
        "6+ hours (Passionate young creator)"
      ]
    },
    {
      id: "q_learning_style",
      question: "6. How do you prefer to learn new concepts?",
      options: [
        "Visual interactive video lessons with pointers",
        "Hands-on coding exercises & small experiments",
        "Step-by-step notes and practice problem sets",
        "Building real mini-projects & science fair models"
      ]
    },
    {
      id: "q_prior_projects",
      question: "7. Have you built any creative or science projects before?",
      options: [
        "Yes, made science working models for school",
        "Built small Scratch or Python games",
        "Created digital presentations & posters",
        "Not yet, excited to build my very first project!"
      ]
    },
    {
      id: "q_career_dream",
      question: "8. What career dream sparks your imagination?",
      options: [
        "Software Engineer / AI Scientist",
        "Doctor / Medical Healthcare Specialist",
        "Aerospace / Mechanical Engineer",
        "Entrepreneur / Startup Founder",
        "Creative Game Designer / Digital Artist"
      ]
    }
  ],
  college: [
    {
      id: "q_college_year",
      question: "1. Which degree and academic year are you currently in?",
      options: [
        "B.Tech / BE Computer Science (1st/2nd Year)",
        "B.Tech / BE Computer Science (3rd/4th Year)",
        "B.Tech Other Branches (ECE, Mech, Civil)",
        "BCA / MCA (Computer Applications)",
        "B.Sc / M.Sc Data Science or IT",
        "B.Com / BBA / Other Degree"
      ]
    },
    {
      id: "q_college_domain",
      question: "2. What is your primary technical domain focus?",
      options: [
        "Full-Stack Web Development (MERN / React)",
        "Enterprise Backend (Java 17 & Spring Boot)",
        "AI, Machine Learning & PyTorch",
        "Cloud Solutions & DevOps (AWS / Docker)",
        "Data Science & Analytics"
      ]
    },
    {
      id: "q_coding_level",
      question: "3. How would you rate your coding and project proficiency?",
      options: [
        "Beginner (Learning syntax & basic algorithms)",
        "Intermediate (Built 1-2 academic projects)",
        "Advanced (Comfortable with full-stack APIs & DSA)",
        "Placement Ready (Practicing mock interviews)"
      ]
    },
    {
      id: "q_college_milestone",
      question: "4. What is your top milestone for this academic year?",
      options: [
        "Crack on-campus placement / Tier-1 tech offer",
        "Secure a high-impact summer tech internship",
        "Win hackathons & contribute to open-source",
        "Build a production-grade capstone project"
      ]
    },
    {
      id: "q_frameworks",
      isMulti: true,
      question: "5. Which technical frameworks do you want to master?",
      options: [
        "Spring Boot 3 & Enterprise Java",
        "React 19 & Next.js",
        "Python, PyTorch & LLMs",
        "Docker, Kubernetes & AWS",
        "PostgreSQL & System Design"
      ]
    },
    {
      id: "q_dsa_comfort",
      question: "6. How comfortable are you with Data Structures & Algorithms (DSA)?",
      options: [
        "Starting with Arrays, Strings & HashMaps",
        "Practicing Trees, Recursion & Two Pointers",
        "Solving Graphs, Dynamic Programming & LeetCode",
        "Confident in solving medium/hard interview problems"
      ]
    },
    {
      id: "q_github_status",
      question: "7. Do you have a live portfolio or public GitHub profile?",
      options: [
        "Not yet, need guidance setting it up",
        "Have basic GitHub with college assignments",
        "Have 2+ deployed full-stack projects with live URLs",
        "Active open-source contributor with pinned repos"
      ]
    },
    {
      id: "q_target_companies",
      question: "8. What tier of companies are you targeting for placement?",
      options: [
        "Top Product Companies (FAANG / Tier-1: 15+ LPA)",
        "High-Growth Funded Tech Startups",
        "Leading Global IT Services & MNCs",
        "Remote International Engineering Teams"
      ]
    }
  ],
  fresher: [
    {
      id: "q_target_job_title",
      question: "1. What primary tech role are you actively targeting?",
      options: [
        "Associate Software Engineer (Full-Stack / Java / Spring Boot / React)",
        "Junior Frontend Developer (React 19 / TypeScript / Next.js)",
        "Junior Backend Engineer (Java 17 / Spring Boot / PostgreSQL)",
        "Python & AI / Junior Data Analyst Engineer",
        "Cloud & DevOps Associate (AWS / Docker / Linux)"
      ]
    },
    {
      id: "q_fresher_status",
      question: "2. What is your graduation batch and joining availability?",
      options: [
        "2025/2026 Batch Graduate — Immediate Joiner (Available in 1–7 days)",
        "Recent Graduate (Passed within last 12 months) — Actively Applying",
        "BCA / MCA / B.Sc IT Graduate seeking first tech breakthrough",
        "Non-CS Engineering Graduate transitioning into Software Development"
      ]
    },
    {
      id: "q_hiring_roadblock",
      question: "3. What is your biggest challenge in the hiring pipeline?",
      options: [
        "Passing ATS resume keyword filters & getting recruiter callbacks",
        "Clearing live coding / DSA & LeetCode online assessments",
        "Explaining backend architecture & defending personal projects",
        "HR rounds, behavioral STAR questions & salary negotiations"
      ]
    },
    {
      id: "q_resume_skills",
      isMulti: true,
      question: "4. Which high-demand tech skills do you want prioritized on your ATS profile?",
      options: [
        "Spring Boot 3, Microservices & REST APIs",
        "React 19, TypeScript & Tailwind CSS",
        "Data Structures, Algorithms & LeetCode Coding",
        "SQL, Database Indexing & PostgreSQL",
        "Docker, AWS Cloud & CI/CD Pipelines",
        "Unit Testing (JUnit / Mockito / Jest)"
      ]
    },
    {
      id: "q_deployed_projects",
      question: "5. How is your project portfolio and GitHub profile currently set up?",
      options: [
        "Have 2+ production-level projects deployed live with URLs & GitHub",
        "Have 1-2 standard academic projects (need upgrade to production-ready)",
        "Built frontend clones, need real backend API & database integration",
        "No live projects deployed yet, need hands-on project blueprints"
      ]
    },
    {
      id: "q_dsa_comfort",
      question: "6. What is your current level in Data Structures & Coding rounds?",
      options: [
        "Solved 120+ LeetCode problems (Confident in Arrays, Strings, Trees)",
        "Solved 40–80 problems (Comfortable with basic arrays, hash maps, sorting)",
        "Beginner (Know basic syntax, need placement DSA roadmap)",
        "Strong in development/projects, need top 50 interview coding patterns"
      ]
    },
    {
      id: "q_mock_interview",
      question: "7. How confident are you facing technical mock interviews?",
      options: [
        "Confident in project walkthroughs, need practice on live coding pressure",
        "Get nervous in timed rounds, need AI mock interview simulator",
        "Need guidance structuring answers with STAR method for managerial rounds",
        "Ready for interviews, actively booking daily slots"
      ]
    },
    {
      id: "q_salary_expectation",
      question: "8. What is your expected starting CTC compensation bracket?",
      options: [
        "₹5.0 – ₹8.5 LPA (Entry-Level SDE / Fast Hiring Track)",
        "₹8.5 – ₹14.0 LPA (High-Growth Funded Tech Startup Track)",
        "₹14.0+ LPA (Tier-1 Product & FinTech Engineering Track)",
        "Open to high-learning paid internship with direct PPO conversion"
      ]
    }
  ]
};

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user, profile, updateProfile, setActivePortal } = useNexora();

  // Role from query param or profile
  const roleParam = searchParams.get("role") || searchParams.get("type");
  const initialPersona =
    roleParam === "student" || roleParam === "school"
      ? "student"
      : roleParam === "college"
      ? "college"
      : roleParam === "fresher"
      ? "fresher"
      : profile.personaType === "college_student" || profile.personaType === "college"
      ? "college"
      : profile.personaType === "fresher"
      ? "fresher"
      : "student";

  const getDefaultBasicInfo = (pId) => {
    if (pId === "fresher") {
      return {
        name: user?.name && user?.name !== "Aarav Sharma" && user?.name !== "Learner" ? user.name : "Priya Nair",
        email: user?.email || "",
        currentGradeOrDegree: "B.Tech Computer Science (2025/2026 Batch)",
        institution: "State Technological University",
        targetRole: "Associate Software Engineer (React / Spring Boot)",
        city: "Bengaluru / Pune (Immediate Joiner)"
      };
    }
    if (pId === "college") {
      return {
        name: user?.name && user?.name !== "Priya Nair" && user?.name !== "Learner" ? user.name : "Rohan Verma",
        email: user?.email || "",
        currentGradeOrDegree: "B.Tech Computer Science (3rd Year / 6th Sem)",
        institution: "National Institute of Technology",
        targetRole: "Full-Stack Java & Spring Boot Developer",
        city: "Bengaluru, India"
      };
    }
    return {
      name: user?.name && user?.name !== "Priya Nair" && user?.name !== "Rohan Verma" && user?.name !== "Learner" ? user.name : "Aarav Sharma",
      email: user?.email || "",
      currentGradeOrDegree: "Class 10 (Secondary Board)",
      institution: "Delhi Public School (CBSE)",
      targetRole: "Secondary School Scholar (Class 9-10)",
      city: "New Delhi, India"
    };
  };

  const getDefaultSkills = (pId) => {
    if (pId === "fresher") {
      return [
        "Spring Boot 3 REST APIs",
        "React 19 & Next.js",
        "Data Structures & Algorithms",
        "SQL & PostgreSQL",
        "Docker & AWS Basics",
        "ATS Resume Optimization"
      ];
    }
    if (pId === "college") {
      return [
        "Java 17 & Spring Boot 3",
        "React 19 Frontend",
        "Data Structures & LeetCode",
        "PostgreSQL & System Design"
      ];
    }
    return [
      "Python for School Students",
      "Artificial Intelligence & Prompt Basics",
      "Build My First Website (HTML/CSS)"
    ];
  };

  const [currentStep, setCurrentStep] = useState(0); // 0: Basic Info, 1: 6-8 Questions, 2: School/Tech Skills, 3: Completed Profile
  const [persona, setPersona] = useState(initialPersona);

  const [basicInfo, setBasicInfo] = useState(() => getDefaultBasicInfo(initialPersona));
  const [answers, setAnswers] = useState({});
  const [customSchoolSkill, setCustomSchoolSkill] = useState("");
  const [selectedSchoolSkills, setSelectedSchoolSkills] = useState(() => getDefaultSkills(initialPersona));

  const [generating, setGenerating] = useState(false);
  const [generatedProfile, setGeneratedProfile] = useState(null);

  const handleSelectPersona = (pId) => {
    setPersona(pId);
    setBasicInfo(getDefaultBasicInfo(pId));
    setSelectedSchoolSkills(getDefaultSkills(pId));
  };

  const questions = QUESTIONS_BY_PERSONA[persona] || QUESTIONS_BY_PERSONA.student;

  const handleSelectOption = (questionId, option, isMulti = false) => {
    if (isMulti) {
      const existing = answers[questionId] || [];
      const updated = existing.includes(option)
        ? existing.filter((item) => item !== option)
        : [...existing, option];
      setAnswers((prev) => ({ ...prev, [questionId]: updated }));
    } else {
      setAnswers((prev) => ({ ...prev, [questionId]: option }));
    }
  };

  const handleAddCustomSchoolSkill = (e) => {
    e.preventDefault();
    const val = customSchoolSkill.trim();
    if (val && !selectedSchoolSkills.includes(val)) {
      setSelectedSchoolSkills([...selectedSchoolSkills, val]);
      setCustomSchoolSkill("");
    }
  };

  const handleRemoveSchoolSkill = (sk) => {
    setSelectedSchoolSkills(selectedSchoolSkills.filter((s) => s !== sk));
  };

  const handleFinishAssessment = () => {
    setGenerating(true);

    setTimeout(() => {
      // Synthesize intelligent profile
      let targetRole = "School Scholar (Class 9-12)";
      let matchedCareerId = "school-science-class9-10";
      let readiness = 82;

      if (persona === "student") {
        targetRole = basicInfo.currentGradeOrDegree.includes("11") || basicInfo.currentGradeOrDegree.includes("12")
          ? "Senior Secondary Scholar (Class 11–12)"
          : "Secondary School Scholar (Class 9–10)";
        matchedCareerId = "school-science-class9-10";
        readiness = 85;
      } else if (persona === "college") {
        targetRole = answers.q_college_domain || "Full-Stack Web Developer";
        matchedCareerId = "fullstack-developer";
        readiness = 78;
      } else if (persona === "fresher") {
        targetRole = answers.q_target_job_title || "Junior Backend Engineer (Spring Boot)";
        matchedCareerId = "ai-ml-engineer";
        readiness = 88;
      }

      const combinedSkills = [
        ...selectedSchoolSkills,
        ...(answers.q_frameworks || []),
        ...(answers.q_resume_skills || [])
      ];

      const profilePayload = {
        personaType: persona,
        classOrGrade: basicInfo.currentGradeOrDegree,
        degree: basicInfo.currentGradeOrDegree,
        institution: basicInfo.institution,
        location: basicInfo.city,
        targetRole,
        activeCareerId: matchedCareerId,
        skills: combinedSkills.length ? combinedSkills : ["Python", "General Science", "Problem Solving"],
        interests: [persona, targetRole, "Future Tech"],
        readinessScore: readiness,
        assessmentAnswers: answers,
        completed: true
      };

      updateProfile(profilePayload);
      setActivePortal(persona);
      setGeneratedProfile(profilePayload);
      setGenerating(false);
      setCurrentStep(3); // Step 3: Result
    }, 1200);
  };

  const getPortalUrl = () => {
    if (persona === "student") return "/student";
    if (persona === "college") return "/college";
    return "/fresher";
  };

  return (
    <div className="nx-onboarding-container">
      {/* Header */}
      <header className="nx-onboarding-header">
        <Link to="/" className="nx-onboarding-logo-link">
          <Sparkles size={20} className="logo-sparkle" />
          <span className="logo-text">NEXORA 3.0</span>
        </Link>
        <span className="onboarding-step-indicator">
          Step {currentStep + 1} of 4 • {currentStep === 0 ? "Account & Category" : currentStep === 1 ? "Adaptive 6-8 Questions" : currentStep === 2 ? "Skills to Learn in School" : "Your Career Profile"}
        </span>
      </header>

      {/* Progress Bar */}
      <div className="nx-onboarding-progress-bar">
        <div
          className="nx-onboarding-progress-fill"
          style={{ width: `${((currentStep + 1) / 4) * 100}%` }}
        />
      </div>

      <main className="nx-onboarding-body">
        {/* STEP 0: Category Selection & Personal Info */}
        {currentStep === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="nx-onboarding-step-card"
          >
            <div className="step-heading">
              <span className="step-eyebrow">STEP 1 • SELECT YOUR PERSONA</span>
              <h2>Welcome to NEXORA. Choose your learning path.</h2>
              <p>Tailored specifically for school students, college learners, and freshers seeking their first job.</p>
            </div>

            <div className="persona-choice-grid">
              {PERSONA_TYPES.map((p) => {
                const Icon = p.icon;
                const isSelected = persona === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    className={`persona-card-btn ${isSelected ? "selected" : ""}`}
                    onClick={() => handleSelectPersona(p.id)}
                  >
                    <div className="persona-card-icon">
                      <Icon size={24} />
                    </div>
                    <div className="persona-card-text">
                      <h3>{p.label}</h3>
                      <p>{p.sub}</p>
                    </div>
                    {isSelected && <CheckCircle2 size={20} className="check-icon" />}
                  </button>
                );
              })}
            </div>

            <div className="basic-info-fields">
              <div className="input-group">
                <label>Your Full Name</label>
                <input
                  type="text"
                  value={basicInfo.name}
                  onChange={(e) => setBasicInfo({ ...basicInfo, name: e.target.value })}
                  placeholder={
                    persona === "student"
                      ? "E.g. Aarav Sharma"
                      : persona === "college"
                      ? "E.g. Rohan Verma"
                      : "E.g. Priya Nair"
                  }
                />
              </div>

              <div className="input-group">
                <label>
                  {persona === "student"
                    ? "Current Class / Grade"
                    : persona === "college"
                    ? "Current Degree, Branch & Semester"
                    : "Graduation Degree, Stream & Batch"}
                </label>
                <input
                  type="text"
                  value={basicInfo.currentGradeOrDegree}
                  onChange={(e) => setBasicInfo({ ...basicInfo, currentGradeOrDegree: e.target.value })}
                  placeholder={
                    persona === "student"
                      ? "E.g. Class 10 (Secondary Board)"
                      : persona === "college"
                      ? "E.g. B.Tech Computer Science (3rd Year / 6th Sem)"
                      : "E.g. B.Tech Computer Science (2025/2026 Batch)"
                  }
                />
              </div>

              <div className="input-group">
                <label>
                  {persona === "student"
                    ? "School Name & Board"
                    : persona === "college"
                    ? "College / University Name"
                    : "College / University Graduated From"}
                </label>
                <input
                  type="text"
                  value={basicInfo.institution}
                  onChange={(e) => setBasicInfo({ ...basicInfo, institution: e.target.value })}
                  placeholder={
                    persona === "student"
                      ? "E.g. Delhi Public School (CBSE / ICSE)"
                      : persona === "college"
                      ? "E.g. National Institute of Technology"
                      : "E.g. State Technological University / Engineering College"
                  }
                />
              </div>

              <div className="input-group">
                <label>
                  {persona === "student"
                    ? "Academic Focus / Stream"
                    : persona === "college"
                    ? "Target Placement Domain"
                    : "Target Job Role"}
                </label>
                <input
                  type="text"
                  value={basicInfo.targetRole || ""}
                  onChange={(e) => setBasicInfo({ ...basicInfo, targetRole: e.target.value })}
                  placeholder={
                    persona === "student"
                      ? "E.g. Science & Mathematics (PCM / PCB)"
                      : persona === "college"
                      ? "E.g. Full-Stack Java & Spring Boot Developer"
                      : "E.g. Associate Software Engineer / React Developer"
                  }
                />
              </div>

              <div className="input-group">
                <label>
                  {persona === "fresher"
                    ? "Preferred Job Location & Work Mode"
                    : "City / State"}
                </label>
                <input
                  type="text"
                  value={basicInfo.city || ""}
                  onChange={(e) => setBasicInfo({ ...basicInfo, city: e.target.value })}
                  placeholder={
                    persona === "fresher"
                      ? "E.g. Bengaluru / Pune / Remote (Immediate Joiner)"
                      : persona === "college"
                      ? "E.g. Bengaluru, India"
                      : "E.g. New Delhi, India"
                  }
                />
              </div>
            </div>

            <div className="step-actions">
              <button
                type="button"
                className="btn-next-step"
                onClick={() => setCurrentStep(1)}
              >
                Continue to Questions <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 1: The 6 to 8 Adaptive Questions */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="nx-onboarding-step-card"
          >
            <div className="step-heading">
              <span className="step-eyebrow">
                STEP 2 • {questions.length} QUESTIONS ASSESSMENT FOR {persona === "student" ? "SCHOOL STUDENT" : persona === "college" ? "COLLEGE ENGINEER" : "FRESHER JOB SEEKER"}
              </span>
              <h2>Answer {questions.length} quick questions to build your profile.</h2>
              <p>We use your responses to calibrate your learning roadmap and YouTube pointers.</p>
            </div>

            <div className="questions-scroll-list">
              {questions.map((q, idx) => (
                <div key={q.id} className="question-block">
                  <h4>{q.question}</h4>
                  <div className="options-grid">
                    {q.options.map((opt) => {
                      const selected = q.isMulti
                        ? (answers[q.id] || []).includes(opt)
                        : answers[q.id] === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          className={`option-btn ${selected ? "selected" : ""}`}
                          onClick={() => handleSelectOption(q.id, opt, q.isMulti)}
                        >
                          <span className="option-radio">
                            {selected ? <Check size={12} /> : null}
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="step-actions-split">
              <button
                type="button"
                className="btn-prev-step"
                onClick={() => setCurrentStep(0)}
              >
                <ArrowLeft size={16} /> Back
              </button>
              <button
                type="button"
                className="btn-next-step"
                onClick={() => setCurrentStep(2)}
              >
                Next: {persona === "student" ? "Skills to Learn in School" : persona === "college" ? "Engineering Skills" : "ATS Target Skills"} <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 2: Skills to Learn (Persona-adapted!) */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="nx-onboarding-step-card"
          >
            <div className="step-heading">
              <span className="step-eyebrow">
                STEP 3 • {persona === "student" ? "SKILLS TO LEARN WHILE IN SCHOOL" : persona === "college" ? "CORE ENGINEERING & CAMPUS PLACEMENT STACK" : "IN-DEMAND INDUSTRY TECH SKILLS FOR FIRST JOB"}
              </span>
              <h2>
                {persona === "student"
                  ? "Select or add any new skill you want to learn while in school."
                  : persona === "college"
                  ? "Select the technical skills to build for campus placements."
                  : "Select high-demand skills to optimize your resume for recruiters."}
              </h2>
              <p>
                {persona === "student"
                  ? "You don't have to wait for college! Add Python, AI basics, web design, or robotics directly to your school profile."
                  : persona === "college"
                  ? "Master enterprise frameworks, system design, and DSA to stand out in technical placement rounds."
                  : "Target critical keywords that corporate ATS algorithms and tech hiring managers search for."}
              </p>
            </div>

            {/* Custom Skill Input Box */}
            <form onSubmit={handleAddCustomSchoolSkill} className="onboarding-skill-form">
              <input
                type="text"
                placeholder={
                  persona === "student"
                    ? "Add any new skill (E.g. App Development, Game Making, 3D Animation...)"
                    : persona === "college"
                    ? "Add engineering skill (E.g. Spring Boot 3, React 19, LeetCode DSA...)"
                    : "Add skill for resume (E.g. Microservices, Docker, Kafka, AWS...)"
                }
                value={customSchoolSkill}
                onChange={(e) => setCustomSchoolSkill(e.target.value)}
              />
              <button type="submit" className="btn-add-chip">
                <Plus size={16} /> Add Skill
              </button>
            </form>

            {/* Selected Skills Chips */}
            <div className="selected-skills-section">
              <label>Your Selected Learning Skills:</label>
              <div className="chips-wrap">
                {selectedSchoolSkills.map((sk) => (
                  <span key={sk} className="skill-chip-removable">
                    {sk}
                    <button
                      type="button"
                      onClick={() => handleRemoveSchoolSkill(sk)}
                      title="Remove"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Popular Suggested Skills */}
            <div className="suggested-skills-section">
              <label>Recommended Skills to Explore:</label>
              <div className="chips-wrap">
                {(persona === "student"
                  ? [
                      "Python for School Students",
                      "Artificial Intelligence Basics",
                      "Build My First Website (HTML/CSS)",
                      "Robotics & Arduino Science Models",
                      "Graphic Design with Figma",
                      "Financial Literacy for Teens",
                      "Science Olympiad & Math Logic",
                      "Scratch & Game Development"
                    ]
                  : persona === "college"
                  ? [
                      "Java 17 & Spring Boot 3",
                      "React 19 & Next.js",
                      "Data Structures & LeetCode DSA",
                      "PostgreSQL & Database Design",
                      "Docker & Containerization",
                      "Campus Placement Aptitude & Coding",
                      "Operating Systems & Computer Networks",
                      "Full-Stack Web Development"
                    ]
                  : [
                      "Spring Boot 3 & Microservices",
                      "React 19 & Next.js",
                      "Data Structures & LeetCode DSA",
                      "PostgreSQL & Database Optimization",
                      "Docker & AWS Cloud Basics",
                      "ATS Resume Keyword Optimization",
                      "Unit Testing (JUnit & Mockito)",
                      "Git & CI/CD Pipelines",
                      "System Design & REST APIs",
                      "Technical Mock Interview Prep"
                    ]
                )
                  .filter((s) => !selectedSchoolSkills.includes(s))
                  .map((s) => (
                    <button
                      key={s}
                      type="button"
                      className="suggested-chip"
                      onClick={() => setSelectedSchoolSkills([...selectedSchoolSkills, s])}
                    >
                      <Plus size={12} /> {s}
                    </button>
                  ))}
              </div>
            </div>

            <div className="step-actions-split">
              <button
                type="button"
                className="btn-prev-step"
                onClick={() => setCurrentStep(1)}
              >
                <ArrowLeft size={16} /> Back
              </button>
              <button
                type="button"
                className="btn-next-step primary-cta"
                onClick={handleFinishAssessment}
                disabled={generating}
              >
                {generating ? (
                  <>Building AI Career Profile...</>
                ) : (
                  <>
                    Generate My Profile <Sparkles size={16} />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: Completed Profile & Portal Launcher */}
        {currentStep === 3 && generatedProfile && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="nx-onboarding-step-card result-card"
          >
            <div className="result-badge-top">
              <CheckCircle2 size={24} className="green-icon" />
              <span>PROFILE GENERATED SUCCESSFULLY</span>
            </div>

            <h2>
              Welcome, {basicInfo.name}! Your {persona === "student" ? "School Student" : persona === "college" ? "College" : "Fresher"} Profile is Ready.
            </h2>
            <p>
              NEXORA AI has synthesized your responses, academic targets, and future skills.
            </p>

            <div className="profile-highlights-grid">
              <div className="highlight-box">
                <span className="hl-label">Target Role</span>
                <span className="hl-value">{generatedProfile.targetRole}</span>
              </div>
              <div className="highlight-box">
                <span className="hl-label">Readiness Score</span>
                <span className="hl-value green">{generatedProfile.readinessScore}%</span>
              </div>
              <div className="highlight-box">
                <span className="hl-label">Active Skills</span>
                <span className="hl-value">{generatedProfile.skills.length} Loaded</span>
              </div>
            </div>

            <div className="skills-summary-box">
              <h4>Skills You Are Learning:</h4>
              <div className="chips-wrap">
                {generatedProfile.skills.map((s) => (
                  <span key={s} className="skill-chip-confirmed">
                    <Check size={12} /> {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="result-actions">
              <button
                type="button"
                className="btn-launch-portal"
                onClick={() => {
                  setActivePortal(persona);
                  navigate(getPortalUrl());
                }}
              >
                <span>Enter {persona === "student" ? "School Student Website" : persona === "college" ? "College & Degree Website" : "Fresher Job Website"}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
