import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Bookmark,
  Play,
  ExternalLink,
  Route,
  Trash2,
  FileText
} from "lucide-react";
import { useNexora } from "../../context/NexoraContext.jsx";

export default function SavedPage() {
  const navigate = useNavigate();
  const {
    intelligence,
    progress,
    setActiveCareer,
    toggleSavedCareer,
    toggleSavedVideo,
    openVideoPlayer
  } = useNexora();

  const savedCareerObjects = intelligence.careers.filter((c) =>
    progress.savedCareers?.includes(c.id)
  );

  // Collect all videos from skill catalog & roadmaps
  const allRoadmapVideos = intelligence.careers.flatMap((c) =>
    c.phases.flatMap((p) =>
      p.modules.map((m) => ({
        videoId: m.video?.videoId,
        title: m.video?.title,
        channel: m.video?.channel,
        estimatedTime: m.video?.duration,
        skill: m.skillTag,
        pointerTip: m.video?.pointerNote
      }))
    )
  );

  const combinedVideoMap = new Map();
  [...intelligence.skillVideoLibrary, ...allRoadmapVideos].forEach((v) => {
    if (v?.videoId && !combinedVideoMap.has(v.videoId)) {
      combinedVideoMap.set(v.videoId, v);
    }
  });

  const savedVideoObjects = (progress.savedVideos || [])
    .map((id) => combinedVideoMap.get(id))
    .filter(Boolean);

  return (
    <div className="nx-saved-page">
      <section className="nx-saved-header">
        <span className="nx-section-eyebrow">
          <Bookmark size={13} /> YOUR BOOKMARKED CAREERS & YOUTUBE WATCHLIST
        </span>
        <h2>
          Saved paths & <em>video lectures.</em>
        </h2>
        <p>
          Quickly revisit your bookmarked career tracks, saved YouTube tutorials, and personal study notes.
        </p>
      </section>

      <div className="nx-dash-columns">
        {/* Left: Saved Careers */}
        <section className="nx-panel">
          <div className="nx-panel-header">
            <div>
              <span className="nx-section-eyebrow">BOOKMARKED PATHS</span>
              <h3>Saved Career Tracks ({savedCareerObjects.length})</h3>
            </div>
          </div>

          {savedCareerObjects.length === 0 ? (
            <div className="nx-empty-card">
              <p>You haven't bookmarked any career tracks yet.</p>
              <button
                type="button"
                className="nx-btn-walnut"
                onClick={() => navigate("/discover")}
              >
                Explore Careers
              </button>
            </div>
          ) : (
            <div className="nx-career-list">
              {savedCareerObjects.map((career) => (
                <article key={career.id} className="nx-career-row-card">
                  <div className="nx-career-row-top">
                    <div>
                      <span className="nx-career-cat">{career.category}</span>
                      <h4>{career.title}</h4>
                    </div>
                    <span className="nx-match-pill">{career.matchScore}% Match</span>
                  </div>
                  <p className="nx-career-insight">{career.tagline}</p>
                  <div className="nx-career-row-footer">
                    <span className="nx-salary-tag">{career.salaryRange}</span>
                    <div className="nx-career-row-btns">
                      <button
                        type="button"
                        className="nx-btn-outline-sm"
                        onClick={() => toggleSavedCareer(career.id)}
                      >
                        <Trash2 size={12} /> Remove
                      </button>
                      <button
                        type="button"
                        className="nx-btn-select-sm"
                        onClick={() => {
                          setActiveCareer(career.id);
                          navigate("/roadmap");
                        }}
                      >
                        <Route size={12} /> Open Roadmap
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Right: Saved YouTube Videos & Notes */}
        <section className="nx-panel">
          <div className="nx-panel-header">
            <div>
              <span className="nx-section-eyebrow">YOUTUBE WATCHLIST</span>
              <h3>Saved Video Lectures ({savedVideoObjects.length})</h3>
            </div>
          </div>

          {savedVideoObjects.length === 0 ? (
            <div className="nx-empty-card">
              <p>No saved YouTube tutorials yet. Bookmark any video from your Roadmap or Skills hub!</p>
              <button
                type="button"
                className="nx-btn-walnut"
                onClick={() => navigate("/skills")}
              >
                Browse Skill Videos
              </button>
            </div>
          ) : (
            <div className="nx-skill-video-list">
              {savedVideoObjects.map((video) => {
                const note = progress.videoNotes?.[video.videoId];
                return (
                  <div key={video.videoId} className="nx-skill-video-row">
                    <div
                      className="nx-skill-thumb"
                      onClick={() => openVideoPlayer(video)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                        alt={video.title}
                      />
                      <span className="nx-thumb-play">
                        <Play size={14} />
                      </span>
                    </div>

                    <div className="nx-skill-video-info">
                      <div className="nx-skill-video-badges">
                        <span className="nx-skill-name-tag">{video.skill}</span>
                      </div>
                      <h4>{video.title}</h4>
                      <small>
                        {video.channel} • {video.estimatedTime}
                      </small>

                      {note && (
                        <div className="nx-saved-note-preview">
                          <FileText size={12} />
                          <span>{note}</span>
                        </div>
                      )}

                      <div className="nx-skill-video-actions">
                        <button
                          type="button"
                          className="nx-btn-watch-sm"
                          onClick={() => openVideoPlayer(video)}
                        >
                          <Play size={12} /> Watch in App
                        </button>
                        <a
                          href={`https://www.youtube.com/watch?v=${video.videoId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="nx-btn-ext-sm"
                        >
                          YouTube <ExternalLink size={11} />
                        </a>
                        <button
                          type="button"
                          className="nx-btn-outline-sm"
                          onClick={() => toggleSavedVideo(video.videoId)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

