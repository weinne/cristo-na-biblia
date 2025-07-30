
import React, { useState } from 'react';
import { Category, books } from '@/lib/data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ChartBar, ChartLine, ChartPie, List, Grid, Folder, FolderOpen, View, BookOpen, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/components/ThemeProvider';

interface CategoryCardProps {
  category: Category;
  index: number;
}

const getGradient = (index: number, isDark: boolean): string => {
  // Gradientes para o modo claro
  const lightGradients = [
    "from-blue-100 to-purple-100",
    "from-green-100 to-yellow-100",
    "from-pink-100 to-red-100",
    "from-purple-100 to-indigo-100",
    "from-yellow-100 to-orange-100",
    "from-indigo-100 to-blue-100",
    "from-red-100 to-pink-100",
  ];
  
  // Gradientes específicos para modo escuro com melhor visibilidade
  const darkGradients = [
    "from-blue-950/40 to-purple-950/40",
    "from-green-950/40 to-yellow-950/40",
    "from-pink-950/40 to-red-950/40",
    "from-purple-950/40 to-indigo-950/40",
    "from-yellow-950/40 to-orange-950/40",
    "from-indigo-950/40 to-blue-950/40",
    "from-red-950/40 to-pink-950/40",
  ];
  
  return isDark ? darkGradients[index % darkGradients.length] : lightGradients[index % lightGradients.length];
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
  // Dynamically calculate the count from the actual data
  return books.filter(book => book.categories.includes(categoryId)).length;
};

const getExampleVerses = (categoryId: string): string[] => {
  const verses = {
    'redemptive-historical': ['Gênesis 3:15', 'Êxodo 12:1-28', '2 Samuel 7:12-16'],
    'redemptive-progression': ['Gênesis 3:15', 'Êxodo 12:1-28', 'Isaías 53:1-12'],
    'promise-fulfillment': ['Gênesis 12:1-3', 'Isaías 7:14', 'Miquéias 5:2'],
    'typology': ['Êxodo 12:1-28', 'Jonas 1:17', 'Levítico 16:1-34'],
    'analogy': ['Salmos 22:1-31', 'Isaías 54:5-8', 'Oséias 11:1'],
    'longitudinal-themes': ['Gênesis 1:26-28', 'Deuteronômio 18:15-19', 'Salmos 2:1-12'],
    'new-testament-references': ['Mateus 1:22-23', 'Lucas 24:27', 'João 5:39'],
    'contrast': ['Hebreus 3:1-6', 'Hebreus 7:23-28', 'Hebreus 9:1-15']
  };
  
  return verses[categoryId as keyof typeof verses] || [];
};

// Function to format Bible references using the right translation
const formatBibleReference = (reference: string, language: string): string => {
  // Regular expression to extract book name, chapter and verse
  const regex = /^((?:\d+\s+)?[A-Za-zÀ-ú]+)(?:\s+(\d+)(?:[:.](\d+)(?:-(\d+))?)?)?/;
  const match = reference.match(regex);
  
  if (!match) return reference;
  
  const [, bookName, chapter, startVerse, endVerse] = match;
  
  // Generate the key for the book abbreviation based on the book name
  const getBookKey = (name: string): string => {
    // Remove numbers and whitespace
    const cleanName = name.replace(/^\d+\s+/, '').trim().toLowerCase();
    
    // Map of Portuguese book names to standardized keys
    const bookMap: Record<string, string> = {
      'gênesis': 'genesis',
      'genesis': 'genesis',
      'êxodo': 'exodus',
      'exodo': 'exodus',
      'levítico': 'leviticus',
      'levitico': 'leviticus',
      'números': 'numbers',
      'numeros': 'numbers',
      'deuteronômio': 'deuteronomy',
      'deuteronomio': 'deuteronomy',
      'josué': 'joshua',
      'josue': 'joshua',
      'juízes': 'judges',
      'juizes': 'judges',
      'rute': 'ruth',
      'samuel': 'samuel',
      'reis': 'kings',
      'crônicas': 'chronicles',
      'cronicas': 'chronicles',
      'esdras': 'ezra',
      'neemias': 'nehemiah',
      'ester': 'esther',
      'jó': 'job',
      'jo': 'job',
      'salmos': 'psalms',
      'salmo': 'psalms',
      'provérbios': 'proverbs',
      'proverbios': 'proverbs',
      'eclesiastes': 'ecclesiastes',
      'cânticos': 'song-of-solomon',
      'canticos': 'song-of-solomon',
      'cantares': 'song-of-solomon',
      'isaías': 'isaiah',
      'isaias': 'isaiah',
      'jeremias': 'jeremiah',
      'lamentações': 'lamentations',
      'lamentacoes': 'lamentations',
      'ezequiel': 'ezekiel',
      'daniel': 'daniel',
      'oséias': 'hosea',
      'oseias': 'hosea',
      'joel': 'joel',
      'amós': 'amos',
      'amos': 'amos',
      'obadias': 'obadiah',
      'jonas': 'jonah',
      'miquéias': 'micah',
      'miqueias': 'micah',
      'naum': 'nahum',
      'habacuque': 'habakkuk',
      'sofonias': 'zephaniah',
      'ageu': 'haggai',
      'zacarias': 'zechariah',
      'malaquias': 'malachi',
      'mateus': 'matthew',
      'marcos': 'mark',
      'lucas': 'luke',
      'joão': 'john',
      'joao': 'john',
      'atos': 'acts',
      'romanos': 'romans',
      'coríntios': 'corinthians',
      'corintios': 'corinthians',
      'gálatas': 'galatians',
      'galatas': 'galatians',
      'efésios': 'ephesians',
      'efesios': 'ephesians',
      'filipenses': 'philippians',
      'colossenses': 'colossians',
      'tessalonicenses': 'thessalonians',
      'timóteo': 'timothy',
      'timoteo': 'timothy',
      'tito': 'titus',
      'filemom': 'philemon',
      'hebreus': 'hebrews',
      'tiago': 'james',
      'pedro': 'peter',
      'judas': 'jude',
      'apocalipse': 'revelation'
    };
    
    // Find matching key
    for (const [book, key] of Object.entries(bookMap)) {
      if (cleanName.includes(book)) {
        // Handle numbered books
        if (/^\d+\s+/.test(name)) {
          return `${name.match(/^\d+/)[0]}-${key}`;
        }
        return key;
      }
    }
    
    return cleanName; // fallback
  };
  
  // Get book key from name
  const bookKey = getBookKey(bookName);
  
  // Get the abbreviation from translations - this function doesn't use translations anymore
  const abbr = bookKey;
  
  // Use the English format for YouVersion Bible
  const getYouVersionBookCode = (bookName: string): string => {
    // Book dictionary for YouVersion Bible API codes
    const bookDictionary: Record<string, string> = {
      // Old Testament
      'Gênesis': 'GEN', 'Genesis': 'GEN', 'Gên': 'GEN', 'Gen': 'GEN',
      'Êxodo': 'EXO', 'Exodo': 'EXO', 'Êx': 'EXO', 'Ex': 'EXO',
      'Levítico': 'LEV', 'Levitico': 'LEV', 'Lev': 'LEV', 'Lv': 'LEV',
      'Números': 'NUM', 'Numeros': 'NUM', 'Núm': 'NUM', 'Num': 'NUM', 'Nm': 'NUM',
      'Deuteronômio': 'DEU', 'Deuteronomio': 'DEU', 'Deut': 'DEU', 'Dt': 'DEU',
      'Josué': 'JOS', 'Josue': 'JOS', 'Jos': 'JOS', 'Js': 'JOS',
      'Juízes': 'JDG', 'Juizes': 'JDG', 'Juiz': 'JDG', 'Jz': 'JDG',
      'Rute': 'RUT', 'Rt': 'RUT',
      '1 Samuel': '1SA', '1Samuel': '1SA', '1Sm': '1SA', '1 Sm': '1SA',
      '2 Samuel': '2SA', '2Samuel': '2SA', '2Sm': '2SA', '2 Sm': '2SA',
      '1 Reis': '1KI', '1Reis': '1KI', '1Rs': '1KI', '1 Rs': '1KI',
      '2 Reis': '2KI', '2Reis': '2KI', '2Rs': '2KI', '2 Rs': '2KI',
      '1 Crônicas': '1CH', '1Cronicas': '1CH', '1Cr': '1CH', '1 Cr': '1CH',
      '2 Crônicas': '2CH', '2Cronicas': '2CH', '2Cr': '2CH', '2 Cr': '2CH',
      'Esdras': 'EZR', 'Esd': 'EZR', 'Ed': 'EZR',
      'Neemias': 'NEH', 'Ne': 'NEH',
      'Ester': 'EST', 'Est': 'EST', 'Et': 'EST',
      'Jó': 'JOB', 'Job': 'JOB',
      'Salmos': 'PSA', 'Sl': 'PSA', 'Salmo': 'PSA',
      'Provérbios': 'PRO', 'Proverbios': 'PRO', 'Pv': 'PRO', 'Pr': 'PRO',
      'Eclesiastes': 'ECC', 'Ec': 'ECC',
      'Cantares': 'SNG', 'Cânticos': 'SNG', 'Ct': 'SNG',
      'Isaías': 'ISA', 'Isaias': 'ISA', 'Is': 'ISA',
      'Jeremias': 'JER', 'Jr': 'JER',
      'Lamentações': 'LAM', 'Lamentacoes': 'LAM', 'Lm': 'LAM',
      'Ezequiel': 'EZK', 'Ez': 'EZK',
      'Daniel': 'DAN', 'Dn': 'DAN',
      'Oséias': 'HOS', 'Oseias': 'HOS', 'Os': 'HOS',
      'Joel': 'JOL', 'Jl': 'JOL',
      'Amós': 'AMO', 'Amos': 'AMO', 'Am': 'AMO',
      'Obadias': 'OBA', 'Ob': 'OBA',
      'Jonas': 'JON', 'Jn': 'JON',
      'Miquéias': 'MIC', 'Miqueias': 'MIC', 'Mq': 'MIC',
      'Naum': 'NAM', 'Na': 'NAM',
      'Habacuque': 'HAB', 'Hc': 'HAB',
      'Sofonias': 'ZEP', 'Sf': 'ZEP',
      'Ageu': 'HAG', 'Ag': 'HAG',
      'Zacarias': 'ZEC', 'Zc': 'ZEC',
      'Malaquias': 'MAL', 'Ml': 'MAL',
      
      // New Testament
      'Mateus': 'MAT', 'Mt': 'MAT',
      'Marcos': 'MRK', 'Mc': 'MRK',
      'Lucas': 'LUK', 'Lc': 'LUK',
      'João': 'JHN', 'Joao': 'JHN', 'Jo': 'JHN',
      'Atos': 'ACT', 'At': 'ACT',
      'Romanos': 'ROM', 'Rm': 'ROM',
      '1 Coríntios': '1CO', '1Corintios': '1CO', '1Co': '1CO', '1 Co': '1CO',
      '2 Coríntios': '2CO', '2Corintios': '2CO', '2Co': '2CO', '2 Co': '2CO',
      'Gálatas': 'GAL', 'Galatas': 'GAL', 'Gl': 'GAL',
      'Efésios': 'EPH', 'Efesios': 'EPH', 'Ef': 'EPH',
      'Filipenses': 'PHP', 'Fp': 'PHP',
      'Colossenses': 'COL', 'Cl': 'COL',
      '1 Tessalonicenses': '1TH', '1Tessalonicenses': '1TH', '1Ts': '1TH', '1 Ts': '1TH',
      '2 Tessalonicenses': '2TH', '2Tessalonicenses': '2TH', '2Ts': '2TH', '2 Ts': '2TH',
      '1 Timóteo': '1TI', '1Timoteo': '1TI', '1Tm': '1TI', '1 Tm': '1TI',
      '2 Timóteo': '2TI', '2Timoteo': '2TI', '2Tm': '2TI', '2 Tm': '2TI',
      'Tito': 'TIT', 'Tt': 'TIT',
      'Filemom': 'PHM', 'Fm': 'PHM',
      'Hebreus': 'HEB', 'Hb': 'HEB',
      'Tiago': 'JAS', 'Tg': 'JAS',
      '1 Pedro': '1PE', '1Pedro': '1PE', '1Pe': '1PE', '1 Pe': '1PE',
      '2 Pedro': '2PE', '2Pedro': '2PE', '2Pe': '2PE', '2 Pe': '2PE',
      '1 João': '1JN', '1Joao': '1JN', '1Jo': '1JN', '1 Jo': '1JN',
      '2 João': '2JN', '2Joao': '2JN', '2Jo': '2JN', '2 Jo': '2JN',
      '3 João': '3JN', '3Joao': '3JN', '3Jo': '3JN', '3 Jo': '3JN',
      'Judas': 'JUD', 'Jd': 'JUD',
      'Apocalipse': 'REV', 'Ap': 'REV'
    };
    
    return bookDictionary[bookName] || bookName;
  };
  
  const bookCode = getYouVersionBookCode(bookName);
  
  // Format the reference for YouVersion
  if (chapter && startVerse) {
    if (endVerse) {
      return `${bookCode}.${chapter}.${startVerse}-${endVerse}`;
    }
    return `${bookCode}.${chapter}.${startVerse}`;
  } else if (chapter) {
    return `${bookCode}.${chapter}`;
  } else {
    return bookCode;
  }
};

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const exampleVerses = getExampleVerses(category.id);
  
  // Fix for the translation issue - handle both keys properly
  // Make sure to handle the standard ID (redemptive-historical) and the alternate ID (redemptive-progression)
  let categoryName = '';
  let categoryDescription = '';
  
  // Map redemptive-historical to its correct translation key if needed
  const translationKey = category.id === 'redemptive-historical' ? 
    'category-redemptive-historical' : 
    `category-${category.id}`;
    
  const descKey = category.id === 'redemptive-historical' ? 
    'category-redemptive-historical-desc' : 
    `category-${category.id}-desc`;
    
  categoryName = t(translationKey);
  categoryDescription = t(descKey);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className={cn(
        "glass-card rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden bg-gradient-to-br",
        getGradient(index, isDark),
        isDark ? "border-gray-800 shadow-xl" : ""
      )}
    >
      <div className={cn(
        "absolute top-0 left-0 w-1 h-full",
        isDark ? "bg-indigo-700" : "bg-accent"
      )}></div>
      <div className="flex justify-between items-start mb-4">
        <span className={cn(
          "text-xs rounded-full px-2 py-1 w-fit",
          isDark ? "bg-indigo-900/30 text-indigo-300" : "bg-accent/10 text-accent"
        )}>
          {t('categories-count')} {index + 1}
        </span>
        <div className={isDark ? "text-indigo-300" : "text-accent/80"}>
          {getCategoryIcon(category.id)}
        </div>
      </div>
      
      <h3 className={cn(
        "text-xl mb-2 font-bold category-card-title",
        isDark ? "text-gray-100" : "text-primary"
      )}>
        {categoryName}
      </h3>
      <p className="text-sm text-muted-foreground flex-grow mb-4">{categoryDescription}</p>
      
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div className="pt-3 pb-4">
          <p className="text-sm text-muted-foreground mb-4">{categoryDescription}</p>
          
          {exampleVerses.length > 0 && (
            <div className="mt-3 space-y-2">
              <h4 className="text-sm font-medium text-primary dark:text-primary-foreground">{t('category-books')}:</h4>
              <div className="flex flex-wrap gap-2">
                {exampleVerses.map((verse, i) => {
                  const formattedVerse = formatBibleReference(verse, language);
                  return (
                    <a
                      key={i}
                      href={`https://www.bible.com/pt/bible/1608/${formattedVerse}.ARA`}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className={cn(
                        "text-xs px-2 py-1 rounded-full bible-reference flex items-center transition-colors",
                        isDark 
                          ? "bg-gray-800/40 hover:bg-gray-800/60 text-indigo-300" 
                          : "bg-accent/10 text-accent hover:bg-accent/20"
                      )}
                    >
                      {verse}
                      <ExternalLink size={10} className="ml-1" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </motion.div>
      
      <div className={cn(
        "mt-auto pt-4 border-t",
        isDark ? "border-gray-700" : "border-border/30 dark:border-border/10"
      )}>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{t('category-books')}:</span>
          <span className={cn(
            "text-lg font-bold",
            isDark ? "text-indigo-300" : "text-accent"
          )}>{getBookCount(category.id)}</span>
        </div>
        <div className={cn(
          "w-full h-2 rounded-full mt-2 overflow-hidden",
          isDark ? "bg-gray-800" : "bg-muted/30 dark:bg-muted/10"
        )}>
          <div 
            className={cn(
              "h-full rounded-full",
              isDark ? "bg-indigo-600" : "bg-accent/70"
            )}
            style={{ width: `${(getBookCount(category.id) / 66) * 100}%` }}
          ></div>
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "w-full mt-4 text-xs font-medium flex items-center justify-center hover:underline",
            isDark ? "text-indigo-300" : "text-accent"
          )}
        >
          {isExpanded ? t('less') : t('more')}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight size={12} className="ml-1 transform rotate-90" />
          </motion.div>
        </button>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
