
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDetailComponent from '@/components/BookDetail';
import { useParams, useNavigate } from 'react-router-dom';
import { books } from '@/lib/data';

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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 md:px-12 bg-white flex-grow">
        <BookDetailComponent book={book} />
      </section>
      
      <Footer />
    </div>
  );
};

export default BookDetail;
