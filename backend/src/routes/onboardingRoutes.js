import { Router } from "express";
import authenticateToken from "../middleware/authMiddleware.js";
import {
  getMyProfile,
  saveMyProfile
} from "../controllers/onboardingController.js";

const router = Router();

router.use(authenticateToken);

router.get("/me", getMyProfile);
router.post("/me", saveMyProfile);

export default router;
