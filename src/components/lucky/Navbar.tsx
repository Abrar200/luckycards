import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LOGO_URL = 'https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1775484181783_149ee0e5.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // Already on homepage — scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // On another page — navigate to homepage
      navigate('/');
    }
  };

  const links = [
    { label: 'Product', id: 'product' },
    { label: 'Features', id: 'features' },
    { label: 'Trust', id: 'trust' },
    { label: 'Integration', id: 'integration' },
    { label: 'Contact', id: 'contact' },
  ];


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg shadow-black/20' : ''
      }`}
      style={{ background: scrolled ? 'linear-gradient(135deg, #8E1828, #BE2034)' : '#BE2034' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[64px] sm:h-[68px] lg:h-[72px] flex items-center justify-between">

        {/* Logo — clickable, navigates to homepage or scrolls to top */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleLogoClick();
          }}
          className="flex-shrink-0 flex items-center mr-6 cursor-pointer transition-opacity duration-200 hover:opacity-80"
          aria-label="Go to homepage"
        >
          <div className="overflow-hidden h-[36px] sm:h-[40px] lg:h-[44px] flex items-center">
            <img
              src={LOGO_URL}
              alt="Lucky Cards"
              className="h-[90px] sm:h-[105px] lg:h-[115px] w-auto max-w-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] brightness-110"
            />
          </div>
        </a>





        {/* Desktop nav — centered links with CTA */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-[13px] font-medium text-white/80 hover:text-white transition-colors duration-200 tracking-wide uppercase"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="ml-4 px-5 py-2 text-[12px] font-semibold text-black rounded-lg transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-[#D4AF37]/30"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #FFD700)' }}
          >
            Request Integration
          </button>

        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/90 p-1"
          aria-label="Menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-5 py-4 space-y-1 border-t border-white/10" style={{ background: '#A51B2D' }}>
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="block w-full text-left px-3 py-2.5 text-sm text-white/80 hover:text-white rounded transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="block w-full mt-3 px-5 py-2.5 text-sm font-semibold text-black rounded-lg text-center"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #FFD700)' }}
          >
            Request Integration
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
