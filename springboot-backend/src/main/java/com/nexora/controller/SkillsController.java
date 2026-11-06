package com.nexora.controller;

import com.nexora.model.JobRole;
import com.nexora.model.SchoolSkill;
import com.nexora.service.SkillsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/skills")
public class SkillsController {

    private final SkillsService skillsService;

    public SkillsController(SkillsService skillsService) {
        this.skillsService = skillsService;
    }

    @GetMapping("/school")
    public ResponseEntity<Map<String, Object>> getSchoolSkills() {
        List<SchoolSkill> list = skillsService.getSchoolSkills();
        Map<String, Object> res = new HashMap<>();
        res.put("success", true);
        res.put("count", list.size());
        res.put("skills", list);
        return ResponseEntity.ok(res);
    }

    @PostMapping("/school/add")
    public ResponseEntity<Map<String, Object>> addSchoolSkill(@RequestBody Map<String, String> body) {
        String title = body.get("title");
        String category = body.getOrDefault("category", "Student Innovation");
        String description = body.getOrDefault("description", "Skill learned while in school.");

        if (title == null || title.trim().isEmpty()) {
            Map<String, Object> err = new HashMap<>();
            err.put("success", false);
            err.put("message", "Skill title is required.");
            return ResponseEntity.badRequest().body(err);
        }

        SchoolSkill created = skillsService.addSchoolSkill(title.trim(), category, description);
        Map<String, Object> res = new HashMap<>();
        res.put("success", true);
        res.put("message", "Skill successfully added to school profile.");
        res.put("skill", created);
        return ResponseEntity.status(201).body(res);
    }

    @GetMapping("/fresher-jobs")
    public ResponseEntity<Map<String, Object>> getFresherJobs() {
        List<JobRole> list = skillsService.getFresherJobs();
        Map<String, Object> res = new HashMap<>();
        res.put("success", true);
        res.put("count", list.size());
        res.put("jobs", list);
        return ResponseEntity.ok(res);
    }
}

