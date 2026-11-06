package com.nexora.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping({"/api/onboarding", "/onboarding"})
public class OnboardingController {

    private final Map<String, Object> profileStore = new ConcurrentHashMap<>();

    @GetMapping("/me")
    public ResponseEntity<Map<String, Object>> getProfile(
            @RequestHeader(value = "Authorization", required = false) String authHeader) {
        String key = (authHeader != null && !authHeader.isEmpty()) ? authHeader : "default";
        Map<String, Object> res = new HashMap<>();
        res.put("success", true);
        res.put("profile", profileStore.getOrDefault(key, new HashMap<>()));
        return ResponseEntity.ok(res);
    }

    @PostMapping("/me")
    public ResponseEntity<Map<String, Object>> updateProfile(
            @RequestHeader(value = "Authorization", required = false) String authHeader,
            @RequestBody Map<String, Object> body) {
        String key = (authHeader != null && !authHeader.isEmpty()) ? authHeader : "default";
        profileStore.put(key, body);

        Map<String, Object> res = new HashMap<>();
        res.put("success", true);
        res.put("message", "Profile updated successfully via Spring Boot.");
        res.put("profile", body);
        return ResponseEntity.ok(res);
    }
}
