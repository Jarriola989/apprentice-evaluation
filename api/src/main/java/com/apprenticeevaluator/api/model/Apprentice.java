package com.apprenticeevaluator.api.model;

public class Apprentice {
    private Integer id;
    private String fullName;
    private String email;
    private String projectRepo;
    private String projectUrl;
    private int bestPracticeOop;
    private int modularDev;
    private int fullStack;
    private int testing;
    private int database;
    private int debugging;
    private int problemSolving;
    private int javascript;
    private int html;
    private int css;
    private int teamwork;
    private int selfMotivation;
    private int communication;
    private int energy;
    private int intelligenceAptitude;

    public Apprentice(String fullName, String email, String projectRepo, String projectUrl, int bestPracticeOop, int modularDev, int fullStack, int testing, int database, int debugging, int problemSolving, int javascript, int html, int css, int teamwork, int selfMotivation, int communication, int energy, int intelligenceAptitude) {
        this.fullName = fullName;
        this.email = email;
        this.projectRepo = projectRepo;
        this.projectUrl = projectUrl;
        this.bestPracticeOop = bestPracticeOop;
        this.modularDev = modularDev;
        this.fullStack = fullStack;
        this.testing = testing;
        this.database = database;
        this.debugging = debugging;
        this.problemSolving = problemSolving;
        this.javascript = javascript;
        this.html = html;
        this.css = css;
        this.teamwork = teamwork;
        this.selfMotivation = selfMotivation;
        this.communication = communication;
        this.energy = energy;
        this.intelligenceAptitude = intelligenceAptitude;
    }

    public Apprentice() {
        this.fullName = "";
        this.email = "";
        this.projectRepo = "";
        this.projectUrl = "";
        this.bestPracticeOop = 0;
        this.modularDev = 0;
        this.fullStack = 0;
        this.testing = 0;
        this.database = 0;
        this.debugging = 0;
        this.problemSolving = 0;
        this.javascript = 0;
        this.html = 0;
        this.css = 0;
        this.teamwork = 0;
        this.selfMotivation = 0;
        this.communication = 0;
        this.energy = 0;
        this.intelligenceAptitude = 0;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getProjectRepo() {
        return projectRepo;
    }

    public void setProjectRepo(String projectRepo) {
        this.projectRepo = projectRepo;
    }

    public String getProjectUrl() {
        return projectUrl;
    }

    public void setProjectUrl(String projectUrl) {
        this.projectUrl = projectUrl;
    }

    public int getBestPracticeOop() {
        return bestPracticeOop;
    }

    public void setBestPracticeOop(int bestPracticeOop) {
        this.bestPracticeOop = bestPracticeOop;
    }

    public int getModularDev() {
        return modularDev;
    }

    public void setModularDev(int modularDev) {
        this.modularDev = modularDev;
    }

    public int getFullStack() {
        return fullStack;
    }

    public void setFullStack(int fullStack) {
        this.fullStack = fullStack;
    }

    public int getTesting() {
        return testing;
    }

    public void setTesting(int testing) {
        this.testing = testing;
    }

    public int getDatabase() {
        return database;
    }

    public void setDatabase(int database) {
        this.database = database;
    }

    public int getDebugging() {
        return debugging;
    }

    public void setDebugging(int debugging) {
        this.debugging = debugging;
    }

    public int getProblemSolving() {
        return problemSolving;
    }

    public void setProblemSolving(int problemSolving) {
        this.problemSolving = problemSolving;
    }

    public int getJavascript() {
        return javascript;
    }

    public void setJavascript(int javascript) {
        this.javascript = javascript;
    }

    public int getHtml() {
        return html;
    }

    public void setHtml(int html) {
        this.html = html;
    }

    public int getCss() {
        return css;
    }

    public void setCss(int css) {
        this.css = css;
    }

    public int getTeamwork() {
        return teamwork;
    }

    public void setTeamwork(int teamwork) {
        this.teamwork = teamwork;
    }

    public int getSelfMotivation() {
        return selfMotivation;
    }

    public void setSelfMotivation(int selfMotivation) {
        this.selfMotivation = selfMotivation;
    }

    public int getCommunication() {
        return communication;
    }

    public void setCommunication(int communication) {
        this.communication = communication;
    }

    public int getEnergy() {
        return energy;
    }

    public void setEnergy(int energy) {
        this.energy = energy;
    }

    public int getIntelligenceAptitude() {
        return intelligenceAptitude;
    }

    public void setIntelligenceAptitude(int intelligenceAptitude) {
        this.intelligenceAptitude = intelligenceAptitude;
    }
}
