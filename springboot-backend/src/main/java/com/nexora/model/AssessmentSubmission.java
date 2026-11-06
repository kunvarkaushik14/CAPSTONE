package com.nexora.model;

import java.util.List;
import java.util.Map;

public class AssessmentSubmission {
    private String role; // "student" | "college" | "fresher"
    private String name;
    private String email;
    private String currentGradeOrDegree;
    private String institution;
    private String city;
    private Map<String, Object> answers;
    private List<String> schoolSkills;

    public AssessmentSubmission() {}

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getCurrentGradeOrDegree() { return currentGradeOrDegree; }
    public void setCurrentGradeOrDegree(String currentGradeOrDegree) { this.currentGradeOrDegree = currentGradeOrDegree; }

    public String getInstitution() { return institution; }
    public void setInstitution(String institution) { this.institution = institution; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public Map<String, Object> getAnswers() { return answers; }
    public void setAnswers(Map<String, Object> answers) { this.answers = answers; }

    public List<String> getSchoolSkills() { return schoolSkills; }
    public void setSchoolSkills(List<String> schoolSkills) { this.schoolSkills = schoolSkills; }
}

