
import React from 'react';
import { Category } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  return (
    <div 
      className="glass-card rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-[1.01] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
      <span className="text-xs rounded-full px-2 py-1 bg-accent/10 text-accent w-fit mb-3">
        Categoria {index + 1}
      </span>
      <h3 className="text-xl mb-2 font-bold text-primary">{category.name}</h3>
      <p className="text-sm text-muted-foreground flex-grow">{category.description}</p>
    </div>
  );
};

export default CategoryCard;
