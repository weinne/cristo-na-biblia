
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-muted dark:bg-muted/20 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary dark:text-primary">{t('christ-in-bible')}</h3>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground">
              {t('exploring-books')}
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary dark:text-primary">{t('quick-links')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/books" className="text-sm text-muted-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary transition-colors">
                  {t('bible-books')}
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-muted-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary transition-colors">
                  {t('greidanus-categories')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="https://weinne.teo.br" className="text-sm text-muted-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary transition-colors">
                  {t('who-am-i')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary dark:text-primary">{t('about-the-project')}</h4>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground">
              {t('project-created')}
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border dark:border-border/50">
          <p className="text-sm text-center text-muted-foreground dark:text-muted-foreground">
            © {new Date().getFullYear()} <Link to="https://weinne.teo.br" className="text-sm text-muted-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary transition-colors">Weinne Santos</Link>. {t('all-rights-reserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
