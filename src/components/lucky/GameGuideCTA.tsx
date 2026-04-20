import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import GameGuideModal from '@/components/lucky/GameGuideModal';
import { GameGuideIcon, RuleBookIcon } from '@/components/lucky/CasinoIcons';

const GameGuideCTA: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  return (
    <>
      <section id="game-guide" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8102E]/10 to-transparent" />

        {/* Ambient glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-[#C8102E]/[0.03] blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#D4AF37]/[0.03] blur-[100px] pointer-events-none" />

        <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Decorative casino icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] mb-6 text-[#D4AF37]">
              <GameGuideIcon size={32} />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Explore the Game
            </h2>
            <p className="mt-4 text-base text-white/40 leading-relaxed font-normal max-w-lg mx-auto">
              Get a full breakdown of gameplay, betting options, and mechanics.
            </p>

            {/* CTA button */}
            <div className="mt-8">
              <button
                onClick={() => setIsGuideOpen(true)}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Button background with gold gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] opacity-100 group-hover:opacity-90 transition-opacity duration-300" />
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

                <span className="relative text-black font-bold">View Full Game Guide</span>
                <span className="relative text-black/80 group-hover:text-black transition-colors duration-300">
                  <RuleBookIcon size={18} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Game Guide Modal */}
      <GameGuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </>
  );
};

export default GameGuideCTA;
