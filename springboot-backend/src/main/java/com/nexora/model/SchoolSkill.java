package com.nexora.model;

public class SchoolSkill {
    private String id;
    private String title;
    private String category;
    private String level;
    private String duration;
    private String videoId;
    private String description;

    public SchoolSkill() {}

    public SchoolSkill(String id, String title, String category, String level, String duration, String videoId, String description) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.level = level;
        this.duration = duration;
        this.videoId = videoId;
        this.description = description;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }

    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }

    public String getVideoId() { return videoId; }
    public void setVideoId(String videoId) { this.videoId = videoId; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}

