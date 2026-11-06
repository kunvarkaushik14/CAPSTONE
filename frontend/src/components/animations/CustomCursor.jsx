import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!finePointer || reducedMotion) return;

    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);

      const target = event.target;
      setInteractive(
        Boolean(target.closest("a, button, input, textarea, select"))
      );
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("pointermove", handleMove);
    document.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`custom-cursor ${visible ? "cursor-visible" : ""} ${
        interactive ? "cursor-interactive" : ""
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`
      }}
    />
  );
}
