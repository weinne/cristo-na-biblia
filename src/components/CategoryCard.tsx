
import React, { useState } from 'react';
import { Category } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ChartBar, ChartLine, ChartPie, List, Grid, Folder, FolderOpen, View, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  category: Category;
  index: number;
}

const getGradient = (index: number): string => {
  const gradients = [
    "from-blue-100 to-purple-100",
    "from-green-100 to-yellow-100",
    "from-pink-100 to-red-100",
    "from-purple-100 to-indigo-100",
    "from-yellow-100 to-orange-100",
    "from-indigo-100 to-blue-100",
    "from-red-100 to-pink-100",
  ];
  
  return gradients[index % gradients.length];
};

const getCategoryIcon = (categoryId: string) => {
  const icons = {
    'redemptive-historical': <ChartLine className="h-6 w-6" />,
    'promise-fulfillment': <List className="h-6 w-6" />,
    'typology': <ChartPie className="h-6 w-6" />,
    'analogy': <Grid className="h-6 w-6" />,
    'longitudinal-themes': <ChartBar className="h-6 w-6" />,
    'new-testament-references': <Folder className="h-6 w-6" />,
    'contrast': <View className="h-6 w-6" />
  };
  
  return icons[categoryId as keyof typeof icons] || <FolderOpen className="h-6 w-6" />;
};

const getBookCount = (categoryId: string): number => {
  const counts = {
    'redemptive-historical': 42,
    'promise-fulfillment': 37,
    'typology': 29,
    'analogy': 25,
    'longitudinal-themes': 33,
    'new-testament-references': 45,
    'contrast': 21
  };
  
  return counts[categoryId as keyof typeof counts] || 0;
};

const getExampleVerses = (categoryId: string): string[] => {
  const verses = {
    'redemptive-historical': ['Gênesis 3:15', 'Êxodo 12:1-28', 'Isaías 53:1-12'],
    'promise-fulfillment': ['Gênesis 12:1-3', 'Isaías 7:14', 'Miquéias 5:2'],
    'typology': ['Êxodo 12:1-28', 'Jonas 1:17', 'Levítico 16:1-34'],
    'analogy': ['Salmos 22:1-31', 'Isaías 54:5-8', 'Oséias 11:1'],
    'longitudinal-themes': ['Gênesis 1:26-28', 'Deuteronômio 18:15-19', 'Salmos 2:1-12'],
    'new-testament-references': ['Mateus 1:22-23', 'Lucas 24:27', 'João 5:39'],
    'contrast': ['Hebreus 3:1-6', 'Hebreus 7:23-28', 'Hebreus 9:1-15']
  };
  
  return verses[categoryId as keyof typeof verses] || [];
};

const getCategoryDescription = (categoryId: string): string => {
  const descriptions = {
    'redemptive-historical': "Esta categoria traça como as passagens se encaixam no amplo desdobramento do plano redentor de Deus ao longo da história, culminando em Cristo.",
    'promise-fulfillment': "Identifica promessas feitas no Antigo Testamento que encontram seu cumprimento em Cristo, demonstrando a fidelidade de Deus.",
    'typology': "Reconhece pessoas, eventos ou instituições do Antigo Testamento como 'tipos' que prefiguram aspectos de Cristo ou Sua obra.",
    'analogy': "Estabelece paralelos entre as ações de Deus no Antigo Testamento e Suas ações através de Cristo, revelando a consistência do caráter divino.",
    'longitudinal-themes': "Segue temas bíblicos principais à medida que se desenvolvem através das Escrituras e encontram sua culminação em Cristo.",
    'new-testament-references': "Utiliza citações do Novo Testamento referentes a passagens do Antigo Testamento para mostrar conexões com Cristo.",
    'contrast': "Destaca como Cristo é maior ou diferente das figuras ou instituições do Antigo Testamento, enfatizando Sua superioridade."
  };
  
  return descriptions[categoryId as keyof typeof descriptions] || "";
};

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const exampleVerses = getExampleVerses(category.id);
  const extendedDescription = getCategoryDescription(category.id);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className={`glass-card rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden bg-gradient-to-br ${getGradient(index)}`}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs rounded-full px-2 py-1 bg-accent/10 text-accent w-fit">
          Categoria {index + 1}
        </span>
        <div className="text-accent/80">
          {getCategoryIcon(category.id)}
        </div>
      </div>
      
      <h3 className="text-xl mb-2 font-bold text-primary">{category.name}</h3>
      <p className="text-sm text-muted-foreground flex-grow mb-4">{category.description}</p>
      
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className="pt-3 pb-4">
          <p className="text-sm text-muted-foreground mb-4">{extendedDescription}</p>
          
          {exampleVerses.length > 0 && (
            <div className="mt-3 space-y-2">
              <h4 className="text-sm font-medium text-primary">Exemplos de Versículos:</h4>
              <div className="flex flex-wrap gap-2">
                {exampleVerses.map((verse, i) => (
                  <span key={i} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full bible-reference">
                    {verse}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-4">
            <Link 
              to={`/category/${category.id}`} 
              className="text-xs flex items-center text-accent hover:underline"
            >
              Ver detalhes completos desta categoria
              <ArrowRight size={12} className="ml-1" />
            </Link>
          </div>
        </div>
      </motion.div>
      
      <div className="mt-auto pt-4 border-t border-border/30">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Livros que usam esta categoria:</span>
          <span className="text-lg font-bold text-accent">{getBookCount(category.id)}</span>
        </div>
        <div className="w-full bg-muted/30 h-2 rounded-full mt-2 overflow-hidden">
          <div 
            className="h-full bg-accent/70 rounded-full" 
            style={{ width: `${(getBookCount(category.id) / 66) * 100}%` }}
          ></div>
        </div>
        
        <div className="flex mt-4 space-x-2">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 text-xs font-medium text-accent flex items-center justify-center hover:underline"
          >
            {isExpanded ? "Mostrar menos" : "Mostrar mais"}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight size={12} className="ml-1 transform rotate-90" />
            </motion.div>
          </button>
          
          <Link 
            to={`/category/${category.id}`}
            className="flex-1 text-xs font-medium bg-accent text-white px-3 py-1.5 rounded-md flex items-center justify-center hover:bg-accent/90 transition-colors"
          >
            Ver categoria
            <ArrowRight size={12} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
