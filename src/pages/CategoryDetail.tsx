
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { categories, books, Category, ChristPointer } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

type VerseReference = {
  bookId: string;
  bookName: string;
  verses: string[];
  description: string;
}

const CategoryDetail = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [verseReferences, setVerseReferences] = useState<VerseReference[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Encontrar a categoria pelo ID
    const foundCategory = categories.find(cat => cat.id === categoryId);
    setCategory(foundCategory || null);
    
    if (foundCategory) {
      // Coletar todas as referências de versos que usam esta categoria
      const references: VerseReference[] = [];
      
      books.forEach(book => {
        const relevantPointers = book.christPointers.filter(
          pointer => pointer.category === foundCategory.id
        );
        
        if (relevantPointers.length > 0) {
          relevantPointers.forEach(pointer => {
            references.push({
              bookId: book.id,
              bookName: book.name,
              verses: pointer.verses,
              description: pointer.description
            });
          });
        }
      });
      
      setVerseReferences(references);
    }
  }, [categoryId]);
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Categoria não encontrada</h1>
            <Link to="/categories" className="text-accent hover:underline flex items-center justify-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para categorias
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-accent/5 py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <Link to="/categories" className="text-sm text-accent hover:underline flex items-center w-fit">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Voltar para categorias
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{category.name}</h1>
            <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
            
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-sm font-medium">
                Livros que usam esta categoria:
              </span>
              <span className="bg-accent/20 text-accent px-2 py-1 rounded-full text-sm font-medium">
                {verseReferences.length}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      
      <section className="py-8 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Como funciona a categoria "{category.name}"</h2>
          
          <div className="mb-10 p-6 rounded-lg bg-accent/5">
            <p className="text-lg">
              {getCategoryExplanation(category.id)}
            </p>
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold mb-6">Exemplos na Bíblia</h2>
          
          <div className="grid gap-6">
            {verseReferences.map((reference, index) => (
              <motion.div
                key={`${reference.bookId}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-6 rounded-lg border border-border/60 hover:border-accent/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <Link 
                    to={`/books/${reference.bookId}`}
                    className="text-lg font-bold text-accent hover:underline flex items-center"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    {reference.bookName}
                  </Link>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="px-2 py-1 bg-accent/10 rounded-full">
                      {reference.verses.length} {reference.verses.length === 1 ? 'referência' : 'referências'}
                    </span>
                  </div>
                </div>
                
                <p className="mb-4 text-muted-foreground">{reference.description}</p>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  {reference.verses.map((verse, vIndex) => (
                    <div 
                      key={vIndex}
                      className="py-2 px-3 rounded-md bg-muted/30 bible-reference"
                    >
                      {verse}
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 flex justify-end">
                  <Link 
                    to={`/books/${reference.bookId}`} 
                    className="text-sm text-accent hover:underline flex items-center"
                  >
                    Ver livro 
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Função para obter uma explicação mais detalhada da categoria
const getCategoryExplanation = (categoryId: string): string => {
  const explanations: Record<string, string> = {
    'redemptive-historical': 
      'A abordagem Histórico-Redentiva examina como cada passagem bíblica se encaixa na grande narrativa da redenção ' +
      'de Deus. Esta categoria identifica como textos específicos do Antigo Testamento se relacionam com o plano ' +
      'progressivo de Deus que culmina em Cristo. Ao invés de ver a Bíblia como uma coleção de histórias ' +
      'desconectadas ou princípios morais, esta abordagem reconhece que todas as Escrituras contam uma história ' +
      'unificada de redenção que encontra seu clímax em Jesus Cristo. Em essência, esta categoria traça o ' +
      'desenvolvimento do plano de salvação de Deus ao longo da história bíblica.',
    
    'promise-fulfillment': 
      'A categoria Promessa-Cumprimento identifica promessas específicas feitas no Antigo Testamento que ' +
      'encontram seu cumprimento em Jesus Cristo. Estas promessas incluem profecias diretas sobre o Messias, ' +
      'bem como compromissos divinos que são ultimamente realizados através de Cristo. Esta abordagem demonstra ' +
      'a fidelidade de Deus às Suas promessas e a unidade das Escrituras. Jesus mesmo afirmou que Ele veio para ' +
      'cumprir as Escrituras, não para aboli-las (Mateus 5:17). Esta categoria nos ajuda a ver como Deus mantém ' +
      'Sua palavra e como o Novo Testamento está profundamente enraizado no Antigo.',
    
    'typology': 
      'A Tipologia reconhece que Deus frequentemente estabelece padrões no Antigo Testamento que prefiguram ' +
      'e apontam para realidades maiores cumpridas em Cristo. Um "tipo" é uma pessoa, evento ou instituição ' +
      'que antecipa ou prefigura algo maior que viria – o "antítipo". Por exemplo, Adão é um "tipo" de Cristo ' +
      '(Romanos 5:14), o cordeiro pascal prefigura o sacrifício de Cristo, e o tabernáculo antecipa Cristo como ' +
      'a presença de Deus entre o povo. A tipologia não é alegoria arbitrária, mas reconhece padrões divinamente ' +
      'intencionados que revelam a consistência do plano redentor de Deus.',
    
    'analogy': 
      'A categoria de Analogia estabelece paralelos significativos entre as ações de Deus no Antigo Testamento ' +
      'e Suas ações através de Cristo no Novo Testamento. Esta abordagem identifica correspondências que ' +
      'revelam a consistência do caráter e dos métodos de Deus ao longo da história bíblica. Diferente da ' +
      'tipologia (que geralmente envolve prefigurações mais específicas), as analogias tendem a destacar ' +
      'padrões mais amplos e paralelos nas formas como Deus trabalha. Estas conexões mostram a continuidade ' +
      'entre o Antigo e Novo Testamentos, reforçando que o mesmo Deus está operando em ambos.',
    
    'longitudinal-themes': 
      'A categoria de Temas Longitudinais segue temas teológicos importantes que se desenvolvem através das ' +
      'Escrituras e encontram sua expressão mais completa em Cristo. Estes temas incluem conceitos como ' +
      'reino, aliança, presença de Deus, êxodo, exílio e restauração, entre outros. Esta abordagem rastreia ' +
      'como estes motivos teológicos são introduzidos, desenvolvidos, e finalmente cumpridos em Cristo. ' +
      'Ao seguir estes temas "longitudinalmente" através da narrativa bíblica, podemos ver como Cristo ' +
      'representa o auge de muitos conceitos teológicos importantes que estão presentes em toda a Escritura.',
    
    'new-testament-references': 
      'Esta categoria utiliza citações explícitas ou alusões do Novo Testamento para mostrar como textos do ' +
      'Antigo Testamento se relacionam com Cristo. Quando autores do Novo Testamento afirmam que eventos na ' +
      'vida de Jesus "cumprem" passagens específicas do Antigo Testamento, eles fornecem interpretações ' +
      'inspiradas que revelam conexões cristológicas. Esta abordagem dá prioridade à maneira como os apóstolos ' +
      'e escritores do Novo Testamento entenderam o Antigo Testamento em relação a Cristo. Isso nos fornece ' +
      'um modelo para nossa própria interpretação e demonstra a unidade das Escrituras sob a inspiração do ' +
      'Espírito Santo.',
    
    'contrast': 
      'A categoria de Contraste destaca como Cristo é maior, melhor ou diferente das figuras, instituições ' +
      'ou conceitos do Antigo Testamento. Enquanto as outras categorias geralmente enfatizam continuidade, ' +
      'esta abordagem reconhece como Cristo transcende e frequentemente substitui elementos do antigo sistema. ' +
      'Por exemplo, o livro de Hebreus repetidamente usa a frase "melhor que" para mostrar a superioridade de ' +
      'Cristo. Esta categoria reconhece tanto a conexão quanto a distinção entre as alianças, mostrando como ' +
      'Cristo não apenas cumpre o Antigo Testamento, mas também o supera de maneiras importantes.'
  };
  
  return explanations[categoryId] || 'Explicação detalhada não disponível para esta categoria.';
};

export default CategoryDetail;
