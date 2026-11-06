import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ESCO_DIR = path.join(__dirname, "esco");
const ONET_DIR = path.join(__dirname, "onet");

// In-memory cache for ultra-fast response
let cachedOccupations = null;
let cachedSkills = null;
let isIndexing = false;

/**
 * Parses simple CSV line taking basic quotes into account
 */
function parseCsvLine(line) {
  const values = [];
  let inQuotes = false;
  let current = "";

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      values.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  values.push(current.trim());
  return values;
}

/**
 * Initializes and builds fast in-memory indices from the ESCO & ONET CSV datasets
 */
export async function initializeDatasetIndex() {
  if (cachedOccupations && cachedSkills) return;
  if (isIndexing) return;
  isIndexing = true;

  try {
    const occupations = [];
    const skills = [];

    // 1. Index ESCO Occupations
    const escoOccFile = path.join(ESCO_DIR, "occupations_en.csv");
    if (fs.existsSync(escoOccFile)) {
      const fileStream = fs.createReadStream(escoOccFile);
      const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

      let isHeader = true;
      for await (const line of rl) {
        if (isHeader) {
          isHeader = false;
          continue;
        }
        if (!line.trim()) continue;
        const parts = parseCsvLine(line);
        if (parts.length >= 4 && parts[3]) {
          occupations.push({
            id: `esco-${parts[2] || parts[3].toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
            code: parts[2] ? `ESCO-${parts[2]}` : "ESCO-STD",
            title: parts[3],
            category: "Vocational & Professional Trade",
            source: "ESCO v1.1.1",
            description: parts[12] ? parts[12].slice(0, 220) : "European Skills, Competences and Occupations registry."
          });
        }
      }
    }

    // 2. Index O*NET Occupations
    const onetOccFile = path.join(ONET_DIR, "occupation_data.csv");
    if (fs.existsSync(onetOccFile)) {
      const fileStream = fs.createReadStream(onetOccFile);
      const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

      let isHeader = true;
      for await (const line of rl) {
        if (isHeader) {
          isHeader = false;
          continue;
        }
        if (!line.trim()) continue;
        const parts = parseCsvLine(line);
        if (parts.length >= 2 && parts[1]) {
          occupations.push({
            id: `onet-${parts[0].replace(/[^a-z0-9]+/g, "-")}`,
            code: `O*NET-${parts[0]}`,
            title: parts[1],
            category: "Industrial & Occupational Standard",
            source: "O*NET 28.0",
            description: parts[2] ? parts[2].slice(0, 220) : "Occupational Information Network Standard."
          });
        }
      }
    }

    // 3. Index ESCO Skills
    const escoSkillsFile = path.join(ESCO_DIR, "skills_en.csv");
    if (fs.existsSync(escoSkillsFile)) {
      const fileStream = fs.createReadStream(escoSkillsFile);
      const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

      let isHeader = true;
      let count = 0;
      for await (const line of rl) {
        if (isHeader) {
          isHeader = false;
          continue;
        }
        if (!line.trim()) continue;
        const parts = parseCsvLine(line);
        if (parts.length >= 5 && parts[4]) {
          skills.push({
            id: `esco-sk-${count++}`,
            name: parts[4],
            type: parts[2] || "skill/competence",
            category: parts[3] || "cross-sector",
            source: "ESCO v1.1.1"
          });
        }
      }
    }

    cachedOccupations = occupations;
    cachedSkills = skills;
    console.log(`[ESCO/ONET Engine] Successfully loaded & indexed ${occupations.length} occupations and ${skills.length} skills from CSV datasets.`);
  } catch (error) {
    console.warn("[ESCO/ONET Engine] Notice loading CSV datasets:", error.message);
  } finally {
    isIndexing = false;
  }
}

/**
 * Searches occupations from the indexed datasets
 */
export function searchDatasetOccupations(query = "", limit = 25) {
  if (!cachedOccupations) return [];
  const q = query.toLowerCase().trim();
  if (!q) return cachedOccupations.slice(0, limit);

  return cachedOccupations
    .filter((o) => o.title.toLowerCase().includes(q) || o.code.toLowerCase().includes(q))
    .slice(0, limit);
}

/**
 * Searches skills from the indexed datasets
 */
export function searchDatasetSkills(query = "", limit = 30) {
  if (!cachedSkills) return [];
  const q = query.toLowerCase().trim();
  if (!q) return cachedSkills.slice(0, limit);

  return cachedSkills
    .filter((s) => s.name.toLowerCase().includes(q))
    .slice(0, limit);
}

