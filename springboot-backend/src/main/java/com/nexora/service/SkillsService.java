package com.nexora.service;

import com.nexora.model.JobRole;
import com.nexora.model.SchoolSkill;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class SkillsService {

    private final List<SchoolSkill> schoolSkills = new CopyOnWriteArrayList<>();
    private final List<JobRole> fresherJobs = new CopyOnWriteArrayList<>();

    public SkillsService() {
        initData();
    }

    private void initData() {
        // Modern skills students can learn while in school
        schoolSkills.add(new SchoolSkill("school-python", "Python for School Students", "Coding & Logic", "Beginner", "4 Weeks", "rfscVS0vtbw", "Learn Python fundamentals, build fun text games and turtle graphics without any prior coding experience."));
        schoolSkills.add(new SchoolSkill("school-ai", "AI & Prompt Engineering Basics", "Modern Tech", "Beginner", "2 Weeks", "aircAruvnKk", "Understand how artificial intelligence and neural networks work, and learn to write effective prompts."));
        schoolSkills.add(new SchoolSkill("school-webdev", "Build Your First Website (HTML/CSS)", "Web Development", "Beginner", "3 Weeks", "mU6anWqZJcc", "Create your personal portfolio website or school club page from scratch using simple HTML and CSS."));
        schoolSkills.add(new SchoolSkill("school-robotics", "Robotics & Micro:bit / Arduino", "Hardware & STEM", "Hands-on", "4 Weeks", "3r3883aLg5w", "Learn basic circuit logic, sensors, and micro-controller programming for school science fairs."));
        schoolSkills.add(new SchoolSkill("school-design", "Graphic Design & Digital Art", "Creative Arts", "Beginner", "2 Weeks", "c9Wg6Cb_YlU", "Master Canva, Figma, and color theory to make stunning school presentations and digital posters."));
        schoolSkills.add(new SchoolSkill("school-finance", "Financial Literacy & Money Basics", "Life Skills", "Essential", "2 Weeks", "8jPQjjsBbIc", "Understand budgeting, savings, investing concepts, and compound interest early before college."));

        // Fresher job roles
        fresherJobs.add(new JobRole("job-1", "Junior Backend Engineer (Spring Boot / Java)", "NexScale Cloud Systems", "Bengaluru / Hybrid", "₹6.5 – ₹10 LPA", "Full-Time (Fresher)", 94, Arrays.asList("Java 17", "Spring Boot", "REST APIs", "SQL", "Git"), "Build scalable microservices and database queries for cloud-native enterprise products."));
        fresherJobs.add(new JobRole("job-2", "Associate Full-Stack Developer", "Veloce Technologies", "Remote / India", "₹5.0 – ₹8.5 LPA", "Full-Time (Entry Level)", 91, Arrays.asList("React 19", "Node.js", "Express", "PostgreSQL", "CSS3"), "Develop interactive web application features, responsive dashboards, and client APIs."));
        fresherJobs.add(new JobRole("job-3", "Junior AI & Data Analyst", "InsightAI Labs", "Hyderabad / Pune", "₹6.0 – ₹9.5 LPA", "Full-Time (Fresh Graduate)", 88, Arrays.asList("Python", "Pandas", "SQL", "Data Visualization", "Machine Learning"), "Analyze customer behavioral datasets, build predictive dashboards, and clean ML pipelines."));
        fresherJobs.add(new JobRole("job-4", "Cloud Support & DevOps Associate", "Apex Cloud Services", "Noida / Delhi NCR", "₹5.5 – ₹8.0 LPA", "Full-Time (Immediate Joiner)", 86, Arrays.asList("Linux", "AWS Basics", "Docker", "Bash Scripting", "CI/CD"), "Assist in cloud container deployment, infrastructure monitoring, and release pipelines."));
    }

    public List<SchoolSkill> getSchoolSkills() {
        return new ArrayList<>(schoolSkills);
    }

    public SchoolSkill addSchoolSkill(String title, String category, String description) {
        String id = "custom-" + UUID.randomUUID().toString().substring(0, 8);
        SchoolSkill newSkill = new SchoolSkill(
                id,
                title,
                category != null ? category : "Student Innovation",
                "Self-Paced",
                "3 Weeks",
                "rfscVS0vtbw",
                description != null ? description : "Modern skill to learn while in school."
        );
        schoolSkills.add(newSkill);
        return newSkill;
    }

    public List<JobRole> getFresherJobs() {
        return new ArrayList<>(fresherJobs);
    }
}

