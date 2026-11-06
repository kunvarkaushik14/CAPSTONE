import pool, { isPostgresConnected } from "../config/db.js";
import { getLocalProfile, saveLocalProfile } from "../database/localStore.js";

function parseArray(value) {
  return Array.isArray(value) ? value : [];
}

function cleanString(value, maxLength = 200) {
  return String(value || "").trim().slice(0, maxLength);
}

function profileResponse(row) {
  if (!row) return null;

  return {
    personaType: row.persona_type || "student",
    classOrGrade: row.class_or_grade || "",
    tradeOrStream: row.trade_or_stream || "",
    currentStatus: row.current_status,
    educationLevel: row.education_level,
    degree: row.degree,
    institution: row.institution,
    location: row.location,
    interests: row.interests || [],
    skills: row.skills || [],
    targetSkills: row.target_skills || [],
    careerGoals: row.career_goals || [],
    targetRole: row.target_role,
    experienceLevel: row.experience_level,
    preferredIndustries: row.preferred_industries || [],
    monthlyAnalysis: row.monthly_analysis || {},
    completed: row.completed,
    updatedAt: row.updated_at
  };
}

export async function getMyProfile(req, res) {
  try {
    if (isPostgresConnected) {
      const result = await pool.query(
        `SELECT * FROM nexora_profiles WHERE user_id = $1`,
        [req.user.id]
      );

      return res.json({
        success: true,
        profile: profileResponse(result.rows[0])
      });
    } else {
      const row = getLocalProfile(req.user.id);
      return res.json({
        success: true,
        profile: profileResponse(row)
      });
    }
  } catch (error) {
    console.error("Get onboarding profile error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to load your profile."
    });
  }
}

export async function saveMyProfile(req, res) {
  try {
    const body = req.body || {};

    const personaType = cleanString(body.personaType || body.persona_type, 60) || "student";
    const classOrGrade = cleanString(body.classOrGrade || body.class_or_grade, 80);
    const tradeOrStream = cleanString(body.tradeOrStream || body.trade_or_stream, 120);

    const currentStatus = cleanString(body.currentStatus, 60);
    const educationLevel = cleanString(body.educationLevel, 100);
    const degree = cleanString(body.degree, 150);
    const institution = cleanString(body.institution, 200);
    const location = cleanString(body.location, 150);
    const targetRole = cleanString(body.targetRole, 150);
    const experienceLevel = cleanString(body.experienceLevel, 80);

    const interests = parseArray(body.interests).slice(0, 40);
    const skills = parseArray(body.skills).slice(0, 100);
    const targetSkills = parseArray(body.targetSkills || body.target_skills).slice(0, 100);
    const careerGoals = parseArray(body.careerGoals).slice(0, 40);
    const preferredIndustries = parseArray(body.preferredIndustries).slice(0, 40);
    const monthlyAnalysis = typeof body.monthlyAnalysis === "object" ? body.monthlyAnalysis : {};

    const completed = body.completed === true;

    if (isPostgresConnected) {
      const result = await pool.query(
        `INSERT INTO nexora_profiles (
          user_id,
          persona_type,
          class_or_grade,
          trade_or_stream,
          current_status,
          education_level,
          degree,
          institution,
          location,
          interests,
          skills,
          target_skills,
          career_goals,
          target_role,
          experience_level,
          preferred_industries,
          monthly_analysis,
          completed,
          updated_at
        )
        VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9,
          $10::jsonb, $11::jsonb, $12::jsonb, $13::jsonb,
          $14, $15, $16::jsonb, $17::jsonb, $18, NOW()
        )
        ON CONFLICT (user_id)
        DO UPDATE SET
          persona_type = EXCLUDED.persona_type,
          class_or_grade = EXCLUDED.class_or_grade,
          trade_or_stream = EXCLUDED.trade_or_stream,
          current_status = EXCLUDED.current_status,
          education_level = EXCLUDED.education_level,
          degree = EXCLUDED.degree,
          institution = EXCLUDED.institution,
          location = EXCLUDED.location,
          interests = EXCLUDED.interests,
          skills = EXCLUDED.skills,
          target_skills = EXCLUDED.target_skills,
          career_goals = EXCLUDED.career_goals,
          target_role = EXCLUDED.target_role,
          experience_level = EXCLUDED.experience_level,
          preferred_industries = EXCLUDED.preferred_industries,
          monthly_analysis = EXCLUDED.monthly_analysis,
          completed = EXCLUDED.completed,
          updated_at = NOW()
        RETURNING *`,
        [
          req.user.id,
          personaType,
          classOrGrade,
          tradeOrStream,
          currentStatus,
          educationLevel,
          degree,
          institution,
          location,
          JSON.stringify(interests),
          JSON.stringify(skills),
          JSON.stringify(targetSkills),
          JSON.stringify(careerGoals),
          targetRole,
          experienceLevel,
          JSON.stringify(preferredIndustries),
          JSON.stringify(monthlyAnalysis),
          completed
        ]
      );

      saveLocalProfile(req.user.id, {
        personaType,
        classOrGrade,
        tradeOrStream,
        currentStatus,
        educationLevel,
        degree,
        institution,
        location,
        interests,
        skills,
        targetSkills,
        careerGoals,
        targetRole,
        experienceLevel,
        preferredIndustries,
        monthlyAnalysis,
        completed
      });

      return res.status(200).json({
        success: true,
        message: "Your profile has been saved.",
        profile: profileResponse(result.rows[0])
      });
    } else {
      const row = saveLocalProfile(req.user.id, {
        personaType,
        classOrGrade,
        tradeOrStream,
        currentStatus,
        educationLevel,
        degree,
        institution,
        location,
        interests,
        skills,
        targetSkills,
        careerGoals,
        targetRole,
        experienceLevel,
        preferredIndustries,
        monthlyAnalysis,
        completed
      });

      return res.status(200).json({
        success: true,
        message: "Your profile has been saved.",
        profile: profileResponse(row)
      });
    }
  } catch (error) {
    console.error("Save profile error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to save your profile."
    });
  }
}
