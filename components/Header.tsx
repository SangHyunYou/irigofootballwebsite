import React, { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NavLink: React.FC<{
  section: string;
  activeSection: string;
  setActiveSection: (section: string) => void;
  children: React.ReactNode;
}> = ({ section, activeSection, setActiveSection, children }) => (
  <button
    onClick={() => setActiveSection(section)}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      activeSection === section
        ? 'bg-brand-green text-white'
        : 'text-gray-300 hover:bg-brand-gray hover:text-white'
    }`}
  >
    {children}
  </button>
);

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFootballSubMenuOpen, setIsFootballSubMenuOpen] = useState(false);

  const isFootballSectionActive = [
    'coaching-staff',
    'grade-1',
    'grade-2',
    'grade-3',
    'alumni',
  ].includes(activeSection);
  
  const handleMobileLinkClick = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    setIsFootballSubMenuOpen(false);
  };
  
  const MobileNavLink: React.FC<{
    section: string;
    children: React.ReactNode;
  }> = ({ section, children }) => (
    <button
      onClick={() => handleMobileLinkClick(section)}
      className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
        activeSection === section
          ? 'bg-brand-green text-white'
          : 'text-gray-300 hover:bg-brand-gray hover:text-white'
      }`}
    >
      {children}
    </button>
  );


  return (
    <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => handleMobileLinkClick('home')} className="flex-shrink-0 text-white text-xl font-bold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-brand-green" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span>이리고 축구부 후원회</span>
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink section="home" activeSection={activeSection} setActiveSection={setActiveSection}>홈</NavLink>
              <NavLink section="organization" activeSection={activeSection} setActiveSection={setActiveSection}>후원회조직</NavLink>
              <NavLink section="sponsors" activeSection={activeSection} setActiveSection={setActiveSection}>후원자</NavLink>
              
              <div className="relative group">
                <button
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center ${
                    isFootballSectionActive
                      ? 'bg-brand-green text-white'
                      : 'text-gray-300 hover:bg-brand-gray hover:text-white'
                  }`}
                >
                  축구부
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-brand-gray rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-10 py-1">
                    <a onClick={() => setActiveSection('coaching-staff')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-brand-dark hover:text-white cursor-pointer">코치진</a>
                    <a onClick={() => setActiveSection('grade-1')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-brand-dark hover:text-white cursor-pointer">1학년</a>
                    <a onClick={() => setActiveSection('grade-2')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-brand-dark hover:text-white cursor-pointer">2학년</a>
                    <a onClick={() => setActiveSection('grade-3')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-brand-dark hover:text-white cursor-pointer">3학년</a>
                    <a onClick={() => setActiveSection('alumni')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-brand-dark hover:text-white cursor-pointer">자랑스런 졸업생</a>
                </div>
              </div>

              <NavLink section="gallery" activeSection={activeSection} setActiveSection={setActiveSection}>갤러리</NavLink>
              <NavLink section="news" activeSection={activeSection} setActiveSection={setActiveSection}>소식</NavLink>
              <NavLink section="support" activeSection={activeSection} setActiveSection={setActiveSection}>후원안내</NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-gray focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">메인 메뉴 열기</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink section="home">홈</MobileNavLink>
          <MobileNavLink section="organization">후원회조직</MobileNavLink>
          <MobileNavLink section="sponsors">후원자</MobileNavLink>

          <div>
            <button
              onClick={() => setIsFootballSubMenuOpen(!isFootballSubMenuOpen)}
              className={`w-full text-left flex justify-between items-center px-4 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
                isFootballSectionActive
                  ? 'bg-brand-green text-white'
                  : 'text-gray-300 hover:bg-brand-gray hover:text-white'
              }`}
            >
              축구부
              <svg className={`w-5 h-5 transition-transform duration-300 ${isFootballSubMenuOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className={`${isFootballSubMenuOpen ? 'block' : 'hidden'} mt-1 pl-4 space-y-1`}>
              <button onClick={() => handleMobileLinkClick('coaching-staff')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-brand-dark hover:text-white cursor-pointer rounded-md">코치진</button>
              <button onClick={() => handleMobileLinkClick('grade-1')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-brand-dark hover:text-white cursor-pointer rounded-md">1학년</button>
              <button onClick={() => handleMobileLinkClick('grade-2')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-brand-dark hover:text-white cursor-pointer rounded-md">2학년</button>
              <button onClick={() => handleMobileLinkClick('grade-3')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-brand-dark hover:text-white cursor-pointer rounded-md">3학년</button>
              <button onClick={() => handleMobileLinkClick('alumni')} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-brand-dark hover:text-white cursor-pointer rounded-md">자랑스런 졸업생</button>
            </div>
          </div>

          <MobileNavLink section="gallery">갤러리</MobileNavLink>
          <MobileNavLink section="news">소식</MobileNavLink>
          <MobileNavLink section="support">후원안내</MobileNavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
