import React, { useState } from "react";
import {
  BrainCircuit,
  Play,
  ExternalLink,
  CheckCircle2,
  Plus,
  Search,
  Sparkles,
  Bookmark,
  Target,
  Flame
} from "lucide-react";
import { useNexora } from "../../context/NexoraContext.jsx";

export default function SkillsPage() {
  const {
    profile,
    progress,
    intelligence,
    toggleSkill,
    openVideoPlayer,
    toggleSavedVideo,
    createCustomAiRoadmap
  } = useNexora();

  const [filter, setFilter] = useState("all"); // "all" | "gaps" | "known"
  const [search, setSearch] = useState("");
  const [newSkillText, setNewSkillText] = useState("");

  const activeCareer = intelligence.activeCareer;
  const userSkills = profile.skills || [];

  const handleAddCustomSkill = (e) => {
    e.preventDefault();
    const cleaned = newSkillText.trim();
    if (!cleaned) return;
    if (!userSkills.includes(cleaned)) {
      toggleSkill(cleaned);
    }
    setNewSkillText("");
  };

  const filteredSkillVideos = intelligence.skillVideoLibrary.filter((item) => {
    if (filter === "gaps" && !item.isPriorityGap && item.alreadyKnown) return false;
    if (filter === "known" && !item.alreadyKnown) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        item.skill.toLowerCase().includes(q) ||
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="nx-skills-page">
      {/* Header & Skill Gap Summary */}
      <section className="nx-skills-hero">
        <div className="nx-skills-hero-left">
          <span className="nx-section-eyebrow">
            <BrainCircuit size={13} /> SKILL INTELLIGENCE & YOUTUBE LEARNING HUB
          </span>
          <h2>
            Understand your strengths. <em>Bridge your skill gaps.</em>
          </h2>
          <p>
            Manage the skills you already have and learn new skills for{" "}
            <strong>{activeCareer.title}</strong> with direct YouTube video tutorials playable right inside NEXORA.
          </p>

          {/* Add Custom Skill Input */}
          <form onSubmit={handleAddCustomSkill} className="nx-add-skill-form">
            <input
              value={newSkillText}
              onChange={(e) => setNewSkillText(e.target.value)}
              placeholder="Add a skill you know (e.g. TypeScript, Docker, Figma, Excel)..."
            />
            <button type="submit">
              <Plus size={15} /> Add to My Skills
            </button>
          </form>
        </div>

        {/* Skill Gap Matrix Box */}
        <div className="nx-skill-gap-box">
          <div className="nx-gap-header">
            <span>TARGET ROLE READINESS</span>
            <strong>{activeCareer.readinessScore}% Ready</strong>
          </div>
          <div className="nx-gap-bar">
            <div style={{ width: `${activeCareer.readinessScore}%` }} />
          </div>

          <div className="nx-gap-columns">
            <div>
              <small className="nx-gap-col-title">
                ✅ MATCHED STRENGTHS ({activeCareer.matchedSkills.length})
              </small>
              <div className="nx-gap-pills">
                {activeCareer.matchedSkills.length > 0 ? (
                  activeCareer.matchedSkills.map((s) => (
                    <span key={s} className="nx-pill-matched">
                      {s}
                    </span>
                  ))
                ) : (
                  <span className="nx-pill-empty">Select skills below to start!</span>
                )}
              </div>
            </div>

            <div>
              <small className="nx-gap-col-title">
                🎯 PRIORITY SKILLS TO LEARN ({activeCareer.missingSkills.length})
              </small>
              <div className="nx-gap-pills">
                {activeCareer.missingSkills.length > 0 ? (
                  activeCareer.missingSkills.map((s) => (
                    <span key={s} className="nx-pill-missing">
                      {s}
                    </span>
                  ))
                ) : (
                  <span className="nx-pill-matched">All core skills unlocked! 🎉</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Toggle Grid of Student's Current Skills */}
      <section className="nx-my-skills-strip">
        <div className="nx-strip-head">
          <span>CLICK TO TOGGLE SKILLS YOU ALREADY KNOW ({userSkills.length} ACTIVE):</span>
          <small>Toggling any skill dynamically updates your Career Match & Roadmap pointers</small>
        </div>

        <div className="nx-skill-toggle-grid">
          {intelligence.skillVideoLibrary.map((item) => {
            const active = userSkills.includes(item.skill);
            return (
              <button
                type="button"
                key={item.skill}
                className={`nx-skill-chip-btn ${active ? "active" : ""}`}
                onClick={() => toggleSkill(item.skill)}
              >
                <span>{item.skill}</span>
                <span className="nx-chip-indicator">{active ? "✓" : "+"}</span>
              </button>
            );
          })}
          {userSkills
            .filter((s) => !intelligence.skillVideoLibrary.some((v) => v.skill === s))
            .map((customSkill) => (
              <button
                type="button"
                key={customSkill}
                className="nx-skill-chip-btn active"
                onClick={() => toggleSkill(customSkill)}
              >
                <span>{customSkill}</span>
                <span className="nx-chip-indicator">✓</span>
              </button>
            ))}
        </div>
      </section>

      {/* Filter & Search Bar for YouTube Skill Courses */}
      <section className="nx-courses-controls">
        <div className="nx-filter-tabs">
          <button
            type="button"
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All Skill Courses ({intelligence.skillVideoLibrary.length})
          </button>
          <button
            type="button"
            className={filter === "gaps" ? "active" : ""}
            onClick={() => setFilter("gaps")}
          >
            🎯 Recommended New Skills to Learn
          </button>
          <button
            type="button"
            className={filter === "known" ? "active" : ""}
            onClick={() => setFilter("known")}
          >
            ✅ Skills I Already Have ({userSkills.length})
          </button>
        </div>

        <div className="nx-search-input">
          <Search size={16} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Python, React, SQL, Machine Learning..."
          />
        </div>
      </section>

      {/* Grid of Skill Video Courses with Direct YouTube Pointers */}
      <section className="nx-skill-cards-grid">
        {filteredSkillVideos.map((course) => {
          const isSaved = progress.savedVideos?.includes(course.videoId);
          return (
            <article
              key={course.skill}
              className={`nx-skill-course-card ${course.isPriorityGap ? "priority-card" : ""}`}
            >
              <div
                className="nx-course-thumb"
                onClick={() => openVideoPlayer(course)}
              >
                <img src={course.youtubeThumbnail} alt={course.title} />
                <div className="nx-course-thumb-overlay">
                  <span className="nx-course-play-btn">
                    <Play size={20} /> Watch in App
                  </span>
                </div>
                <span className="nx-course-duration">{course.estimatedTime}</span>
                {course.isPriorityGap && (
                  <span className="nx-course-priority-ribbon">
                    <Flame size={11} /> PRIORITY POINTER
                  </span>
                )}
              </div>

              <div className="nx-course-body">
                <div className="nx-course-top-row">
                  <span className="nx-course-cat">{course.category}</span>
                  <button
                    type="button"
                    className={`nx-skill-status-toggle ${course.alreadyKnown ? "known" : ""}`}
                    onClick={() => toggleSkill(course.skill)}
                  >
                    {course.alreadyKnown ? "✓ In My Skills" : "+ Mark as Known"}
                  </button>
                </div>

                <h3>{course.skill}: {course.title}</h3>
                <p className="nx-course-why">{course.whyLearn}</p>

                <div className="nx-course-pointer-box">
                  <strong>📍 YOUTUBE POINTER:</strong> {course.pointerTip}
                </div>

                <div className="nx-course-topics">
                  {course.topics.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <div className="nx-course-actions">
                  <button
                    type="button"
                    className="nx-btn-watch-primary"
                    onClick={() => openVideoPlayer(course)}
                  >
                    <Play size={14} /> Watch Video in App
                  </button>

                  <a
                    href={course.youtubeWatchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nx-btn-youtube-ext"
                    title="Open directly on YouTube"
                  >
                    YouTube <ExternalLink size={13} />
                  </a>

                  <button
                    type="button"
                    className={`nx-btn-icon-bookmark ${isSaved ? "saved" : ""}`}
                    onClick={() => toggleSavedVideo(course.videoId)}
                    title="Save video to Watchlist"
                  >
                    <Bookmark size={15} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

