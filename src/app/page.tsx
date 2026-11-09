import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnersBar from "@/components/PartnersBar";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
import CtaFooterSection from "@/components/CtaFooterSection";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-[#F8FAFF] text-slate-900 selection:bg-blue-600/30 selection:text-blue-900">
      {/* 1. Header / Floating Glass Navbar */}
      <Navbar />

      <main className="flex-1 relative">
        {/* 2. Hero Section: Clean daylight copy + Futuristic 3D Room */}
        <Hero />

        {/* 3. Tech Partners Trust Strip */}
        <PartnersBar />

        {/* 4. Services Grid: What We Do (From Ideas to Powerful Solutions) */}
        <ServicesSection />

        {/* 5. Process Roadmap: A Simple Path from Idea to Impact (Dark Cosmic Ocean Wave) */}
        <ProcessSection />

        {/* 6. Portfolio Showcase: Projects that Create Real Value */}
        <PortfolioSection />

        {/* 7. Feature Highlights: More Than Development, A True Partner */}
        <FeaturesSection />

        {/* 8. Testimonials: What Clients Say (Robot holding Star + Review Card) */}
        <TestimonialSection />

        {/* 9. Sunset Mountain Horizon CTA & 5-Column Cosmic Night Footer */}
        <CtaFooterSection />
      </main>
    </div>
  );
}
