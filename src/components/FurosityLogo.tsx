export default function FurosityLogo({
  className = "w-9 h-9",
  showGlow = true,
}: {
  className?: string;
  showGlow?: boolean;
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
    >
      {/* Standalone Ambient Deep Cobalt Blue Glow Aura */}
      {showGlow && (
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-blue-400/30 rounded-full blur-lg -z-10 pointer-events-none" />
      )}

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-[0_0_14px_rgba(37,99,235,0.6)]"
      >
        <defs>
          {/* 1. Pure White to Electric Blue (#3B82F6) to Deep Cobalt Blue (#2563EB) */}
          <linearGradient
            id="furoBladeCobalt"
            x1="20"
            y1="15"
            x2="85"
            y2="85"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#60A5FA" />
            <stop offset="65%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          {/* 2. Ribbon Inner Fold Gradient (Deep Black #050505 & Navy Depth) */}
          <linearGradient
            id="furoFoldDepth"
            x1="32"
            y1="22"
            x2="52"
            y2="54"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#1E3A8A" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0.95" />
          </linearGradient>

          {/* 3. Middle Blade Gradient */}
          <linearGradient
            id="furoFinGrad"
            x1="45"
            y1="45"
            x2="70"
            y2="52"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          {/* 4. Cosmic Orbit Ring Electric Blue Trail */}
          <linearGradient
            id="furoOrbitGrad"
            x1="15"
            y1="60"
            x2="85"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
            <stop offset="45%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#93C5FD" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>

          {/* 5. Specular Top Ridge Sheen */}
          <linearGradient
            id="furoSpecularSheen"
            x1="40"
            y1="22"
            x2="74"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#93C5FD" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* 6. Glowing Satellite Photon Filter */}
          <filter
            id="furoOrbGlow"
            x="-60%"
            y="-60%"
            width="220%"
            height="220%"
          >
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ================= 1. ANGLED COSMIC ORBIT RING ================= */}
        <ellipse
          cx="53"
          cy="43"
          rx="38"
          ry="19"
          transform="rotate(-27 53 43)"
          stroke="url(#furoOrbitGrad)"
          strokeWidth="2.4"
          strokeDasharray="162 30"
          strokeLinecap="round"
        />

        {/* ================= 2. ACCENT SATELLITE PARTICLE ================= */}
        <circle
          cx="77"
          cy="20"
          r="4.6"
          fill="#3B82F6"
          filter="url(#furoOrbGlow)"
        />
        <circle cx="77" cy="20" r="2.2" fill="#FFFFFF" />

        {/* ================= 3. INNER RIBBON FOLD (3D DEPTH) ================= */}
        <path
          d="M 38 23 C 45 25, 48 32, 47 42 C 45 49, 41 53, 37 55 C 35 45, 35 33, 38 23 Z"
          fill="url(#furoFoldDepth)"
        />

        {/* ================= 4. MAIN STEM (VERTICAL RIBBON) ================= */}
        <path
          d="M 38 23 C 33 29, 31 38, 32 50 L 32 80 C 32 82.5, 34.5 84, 37 83 L 44 79.5 C 45.5 78.8, 46.5 77.2, 46.5 75.5 L 46.5 56 C 46.5 48, 50 40, 56 34 L 44 38 C 39.5 35, 38 28, 38 23 Z"
          fill="url(#furoBladeCobalt)"
        />

        {/* ================= 5. UPPER AERODYNAMIC CURVED BLADE ================= */}
        <path
          d="M 38 23 C 45 21, 62 20.5, 76 21.5 C 78.5 21.7, 79 24, 76.8 25.8 C 69.5 31.8, 56 36, 44 38 Z"
          fill="url(#furoBladeCobalt)"
        />

        {/* ================= 6. SLEEK MIDDLE FIN ================= */}
        <path
          d="M 46 44.5 C 53 44, 62 44, 69 45.2 C 71 45.5, 71.5 47.5, 69.5 49 C 64.5 52.8, 55 54.5, 46 54.5 Z"
          fill="url(#furoFinGrad)"
        />

        {/* ================= 7. SPECULAR TOP SHEEN RIDGES ================= */}
        <path
          d="M 40 22.5 C 48 21.8, 62 21.8, 74 22.5"
          stroke="url(#furoSpecularSheen)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 47 45.5 C 53 45.2, 60 45.2, 66 45.8"
          stroke="url(#furoSpecularSheen)"
          strokeWidth="1.0"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
