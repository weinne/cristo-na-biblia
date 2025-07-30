
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import BiblicalPassageSearch from './BiblicalPassageSearch';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12',
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent dark:bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/src/assets/christ-bible-icon.png" alt="Cristo na Bíblia" className="w-8 h-8" />
          <span className="text-xl md:text-2xl font-crimson font-bold text-primary dark:text-gray-100">{t('christ-in-bible')}</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/">{t('home')}</NavLink>
          <NavLink to="/about">{t('about')}</NavLink>
          <NavLink to="/books">{t('books')}</NavLink>
          <NavLink to="/categories">{t('categories')}</NavLink>
          <BiblicalPassageSearch />
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary dark:text-gray-200"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4 py-4 px-6">
            <div className="mb-4">
              <BiblicalPassageSearch />
            </div>
            <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>{t('home')}</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>{t('about')}</MobileNavLink>
            <MobileNavLink to="/books" onClick={() => setMobileMenuOpen(false)}>{t('books')}</MobileNavLink>
            <MobileNavLink to="/categories" onClick={() => setMobileMenuOpen(false)}>{t('categories')}</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => {
  return (
    <Link 
      to={to} 
      className="relative font-medium text-primary/80 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink = ({ to, children, onClick }: MobileNavLinkProps) => {
  return (
    <Link 
      to={to} 
      className="py-2 block text-primary/80 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
