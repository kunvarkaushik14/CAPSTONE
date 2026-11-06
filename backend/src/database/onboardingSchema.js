import pool, { isPostgresConnected } from "../config/db.js";

export async function initializeOnboardingDatabase() {
  if (!isPostgresConnected) {
    console.log("NEXORA onboarding table ready (Local Store mode).");
    return;
  }

  await pool.query(`
    CREATE TABLE IF NOT EXISTS nexora_profiles (
      id BIGSERIAL PRIMARY KEY,
      user_id BIGINT NOT NULL UNIQUE
        REFERENCES nexora_users(id) ON DELETE CASCADE,

      persona_type VARCHAR(60) DEFAULT 'student',
      class_or_grade VARCHAR(80),
      trade_or_stream VARCHAR(120),

      current_status VARCHAR(60),
      education_level VARCHAR(100),
      degree VARCHAR(150),
      institution VARCHAR(200),
      location VARCHAR(150),

      interests JSONB NOT NULL DEFAULT '[]'::jsonb,
      skills JSONB NOT NULL DEFAULT '[]'::jsonb,
      target_skills JSONB NOT NULL DEFAULT '[]'::jsonb,
      career_goals JSONB NOT NULL DEFAULT '[]'::jsonb,

      target_role VARCHAR(150),
      experience_level VARCHAR(80),
      preferred_industries JSONB NOT NULL DEFAULT '[]'::jsonb,

      monthly_analysis JSONB NOT NULL DEFAULT '{}'::jsonb,
      completed BOOLEAN NOT NULL DEFAULT FALSE,

      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  try {
    await pool.query(`
      ALTER TABLE nexora_profiles
      ADD COLUMN IF NOT EXISTS persona_type VARCHAR(60) DEFAULT 'student',
      ADD COLUMN IF NOT EXISTS class_or_grade VARCHAR(80),
      ADD COLUMN IF NOT EXISTS trade_or_stream VARCHAR(120),
      ADD COLUMN IF NOT EXISTS target_skills JSONB NOT NULL DEFAULT '[]'::jsonb,
      ADD COLUMN IF NOT EXISTS monthly_analysis JSONB NOT NULL DEFAULT '{}'::jsonb;
    `);
  } catch (err) {
    console.warn("Profile table alter column notice:", err.message);
  }

  console.log("NEXORA onboarding table is ready.");
}
