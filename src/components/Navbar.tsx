
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
        scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-playfair font-bold text-primary">Cristo na Bíblia</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Início</NavLink>
          <NavLink to="/about">Sobre</NavLink>
          <NavLink to="/books">Livros</NavLink>
          <NavLink to="/categories">Categorias</NavLink>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary text-primary hover:bg-secondary/80 transition-colors"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary text-primary hover:bg-secondary/80 transition-colors mr-2"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4 py-4 px-6">
            <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Início</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>Sobre</MobileNavLink>
            <MobileNavLink to="/books" onClick={() => setMobileMenuOpen(false)}>Livros</MobileNavLink>
            <MobileNavLink to="/categories" onClick={() => setMobileMenuOpen(false)}>Categorias</MobileNavLink>
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
      className="relative font-medium text-primary/80 hover:text-primary transition-colors after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
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
      className="py-2 block text-primary/80 hover:text-primary transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
