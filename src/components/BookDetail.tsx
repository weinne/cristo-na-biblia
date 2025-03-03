
import React, { useEffect } from 'react';
import { ArrowLeft, BookMarked, BookOpen, ExternalLink } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { books, Book, ChristPointer } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type BookDetailProps = {
  standalone?: boolean;
};

const BookDetail: React.FC<BookDetailProps> = ({ standalone = true }) => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const book = books.find(b => b.id === bookId);
  
  useEffect(() => {
    if (standalone) {
      window.scrollTo(0, 0);
    }
  }, [standalone, bookId]);
  
  if (!book) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center h-full min-h-[50vh]">
        <h2 className="text-2xl font-bold mb-4">Livro não encontrado</h2>
        <p className="mb-6 text-muted-foreground">
          O livro que você está procurando não existe ou não está disponível.
        </p>
        <Button onClick={() => navigate('/books')} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para lista de livros
        </Button>
      </div>
    );
  }
  
  const bookCategories = [...new Set(book.christPointers.map(pointer => pointer.category))];
  
  const renderCategoryBadge = (categoryId: string) => {
    const category = getCategoryNameById(categoryId);
    return (
      <Link to={`/category/${categoryId}`} key={categoryId}>
        <Badge variant="outline" className="mr-2 mb-2 cursor-pointer hover:bg-accent/10">
          {category}
        </Badge>
      </Link>
    );
  };
  
  const getCategoryNameById = (categoryId: string): string => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-7xl mx-auto"
    >
      {standalone && (
        <div className="mb-6 px-4 sm:px-6 lg:px-8 pt-6">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
          </Button>
        </div>
      )}
      
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <div className="flex items-center mb-2">
              <Badge variant={book.testament === 'old' ? 'default' : 'destructive'} className="mr-2">
                {book.testament === 'old' ? 'Antigo Testamento' : 'Novo Testamento'}
              </Badge>
              <span className="text-sm text-muted-foreground">{book.shortName}</span>
            </div>
            <h1 className="text-3xl font-bold">{book.name}</h1>
          </div>
          
          <div className="flex flex-wrap">
            {bookCategories.map(categoryId => renderCategoryBadge(categoryId))}
          </div>
        </div>
        
        <div className="mb-8">
          <p className="text-lg text-muted-foreground">{book.description}</p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">
            <BookMarked className="inline-block mr-2 h-5 w-5 text-accent" />
            Conexões com Cristo
          </h2>
          
          <Tabs defaultValue={book.christPointers[0]?.category || ''} className="w-full">
            <TabsList className="mb-6 flex flex-wrap h-auto justify-start overflow-x-auto">
              {book.christPointers.map(pointer => {
                const categoryName = getCategoryNameById(pointer.category);
                return (
                  <TabsTrigger key={pointer.category} value={pointer.category} className="my-1">
                    {categoryName}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            
            {book.christPointers.map((pointer: ChristPointer) => (
              <TabsContent key={pointer.category} value={pointer.category}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{getCategoryNameById(pointer.category)}</CardTitle>
                        <CardDescription className="text-sm">
                          <Link to={`/category/${pointer.category}`} className="text-accent hover:underline flex items-center mt-1">
                            Ver mais sobre esta categoria
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Link>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="mb-6">{pointer.description}</p>
                    
                    <h4 className="text-sm font-medium mb-2">Referências bíblicas:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {pointer.verses.map((verse, index) => (
                        <div 
                          key={index} 
                          className="bg-muted p-2 rounded-md text-sm bible-reference"
                        >
                          {verse}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
};

const categories = [
  {
    id: "redemptive-historical",
    name: "Progressão Histórico-Redentiva"
  },
  {
    id: "promise-fulfillment",
    name: "Promessa-Cumprimento"
  },
  {
    id: "typology",
    name: "Tipologia"
  },
  {
    id: "analogy",
    name: "Analogia"
  },
  {
    id: "longitudinal-themes",
    name: "Temas Longitudinais"
  },
  {
    id: "new-testament-references",
    name: "Referências do Novo Testamento"
  },
  {
    id: "contrast",
    name: "Contraste"
  }
];

export default BookDetail;
