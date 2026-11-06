import React, { useState } from "react";
import {
  Route,
  Play,
  ExternalLink,
  CheckCircle2,
  Circle,
  Sparkles,
  Flame,
  Clock,
  Bookmark,
  Code2,
  Compass,
  Maximize2
} from "lucide-react";
import { useNexora } from "../../context/NexoraContext.jsx";

export default function RoadmapPage() {
  const {
    intelligence,
    progress,
    setActiveCareer,
    toggleStepCompleted,
    openVideoPlayer,
    toggleSavedVideo,
    createCustomAiRoadmap
  } = useNexora();

  const activeCareer = intelligence.activeCareer;
  const allModules = activeCareer.phases.flatMap((p) => p.modules);
  const defaultModule =
    allModules.find((m) => m.isNextPointer) || allModules[0];

  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [customQuery, setCustomQuery] = useState("");
  const [buildingCustom, setBuildingCustom] = useState(false);

  const activeModule =
    allModules.find((m) => m.id === selectedModuleId) ||
    defaultModule;

  const handleBuildCustom = async (e) => {
    e.preventDefault();
    if (!customQuery.trim()) return;
    setBuildingCustom(true);
    try {
      const created = await createCustomAiRoadmap(customQuery.trim());
      setCustomQuery("");
      if (created?.phases?.[0]?.modules?.[0]) {
        setSelectedModuleId(created.phases[0].modules[0].id);
      }
    } finally {
      setBuildingCustom(false);
    }
  };

  return (
    <div className="nx-roadmap-page">
      {/* Top Bar: Switch Career Roadmap OR Generate Custom Skill Roadmap */}
      <section className="nx-roadmap-header">
        <div className="nx-roadmap-header-left">
          <span className="nx-section-eyebrow">
            <Sparkles size={12} /> PERSONALISED LEARNING ROADMAP & YOUTUBE POINTERS
          </span>
          <h2>{activeCareer.title}</h2>
          <p>{activeCareer.tagline}</p>

          <div className="nx-roadmap-switcher">
            <label>ACTIVE ROADMAP TRACK:</label>
            <select
              value={activeCareer.id}
              onChange={(e) => {
                setActiveCareer(e.target.value);
                setSelectedModuleId(null);
              }}
            >
              {intelligence.careers.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title} ({c.matchScore}% Match)
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="nx-roadmap-custom-box">
          <strong>LEARN ANY NEW SKILL — AI ROADMAP BUILDER</strong>
          <p>Enter any skill or role to get a custom roadmap with YouTube pointers:</p>
          <form onSubmit={handleBuildCustom} className="nx-roadmap-custom-form">
            <input
              value={customQuery}
              onChange={(e) => setCustomQuery(e.target.value)}
              placeholder="e.g. Python, React, Machine Learning, SQL..."
            />
            <button type="submit" disabled={buildingCustom}>
              {buildingCustom ? "Synthesizing..." : "Build Roadmap"}
            </button>
          </form>
        </div>
      </section>

      {/* Fresher Guidance Tip */}
      {activeCareer.fresherTip && (
        <div className="nx-fresher-banner">
          <div className="nx-fresher-banner-icon">
            <Compass size={19} />
          </div>
          <div>
            <strong>NEW BEGINNING / FRESHER STRATEGY FOR {activeCareer.title.toUpperCase()}</strong>
            <p>{activeCareer.fresherTip}</p>
          </div>
          <div className="nx-fresher-stats">
            <span>{activeCareer.completedModules || 0} / {activeCareer.totalModules || allModules.length} Steps Done</span>
            <strong>{activeCareer.readinessScore}% Ready</strong>
          </div>
        </div>
      )}

      {/* Main Split View: Left = Step-by-Step Phases & Pointers, Right = Sticky In-Page YouTube Player & Pointer Guide */}
      <div className="nx-roadmap-split">
        {/* Left Column: Phases Timeline */}
        <div className="nx-roadmap-timeline">
          {activeCareer.phases.map((phase) => (
            <div key={phase.id} className="nx-phase-block">
              <div className="nx-phase-header">
                <span className="nx-phase-num">{phase.phaseNumber}</span>
                <span className="nx-phase-dur">
                  <Clock size={12} /> {phase.duration}
                </span>
              </div>
              <h3>{phase.title}</h3>
              <p className="nx-phase-summary">{phase.summary}</p>

              <div className="nx-phase-modules">
                {phase.modules.map((mod) => {
                  const isDone = progress.completedSteps?.includes(mod.id);
                  const isSelected = activeModule?.id === mod.id;
                  const videoId = mod.video?.videoId;
                  const ytUrl = `https://www.youtube.com/watch?v=${videoId}`;

                  return (
                    <article
                      key={mod.id}
                      className={`nx-module-card ${isSelected ? "selected" : ""} ${isDone ? "completed" : ""} ${mod.isNextPointer ? "is-pointer" : ""}`}
                      onClick={() => setSelectedModuleId(mod.id)}
                    >
                      {/* Animated Pointer Banner if this is the student's next step */}
                      {mod.isNextPointer && (
                        <div className="nx-module-pointer-flag">
                          <span className="nx-pulse-dot" />
                          <span>📍 YOUR CURRENT LEARNING POINTER — CLICK TO WATCH YOUTUBE TUTORIAL</span>
                        </div>
                      )}

                      <div className="nx-module-top">
                        <button
                          type="button"
                          className="nx-module-check"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleStepCompleted(mod.id, videoId);
                          }}
                          title={isDone ? "Mark as incomplete" : "Mark step as completed"}
                        >
                          {isDone ? (
                            <CheckCircle2 size={21} className="nx-check-done" />
                          ) : (
                            <Circle size={21} />
                          )}
                        </button>

                        <div className="nx-module-title-area">
                          <div className="nx-module-tags">
                            <span className="nx-skill-badge">{mod.skillTag}</span>
                            <span className="nx-level-badge">{mod.level}</span>
                            <span className="nx-dur-badge">{mod.duration}</span>
                            {mod.alreadyHasSkill && (
                              <span className="nx-known-badge">Known Skill ✓</span>
                            )}
                          </div>
                          <h4>{mod.title}</h4>
                        </div>
                      </div>

                      <p className="nx-module-desc">{mod.description}</p>

                      {mod.keyTopics && (
                        <div className="nx-module-topics">
                          {mod.keyTopics.map((topic) => (
                            <span key={topic} className="nx-topic-pill">
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Direct YouTube Pointer Strip inside every Roadmap Step */}
                      {mod.video && (
                        <div className="nx-module-yt-strip">
                          <div className="nx-module-yt-left">
                            <span className="nx-yt-pointer-dot">▶</span>
                            <div>
                              <strong>YouTube Lecture: {mod.video.title}</strong>
                              <small>{mod.video.pointerNote}</small>
                            </div>
                          </div>

                          <div className="nx-module-yt-actions">
                            <button
                              type="button"
                              className="nx-btn-play-inline"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedModuleId(mod.id);
                              }}
                            >
                              <Play size={13} /> Play Here
                            </button>

                            <button
                              type="button"
                              className="nx-btn-studio-modal"
                              onClick={(e) => {
                                e.stopPropagation();
                                openVideoPlayer({
                                  ...mod.video,
                                  stepId: mod.id,
                                  skillTag: mod.skillTag
                                });
                              }}
                            >
                              <Maximize2 size={12} /> Theatre Mode
                            </button>

                            <a
                              href={ytUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="nx-btn-yt-direct"
                              onClick={(e) => e.stopPropagation()}
                              title="Open directly on YouTube"
                            >
                              YouTube <ExternalLink size={12} />
                            </a>
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Sticky Docked In-App YouTube Player & Active Module Inspector */}
        {activeModule && activeModule.video && (
          <aside className="nx-roadmap-player-dock">
            <div className="nx-dock-card">
              <div className="nx-dock-header">
                <span className="nx-dock-badge">
                  <Flame size={13} /> IN-APP YOUTUBE PLAYER • {activeModule.skillTag.toUpperCase()}
                </span>
                <button
                  type="button"
                  className="nx-dock-expand"
                  onClick={() =>
                    openVideoPlayer({
                      ...activeModule.video,
                      stepId: activeModule.id,
                      skillTag: activeModule.skillTag
                    })
                  }
                >
                  <Maximize2 size={13} /> Full Studio & Notes
                </button>
              </div>

              <h4>{activeModule.video.title}</h4>
              <p className="nx-dock-channel">
                Channel: <strong>{activeModule.video.channel}</strong> • Duration: {activeModule.video.duration}
              </p>

              {/* Embedded YouTube Player directly on Roadmap Page */}
              <div className="nx-dock-iframe-box">
                <iframe
                  key={activeModule.video.videoId}
                  src={`https://www.youtube.com/embed/${activeModule.video.videoId}?rel=0`}
                  title={activeModule.video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Pointer Explanation */}
              <div className="nx-dock-pointer-note">
                <strong>📍 YOUTUBE POINTER GUIDE</strong>
                <p>{activeModule.video.pointerNote}</p>
              </div>

              {/* Hands-on Fresher Mini-Project */}
              {activeModule.projectIdea && (
                <div className="nx-dock-project">
                  <span><Code2 size={14} /> HANDS-ON FRESHER PROJECT</span>
                  <p>{activeModule.projectIdea}</p>
                </div>
              )}

              {/* Direct Action Buttons */}
              <div className="nx-dock-actions">
                <button
                  type="button"
                  className={`nx-dock-complete-btn ${
                    progress.completedSteps?.includes(activeModule.id) ? "done" : ""
                  }`}
                  onClick={() =>
                    toggleStepCompleted(activeModule.id, activeModule.video.videoId)
                  }
                >
                  <CheckCircle2 size={16} />
                  {progress.completedSteps?.includes(activeModule.id)
                    ? "Milestone Completed ✓"
                    : "Mark Milestone Completed"}
                </button>

                <div className="nx-dock-sub-actions">
                  <a
                    href={`https://www.youtube.com/watch?v=${activeModule.video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nx-dock-yt-link"
                  >
                    Open Directly on YouTube <ExternalLink size={14} />
                  </a>

                  <button
                    type="button"
                    className="nx-dock-bookmark"
                    onClick={() => toggleSavedVideo(activeModule.video.videoId)}
                  >
                    <Bookmark size={14} />
                    {progress.savedVideos?.includes(activeModule.video.videoId)
                      ? "Saved"
                      : "Save Video"}
                  </button>
                </div>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

