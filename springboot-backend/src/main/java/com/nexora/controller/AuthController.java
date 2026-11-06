package com.nexora.controller;

import com.nexora.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final Map<String, User> userDatabase = new ConcurrentHashMap<>();
    private final AtomicLong idGenerator = new AtomicLong(100);

    public AuthController() {
        // Seed initial demo users for the 3 categories
        seedDemoUsers();
    }

    private void seedDemoUsers() {
        User student = new User(1L, "Aarav Sharma", "student@nexora.ai", "student", "Class 10 (Secondary Board)");
        User college = new User(2L, "Priya Patel", "college@nexora.ai", "college", "B.Tech Computer Science (3rd Yr)");
        User fresher = new User(3L, "Rohan Verma", "fresher@nexora.ai", "fresher", "B.Tech Graduate 2025");

        userDatabase.put(student.getEmail().toLowerCase(), student);
        userDatabase.put(college.getEmail().toLowerCase(), college);
        userDatabase.put(fresher.getEmail().toLowerCase(), fresher);
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@RequestBody Map<String, Object> body) {
        String name = (String) body.getOrDefault("name", "Learner");
        String email = ((String) body.getOrDefault("email", "")).toLowerCase().trim();
        String userType = (String) body.getOrDefault("userType", "student");
        String gradeOrDegree = (String) body.getOrDefault("currentGradeOrDegree", "");

        if (email.isEmpty()) {
            Map<String, Object> err = new HashMap<>();
            err.put("success", false);
            err.put("message", "Email is required.");
            return ResponseEntity.badRequest().body(err);
        }

        User user = new User(idGenerator.incrementAndGet(), name, email, userType, gradeOrDegree);
        userDatabase.put(email, user);

        Map<String, Object> res = new HashMap<>();
        res.put("success", true);
        res.put("message", "Account registered successfully via Spring Boot.");
        res.put("token", "nexora-springboot-token-" + user.getId());
        res.put("user", user);
        return ResponseEntity.status(201).body(res);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, Object> body) {
        String email = ((String) body.getOrDefault("email", "")).toLowerCase().trim();
        String userType = (String) body.getOrDefault("userType", "student");

        User user = userDatabase.get(email);
        if (user == null) {
            // Auto-provision local user for smooth demo evaluation
            user = new User(idGenerator.incrementAndGet(), email.split("@")[0], email, userType, "Active Track");
            userDatabase.put(email, user);
        }

        Map<String, Object> res = new HashMap<>();
        res.put("success", true);
        res.put("message", "Login successful via Spring Boot.");
        res.put("token", "nexora-springboot-token-" + user.getId());
        res.put("user", user);
        return ResponseEntity.ok(res);
    }

    @GetMapping("/demo-users")
    public ResponseEntity<Map<String, Object>> getDemoUsers() {
        Map<String, Object> res = new HashMap<>();
        res.put("student", userDatabase.get("student@nexora.ai"));
        res.put("college", userDatabase.get("college@nexora.ai"));
        res.put("fresher", userDatabase.get("fresher@nexora.ai"));
        return ResponseEntity.ok(res);
    }
}

