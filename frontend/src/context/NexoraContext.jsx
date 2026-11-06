import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import {
  runNexoraCareerIntelligence,
  generateCustomSkillRoadmap,
  runNexoraAiChat,
  CAREER_TRACKS,
  SKILL_VIDEO_CATALOG
} from "../data/nexoraIntelligence.js";

const RAW_API = import.meta.env.VITE_SPRINGBOOT_API_URL || import.meta.env.VITE_API_URL || "http://localhost:8085/api";
const API = RAW_API.endsWith("/api") ? RAW_API.replace(/\/+$/, "") : `${RAW_API.replace(/\/+$/, "")}/api`;

const DEFAULT_PROFILE = {
  personaType: "student",
  currentStatus: "School student",
  classOrGrade: "Class 10 (Secondary Board)",
  educationLevel: "Secondary School",
  degree: "Secondary School Scholar",
  institution: "Secondary High School",
  location: "India",
  interests: [
    "Mathematics & Logic",
    "Science & Experiments",
    "Python Coding",
    "Artificial Intelligence"
  ],
  skills: [
    "Python for School Students",
    "Basic Mathematics & Algebra",
    "General Science Fundamentals",
    "Digital Computer Literacy"
  ],
  careerGoals: ["Score 90%+ in Board Exams", "Learn modern coding while in school"],
  targetRole: "Secondary School Scholar (Class 9–10)",
  experienceLevel: "Learning / Student",
  preferredIndustries: ["Technology", "Academics", "Science"],
  completed: true
};

const DEFAULT_PROGRESS = {
  activeCareerId: "ai-ml-engineer",
  completedSteps: ["ai-p1-m1"],
  watchedVideos: ["aircAruvnKk"],
  savedCareers: ["ai-ml-engineer", "fullstack-developer"],
  savedVideos: ["aircAruvnKk", "rfscVS0vtbw", "bMknfKXIFA8"],
  videoNotes: {
    aircAruvnKk: "Key insight: Neural network layers learn hierarchical features through weights and biases."
  },
  customRoadmaps: []
};

export const FRESHER_PRESETS = [
  {
    id: "school-preset",
    label: "🎓 School Student (Class 9-10 & Skills)",
    description: "K-12 Scholar: Board prep + Python & AI skills to learn in school",
    profile: {
      personaType: "student",
      classOrGrade: "Class 10 (Secondary Board)",
      tradeOrStream: "Secondary Academics",
      currentStatus: "School student",
      educationLevel: "Secondary School",
      degree: "Secondary School Scholar",
      institution: "Delhi Public School",
      location: "India",
      interests: ["Mathematics & Logic", "Science Experiments", "Python Programming", "Robotics"],
      skills: ["Python for School Students", "Basic Mathematics & Algebra", "General Science Fundamentals", "Digital Computer Literacy"],
      targetSkills: ["AI & Prompt Basics", "Build My First Website", "Robotics & Micro:bit"],
      careerGoals: ["Top marks in CBSE/ICSE board exams", "Learn coding while in school"],
      targetRole: "Secondary School Scholar (Class 9–10)",
      experienceLevel: "School Student",
      preferredIndustries: ["Academics", "Technology", "Science"]
    },
    activeCareerId: "school-science-class9-10"
  },
  {
    id: "college-preset",
    label: "🏛️ College Engineer (Java, Spring Boot & React)",
    description: "Degree track: Full-stack architecture, DSA, campus placements",
    profile: {
      personaType: "college",
      classOrGrade: "B.Tech 3rd Year",
      tradeOrStream: "Computer Science & Engineering",
      currentStatus: "College student",
      educationLevel: "Undergraduate",
      degree: "B.Tech Computer Science",
      institution: "National Institute of Technology",
      location: "Bengaluru, India",
      interests: ["Full-Stack Development", "Enterprise Java", "Spring Boot", "Data Structures"],
      skills: ["Java 17", "Spring Boot", "React 19", "SQL", "Git & GitHub"],
      targetSkills: ["Microservices", "Docker", "System Design", "AWS Deployment"],
      careerGoals: ["Tier-1 Product Placement", "Crack Technical Coding Rounds"],
      targetRole: "Full-Stack Web Developer",
      experienceLevel: "College Student",
      preferredIndustries: ["Technology", "Software Engineering", "Fintech"]
    },
    activeCareerId: "fullstack-developer"
  },
  {
    id: "fresher-preset",
    label: "💼 Fresher Job Seeker (Spring Boot / Junior SDE)",
    description: "Job hunt: Resume ATS optimization, Spring Boot APIs, interview prep",
    profile: {
      personaType: "fresher",
      classOrGrade: "Recent Graduate",
      tradeOrStream: "Software Engineering",
      currentStatus: "Recent graduate actively job hunting",
      educationLevel: "Undergraduate",
      degree: "B.Tech / BCA Graduate",
      institution: "Engineering College",
      location: "Pune, India",
      interests: ["Backend Development", "Spring Boot", "Microservices", "Interview Prep"],
      skills: ["Java 17", "Spring Boot 3", "RESTful APIs", "PostgreSQL", "Git"],
      targetSkills: ["Docker & Containers", "Unit Testing (JUnit)", "Spring Security JWT"],
      careerGoals: ["Land First Full-Time Software Job", "Sub-15 days joining"],
      targetRole: "AI & Full-Stack Engineer",
      experienceLevel: "Fresh Graduate (0-1 yr)",
      preferredIndustries: ["Technology", "Cloud Services", "Startups"]
    },
    activeCareerId: "ai-ml-engineer"
  }
];

const NexoraContext = createContext(null);

export function NexoraProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("nexora-user");
      return saved
        ? JSON.parse(saved)
        : { id: 1, name: "Aarav Sharma", email: "student@nexora.ai", userType: "student" };
    } catch {
      return { id: 1, name: "Aarav Sharma", email: "student@nexora.ai", userType: "student" };
    }
  });

  const [profile, setProfile] = useState(() => {
    try {
      const saved = localStorage.getItem("nexora-profile");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.personaType && ["student", "college", "fresher"].includes(parsed.personaType)) {
          return { ...DEFAULT_PROFILE, ...parsed };
        }
      }
      return DEFAULT_PROFILE;
    } catch {
      return DEFAULT_PROFILE;
    }
  });

  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem("nexora-progress");
      if (saved) {
        const parsed = JSON.parse(saved);
        // Cleanse old trade IDs if present
        if (["carpenter-joiner", "welder-fabricator", "electrician-wireman"].includes(parsed.activeCareerId)) {
          parsed.activeCareerId = "fullstack-developer";
        }
        return { ...DEFAULT_PROGRESS, ...parsed };
      }
      return DEFAULT_PROGRESS;
    } catch {
      return DEFAULT_PROGRESS;
    }
  });

  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [aiDrawerOpen, setAiDrawerOpen] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [monthlyReport, setMonthlyReport] = useState(null);
  const [loadingAnalytics, setLoadingAnalytics] = useState(false);

  // Active portal: 'student' (School), 'college' (College & University), 'fresher' (Job Seeker)
  const [activePortal, setActivePortalState] = useState(() => {
    const saved = localStorage.getItem("nexora-active-portal");
    if (saved && ["student", "college", "fresher"].includes(saved)) return saved;
    try {
      const savedUser = localStorage.getItem("nexora-user");
      if (savedUser) {
        const parsed = JSON.parse(savedUser);
        if (parsed?.userType && ["student", "college", "fresher"].includes(parsed.userType)) {
          return parsed.userType;
        }
      }
    } catch {}
    return "student";
  });

  const setActivePortal = (portalType) => {
    const safeType =
      portalType === "college"
        ? "college"
        : portalType === "fresher"
        ? "fresher"
        : "student";
    setActivePortalState(safeType);
    localStorage.setItem("nexora-active-portal", safeType);
  };

  const addSchoolSkill = async (skillName) => {
    const current = profile.skills || [];
    if (!current.includes(skillName)) {
      const updated = [...current, skillName];
      return await updateProfile({ skills: updated });
    }
    return profile;
  };

  // Sync with backend when token exists
  useEffect(() => {
    const token = localStorage.getItem("nexora-token");
    if (!token) return;

    let active = true;
    setLoadingProfile(true);

    fetch(`${API}/onboarding/me`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (active && data?.profile) {
          const merged = { ...DEFAULT_PROFILE, ...data.profile };
          setProfile(merged);
          localStorage.setItem("nexora-profile", JSON.stringify(merged));
        }
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoadingProfile(false);
      });

    return () => {
      active = false;
    };
  }, []);

  // Persist profile locally and to backend
  const updateProfile = async (updates) => {
    const nextProfile = { ...profile, ...updates, completed: true };
    setProfile(nextProfile);
    localStorage.setItem("nexora-profile", JSON.stringify(nextProfile));

    const token = localStorage.getItem("nexora-token");
    if (token) {
      try {
        await fetch(`${API}/onboarding/me`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(nextProfile)
        });
      } catch {
        // Local persistence already updated
      }
    }
    return nextProfile;
  };

  // Persist progress locally and to backend
  const updateProgress = async (updates) => {
    const nextProgress = { ...progress, ...updates };
    setProgress(nextProgress);
    localStorage.setItem("nexora-progress", JSON.stringify(nextProgress));

    const token = localStorage.getItem("nexora-token");
    try {
      await fetch(`${API}/ai/progress`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify(nextProgress)
      });
    } catch {
      // Local persistence already updated
    }
    return nextProgress;
  };

  const applyFresherPreset = (presetId) => {
    const preset = FRESHER_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;
    updateProfile(preset.profile);
    updateProgress({ activeCareerId: preset.activeCareerId });
  };

  const toggleSkill = (skillName) => {
    const current = profile.skills || [];
    const exists = current.includes(skillName);
    const nextSkills = exists
      ? current.filter((s) => s !== skillName)
      : [...current, skillName];
    updateProfile({ skills: nextSkills });
  };

  const toggleInterest = (interestName) => {
    const current = profile.interests || [];
    const exists = current.includes(interestName);
    const nextInterests = exists
      ? current.filter((i) => i !== interestName)
      : [...current, interestName];
    updateProfile({ interests: nextInterests });
  };

  const setActiveCareer = (careerId) => {
    updateProgress({ activeCareerId: careerId });
  };

  const toggleStepCompleted = (stepId, videoId) => {
    const currentSteps = progress.completedSteps || [];
    const exists = currentSteps.includes(stepId);
    const nextSteps = exists
      ? currentSteps.filter((id) => id !== stepId)
      : [...currentSteps, stepId];

    const currentVideos = progress.watchedVideos || [];
    const nextVideos =
      !exists && videoId && !currentVideos.includes(videoId)
        ? [...currentVideos, videoId]
        : currentVideos;

    updateProgress({
      completedSteps: nextSteps,
      watchedVideos: nextVideos
    });
  };

  const markVideoWatched = (videoId) => {
    if (!videoId) return;
    const current = progress.watchedVideos || [];
    if (!current.includes(videoId)) {
      updateProgress({ watchedVideos: [...current, videoId] });
    }
  };

  const toggleSavedCareer = (careerId) => {
    const current = progress.savedCareers || [];
    const exists = current.includes(careerId);
    const next = exists
      ? current.filter((id) => id !== careerId)
      : [...current, careerId];
    updateProgress({ savedCareers: next });
  };

  const toggleSavedVideo = (videoId) => {
    const current = progress.savedVideos || [];
    const exists = current.includes(videoId);
    const next = exists
      ? current.filter((id) => id !== videoId)
      : [...current, videoId];
    updateProgress({ savedVideos: next });
  };

  const saveVideoNote = (videoId, noteText) => {
    const nextNotes = {
      ...(progress.videoNotes || {}),
      [videoId]: noteText
    };
    updateProgress({ videoNotes: nextNotes });
  };

  const saveCustomRoadmap = (roadmapObj) => {
    const existing = progress.customRoadmaps || [];
    const filtered = existing.filter((r) => r.id !== roadmapObj.id);
    const nextCustom = [roadmapObj, ...filtered];
    updateProgress({
      customRoadmaps: nextCustom,
      activeCareerId: roadmapObj.id
    });
  };

  const openVideoPlayer = (videoPayload) => {
    if (!videoPayload) return;
    setActiveVideoModal(videoPayload);
  };

  const closeVideoPlayer = () => {
    setActiveVideoModal(null);
  };

  // Compute live NEXORA AI Career Intelligence
  const intelligence = useMemo(() => {
    const baseIntel = runNexoraCareerIntelligence(profile, progress);
    // Merge any custom generated roadmaps into careers list
    const customList = progress.customRoadmaps || [];
    if (customList.length > 0) {
      const enrichedCustom = customList.map((cr) => ({
        ...cr,
        matchScore: 96,
        readinessScore: 45,
        matchedInterests: profile.interests?.slice(0, 2) || [cr.category],
        matchedSkills: profile.skills?.slice(0, 2) || [],
        missingSkills: cr.requiredSkills || [],
        aiInsight: `Custom NEXORA AI Roadmap synthesized specifically for your "${cr.category}" learning goal.`
      }));
      const allCareers = [...enrichedCustom, ...baseIntel.careers];
      const active =
        allCareers.find((c) => c.id === progress.activeCareerId) || baseIntel.activeCareer;
      return {
        ...baseIntel,
        activeCareer: active,
        careers: allCareers
      };
    }
    return baseIntel;
  }, [profile, progress]);

  const askNexoraAi = async (message) => {
    const token = localStorage.getItem("nexora-token");
    try {
      const response = await fetch(`${API}/ai/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify({ message, profile })
      });
      if (response.ok) {
        return await response.json();
      }
    } catch {
      // Fallback to local NexoraAI-v3.0 engine if backend is unreachable
    }
    return runNexoraAiChat({ message, profile, progress });
  };

  const createCustomAiRoadmap = async (query) => {
    const token = localStorage.getItem("nexora-token");
    try {
      const response = await fetch(`${API}/ai/roadmap`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
        body: JSON.stringify({ query, profile })
      });
      if (response.ok) {
        const data = await response.json();
        if (data.roadmap) {
          if (data.isCustom) {
            saveCustomRoadmap(data.roadmap);
          } else {
            setActiveCareer(data.roadmap.id);
          }
          return data.roadmap;
        }
      }
    } catch {
      // Fallback to local engine
    }
    const localRes = generateCustomSkillRoadmap(query, profile);
    if (localRes.isCustom) {
      saveCustomRoadmap(localRes.roadmap);
    } else {
      setActiveCareer(localRes.roadmap.id);
    }
    return localRes.roadmap;
  };

  const generateLocalMonthlyReport = (prof, prog, intel) => {
    const activeCareer = intel?.activeCareer || CAREER_TRACKS[0];
    const userSkills = prof?.skills || [];
    const requiredSkills = activeCareer.requiredSkills || [];

    const skillBreakdown = requiredSkills.map((reqSkill) => {
      const isMastered = userSkills.some(
        (us) => us.toLowerCase().trim() === reqSkill.toLowerCase().trim()
      );
      return {
        skillName: reqSkill,
        status: isMastered ? "Mastered" : "Needs Improvement",
        proficiencyScore: isMastered ? 92 : 28,
        priority: isMastered ? "Low" : "High",
        recommendedAction: isMastered
          ? "Proficiency verified. Maintain hands-on practice."
          : `Priority Gap for ${activeCareer.title}. Complete guided video modules.`
      };
    });

    const masteredCount = skillBreakdown.filter((s) => s.status === "Mastered").length;
    const gapCount = skillBreakdown.filter((s) => s.status === "Needs Improvement").length;

    const now = new Date();
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const currentMonth = `${monthNames[now.getMonth()]} ${now.getFullYear()}`;
    const completedSteps = prog?.completedSteps || [];
    const watchedVideos = prog?.watchedVideos || [];
    const estimatedHoursLogged = Math.max(8, completedSteps.length * 3.5 + watchedVideos.length * 2.2);

    return {
      reportId: `NEX-AUDIT-${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, "0")}-${user?.id || "USR"}`,
      generatedDate: now.toISOString(),
      monthPeriod: currentMonth,
      candidate: {
        id: user?.id || "1",
        status: prof?.currentStatus || "Apprentice / Student",
        persona: prof?.personaType || "Individual Learner",
        classOrTrade: prof?.classOrGrade || prof?.tradeOrStream || "Vocational & Trade Studies",
        institution: prof?.institution || "Apex Skill Academy",
        location: prof?.location || "India"
      },
      targetOccupation: {
        id: activeCareer.id,
        code: activeCareer.code || "ESCO-STD",
        title: activeCareer.title,
        category: activeCareer.category,
        overallReadiness: activeCareer.readinessScore || 65,
        matchAffinity: activeCareer.matchScore || 85
      },
      monthlyMetrics: {
        learningHoursLogged: Math.round(estimatedHoursLogged),
        milestonesAchieved: completedSteps.length,
        videoLecturesWatched: watchedVideos.length,
        masteredSkillsCount: masteredCount,
        criticalSkillGapsCount: gapCount,
        growthTrajectoryPercent: "+14.8% vs Previous Month"
      },
      skillBreakdown,
      actionPlanForNextMonth: [
        `Focus daily 45 minutes on ${(activeCareer.missingSkills && activeCareer.missingSkills[0]) || requiredSkills[0] || "core trade"} practical modules.`,
        `Complete the in-app YouTube milestone for Phase 01 to close critical skill deficits.`,
        `Log workshop / laboratory practicals and add project verification links to your portfolio.`
      ]
    };
  };

  const fetchMonthlyReport = async () => {
    setLoadingAnalytics(true);
    const token = localStorage.getItem("nexora-token");
    try {
      const res = await fetch(`${API}/analytics/monthly-report`, {
        headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}) }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.report) {
          setMonthlyReport(data.report);
          return data.report;
        }
      }
    } catch {
      // Local fallback computation
    } finally {
      // If server didn't provide a report, generate local audit
      setMonthlyReport((prev) => {
        if (!prev) {
          return generateLocalMonthlyReport(profile, progress, intelligence);
        }
        return prev;
      });
      setLoadingAnalytics(false);
    }
  };

  return (
    <NexoraContext.Provider
      value={{
        user,
        setUser,
        profile,
        updateProfile,
        progress,
        updateProgress,
        intelligence,
        loadingProfile,
        applyFresherPreset,
        toggleSkill,
        toggleInterest,
        setActiveCareer,
        toggleStepCompleted,
        markVideoWatched,
        toggleSavedCareer,
        toggleSavedVideo,
        saveVideoNote,
        saveCustomRoadmap,
        activeVideoModal,
        openVideoPlayer,
        closeVideoPlayer,
        aiDrawerOpen,
        setAiDrawerOpen,
        askNexoraAi,
        createCustomAiRoadmap,
        monthlyReport,
        loadingAnalytics,
        fetchMonthlyReport,
        activePortal,
        setActivePortal,
        addSchoolSkill,
        CAREER_TRACKS,
        SKILL_VIDEO_CATALOG
      }}
    >
      {children}
    </NexoraContext.Provider>
  );
}

export function useNexora() {
  const ctx = useContext(NexoraContext);
  if (!ctx) {
    throw new Error("useNexora must be used inside a NexoraProvider");
  }
  return ctx;
}

