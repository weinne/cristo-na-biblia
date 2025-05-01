
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookGrid from '@/components/BookGrid';
import { useLanguage } from '@/contexts/LanguageContext';

const Books = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-10 px-6 md:px-12 bg-gradient-to-b from-secondary dark:from-gray-800 to-white dark:to-gray-900">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-block text-sm bg-accent/10 dark:bg-accent/20 text-accent px-3 py-1 rounded-full">
            {t('all-books')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-gray-100">
            {t('bible-books')}
          </h1>
          <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            {t('explore-each-book')}
          </p>
        </div>
      </section>
      
      <section className="py-12 px-6 md:px-12 bg-white dark:bg-gray-900 flex-grow">
        <div className="max-w-7xl mx-auto">
          <BookGrid />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Books;
