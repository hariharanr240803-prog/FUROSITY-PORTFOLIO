"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FurosityLogo from "./FurosityLogo";
import ThreeDCard from "./ThreeDCard";
import ThreeDPlanet from "./ThreeDPlanet";
import { ArrowRight, Calendar, Heart, Sparkles } from "lucide-react";

export default function CtaFooterSection() {
  const footerRef = useRef<HTMLElement>(null);
  const ctaBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // CTA Left Content reveal on scroll
      gsap.from(".cta-left-content", {
        scrollTrigger: {
          trigger: ".cta-banner-container",
          start: "top 82%",
        },
        opacity: 0,
        y: 45,
        duration: 0.9,
        ease: "power3.out",
      });

      // Right 3D Signpost Card reveal on scroll
      gsap.from(".cta-signpost-card", {
        scrollTrigger: {
          trigger: ".cta-banner-container",
          start: "top 80%",
        },
        opacity: 0,
        x: 45,
        duration: 1,
        ease: "power3.out",
      });

      // Floating signpost animation
      gsap.to(".cta-signpost-card", {
        y: -7,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Footer columns staggered reveal on scroll
      gsap.from(".footer-column-item", {
        scrollTrigger: {
          trigger: ".footer-grid-container",
          start: "top 88%",
        },
        opacity: 0,
        y: 35,
        stagger: 0.12,
        duration: 0.85,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleCtaMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ctaBtnRef.current) return;
    const rect = ctaBtnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(ctaBtnRef.current, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleCtaMouseLeave = () => {
    if (!ctaBtnRef.current) return;
    gsap.to(ctaBtnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative z-10 bg-transparent text-white overflow-hidden"
    >
      {/* ================= TOP CTA BANNER ================= */}
      <div className="cta-banner-container relative py-28 md:py-36 overflow-hidden">
        {/* Soft Sky Gradient & Ambient Cosmic Glow */}
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-950/25 via-blue-600/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[450px] bg-gradient-to-tl from-blue-600/15 via-blue-500/10 to-transparent blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy & Actions */}
            <div className="cta-left-content lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-600/30 bg-[#0A0A0C]/80 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase mb-5 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>LET&apos;S BUILD TOGETHER</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-5">
                Ready to Build <br />
                <span className="bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                  What&apos;s Next?
                </span>
              </h2>

              <p className="text-[#94A3B8] text-base sm:text-lg max-w-xl font-normal leading-relaxed mb-8">
                Have a project in mind? Let&apos;s turn your ideas into impactful
                solutions.
              </p>

              {/* Action Buttons with Magnetic Hover */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  ref={ctaBtnRef}
                  onMouseMove={handleCtaMouseMove}
                  onMouseLeave={handleCtaMouseLeave}
                  href="mailto:contact@furosity.com"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(37,99,235,0.8)] border border-blue-400/40 hover:scale-105 active:scale-95 transition-all group"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm font-semibold text-[#94A3B8] hover:text-white bg-[#0A0A0C]/80 hover:bg-[#0A0A0C] border border-blue-600/25 hover:border-blue-500/50 shadow-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.25)] transition-all active:scale-95 backdrop-blur-xl"
                >
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>Book a Free Call</span>
                </a>
              </div>
            </div>

            {/* Right Graphic: 3D Rustic Signpost & Twilight Horizon */}
            <div className="cta-signpost-card lg:col-span-5 relative flex justify-center lg:justify-end">
              <ThreeDCard
                depth={32}
                maxTilt={8}
                className="relative rounded-3xl bg-[#0A0A0C]/80 border border-blue-600/25 p-7 sm:p-8 shadow-2xl shadow-black/60 w-full max-w-md backdrop-blur-xl group hover:border-blue-500/50 transition-all"
              >
                <div className="[transform-style:preserve-3d]">
                  {/* Subtle Horizon Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-950/20 to-blue-600/15 rounded-3xl pointer-events-none" />

                  {/* 3D Signpost Vertical Post */}
                  <div className="relative flex flex-col items-center mb-6 [transform:translateZ(25px)]">
                    {/* Signpost Pole */}
                    <div className="absolute top-2 bottom-0 w-3 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 rounded-full shadow-inner" />

                    {/* Planks */}
                    <div className="relative z-10 flex flex-col items-center space-y-3 w-full">
                      <div className="w-48 py-2 px-4 rounded-lg bg-gradient-to-r from-amber-900/90 via-amber-800/90 to-amber-900/90 border border-amber-500/50 text-amber-200 font-mono font-bold text-xs tracking-widest text-center shadow-[0_4px_12px_rgba(120,53,15,0.4)] hover:scale-105 transition-transform flex items-center justify-between">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]" />
                        <span>IDEAS</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]" />
                      </div>

                      <div className="w-56 py-2 px-4 rounded-lg bg-gradient-to-r from-amber-900/90 via-amber-800/90 to-amber-900/90 border border-amber-500/50 text-amber-200 font-mono font-bold text-xs tracking-widest text-center shadow-[0_4px_12px_rgba(120,53,15,0.4)] hover:scale-105 transition-transform flex items-center justify-between">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]" />
                        <span>TECHNOLOGY</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]" />
                      </div>

                      <div className="w-52 py-2 px-4 rounded-lg bg-gradient-to-r from-amber-900/90 via-amber-800/90 to-amber-900/90 border border-amber-500/50 text-amber-200 font-mono font-bold text-xs tracking-widest text-center shadow-[0_4px_12px_rgba(120,53,15,0.4)] hover:scale-105 transition-transform flex items-center justify-between">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]" />
                        <span>PEOPLE</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24]" />
                      </div>

                      <div className="w-64 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 border-2 border-amber-400/60 text-amber-100 font-mono font-black text-xs tracking-widest text-center shadow-[0_6px_20px_rgba(217,119,6,0.4)] hover:scale-105 transition-transform flex items-center justify-between">
                        <span className="w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_8px_#fde68a]" />
                        <span>A BRIGHTER TOMORROW</span>
                        <span className="w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_8px_#fde68a]" />
                      </div>
                    </div>
                  </div>

                  {/* Robot Silhouette on Cliff Ledge + Tagline */}
                  <div className="pt-4 border-t border-blue-900/30 flex items-center justify-between [transform:translateZ(20px)]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-blue-950/60 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.3)]">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
                      </div>
                      <span className="text-[11px] font-mono text-[#94A3B8]">Robot Explorer</span>
                    </div>

                    <div className="text-right font-mono text-xs text-blue-400 italic opacity-95 tracking-wide">
                      ideas today for a brighter tomorrow ♡
                    </div>
                  </div>
                </div>
              </ThreeDCard>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FULL 5-COLUMN FOOTER ================= */}
      <div className="footer-grid-container py-16 bg-[#050505]/95 backdrop-blur-xl border-t border-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-900/20 items-center">
            {/* Column 1: Brand & Tagline */}
            <div className="footer-column-item lg:col-span-4">
              <a
                href="#home"
                className="flex items-center gap-3 group mb-4 focus:outline-none"
              >
                <FurosityLogo className="w-9 h-9 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_14px_rgba(37,99,235,0.55)]" />
                <span className="font-sans font-black tracking-wider text-xl sm:text-2xl text-white group-hover:text-blue-400 transition-colors leading-none">
                  FUROSITY
                </span>
              </a>

              <div className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase mb-2">
                IDEAS INTO IMPACT
              </div>

              <p className="text-sm text-[#94A3B8] font-mono mb-4 max-w-sm">
                ideas today for a brighter tomorrow.
              </p>

              <div className="text-[11px] font-mono text-[#94A3B8]/60 tracking-wider mb-5">
                BUILD • DESIGN • AUTOMATE • GROW
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                <span>Systems All Operational</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-column-item lg:col-span-2">
              <div className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase mb-4">
                Quick Links
              </div>
              <ul className="space-y-2.5 text-sm text-[#94A3B8]/80">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#work" className="hover:text-white transition-colors">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="footer-column-item lg:col-span-2">
              <div className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase mb-4">
                Services
              </div>
              <ul className="space-y-2.5 text-sm text-[#94A3B8]/80">
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Product Design
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    AI &amp; Automation
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Cloud &amp; DevOps
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Follow Us (Inline Crisp SVGs) */}
            <div className="footer-column-item lg:col-span-2">
              <div className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase mb-4">
                Follow Us
              </div>
              <div className="flex items-center gap-3 text-[#94A3B8]">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#0A0A0C] border border-blue-900/50 flex items-center justify-center hover:text-white hover:border-blue-500/60 hover:shadow-[0_0_12px_rgba(37,99,235,0.5)] transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#0A0A0C] border border-blue-900/50 flex items-center justify-center hover:text-white hover:border-blue-500/60 hover:shadow-[0_0_12px_rgba(37,99,235,0.5)] transition-all shadow-sm"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#0A0A0C] border border-blue-900/50 flex items-center justify-center hover:text-white hover:border-blue-500/60 hover:shadow-[0_0_12px_rgba(37,99,235,0.5)] transition-all shadow-sm"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                {/* X (Twitter) */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#0A0A0C] border border-blue-900/50 flex items-center justify-center hover:text-white hover:border-blue-500/60 hover:shadow-[0_0_12px_rgba(37,99,235,0.5)] transition-all shadow-sm"
                  aria-label="Twitter / X"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 5: Interactive 3D Three.js Saturn Planet */}
            <div className="footer-column-item lg:col-span-2 flex flex-col items-center justify-center">
              <ThreeDPlanet />
              <div className="text-[10px] font-mono text-blue-400 tracking-wider uppercase opacity-85 mt-1">
                Cosmic Orbit
              </div>
            </div>
          </div>

          {/* Sub-footer Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]/60">
            <p>&copy; 2025 Furosity. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <span>|</span>
              <span className="flex items-center gap-1 text-[#94A3B8]">
                Built with Curiosity <Heart className="w-3 h-3 text-blue-400 fill-current" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
