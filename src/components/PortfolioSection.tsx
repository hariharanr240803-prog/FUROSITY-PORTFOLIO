"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThreeDCard from "./ThreeDCard";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal on scroll
      gsap.from(".portfolio-header", {
        scrollTrigger: {
          trigger: ".portfolio-header",
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        duration: 0.85,
        ease: "power3.out",
      });

      // 3 Project Cards Staggered Reveal
      gsap.from(".portfolio-card-item", {
        scrollTrigger: {
          trigger: ".portfolio-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 55,
        stagger: 0.18,
        duration: 0.95,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: "Sales Management System",
      description: "End-to-end sales tracking and analytics platform with automated commission calculation.",
      tags: ["FastAPI", "React", "PostgreSQL"],
      previewType: "dark-dashboard",
    },
    {
      title: "Compliance Tool",
      description: "Automated compliance checks with AI-powered multi-jurisdiction risk analysis.",
      tags: ["Python", "AI", "Cloud"],
      previewType: "emerald-doc",
    },
    {
      title: "AI Automation Workflow",
      description: "Custom autonomous AI agents to automate mission-critical business processes.",
      tags: ["n8n", "LLM", "Agents"],
      previewType: "workflow-canvas",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative z-10 py-24 md:py-32 bg-transparent overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-gradient-to-bl from-blue-600/15 via-blue-500/10 to-transparent blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="portfolio-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0C]/80 border border-blue-600/30 text-blue-400 text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-[0_0_12px_rgba(37,99,235,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>OUR WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Projects that <br />
              Create Real{" "}
              <span className="bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                Value
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="text-[#94A3B8] text-sm sm:text-base max-w-md font-normal leading-relaxed">
              A glimpse of the solutions we&apos;ve built — combining technology,
              creativity and practical impact.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-600/30 bg-[#0A0A0C]/80 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:text-white hover:border-transparent text-xs font-bold text-white shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] transition-all shrink-0 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 3 Project Cards Grid with 3D Mockup Perspective & ScrollTrigger */}
        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="portfolio-card-item">
              <ThreeDCard
                depth={25}
                maxTilt={8}
                className="rounded-3xl h-full"
              >
                <div className="group rounded-3xl bg-[#0A0A0C]/70 backdrop-blur-xl border border-blue-600/25 hover:border-blue-500/50 overflow-hidden shadow-xl shadow-black/50 hover:shadow-[0_0_35px_rgba(37,99,235,0.25)] transition-all duration-300 flex flex-col justify-between h-full">
                  {/* 3D Angled Browser Viewport Window */}
                  <div className="h-56 p-4 bg-[#050505] overflow-hidden relative border-b border-blue-900/40">
                    {project.previewType === "dark-dashboard" && (
                      <div className="w-full h-full rounded-2xl bg-[#0A0A0C] border border-blue-900/40 p-3.5 flex flex-col justify-between shadow-2xl group-hover:scale-105 transition-transform duration-500 ease-out">
                        <div className="flex items-center justify-between border-b border-blue-900/30 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                          </div>
                          <span className="text-[10px] font-mono text-blue-400">
                            sales.furosity.dashboard
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 my-auto">
                          <div className="p-2.5 rounded-xl bg-[#050505] border border-blue-900/40 text-center shadow-inner">
                            <div className="text-[9px] text-[#94A3B8]/80">Revenue</div>
                            <div className="text-xs font-bold text-white">$42.8k</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#050505] border border-blue-900/40 text-center shadow-inner">
                            <div className="text-[9px] text-[#94A3B8]/80">Growth</div>
                            <div className="text-xs font-bold text-emerald-400">+128%</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#050505] border border-blue-900/40 text-center shadow-inner">
                            <div className="text-[9px] text-[#94A3B8]/80">Active</div>
                            <div className="text-xs font-bold text-blue-400">1,240</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8]/80 pt-1 border-t border-blue-900/30">
                          <span>Latency: 0.04s</span>
                          <span className="text-blue-400 font-bold">LIVE TELEMETRY</span>
                        </div>
                      </div>
                    )}

                    {project.previewType === "emerald-doc" && (
                      <div className="w-full h-full rounded-2xl bg-[#0A0A0C] border border-emerald-500/30 p-3.5 flex flex-col justify-between shadow-2xl group-hover:scale-105 transition-transform duration-500 ease-out">
                        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
                          <span className="text-[10px] font-mono text-emerald-400">
                            AI_COMPLIANCE_AUDITOR
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-mono font-bold shadow-sm">
                            VERIFIED 100%
                          </span>
                        </div>
                        <div className="space-y-2 my-auto">
                          <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                            <span>Data Security SLA</span>
                            <span className="text-emerald-400 font-bold">99.99%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-[#050505] overflow-hidden border border-emerald-500/30">
                            <div className="w-full h-full bg-gradient-to-r from-emerald-500 to-teal-400" />
                          </div>
                          <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                            <span>GDPR &amp; SOC2 Audit</span>
                            <span className="text-emerald-400 font-bold">Compliant</span>
                          </div>
                        </div>
                        <div className="text-[9px] font-mono text-emerald-400 pt-1 border-t border-emerald-500/20">
                          Zero vulnerabilities identified
                        </div>
                      </div>
                    )}

                    {project.previewType === "workflow-canvas" && (
                      <div className="w-full h-full rounded-2xl bg-[#050505] border border-blue-900/40 p-3.5 flex flex-col justify-between shadow-2xl group-hover:scale-105 transition-transform duration-500 ease-out">
                        <div className="flex items-center justify-between border-b border-blue-900/30 pb-2">
                          <span className="text-[10px] font-mono text-blue-400">
                            n8n_AUTONOMOUS_PIPELINE
                          </span>
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping shadow-[0_0_8px_#3B82F6]" />
                        </div>
                        <div className="flex items-center justify-between gap-2 my-auto">
                          <div className="p-2 rounded-lg bg-[#0A0A0C] border border-blue-900/50 text-[10px] font-mono text-[#94A3B8]">
                            Webhook In
                          </div>
                          <div className="w-4 h-[2px] bg-gradient-to-r from-blue-600 to-blue-400" />
                          <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-500/40 text-[10px] font-mono text-white shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                            LLM Agent
                          </div>
                          <div className="w-4 h-[2px] bg-gradient-to-r from-blue-400 to-blue-300" />
                          <div className="p-2 rounded-lg bg-[#0A0A0C] border border-blue-900/50 text-[10px] font-mono text-[#94A3B8]">
                            Sync DB
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8]/80 pt-1 border-t border-blue-900/30">
                          <span>Success Rate: 100%</span>
                          <span className="text-blue-400 font-bold">2.4k Tasks/hr</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-7 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="w-8 h-8 rounded-full border border-blue-900/50 bg-[#0A0A0C] group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400 flex items-center justify-center text-[#94A3B8] transition-all shrink-0">
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>

                      <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-blue-900/30">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-mono font-medium text-[#94A3B8] bg-[#0A0A0C] border border-blue-900/50 group-hover:border-blue-500/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ThreeDCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
