'use client';

import React, { useState } from 'react';

interface ChiaroscuroLinkProps {
  text: string;
  href: string;
  className?: string;
}

export function ChiaroscuroLink({ text, href, className = '' }: ChiaroscuroLinkProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Calculate cursor position relative to the center of the text link
    const x = (e.clientX - rect.left - rect.width / 2) / 4;
    const y = (e.clientY - rect.top - rect.height / 2) / 4;
    setOffset({ x: -x, y: -y }); // Invert direction to project light source
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`text-black inline-block select-none cursor-pointer transition-all duration-150 ease-out ${className}`}
      style={{
        textShadow: `${offset.x}px ${offset.y}px 0px rgba(0, 0, 0, 0.85), ${offset.x * 2}px ${offset.y * 2}px 15px rgba(52, 152, 219, 0.4)`,
      }}
    >
      {text}
    </a>
  );
}
