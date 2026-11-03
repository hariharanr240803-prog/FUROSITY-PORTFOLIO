import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnersBar from "@/components/PartnersBar";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
import CtaFooterSection from "@/components/CtaFooterSection";
import FiberBackground from "@/components/FiberBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans text-[#94A3B8] selection:bg-blue-600/40 selection:text-white bg-[#050505]">
      {/* 1. Smoky Fluid Aurora Particle Background */}
      <FiberBackground />

      {/* 2. Header / Floating Glass Navbar */}
      <Navbar />

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Tech Partners Trust Strip */}
        <PartnersBar />

        {/* Services Grid - What We Do */}
        <ServicesSection />

        {/* Process Roadmap - A Simple Path from Idea to Impact */}
        <ProcessSection />

        {/* Portfolio Showcase - Projects that Create Real Value */}
        <PortfolioSection />

        {/* Feature Highlights - More Than Development, A True Partner */}
        <FeaturesSection />

        {/* Testimonials - What Clients Say */}
        <TestimonialSection />

        {/* High-Impact CTA Banner & 5-Column Cosmic Footer */}
        <CtaFooterSection />
      </main>
    </div>
  );
}
