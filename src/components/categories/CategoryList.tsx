
import React from 'react';
import { motion } from 'framer-motion';
import CategoryCard from '@/components/CategoryCard';

interface CategoryListProps {
  categories: any[];
}

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {categories.map((category, index) => (
        <CategoryCard key={category.id} category={category} index={index} />
      ))}
    </motion.div>
  );
};

export default CategoryList;
