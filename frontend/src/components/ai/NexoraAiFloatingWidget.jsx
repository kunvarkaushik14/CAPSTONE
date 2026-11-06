import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  X,
  Send,
  Play,
  ExternalLink,
  Route,
  Maximize2,
  Bot
} from "lucide-react";
import { useNexora } from "../../context/NexoraContext.jsx";

export default function NexoraAiFloatingWidget() {
  const navigate = useNavigate();
  const {
    aiDrawerOpen,
    setAiDrawerOpen,
    intelligence,
    askNexoraAi,
    openVideoPlayer,
    saveCustomRoadmap
  } = useNexora();

  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [messages, setMessages] = useState(() => [
    {
      id: "welcome",
      role: "ai",
      text: `Hello! I am **NEXORA AI (v3.0)**, your personal Career & Skill Intelligence Engine. Ask me to build a learning roadmap for any skill, find YouTube video tutorials, or guide you as a fresher!`,
      recommendedVideos: intelligence.skillVideoLibrary.slice(0, 2),
      suggestedPrompts: [
        "Build me a fresher roadmap with YouTube videos",
        "What skills should I learn next?",
        "How do I get my first tech internship?"
      ]
    }
  ]);

  const sendPrompt = async (promptText) => {
    const text = String(promptText || input).trim();
    if (!text || thinking) return;

    const userMsg = { id: `u-${Date.now()}`, role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setThinking(true);

    try {
      const res = await askNexoraAi(text);
      const aiMsg = {
        id: `ai-${Date.now()}`,
        role: "ai",
        text: res.reply,
        recommendedVideos: res.recommendedVideos || [],
        generatedRoadmap: res.generatedRoadmap || null,
        suggestedPrompts: res.suggestedPrompts || []
      };
      setMessages((prev) => [...prev, aiMsg]);
    } finally {
      setThinking(false);
    }
  };

  const handleApplyRoadmap = (roadmap) => {
    saveCustomRoadmap(roadmap);
    setAiDrawerOpen(false);
    navigate("/roadmap");
  };

  return (
    <>
      {!aiDrawerOpen && (
        <button
          type="button"
          className="nx-ai-fab"
          onClick={() => setAiDrawerOpen(true)}
          title="Ask NEXORA AI Career Mentor"
        >
          <span className="nx-ai-fab-icon">
            <Sparkles size={18} />
          </span>
          <div className="nx-ai-fab-copy">
            <strong>NEXORA AI</strong>
            <small>Roadmap & Video Mentor</small>
          </div>
        </button>
      )}

      {aiDrawerOpen && (
        <aside className="nx-ai-drawer">
          <div className="nx-ai-drawer-header">
            <div className="nx-ai-drawer-brand">
              <span className="nx-ai-orb">
                <Bot size={18} />
              </span>
              <div>
                <strong>NEXORA AI v3.0</strong>
                <small>Neural Career & YouTube Guide</small>
              </div>
            </div>

            <div className="nx-ai-drawer-actions">
              <button
                type="button"
                onClick={() => {
                  setAiDrawerOpen(false);
                  navigate("/nexora-ai");
                }}
                title="Open Full NEXORA AI Studio"
              >
                <Maximize2 size={15} />
              </button>
              <button
                type="button"
                onClick={() => setAiDrawerOpen(false)}
                title="Close"
              >
                <X size={17} />
              </button>
            </div>
          </div>

          <div className="nx-ai-drawer-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`nx-ai-msg ${msg.role === "user" ? "user" : "ai"}`}
              >
                <div className="nx-ai-msg-bubble">
                  {msg.text.split("\n").map((line, i) => (
                    <p key={i}>{line.replace(/\*\*/g, "").replace(/^###\s*/, "")}</p>
                  ))}
                </div>

                {msg.generatedRoadmap && (
                  <div className="nx-ai-roadmap-card">
                    <div>
                      <span className="nx-ai-mini-tag">ROADMAP READY</span>
                      <strong>{msg.generatedRoadmap.title}</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleApplyRoadmap(msg.generatedRoadmap)}
                    >
                      <Route size={13} /> Open in Roadmap
                    </button>
                  </div>
                )}

                {msg.recommendedVideos && msg.recommendedVideos.length > 0 && (
                  <div className="nx-ai-video-list">
                    <span className="nx-ai-mini-tag">DIRECT YOUTUBE POINTERS:</span>
                    {msg.recommendedVideos.map((v) => (
                      <div key={v.videoId} className="nx-ai-video-item">
                        <div className="nx-ai-video-info">
                          <strong>{v.skill || "Tutorial"}: {v.title}</strong>
                          <small>{v.channel} • {v.estimatedTime || "Full Course"}</small>
                        </div>
                        <div className="nx-ai-video-btns">
                          <button
                            type="button"
                            className="nx-ai-watch-btn"
                            onClick={() => openVideoPlayer(v)}
                          >
                            <Play size={12} /> Watch in App
                          </button>
                          <a
                            href={`https://www.youtube.com/watch?v=${v.videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nx-ai-ext-link"
                            title="Open on YouTube"
                          >
                            <ExternalLink size={12} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {msg.suggestedPrompts && msg.suggestedPrompts.length > 0 && (
                  <div className="nx-ai-prompt-chips">
                    {msg.suggestedPrompts.map((p) => (
                      <button
                        type="button"
                        key={p}
                        onClick={() => sendPrompt(p)}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {thinking && (
              <div className="nx-ai-thinking">
                <Sparkles size={14} className="nx-spin" />
                <span>NEXORA AI is synthesizing your career roadmap & video pointers...</span>
              </div>
            )}
          </div>

          <form
            className="nx-ai-drawer-input"
            onSubmit={(e) => {
              e.preventDefault();
              sendPrompt(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask NEXORA AI for any skill roadmap or YouTube course..."
            />
            <button type="submit" disabled={thinking || !input.trim()}>
              <Send size={15} />
            </button>
          </form>
        </aside>
      )}
    </>
  );
}

