package com.nexora.service;

import com.nexora.model.AssessmentQuestion;
import com.nexora.model.AssessmentSubmission;
import com.nexora.model.UserProfile;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AssessmentService {

    private final Map<String, List<AssessmentQuestion>> questionsBank = new HashMap<>();

    public AssessmentService() {
        initQuestions();
    }

    private void initQuestions() {
        // 1. School Student Questions (6-8 Questions)
        List<AssessmentQuestion> studentQuestions = Arrays.asList(
                new AssessmentQuestion("q_grade", "1. Which grade or class are you currently studying in?",
                        Arrays.asList("Class 8th / 9th Foundation", "Class 10th (Secondary Board Exams)",
                                "Class 11th Science (PCM / PCB)", "Class 11th Commerce / Economics",
                                "Class 12th Science (Board & Entrance)", "Class 12th Commerce / Arts"), false),
                new AssessmentQuestion("q_subjects", "2. Which subjects excite you the most in school?",
                        Arrays.asList("Mathematics & Logical Puzzles", "Science & Physics Experiments",
                                "Computer Science & Coding", "Biology & Nature", "Commerce & Accountancy", "Creative Arts & Design"), false),
                new AssessmentQuestion("q_focus", "3. What is your primary academic goal this year?",
                        Arrays.asList("Score 90%+ in Board Exams", "Learn future tech skills early (Coding & AI)",
                                "Prepare for Science Olympiads & Quizzes", "Explore future career options"), false),
                new AssessmentQuestion("q_school_skills", "4. What new modern skills do you want to learn while being in school?",
                        Arrays.asList("Python for School Students", "Artificial Intelligence & Prompt Basics",
                                "Build My First Website (HTML/CSS)", "Robotics & Arduino", "Graphic Design with Figma",
                                "Financial Literacy & Money Basics", "Public Speaking & Debate"), true),
                new AssessmentQuestion("q_time", "5. How much time per week can you dedicate to learning new skills alongside school?",
                        Arrays.asList("1 to 2 hours on weekends", "3 to 5 hours spread across the week", "6+ hours (Passionate young creator)"), false),
                new AssessmentQuestion("q_learning_style", "6. How do you prefer to learn new concepts?",
                        Arrays.asList("Visual interactive video lessons with pointers", "Hands-on coding exercises & experiments",
                                "Step-by-step notes and practice problem sets", "Building real mini-projects"), false),
                new AssessmentQuestion("q_prior_projects", "7. Have you built any creative or science projects before?",
                        Arrays.asList("Yes, made science working models for school", "Built small Scratch or Python games",
                                "Created digital presentations & posters", "Not yet, excited to build my first project!"), false),
                new AssessmentQuestion("q_career_dream", "8. What career dream sparks your imagination?",
                        Arrays.asList("Software Engineer / AI Scientist", "Doctor / Medical Specialist",
                                "Aerospace / Mechanical Engineer", "Entrepreneur / Startup Founder", "Game Designer / Digital Artist"), false)
        );

        // 2. College Student Questions (6-8 Questions)
        List<AssessmentQuestion> collegeQuestions = Arrays.asList(
                new AssessmentQuestion("q_college_year", "1. Which degree and academic year are you currently in?",
                        Arrays.asList("B.Tech / BE Computer Science (1st/2nd Yr)", "B.Tech / BE Computer Science (3rd/4th Yr)",
                                "B.Tech Other Branches (ECE, Mech, Civil)", "BCA / MCA (Computer Applications)",
                                "B.Sc / M.Sc Data Science or IT", "B.Com / BBA / Other Degree"), false),
                new AssessmentQuestion("q_college_domain", "2. What is your primary technical domain focus?",
                        Arrays.asList("Full-Stack Web Development (React / Node)", "Enterprise Backend (Java 17 & Spring Boot)",
                                "AI, Machine Learning & PyTorch", "Cloud Solutions & DevOps (AWS / Docker)", "Data Science & Analytics"), false),
                new AssessmentQuestion("q_coding_level", "3. How would you rate your coding and project proficiency?",
                        Arrays.asList("Beginner (Learning syntax & basic algorithms)", "Intermediate (Built 1-2 academic projects)",
                                "Advanced (Comfortable with full-stack APIs & DSA)", "Placement Ready (Practicing mock interviews)"), false),
                new AssessmentQuestion("q_college_milestone", "4. What is your top milestone for this academic year?",
                        Arrays.asList("Crack on-campus placement / Tier-1 tech offer", "Secure a high-impact summer tech internship",
                                "Win hackathons & contribute to open-source", "Build a production-grade capstone project"), false),
                new AssessmentQuestion("q_frameworks", "5. Which technical frameworks do you want to master?",
                        Arrays.asList("Spring Boot 3 & Enterprise Java", "React 19 & Next.js", "Python, PyTorch & LLMs",
                                "Docker, Kubernetes & AWS", "PostgreSQL & System Design"), true),
                new AssessmentQuestion("q_dsa_comfort", "6. How comfortable are you with Data Structures & Algorithms (DSA)?",
                        Arrays.asList("Starting with Arrays, Strings & HashMaps", "Practicing Trees, Recursion & Two Pointers",
                                "Solving Graphs, Dynamic Programming & LeetCode", "Confident in solving medium/hard interview problems"), false),
                new AssessmentQuestion("q_github_status", "7. Do you have a live portfolio or public GitHub profile?",
                        Arrays.asList("Not yet, need guidance setting it up", "Have basic GitHub with college assignments",
                                "Have 2+ deployed full-stack projects with live URLs", "Active open-source contributor with pinned repos"), false),
                new AssessmentQuestion("q_target_companies", "8. What tier of companies are you targeting for placement?",
                        Arrays.asList("Top Product Companies (Tier-1: 15+ LPA)", "High-Growth Funded Tech Startups",
                                "Leading Global IT Services & MNCs", "Remote International Engineering Teams"), false)
        );

        // 3. Fresher Job Seeker Questions (6-8 Questions)
        List<AssessmentQuestion> fresherQuestions = Arrays.asList(
                new AssessmentQuestion("q_target_job_title", "1. What primary tech role are you actively targeting?",
                        Arrays.asList("Associate Software Engineer (Full-Stack / Java / Spring Boot / React)",
                                "Junior Frontend Developer (React 19 / TypeScript / Next.js)",
                                "Junior Backend Engineer (Java 17 / Spring Boot / PostgreSQL)",
                                "Python & AI / Junior Data Analyst Engineer",
                                "Cloud & DevOps Associate (AWS / Docker / Linux)"), false),
                new AssessmentQuestion("q_fresher_status", "2. What is your graduation batch and joining availability?",
                        Arrays.asList("2025/2026 Batch Graduate — Immediate Joiner (Available in 1–7 days)",
                                "Recent Graduate (Passed within last 12 months) — Actively Applying",
                                "BCA / MCA / B.Sc IT Graduate seeking first tech breakthrough",
                                "Non-CS Engineering Graduate transitioning into Software Development"), false),
                new AssessmentQuestion("q_hiring_roadblock", "3. What is your biggest challenge in the hiring pipeline?",
                        Arrays.asList("Passing ATS resume keyword filters & getting recruiter callbacks",
                                "Clearing live coding / DSA & LeetCode online assessments",
                                "Explaining backend architecture & defending personal projects",
                                "HR rounds, behavioral STAR questions & salary negotiations"), false),
                new AssessmentQuestion("q_resume_skills", "4. Which high-demand tech skills do you want prioritized on your ATS profile?",
                        Arrays.asList("Spring Boot 3, Microservices & REST APIs", "React 19, TypeScript & Tailwind CSS",
                                "Data Structures, Algorithms & LeetCode Coding", "SQL, Database Indexing & PostgreSQL",
                                "Docker, AWS Cloud & CI/CD Pipelines", "Unit Testing (JUnit / Mockito / Jest)"), true),
                new AssessmentQuestion("q_deployed_projects", "5. How is your project portfolio and GitHub profile currently set up?",
                        Arrays.asList("Have 2+ production-level projects deployed live with URLs & GitHub",
                                "Have 1-2 standard academic projects (need upgrade to production-ready)",
                                "Built frontend clones, need real backend API & database integration",
                                "No live projects deployed yet, need hands-on project blueprints"), false),
                new AssessmentQuestion("q_dsa_comfort", "6. What is your current level in Data Structures & Coding rounds?",
                        Arrays.asList("Solved 120+ LeetCode problems (Confident in Arrays, Strings, Trees)",
                                "Solved 40–80 problems (Comfortable with basic arrays, hash maps, sorting)",
                                "Beginner (Know basic syntax, need placement DSA roadmap)",
                                "Strong in development/projects, need top 50 interview coding patterns"), false),
                new AssessmentQuestion("q_mock_interview", "7. How confident are you facing technical mock interviews?",
                        Arrays.asList("Confident in project walkthroughs, need practice on live coding pressure",
                                "Get nervous in timed rounds, need AI mock interview simulator",
                                "Need guidance structuring answers with STAR method for managerial rounds",
                                "Ready for interviews, actively booking daily slots"), false),
                new AssessmentQuestion("q_salary_expectation", "8. What is your expected starting CTC compensation bracket?",
                        Arrays.asList("₹5.0 – ₹8.5 LPA (Entry-Level SDE / Fast Hiring Track)",
                                "₹8.5 – ₹14.0 LPA (High-Growth Funded Tech Startup Track)",
                                "₹14.0+ LPA (Tier-1 Product & FinTech Engineering Track)",
                                "Open to high-learning paid internship with direct PPO conversion"), false)
        );

        questionsBank.put("student", studentQuestions);
        questionsBank.put("college", collegeQuestions);
        questionsBank.put("fresher", fresherQuestions);
    }

    public List<AssessmentQuestion> getQuestionsForRole(String role) {
        String key = role != null ? role.toLowerCase() : "student";
        if (key.contains("school") || key.equals("student")) return questionsBank.get("student");
        if (key.contains("college")) return questionsBank.get("college");
        if (key.contains("fresher")) return questionsBank.get("fresher");
        return questionsBank.get("student");
    }

    public UserProfile evaluateAssessment(AssessmentSubmission submission) {
        UserProfile profile = new UserProfile();
        String role = submission.getRole() != null ? submission.getRole().toLowerCase() : "student";
        profile.setPersonaType(role);
        profile.setName(submission.getName() != null ? submission.getName() : "Learner");
        profile.setClassOrGrade(submission.getCurrentGradeOrDegree() != null ? submission.getCurrentGradeOrDegree() : "Class 10");
        profile.setInstitution(submission.getInstitution() != null ? submission.getInstitution() : "Educational Academy");
        profile.setCompleted(true);

        List<String> skills = new ArrayList<>();
        if (submission.getSchoolSkills() != null) {
            skills.addAll(submission.getSchoolSkills());
        }

        List<Map<String, String>> steps = new ArrayList<>();

        if (role.contains("student") || role.equals("school")) {
            profile.setTargetRole("Secondary School Scholar (Class 9-12 Track)");
            profile.setMatchScore(98);
            profile.setReadinessScore(85);
            if (skills.isEmpty()) {
                skills.addAll(Arrays.asList("Python for School Students", "Algebra & Geometry", "Science Fundamentals", "Digital Literacy"));
            }
            profile.setRecommendedNextSkills(Arrays.asList("AI & Prompt Basics", "Build My First Website", "Robotics & Micro:bit"));

            steps.add(createStep("Phase 1: School Fundamentals & Board Exam Mastery", "Master core Mathematics and Science concepts with step-by-step video proofs.", "rfscVS0vtbw"));
            steps.add(createStep("Phase 2: Learn Modern Skills While in School", "Build simple games and turtle graphics in Python alongside homework.", "3r3883aLg5w"));
            steps.add(createStep("Phase 3: Science Fair & Mini-Project Creation", "Design your personal website or science exhibition project.", "aircAruvnKk"));

        } else if (role.contains("college")) {
            profile.setTargetRole("Full-Stack & Systems Software Engineer");
            profile.setMatchScore(95);
            profile.setReadinessScore(78);
            skills.addAll(Arrays.asList("Java 17", "Spring Boot 3", "React 19", "Data Structures & Algorithms", "SQL"));
            profile.setRecommendedNextSkills(Arrays.asList("Microservices Architecture", "Docker Containers", "System Design"));

            steps.add(createStep("Phase 1: Enterprise Backend with Spring Boot 3", "Build production RESTful APIs, Spring Data JPA repositories, and JWT auth.", "mU6anWqZJcc"));
            steps.add(createStep("Phase 2: Modern Frontend with React 19", "Connect responsive React UI to Spring Boot backend services.", "nu_pCVPKzTk"));
            steps.add(createStep("Phase 3: Campus Placement DSA & Mock OAs", "Solve LeetCode two-pointer and tree patterns under interview time limits.", "8hly31xKli0"));

        } else {
            // Fresher
            profile.setTargetRole("Junior Backend Engineer (Spring Boot / Java)");
            profile.setMatchScore(94);
            profile.setReadinessScore(88);
            skills.addAll(Arrays.asList("Java 17", "Spring Boot 3", "REST APIs", "PostgreSQL", "Git & GitHub"));
            profile.setRecommendedNextSkills(Arrays.asList("Docker Deployment", "JUnit 5 Testing", "Spring Security"));

            steps.add(createStep("Phase 1: ATS Resume Keyword Calibration", "Optimize resume bullets with quantifiable production metrics.", "aircAruvnKk"));
            steps.add(createStep("Phase 2: Microservices Capstone Defense", "Deploy full-stack project live and prepare architectural walkthroughs.", "mU6anWqZJcc"));
            steps.add(createStep("Phase 3: Live Coding & Behavioral Interview Rounds", "Ace live technical screening questions and STAR framework stories.", "8hly31xKli0"));
        }

        profile.setSkills(skills);
        profile.setRoadmapSteps(steps);
        return profile;
    }

    private Map<String, String> createStep(String title, String desc, String videoId) {
        Map<String, String> map = new HashMap<>();
        map.put("title", title);
        map.put("description", desc);
        map.put("videoId", videoId);
        return map;
    }
}

