package com.nexora.model;

import java.time.Instant;

public class User {
    private Long id;
    private String name;
    private String email;
    private String role; // "student" | "college" | "fresher"
    private String gradeOrDegree;
    private String createdAt;

    public User() {
        this.createdAt = Instant.now().toString();
    }

    public User(Long id, String name, String email, String role, String gradeOrDegree) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.gradeOrDegree = gradeOrDegree;
        this.createdAt = Instant.now().toString();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getGradeOrDegree() { return gradeOrDegree; }
    public void setGradeOrDegree(String gradeOrDegree) { this.gradeOrDegree = gradeOrDegree; }

    public String getCreatedAt() { return createdAt; }
    public void setCreatedAt(String createdAt) { this.createdAt = createdAt; }
}

