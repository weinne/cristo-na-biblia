
import React from 'react';
import { Book, categories } from '@/lib/data';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BookDetailProps {
  book: Book;
}

const BookDetail = ({ book }: BookDetailProps) => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 md:px-0 animate-fade-in">
      <Link to="/books" className="flex items-center text-primary hover:text-accent mb-6 transition-colors">
        <ArrowLeft size={16} className="mr-2" />
        <span className="text-sm">Voltar para todos os livros</span>
      </Link>

      <div className="mb-8">
        <div className="mb-1">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">
            {book.testament === 'old' ? 'Antigo Testamento' : 'Novo Testamento'}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{book.name}</h1>
        <p className="text-lg text-muted-foreground">{book.description}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Como aponta para Cristo:</h2>
        <div className="space-y-6">
          {book.christPointers.map((pointer, index) => {
            const category = categories.find(cat => cat.id === pointer.category);
            
            return (
              <div key={index} className="glass-card rounded-lg p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                <div className="mb-3">
                  <Link 
                    to={`/categories/${pointer.category}`} 
                    className="text-xs rounded-full px-2 py-1 bg-accent/10 text-accent w-fit hover:bg-accent/20 transition-colors"
                  >
                    {category?.name}
                  </Link>
                </div>
                <p className="mb-4 text-foreground">{pointer.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pointer.verses.map((verse, idx) => (
                    <a
                      key={idx}
                      href={`https://www.bible.com/pt/bible/129/${encodeURIComponent(verse)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 bg-muted text-xs rounded text-muted-foreground bible-reference flex items-center hover:bg-muted/80 transition-colors"
                    >
                      {verse}
                      <ExternalLink size={10} className="ml-1" />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
