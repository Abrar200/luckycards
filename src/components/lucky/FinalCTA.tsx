import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowCardIcon } from '@/components/lucky/CasinoIcons';

const FinalCTA: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-[#C8102E]/[0.06] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[400px] rounded-full bg-[#D4AF37]/[0.05] blur-[120px] pointer-events-none" />

      {/* Subtle noise */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <div
          className={`transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.06] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)] animate-pulse" />
            <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase">
              Ready to Launch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Bring Lucky Cards<br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(110deg, #F7E8A4 0%, #D4AF37 50%, #B8912B 100%)',
              }}
            >
              to Your Platform.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/60 leading-relaxed font-normal max-w-xl mx-auto">
            Deliver a high-engagement casino experience your players will return to — with a partner built for regulated markets and real-money environments.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={() => scrollTo('contact')}
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-lg text-sm font-bold transition-all duration-300 overflow-hidden cursor-pointer shadow-[0_14px_40px_-8px_rgba(212,175,55,0.55)] hover:shadow-[0_18px_48px_-8px_rgba(212,175,55,0.7)]"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, #F7E8A4 0%, #D4AF37 50%, #B8912B 100%)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-[900ms]" />

              <span className="relative text-black">Partner With Us</span>
              <span className="relative text-black transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowCardIcon size={16} />
              </span>
            </button>
            <button
              onClick={() => scrollTo('product')}
              className="px-8 py-4 text-sm font-semibold text-white/85 rounded-lg border border-white/15 bg-white/[0.03] backdrop-blur-sm hover:border-[#D4AF37]/40 hover:bg-white/[0.06] hover:text-white transition-all duration-300"
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
