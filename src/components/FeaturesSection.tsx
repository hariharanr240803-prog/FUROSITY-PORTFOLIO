"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeDCard from "./ThreeDCard";
import {
  Users,
  Headphones,
  Layers,
  MessageSquare,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left column reveal
      gsap.from(".features-left-col", {
        scrollTrigger: {
          trigger: ".features-left-col",
          start: "top 85%",
        },
        opacity: 0,
        x: -40,
        duration: 0.9,
        ease: "power3.out",
      });

      // 6 Feature cards staggered reveal
      gsap.from(".feature-card-item", {
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 82%",
        },
        opacity: 0,
        y: 35,
        stagger: 0.1,
        duration: 0.75,
        ease: "back.out(1.2)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "User-Centric Approach",
      icon: Users,
      color: "text-blue-400 bg-blue-950/60 border-blue-500/40 shadow-[0_0_15px_rgba(37,99,235,0.25)]",
    },
    {
      title: "End-to-End Support",
      icon: Headphones,
      color: "text-white bg-[#0A0A0C] border-blue-500/40 shadow-[0_0_15px_rgba(37,99,235,0.25)]",
    },
    {
      title: "Modern Tech Stack",
      icon: Layers,
      color: "text-blue-300 bg-blue-950/60 border-blue-400/40 shadow-[0_0_15px_rgba(59,130,246,0.35)]",
    },
    {
      title: "Transparent Communication",
      icon: MessageSquare,
      color: "text-blue-400 bg-[#0A0A0C] border-blue-400/40 shadow-[0_0_15px_rgba(37,99,235,0.25)]",
    },
    {
      title: "Quality & Reliability",
      icon: ShieldCheck,
      color: "text-emerald-400 bg-emerald-950/40 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]",
    },
    {
      title: "Long-Term Partnership",
      icon: HeartHandshake,
      color: "text-sky-300 bg-blue-950/60 border-blue-400/30 shadow-[0_0_15px_rgba(56,189,248,0.2)]",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-10 py-24 md:py-32 bg-transparent overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-blue-500/10 to-transparent blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Copy */}
          <div className="features-left-col lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0C]/80 border border-blue-600/30 text-blue-400 text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-[0_0_12px_rgba(37,99,235,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>WHY CHOOSE FUROSITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
              More Than <br />
              Development <br />
              A True{" "}
              <span className="bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                Partner
              </span>
            </h2>
            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
              We&apos;re a small team with a big vision — to build solutions that
              make a real difference.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
              <span className="text-xs font-mono text-[#94A3B8]">
                100% Client Retention on Multi-Phase Products
              </span>
            </div>
          </div>

          {/* Right Column: 6 Floating 3D Translucent Dark Glass Feature Cards */}
          <div className="features-grid lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="feature-card-item">
                  <ThreeDCard
                    depth={15}
                    maxTilt={8}
                    className="rounded-2xl h-full"
                  >
                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#0A0A0C]/70 backdrop-blur-xl border border-blue-600/25 hover:border-blue-500/50 shadow-xl shadow-black/50 hover:shadow-[0_0_25px_rgba(37,99,235,0.25)] transition-all duration-300 group">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </span>
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
