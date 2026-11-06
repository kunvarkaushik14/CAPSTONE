import express from "express";
import { getMonthlyAnalytics } from "../controllers/analyticsController.js";

const router = express.Router();

router.get("/monthly-report", getMonthlyAnalytics);
router.post("/monthly-report", getMonthlyAnalytics);

export default router;

