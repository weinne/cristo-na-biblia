
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookGrid from '@/components/BookGrid';

const Books = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-10 px-6 md:px-12 bg-gradient-to-b from-secondary to-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-block text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
            Todos os Livros
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Livros da Bíblia
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore como cada livro da Bíblia revela Jesus Cristo de maneiras únicas e poderosas.
          </p>
        </div>
      </section>
      
      <section className="py-12 px-6 md:px-12 bg-white flex-grow">
        <div className="max-w-7xl mx-auto">
          <BookGrid />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Books;
