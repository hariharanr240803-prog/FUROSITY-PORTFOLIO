"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeDCard from "./ThreeDCard";
import { Lightbulb, Layout, Code, TrendingUp, Sparkles, Rocket } from "lucide-react";

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from(".process-header", {
        scrollTrigger: {
          trigger: ".process-header",
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
      });

      // Steps staggered reveal
      gsap.from(".process-step-item", {
        scrollTrigger: {
          trigger: ".process-steps-grid",
          start: "top 82%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.16,
        duration: 0.85,
        ease: "back.out(1.15)",
      });

      // Rocket flight floating oscillation
      gsap.to(".process-rocket-badge", {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: "01",
      title: "Understand Your Goals",
      icon: Lightbulb,
      description: "Deep dive into your core objectives, target audience, and key performance metrics.",
      accent: "text-blue-400",
      nodeGlow: "border-blue-500/40 bg-blue-950/60 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.35)]",
    },
    {
      num: "02",
      title: "Plan & Design",
      icon: Layout,
      description: "Interactive architecture, wireframes, and design system mapped for scale.",
      accent: "text-white",
      nodeGlow: "border-blue-400/50 bg-[#0A0A0C]/80 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]",
    },
    {
      num: "03",
      title: "Develop & Deploy",
      icon: Code,
      description: "High-velocity modern engineering with automated CI/CD and rigorous QA testing.",
      accent: "text-blue-300",
      nodeGlow: "border-blue-600/50 bg-blue-950/60 text-blue-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]",
    },
    {
      num: "04",
      title: "Scale & Grow",
      icon: TrendingUp,
      description: "Continuous telemetry, performance tuning, and agile growth support.",
      accent: "text-blue-400",
      nodeGlow: "border-blue-500/40 bg-[#0A0A0C]/80 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.35)]",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative z-10 py-28 md:py-36 text-white bg-transparent overflow-hidden"
    >
      {/* Ambient Cosmic Nebulae */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-blue-500/10 to-transparent rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[500px] bg-gradient-to-tl from-blue-950/25 via-blue-600/15 to-transparent rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="process-header max-w-2xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-600/30 bg-[#0A0A0C]/80 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>OUR PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            A Simple Path <br />
            from Idea to{" "}
            <span className="bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(37,99,235,0.4)]">
              Impact
            </span>
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg font-normal leading-relaxed">
            We turn your vision into reality with a clear, collaborative, and
            transparent development process.
          </p>
        </div>

        {/* 3D Flight Path / Continuous Glowing Trajectory Light-Stream */}
        <div className="relative">
          {/* Glowing Trajectory Stream */}
          <div className="hidden lg:block absolute top-10 left-10 right-10 h-28 -z-0 pointer-events-none">
            <svg
              viewBox="0 0 1000 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
            >
              <defs>
                <linearGradient id="neonFlightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.8" />
                  <stop offset="35%" stopColor="#2563EB" stopOpacity="0.95" />
                  <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.85" />
                </linearGradient>
              </defs>
              <path
                d="M 50 65 Q 260 10, 500 60 T 950 30"
                stroke="url(#neonFlightGrad)"
                strokeWidth="3.5"
                strokeDasharray="10 8"
                className="opacity-80 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
              />
            </svg>

            {/* Flying 3D Rocket Mascot along trajectory */}
            <div className="process-rocket-badge absolute top-2 left-[58%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
              <div className="p-2.5 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 shadow-[0_0_25px_rgba(37,99,235,0.8)] text-white">
                <Rocket className="w-4 h-4 rotate-45 stroke-[2.5]" />
              </div>
              <span className="w-16 h-[2px] bg-gradient-to-r from-blue-400 to-transparent blur-[1px]" />
            </div>
          </div>

          {/* 4 Steps Row with 3D Tilt Cards & ScrollTrigger */}
          <div className="process-steps-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="process-step-item">
                  <ThreeDCard
                    depth={20}
                    maxTilt={8}
                    className="rounded-3xl h-full"
                  >
                    <div className="p-7 rounded-3xl bg-[#0A0A0C]/70 border border-blue-600/25 hover:border-blue-500/50 backdrop-blur-xl shadow-xl shadow-black/50 hover:shadow-[0_0_35px_rgba(37,99,235,0.25)] transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left h-full group">
                      {/* Glowing Numeric Badge */}
                      <div className="w-full flex items-center justify-between mb-6">
                        <div
                          className={`w-14 h-14 rounded-2xl border ${step.nodeGlow} flex items-center justify-center relative bg-[#050505]/90 backdrop-blur-md group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-2xl font-black font-mono text-blue-900 group-hover:text-blue-400 transition-colors">
                          {step.num}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[#94A3B8] text-sm leading-relaxed font-normal">
                        {step.description}
                      </p>

                      <div className="mt-6 pt-4 border-t border-blue-900/30 w-full flex items-center justify-between text-[11px] font-mono text-[#94A3B8]/80">
                        <span>Phase {step.num}</span>
                        <span className="text-blue-400 group-hover:underline">Milestone</span>
                      </div>
                    </div>
                  </ThreeDCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
