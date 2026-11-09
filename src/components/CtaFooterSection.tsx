"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FurosityLogo from "./FurosityLogo";
import ThreeDPlanet from "./ThreeDPlanet";
import { ArrowRight, Calendar, Heart, Sparkles } from "lucide-react";

export default function CtaFooterSection() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".cta-left-content", {
        scrollTrigger: {
          trigger: ".cta-banner-container",
          start: "top 82%",
        },
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".cta-visual-card", {
        scrollTrigger: {
          trigger: ".cta-banner-container",
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        ease: "power2.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative z-10 text-white overflow-hidden bg-[#0A1028]"
    >
      {/* ================= TOP CTA BANNER: SUNSET HORIZON & ROBOT SCENE ================= */}
      <div className="cta-banner-container relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#060919]">
        
        {/* Ambient Sunset Glow */}
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy & Actions */}
            <div className="cta-left-content lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-400/30 bg-blue-950/60 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>LET&apos;S BUILD TOGETHER</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                Ready to Build <br />
                What&apos;s{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Next?
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed mb-8">
                Have a project in mind? Let&apos;s turn your ideas into impactful
                solutions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:contact@furosity.com"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all group"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 shadow-sm transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>Book a Free Call</span>
                </a>
              </div>
            </div>

            {/* Right Graphic: High-Definition 3D Sunset Mountain Landscape with Cute Robot & Wooden Signpost */}
            <div className="cta-visual-card lg:col-span-6 relative flex justify-center">
              <div className="relative w-full aspect-[16/10] max-w-[560px] rounded-3xl overflow-hidden border border-slate-700/60 shadow-2xl bg-gradient-to-b from-[#4C1D95] via-[#831843] to-[#0F172A] select-none animate-float-gentle">
                <Image
                  src="/cta-sunset-hd.jpg"
                  alt="3D Cute Robot on Cliff overlooking sunset horizon with Wooden Signpost (IDEAS, TECHNOLOGY, PEOPLE, A BRIGHTER TOMORROW)"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= SMOOTH WAVE TRANSITION TO MIDNIGHT FOOTER ================= */}
      <div className="w-full overflow-hidden leading-none -mt-1 bg-[#060919]">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="relative block w-full h-10 text-[#0F172A] fill-current"
        >
          <path d="M0,0 C300,50 600,0 900,40 C1050,60 1150,20 1200,30 L1200,0 L0,0 Z" />
        </svg>
      </div>

      {/* ================= 5-COLUMN COSMIC FOOTER ================= */}
      <div className="py-14 bg-[#060919] border-t border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/50 items-start">
            
            {/* Column 1: Brand & Tagline */}
            <div className="lg:col-span-4">
              <a href="#home" className="flex items-center gap-2.5 mb-3 group focus:outline-none">
                <FurosityLogo className="w-8 h-8 group-hover:scale-105 transition-transform duration-300" />
                <span className="font-sans font-black tracking-wider text-xl text-white group-hover:text-blue-400 transition-colors">
                  FUROSITY
                </span>
              </a>

              <p className="text-sm text-slate-400 font-normal mb-4 max-w-sm leading-relaxed">
                Ideas today for a brighter tomorrow.
              </p>

              <div className="text-xs font-mono text-slate-500 tracking-wider">
                BUILD • DESIGN • AUTOMATE • GROW
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2">
              <div className="text-xs font-bold tracking-wider text-slate-200 uppercase mb-4">
                Quick Links
              </div>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#work" className="hover:text-white transition-colors">Our Work</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="lg:col-span-2">
              <div className="text-xs font-bold tracking-wider text-slate-200 uppercase mb-4">
                Services
              </div>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Product Design</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">AI &amp; Automation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Cloud &amp; DevOps</a></li>
              </ul>
            </div>

            {/* Column 4: Follow Us (Social Media) */}
            <div className="lg:col-span-2">
              <div className="text-xs font-bold tracking-wider text-slate-200 uppercase mb-4">
                Follow Us
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                {/* GitHub */}
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                {/* X */}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 5: 3D Saturn Planet */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center">
              <ThreeDPlanet />
            </div>

          </div>

          {/* Sub-footer Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>&copy; 2026 Furosity. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <span>|</span>
              <span className="flex items-center gap-1 text-slate-400">
                Built with Curiosity <Heart className="w-3 h-3 text-blue-500 fill-current" />
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
