
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { categories, books } from '@/lib/data';
import CategoryCard from '@/components/CategoryCard';
import { motion } from 'framer-motion';
import { ChartPie, Book, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Calcular as estatísticas das categorias
  const getCategoryStats = () => {
    const oldTestamentBooks = books.filter(book => book.testament === 'old').length;
    const newTestamentBooks = books.filter(book => book.testament === 'new').length;
    
    return {
      oldTestament: oldTestamentBooks,
      newTestament: newTestamentBooks,
      total: oldTestamentBooks + newTestamentBooks
    };
  };
  
  const stats = getCategoryStats();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-10 px-6 md:px-12 bg-gradient-to-b from-secondary to-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm bg-accent/10 text-accent px-3 py-1 rounded-full"
          >
            Métodos Hermenêuticos
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary"
          >
            Categorias de Greidanus
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Explore as sete maneiras pelas quais a Bíblia aponta para Cristo, conforme identificadas por Sidney Greidanus.
          </motion.p>
        </div>
      </section>
      
      <section className="py-8 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-gradient-to-br from-secondary/20 to-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
              <ChartPie className="h-8 w-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-primary mb-1">7 Categorias</h3>
              <p className="text-sm text-muted-foreground">Formas diferentes de ver como a Bíblia aponta para Cristo</p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/20 to-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
              <Book className="h-8 w-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-primary mb-1">{stats.total} Livros da Bíblia</h3>
              <p className="text-sm text-muted-foreground">{stats.oldTestament} do Antigo Testamento, {stats.newTestament} do Novo Testamento</p>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 to-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/20 text-accent mb-3">
                <span className="text-lg font-bold">?</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-1">Você Sabia?</h3>
              <p className="text-sm text-muted-foreground">Cada livro da Bíblia pode usar múltiplas categorias para apontar para Cristo</p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 bg-muted p-6 rounded-lg text-center"
          >
            <h3 className="text-xl font-bold text-primary mb-4">Pronto para explorar os livros da Bíblia?</h3>
            <p className="text-muted-foreground mb-6">Descubra como cada livro bíblico utiliza estas categorias para apontar para Cristo.</p>
            <Link 
              to="/books" 
              className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg"
            >
              Ver todos os livros
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Categories;
