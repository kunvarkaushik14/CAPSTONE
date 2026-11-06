package com.nexora.service;

import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PortalDataService {

    private final SkillsService skillsService;

    public PortalDataService(SkillsService skillsService) {
        this.skillsService = skillsService;
    }

    public Map<String, Object> getStudentPortalData() {
        Map<String, Object> data = new HashMap<>();
        data.put("portal", "School Student Portal");
        data.put("tagline", "Empowering School Students to Learn Future Skills Early");
        data.put("curatedSkills", skillsService.getSchoolSkills());
        data.put("academicTracks", Arrays.asList("Class 9 Foundation", "Class 10 CBSE/ICSE Board", "Class 11 Science", "Class 12 Pre-Univ"));
        data.put("features", Arrays.asList("Skills to learn in school", "Board exam roadmaps", "Interactive YouTube video pointers", "AI Tutor"));
        return data;
    }

    public Map<String, Object> getCollegePortalData() {
        Map<String, Object> data = new HashMap<>();
        data.put("portal", "College & University Portal");
        data.put("tagline", "Accelerating Campus Placement & Production Engineering Skills");
        data.put("techTracks", Arrays.asList(
                "Enterprise Java & Spring Boot 3",
                "Modern React 19 & Full-Stack MERN",
                "AI, Machine Learning & PyTorch",
                "Data Structures & Algorithms (DSA)"
        ));
        data.put("features", Arrays.asList("Industry Tech Stacks", "Placement OA Checklist", "Mock AI Technical Interviews", "Capstone Lab"));
        return data;
    }

    public Map<String, Object> getFresherPortalData() {
        Map<String, Object> data = new HashMap<>();
        data.put("portal", "Fresher Job Seeker Portal");
        data.put("tagline", "Your Launchpad to Landing Your First Full-Time Job");
        data.put("openings", skillsService.getFresherJobs());
        data.put("atsGuidelines", Arrays.asList(
                "Use active technical verbs: Built, Deployed, Optimized, Architected",
                "Quantify project achievements with latency and user metrics",
                "Match keywords: Spring Boot 3, REST APIs, React 19, Docker, SQL"
        ));
        data.put("features", Arrays.asList("Verified Fresher Openings", "ATS Resume Screening", "Skill Deficit Radar", "AI Interview Simulator"));
        return data;
    }
}

