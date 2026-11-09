"use client";

import React from "react";
import Image from "next/image";

export default function HeroRoomIllustration() {
  return (
    <div className="relative w-full max-w-[680px] lg:max-w-[720px] mx-auto select-none flex items-center justify-center">
      {/* Atmospheric ambient glow reflecting the room neon and sunset lighting */}
      <div className="absolute inset-4 bg-gradient-to-tr from-blue-400/25 via-indigo-300/20 to-purple-400/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Pure 3D Diorama Artwork with Transparent Background */}
      <div className="relative w-full drop-shadow-[0_20px_45px_rgba(30,27,75,0.18)] transition-transform duration-500 hover:scale-[1.02]">
        <Image
          src="/hero_diorama_trimmed.png"
          alt="Furosity 3D Futuristic Robot Workspace Diorama: Robot Mascot, Sleeping Cat, Holographic Checklist, and Tech Books"
          width={1185}
          height={1022}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
          className="w-full h-auto object-contain pointer-events-none"
        />
      </div>
    </div>
  );
}
