
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExploreMoreSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="mt-16 bg-muted dark:bg-gray-800/60 p-6 rounded-lg text-center border border-border"
    >
      <h3 className="text-xl font-bold text-primary dark:text-gray-100 mb-4">Pronto para explorar os livros da Bíblia?</h3>
      <p className="text-muted-foreground dark:text-gray-300 mb-6">Descubra como cada livro bíblico utiliza estas categorias para apontar para Cristo.</p>
      <Link 
        to="/books" 
        className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground dark:text-white rounded-md transition-colors shadow-md hover:shadow-lg"
      >
        Ver todos os livros
        <ArrowRight size={16} className="ml-2" />
      </Link>
    </motion.div>
  );
};

export default ExploreMoreSection;
