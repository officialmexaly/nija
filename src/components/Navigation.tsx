import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-react';

export function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-surface/80 backdrop-blur-md border-b border-subtle shadow-subtle'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-3"
            aria-label="Home"
          >
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-subtle dark:bg-white dark:text-accent">
              <span className="text-white font-bold text-base dark:text-accent">N</span>
            </div>
            <span className="text-lg font-bold text-text hidden sm:block tracking-tight">
              Naja'atu
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2.5 text-sm font-medium text-secondary hover:text-text transition-all rounded-lg hover:bg-border-subtle"
              >
                {link.label}
              </a>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2.5 rounded-lg hover:bg-border-subtle transition-all"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <SunIcon className="w-5 h-5 text-text" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5 text-text" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-lg hover:bg-border-subtle transition-all"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <SunIcon className="w-5 h-5 text-text" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5 text-text" aria-hidden="true" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-lg hover:bg-border-subtle transition-all"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <XIcon className="w-6 h-6 text-text" />
              ) : (
                <MenuIcon className="w-6 h-6 text-text" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-subtle mt-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-4 py-3 text-base font-medium text-secondary hover:text-text transition-all rounded-lg hover:bg-border-subtle"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
