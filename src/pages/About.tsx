
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-10 px-6 md:px-12 bg-gradient-to-b from-secondary dark:from-gray-800 to-white dark:to-gray-900">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-block text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
            {t('about-title')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-gray-100">
            {t('christ-in-bible')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('about-subtitle')}
          </p>
        </div>
      </section>
      
      <section className="py-12 px-6 md:px-12 bg-white dark:bg-gray-900 flex-grow">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-slate dark:prose-invert mx-auto">
            <h2 className="text-2xl font-bold text-primary dark:text-gray-100 mb-4">{t('mission-title')}</h2>
            <p>{t('mission-description')}</p>
            
            <h2 className="text-2xl font-bold text-primary dark:text-gray-100 mt-8 mb-4">{t('greidanus-approach')}</h2>
            <p>{t('greidanus-description')}</p>
            <p>{t('motivation-description')}</p>
            
            <h2 className="text-2xl font-bold text-primary dark:text-gray-100 mt-8 mb-4">{t('project-motivation')}</h2>
            <p>{t('motivation-description')}</p>
            
            <h2 className="text-2xl font-bold text-primary dark:text-gray-100 mt-8 mb-4">{t('get-involved')}</h2>
            <p>{t('involved-description')}</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
