
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { categories } from '@/lib/data';
import CategoryCard from '@/components/CategoryCard';
import BookGrid from '@/components/BookGrid';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-secondary to-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-block text-sm bg-accent/10 text-accent px-3 py-1 rounded-full animate-fade-in">
            Cristo em toda a Bíblia
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary animate-fade-in">
            Descobrindo Cristo em <span className="text-shimmer font-bold">Cada Livro</span> da Bíblia
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Explorando como o Antigo e o Novo Testamento apontam para Jesus Cristo através das categorias hermenêuticas de Sidney Greidanus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in">
            <Link
              to="/books"
              className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg"
            >
              Explorar Livros
            </Link>
            <Link
              to="/categories"
              className="px-6 py-3 bg-white text-primary rounded-md hover:bg-secondary transition-colors border border-border shadow-sm hover:shadow-md"
            >
              Ver Categorias
            </Link>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Categorias de Greidanus</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sidney Greidanus identificou estas sete maneiras pelas quais a Bíblia aponta para Cristo, ajudando-nos a ver Jesus em toda a Escritura.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 6).map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              to="/categories"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              Ver todas as categorias
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Books Section */}
      <section className="py-20 px-6 md:px-12 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Livros em Destaque</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore como estes e outros livros da Bíblia apontam para Cristo de maneiras únicas e reveladoras.
            </p>
          </div>
          
          <BookGrid />
          
          <div className="text-center mt-10">
            <Link
              to="/books"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            >
              Ver todos os livros
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comece sua jornada de descoberta hoje</h2>
          <p className="text-lg mb-8 text-white/90">
            Explore como toda a Escritura, do Gênesis ao Apocalipse, revela a pessoa e a obra de Jesus Cristo.
          </p>
          <Link
            to="/books"
            className="px-8 py-3 bg-white text-accent rounded-md hover:bg-white/90 transition-colors shadow-md hover:shadow-lg inline-block"
          >
            Explorar todos os livros
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
