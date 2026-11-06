import http from "http";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

import pool, { testDatabaseConnection, isPostgresConnected } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import onboardingRoutes from "./routes/onboardingRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import escoRoutes from "./routes/escoRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";

import { initializeAuthDatabase } from "./database/authSchema.js";
import { initializeOnboardingDatabase } from "./database/onboardingSchema.js";
import { initializeDatasetIndex } from "./data/datasetLoader.js";
import { initializeMLEngine } from "./ai/nexoraMLEngine.js";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 5000);

app.use(helmet());

app.use(
  cors({
    origin: true,
    credentials: true
  })
);

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    name: "NEXORA 3.0 & NEXORA AI API",
    version: "3.0.0",
    aiModel: "NexoraAI-v3.0-NeuralCareerEngine",
    status: "running"
  });
});

app.get("/api/health", async (req, res) => {
  try {
    if (isPostgresConnected) {
      const result = await pool.query("SELECT NOW() AS time");
      return res.json({
        success: true,
        message: "NEXORA API is running",
        database: "postgresql",
        aiModel: "NexoraAI-v3.0",
        time: result.rows[0].time
      });
    }
    return res.json({
      success: true,
      message: "NEXORA API is running",
      database: "local-persistent-store",
      aiModel: "NexoraAI-v3.0",
      time: new Date().toISOString()
    });
  } catch (error) {
    res.json({
      success: true,
      message: "NEXORA API is running (fallback store)",
      database: "local-persistent-store",
      aiModel: "NexoraAI-v3.0",
      time: new Date().toISOString()
    });
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/onboarding", onboardingRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/esco", escoRoutes);
app.use("/api/analytics", analyticsRoutes);

app.use("/api", (req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found"
  });
});

app.use((error, req, res, next) => {
  console.error("Server error:", error.message);

  res.status(500).json({
    success: false,
    message: "Internal server error"
  });
});

async function startServer() {
  try {
    await testDatabaseConnection();
    await initializeAuthDatabase();
    await initializeOnboardingDatabase();
    initializeDatasetIndex().catch((err) => console.warn("Dataset indexer notice:", err.message));
    initializeMLEngine().catch((err) => console.warn("ML Engine notice:", err.message));

    const server = http.createServer(app);
    let currentPort = PORT;

    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        console.log(`Port ${currentPort} is already in use — switching to port ${currentPort + 1}...`);
        currentPort += 1;
        server.listen(currentPort);
      } else {
        console.error("HTTP server error:", err.code, err.message);
      }
    });

    server.on("listening", () => {
      console.log("================================");
      console.log("NEXORA 3.0 + NEXORA AI BACKEND RUNNING");
      console.log(`Server: http://localhost:${currentPort}`);
      console.log(`Health: http://localhost:${currentPort}/api/health`);
      console.log("Auth: POST /api/auth/register | /api/auth/login");
      console.log("Profile: GET/POST /api/onboarding/me");
      console.log("NEXORA AI: GET/POST /api/ai/intelligence | POST /api/ai/chat | POST /api/ai/roadmap");
      console.log("================================");
    });

    server.listen(currentPort);

    // Keep event loop active
    setInterval(() => {}, 60000);
  } catch (error) {
    console.error("Backend startup failed:", error.message);
    process.exit(1);
  }
}

process.on("unhandledRejection", (reason) => {
  console.warn("Unhandled rejection:", reason);
});

process.on("uncaughtException", (err) => {
  console.warn("Uncaught exception:", err.message);
});

startServer();
