package com.nexora.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HealthController {

    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> healthCheck() {
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("status", "UP");
        response.put("engine", "NEXORA Spring Boot 3.2.4 Backend");
        response.put("version", "3.0.0");
        response.put("timestamp", Instant.now().toString());
        response.put("portals", new String[]{"School Student", "College Student", "Fresher Job Seeker"});
        return ResponseEntity.ok(response);
    }
}

