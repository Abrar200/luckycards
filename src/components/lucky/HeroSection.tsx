import React, { useEffect, useState } from 'react';
import { PlayCardIcon, ArrowCardIcon } from '@/components/lucky/CasinoIcons';

const DEMO_URL =
  'https://demo.luckycards.live/?code=eeafb98c-1c4b-4d83-86bd-a2be0ce0568a&playerId=savvas&test=true';
const GAMEPLAY_VIDEO_URL =
  'https://iframe.mediadelivery.net/embed/632128/6f9d7068-1682-4674-b33d-fd7415530f78?autoplay=true&loop=true&muted=true&preload=true&controls=false';
const BG_VIDEO_URL =
  'https://iframe.mediadelivery.net/embed/632128/498fd48a-89ea-433b-9c7f-f53f18753ab9?autoplay=true&loop=true&muted=true&preload=true&controls=false&background=true';
const FALLBACK_IMAGE =
  'https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1775486858517_50bbad87.png';

const HeroSection: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '~20s', label: 'Round Duration' },
    { value: 'Multi', label: 'Bet Outcomes' },
    { value: 'RNG', label: 'Certification Ready' },
    { value: '100%', label: 'White-Label' },
  ];

  return (
    <section className="relative overflow-hidden bg-black pt-[64px] sm:pt-[68px] lg:pt-[72px]">

      {/* ── Background layers ── */}
      <div className="absolute inset-0">

        {/* Background VIDEO — desktop/tablet only, centred cover */}
        <div className="absolute inset-0 hidden md:block overflow-hidden">
          <iframe
            src={BG_VIDEO_URL}
            title="Background ambiance"
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            loading="eager"
            className="absolute border-0"
            style={{
              top: '55%',
              left: '50%',
              width: '120%',
              height: '120%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              filter: 'brightness(0.45) contrast(0.95) saturate(1.15)',
            }}
          />
        </div>

        {/* Static FALLBACK image — mobile only */}
        <div
          className="absolute inset-0 md:hidden scale-105"
          style={{
            backgroundImage: `url(${FALLBACK_IMAGE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(8px) saturate(1.1) contrast(0.95) brightness(0.75)',
          }}
        />

        {/* Primary dark overlay */}
        <div className="absolute inset-0 bg-black/[0.78]" />

        {/* Deep red radial from bottom-left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 75% 65% at 10% 90%, rgba(140,12,30,0.35) 0%, transparent 60%)',
          }}
        />

        {/* Gold radial from top-right */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            background:
              'radial-gradient(ellipse 55% 60% at 85% 20%, rgba(212,175,55,0.55) 0%, transparent 65%)',
          }}
        />

        {/* Diagonal gold highlight sweep */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            background:
              'linear-gradient(115deg, transparent 35%, rgba(212,175,55,0.5) 50%, transparent 65%)',
          }}
        />

        {/* Left-to-right copy legibility gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.15) 75%, transparent 100%)',
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(0,0,0,0.7) 100%)',
          }}
        />

        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="pt-14 pb-12 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-20">

          {/* Two-column grid */}
          <div className="grid lg:grid-cols-[1.1fr_420px] gap-12 lg:gap-16 items-center">

            {/* ═══ LEFT COLUMN — Copy ═══ */}
            <div
              className={`transition-all duration-700 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Eyebrow tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.06] backdrop-blur-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)] animate-pulse" />
                <span className="text-[11px] font-semibold text-[#D4AF37] tracking-[0.18em] uppercase">
                  B2B Casino Product · Partner Integration
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-[2.75rem] sm:text-6xl lg:text-[4.75rem] font-black leading-[0.98] tracking-[-0.025em] text-white">
                High-Frequency
                <br />
                <span
                  className="inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(110deg, #F7E8A4 0%, #D4AF37 35%, #FFD75A 60%, #B8912B 100%)',
                  }}
                >
                  Casino Gameplay
                </span>
                <br />
                <span className="text-white/90">Built for Revenue.</span>
              </h1>

              {/* Subheadline */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/65 leading-relaxed max-w-xl font-normal">
                <span className="text-white font-semibold">Lucky Cards</span> is a fast-round, multi-outcome card game engineered for operators — higher bet frequency, stronger retention, and seamless integration into modern casino platforms.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-9">
                <button
                  onClick={() => scrollTo('contact')}
                  className="group relative px-7 py-4 text-sm font-bold text-black rounded-lg transition-all duration-300 overflow-hidden active:scale-[0.98] shadow-[0_12px_40px_-8px_rgba(212,175,55,0.55)] hover:shadow-[0_18px_48px_-8px_rgba(212,175,55,0.7)]"
                  style={{
                    background:
                      'linear-gradient(135deg, #F7E8A4 0%, #D4AF37 45%, #B8912B 100%)',
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-[900ms]" />
                  <span className="relative flex items-center justify-center gap-2">
                    Partner With Us
                    <ArrowCardIcon size={14} />
                  </span>
                </button>
                <button
                  onClick={() => scrollTo('product')}
                  className="group px-7 py-4 text-sm font-semibold text-white/85 rounded-lg border border-white/15 bg-white/[0.03] backdrop-blur-sm hover:border-[#D4AF37]/40 hover:bg-white/[0.06] hover:text-white transition-all duration-300 text-center active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <span className="text-[#D4AF37]/80 group-hover:text-[#D4AF37] transition-colors duration-300">
                    <PlayCardIcon size={14} />
                  </span>
                  Watch Gameplay
                </button>
              </div>

              {/* Stats bar */}
              <div className="mt-10 lg:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm max-w-xl">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="px-4 py-4 bg-black/40 hover:bg-[#D4AF37]/[0.04] transition-colors duration-300"
                  >
                    <div className="text-lg sm:text-xl font-extrabold text-[#D4AF37] tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-medium text-white/50 tracking-[0.08em] uppercase mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ═══ RIGHT COLUMN — Video Frame ═══ */}
            <div
              className={`flex items-center justify-center transition-all duration-700 delay-150 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative w-[280px] sm:w-[320px] lg:w-[380px] mx-auto">
                {/* Background glow */}
                <div
                  className="absolute -inset-12 rounded-3xl blur-[70px] opacity-60"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(212,175,55,0.32) 0%, rgba(200,16,46,0.15) 50%, transparent 80%)',
                  }}
                />

                {/* Premium frame */}
                <div className="group relative rounded-2xl transition-transform duration-500 hover:scale-[1.015]">
                  {/* Animated gold border glow */}
                  <div
                    className="absolute -inset-[1.5px] rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(160deg, rgba(247,232,164,0.9), rgba(212,175,55,0.15) 30%, rgba(184,145,43,0.1) 70%, rgba(247,232,164,0.8))',
                    }}
                  />

                  {/* Inner container */}
                  <div
                    className="relative rounded-2xl overflow-hidden"
                    style={{
                      border: '1.5px solid rgba(212,175,55,0.35)',
                      boxShadow:
                        '0 40px 90px -15px rgba(0,0,0,0.9), 0 0 60px -15px rgba(212,175,55,0.18), inset 0 1px 0 rgba(255,255,255,0.08)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0506] to-black" />

                    <div className="relative" style={{ aspectRatio: '9 / 16' }}>
                      <iframe
                        src={GAMEPLAY_VIDEO_URL}
                        title="Lucky Cards Gameplay"
                        className="absolute inset-0 w-full h-full border-0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen={false}
                        loading="eager"
                        style={{ pointerEvents: 'none' }}
                      />
                      <div className="absolute inset-0 z-10" />

                      {/* Live badge */}
                      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm border border-[#C8102E]/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse shadow-[0_0_6px_rgba(200,16,46,0.9)]" />
                        <span className="text-[9px] font-bold text-white tracking-[0.15em] uppercase">Live</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Trust Line ── */}
      <div
        className={`relative z-10 pb-8 transition-all duration-700 delay-300 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/70 shadow-[0_0_6px_rgba(212,175,55,0.6)]" />
              <p className="text-[11px] sm:text-xs text-white/55 font-medium tracking-wide">
                GLI-19 aligned RNG
              </p>
            </div>
            <span className="text-white/20">·</span>
            <p className="text-[11px] sm:text-xs text-white/45 font-medium tracking-wide">
              Built for regulated markets
            </p>
            <span className="text-white/20 hidden sm:inline">·</span>
            <p className="text-[11px] sm:text-xs text-white/45 font-medium tracking-wide hidden sm:block">
              Technical documentation available on request
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
