export default function PartnersBar() {
  const partners = [
    {
      name: "Stripe",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 60 25">
          <path d="M59.64 14.28c0-4.48-2.18-8.02-6.42-8.02-4.26 0-6.84 3.54-6.84 8 0 5.28 3.12 7.96 7.42 7.96 2.08 0 3.66-.46 4.86-1.12l-.66-3.14c-1.04.54-2.28.84-3.7.84-2.02 0-3.72-.94-3.96-3.26h9.18c.04-.38.12-.9.12-1.26zm-9.28-1.5c0-2.04 1.24-2.94 2.84-2.94 1.58 0 2.74.9 2.74 2.94h-5.58zM41.7 6.26c-1.68 0-2.82.8-3.44 1.48V6.52h-4.04v19.46l4.24-.9.02-4.52c.62.58 1.62 1.34 3.2 1.34 3.26 0 6.24-2.62 6.24-7.82 0-5.06-3-7.82-6.22-7.82zm-1.06 12.16c-1.1 0-1.8-.38-2.32-.94l-.04-6.9c.56-.62 1.32-1 2.36-1 1.8 0 3.02 1.62 3.02 4.4 0 2.82-1.2 4.44-3.02 4.44zM24.8 6.52h-4.24V21.6h4.24V6.52zM22.68.96c-1.48 0-2.68 1.2-2.68 2.68 0 1.46 1.2 2.66 2.68 2.66 1.46 0 2.66-1.2 2.66-2.66 0-1.48-1.2-2.68-2.66-2.68zM14.7 7.68c-1.08-.46-2.6-.86-4.02-.86-2.58 0-4.32 1.36-4.32 3.66 0 3.76 5.16 3.16 5.16 4.78 0 .54-.48.74-1.16.74-1.54 0-3.52-.64-4.58-1.22l-.76 3.42c1.08.52 2.94.94 4.78.94 2.82 0 4.78-1.38 4.78-3.76 0-4.06-5.18-3.32-5.18-4.84 0-.46.38-.68 1.04-.68 1.24 0 2.8.44 3.68.9l.58-3.08z" />
        </svg>
      ),
    },
    {
      name: "AWS",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 60 35">
          <path d="M12.4 17.5c0 1.3-.3 2.3-.9 3.1-.6.7-1.4 1.1-2.5 1.1-.9 0-1.6-.3-2.1-.8-.5-.5-.8-1.2-.8-2 0-.8.3-1.6.8-2.1.6-.6 1.4-.9 2.5-.9 1.1 0 1.9.4 2.4 1 .4.2.6.5.6.6zm3.3 6.9c-.2-.3-.3-.9-.3-1.6-.8 1-2.1 1.7-3.8 1.7-1.8 0-3.2-.5-4.2-1.6s-1.5-2.5-1.5-4.2c0-1.9.6-3.4 1.8-4.5 1.2-1.1 2.8-1.6 4.9-1.6.9 0 1.7.1 2.5.3.8.2 1.4.5 1.8.8v-.9c0-1.4-.3-2.5-1-3.2-.7-.7-1.8-1.1-3.2-1.1-1.1 0-2.1.2-3.1.7-1 .5-1.7 1.1-2.2 1.8l-1.9-2.2c.8-1 1.9-1.8 3.3-2.4 1.4-.6 3-.9 4.8-.9 2.6 0 4.6.6 5.8 1.9 1.3 1.3 1.9 3.2 1.9 5.8v10.5c0 .7.1 1.2.2 1.6h-3.7zM31.6 6.3l-5.6 18.1h-4.3l-4.1-13.6-4.1 13.6H9.2L3.6 6.3h4.4l3.4 13 3.9-13h4.2l3.9 13 3.5-13h4.5zm19.4 13.6c-1 0-1.9-.2-2.7-.6-.8-.4-1.5-1-2-1.8-.5-.8-.8-1.7-.8-2.8 0-1.2.3-2.2.9-3.1.6-.9 1.4-1.6 2.4-2.1 1-.5 2.2-.8 3.5-.8 1.3 0 2.4.2 3.4.7 1 .5 1.7 1.1 2.2 2l-3.3 2.1c-.6-.9-1.4-1.3-2.4-1.3-.7 0-1.3.2-1.8.7-.5.5-.7 1.1-.7 1.9 0 .8.2 1.4.7 1.9.5.5 1.1.7 1.9.7 1 0 1.9-.4 2.6-1.3l3.2 2.2c-.7 1-1.6 1.8-2.6 2.3-1.2.5-2.6.7-4.3.7z" />
        </svg>
      ),
    },
    {
      name: "Google Cloud",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 120 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          <text x="30" y="17" className="font-bold text-sm tracking-tight" fill="currentColor">
            Google Cloud
          </text>
        </svg>
      ),
    },
    {
      name: "Vercel",
      svg: (
        <svg className="h-5 w-auto fill-current" viewBox="0 0 115 24">
          <path d="M12 1L24 22H0L12 1Z" />
          <text x="32" y="18" className="font-bold text-base tracking-tight" fill="currentColor">
            Vercel
          </text>
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 110 24">
          <circle cx="10" cy="12" r="8" opacity="0.3" />
          <text x="24" y="17" className="font-bold text-sm tracking-tight" fill="currentColor">
            PostgreSQL
          </text>
        </svg>
      ),
    },
    {
      name: "MongoDB",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 110 24">
          <path d="M12 2C12 2 6 9 6 14C6 17.3 8.7 20 12 20C15.3 20 18 17.3 18 14C18 9 12 2 12 2Z" />
          <text x="24" y="17" className="font-bold text-sm tracking-tight" fill="currentColor">
            MongoDB
          </text>
        </svg>
      ),
    },
    {
      name: "OpenAI",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 95 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          <text x="26" y="17" className="font-bold text-sm tracking-tight" fill="currentColor">
            OpenAI
          </text>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative z-10 py-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] text-[#94A3B8]/75 uppercase">
          TRUSTED BY STARTUPS &amp; BUSINESSES WORLDWIDE
        </p>
      </div>

      {/* Infinite Smooth Scroll Marquee with CSS Gradient Mask */}
      <div
        className="relative w-full overflow-hidden flex items-center"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="animate-marquee flex items-center gap-14 sm:gap-20 opacity-70 hover:opacity-100 transition-opacity">
          {/* First loop of logos */}
          {partners.map((partner, idx) => (
            <div
              key={`p1-${idx}`}
              className="flex items-center text-[#94A3B8]/60 hover:text-blue-400 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-all shrink-0 cursor-default"
              title={partner.name}
            >
              {partner.svg}
            </div>
          ))}

          {/* Second identical loop for infinite seamless scrolling */}
          {partners.map((partner, idx) => (
            <div
              key={`p2-${idx}`}
              className="flex items-center text-[#94A3B8]/60 hover:text-blue-400 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-all shrink-0 cursor-default"
              title={partner.name}
            >
              {partner.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
