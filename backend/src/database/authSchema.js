import pool, { isPostgresConnected } from "../config/db.js";
import { readStore } from "./localStore.js";

export async function initializeAuthDatabase() {
  readStore(); // Ensure local store is initialized
  if (!isPostgresConnected) {
    console.log("NEXORA authentication table ready (Local Store mode).");
    return;
  }

  await pool.query(`
    CREATE TABLE IF NOT EXISTS nexora_users (
      id BIGSERIAL PRIMARY KEY,
      name VARCHAR(120) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      user_type VARCHAR(40) NOT NULL DEFAULT 'individual',
      org_name VARCHAR(200),
      org_type VARCHAR(100),
      industry VARCHAR(120),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
  `);

  // Ensure columns exist if table was previously created without them
  try {
    await pool.query(`
      ALTER TABLE nexora_users 
      ADD COLUMN IF NOT EXISTS user_type VARCHAR(40) NOT NULL DEFAULT 'individual',
      ADD COLUMN IF NOT EXISTS org_name VARCHAR(200),
      ADD COLUMN IF NOT EXISTS org_type VARCHAR(100),
      ADD COLUMN IF NOT EXISTS industry VARCHAR(120);
    `);
  } catch (err) {
    console.warn("User table alter column notice:", err.message);
  }

  console.log("NEXORA authentication table is ready.");
}
