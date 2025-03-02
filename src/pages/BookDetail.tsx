
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDetailComponent from '@/components/BookDetail';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { books, categories } from '@/lib/data';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

// Função para carregar o RefTagger
const loadRefTagger = () => {
  const script = document.createElement('script');
  script.src = 'https://api.reftagger.com/v2/RefTagger.js';
  script.async = true;
  document.body.appendChild(script);

  // Configuração do RefTagger
  window.refTagger = {
    settings: {
      bibleVersion: "NVI-PT",
      tooltipStyle: "dark",
      roundCorners: true,
      socialSharing: [],
      customStyle: {
        heading: {
          backgroundColor: "#7c3aed",
          color: "#fff"
        }
      }
    }
  };
};

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const book = books.find(book => book.id === id);
  
  useEffect(() => {
    if (!book) {
      navigate('/books');
    }
    window.scrollTo(0, 0);
    
    // Carrega o RefTagger quando o componente é montado
    loadRefTagger();
    
    // Reinicializa o RefTagger quando o componente é atualizado
    return () => {
      if (window.refTagger && window.refTagger.tag) {
        window.refTagger.tag();
      }
    };
  }, [book, navigate]);
  
  if (!book) return null;

  // Obter detalhes completos das categorias usadas pelo livro
  const bookCategories = categories.filter(cat => 
    book.categories.includes(cat.id)
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-8 px-6 md:px-12 bg-gradient-to-b from-secondary to-white">
        <div className="max-w-5xl mx-auto">
          <Link 
            to="/books" 
            className="inline-flex items-center text-accent hover:text-accent/80 transition-colors mb-6"
          >
            <ArrowLeft size={16} className="mr-1" />
            Voltar para todos os livros
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block text-sm bg-accent/10 text-accent px-3 py-1 rounded-full mb-2">
              {book.testament === 'old' ? 'Antigo Testamento' : 'Novo Testamento'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              {book.name}
            </h1>
          </motion.div>
          
          {bookCategories.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {bookCategories.map((category) => (
                <Link 
                  key={category.id} 
                  to="/categories" 
                  className="text-xs bg-white text-primary border border-border px-3 py-1 rounded-full hover:bg-secondary/50 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </section>
      
      <section className="py-12 px-6 md:px-12 bg-white flex-grow">
        <BookDetailComponent book={book} />
      </section>
      
      <Footer />
    </div>
  );
};

export default BookDetail;
