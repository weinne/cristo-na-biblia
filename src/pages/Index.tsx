
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { categories } from '@/lib/data';
import CategoryCard from '@/components/CategoryCard';
import BookGrid from '@/components/BookGrid';
import { ChevronRight } from 'lucide-react';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PWAInstallPrompt />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-secondary dark:from-gray-800 to-background">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-block text-sm bg-accent/10 dark:bg-accent/20 text-accent px-3 py-1 rounded-full animate-fade-in">
            {t('christ-in-all-bible')}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-gray-100 animate-fade-in">
            {t('discovering-christ')} <span className="text-shimmer font-bold">{t('each-book')}</span> {t('of-bible')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto animate-fade-in">
            {t('exploring-how')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in">
            <Link
              to="/books"
              className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg"
            >
              {t('explore-books')}
            </Link>
            <Link
              to="/categories"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-primary dark:text-gray-200 rounded-md hover:bg-secondary dark:hover:bg-gray-700 transition-colors border border-border shadow-sm hover:shadow-md"
            >
              {t('view-categories')}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-gray-100 mb-4">{t('greidanus-categories')}</h2>
            <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
              {t('greidanus-identified')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.slice(0, 3).map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              to="/categories"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              {t('view-all-categories')}
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Books Section */}
      <section className="py-20 px-6 md:px-12 bg-muted dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-gray-100 mb-4">{t('featured-books')}</h2>
            <p className="text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
              {t('explore-these-books')}
            </p>
          </div>
          
          <BookGrid limitBooks={12} />
          
          <div className="text-center mt-10">
            <Link
              to="/books"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              {t('view-all-books')}
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('start-journey')}</h2>
          <p className="text-lg mb-8 text-white/90">
            {t('explore-scripture')}
          </p>
          <Link
            to="/books"
            className="px-8 py-3 bg-white text-accent rounded-md hover:bg-white/90 transition-colors shadow-md hover:shadow-lg inline-block"
          >
            {t('explore-all-books')}
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
