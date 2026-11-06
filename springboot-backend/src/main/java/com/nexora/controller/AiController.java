package com.nexora.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping({"/api/ai", "/ai"})
public class AiController {

    @PostMapping("/progress")
    public ResponseEntity<Map<String, Object>> saveProgress(@RequestBody Map<String, Object> body) {
        Map<String, Object> res = new HashMap<>();
        res.put("success", true);
        res.put("message", "Progress updated via Spring Boot.");
        return ResponseEntity.ok(res);
    }
}
