import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  RegulatedShieldIcon,
  CustomChipIcon,
  ScalableArchIcon,
  RuleBookIcon,
} from '@/components/lucky/CasinoIcons';

const pillars = [
  {
    title: 'RNG Certification Ready',
    desc: 'Architecture aligned with GLI-19 standards. Third-party certification available upon operator request.',
    icon: <RegulatedShieldIcon size={24} />,
  },
  {
    title: 'Configurable RTP',
    desc: 'Flexible RTP bands to match jurisdictional requirements and operator preferences.',
    icon: <CustomChipIcon size={24} />,
  },
  {
    title: 'Regulated Markets',
    desc: 'Purpose-built to meet compliance obligations across licensed casino markets.',
    icon: <RuleBookIcon size={24} />,
  },
  {
    title: 'Secure & Scalable',
    desc: 'Hardened infrastructure, encrypted transport, and horizontal scaling for peak traffic.',
    icon: <ScalableArchIcon size={24} />,
  },
];

const TrustCredibility: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="trust" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />

      {/* Ambient glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-[#D4AF37]/[0.04] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[350px] rounded-full bg-[#C8102E]/[0.035] blur-[120px] pointer-events-none" />

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
              Trust & Compliance
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Built to the Standards<br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(110deg, #F7E8A4 0%, #D4AF37 50%, #B8912B 100%)',
              }}
            >
              Operators Demand
            </span>
          </h2>
          <p className="mt-5 text-base text-white/55 leading-relaxed font-normal max-w-xl mx-auto">
            Lucky Cards is engineered for real-money environments — fair, auditable, and compliant from the ground up.
          </p>
        </div>

        {/* 4-column pillar grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`group relative p-6 rounded-xl border border-white/[0.07] bg-gradient-to-b from-white/[0.03] to-white/[0.005] backdrop-blur-sm transition-all duration-500 hover:border-[#D4AF37]/30 hover:from-[#D4AF37]/[0.06] hover:to-[#D4AF37]/[0.01] hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + i * 100}ms` : '0ms',
                boxShadow:
                  '0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)',
              }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-10 h-10 overflow-hidden rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-px -right-px w-10 h-px bg-gradient-to-l from-[#D4AF37]/70 to-transparent" />
                <div className="absolute -top-px -right-px h-10 w-px bg-gradient-to-b from-[#D4AF37]/70 to-transparent" />
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#D4AF37]/80 border border-[#D4AF37]/20 bg-[#D4AF37]/[0.08] mb-4 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/40 group-hover:bg-[#D4AF37]/[0.12] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-400">
                {p.icon}
              </div>

              <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                {p.title}
              </h3>
              <p className="text-[13px] text-white/50 leading-relaxed font-normal">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div
          className={`mt-10 flex items-center justify-center gap-2 transition-all duration-600 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20" />
          <p className="text-[11px] text-white/45 font-medium tracking-wide text-center">
            Full technical & compliance documentation available on request
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20" />
        </div>
      </div>
    </section>
  );
};

export default TrustCredibility;
