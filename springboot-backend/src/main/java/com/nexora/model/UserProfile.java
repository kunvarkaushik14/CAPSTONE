package com.nexora.model;

import java.util.List;
import java.util.Map;

public class UserProfile {
    private String personaType;
    private String name;
    private String targetRole;
    private int matchScore;
    private int readinessScore;
    private String classOrGrade;
    private String institution;
    private List<String> skills;
    private List<String> recommendedNextSkills;
    private List<Map<String, String>> roadmapSteps;
    private boolean completed;

    public UserProfile() {}

    public String getPersonaType() { return personaType; }
    public void setPersonaType(String personaType) { this.personaType = personaType; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getTargetRole() { return targetRole; }
    public void setTargetRole(String targetRole) { this.targetRole = targetRole; }

    public int getMatchScore() { return matchScore; }
    public void setMatchScore(int matchScore) { this.matchScore = matchScore; }

    public int getReadinessScore() { return readinessScore; }
    public void setReadinessScore(int readinessScore) { this.readinessScore = readinessScore; }

    public String getClassOrGrade() { return classOrGrade; }
    public void setClassOrGrade(String classOrGrade) { this.classOrGrade = classOrGrade; }

    public String getInstitution() { return institution; }
    public void setInstitution(String institution) { this.institution = institution; }

    public List<String> getSkills() { return skills; }
    public void setSkills(List<String> skills) { this.skills = skills; }

    public List<String> getRecommendedNextSkills() { return recommendedNextSkills; }
    public void setRecommendedNextSkills(List<String> recommendedNextSkills) { this.recommendedNextSkills = recommendedNextSkills; }

    public List<Map<String, String>> getRoadmapSteps() { return roadmapSteps; }
    public void setRoadmapSteps(List<Map<String, String>> roadmapSteps) { this.roadmapSteps = roadmapSteps; }

    public boolean isCompleted() { return completed; }
    public void setCompleted(boolean completed) { this.completed = completed; }
}

