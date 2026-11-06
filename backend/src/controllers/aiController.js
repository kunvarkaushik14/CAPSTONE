import jwt from "jsonwebtoken";
import pool, { isPostgresConnected } from "../config/db.js";
import {
  getLocalProfile,
  getLocalProgress,
  saveLocalProgress
} from "../database/localStore.js";
import {
  runNexoraCareerIntelligence,
  generateCustomSkillRoadmap,
  runNexoraAiChat
} from "../ai/nexoraAiModel.js";
import {
  getModelMetadata,
  retrainModel,
  predictCareerAffinity,
  predictSkillGaps
} from "../ai/nexoraMLEngine.js";

function extractUserId(req) {
  try {
    const auth = req.headers.authorization || "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
    if (!token) return null;
    const secret = process.env.JWT_SECRET || "nexora-default-jwt-secret-key-2026";
    const decoded = jwt.verify(token, secret);
    return decoded.sub || null;
  } catch {
    return null;
  }
}

async function loadUserProfile(userId, bodyProfile) {
  if (bodyProfile && typeof bodyProfile === "object" && Object.keys(bodyProfile).length > 0) {
    return bodyProfile;
  }
  if (!userId) return {};

  try {
    if (isPostgresConnected) {
      const result = await pool.query(
        "SELECT * FROM nexora_profiles WHERE user_id = $1",
        [userId]
      );
      const row = result.rows[0];
      if (row) {
        return {
          currentStatus: row.current_status,
          educationLevel: row.education_level,
          degree: row.degree,
          institution: row.institution,
          location: row.location,
          interests: row.interests || [],
          skills: row.skills || [],
          careerGoals: row.career_goals || [],
          targetRole: row.target_role,
          experienceLevel: row.experience_level,
          preferredIndustries: row.preferred_industries || [],
          completed: row.completed
        };
      }
    }
    const localRow = getLocalProfile(userId);
    if (localRow) {
      return {
        currentStatus: localRow.current_status,
        educationLevel: localRow.education_level,
        degree: localRow.degree,
        institution: localRow.institution,
        location: localRow.location,
        interests: localRow.interests || [],
        skills: localRow.skills || [],
        careerGoals: localRow.career_goals || [],
        targetRole: localRow.target_role,
        experienceLevel: localRow.experience_level,
        preferredIndustries: localRow.preferred_industries || [],
        completed: localRow.completed
      };
    }
  } catch (err) {
    console.warn("Load profile fallback:", err.message);
  }
  return {};
}

export async function getCareerIntelligence(req, res) {
  try {
    const userId = extractUserId(req) || "1";
    const profile = await loadUserProfile(userId, req.body?.profile);
    const progress = getLocalProgress(userId);
    const intelligence = runNexoraCareerIntelligence(profile, progress);

    return res.json({
      success: true,
      profile,
      progress,
      intelligence
    });
  } catch (error) {
    console.error("AI Intelligence error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Unable to compute NEXORA AI Career Intelligence."
    });
  }
}

export async function generateCustomRoadmap(req, res) {
  try {
    const userId = extractUserId(req) || "1";
    const { query, profile: bodyProfile } = req.body || {};
    const profile = await loadUserProfile(userId, bodyProfile);
    const result = generateCustomSkillRoadmap(query, profile);

    return res.json({
      success: true,
      ...result
    });
  } catch (error) {
    console.error("Custom roadmap error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Unable to generate custom roadmap."
    });
  }
}

export async function chatWithAi(req, res) {
  try {
    const userId = extractUserId(req) || "1";
    const { message, profile: bodyProfile } = req.body || {};
    const profile = await loadUserProfile(userId, bodyProfile);
    const progress = getLocalProgress(userId);

    const response = runNexoraAiChat({
      message,
      profile,
      progress
    });

    return res.json({
      success: true,
      ...response
    });
  } catch (error) {
    console.error("NEXORA AI Chat error:", error.message);
    return res.status(500).json({
      success: false,
      message: "NEXORA AI is temporarily unavailable."
    });
  }
}

export async function updateUserProgress(req, res) {
  try {
    const userId = extractUserId(req) || "1";
    const updated = saveLocalProgress(userId, req.body || {});
    return res.json({
      success: true,
      progress: updated
    });
  } catch (error) {
    console.error("Update progress error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Unable to save learning progress."
    });
  }
}

export async function getAiModelInfo(req, res) {
  try {
    const meta = getModelMetadata();
    return res.json({
      success: true,
      model: meta
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to retrieve ML model metadata: " + error.message
    });
  }
}

export async function retrainAiModel(req, res) {
  try {
    const result = await retrainModel();
    return res.json({
      success: true,
      message: "Nexora AI ML Engine retrained successfully.",
      metrics: result
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Model retraining failed: " + error.message
    });
  }
}

export async function predictWithAiModel(req, res) {
  try {
    const { query, profile, topK = 6 } = req.body || {};
    const input = profile || query || "vocational apprentice student";
    const predictions = predictCareerAffinity(input, Number(topK) || 6);

    return res.json({
      success: true,
      model: getModelMetadata().modelName,
      predictions
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "ML prediction inference failed: " + error.message
    });
  }
}

