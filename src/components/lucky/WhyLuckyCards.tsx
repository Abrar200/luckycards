import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  CardHeartIcon,
  ContinuousDealIcon,
  MultiWinIcon,
  SessionTimerIcon,
} from '@/components/lucky/CasinoIcons';

const benefits = [
  {
    text: 'Higher bet frequency per session',
    sub: 'Short rounds mean more betting opportunities.',
    icon: <CardHeartIcon size={22} />,
  },
  {
    text: 'Simple rules, higher conversion',
    sub: 'Easy to learn — new players engage instantly.',
    icon: <ContinuousDealIcon size={22} />,
  },
  {
    text: 'Multiple outcomes, stronger loop',
    sub: 'Keeps players making decisions every round.',
    icon: <MultiWinIcon size={22} />,
  },
  {
    text: 'Designed to extend session time',
    sub: 'Optimised pacing and reward structure.',
    icon: <SessionTimerIcon size={22} />,
  },
];

const WhyLuckyCards: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="why-it-works" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8102E]/15 to-transparent" />

      {/* Subtle ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-[#C8102E]/[0.05] blur-[130px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C8102E]/25 bg-[#C8102E]/[0.06] mb-5">
              <span className="w-1 h-1 rounded-full bg-[#C8102E]" />
              <span className="text-[10px] font-bold text-[#FF5A6E] tracking-[0.2em] uppercase">
                Why Operators Choose Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Engineered for<br />
              <span className="text-white/90">Player Retention.</span>
            </h2>
            <p className="mt-5 text-base text-white/60 leading-relaxed max-w-md font-normal">
              Lucky Cards combines simplicity with high-frequency betting to create a gameplay loop that drives measurable engagement.
            </p>
            <p className="mt-4 text-sm text-white/40 leading-relaxed max-w-md font-normal italic">
              Built to keep players engaged, not just entertained.
            </p>
          </div>

          {/* Right — Benefits list */}
          <div className="space-y-3.5">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className={`group flex items-start gap-4 p-5 rounded-xl border border-white/[0.07] bg-gradient-to-b from-white/[0.025] to-white/[0.005] transition-all duration-500 hover:border-[#C8102E]/25 hover:from-[#C8102E]/[0.04] hover:to-[#C8102E]/[0.01] hover:-translate-y-0.5 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: isVisible ? `${200 + i * 100}ms` : '0ms',
                  boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset',
                }}
              >
                <div className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center text-[#FF5A6E]/90 border border-[#C8102E]/25 bg-[#C8102E]/[0.1] group-hover:text-[#FF5A6E] group-hover:border-[#C8102E]/40 group-hover:bg-[#C8102E]/[0.15] group-hover:shadow-[0_0_18px_rgba(200,16,46,0.2)] transition-all duration-400">
                  {benefit.icon}
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="text-sm sm:text-base font-semibold text-white/90">
                    {benefit.text}
                  </div>
                  <div className="text-xs text-white/45 mt-1 font-normal">
                    {benefit.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLuckyCards;
