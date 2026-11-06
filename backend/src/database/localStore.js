import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, "../../data");
const STORE_PATH = path.join(DATA_DIR, "nexora_store.json");

const defaultStore = {
  users: [],
  profiles: {},
  progress: {},
  chatHistory: {},
  orgCohorts: {}
};

function ensureStore() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(STORE_PATH)) {
    const demoPasswordHash = bcrypt.hashSync("Nexora123", 10);
    const initialData = {
      ...defaultStore,
      users: [
        {
          id: 1,
          name: "Aarav Sharma",
          email: "student@nexora.ai",
          password_hash: demoPasswordHash,
          user_type: "individual",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: 2,
          name: "Rohan Verma",
          email: "college@nexora.ai",
          password_hash: demoPasswordHash,
          user_type: "individual",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: 3,
          name: "Priya Nair",
          email: "fresher@nexora.ai",
          password_hash: demoPasswordHash,
          user_type: "individual",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ],
      profiles: {
        "1": {
          user_id: 1,
          persona_type: "student",
          class_or_grade: "Class 10 (Secondary Board)",
          trade_or_stream: "Science & Mathematics (CBSE/ICSE)",
          current_status: "School student",
          education_level: "Secondary School (Class 9-10)",
          degree: "Class 10 CBSE Board Preparation",
          institution: "Delhi Public School",
          location: "New Delhi, India",
          interests: [
            "Python Programming",
            "Artificial Intelligence Basics",
            "Science & Robotics"
          ],
          skills: [
            "Python for School Students",
            "Artificial Intelligence & Prompt Basics",
            "Build My First Website (HTML/CSS)"
          ],
          target_skills: [
            "CBSE Class 10 Mathematics",
            "Physics & Chemistry",
            "Python Game Development"
          ],
          career_goals: ["Excel in Board Exams", "Learn to Code Early in School"],
          target_role: "Secondary School Scholar (Class 9-10)",
          experience_level: "Beginner / School Student",
          preferred_industries: ["School Academics", "Computer Science", "STEM"],
          completed: true,
          updated_at: new Date().toISOString()
        },
        "2": {
          user_id: 2,
          persona_type: "college",
          class_or_grade: "B.Tech 3rd Year (CSE)",
          trade_or_stream: "Computer Science & Engineering",
          current_status: "College student",
          education_level: "Undergraduate (B.Tech / B.E.)",
          degree: "B.Tech in Computer Science",
          institution: "National Institute of Technology",
          location: "Bengaluru, India",
          interests: [
            "Spring Boot & Java Backend",
            "React 19 & Next.js",
            "System Design & DSA"
          ],
          skills: [
            "Java & Spring Boot",
            "React 19",
            "Data Structures & Algorithms",
            "REST APIs & PostgreSQL"
          ],
          target_skills: [
            "Microservices & Docker",
            "Spring Security 6",
            "Campus Placement Aptitude"
          ],
          career_goals: ["Crack Product Company Placements", "Master Full-Stack Spring Boot & React"],
          target_role: "Full-Stack Java & Spring Boot Developer",
          experience_level: "Undergraduate Student",
          preferred_industries: ["Software Engineering", "FinTech", "Cloud Platforms"],
          completed: true,
          updated_at: new Date().toISOString()
        },
        "3": {
          user_id: 3,
          persona_type: "fresher",
          class_or_grade: "Recent Graduate (2025/2026 Batch)",
          trade_or_stream: "Computer Science / Information Technology",
          current_status: "Fresher job seeker",
          education_level: "Graduate / Entry Level",
          degree: "Bachelor of Engineering (CSE)",
          institution: "State Technological University",
          location: "Pune, India",
          interests: [
            "Entry Level Software Engineer Roles",
            "ATS Resume Optimization",
            "Technical Mock Interviews"
          ],
          skills: [
            "Python & FastAPIs",
            "React & TypeScript",
            "Git & CI/CD Basics",
            "SQL & Database Queries"
          ],
          target_skills: [
            "Full-Stack System Architecture",
            "DSA Problem Solving",
            "Behavioral Interview Prep"
          ],
          career_goals: ["Land First High-Paying Tech Job", "Build Production Portfolio Projects"],
          target_role: "Associate Software Engineer (React / AI)",
          experience_level: "Fresher / 0–1 Years",
          preferred_industries: ["IT Services", "Tech Startups", "Product SaaS"],
          completed: true,
          updated_at: new Date().toISOString()
        }
      },
      progress: {
        "1": {
          activeCareerId: "school-scholar-secondary",
          completedSteps: ["sch-m1", "sch-m2"],
          watchedVideos: ["kqtD5dpn9C8"],
          savedCareers: ["school-scholar-secondary", "junior-coder"],
          savedVideos: ["kqtD5dpn9C8", "rfscVS0vtbw"],
          videoNotes: {
            kqtD5dpn9C8: "Python indentation and basic loops guide for school students."
          },
          updatedAt: new Date().toISOString()
        },
        "2": {
          activeCareerId: "fullstack-springboot-react",
          completedSteps: ["fs-sp-m1"],
          watchedVideos: ["vtPkZShrvXQ"],
          savedCareers: ["fullstack-springboot-react", "java-backend-dev"],
          savedVideos: ["vtPkZShrvXQ", "bMknfKXIFA8"],
          videoNotes: {
            vtPkZShrvXQ: "Spring Boot 3 starter project structure and dependency injection."
          },
          updatedAt: new Date().toISOString()
        },
        "3": {
          activeCareerId: "fresher-associate-sde",
          completedSteps: ["fr-sde-m1"],
          watchedVideos: ["aircAruvnKk"],
          savedCareers: ["fresher-associate-sde", "ai-ml-engineer"],
          savedVideos: ["aircAruvnKk", "rfscVS0vtbw"],
          videoNotes: {
            aircAruvnKk: "Essential Data Structures & Problem Solving for technical interviews."
          },
          updatedAt: new Date().toISOString()
        }
      }
    };
    fs.writeFileSync(STORE_PATH, JSON.stringify(initialData, null, 2), "utf-8");
  }
}

export function readStore() {
  ensureStore();
  try {
    const raw = fs.readFileSync(STORE_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { ...defaultStore };
  }
}

export function writeStore(data) {
  ensureStore();
  fs.writeFileSync(STORE_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export function getLocalUserByEmail(email) {
  const store = readStore();
  return store.users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
}

export function getLocalUserById(id) {
  const store = readStore();
  return store.users.find((u) => String(u.id) === String(id)) || null;
}

export function createLocalUser({ name, email, passwordHash, userType = "individual", orgName = "", orgType = "", industry = "" }) {
  const store = readStore();
  const nextId = store.users.length > 0 ? Math.max(...store.users.map((u) => Number(u.id))) + 1 : 1;
  const newUser = {
    id: nextId,
    name,
    email: email.toLowerCase(),
    password_hash: passwordHash,
    user_type: userType,
    org_name: orgName,
    org_type: orgType,
    industry: industry,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  store.users.push(newUser);
  writeStore(store);
  return newUser;
}

export function getLocalProfile(userId) {
  const store = readStore();
  return store.profiles[String(userId)] || null;
}

export function saveLocalProfile(userId, profileData) {
  const store = readStore();
  const record = {
    user_id: Number(userId),
    persona_type: profileData.personaType || profileData.persona_type || "student",
    class_or_grade: profileData.classOrGrade || profileData.class_or_grade || "",
    trade_or_stream: profileData.tradeOrStream || profileData.trade_or_stream || "",
    current_status: profileData.currentStatus || "",
    education_level: profileData.educationLevel || "",
    degree: profileData.degree || "",
    institution: profileData.institution || "",
    location: profileData.location || "",
    interests: profileData.interests || [],
    skills: profileData.skills || [],
    target_skills: profileData.targetSkills || profileData.target_skills || [],
    career_goals: profileData.careerGoals || [],
    target_role: profileData.targetRole || "",
    experience_level: profileData.experienceLevel || "",
    preferred_industries: profileData.preferredIndustries || [],
    monthly_analysis: profileData.monthlyAnalysis || profileData.monthly_analysis || {},
    completed: Boolean(profileData.completed),
    updated_at: new Date().toISOString()
  };
  store.profiles[String(userId)] = record;
  writeStore(store);
  return record;
}

export function getLocalProgress(userId) {
  const store = readStore();
  return (
    store.progress[String(userId)] || {
      activeCareerId: "fullstack-developer",
      completedSteps: [],
      watchedVideos: [],
      savedCareers: [],
      savedVideos: [],
      videoNotes: {},
      customRoadmaps: [],
      monthlyLogs: [],
      updatedAt: new Date().toISOString()
    }
  );
}

export function saveLocalProgress(userId, progressUpdate) {
  const store = readStore();
  const current = getLocalProgress(userId);
  const updated = {
    ...current,
    ...progressUpdate,
    updatedAt: new Date().toISOString()
  };
  store.progress[String(userId)] = updated;
  writeStore(store);
  return updated;
}
