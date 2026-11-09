export default function PartnersBar() {
  const partners = [
    {
      name: "Stripe",
      svg: (
        <span className="font-extrabold text-xl tracking-tight text-slate-800">stripe</span>
      ),
    },
    {
      name: "AWS",
      svg: (
        <span className="font-black text-xl tracking-wider text-slate-800">aws</span>
      ),
    },
    {
      name: "Google Cloud",
      svg: (
        <span className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
          <svg className="w-4 h-4 fill-current text-blue-500" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          </svg>
          <span>Google Cloud</span>
        </span>
      ),
    },
    {
      name: "Vercel",
      svg: (
        <span className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 fill-current text-slate-900" viewBox="0 0 24 24">
            <path d="M12 1L24 22H0L12 1Z" />
          </svg>
          <span>Vercel</span>
        </span>
      ),
    },
    {
      name: "PostgreSQL",
      svg: (
        <span className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
          <span className="text-base">🐘</span>
          <span>PostgreSQL</span>
        </span>
      ),
    },
    {
      name: "MongoDB",
      svg: (
        <span className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
          <span className="text-base text-emerald-500">🍃</span>
          <span>MongoDB</span>
        </span>
      ),
    },
    {
      name: "OpenAI",
      svg: (
        <span className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
          <span className="text-base">◉</span>
          <span>OpenAI</span>
        </span>
      ),
    },
  ];

  return (
    <section className="relative z-10 py-8 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Floating White Pill Container */}
        <div className="bg-white/85 backdrop-blur-md rounded-full border border-slate-200/80 shadow-sm py-4 px-6 sm:px-10">
          <div className="mb-3 text-center">
            <p className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-slate-400 uppercase">
              TRUSTED BY STARTUPS &amp; BUSINESSES WORLDWIDE
            </p>
          </div>

          {/* Infinite Smooth Scroll Marquee with CSS Gradient Mask */}
          <div
            className="relative w-full overflow-hidden flex items-center"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="animate-marquee flex items-center gap-12 sm:gap-16 opacity-75 hover:opacity-100 transition-opacity">
              {/* First loop of logos */}
              {partners.map((partner, idx) => (
                <div
                  key={`p1-${idx}`}
                  className="flex items-center text-slate-700 hover:text-blue-600 transition-colors shrink-0 cursor-default"
                  title={partner.name}
                >
                  {partner.svg}
                </div>
              ))}

              {/* Second identical loop for infinite seamless scrolling */}
              {partners.map((partner, idx) => (
                <div
                  key={`p2-${idx}`}
                  className="flex items-center text-slate-700 hover:text-blue-600 transition-colors shrink-0 cursor-default"
                  title={partner.name}
                >
                  {partner.svg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
