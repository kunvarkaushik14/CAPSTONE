package com.nexora.model;

import java.util.List;

public class AssessmentQuestion {
    private String id;
    private String question;
    private List<String> options;
    private boolean isMulti;

    public AssessmentQuestion() {}

    public AssessmentQuestion(String id, String question, List<String> options, boolean isMulti) {
        this.id = id;
        this.question = question;
        this.options = options;
        this.isMulti = isMulti;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getQuestion() { return question; }
    public void setQuestion(String question) { this.question = question; }

    public List<String> getOptions() { return options; }
    public void setOptions(List<String> options) { this.options = options; }

    public boolean isMulti() { return isMulti; }
    public void setMulti(boolean multi) { isMulti = multi; }
}

