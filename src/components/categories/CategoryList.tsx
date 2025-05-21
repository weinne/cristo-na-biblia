
import React from 'react';
import { motion } from 'framer-motion';
import CategoryCard from '@/components/CategoryCard';
import { useLanguage } from '@/contexts/LanguageContext';

interface CategoryListProps {
  categories: any[];
}

const CategoryList = ({ categories }: CategoryListProps) => {
  const { t, language } = useLanguage();
  
  // Enhanced debug logging
  console.log('Current language:', language);
  console.log('Categories being rendered:', categories);
  
  // Log category translations for debugging
  categories.forEach((category, index) => {
    const translationKey = category.id === 'redemptive-historical' ? 
      'category-redemptive-historical' : 
      `category-${category.id}`;
    console.log(`Category ${index} (${category.id}) translation:`, t(translationKey));
  });
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {categories.map((category, index) => {
        console.log(`Rendering category ${index}:`, category.id);
        return (
          <CategoryCard key={category.id} category={category} index={index} />
        );
      })}
    </motion.div>
  );
};

export default CategoryList;
