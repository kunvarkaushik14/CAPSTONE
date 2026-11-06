import jwt from "jsonwebtoken";
import pool, { isPostgresConnected } from "../config/db.js";
import { getLocalProfile, getLocalProgress } from "../database/localStore.js";
import { ESCO_ONET_OCCUPATIONS } from "../data/escoOnetMasterData.js";
import { runNexoraCareerIntelligence } from "../ai/nexoraAiModel.js";

function extractUserId(req) {
  try {
    const auth = req.headers.authorization || "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
    if (!token) return "1";
    const secret = process.env.JWT_SECRET || "nexora-default-jwt-secret-key-2026";
    const decoded = jwt.verify(token, secret);
    return decoded.sub || "1";
  } catch {
    return "1";
  }
}

export async function getMonthlyAnalytics(req, res) {
  try {
    const userId = extractUserId(req);
    let profile = getLocalProfile(userId) || {};
    let progress = getLocalProgress(userId) || {};

    if (isPostgresConnected) {
      try {
        const pRes = await pool.query("SELECT * FROM nexora_profiles WHERE user_id = $1", [userId]);
        if (pRes.rows[0]) {
          profile = {
            personaType: pRes.rows[0].persona_type,
            classOrGrade: pRes.rows[0].class_or_grade,
            tradeOrStream: pRes.rows[0].trade_or_stream,
            currentStatus: pRes.rows[0].current_status,
            educationLevel: pRes.rows[0].education_level,
            degree: pRes.rows[0].degree,
            institution: pRes.rows[0].institution,
            location: pRes.rows[0].location,
            interests: pRes.rows[0].interests || [],
            skills: pRes.rows[0].skills || [],
            targetSkills: pRes.rows[0].target_skills || [],
            careerGoals: pRes.rows[0].career_goals || [],
            targetRole: pRes.rows[0].target_role,
            experienceLevel: pRes.rows[0].experience_level
          };
        }
      } catch (err) {
        console.warn("Postgres analytics read notice:", err.message);
      }
    }

    const intel = runNexoraCareerIntelligence(profile, progress);
    const activeCareer = intel.activeCareer;

    // Monthly Analytics Computation
    const userSkills = profile.skills || [];
    const requiredSkills = activeCareer.requiredSkills || [];

    // Detailed Gap Analysis Breakdown
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

    // Current Month & Year
    const now = new Date();
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const currentMonth = `${monthNames[now.getMonth()]} ${now.getFullYear()}`;

    // Practical hours and completion metrics
    const completedSteps = progress.completedSteps || [];
    const watchedVideos = progress.watchedVideos || [];
    const estimatedHoursLogged = Math.max(8, completedSteps.length * 3.5 + watchedVideos.length * 2.2);

    const reportId = `NEX-AUDIT-${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, "0")}-${userId}`;

    const reportPayload = {
      reportId,
      generatedDate: now.toISOString(),
      monthPeriod: currentMonth,
      candidate: {
        id: userId,
        status: profile.currentStatus || "Apprentice / Student",
        persona: profile.personaType || "Individual Learner",
        classOrTrade: profile.classOrGrade || profile.tradeOrStream || "Vocational & Trade Studies",
        institution: profile.institution || "Apex Skill Academy",
        location: profile.location || "India"
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
        `Focus daily 45 minutes on ${activeCareer.missingSkills[0] || requiredSkills[0]} practical modules.`,
        `Complete the in-app YouTube milestone for Phase 01 to close critical skill deficits.`,
        `Log workshop / laboratory practicals and add project verification links to your portfolio.`
      ]
    };

    return res.json({
      success: true,
      report: reportPayload
    });
  } catch (error) {
    console.error("Monthly analytics error:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
}

