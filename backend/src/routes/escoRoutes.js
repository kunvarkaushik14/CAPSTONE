import express from "express";
import {
  getOccupations,
  getOccupationById,
  getSkills,
  getCategories
} from "../controllers/escoController.js";

const router = express.Router();

router.get("/occupations", getOccupations);
router.get("/occupations/:id", getOccupationById);
router.get("/skills", getSkills);
router.get("/categories", getCategories);

export default router;

