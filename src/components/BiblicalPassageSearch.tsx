import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { books } from '@/lib/data';
import { Link } from 'react-router-dom';

interface PassageResult {
  bookId: string;
  bookName: string;
  verses: string[];
  christPointer: string;
  category: string;
}

const BiblicalPassageSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];

    const normalizedSearch = searchTerm.toLowerCase().trim();
    const results: PassageResult[] = [];

    books.forEach(book => {
      book.christPointers.forEach(pointer => {
        // Search in verses
        const matchingVerses = pointer.verses.filter(verse => 
          verse.toLowerCase().includes(normalizedSearch)
        );

        if (matchingVerses.length > 0) {
          results.push({
            bookId: book.id,
            bookName: t(book.nameKey),
            verses: matchingVerses,
            christPointer: t(pointer.descriptionKey),
            category: t(`category-${pointer.category}`)
          });
        }
      });
    });

    return results;
  }, [searchTerm, t]);

  const handleClear = () => {
    setSearchTerm('');
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder={t('search-bible-passage')}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(e.target.value.trim().length > 0);
          }}
          onFocus={() => setIsOpen(searchTerm.trim().length > 0)}
          className="pl-10 pr-10"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isOpen && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
          <div className="p-2">
            <div className="text-sm text-muted-foreground mb-2">
              {t('search-results-count').replace('{count}', searchResults.length.toString())}
            </div>
            {searchResults.map((result, index) => (
              <Link
                key={`${result.bookId}-${index}`}
                to={`/books/${result.bookId}`}
                onClick={() => setIsOpen(false)}
                className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                <div className="font-medium text-sm text-primary">
                  {result.bookName}
                </div>
                <div className="text-xs text-muted-foreground mb-1">
                  {result.category}
                </div>
                <div className="text-xs text-accent font-medium mb-1">
                  {result.verses.join(', ')}
                </div>
                <div className="text-xs text-muted-foreground line-clamp-2">
                  {result.christPointer}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {isOpen && searchTerm.trim() && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
          <div className="p-4 text-center text-muted-foreground text-sm">
            {t('no-passages-found')}
          </div>
        </div>
      )}
    </div>
  );
};

export default BiblicalPassageSearch;