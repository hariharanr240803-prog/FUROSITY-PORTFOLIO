"use client";

import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f8faff]/90 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label="FUROSITY Home"
        >
          <FurosityLogo className="w-8 h-8 group-hover:scale-105 transition-transform duration-300" showGlow={false} />
          <span className="font-sans font-black tracking-wider text-xl text-slate-900 group-hover:text-blue-600 transition-colors leading-none">
            FUROSITY
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative py-1 text-sm font-semibold transition-colors hover:text-blue-600 ${
                link.active ? "text-slate-950 font-bold" : "text-slate-700 hover:text-slate-950"
              }`}
            >
              <span>{link.name}</span>
              {/* Active indicator dot under Home */}
              {link.active && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-600" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Pill CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#0f172a] hover:bg-blue-600 shadow-sm hover:shadow-blue-600/25 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span className="font-bold tracking-wide">Let&apos;s Build</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-slate-800 hover:text-slate-950 hover:bg-slate-100 focus:outline-none transition-colors border border-slate-200"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-blue-600" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm font-semibold transition-colors ${
                  link.active ? "text-blue-600 font-bold" : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-bold text-white bg-[#0f172a] hover:bg-blue-600 transition-colors"
            >
              <span>Let&apos;s Build</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
