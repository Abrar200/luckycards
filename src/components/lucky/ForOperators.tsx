import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  ScalableArchIcon,
  ConfigCardIcon,
  CrossDeviceIcon,
  RegulatedShieldIcon,
} from '@/components/lucky/CasinoIcons';

const operatorBenefits = [
  {
    label: 'Lightweight and scalable architecture',
    icon: <ScalableArchIcon size={22} />,
  },
  {
    label: 'Flexible feature configuration',
    icon: <ConfigCardIcon size={22} />,
  },
  {
    label: 'Works across mobile and desktop',
    icon: <CrossDeviceIcon size={22} />,
  },
  {
    label: 'Designed for regulated markets',
    icon: <RegulatedShieldIcon size={22} />,
  },
];

const ForOperators: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="operators" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Ambient */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[350px] rounded-full bg-[#D4AF37]/[0.035] blur-[120px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left — Copy */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] mb-5">
              <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
              <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase">
                For Operators
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Designed for<br />
              <span className="text-white/90">Casino Platforms.</span>
            </h2>
            <p className="mt-5 text-base text-white/60 leading-relaxed max-w-md font-normal">
              Lucky Cards is built to drop seamlessly into modern casino environments — without heavy lift or long integration cycles.
            </p>
            <p className="mt-4 text-sm text-white/40 leading-relaxed max-w-md font-normal">
              Whether you're launching a new operation or expanding an existing portfolio, Lucky Cards fits straight into your platform and aggregator stack.
            </p>
          </div>

          {/* Right — Benefits */}
          <div className="space-y-3.5">
            {operatorBenefits.map((item, i) => (
              <div
                key={i}
                className={`group flex items-center gap-4 p-5 rounded-xl border border-white/[0.07] bg-gradient-to-b from-white/[0.025] to-white/[0.005] transition-all duration-500 hover:border-[#D4AF37]/25 hover:from-[#D4AF37]/[0.04] hover:to-[#D4AF37]/[0.01] hover:-translate-y-0.5 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: isVisible ? `${200 + i * 80}ms` : '0ms',
                  boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset',
                }}
              >
                <div className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center text-[#D4AF37]/80 border border-[#D4AF37]/20 bg-[#D4AF37]/[0.08] group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/[0.12] group-hover:shadow-[0_0_18px_rgba(212,175,55,0.18)] transition-all duration-400">
                  {item.icon}
                </div>
                <span className="text-sm sm:text-base font-semibold text-white/85 group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForOperators;
