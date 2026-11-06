package com.nexora.model;

import java.util.List;

public class JobRole {
    private String id;
    private String title;
    private String company;
    private String location;
    private String salary;
    private String type;
    private int matchScore;
    private List<String> skills;
    private String summary;

    public JobRole() {}

    public JobRole(String id, String title, String company, String location, String salary, String type, int matchScore, List<String> skills, String summary) {
        this.id = id;
        this.title = title;
        this.company = company;
        this.location = location;
        this.salary = salary;
        this.type = type;
        this.matchScore = matchScore;
        this.skills = skills;
        this.summary = summary;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getSalary() { return salary; }
    public void setSalary(String salary) { this.salary = salary; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public int getMatchScore() { return matchScore; }
    public void setMatchScore(int matchScore) { this.matchScore = matchScore; }

    public List<String> getSkills() { return skills; }
    public void setSkills(List<String> skills) { this.skills = skills; }

    public String getSummary() { return summary; }
    public void setSummary(String summary) { this.summary = summary; }
}

