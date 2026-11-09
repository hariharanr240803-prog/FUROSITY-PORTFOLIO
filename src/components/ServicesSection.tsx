"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".services-header", {
        scrollTrigger: {
          trigger: ".services-header",
          start: "top 85%",
        },
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".service-card-item", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 82%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Modern, scalable and high-performance web applications.",
      imageSrc: "/service-web-hd.jpg",
      alt: "Web Development 3D Laptop with Code",
    },
    {
      title: "Product Design",
      description: "User-centric designs that create meaningful experiences.",
      imageSrc: "/service-design-hd.jpg",
      alt: "Product Design 3D Digital Tablet with Stylus",
    },
    {
      title: "AI & Automation",
      description: "Custom AI agents, workflows and LLM-powered solutions.",
      imageSrc: "/service-ai-hd.jpg",
      alt: "AI & Automation 3D Robot Mascot with Lightbulb",
    },
    {
      title: "Cloud & DevOps",
      description: "Reliable deployment, monitoring and scalable infrastructure.",
      imageSrc: "/service-cloud-hd.jpg",
      alt: "Cloud & DevOps 3D Cloud with Server Discs",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-10 py-20 md:py-28 bg-[#F4F7FD] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="services-header relative flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-600 text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>WHAT WE DO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              From Ideas to <br />
              Powerful{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
          </div>

          <div className="relative">
            <p className="text-slate-600 text-base sm:text-lg max-w-md font-normal leading-relaxed">
              We combine technology, design and automation to create scalable,
              user-centric solutions for businesses worldwide.
            </p>

            {/* Handwritten annotation from design: "Different Skills Same Goal A Brighter Tomorrow" */}
            <div className="hidden lg:block absolute -top-16 -right-16 text-slate-700 select-none pointer-events-none rotate-6">
              <div className="font-handwritten text-xs sm:text-sm font-semibold tracking-wide text-slate-600 text-center leading-tight">
                Different Skills<br />Same Goal<br />A Brighter Tomorrow
              </div>
              <svg viewBox="0 0 45 35" className="w-8 h-7 text-slate-400 mx-auto mt-1" fill="none" stroke="currentColor">
                <path d="M 8 5 Q 32 12, 28 32 M 22 26 L 28 32 L 35 25" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* 4 Crisp White Service Cards with High-Definition 3D Graphics */}
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="service-card-item">
              <div className="group rounded-3xl bg-white border border-slate-100 p-6 sm:p-7 shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-600/12 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  {/* Top HD 3D Artwork Container */}
                  <div className="w-full h-40 rounded-2xl bg-gradient-to-b from-[#F0F4FC] to-[#F8FAFF] border border-slate-100 p-2 mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={service.imageSrc}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 250px"
                        className="object-contain object-center"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Circular Action Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="w-9 h-9 rounded-full border border-slate-200 text-slate-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-md transition-all duration-200 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
