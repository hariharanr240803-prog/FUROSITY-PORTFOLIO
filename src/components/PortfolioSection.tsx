"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, Activity, ShieldCheck, Cpu } from "lucide-react";

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".portfolio-header", {
        scrollTrigger: {
          trigger: ".portfolio-header",
          start: "top 85%",
        },
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".portfolio-card-item", {
        scrollTrigger: {
          trigger: ".portfolio-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.85,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative z-10 py-20 md:py-28 bg-[#F4F7FC] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="portfolio-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-600 text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>OUR WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Projects that <br />
              Create Real{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Value
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="text-slate-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
              A glimpse of the solutions we&apos;ve built — combining technology,
              creativity and practical impact.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 text-xs font-bold text-slate-800 shadow-sm transition-all shrink-0 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* 3 Ultra-Crisp, High-Resolution UI Mockup Cards */}
        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Sales Management System (Dark Sleek SaaS Dashboard) */}
          <div className="portfolio-card-item">
            <div className="group rounded-3xl bg-white border border-slate-100 p-6 shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-600/12 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                {/* Dashboard Mockup Container */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-slate-800 shadow-xl bg-[#0B0F19] p-3 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-300">
                  {/* Top Bar with window dots */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">furosity.sales.v2</span>
                    <span className="flex items-center gap-1 text-[9px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>

                  {/* Dashboard Content: Left Nav + Main Grid */}
                  <div className="flex gap-2.5 my-auto h-full pt-2">
                    {/* Mini Sidebar */}
                    <div className="w-7 bg-slate-900/90 rounded-lg p-1 flex flex-col items-center gap-1.5 border border-slate-800">
                      <div className="w-4 h-4 rounded bg-blue-600 flex items-center justify-center text-[8px] text-white font-bold">F</div>
                      <div className="w-3.5 h-1.5 rounded bg-slate-700" />
                      <div className="w-3.5 h-1.5 rounded bg-slate-800" />
                      <div className="w-3.5 h-1.5 rounded bg-slate-800" />
                    </div>

                    {/* Main Analytics Area */}
                    <div className="flex-1 flex flex-col justify-between gap-1.5">
                      {/* Metric Stat Pills */}
                      <div className="grid grid-cols-3 gap-1.5">
                        <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                          <div className="text-[8px] text-slate-400">Revenue</div>
                          <div className="text-[11px] font-black text-white">$48.5k</div>
                        </div>
                        <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                          <div className="text-[8px] text-slate-400">MRR</div>
                          <div className="text-[11px] font-black text-emerald-400">+142%</div>
                        </div>
                        <div className="p-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                          <div className="text-[8px] text-slate-400">Deals</div>
                          <div className="text-[11px] font-black text-blue-400">1,280</div>
                        </div>
                      </div>

                      {/* Bar / Telemetry Visual */}
                      <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-800/80 flex items-end justify-between h-14 px-2">
                        <div className="w-2.5 h-5 bg-blue-600/40 rounded-t" />
                        <div className="w-2.5 h-8 bg-blue-600/60 rounded-t" />
                        <div className="w-2.5 h-11 bg-blue-500 rounded-t" />
                        <div className="w-2.5 h-7 bg-blue-600/70 rounded-t" />
                        <div className="w-2.5 h-12 bg-indigo-500 rounded-t" />
                        <div className="w-2.5 h-10 bg-blue-400 rounded-t" />
                        <div className="w-2.5 h-14 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t shadow-[0_0_8px_#38BDF8]" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Telemetry Bar */}
                  <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 pt-1.5 border-t border-slate-800/80">
                    <span className="flex items-center gap-1 text-slate-400">
                      <Activity className="w-2.5 h-2.5 text-blue-400" />
                      Latency: 18ms
                    </span>
                    <span className="text-blue-400 font-bold">SQL Analytics</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Sales Management System
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  End-to-end sales tracking and analytics platform.
                </p>
              </div>

              {/* Tags & Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-600 bg-slate-50 border border-slate-200">FastAPI</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-600 bg-slate-50 border border-slate-200">React</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-600 bg-slate-50 border border-slate-200">PostgreSQL</span>
                </div>

                <div className="w-9 h-9 rounded-full bg-slate-950 text-white flex items-center justify-center shrink-0 ml-3 group-hover:bg-blue-600 transition-colors shadow-md">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Compliance Tool (Light SaaS Document with Plant) */}
          <div className="portfolio-card-item">
            <div className="group rounded-3xl bg-white border border-slate-100 p-6 shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-600/12 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                {/* Document Mockup Container */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-slate-200 shadow-xl bg-gradient-to-br from-[#FAFCFF] to-[#F1F5F9] p-3.5 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-300">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <span className="text-[10px] font-mono text-slate-800 font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      Compliance Audit Report
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[9px] font-bold">100% Passed</span>
                  </div>

                  {/* Document & Leafy Plant on Desk */}
                  <div className="flex items-center justify-between gap-3 my-auto py-2">
                    {/* Document Page Card */}
                    <div className="flex-1 bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                      <div className="flex items-center justify-between text-[10px] text-slate-600 font-semibold">
                        <span>Security Baseline</span>
                        <span className="text-emerald-600 font-bold">Grade A+</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div className="w-[96%] h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-[8.5px] font-mono text-slate-500 pt-1 border-t border-slate-100">
                        <div>SOC2: Validated</div>
                        <div>HIPAA: Encrypted</div>
                      </div>
                    </div>

                    {/* Desk Plant (SVG) */}
                    <div className="w-12 h-16 shrink-0 flex items-center justify-center">
                      <svg viewBox="0 0 40 50" className="w-11 h-14" fill="none">
                        <polygon points="12,30 28,30 25,46 15,46" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.5" />
                        <path d="M 20 30 Q 10 18, 8 8 Q 18 18, 20 30" fill="#10B981" />
                        <path d="M 20 30 Q 30 16, 34 6 Q 26 20, 20 30" fill="#059669" />
                        <path d="M 20 30 Q 20 12, 20 2 Q 24 16, 20 30" fill="#34D399" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Verification Note */}
                  <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 pt-1.5 border-t border-slate-200">
                    <span>Automated Policy Checker</span>
                    <span className="text-emerald-600 font-bold">Zero Vulnerabilities</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Compliance Tool
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Automated compliance checks with AI-powered analysis.
                </p>
              </div>

              {/* Tags & Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-600 bg-slate-50 border border-slate-200">Python</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-600 bg-slate-50 border border-slate-200">AI</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-600 bg-slate-50 border border-slate-200">Cloud</span>
                </div>

                <div className="w-9 h-9 rounded-full bg-slate-950 text-white flex items-center justify-center shrink-0 ml-3 group-hover:bg-blue-600 transition-colors shadow-md">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: AI Automation Workflow (Dark Node Canvas) */}
          <div className="portfolio-card-item">
            <div className="group rounded-3xl bg-white border border-slate-100 p-6 shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-600/12 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                {/* Node Canvas Mockup Container */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-slate-800 shadow-xl bg-[#090D1A] p-3.5 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-300">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                      <Cpu className="w-3 h-3 text-cyan-400" />
                      n8n_AUTONOMOUS_PIPELINE
                    </span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shadow-[0_0_8px_#38BDF8]" />
                  </div>

                  {/* Connected Nodes Canvas */}
                  <div className="flex items-center justify-between gap-2 my-auto px-1 py-3">
                    {/* Node 1: Webhook */}
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-700/80 text-center shadow-md">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mx-auto mb-1" />
                      <div className="text-[8.5px] font-mono font-bold text-slate-300">Webhook</div>
                      <div className="text-[7.5px] text-slate-500">Event In</div>
                    </div>

                    {/* Connecting Line 1 */}
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 relative">
                      <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-300 animate-ping" />
                    </div>

                    {/* Node 2: LLM Agent */}
                    <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-950 to-blue-900 border border-indigo-400/50 text-center shadow-[0_0_15px_rgba(99,102,241,0.25)]">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mx-auto mb-1 shadow-[0_0_6px_#38BDF8]" />
                      <div className="text-[8.5px] font-mono font-bold text-white">LLM Agent</div>
                      <div className="text-[7.5px] text-cyan-300">GPT-4 / Claude</div>
                    </div>

                    {/* Connecting Line 2 */}
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-indigo-500 to-emerald-400" />

                    {/* Node 3: Sync DB */}
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-700/80 text-center shadow-md">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mx-auto mb-1" />
                      <div className="text-[8.5px] font-mono font-bold text-slate-300">Sync DB</div>
                      <div className="text-[7.5px] text-slate-500">Postgres</div>
                    </div>
                  </div>

                  {/* Bottom Stats */}
                  <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 pt-1.5 border-t border-slate-800">
                    <span>Success Rate: 100%</span>
                    <span className="text-cyan-400 font-bold">2.4k Tasks/hr</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Automation Workflow
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Custom AI agents to automate business processes.
                </p>
              </div>

              {/* Tags & Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-600 bg-slate-50 border border-slate-200">n8n</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-600 bg-slate-50 border border-slate-200">LLM</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-600 bg-slate-50 border border-slate-200">Agents</span>
                </div>

                <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 ml-3 group-hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/30">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
