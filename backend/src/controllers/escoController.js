import {
  ESCO_ONET_OCCUPATIONS,
  ESCO_SKILL_TAXONOMY,
  searchEscoOccupations,
  searchEscoSkills
} from "../data/escoOnetMasterData.js";
import {
  searchDatasetOccupations,
  searchDatasetSkills
} from "../data/datasetLoader.js";

export function getOccupations(req, res) {
  try {
    const { q, category, persona, limit } = req.query;
    const query = q || "";

    // 1. First get curated trade/student occupational roadmaps
    let results = searchEscoOccupations(query);

    if (category && category !== "All") {
      results = results.filter((o) => o.category.toLowerCase().includes(category.toLowerCase()));
    }

    if (persona && persona !== "all") {
      results = results.filter((o) => o.personaGroup === persona);
    }

    // 2. If user is searching and results are fewer than 10, complement with real ESCO/ONET dataset entries
    if (query.trim().length >= 2) {
      const datasetResults = searchDatasetOccupations(query, parseInt(limit || "30", 10));
      // Deduplicate by title
      const existingTitles = new Set(results.map((r) => r.title.toLowerCase().trim()));
      for (const d of datasetResults) {
        if (!existingTitles.has(d.title.toLowerCase().trim())) {
          results.push(d);
          existingTitles.add(d.title.toLowerCase().trim());
        }
      }
    }

    return res.json({
      success: true,
      totalCount: results.length,
      occupations: results.slice(0, parseInt(limit || "50", 10))
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export function getOccupationById(req, res) {
  try {
    const { id } = req.params;
    let found = ESCO_ONET_OCCUPATIONS.find(
      (o) => o.id === id || o.code.toLowerCase().includes(id.toLowerCase())
    );

    if (!found) {
      const datasetResults = searchDatasetOccupations(id, 1);
      if (datasetResults.length > 0) {
        found = datasetResults[0];
      }
    }

    if (!found) {
      return res.status(404).json({ success: false, message: "Occupation not found in ESCO / O*NET catalog." });
    }

    return res.json({ success: true, occupation: found });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export function getSkills(req, res) {
  try {
    const { q, category, limit } = req.query;
    const query = q || "";

    // 1. Search curated skills first
    let results = searchEscoSkills(query);

    if (category && category !== "All") {
      results = results.filter((s) => s.category.toLowerCase().includes(category.toLowerCase()));
    }

    // 2. Query full ESCO & O*NET skills database (100k skills)
    if (query.trim().length >= 2) {
      const datasetSkills = searchDatasetSkills(query, parseInt(limit || "40", 10));
      const existingSkillNames = new Set(results.map((s) => s.name.toLowerCase().trim()));
      for (const sk of datasetSkills) {
        if (!existingSkillNames.has(sk.name.toLowerCase().trim())) {
          results.push(sk);
          existingSkillNames.add(sk.name.toLowerCase().trim());
        }
      }
    }

    return res.json({
      success: true,
      totalCount: results.length,
      skills: results.slice(0, parseInt(limit || "50", 10))
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export function getCategories(req, res) {
  try {
    const occCategories = Array.from(new Set(ESCO_ONET_OCCUPATIONS.map((o) => o.category)));
    const skillCategories = Array.from(new Set(ESCO_SKILL_TAXONOMY.map((s) => s.category)));

    return res.json({
      success: true,
      occupationCategories: ["All", ...occCategories],
      skillCategories: ["All", ...skillCategories]
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
