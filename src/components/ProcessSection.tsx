"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".process-header", {
        scrollTrigger: {
          trigger: ".process-header",
          start: "top 85%",
        },
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".process-illustration", {
        scrollTrigger: {
          trigger: ".process-illustration",
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative z-10 text-white overflow-hidden bg-[#070B1E]"
    >
      {/* Top Organic Wave Transition from Light Section */}
      <div className="w-full overflow-hidden leading-none -mt-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-14 sm:h-20 text-[#F4F7FD] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,60 L1200,0 L0,0 Z" />
        </svg>
      </div>

      {/* Ambient Cosmic Glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 pb-20 md:pb-28">
        
        {/* Section Header */}
        <div className="process-header max-w-2xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/60 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>OUR PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            A Simple Path <br />
            from Idea to{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            We turn your vision into reality with a clear and collaborative process.
          </p>
        </div>

        {/* ================= TRUE HIGH-DEFINITION 3D COSMIC FLIGHT SCENE ================= */}
        <div className="process-illustration relative w-full rounded-3xl overflow-hidden border border-blue-900/50 shadow-2xl bg-[#090E26]">
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/8]">
            <Image
              src="/process-flight-hd.jpg"
              alt="Furosity Process: 3D Robot superhero flying through cosmic space with glowing trail and asteroid milestones"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center"
            />
          </div>

          {/* Milestone Text Checkpoints underneath visual */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-7 bg-[#050818]/90 border-t border-blue-900/40 backdrop-blur-md">
            <div>
              <div className="text-xs font-mono font-bold text-amber-400 mb-1">01</div>
              <div className="text-sm font-bold text-white">Understand Your Goals</div>
              <div className="text-xs text-slate-400 mt-0.5">Deep dive into vision &amp; metrics</div>
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-purple-400 mb-1">02</div>
              <div className="text-sm font-bold text-white">Plan &amp; Design</div>
              <div className="text-xs text-slate-400 mt-0.5">Architecture &amp; design system</div>
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-cyan-400 mb-1">03</div>
              <div className="text-sm font-bold text-white">Develop &amp; Deploy</div>
              <div className="text-xs text-slate-400 mt-0.5">CI/CD &amp; modern engineering</div>
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-blue-400 mb-1">04</div>
              <div className="text-sm font-bold text-white">Scale &amp; Grow</div>
              <div className="text-xs text-slate-400 mt-0.5">Continuous support &amp; telemetry</div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Organic Wave Transition back to Light Section */}
      <div className="w-full overflow-hidden leading-none -mb-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-14 sm:h-20 text-[#F4F7FC] fill-current"
        >
          <path d="M0,0 C150,90 400,-20 650,50 C900,120 1050,40 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
