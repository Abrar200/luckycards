import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  CardsFannedIcon,
  FastDealIcon,
  ChipStackIcon,
  JackpotDiamondIcon,
  CardTableIcon,
} from '@/components/lucky/CasinoIcons';

const features = [
  {
    title: 'Multi-Outcome Betting',
    description:
      'Players can bet across multiple outcomes in a single round, increasing engagement and spend.',
    icon: <CardsFannedIcon />,
  },
  {
    title: 'Fast Gameplay Loops',
    description:
      'Short rounds keep players active and continuously betting.',
    icon: <FastDealIcon />,
  },
  {
    title: 'Real-Time Credit System',
    description:
      'Seamless balance updates with no interruptions to gameplay.',
    icon: <ChipStackIcon />,
  },
  {
    title: 'Optional Progressive Jackpot',
    description:
      'Platforms can enable jackpot functionality to further increase retention.',
    icon: <JackpotDiamondIcon />,
  },
  {
    title: 'Clean, Intuitive UI',
    description:
      'Simple to learn, accessible to all player types.',
    icon: <CardTableIcon />,
  },
];

const HowItWorks: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C8102E]/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-[#D4AF37]/[0.02] blur-[100px] pointer-events-none" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] mb-5">
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
            <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase">
              Key Features
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Engineered to<br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(110deg, #F7E8A4 0%, #D4AF37 50%, #B8912B 100%)',
              }}
            >
              Drive Revenue.
            </span>
          </h2>
          <p className="mt-5 text-base text-white/60 leading-relaxed font-normal max-w-lg mx-auto">
            Every feature is purpose-built to drive engagement, retention, and operator revenue.
          </p>
        </div>


        {/* Feature cards — 5 items: 3 top, 2 bottom centered */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.slice(0, 3).map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative p-6 lg:p-7 rounded-xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-white/[0.005] transition-all duration-500 hover:border-[#D4AF37]/30 hover:from-[#D4AF37]/[0.05] hover:to-[#D4AF37]/[0.01] hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + i * 120}ms` : '0ms',
                boxShadow:
                  '0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)',
              }}
            >
              {/* Gold corner accent on hover */}
              <div className="absolute top-0 left-0 w-10 h-10 overflow-hidden rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-px -left-px w-10 h-px bg-gradient-to-r from-[#D4AF37]/70 to-transparent" />
                <div className="absolute -top-px -left-px h-10 w-px bg-gradient-to-b from-[#D4AF37]/70 to-transparent" />
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#D4AF37]/85 border border-[#D4AF37]/20 bg-[#D4AF37]/[0.08] mb-5 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/[0.14] group-hover:shadow-[0_0_24px_rgba(212,175,55,0.18)] transition-all duration-400">
                {feature.icon}
              </div>

              <h3 className="text-base lg:text-lg font-bold text-white mb-2.5 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom row — 2 centered cards */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 mt-5 lg:mt-6 max-w-2xl lg:max-w-[calc(66.666%+0.75rem)] mx-auto">
          {features.slice(3).map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative p-6 lg:p-7 rounded-xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-white/[0.005] transition-all duration-500 hover:border-[#D4AF37]/30 hover:from-[#D4AF37]/[0.05] hover:to-[#D4AF37]/[0.01] hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${560 + i * 120}ms` : '0ms',
                boxShadow:
                  '0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)',
              }}
            >
              <div className="absolute top-0 left-0 w-10 h-10 overflow-hidden rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-px -left-px w-10 h-px bg-gradient-to-r from-[#D4AF37]/70 to-transparent" />
                <div className="absolute -top-px -left-px h-10 w-px bg-gradient-to-b from-[#D4AF37]/70 to-transparent" />
              </div>

              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-[#D4AF37]/85 border border-[#D4AF37]/20 bg-[#D4AF37]/[0.08] mb-5 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/[0.14] group-hover:shadow-[0_0_24px_rgba(212,175,55,0.18)] transition-all duration-400">
                {feature.icon}
              </div>

              <h3 className="text-base lg:text-lg font-bold text-white mb-2.5 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
