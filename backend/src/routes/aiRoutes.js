import express from "express";
import {
  getCareerIntelligence,
  generateCustomRoadmap,
  chatWithAi,
  updateUserProgress,
  getAiModelInfo,
  retrainAiModel,
  predictWithAiModel
} from "../controllers/aiController.js";

const router = express.Router();

router.get("/intelligence", getCareerIntelligence);
router.post("/intelligence", getCareerIntelligence);
router.post("/roadmap", generateCustomRoadmap);
router.post("/chat", chatWithAi);
router.post("/progress", updateUserProgress);

// Dedicated Machine Learning Pipeline Endpoints
router.get("/model-info", getAiModelInfo);
router.post("/train", retrainAiModel);
router.post("/predict", predictWithAiModel);

export default router;

