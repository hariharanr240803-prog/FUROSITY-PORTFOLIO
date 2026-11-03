"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeDCard from "./ThreeDCard";
import { ArrowRight, Code, Palette, Bot, Cloud, Sparkles } from "lucide-react";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal on scroll
      gsap.from(".services-header", {
        scrollTrigger: {
          trigger: ".services-header",
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
      });

      // Staggered cards reveal
      gsap.from(".service-card-item", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 82%",
        },
        opacity: 0,
        y: 55,
        stagger: 0.16,
        duration: 0.9,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Modern, scalable and high-performance web applications.",
      icon: Code,
      graphic3D: (
        <div className="w-full h-16 rounded-xl bg-[#050505]/90 border border-blue-900/40 p-2.5 shadow-md flex flex-col justify-between mb-5 group-hover:border-blue-500/50 transition-colors">
          <div className="flex items-center justify-between border-b border-blue-900/30 pb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] font-mono text-blue-400">200 OK</span>
          </div>
          <div className="flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
            <span>&lt;Next.js 16 /&gt;</span>
            <span className="text-emerald-400 font-bold">Fast</span>
          </div>
        </div>
      ),
    },
    {
      title: "Product Design",
      description: "User-centric designs that create meaningful experiences.",
      icon: Palette,
      graphic3D: (
        <div className="w-full h-16 rounded-xl bg-[#050505]/90 border border-blue-900/40 p-2.5 shadow-md flex items-center justify-between mb-5 group-hover:border-blue-500/50 transition-colors relative overflow-hidden">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-500/40 flex items-center justify-center">
              <span className="w-3.5 h-3.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_#3B82F6]" />
            </div>
            <div className="text-[10px] font-mono text-[#94A3B8]">
              <div>Design System</div>
              <div className="text-blue-400/80">Atomic UI</div>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0A0A0C] border border-blue-900/50 text-[#94A3B8]">
            Figma
          </span>
        </div>
      ),
    },
    {
      title: "AI & Automation",
      description: "Custom AI agents, workflows and LLM-powered solutions.",
      icon: Bot,
      graphic3D: (
        <div className="w-full h-16 rounded-xl bg-[#050505]/90 border border-blue-900/40 p-2.5 shadow-md flex items-center justify-between mb-5 group-hover:border-blue-500/50 transition-colors">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-500/40 text-blue-400 flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(59,130,246,0.3)]">
              AI
            </div>
            <div className="text-[10px] font-mono text-[#94A3B8]">
              <div>Autonomous</div>
              <div className="text-blue-400/80">LLM Workflow</div>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0A0A0C] border border-blue-900/50 text-blue-400">
            Agents
          </span>
        </div>
      ),
    },
    {
      title: "Cloud & DevOps",
      description: "Reliable deployment, monitoring and scalable infrastructure.",
      icon: Cloud,
      graphic3D: (
        <div className="w-full h-16 rounded-xl bg-[#050505]/90 border border-blue-900/40 p-2.5 shadow-md flex flex-col justify-center gap-1.5 mb-5 group-hover:border-blue-500/50 transition-colors">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#94A3B8]">
            <span>Server Uptime</span>
            <span className="text-blue-400 font-bold">99.99%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-[#0A0A0C] overflow-hidden border border-blue-900/40">
            <div className="w-11/12 h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-10 py-24 md:py-32 bg-transparent overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-blue-500/10 to-transparent blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="services-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0C]/80 border border-blue-600/30 text-blue-400 text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-[0_0_12px_rgba(37,99,235,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>WHAT WE DO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              From Ideas to <br />
              Powerful{" "}
              <span className="bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                Solutions
              </span>
            </h2>
          </div>

          <p className="text-[#94A3B8] text-base sm:text-lg max-w-md font-normal leading-relaxed">
            We combine technology, design and automation to create scalable,
            user-centric solutions for businesses worldwide.
          </p>
        </div>

        {/* 4 Cards Grid with 3D Tilt & Staggered ScrollTrigger */}
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="service-card-item">
                <ThreeDCard
                  depth={22}
                  maxTilt={10}
                  className="rounded-3xl h-full"
                >
                  <div className="group relative rounded-3xl bg-[#0A0A0C]/70 backdrop-blur-xl border border-blue-600/25 hover:border-blue-500/50 p-7 sm:p-8 shadow-xl shadow-black/50 hover:shadow-[0_0_35px_rgba(37,99,235,0.25)] transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
                    {/* Gradient Top Hover Highlight Line */}
                    <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Top: 3D Mini Viewport Graphic */}
                    <div>
                      {service.graphic3D}

                      {/* Icon Container */}
                      <div className="w-12 h-12 rounded-2xl bg-blue-950/60 border border-blue-500/40 text-blue-400 flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(37,99,235,0.25)] group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 font-normal">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom: Animated Arrow Trigger */}
                    <div className="pt-4 border-t border-blue-900/30 flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-[#94A3B8] group-hover:text-white transition-colors">
                        Explore Capability
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#0A0A0C] border border-blue-900/50 text-[#94A3B8] group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.6)] flex items-center justify-center transition-all duration-300">
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </ThreeDCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
