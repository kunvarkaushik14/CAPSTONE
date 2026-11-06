import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  Sparkles,
  Check,
  Save,
  Route,
  GraduationCap
} from "lucide-react";
import { useNexora, FRESHER_PRESETS } from "../../context/NexoraContext.jsx";

const INTEREST_OPTIONS = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Software Development",
  "Web Development",
  "Cybersecurity",
  "Cloud Computing",
  "Business & Management",
  "UI/UX Design",
  "Research & Development",
  "Robotics",
  "Entrepreneurship"
];

const SKILL_OPTIONS = [
  "Python",
  "Java",
  "C++",
  "JavaScript",
  "React",
  "Node.js",
  "SQL",
  "Machine Learning",
  "Data Analysis",
  "Communication",
  "Problem Solving",
  "Leadership",
  "UI/UX Design",
  "Cloud Computing",
  "Git & GitHub"
];

export default function ProfilePage() {
  const navigate = useNavigate();
  const {
    user,
    profile,
    updateProfile,
    applyFresherPreset
  } = useNexora();

  const [form, setForm] = useState(profile);
  const [savedNotice, setSavedNotice] = useState(false);
  const [customSkillText, setCustomSkillText] = useState("");

  const handleAddCustomSkill = (e) => {
    e.preventDefault();
    const val = customSkillText.trim();
    if (val && !(form.skills || []).includes(val)) {
      setForm((prev) => ({
        ...prev,
        skills: [...(prev.skills || []), val]
      }));
      setCustomSkillText("");
      setSavedNotice(false);
    }
  };

  const handleField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setSavedNotice(false);
  };

  const handleToggleArray = (key, item) => {
    setForm((prev) => {
      const arr = prev[key] || [];
      return {
        ...prev,
        [key]: arr.includes(item)
          ? arr.filter((x) => x !== item)
          : [...arr, item]
      };
    });
    setSavedNotice(false);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await updateProfile(form);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <div className="nx-profile-page">
      <section className="nx-profile-header">
        <div>
          <span className="nx-section-eyebrow">
            <UserRound size={13} /> STUDENT / FRESHER CAREER PROFILE
          </span>
          <h2>
            Your background, interests & <em>skills.</em>
          </h2>
          <p>
            Every detail you enter here powers <strong>NEXORA AI (v3.0)</strong> to customize your career roadmap and YouTube learning pointers.
          </p>
        </div>

        <div className="nx-profile-top-actions">
          <Link to="/onboarding" className="nx-btn-outline-sm">
            <GraduationCap size={14} /> Launch 4-Step Onboarding Wizard
          </Link>
          <button
            type="button"
            className="nx-btn-walnut"
            onClick={handleSave}
          >
            <Save size={15} /> Save Profile & Recalculate Roadmap
          </button>
        </div>
      </section>

      {savedNotice && (
        <div className="nx-profile-saved-banner">
          <Check size={16} /> Your profile, career matches, and YouTube roadmap pointers have been updated!
          <button type="button" onClick={() => navigate("/roadmap")}>
            View Updated Roadmap →
          </button>
        </div>
      )}

      {/* Quick Presets */}
      <section className="nx-profile-presets">
        <span>QUICK FRESHER / NEW BEGINNING PROFILES:</span>
        <div className="nx-preset-chips">
          {FRESHER_PRESETS.map((preset) => (
            <button
              type="button"
              key={preset.id}
              onClick={() => {
                applyFresherPreset(preset.id);
                setForm((prev) => ({ ...prev, ...preset.profile }));
                setSavedNotice(true);
              }}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </section>

      <form onSubmit={handleSave} className="nx-profile-form-grid">
        {/* Card 1: Background & Education */}
        <div className="nx-panel">
          <h3>01. Education & Current Status</h3>
          <div className="nx-form-fields">
            <label>
              <span>Current Status</span>
              <select
                value={form.currentStatus || ""}
                onChange={(e) => handleField("currentStatus", e.target.value)}
              >
                <option value="">Select status</option>
                <option>School student</option>
                <option>College student</option>
                <option>Recent graduate</option>
                <option>Working professional</option>
                <option>Career switcher</option>
              </select>
            </label>

            <label>
              <span>Education Level</span>
              <select
                value={form.educationLevel || ""}
                onChange={(e) => handleField("educationLevel", e.target.value)}
              >
                <option value="">Select education</option>
                <option>High school</option>
                <option>Diploma</option>
                <option>Undergraduate</option>
                <option>Postgraduate</option>
                <option>Doctorate</option>
              </select>
            </label>

            <label>
              <span>Degree / Specialization</span>
              <input
                value={form.degree || ""}
                onChange={(e) => handleField("degree", e.target.value)}
                placeholder="e.g. B.Tech Computer Science"
              />
            </label>

            <label>
              <span>College / Institution</span>
              <input
                value={form.institution || ""}
                onChange={(e) => handleField("institution", e.target.value)}
                placeholder="Enter your college or school"
              />
            </label>

            <label>
              <span>Location</span>
              <input
                value={form.location || ""}
                onChange={(e) => handleField("location", e.target.value)}
                placeholder="City, Country"
              />
            </label>

            <label>
              <span>Target Career Role</span>
              <input
                value={form.targetRole || ""}
                onChange={(e) => handleField("targetRole", e.target.value)}
                placeholder="e.g. AI Engineer, Full-Stack Developer"
              />
            </label>

            <label>
              <span>Experience Level</span>
              <select
                value={form.experienceLevel || ""}
                onChange={(e) => handleField("experienceLevel", e.target.value)}
              >
                <option>Beginner</option>
                <option>Learning / Student</option>
                <option>Less than 1 year</option>
                <option>1–3 years</option>
              </select>
            </label>
          </div>
        </div>

        {/* Card 2: Interests & Skills */}
        <div className="nx-panel">
          <h3>02. Your Career Interests & Current Skills</h3>

          <div className="nx-profile-chip-group">
            <span className="nx-mini-label">
              SELECT YOUR INTERESTS ({(form.interests || []).length} SELECTED)
            </span>
            <div className="nx-chip-cloud">
              {INTEREST_OPTIONS.map((item) => {
                const active = (form.interests || []).includes(item);
                return (
                  <button
                    type="button"
                    key={item}
                    className={`nx-toggle-chip ${active ? "active" : ""}`}
                    onClick={() => handleToggleArray("interests", item)}
                  >
                    {active ? "✓ " : "+ "}
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="nx-profile-chip-group" style={{ marginTop: "24px" }}>
            <span className="nx-mini-label">
              SELECT SKILLS YOU ALREADY HAVE ({(form.skills || []).length} SELECTED)
            </span>
            <div className="nx-chip-cloud">
              {SKILL_OPTIONS.map((item) => {
                const active = (form.skills || []).includes(item);
                return (
                  <button
                    type="button"
                    key={item}
                    className={`nx-toggle-chip ${active ? "active" : ""}`}
                    onClick={() => handleToggleArray("skills", item)}
                  >
                    {active ? "✓ " : "+ "}
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Custom Skill Input (e.g. for skills to learn in school or specialized tech) */}
            <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
              <input
                type="text"
                placeholder="Add any new skill (e.g. Python for School, Spring Boot 3, Robotics)..."
                value={customSkillText}
                onChange={(e) => setCustomSkillText(e.target.value)}
                style={{
                  flex: 1,
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  fontSize: "13px"
                }}
              />
              <button
                type="button"
                onClick={handleAddCustomSkill}
                className="nx-btn-walnut"
                style={{ padding: "8px 14px", fontSize: "12px", whiteSpace: "nowrap" }}
              >
                + Add Skill
              </button>
            </div>
          </div>

          <div className="nx-profile-bottom-cta">
            <button type="submit" className="nx-btn-walnut">
              <Save size={16} /> Save & Update My NEXORA AI Roadmap
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

