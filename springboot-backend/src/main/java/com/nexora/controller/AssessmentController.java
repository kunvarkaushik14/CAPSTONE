package com.nexora.controller;

import com.nexora.model.AssessmentQuestion;
import com.nexora.model.AssessmentSubmission;
import com.nexora.model.UserProfile;
import com.nexora.service.AssessmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping({"/api/assessment", "/assessment"})
public class AssessmentController {

    private final AssessmentService assessmentService;

    public AssessmentController(AssessmentService assessmentService) {
        this.assessmentService = assessmentService;
    }

    @GetMapping("/questions/{role}")
    public ResponseEntity<Map<String, Object>> getQuestions(@PathVariable String role) {
        List<AssessmentQuestion> questions = assessmentService.getQuestionsForRole(role);
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("role", role);
        response.put("count", questions.size());
        response.put("questions", questions);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/submit")
    public ResponseEntity<Map<String, Object>> submitAssessment(@RequestBody AssessmentSubmission submission) {
        UserProfile profile = assessmentService.evaluateAssessment(submission);
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Profile synthesized successfully via Spring Boot Assessment Engine.");
        response.put("profile", profile);
        return ResponseEntity.ok(response);
    }
}

