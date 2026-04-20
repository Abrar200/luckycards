import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PlayCardIcon } from '@/components/lucky/CasinoIcons';

const DEMO_URL = 'https://demo.luckycards.live/?code=eeafb98c-1c4b-4d83-86bd-a2be0ce0568a&playerId=savvas&test=true';

const ProductSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="product" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />

      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-[#C8102E]/[0.03] blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] mb-5">
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
            <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase">
              About The Game
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Fast Rounds.<br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(110deg, #F7E8A4 0%, #D4AF37 50%, #B8912B 100%)',
              }}
            >
              Continuous Action.
            </span>
          </h2>
          <p className="mt-5 text-base text-white/60 leading-relaxed font-normal max-w-xl mx-auto">
            Lucky Cards is a simple-to-learn card game built around fast decision-making. Players place multiple bets across a range of outcomes in every short round — creating a high-frequency loop that keeps sessions active.
          </p>
          <p className="mt-4 text-sm text-white/40 leading-relaxed font-normal max-w-lg mx-auto italic">
            Every round is quick. Every decision matters. Easy to understand, hard to walk away from.
          </p>
        </div>

        {/* Game showcase */}
        <div
          className={`transition-all duration-700 delay-150 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Ambient glow behind frame */}
            <div
              className="absolute -inset-6 rounded-3xl blur-2xl opacity-70"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(212,175,55,0.12) 0%, rgba(200,16,46,0.08) 50%, transparent 80%)',
              }}
            />

            {/* Gold border wrapper */}
            <div
              className="relative rounded-2xl p-[1.5px]"
              style={{
                background:
                  'linear-gradient(135deg, rgba(212,175,55,0.6), rgba(212,175,55,0.08) 40%, rgba(212,175,55,0.05) 60%, rgba(212,175,55,0.5))',
              }}
            >
              <div
                className="relative rounded-2xl overflow-hidden bg-[#050505]"
                style={{
                  boxShadow:
                    '0 40px 90px -20px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                {/* Top frame bar — adds casino-product feel */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-b from-[#0f0a0b] to-[#080506] border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse shadow-[0_0_6px_rgba(200,16,46,0.8)]" />
                    <span className="text-[10px] font-bold text-white/70 tracking-[0.2em] uppercase">
                      Live Gameplay Preview
                    </span>
                  </div>
                  <span className="text-[10px] font-medium text-[#D4AF37]/70 tracking-wider uppercase hidden sm:block">
                    Demo Environment
                  </span>
                </div>

                {/* Live game embed */}
                <div className="relative aspect-[16/9]">
                  <iframe
                    src={DEMO_URL}
                    title="Lucky Cards Game Table"
                    className="w-full h-full border-0"
                    loading="lazy"
                    style={{ pointerEvents: 'none' }}
                  />
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-end justify-center pb-8 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 group"
                  >
                    <span
                      className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-black rounded-md transition-transform group-hover:scale-105 shadow-[0_8px_24px_rgba(212,175,55,0.4)]"
                      style={{
                        background:
                          'linear-gradient(135deg, #F7E8A4 0%, #D4AF37 50%, #B8912B 100%)',
                      }}
                    >
                      <PlayCardIcon size={16} />
                      Try Live Demo
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
