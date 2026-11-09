"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".testimonial-left-col", {
        scrollTrigger: {
          trigger: ".testimonial-left-col",
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".testimonial-card-wrap", {
        scrollTrigger: {
          trigger: ".testimonial-card-wrap",
          start: "top 82%",
        },
        opacity: 0,
        y: 35,
        duration: 0.9,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-16 md:py-24 bg-[#F8FAFF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Seamless 3D Robot Holding Glowing Star + Title */}
          <div className="testimonial-left-col lg:col-span-5 flex flex-col items-start">
            
            {/* 3D Robot Mascot Seamless on Background */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-2 select-none animate-float-delayed">
              {/* Soft warm glow around star and robot */}
              <div className="absolute top-2 left-6 w-20 h-20 bg-amber-400/25 rounded-full blur-xl pointer-events-none" />
              <Image
                src="/testim-robot-transparent.png"
                alt="3D Cute Robot Mascot Holding Golden Star"
                fill
                sizes="160px"
                className="object-contain object-left drop-shadow-md"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-600 text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>WHAT CLIENTS SAY</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Their Success <br />
              Drives Us{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Forward
              </span>
            </h2>
          </div>

          {/* Right Column: Clean White Elevated Testimonial Card */}
          <div className="testimonial-card-wrap lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-100 p-8 sm:p-10 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-600/10 transition-all">
              
              {/* Blue Quote Mark & Text */}
              <div className="text-blue-600 font-serif text-5xl leading-none mb-2 select-none">&ldquo;</div>

              <blockquote className="text-slate-800 text-lg sm:text-xl font-medium leading-relaxed mb-6 -mt-3">
                Furosity delivered beyond expectations. Their technical
                skills and proactive approach made the entire process smooth and
                efficient.
              </blockquote>

              {/* 5 Gold Stars Rating */}
              <div className="flex items-center gap-1.5 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Author Info & Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    CH
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm sm:text-base">
                      Client Name
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      Startup Founder
                    </div>
                  </div>
                </div>

                {/* Slider Navigation Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous Testimonial"
                    className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-600 flex items-center justify-center transition-all shadow-sm active:scale-95"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next Testimonial"
                    className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-600 flex items-center justify-center transition-all shadow-sm active:scale-95"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
