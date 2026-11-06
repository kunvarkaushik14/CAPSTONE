import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sparkles,
  Route,
  BrainCircuit,
  Compass,
  Play,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Target,
  GraduationCap,
  SlidersHorizontal,
  Plus,
  Bot,
  Flame,
  TrendingUp
} from "lucide-react";
import { useNexora, FRESHER_PRESETS } from "../../context/NexoraContext.jsx";

const QUICK_SKILLS = [
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "SQL",
  "Machine Learning",
  "Data Analysis",
  "Git & GitHub",
  "UI/UX Design",
  "Cloud Computing",
  "Java",
  "C++"
];

const QUICK_INTERESTS = [
  "Artificial Intelligence",
  "Web Development",
  "Data Science",
  "Software Development",
  "Cybersecurity",
  "Cloud Computing",
  "UI/UX Design",
  "Entrepreneurship"
];

export default function DashboardPage() {
  const navigate = useNavigate();
  const {
    user,
    profile,
    progress,
    intelligence,
    openVideoPlayer,
    setActiveCareer,
    toggleSkill,
    toggleInterest,
    applyFresherPreset,
    setAiDrawerOpen,
    createCustomAiRoadmap
  } = useNexora();

  const [showQuickCustomize, setShowQuickCustomize] = useState(false);
  const [customSkillInput, setCustomSkillInput] = useState("");
  const [generatingRoadmap, setGeneratingRoadmap] = useState(false);

  const activeCareer = intelligence.activeCareer;
  const allModules = activeCareer.phases.flatMap((p) => p.modules);
  const nextPointerModule =
    allModules.find((m) => m.isNextPointer) || allModules[0];

  const handleGenerateSkillRoadmap = async (e) => {
    e.preventDefault();
    if (!customSkillInput.trim()) return;
    setGeneratingRoadmap(true);
    try {
      await createCustomAiRoadmap(customSkillInput.trim());
      setCustomSkillInput("");
      navigate("/roadmap");
    } finally {
      setGeneratingRoadmap(false);
    }
  };

  return (
    <div className="nx-dash">
      {/* Top Hero Banner */}
      <section className="nx-dash-hero">
        <div className="nx-dash-hero-copy">
          <div className="nx-dash-badge-row">
            <span className="nx-badge-pill">
              <Sparkles size={12} /> NEXORA AI v3.0 ACTIVE
            </span>
            <span className="nx-badge-outline">
              <GraduationCap size={12} /> {profile.currentStatus || "Student / Fresher"} • {profile.experienceLevel || "Learning"}
            </span>
          </div>

          <h2>
            Welcome, <em>{user?.name?.split(" ")[0] || "Explorer"}.</em>{" "}
            Your direction is taking shape.
          </h2>

          <p className="nx-dash-headline">{intelligence.studentSummary.aiHeadline}</p>

          <div className="nx-dash-hero-actions">
            <Link to="/roadmap" className="nx-btn-walnut">
              <Route size={16} /> Open My Full Roadmap <ArrowRight size={15} />
            </Link>
            <Link to="/analytics" className="nx-btn-sage">
              <TrendingUp size={15} /> Monthly Audit & Deficits
            </Link>
            <button
              type="button"
              className="nx-btn-ghost"
              onClick={() => setShowQuickCustomize((v) => !v)}
            >
              <SlidersHorizontal size={15} />
              {showQuickCustomize ? "Hide Quick Editor" : "Edit Interests & Skills"}
            </button>
            <Link to="/onboarding" className="nx-btn-ghost">
              4-Step Setup ↗
            </Link>
          </div>
        </div>

        {/* Quick AI Roadmap Generator Box */}
        <div className="nx-dash-ai-card">
          <div className="nx-dash-ai-top">
            <span className="nx-ai-icon-badge">
              <Bot size={18} />
            </span>
            <div>
              <strong>NEXORA AI — NEW BEGINNING GENERATOR</strong>
              <small>Want to learn a new skill from scratch? Get a custom roadmap + YouTube links.</small>
            </div>
          </div>

          <form onSubmit={handleGenerateSkillRoadmap} className="nx-dash-ai-form">
            <input
              value={customSkillInput}
              onChange={(e) => setCustomSkillInput(e.target.value)}
              placeholder="e.g. Python & AI, Full Stack React, Data Science, DSA..."
            />
            <button type="submit" disabled={generatingRoadmap}>
              {generatingRoadmap ? "Building..." : "Generate Roadmap"}
            </button>
          </form>

          <div className="nx-fresher-presets">
            <span>QUICK FRESHER MODES:</span>
            <div className="nx-preset-chips">
              {FRESHER_PRESETS.map((preset) => (
                <button
                  type="button"
                  key={preset.id}
                  onClick={() => applyFresherPreset(preset.id)}
                  title={preset.description}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expandable Live Interest & Skill Editor */}
      {showQuickCustomize && (
        <section className="nx-quick-editor">
          <div className="nx-quick-editor-head">
            <div>
              <span className="nx-section-eyebrow">INSTANT PERSONALIZATION</span>
              <h3>Update your Interests & Current Skills (Recalculates Roadmap Live)</h3>
            </div>
            <button
              type="button"
              className="nx-btn-outline-sm"
              onClick={() => setShowQuickCustomize(false)}
            >
              Done
            </button>
          </div>

          <div className="nx-quick-editor-grid">
            <div>
              <label className="nx-mini-label">
                YOUR CAREER INTERESTS ({profile.interests?.length || 0} SELECTED)
              </label>
              <div className="nx-chip-cloud">
                {QUICK_INTERESTS.map((interest) => {
                  const active = profile.interests?.includes(interest);
                  return (
                    <button
                      type="button"
                      key={interest}
                      className={`nx-toggle-chip ${active ? "active" : ""}`}
                      onClick={() => toggleInterest(interest)}
                    >
                      {active ? "✓ " : "+ "}
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="nx-mini-label">
                SKILLS YOU ALREADY HAVE ({profile.skills?.length || 0} SELECTED)
              </label>
              <div className="nx-chip-cloud">
                {QUICK_SKILLS.map((skill) => {
                  const active = profile.skills?.includes(skill);
                  return (
                    <button
                      type="button"
                      key={skill}
                      className={`nx-toggle-chip ${active ? "active" : ""}`}
                      onClick={() => toggleSkill(skill)}
                    >
                      {active ? "✓ " : "+ "}
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4 Key Metrics */}
      <section className="nx-kpi-grid">
        <div className="nx-kpi-card">
          <span className="nx-kpi-label">TOP AI CAREER MATCH</span>
          <div className="nx-kpi-value">{activeCareer.matchScore}%</div>
          <p>{activeCareer.title}</p>
        </div>

        <div className="nx-kpi-card">
          <span className="nx-kpi-label">CAREER READINESS</span>
          <div className="nx-kpi-value">{activeCareer.readinessScore}%</div>
          <p>
            {activeCareer.matchedSkills.length} of {activeCareer.requiredSkills.length} core skills ready
          </p>
        </div>

        <div className="nx-kpi-card">
          <span className="nx-kpi-label">ROADMAP PROGRESS</span>
          <div className="nx-kpi-value">
            {activeCareer.completedModules}/{activeCareer.totalModules}
          </div>
          <p>Milestones completed in active path</p>
        </div>

        <div className="nx-kpi-card">
          <span className="nx-kpi-label">YOUTUBE LESSONS WATCHED</span>
          <div className="nx-kpi-value">{progress.watchedVideos?.length || 0}</div>
          <p>Direct video tutorials completed</p>
        </div>
      </section>

      {/* NEXT STEP YOUTUBE POINTER SPOTLIGHT */}
      {nextPointerModule && (
        <section className="nx-pointer-spotlight">
          <div className="nx-pointer-left">
            <div className="nx-pointer-indicator">
              <span className="nx-pulse-dot" />
              <span>ACTIVE LEARNING POINTER — START HERE NEXT</span>
            </div>

            <h3>{nextPointerModule.title}</h3>
            <p>{nextPointerModule.description}</p>

            <div className="nx-pointer-tip-box">
              <Flame size={16} />
              <span>{nextPointerModule.video?.pointerNote}</span>
            </div>

            <div className="nx-pointer-actions">
              <button
                type="button"
                className="nx-btn-watch-primary"
                onClick={() =>
                  openVideoPlayer({
                    ...nextPointerModule.video,
                    stepId: nextPointerModule.id,
                    skillTag: nextPointerModule.skillTag
                  })
                }
              >
                <Play size={16} /> Watch YouTube Video in App
              </button>

              <a
                href={nextPointerModule.youtubeWatchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nx-btn-youtube-ext"
              >
                Open Directly on YouTube <ExternalLink size={14} />
              </a>

              <Link to="/roadmap" className="nx-btn-outline-sm">
                View Full Roadmap →
              </Link>
            </div>
          </div>

          <div
            className="nx-pointer-video-preview"
            onClick={() =>
              openVideoPlayer({
                ...nextPointerModule.video,
                stepId: nextPointerModule.id,
                skillTag: nextPointerModule.skillTag
              })
            }
          >
            <img
              src={nextPointerModule.youtubeThumbnail}
              alt={nextPointerModule.video?.title}
            />
            <div className="nx-video-play-overlay">
              <div className="nx-play-circle">
                <Play size={24} />
              </div>
              <span>Click to Play Inside NEXORA ({nextPointerModule.video?.duration})</span>
            </div>
          </div>
        </section>
      )}

      {/* Two-Column Split: Recommended Careers & Skill Gaps with YouTube Links */}
      <div className="nx-dash-columns">
        {/* Left: Top Career Matches */}
        <section className="nx-panel">
          <div className="nx-panel-header">
            <div>
              <span className="nx-section-eyebrow">PERSONALISED MATCHES</span>
              <h3>Top Career Paths for Your Profile</h3>
            </div>
            <Link to="/discover" className="nx-link-arrow">
              Explore all {intelligence.careers.length} careers <ArrowRight size={14} />
            </Link>
          </div>

          <div className="nx-career-list">
            {intelligence.careers.slice(0, 4).map((career) => {
              const isCurrent = career.id === activeCareer.id;
              return (
                <article
                  key={career.id}
                  className={`nx-career-row-card ${isCurrent ? "active" : ""}`}
                >
                  <div className="nx-career-row-top">
                    <div>
                      <span className="nx-career-cat">{career.category}</span>
                      <h4>{career.title}</h4>
                    </div>
                    <span className="nx-match-pill">{career.matchScore}% Match</span>
                  </div>

                  <p className="nx-career-insight">{career.aiInsight}</p>

                  <div className="nx-career-row-footer">
                    <span className="nx-salary-tag">{career.salaryRange}</span>
                    <div className="nx-career-row-btns">
                      <button
                        type="button"
                        className="nx-btn-outline-sm"
                        onClick={() =>
                          openVideoPlayer({
                            ...career.introVideo,
                            skillTag: career.category
                          })
                        }
                      >
                        <Play size={12} /> Intro Video
                      </button>
                      <button
                        type="button"
                        className={`nx-btn-select-sm ${isCurrent ? "selected" : ""}`}
                        onClick={() => {
                          setActiveCareer(career.id);
                          navigate("/roadmap");
                        }}
                      >
                        {isCurrent ? "Active Roadmap →" : "Switch to This Roadmap"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Right: Priority Skills to Learn with Direct YouTube Pointers */}
        <section className="nx-panel">
          <div className="nx-panel-header">
            <div>
              <span className="nx-section-eyebrow">NEW SKILL POINTERS</span>
              <h3>Learn Missing Skills Directly from YouTube</h3>
            </div>
            <Link to="/skills" className="nx-link-arrow">
              All {intelligence.skillVideoLibrary.length} skill courses <ArrowRight size={14} />
            </Link>
          </div>

          <div className="nx-skill-video-list">
            {intelligence.skillVideoLibrary.slice(0, 4).map((item) => (
              <div key={item.skill} className="nx-skill-video-row">
                <div
                  className="nx-skill-thumb"
                  onClick={() => openVideoPlayer(item)}
                >
                  <img src={item.youtubeThumbnail} alt={item.title} />
                  <span className="nx-thumb-play">
                    <Play size={14} />
                  </span>
                </div>

                <div className="nx-skill-video-info">
                  <div className="nx-skill-video-badges">
                    <span className="nx-skill-name-tag">{item.skill}</span>
                    {item.isPriorityGap && (
                      <span className="nx-priority-gap-tag">PRIORITY FOR YOUR GOAL</span>
                    )}
                    {item.alreadyKnown && (
                      <span className="nx-known-tag">IN YOUR SKILLS ✓</span>
                    )}
                  </div>
                  <h4>{item.title}</h4>
                  <small>
                    {item.channel} • {item.estimatedTime}
                  </small>

                  <div className="nx-skill-video-actions">
                    <button
                      type="button"
                      className="nx-btn-watch-sm"
                      onClick={() => openVideoPlayer(item)}
                    >
                      <Play size={12} /> Watch in App
                    </button>
                    <a
                      href={item.youtubeWatchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nx-btn-ext-sm"
                    >
                      YouTube ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

