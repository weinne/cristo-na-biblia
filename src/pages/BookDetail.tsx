
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDetailComponent from '@/components/BookDetail';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { books, categories } from '@/lib/data';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const book = books.find(book => book.id === id);
  
  useEffect(() => {
    if (!book) {
      navigate('/books');
    }
    window.scrollTo(0, 0);
  }, [book, navigate]);
  
  if (!book) return null;

  // Obter detalhes completos das categorias usadas pelo livro
  const bookCategories = categories.filter(cat => 
    book.categories.includes(cat.id)
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-8 px-6 md:px-12 bg-gradient-to-b from-secondary dark:from-gray-800 to-white dark:to-gray-900">
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
            <span className="inline-block text-sm bg-accent/10 dark:bg-accent/20 text-accent px-3 py-1 rounded-full mb-2">
              {book.testament === 'old' ? 'Antigo Testamento' : 'Novo Testamento'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-gray-100">
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
                  className="text-xs bg-white dark:bg-gray-800 text-primary dark:text-gray-200 border border-border px-3 py-1 rounded-full hover:bg-secondary/50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </section>
      
      <section className="py-12 px-6 md:px-12 bg-white dark:bg-gray-900 flex-grow">
        <BookDetailComponent book={book} />
      </section>
      
      <Footer />
    </div>
  );
};

export default BookDetail;
