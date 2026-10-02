"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Follower Ring */}
      <motion.div
        className="absolute top-0 left-0 rounded-full border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (isHovered ? 28 : 18),
          y: mousePosition.y - (isHovered ? 28 : 18),
          width: isHovered ? 56 : 36,
          height: isHovered ? 56 : 36,
          scale: isClicking ? 0.8 : 1,
          borderColor: isHovered ? "rgba(0, 229, 255, 0.8)" : "rgba(2, 132, 199, 0.4)",
          backgroundColor: isHovered ? "rgba(0, 229, 255, 0.15)" : "rgba(3, 25, 30, 0.2)",
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
          mass: 0.5,
        }}
      />

      {/* Inner Precision Dot */}
      <motion.div
        className="absolute top-0 left-0 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#00e5ff]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isClicking ? 0.5 : isHovered ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      />
    </div>
  );
}