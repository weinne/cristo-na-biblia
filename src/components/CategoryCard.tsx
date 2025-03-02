
import React from 'react';
import { Category } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ChartBar, ChartLine, ChartPie, List, Grid, Folder, FolderOpen, View } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  index: number;
}

const getGradient = (index: number): string => {
  const gradients = [
    "from-blue-100 to-purple-100",
    "from-green-100 to-yellow-100",
    "from-pink-100 to-red-100",
    "from-purple-100 to-indigo-100",
    "from-yellow-100 to-orange-100",
    "from-indigo-100 to-blue-100",
    "from-red-100 to-pink-100",
  ];
  
  return gradients[index % gradients.length];
};

const getCategoryIcon = (categoryId: string) => {
  const icons = {
    'redemptive-historical': <ChartLine className="h-6 w-6" />,
    'promise-fulfillment': <List className="h-6 w-6" />,
    'typology': <ChartPie className="h-6 w-6" />,
    'analogy': <Grid className="h-6 w-6" />,
    'longitudinal-themes': <ChartBar className="h-6 w-6" />,
    'new-testament-references': <Folder className="h-6 w-6" />,
    'contrast': <View className="h-6 w-6" />
  };
  
  return icons[categoryId as keyof typeof icons] || <FolderOpen className="h-6 w-6" />;
};

const getBookCount = (categoryId: string): number => {
  // This would ideally come from actual data analysis
  const counts = {
    'redemptive-historical': 42,
    'promise-fulfillment': 37,
    'typology': 29,
    'analogy': 25,
    'longitudinal-themes': 33,
    'new-testament-references': 45,
    'contrast': 21
  };
  
  return counts[categoryId as keyof typeof counts] || 0;
};

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className={`glass-card rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden bg-gradient-to-br ${getGradient(index)}`}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs rounded-full px-2 py-1 bg-accent/10 text-accent w-fit">
          Categoria {index + 1}
        </span>
        <div className="text-accent/80">
          {getCategoryIcon(category.id)}
        </div>
      </div>
      
      <h3 className="text-xl mb-2 font-bold text-primary">{category.name}</h3>
      <p className="text-sm text-muted-foreground flex-grow mb-4">{category.description}</p>
      
      <div className="mt-auto pt-4 border-t border-border/30">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Livros que usam esta categoria:</span>
          <span className="text-lg font-bold text-accent">{getBookCount(category.id)}</span>
        </div>
        <div className="w-full bg-muted/30 h-2 rounded-full mt-2 overflow-hidden">
          <div 
            className="h-full bg-accent/70 rounded-full" 
            style={{ width: `${(getBookCount(category.id) / 66) * 100}%` }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
