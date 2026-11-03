"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare, Sparkles } from "lucide-react";
import ThreeDCard from "./ThreeDCard";

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left column reveal
      gsap.from(".testimonial-left-col", {
        scrollTrigger: {
          trigger: ".testimonial-left-col",
          start: "top 85%",
        },
        opacity: 0,
        y: 35,
        duration: 0.85,
        ease: "power3.out",
      });

      // Testimonial card reveal
      gsap.from(".testimonial-card-wrap", {
        scrollTrigger: {
          trigger: ".testimonial-card-wrap",
          start: "top 82%",
        },
        opacity: 0,
        scale: 0.94,
        y: 45,
        duration: 1,
        ease: "power3.out",
      });

      // 5 Gold stars staggered pop
      gsap.from(".testimonial-star", {
        scrollTrigger: {
          trigger: ".testimonial-card-wrap",
          start: "top 78%",
        },
        scale: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "back.out(2)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-24 md:py-32 bg-transparent overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Copy */}
          <div className="testimonial-left-col lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A0A0C]/80 border border-blue-600/30 text-blue-400 text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-[0_0_12px_rgba(37,99,235,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>WHAT CLIENTS SAY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Their Success <br />
              Drives Us{" "}
              <span className="bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(37,99,235,0.4)]">
                Forward
              </span>
            </h2>
            <p className="text-[#94A3B8] text-base leading-relaxed max-w-md">
              We judge our work by the real-world impact and long-term value we
              create for the founders and teams who trust us.
            </p>

            {/* Quick 3D Pill Metric */}
            <div className="mt-8 flex items-center gap-3.5 p-4 rounded-2xl bg-[#0A0A0C]/70 border border-blue-600/25 backdrop-blur-xl max-w-xs shadow-xl shadow-black/50">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] font-bold">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">100% Recommendation</div>
                <div className="text-xs text-[#94A3B8]">From all partnering founders</div>
              </div>
            </div>
          </div>

          {/* Right Column 3D Interactive Testimonial Card */}
          <div className="testimonial-card-wrap lg:col-span-7">
            <ThreeDCard
              depth={25}
              maxTilt={7}
              className="rounded-3xl"
            >
              <div className="rounded-3xl bg-[#0A0A0C]/70 border border-blue-600/25 hover:border-blue-500/50 p-8 sm:p-10 shadow-2xl shadow-black/50 relative backdrop-blur-xl transition-all [transform-style:preserve-3d]">
                {/* 3D Floating Quote Mark */}
                <div className="flex items-center justify-between mb-6 [transform:translateZ(20px)]">
                  <div className="w-12 h-12 rounded-2xl bg-blue-950/60 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                    <Quote className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#0A0A0C] border border-emerald-500/30 text-emerald-400 shadow-sm">
                    Verified Feedback
                  </span>
                </div>

                <blockquote className="text-white text-lg sm:text-xl font-medium leading-relaxed mb-6 [transform:translateZ(30px)]">
                  &ldquo;Furosity delivered beyond expectations. Their technical
                  skills and proactive approach made the entire process smooth and
                  efficient.&rdquo;
                </blockquote>

                {/* 5 3D Glowing Cobalt Blue Stars */}
                <div className="flex items-center gap-1.5 text-blue-400 mb-6 [transform:translateZ(25px)]">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="testimonial-star inline-block">
                      <Star className="w-5 h-5 fill-current drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-transform hover:scale-110" />
                    </div>
                  ))}
                  <span className="text-xs font-bold text-[#94A3B8] ml-2 font-mono">5.0 / 5.0</span>
                </div>

                {/* Author Info & Interactive Tactile Controls */}
                <div className="flex items-center justify-between pt-6 border-t border-blue-900/30 [transform:translateZ(20px)]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)] ring-2 ring-blue-500/40">
                      CN
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm sm:text-base">
                        Client Name
                      </div>
                      <div className="text-xs text-[#94A3B8] font-medium">
                        Startup Founder
                      </div>
                    </div>
                  </div>

                  {/* Slider Arrows with 3D tactile push feel */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Previous Testimonial"
                      className="w-10 h-10 rounded-full border border-blue-900/50 bg-[#0A0A0C] hover:bg-blue-600 hover:text-white hover:border-blue-400 text-[#94A3B8] flex items-center justify-center transition-all shadow-sm active:scale-95 active:translate-y-0.5"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next Testimonial"
                      className="w-10 h-10 rounded-full border border-blue-900/50 bg-[#0A0A0C] hover:bg-blue-600 hover:text-white hover:border-blue-400 text-[#94A3B8] flex items-center justify-center transition-all shadow-sm active:scale-95 active:translate-y-0.5"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
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
