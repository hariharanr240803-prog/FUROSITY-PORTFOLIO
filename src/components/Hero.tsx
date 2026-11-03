"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeDHeroScene from "./ThreeDHeroScene";
import ThreeDCard from "./ThreeDCard";
import { ArrowRight, Play, Sparkles, Activity, Layers, Cpu } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const ctaBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // 1. Top Badge reveal
      tl.from(".hero-badge", {
        opacity: 0,
        y: -18,
        scale: 0.95,
        duration: 0.7,
      })
      // 2. Headline smooth reveal (no overflow clipping)
      .from(".hero-headline", {
        opacity: 0,
        y: 25,
        duration: 0.8,
      }, "-=0.4")
      // 3. Subtitle slight upward movement and fade-in
      .from(".hero-subtitle", {
        opacity: 0,
        y: 18,
        duration: 0.7,
      }, "-=0.5")
      // 4. Staggered CTA buttons reveal
      .from(".hero-cta-btn", {
        opacity: 0,
        y: 18,
        scale: 0.97,
        stagger: 0.12,
        duration: 0.6,
      }, "-=0.4")
      // 5. Stat cards staggered reveal
      .from(".hero-stat-card", {
        opacity: 0,
        y: 22,
        stagger: 0.1,
        duration: 0.6,
      }, "-=0.4")
      // 6. Right 3D showcase card entrance
      .from(".hero-showcase", {
        opacity: 0,
        scale: 0.96,
        duration: 0.8,
      }, "-=0.5");

      // Continuous subtle floating animation for hero visual
      gsap.to(".hero-showcase", {
        y: -8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Subtle breathing aura glow for the primary CTA button
      gsap.to(".hero-primary-cta", {
        boxShadow: "0 0 35px rgba(37, 99, 255, 0.75)",
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Statistics live counter animation on scroll
      const statElements = heroRef.current?.querySelectorAll<HTMLElement>(".stat-number");
      if (statElements) {
        statElements.forEach((el) => {
          const targetVal = parseFloat(el.getAttribute("data-target") || "0");
          const counter = { val: 0 };
          gsap.to(counter, {
            val: targetVal,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              toggleActions: "play none none none",
            },
            onUpdate: () => {
              el.textContent = Math.round(counter.val).toString();
            },
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Magnetic hover effect for primary CTA button
  const handleCtaMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ctaBtnRef.current) return;
    const rect = ctaBtnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(ctaBtnRef.current, {
      x: x * 0.28,
      y: y * 0.28,
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
    <section
      ref={heroRef}
      id="home"
      className="relative z-10 pt-24 pb-20 md:pt-32 md:pb-28 bg-transparent"
    >
      {/* Soft Ambient Cosmic Glow Orbs */}
      <div className="hero-glow-orb absolute top-10 right-10 w-[700px] h-[700px] bg-gradient-to-bl from-blue-600/15 via-blue-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" style={{ zIndex: 1 }} />
      <div className="hero-glow-orb absolute top-36 left-10 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-900/20 via-blue-600/15 to-transparent rounded-full blur-[160px] pointer-events-none" style={{ zIndex: 1 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6 relative">
            {/* Minimal text-readability scrim */}
            <div className="absolute -inset-x-8 -inset-y-6 bg-gradient-to-r from-[#050505]/80 via-[#050505]/40 to-transparent blur-2xl pointer-events-none rounded-3xl" style={{ zIndex: -1 }} />

            {/* 1. Top Badge with Pulsing Beacon */}
            <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0A0A0C]/80 border border-blue-600/30 text-blue-400 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:border-blue-500/60 transition-all backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500 shadow-[0_0_8px_#3B82F6]"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>IDEAS TODAY FOR A BRIGHTER TOMORROW</span>
            </div>

            {/* 2. Headline with Clean Unclipped Typography */}
            <h1 className="hero-headline text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_16px_rgba(5,5,5,0.9)]">
              Curiosity{" "}
              <span className="bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(37,99,235,0.5)] animate-gradient-text inline-block">
                Builds
              </span>{" "}
              <br className="hidden sm:inline" />
              What&apos;s Next.
            </h1>

            {/* 3. Subtitle in Muted Slate */}
            <p className="hero-subtitle text-base sm:text-lg text-[#94A3B8] max-w-xl font-normal leading-relaxed">
              Furosity builds modern web products, AI solutions and automation
              tools that turn ideas into real-world impact.
            </p>

            {/* 4. Action Triggers */}
            <div className="flex flex-wrap items-center gap-4 pt-2 relative z-20">
              <a
                ref={ctaBtnRef}
                onMouseMove={handleCtaMouseMove}
                onMouseLeave={handleCtaMouseLeave}
                href="#contact"
                className="hero-cta-btn hero-primary-cta group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 shadow-[0_0_25px_rgba(37,99,235,0.5)] border border-blue-400/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>Let&apos;s Build Together</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#story"
                className="hero-cta-btn group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-sm font-semibold text-[#94A3B8] hover:text-white bg-[#0A0A0C]/70 hover:bg-[#0A0A0C] border border-blue-600/25 hover:border-blue-500/50 backdrop-blur-xl shadow-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.25)] transition-all active:scale-95"
              >
                <div className="w-8 h-8 rounded-full bg-blue-950/60 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.3)]">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Our Story</span>
              </a>
            </div>

            {/* 5. Metrics Counter Row: 3D Frosted Dark Glass Cards */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-blue-900/30 w-full max-w-xl">
              {/* Stat 1 */}
              <ThreeDCard depth={18} maxTilt={8} className="hero-stat-card rounded-2xl">
                <div className="p-4 rounded-2xl bg-[#0A0A0C]/70 border border-blue-600/25 shadow-xl shadow-black/50 backdrop-blur-xl hover:border-blue-500/50 transition-all group">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    <span className="stat-number" data-target="10">10</span>+
                  </div>
                  <div className="text-xs text-[#94A3B8] font-medium mt-1">
                    Projects Delivered
                  </div>
                </div>
              </ThreeDCard>

              {/* Stat 2 */}
              <ThreeDCard depth={18} maxTilt={8} className="hero-stat-card rounded-2xl">
                <div className="p-4 rounded-2xl bg-[#0A0A0C]/70 border border-blue-600/25 shadow-xl shadow-black/50 backdrop-blur-xl hover:border-blue-500/50 transition-all group">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    <span className="stat-number" data-target="100">100</span>%
                  </div>
                  <div className="text-xs text-[#94A3B8] font-medium mt-1">
                    Client Satisfaction
                  </div>
                </div>
              </ThreeDCard>

              {/* Stat 3 */}
              <ThreeDCard depth={18} maxTilt={8} className="hero-stat-card rounded-2xl">
                <div className="p-4 rounded-2xl bg-[#0A0A0C]/70 border border-blue-600/25 shadow-xl shadow-black/50 backdrop-blur-xl hover:border-blue-500/50 transition-all group">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    <span className="stat-number" data-target="4">4</span>
                  </div>
                  <div className="text-xs text-[#94A3B8] font-medium mt-1">
                    Passionate Developers
                  </div>
                </div>
              </ThreeDCard>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 3D FLOATING GLASS SHOWCASE CARD ================= */}
          <div className="hero-showcase lg:col-span-6 relative mt-6 lg:mt-0 z-20">
            {/* Ambient Cobalt/Electric Blue Rim Glow */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600/25 via-indigo-600/20 to-blue-500/20 rounded-3xl blur-3xl opacity-80 pointer-events-none -z-10" />

            <ThreeDCard depth={20} maxTilt={6} className="rounded-3xl">
              <div className="rounded-3xl bg-[#0A0A0C]/80 border border-blue-600/30 backdrop-blur-2xl shadow-2xl p-4 sm:p-5 relative overflow-hidden group hover:border-blue-500/60 transition-all">
                {/* Showcase Top Status Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-blue-900/40">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="text-[11px] font-mono text-[#94A3B8] ml-2">furosity-core::v2.4</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/40 text-[11px] font-mono text-blue-400">
                    <Activity className="w-3 h-3 text-blue-400 animate-pulse" />
                    <span>Pipeline Active</span>
                  </div>
                </div>

                {/* 3D WebGL Workstation Viewport */}
                <div className="rounded-2xl overflow-hidden border border-blue-900/40 bg-[#050505]/95 relative">
                  <ThreeDHeroScene />
                </div>

                {/* Bottom Product Pipeline Tags */}
                <div className="mt-4 pt-3 border-t border-blue-900/40 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-[#94A3B8]">
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-white">BUILD</span>
                    <span className="text-blue-600">•</span>
                    <span className="text-blue-400">DESIGN</span>
                    <span className="text-blue-600">•</span>
                    <span className="text-[#94A3B8]">AUTOMATE</span>
                    <span className="text-blue-600">•</span>
                    <span className="text-blue-400">GROW</span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-mono text-[#94A3B8]">
                    <Cpu className="w-3 h-3 text-blue-400" />
                    <span>60 FPS WebGL</span>
                  </div>
                </div>
              </div>
            </ThreeDCard>
          </div>
        </div>
      </div>
    </section>
  );
}
