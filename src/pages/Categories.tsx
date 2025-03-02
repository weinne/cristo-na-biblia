
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { categories } from '@/lib/data';
import CategoryCard from '@/components/CategoryCard';

const Categories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-10 px-6 md:px-12 bg-gradient-to-b from-secondary to-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-block text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
            Métodos Hermenêuticos
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Categorias de Greidanus
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore as sete maneiras pelas quais a Bíblia aponta para Cristo, conforme identificadas por Sidney Greidanus.
          </p>
        </div>
      </section>
      
      <section className="py-12 px-6 md:px-12 bg-white flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Categories;
