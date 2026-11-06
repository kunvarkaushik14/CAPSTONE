import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Compass,
  Play,
  ExternalLink,
  Route,
  Bookmark,
  Sparkles,
  Search,
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import { useNexora } from "../../context/NexoraContext.jsx";

export default function DiscoverPage() {
  const navigate = useNavigate();
  const {
    intelligence,
    progress,
    setActiveCareer,
    toggleSavedCareer,
    openVideoPlayer
  } = useNexora();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    ...Array.from(new Set(intelligence.careers.map((c) => c.category)))
  ];

  const filteredCareers = intelligence.careers.filter((career) => {
    if (selectedCategory !== "All" && career.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        career.title.toLowerCase().includes(q) ||
        career.category.toLowerCase().includes(q) ||
        career.tagline.toLowerCase().includes(q) ||
        career.requiredSkills.some((s) => s.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="nx-discover-page">
      <section className="nx-discover-hero">
        <div>
          <span className="nx-section-eyebrow">
            <Compass size={13} /> CAREER INTELLIGENCE EXPLORER
          </span>
          <h2>
            Discover career paths built for <em>your potential.</em>
          </h2>
          <p>
            Every career below is ranked by <strong>NEXORA AI (v3.0)</strong> against your interests and current skills, complete with an introductory YouTube crash course and a 4-phase learning roadmap.
          </p>
        </div>

        <div className="nx-discover-controls">
          <div className="nx-search-input">
            <Search size={16} />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search AI, Web Dev, Data Science, Cybersecurity, skills..."
            />
          </div>

          <div className="nx-category-pills">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                className={selectedCategory === cat ? "active" : ""}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="nx-discover-grid">
        {filteredCareers.map((career) => {
          const isSaved = progress.savedCareers?.includes(career.id);
          const isActive = intelligence.activeCareer.id === career.id;
          const introVid = career.introVideo;

          return (
            <article
              key={career.id}
              className={`nx-discover-card ${isActive ? "active-track" : ""}`}
            >
              <div className="nx-discover-card-top">
                <div>
                  <span className="nx-career-cat">{career.category}</span>
                  <h3>{career.title}</h3>
                </div>
                <div className="nx-discover-badges">
                  <span className="nx-match-pill">{career.matchScore}% Match</span>
                  <button
                    type="button"
                    className={`nx-btn-icon-bookmark ${isSaved ? "saved" : ""}`}
                    onClick={() => toggleSavedCareer(career.id)}
                    title={isSaved ? "Saved in Bookmarks" : "Save Career"}
                  >
                    <Bookmark size={16} />
                  </button>
                </div>
              </div>

              <p className="nx-discover-tagline">{career.tagline}</p>

              <div className="nx-discover-metrics">
                <span>💰 {career.salaryRange}</span>
                <span>
                  <TrendingUp size={13} /> {career.growthRate}
                </span>
                <span>🎓 Fresher Friendly</span>
              </div>

              <div className="nx-discover-ai-note">
                <Sparkles size={14} />
                <p>{career.aiInsight}</p>
              </div>

              <div className="nx-discover-skills-section">
                <small>CORE SKILLS (GREEN = YOU HAVE IT):</small>
                <div className="nx-discover-skill-chips">
                  {career.requiredSkills.map((skill) => {
                    const hasIt = career.matchedSkills?.includes(skill);
                    return (
                      <span
                        key={skill}
                        className={`nx-disc-skill ${hasIt ? "matched" : "missing"}`}
                      >
                        {hasIt && <CheckCircle2 size={11} />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Direct YouTube Intro Course Pointer */}
              {introVid && (
                <div className="nx-discover-yt-box">
                  <div className="nx-discover-yt-info">
                    <span className="nx-yt-mini-label">📍 YOUTUBE CRASH COURSE POINTER</span>
                    <strong>{introVid.title}</strong>
                    <small>{introVid.channel} • {introVid.duration}</small>
                  </div>
                  <div className="nx-discover-yt-btns">
                    <button
                      type="button"
                      className="nx-btn-watch-sm"
                      onClick={() =>
                        openVideoPlayer({
                          ...introVid,
                          skillTag: career.category
                        })
                      }
                    >
                      <Play size={12} /> Watch in App
                    </button>
                    <a
                      href={`https://www.youtube.com/watch?v=${introVid.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nx-btn-ext-sm"
                    >
                      YouTube <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              )}

              <div className="nx-discover-footer">
                <button
                  type="button"
                  className={`nx-btn-activate-roadmap ${isActive ? "active" : ""}`}
                  onClick={() => {
                    setActiveCareer(career.id);
                    navigate("/roadmap");
                  }}
                >
                  <Route size={15} />
                  {isActive ? "Open Active Roadmap →" : "Start This Career Roadmap"}
                </button>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

