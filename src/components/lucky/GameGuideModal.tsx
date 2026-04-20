import React, { useEffect, useState } from 'react';
import { RuleBookIcon, JackpotDiamondIcon } from '@/components/lucky/CasinoIcons';

const EMBED_URL =
  'https://drive.google.com/file/d/1E1rfpUwn3gbNHbBAyMHa_hy3xQfh5UYD/preview';

interface GameGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GameGuideModal: React.FC<GameGuideModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimateIn(true));
      });
      setIsLoading(true);
    } else {
      document.body.style.overflow = '';
      setAnimateIn(false);
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-500 ${
        animateIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-500 ${
          animateIn ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#C8102E]/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#D4AF37]/[0.04] blur-[100px] pointer-events-none" />

      {/* Modal container */}
      <div
        className={`relative z-10 w-[95vw] h-[92vh] max-w-6xl flex flex-col rounded-2xl overflow-hidden transition-all duration-500 ease-out ${
          animateIn ? 'scale-100 translate-y-0' : 'scale-95 translate-y-6'
        }`}
      >
        {/* Outer glow border */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#D4AF37]/30 via-[#D4AF37]/10 to-[#D4AF37]/5 pointer-events-none" />

        {/* Inner container */}
        <div className="relative flex flex-col w-full h-full rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/[0.06]">
          {/* Header bar */}
          <div className="relative flex items-center justify-between px-5 sm:px-7 py-4 bg-gradient-to-r from-[#0a0a0a] via-[#111] to-[#0a0a0a] border-b border-white/[0.06]">
            {/* Left: Icon + Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#D4AF37]/20 bg-[#D4AF37]/[0.08] text-[#D4AF37]">
                <RuleBookIcon size={22} />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  Lucky Cards Game Guide
                </h3>
                <p className="text-[11px] text-white/30 font-medium hidden sm:block">
                  Complete rules, payouts & gameplay reference
                </p>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              {/* Download link */}
              <a
                href="https://drive.google.com/uc?export=download&id=1E1rfpUwn3gbNHbBAyMHa_hy3xQfh5UYD"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] hover:bg-[#D4AF37]/[0.12] hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download PDF
              </a>

              {/* Close button */}
              <button
                onClick={onClose}
                className="group w-9 h-9 rounded-lg flex items-center justify-center border border-white/[0.08] bg-white/[0.02] hover:bg-[#C8102E]/10 hover:border-[#C8102E]/30 transition-all duration-300"
                aria-label="Close guide"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/50 group-hover:text-[#C8102E] transition-colors duration-300"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Gold accent line under header */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

          {/* PDF Viewer area */}
          <div className="relative flex-1 bg-[#080808]">
            {/* Loading state */}
            {isLoading && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#080808]">
                {/* Animated card loader */}
                <div className="relative w-16 h-16 mb-6">
                  <div className="absolute inset-0 rounded-xl border-2 border-[#D4AF37]/20 animate-ping" />
                  <div className="absolute inset-0 flex items-center justify-center text-[#D4AF37]">
                    <div className="w-10 h-14 rounded-lg border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/10 to-transparent flex items-center justify-center">
                      <JackpotDiamondIcon size={22} />
                    </div>
                  </div>
                </div>
                <p className="text-sm font-semibold text-white/50">
                  Loading Game Guide...
                </p>
                <div className="mt-3 w-40 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                  <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#D4AF37]/40 to-[#D4AF37]"
                    style={{
                      animation: 'loadingBar 1.5s ease-in-out infinite',
                    }}
                  />
                </div>
              </div>
            )}

            {/* Embedded PDF */}
            <iframe
              src={EMBED_URL}
              className="w-full h-full border-0"
              title="Lucky Cards Game Guide"
              allow="autoplay"
              onLoad={() => setIsLoading(false)}
              style={{ minHeight: '100%' }}
            />
          </div>

          {/* Bottom bar */}
          <div className="relative px-5 sm:px-7 py-3 bg-gradient-to-r from-[#0a0a0a] via-[#111] to-[#0a0a0a] border-t border-white/[0.06] flex items-center justify-between">
            <p className="text-[11px] text-white/25 font-medium">
              Lucky Cards Pty Ltd — Confidential Game Documentation
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
              <span className="text-[11px] text-white/30 font-medium">
                Live Document
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for loading animation */}
      <style>{`
        @keyframes loadingBar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default GameGuideModal;
