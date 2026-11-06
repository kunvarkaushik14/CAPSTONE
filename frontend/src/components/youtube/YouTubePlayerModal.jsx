import React, { useState, useEffect } from "react";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Bookmark,
  Play,
  Clock,
  Sparkles,
  FileText,
  Compass,
  Youtube
} from "lucide-react";
import { useNexora } from "../../context/NexoraContext.jsx";

function parseTimeToSeconds(timeStr = "00:00") {
  const parts = String(timeStr)
    .split(":")
    .map((n) => parseInt(n, 10) || 0);
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  }
  return 0;
}

export default function YouTubePlayerModal() {
  const {
    activeVideoModal,
    closeVideoPlayer,
    progress,
    markVideoWatched,
    toggleStepCompleted,
    toggleSavedVideo,
    saveVideoNote
  } = useNexora();

  const [startSeconds, setStartSeconds] = useState(0);
  const [noteText, setNoteText] = useState("");
  const [noteSavedToast, setNoteSavedToast] = useState(false);

  const videoId =
    activeVideoModal?.videoId ||
    activeVideoModal?.youtubeId ||
    activeVideoModal?.video?.videoId ||
    activeVideoModal?.video?.youtubeId;

  useEffect(() => {
    if (videoId) {
      setStartSeconds(0);
      setNoteText(progress.videoNotes?.[videoId] || "");
    }
  }, [videoId, progress.videoNotes]);

  if (!activeVideoModal || !videoId) return null;

  const title = activeVideoModal.title || activeVideoModal.video?.title || "YouTube Learning Lecture";
  const channel = activeVideoModal.channel || activeVideoModal.video?.channel || "Curated Trade Educator";
  const duration = activeVideoModal.duration || activeVideoModal.estimatedTime || activeVideoModal.video?.duration || "Full Tutorial";
  const pointerNote =
    activeVideoModal.pointerNote ||
    activeVideoModal.pointerTip ||
    activeVideoModal.video?.pointerNote ||
    "POINTER: Follow along hands-on and take notes below as you watch.";
  const timestamps = activeVideoModal.timestamps || activeVideoModal.video?.timestamps || [
    { time: "00:00", label: "Introduction & Setup" },
    { time: "05:00", label: "Core Principles & Safety" },
    { time: "15:00", label: "Practical Execution" }
  ];
  const stepId = activeVideoModal.stepId || activeVideoModal.id;
  const skillTag = activeVideoModal.skillTag || activeVideoModal.skill || "Core Skill";

  const isWatched = progress.watchedVideos?.includes(videoId);
  const isSaved = progress.savedVideos?.includes(videoId);
  const isStepDone = stepId ? progress.completedSteps?.includes(stepId) : isWatched;

  const directYoutubeUrl = `https://www.youtube.com/watch?v=${videoId}${startSeconds > 0 ? `&t=${startSeconds}s` : ""}`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1${startSeconds > 0 ? `&start=${startSeconds}` : ""}`;

  const handleSaveNote = () => {
    saveVideoNote(videoId, noteText);
    setNoteSavedToast(true);
    setTimeout(() => setNoteSavedToast(false), 2000);
  };

  const handleComplete = () => {
    markVideoWatched(videoId);
    if (stepId && !progress.completedSteps?.includes(stepId)) {
      toggleStepCompleted(stepId, videoId);
    }
  };

  return (
    <div className="nx-yt-modal-backdrop" onClick={closeVideoPlayer}>
      <div className="nx-yt-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="nx-yt-modal-header">
          <div className="nx-yt-modal-title-wrap">
            <span className="nx-yt-badge">
              <Sparkles size={12} /> NEXORA IN-APP YOUTUBE STUDIO • {skillTag.toUpperCase()}
            </span>
            <h3>{title}</h3>
            <div className="nx-yt-meta">
              <span>Channel: <strong>{channel}</strong></span>
              <span>•</span>
              <span><Clock size={12} /> {duration}</span>
            </div>
          </div>

          <div className="nx-yt-header-actions">
            <a
              href={directYoutubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nx-yt-external-btn"
              title="Open directly on YouTube in a new tab"
            >
              <Compass size={15} />
              <span>Open on YouTube</span>
              <ExternalLink size={14} />
            </a>

            <button
              type="button"
              className="nx-yt-close-btn"
              onClick={closeVideoPlayer}
              aria-label="Close video player"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Body Grid: Left = Video Player & Timestamps, Right = Pointer Guide & Study Notes */}
        <div className="nx-yt-modal-body">
          <div className="nx-yt-player-col">
            <div className="nx-yt-iframe-wrapper">
              <iframe
                key={`${videoId}-${startSeconds}`}
                src={embedUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Pointer Banner */}
            <div className="nx-yt-pointer-banner">
              <div className="nx-yt-pointer-pulse" />
              <div>
                <strong>NEXORA LEARNING POINTER</strong>
                <p>{pointerNote}</p>
              </div>
              <a
                href={directYoutubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nx-yt-pointer-link"
              >
                Direct YouTube Link ↗
              </a>
            </div>

            {/* Interactive Timestamp Pointers */}
            <div className="nx-yt-timestamps">
              <span className="nx-yt-section-label">JUMP TO CHAPTER POINTERS (PLAYS IN APP):</span>
              <div className="nx-yt-timestamp-chips">
                {timestamps.map((ts) => {
                  const sec = parseTimeToSeconds(ts.time);
                  const active = startSeconds === sec;
                  return (
                    <button
                      type="button"
                      key={ts.time + ts.label}
                      className={`nx-yt-ts-chip ${active ? "active" : ""}`}
                      onClick={() => setStartSeconds(sec)}
                    >
                      <Play size={11} />
                      <strong>{ts.time}</strong>
                      <span>{ts.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Actions & Personal Notes */}
          <div className="nx-yt-notes-col">
            <div className="nx-yt-action-box">
              <button
                type="button"
                className={`nx-yt-complete-btn ${isStepDone || isWatched ? "done" : ""}`}
                onClick={handleComplete}
              >
                <CheckCircle2 size={17} />
                {isStepDone || isWatched ? "Completed & Logged in Roadmap" : "Mark Video & Milestone Complete"}
              </button>

              <button
                type="button"
                className={`nx-yt-save-btn ${isSaved ? "saved" : ""}`}
                onClick={() => toggleSavedVideo(videoId)}
              >
                <Bookmark size={16} />
                {isSaved ? "Saved in Watchlist" : "Bookmark Video"}
              </button>
            </div>

            <div className="nx-yt-notes-card">
              <div className="nx-yt-notes-head">
                <span><FileText size={14} /> YOUR PERSONAL VIDEO NOTES</span>
                {noteSavedToast && <small className="nx-note-saved">Saved ✓</small>}
              </div>
              <textarea
                rows={7}
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Write key formulas, code snippets, or takeaways while watching this tutorial..."
              />
              <button type="button" className="nx-yt-save-note-btn" onClick={handleSaveNote}>
                Save Study Notes
              </button>
            </div>

            <div className="nx-yt-direct-box">
              <span className="nx-yt-section-label">DIRECT YOUTUBE POINTER URL</span>
              <div className="nx-yt-url-row">
                <code>https://youtu.be/{videoId}</code>
                <a
                  href={directYoutubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Launch ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

