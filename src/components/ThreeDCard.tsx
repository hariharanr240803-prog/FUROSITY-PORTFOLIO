"use client";

import React, { useRef, useState, useCallback } from "react";

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  maxTilt?: number;
  glare?: boolean;
}

export default function ThreeDCard({
  children,
  className = "",
  depth = 30,
  maxTilt = 10,
  glare = true,
}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [glareStyle, setGlareStyle] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const tiltX = ((y - centerY) / centerY) * -maxTilt;
      const tiltY = ((x - centerX) / centerX) * maxTilt;

      setTransformStyle(
        `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateZ(${depth}px)`
      );

      if (glare) {
        setGlareStyle({
          x: (x / rect.width) * 100,
          y: (y / rect.height) * 100,
          opacity: 0.18,
        });
      }
    },
    [depth, maxTilt, glare]
  );

  const handleMouseLeave = useCallback(() => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)");
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out",
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Optional Specular Glare Sheen */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            opacity: glareStyle.opacity,
            background: `radial-gradient(circle at ${glareStyle.x}% ${glareStyle.y}%, rgba(255,255,255,0.45), transparent 70%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}

