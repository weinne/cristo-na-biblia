
import React, { useState } from 'react';
import { Book, books } from '@/lib/data';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface BookGridProps {
  filter?: 'old' | 'new' | 'all';
}

const BookGrid = ({ filter = 'all' }: BookGridProps) => {
  const { t } = useLanguage();
  const [selectedTestament, setSelectedTestament] = useState<'old' | 'new' | 'all'>(filter);

  const filteredBooks = books.filter(book => {
    if (selectedTestament === 'all') return true;
    return book.testament === selectedTestament;
  });

  return (
    <div className="w-full">
      <div className="flex justify-center mb-8 gap-2">
        <TestamentButton 
          active={selectedTestament === 'all'} 
          onClick={() => setSelectedTestament('all')}
        >
          {t('all')}
        </TestamentButton>
        <TestamentButton 
          active={selectedTestament === 'old'} 
          onClick={() => setSelectedTestament('old')}
        >
          {t('old-testament')}
        </TestamentButton>
        <TestamentButton 
          active={selectedTestament === 'new'} 
          onClick={() => setSelectedTestament('new')}
        >
          {t('new-testament')}
        </TestamentButton>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

interface TestamentButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TestamentButton = ({ active, onClick, children }: TestamentButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
        active 
          ? 'bg-accent text-white shadow-md' 
          : 'bg-muted hover:bg-muted/80 text-foreground dark:text-gray-200'
      }`}
    >
      {children}
    </button>
  );
};

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const { t } = useLanguage();
  
  return (
    <Link 
      to={`/books/${book.id}`}
      className="group"
    >
      <div className="glass-card p-4 rounded-md flex flex-col items-center justify-center text-center h-32 transition-all duration-300 group-hover:shadow-md group-hover:scale-[1.03]">
        <h3 className="font-bold text-lg text-primary mb-1">{book.shortName}</h3>
        <p className="text-xs text-muted-foreground mb-2">
          {book.testament === 'old' ? t('old-testament') : t('new-testament')}
        </p>
        <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary dark:text-gray-200">
          {book.categories.length} {t('categories-count')}
        </span>
      </div>
    </Link>
  );
};

export default BookGrid;
