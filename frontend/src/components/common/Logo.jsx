import React from "react";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo({ light = false, compact = false }) {
  return (
    <Link
      to="/"
      className={`nexora-logo ${light ? "logo-light" : ""}`}
      aria-label="NEXORA home"
    >
      <span className="logo-mark">
        <Sparkles size={compact ? 16 : 19} />
      </span>
      {!compact && (
        <span className="logo-word">
          NEXORA<span className="logo-dot">.</span>
        </span>
      )}
    </Link>
  );
}
