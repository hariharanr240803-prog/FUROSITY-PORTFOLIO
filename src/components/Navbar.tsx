"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import FurosityLogo from "./FurosityLogo";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home", active: true },
  { name: "Services", href: "#services" },
  { name: "Our Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const ctaBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -25,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const handleCtaMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ctaBtnRef.current) return;
    const rect = ctaBtnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(ctaBtnRef.current, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleCtaMouseLeave = () => {
    if (!ctaBtnRef.current) return;
    gsap.to(ctaBtnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <header className="sticky top-5 z-50 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={navRef}
          className="bg-[#0A0A0C]/80 backdrop-blur-xl rounded-full border border-blue-600/25 shadow-2xl shadow-blue-950/20 px-6 sm:px-8 py-3.5 flex items-center justify-between transition-all duration-300"
        >
          {/* Brand Logo & Name: Standalone Futuristic Vector Mark */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="FUROSITY Home"
          >
            <FurosityLogo className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_14px_rgba(37,99,235,0.55)]" />
            <span className="font-sans font-black tracking-wider text-xl sm:text-2xl text-white group-hover:text-blue-400 transition-colors leading-none">
              FUROSITY
            </span>
          </a>

          {/* Desktop Navigation Links with Sleek Hover Glow */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative py-1 text-sm font-semibold text-[#94A3B8] hover:text-white transition-all hover:-translate-y-0.5 inline-block hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]"
              >
                <span>{link.name}</span>
                {/* Active or Hover Underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 transition-all duration-300 ${
                    link.active
                      ? "w-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Desktop Pill CTA Button with Deep Cobalt Blue Glow & Magnetic Hover */}
          <div className="hidden md:flex items-center">
            <a
              ref={ctaBtnRef}
              onMouseMove={handleCtaMouseMove}
              onMouseLeave={handleCtaMouseLeave}
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.45)] hover:shadow-[0_0_32px_rgba(59,130,246,0.8)] border border-blue-400/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5 tracking-wider uppercase font-extrabold">
                <span>Let&apos;s Build</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-[#94A3B8] hover:text-white hover:bg-blue-950/40 focus:outline-none transition-colors border border-blue-900/50"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-blue-400" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Drawer Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-[#0A0A0C]/95 backdrop-blur-2xl border border-blue-600/30 rounded-3xl p-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                    link.active
                      ? "bg-blue-950/60 text-white font-bold border border-blue-500/40"
                      : "text-[#94A3B8] hover:bg-blue-950/30 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#3B82F6]"></span>
                  )}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-blue-900/40">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all"
              >
                <span>Let&apos;s Build</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
