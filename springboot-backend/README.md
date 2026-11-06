# NEXORA 3.0 Spring Boot Backend

Enterprise RESTful API backend built with **Spring Boot 3.2.4** and **Java 17 (Eclipse Temurin)** for the NEXORA Career Intelligence Platform.

## 🚀 Key Features

1. **Three Dedicated Portals**:
   - `GET /api/portals/student`: School Student Portal curriculum, board roadmaps, and skills to learn in school.
   - `GET /api/portals/college`: College & University Portal tech tracks (Spring Boot, React, DSA, Capstone).
   - `GET /api/portals/fresher`: Fresher Job Seeker Portal with verified openings, ATS resume screening, and interview questions.

2. **6 to 8 Adaptive Questions Assessment Engine**:
   - `GET /api/assessment/questions/{role}`: Returns tailored 6-8 questions for `student`, `college`, or `fresher`.
   - `POST /api/assessment/submit`: Evaluates answers, calculates Readiness and Match Scores, and synthesizes personalized roadmap milestones with YouTube video pointers.

3. **Skills to Learn in School**:
   - `GET /api/skills/school`: Curated list of modern skills school students can learn while in school (Python, AI basics, Web development, Robotics, Graphic design, Financial literacy).
   - `POST /api/skills/school/add`: Dynamically adds any new skill a school student dreams of learning into their active profile.

4. **Multi-Role Authentication**:
   - `POST /api/auth/register`: Register user with role (`student`, `college`, `fresher`).
   - `POST /api/auth/login`: Authenticate and receive session tokens.
   - `GET /api/auth/demo-users`: Instant pre-seeded credentials for all 3 personas.

5. **Cross-Origin Resource Sharing (CORS)**:
   - Configured for Vite frontend at `http://localhost:5173` and Express backend at `http://localhost:5001`.

---

## 🛠️ How to Run

### Using Gradle (Installed on system):
```powershell
cd "d:\nexora 2.0\NEXORA3.0\springboot-backend"
gradle bootRun
```

### Using Maven:
```powershell
cd "d:\nexora 2.0\NEXORA3.0\springboot-backend"
mvn spring-boot:run
```

### Running from root `NEXORA3.0`:
```powershell
npm run dev:springboot
```

---

## 📡 API Endpoint Summary

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Health status and Spring Boot version |
| `GET` | `/api/assessment/questions/{role}` | Fetch 6-8 questions for `student`, `college`, or `fresher` |
| `POST` | `/api/assessment/submit` | Submit answers and generate AI Career Profile |
| `GET` | `/api/skills/school` | List skills to learn while in school |
| `POST` | `/api/skills/school/add` | Add a custom skill to school profile |
| `GET` | `/api/skills/fresher-jobs` | Verified entry-level job openings (₹5-12 LPA) |
| `GET` | `/api/portals/student` | School Student Portal data payload |
| `GET` | `/api/portals/college` | College Student Portal data payload |
| `GET` | `/api/portals/fresher` | Fresher Job Seeker Portal data payload |
| `POST` | `/api/auth/login` | Login user |
| `POST` | `/api/auth/register` | Register user |
| `GET` | `/api/auth/demo-users` | Demo credentials |

