import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 5432),
  database: process.env.DB_NAME || "nexora",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2500
});

export let isPostgresConnected = false;

pool.on("error", (error) => {
  console.warn("PostgreSQL pool warning:", error.message);
});

export async function testDatabaseConnection() {
  try {
    const result = await pool.query(
      "SELECT current_database() AS database, NOW() AS server_time"
    );
    isPostgresConnected = true;
    console.log("PostgreSQL connected successfully!");
    console.log("Database:", result.rows[0].database);
    console.log("Server time:", result.rows[0].server_time);
    return true;
  } catch (error) {
    isPostgresConnected = false;
    console.log(
      "PostgreSQL not reachable — activating NEXORA Local Persistence Store (JSON DB)."
    );
    return false;
  }
}

export default pool;
