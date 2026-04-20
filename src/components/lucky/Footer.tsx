import React from 'react';

const LOGO_URL = 'https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1775484181783_149ee0e5.png';
const NEXA_LOGO_URL = 'https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1775490871252_0957ce10.png';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative" style={{ background: '#BE2034' }}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Main footer row */}
        <div className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-6 md:gap-12">
          {/* Left — Brand */}
          <div className="flex flex-col gap-1">
            <div className="overflow-hidden h-[44px] sm:h-[50px] lg:h-[56px] flex items-center">
              <img
                src={LOGO_URL}
                alt="Lucky Cards"
                className="h-[110px] sm:h-[130px] lg:h-[150px] w-auto max-w-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] brightness-110"
              />
            </div>
          </div>


          {/* Right — Navigation links */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-medium tracking-wide">
              <button onClick={() => scrollTo('product')} className="text-white/85 hover:text-[#FFD700] transition-colors duration-200">Product</button>
              <button onClick={() => scrollTo('features')} className="text-white/85 hover:text-[#FFD700] transition-colors duration-200">Features</button>
              <button onClick={() => scrollTo('integration')} className="text-white/85 hover:text-[#FFD700] transition-colors duration-200">Integration</button>
              <button onClick={() => scrollTo('contact')} className="text-white/85 hover:text-[#FFD700] transition-colors duration-200">Contact</button>
            </nav>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] tracking-wide">
              <button onClick={(e) => e.preventDefault()} className="text-white/50 hover:text-white/80 transition-colors duration-200">Privacy Policy</button>
              <span className="text-white/20">|</span>
              <button onClick={(e) => e.preventDefault()} className="text-white/50 hover:text-white/80 transition-colors duration-200">Terms of Service</button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/12" />

        {/* Bottom bar */}
        <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-white/50 tracking-wide">
            &copy; {new Date().getFullYear()} Lucky Cards Pty Ltd. All rights reserved.
          </span>

          {/* Technology Partner — increased size, subtle opacity, right-aligned */}
          <a
            href="https://nexadigital.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 opacity-[0.85] hover:opacity-100 transition-all duration-300"
          >
            <span className="text-[11px] tracking-widest uppercase text-white/45 group-hover:text-white/65 transition-colors duration-300 font-medium">
              Technology Partner
            </span>
            <span className="text-white/20 text-xs">:</span>
            <img
              src={NEXA_LOGO_URL}
              alt="Nexa Digital"
              className="h-[26px] w-auto brightness-[0.92] group-hover:brightness-110 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
