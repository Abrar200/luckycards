import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  ApiCardIcon,
  RuleBookIcon,
  DealerHandIcon,
  CustomChipIcon,
} from '@/components/lucky/CasinoIcons';

const specs = [
  {
    label: 'API-driven integration',
    desc: 'RESTful API with comprehensive documentation for fast setup.',
    icon: <ApiCardIcon size={22} />,
  },
  {
    label: 'Clear documentation provided',
    desc: 'Everything you need to get started, clearly documented.',
    icon: <RuleBookIcon size={22} />,
  },
  {
    label: 'Support throughout onboarding',
    desc: 'Dedicated support to ensure a smooth launch.',
    icon: <DealerHandIcon size={22} />,
  },
  {
    label: 'Custom configuration available',
    desc: 'Tailor features and settings to match your platform needs.',
    icon: <CustomChipIcon size={22} />,
  },
];

const Integrations: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="integration" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Ambient */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] rounded-full bg-[#D4AF37]/[0.035] blur-[130px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] mb-5">
              <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
              <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase">
                Integration
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Simple Integration.<br />
              <span className="text-white/90">Fast Deployment.</span>
            </h2>
            <p className="mt-5 text-base text-white/60 leading-relaxed max-w-md font-normal">
              API-ready architecture with clean documentation and aggregator compatibility. Get Lucky Cards live on your platform without the usual overhead.
            </p>
            <button
              onClick={() => scrollTo('contact')}
              className="group relative mt-8 px-7 py-3.5 text-sm font-bold text-black rounded-lg transition-all duration-300 overflow-hidden shadow-[0_10px_30px_-8px_rgba(212,175,55,0.5)] hover:shadow-[0_14px_36px_-8px_rgba(212,175,55,0.65)]"
              style={{
                background:
                  'linear-gradient(135deg, #F7E8A4 0%, #D4AF37 50%, #B8912B 100%)',
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-[900ms]" />
              <span className="relative">Request Integration</span>
            </button>
          </div>

          {/* Right — Spec list */}
          <div className="space-y-3.5">
            {specs.map((s, i) => (
              <div
                key={i}
                className={`group flex items-start gap-4 p-5 rounded-xl border border-white/[0.07] bg-gradient-to-b from-white/[0.025] to-white/[0.005] transition-all duration-500 hover:border-[#D4AF37]/25 hover:from-[#D4AF37]/[0.04] hover:to-[#D4AF37]/[0.01] hover:-translate-y-0.5 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{
                  transitionDelay: isVisible ? `${200 + i * 80}ms` : '0ms',
                  boxShadow: '0 1px 0 rgba(255,255,255,0.04) inset',
                }}
              >
                <div className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center text-[#D4AF37]/80 border border-[#D4AF37]/20 bg-[#D4AF37]/[0.08] group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/[0.12] group-hover:shadow-[0_0_18px_rgba(212,175,55,0.18)] transition-all duration-400">
                  {s.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{s.label}</h4>
                  <p className="text-[13px] text-white/50 mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;

