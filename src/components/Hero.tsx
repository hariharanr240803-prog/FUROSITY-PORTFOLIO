"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroRoomIllustration from "./HeroRoomIllustration";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Gentle entrance using fromTo to guarantee 100% opacity when done
      gsap.fromTo(
        ".hero-anim-item",
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "all", // Clears GSAP inline styles so elements remain fully visible
        }
      );

      gsap.fromTo(
        ".hero-illustration-wrap",
        { scale: 0.96, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          clearProps: "all",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative z-10 pt-6 pb-10 md:pt-10 md:pb-14 overflow-hidden bg-gradient-to-b from-[#EEF4FF] via-[#F8FAFF] to-[#F1F5FD]"
    >
      {/* Soft Daylight Ambient Radial Glows */}
      <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-gradient-to-br from-blue-300/20 via-indigo-200/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-purple-200/15 via-blue-200/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-5">
            
            {/* 1. Top Badge */}
            <div className="hero-anim-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-600 text-xs font-bold tracking-wider uppercase shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>IDEAS TODAY FOR A BRIGHTER TOMORROW</span>
            </div>

            {/* 2. Bold Headline */}
            <h1 className="hero-anim-item text-5xl sm:text-6xl lg:text-[4.2rem] font-black tracking-tight text-slate-950 leading-[1.08]">
              Curiosity{" "}
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Builds
              </span>{" "}
              <br />
              What&apos;s Next.
            </h1>

            {/* 3. Subtitle in Clean Dark Slate */}
            <p className="hero-anim-item text-base sm:text-lg text-slate-600 max-w-lg font-normal leading-relaxed">
              Furosity builds modern web products, AI solutions and automation
              tools that turn ideas into real-world impact.
            </p>

            {/* 4. Action Buttons (Both Black Primary & White Play Button) */}
            <div className="hero-anim-item relative z-20 flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#0f172a] hover:bg-blue-600 shadow-md hover:shadow-blue-600/25 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Let&apos;s Build Together</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#story"
                className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-xs hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Our Story</span>
              </a>
            </div>

            {/* 5. Metrics Counter Row: 3 Clean Stats on Light Background */}
            <div className="hero-anim-item grid grid-cols-3 gap-6 pt-5 border-t border-slate-200/80 w-full max-w-lg">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  Projects Delivered
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  Client Satisfaction
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                  4
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  Passionate Developers
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 3D FUTURISTIC WORKSTATION ROOM POD ================= */}
          <div className="hero-illustration-wrap lg:col-span-6 relative mt-4 lg:mt-0">
            <HeroRoomIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}
