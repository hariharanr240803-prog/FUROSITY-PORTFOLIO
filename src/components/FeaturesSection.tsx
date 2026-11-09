"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
      gsap.from(".features-left-col", {
        scrollTrigger: {
          trigger: ".features-left-col",
          start: "top 85%",
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".feature-card-item", {
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 82%",
        },
        opacity: 0,
        y: 25,
        stagger: 0.08,
        duration: 0.7,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "User-Centric Approach",
      icon: Users,
      color: "text-cyan-600 bg-cyan-50/80 border-cyan-200",
    },
    {
      title: "End-to-End Support",
      icon: Headphones,
      color: "text-purple-600 bg-purple-50/80 border-purple-200",
    },
    {
      title: "Modern Tech Stack",
      icon: Layers,
      color: "text-indigo-600 bg-indigo-50/80 border-indigo-200",
    },
    {
      title: "Transparent Communication",
      icon: MessageSquare,
      color: "text-purple-600 bg-purple-50/80 border-purple-200",
    },
    {
      title: "Quality & Reliability",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50/80 border-emerald-200",
    },
    {
      title: "Long-Term Partnership",
      icon: HeartHandshake,
      color: "text-violet-600 bg-violet-50/80 border-violet-200",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-10 py-20 md:py-28 bg-[#FFFFFF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Copy */}
          <div className="features-left-col lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-600 text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>WHY CHOOSE FUROSITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              More Than <br />
              Development <br />
              A True{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Partner
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We&apos;re a small team with a big vision — to build solutions that
              make a real difference.
            </p>
          </div>

          {/* Right Column: 6 Elevated Clean White Cards (2x3 Grid) */}
          <div className="features-grid lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="feature-card-item">
                  <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-md shadow-blue-900/5 hover:shadow-xl hover:shadow-blue-600/10 hover:-translate-y-1 transition-all duration-300 group">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${feature.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
