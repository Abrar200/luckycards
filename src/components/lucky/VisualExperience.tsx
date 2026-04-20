import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  VisualFeedbackIcon,
  ImmersiveDisplayIcon,
  EngagementIcon,
  SessionDepthIcon,
} from '@/components/lucky/CasinoIcons';

const features = [
  {
    text: 'High-impact visual feedback on every player action',
    icon: <VisualFeedbackIcon size={22} />,
  },
  {
    text: 'Visually rich card reveals and outcome presentations',
    icon: <ImmersiveDisplayIcon size={22} />,
  },
  {
    text: 'Crafted to drive player engagement and focus',
    icon: <EngagementIcon size={22} />,
  },
  {
    text: 'Layered depth that rewards continued play',
    icon: <SessionDepthIcon size={22} />,
  },
];

const VisualExperience: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent" />

      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#D4AF37]/[0.02] blur-[140px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Engaging Visual Experience
            </h2>
            <p className="mt-4 text-base text-white/40 leading-relaxed max-w-md font-normal">
              Smooth, high-impact visual feedback and gameplay designed to keep players immersed and increase session time.
            </p>
            <p className="mt-4 text-sm text-white/25 leading-relaxed max-w-md font-normal">
              Every interaction is designed to feel responsive and rewarding — reinforcing player decisions and sustaining attention across rounds.
            </p>
          </div>

          {/* Right — Feature list */}
          <div className="space-y-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`group flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-white/[0.06] bg-white/[0.015] transition-all duration-500 hover:border-[#D4AF37]/15 hover:bg-[#D4AF37]/[0.02] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : '0ms' }}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-[#D4AF37]/80 border border-[#D4AF37]/20 bg-[#D4AF37]/[0.08] group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/[0.12] group-hover:shadow-[0_0_16px_rgba(212,175,55,0.1)] transition-all duration-400">
                  {feature.icon}
                </div>
                <span className="text-sm sm:text-base font-medium text-white/70">
                  {feature.text}
                </span>
              </div>
            ))}

            {/* Closing statement */}
            <p className="text-sm text-white/25 leading-relaxed font-normal pt-2 pl-1">
              Built to feel premium — every visual detail serves player retention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualExperience;
