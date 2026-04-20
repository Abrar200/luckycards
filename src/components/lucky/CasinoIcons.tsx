import React from 'react';

// ─── Base wrapper for consistent sizing + hover glow ───
interface IconProps {
  size?: number;
  className?: string;
}

const defaultSize = 28;

// ─── PLAYING CARDS (fanned) — Multi-Outcome Betting ───
export const CardsFannedIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Back card — rotated left */}
    <rect x="4" y="5" width="14" height="20" rx="2.5" stroke="currentColor" strokeWidth="2" transform="rotate(-8 11 15)" />
    {/* Front card — rotated right */}
    <rect x="12" y="4" width="14" height="20" rx="2.5" stroke="currentColor" strokeWidth="2" transform="rotate(6 19 14)" fill="currentColor" fillOpacity="0.06" />
    {/* Diamond suit on front card */}
    <path d="M19 11L21 14L19 17L17 14Z" fill="currentColor" fillOpacity="0.5" />
  </svg>
);

// ─── FAST CARD DEAL — Fast Gameplay Loops ───
export const FastDealIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Card in motion */}
    <rect x="10" y="6" width="14" height="20" rx="2.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
    {/* Speed lines */}
    <line x1="4" y1="12" x2="8" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="2" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="20" x2="8" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Spade on card */}
    <path d="M17 12c0-2 2.5-3.5 2.5-1.5S17 14 17 14s-2.5-1.5-2.5-3.5S17 10 17 12z" fill="currentColor" fillOpacity="0.5" />
  </svg>
);

// ─── CASINO CHIP STACK — Real-Time Credit System ───
export const ChipStackIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Bottom chip */}
    <ellipse cx="16" cy="24" rx="10" ry="3.5" stroke="currentColor" strokeWidth="2" />
    {/* Middle chip */}
    <ellipse cx="16" cy="19" rx="10" ry="3.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.04" />
    <line x1="6" y1="19" x2="6" y2="24" stroke="currentColor" strokeWidth="2" />
    <line x1="26" y1="19" x2="26" y2="24" stroke="currentColor" strokeWidth="2" />
    {/* Top chip */}
    <ellipse cx="16" cy="14" rx="10" ry="3.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
    <line x1="6" y1="14" x2="6" y2="19" stroke="currentColor" strokeWidth="2" />
    <line x1="26" y1="14" x2="26" y2="19" stroke="currentColor" strokeWidth="2" />
    {/* Chip detail on top */}
    <ellipse cx="16" cy="14" rx="4" ry="1.5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5" />
  </svg>
);

// ─── JACKPOT DIAMOND — Optional Progressive Jackpot ───
export const JackpotDiamondIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Diamond shape */}
    <path d="M16 4L26 16L16 28L6 16Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.06" />
    {/* Inner facet lines */}
    <path d="M10 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
    <path d="M16 4L12 12L16 28" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
    <path d="M16 4L20 12L16 28" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
    {/* Sparkle top */}
    <line x1="16" y1="1" x2="16" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
    <line x1="13" y1="2" x2="14" y2="3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.4" />
    <line x1="19" y1="2" x2="18" y2="3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.4" />
  </svg>
);

// ─── CARD TABLE LAYOUT — Clean, Intuitive UI ───
export const CardTableIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Table felt (rounded rectangle) */}
    <rect x="3" y="7" width="26" height="18" rx="9" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
    {/* Card positions on table */}
    <rect x="7" y="12" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.6" />
    <rect x="13.5" y="12" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.6" />
    <rect x="20" y="12" width="5" height="7" rx="1" stroke="currentColor" strokeWidth="1.3" strokeOpacity="0.6" />
  </svg>
);

// ─── CARD WITH HEART SUIT — Easy Entry / Player Retention ───
export const CardHeartIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    <rect x="6" y="4" width="20" height="24" rx="2.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
    {/* Heart suit */}
    <path d="M16 22c-4-3-6-5.5-6-8a3 3 0 0 1 6 0 3 3 0 0 1 6 0c0 2.5-2 5-6 8z" fill="currentColor" fillOpacity="0.45" />
  </svg>
);

// ─── CONTINUOUS DEAL (looping arrows with card) — Continuous Betting ───
export const ContinuousDealIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Circular arrows */}
    <path d="M24 10A9 9 0 0 0 8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 22A9 9 0 0 0 24 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Arrow heads */}
    <polyline points="6 8 8 10 10 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <polyline points="22 24 24 22 26 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Small card in center */}
    <rect x="13" y="12" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
  </svg>
);

// ─── MULTI-WIN CARDS — Multiple Ways to Win ───
export const MultiWinIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Three cards fanned */}
    <rect x="3" y="8" width="10" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(-12 8 15)" />
    <rect x="11" y="6" width="10" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.04" />
    <rect x="18" y="8" width="10" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" transform="rotate(12 23 15)" fill="currentColor" fillOpacity="0.06" />
    {/* Star/win indicator */}
    <circle cx="16" cy="24" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
    <path d="M16 21.5L16.8 23.2L18.7 23.5L17.35 24.8L17.65 26.7L16 25.8L14.35 26.7L14.65 24.8L13.3 23.5L15.2 23.2Z" fill="currentColor" fillOpacity="0.6" />
  </svg>
);

// ─── SESSION TIMER — Increase Session Time ───
export const SessionTimerIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Clock face */}
    <circle cx="16" cy="17" r="11" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
    {/* Clock hands */}
    <line x1="16" y1="17" x2="16" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="17" x2="21" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Top knob */}
    <line x1="16" y1="3" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Card suit on face */}
    <path d="M13 20L16 23L19 20L16 17Z" fill="currentColor" fillOpacity="0.3" />
  </svg>
);

// ─── SCALABLE ARCHITECTURE — Lightweight/Scalable ───
export const ScalableArchIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Stacked layers */}
    <path d="M16 6L28 12L16 18L4 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.06" />
    <path d="M4 17L16 23L28 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 22L16 28L28 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Diamond on top layer */}
    <path d="M16 9L18 12L16 15L14 12Z" fill="currentColor" fillOpacity="0.4" />
  </svg>
);

// ─── CONFIG CARD — Flexible Feature Configuration ───
export const ConfigCardIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Card */}
    <rect x="6" y="4" width="20" height="24" rx="2.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
    {/* Sliders on card */}
    <line x1="11" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
    <circle cx="15" cy="12" r="1.8" fill="currentColor" fillOpacity="0.7" stroke="currentColor" strokeWidth="1" />
    <line x1="11" y1="17" x2="21" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
    <circle cx="19" cy="17" r="1.8" fill="currentColor" fillOpacity="0.7" stroke="currentColor" strokeWidth="1" />
    <line x1="11" y1="22" x2="21" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
    <circle cx="13" cy="22" r="1.8" fill="currentColor" fillOpacity="0.7" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// ─── CROSS-DEVICE CARDS — Works Across Mobile & Desktop ───
export const CrossDeviceIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Desktop monitor */}
    <rect x="2" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
    <line x1="7" y1="19" x2="15" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="11" y1="19" x2="11" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Mobile phone */}
    <rect x="21" y="11" width="9" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
    <line x1="24" y1="24" x2="27" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
    {/* Card on desktop */}
    <rect x="8" y="8" width="4" height="6" rx="0.8" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" fill="currentColor" fillOpacity="0.1" />
  </svg>
);

// ─── SHIELD WITH CARD SUIT — Regulated Markets ───
export const RegulatedShieldIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Shield */}
    <path d="M16 3L27 8V16C27 22 22 27 16 29C10 27 5 22 5 16V8L16 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.06" />
    {/* Checkmark inside */}
    <polyline points="11 16 14.5 19.5 21 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── API CARD — API-Driven Integration ───
export const ApiCardIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Card shape */}
    <rect x="4" y="4" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
    {/* Code brackets */}
    <polyline points="12 11 8 16 12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="20 11 24 16 20 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Slash */}
    <line x1="17" y1="10" x2="15" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
  </svg>
);

// ─── RULE BOOK — Documentation ───
export const RuleBookIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Book shape */}
    <path d="M6 4H24C25.1 4 26 4.9 26 6V26C26 27.1 25.1 28 24 28H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="currentColor" fillOpacity="0.06" />
    <path d="M6 4V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Spine */}
    <line x1="10" y1="4" x2="10" y2="28" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
    {/* Card suit on cover */}
    <path d="M18 12L20 15L18 18L16 15Z" fill="currentColor" fillOpacity="0.45" />
    {/* Text lines */}
    <line x1="14" y1="21" x2="22" y2="21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.4" />
    <line x1="14" y1="24" x2="19" y2="24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.4" />
  </svg>
);

// ─── DEALER HAND — Support / Onboarding ───
export const DealerHandIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Hand/glove shape */}
    <path d="M10 18V10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10V6C14 4.9 14.9 4 16 4C17.1 4 18 4.9 18 6V10C18 8.9 18.9 8 20 8C21.1 8 22 8.9 22 10V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.06" />
    {/* Palm */}
    <path d="M10 18C10 18 8 20 8 22C8 25 10 28 16 28C22 28 24 25 24 22C24 20 22 18 22 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Card being dealt */}
    <rect x="14" y="13" width="4" height="5.5" rx="0.8" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" fill="currentColor" fillOpacity="0.15" />
  </svg>
);

// ─── CUSTOM CHIP — Custom Configuration ───
export const CustomChipIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Chip circle */}
    <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
    {/* Inner ring */}
    <circle cx="16" cy="16" r="6.5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
    {/* Edge notches */}
    <line x1="16" y1="3" x2="16" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="25" x2="16" y2="29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="3" y1="16" x2="7" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="25" y1="16" x2="29" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Center diamond */}
    <path d="M16 12L19 16L16 20L13 16Z" fill="currentColor" fillOpacity="0.45" />
  </svg>
);

// ─── GAME GUIDE BOOK — Game Guide CTA ───
export const GameGuideIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Open book */}
    <path d="M16 8C14 6 10 5 6 5V25C10 25 14 26 16 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.04" />
    <path d="M16 8C18 6 22 5 26 5V25C22 25 18 26 16 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.06" />
    {/* Card suits on pages */}
    <path d="M10 13L11.5 15.5L10 18L8.5 15.5Z" fill="currentColor" fillOpacity="0.4" />
    <circle cx="22" cy="15" r="2" fill="currentColor" fillOpacity="0.3" />
    {/* Page lines */}
    <line x1="8" y1="20" x2="13" y2="20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.3" />
    <line x1="19" y1="20" x2="24" y2="20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.3" />
  </svg>
);

// ─── PLAY BUTTON (card-themed) ───
export const PlayCardIcon: React.FC<IconProps> = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <polygon points="6 3 20 12 6 21" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

// ─── ARROW RIGHT (card-themed) ───
export const ArrowCardIcon: React.FC<IconProps> = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <polyline points="14 7 19 12 14 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// ─── EMAIL ICON (card-themed envelope) ───
export const CardEnvelopeIcon: React.FC<IconProps> = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
    <polyline points="2 5 12 13 22 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// ─── SUCCESS CHECK (chip-style) ───
export const ChipCheckIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
    <polyline points="8 12 11 15 16 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// ─── VISUAL FEEDBACK (card with radiating impact lines) ───
export const VisualFeedbackIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Card */}
    <rect x="9" y="7" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
    {/* Diamond on card */}
    <path d="M16 12L18.5 16L16 20L13.5 16Z" fill="currentColor" fillOpacity="0.45" />
    {/* Radiating impact lines */}
    <line x1="5" y1="10" x2="7" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
    <line x1="4" y1="16" x2="7" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
    <line x1="5" y1="22" x2="7" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
    <line x1="27" y1="10" x2="25" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
    <line x1="28" y1="16" x2="25" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
    <line x1="27" y1="22" x2="25" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
  </svg>
);

// ─── IMMERSIVE DISPLAY (eye with card suit pupil) ───
export const ImmersiveDisplayIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Eye shape */}
    <path d="M3 16C3 16 8 8 16 8C24 8 29 16 29 16C29 16 24 24 16 24C8 24 3 16 3 16Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.04" />
    {/* Iris */}
    <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
    {/* Diamond pupil */}
    <path d="M16 13L18 16L16 19L14 16Z" fill="currentColor" fillOpacity="0.55" />
  </svg>
);

// ─── ENGAGEMENT MAGNET (magnet with card) ───
export const EngagementIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Upward trend line */}
    <polyline points="4 24 11 17 17 20 28 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Arrow head */}
    <polyline points="22 8 28 8 28 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Pulse dots */}
    <circle cx="11" cy="17" r="2" fill="currentColor" fillOpacity="0.3" />
    <circle cx="17" cy="20" r="2" fill="currentColor" fillOpacity="0.3" />
  </svg>
);

// ─── SESSION DEPTH (layered cards with depth) ───
export const SessionDepthIcon: React.FC<IconProps> = ({ size = defaultSize, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
    {/* Back card */}
    <rect x="6" y="4" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
    {/* Middle card */}
    <rect x="9" y="7" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" fill="currentColor" fillOpacity="0.03" />
    {/* Front card */}
    <rect x="12" y="10" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
    {/* Sparkle on front card */}
    <line x1="19" y1="15" x2="19" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
    <line x1="18" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6" />
    <line x1="19" y1="20" x2="19" y2="24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3" />
    <line x1="17" y1="22" x2="21" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3" />
  </svg>
);
