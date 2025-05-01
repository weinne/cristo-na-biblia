
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const CategoryHeader = () => {
  const { t } = useLanguage();
  
  return (
    <section className="pt-32 pb-10 px-6 md:px-12 bg-gradient-to-b from-secondary dark:from-gray-800 to-background">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-sm bg-accent/10 dark:bg-accent/20 text-accent px-3 py-1 rounded-full"
        >
          {t('hermeneutic-methods')}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-primary dark:text-gray-100"
        >
          {t('greidanus-categories-title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto"
        >
          {t('explore-seven-ways')}
        </motion.p>
      </div>
    </section>
  );
};

export default CategoryHeader;
