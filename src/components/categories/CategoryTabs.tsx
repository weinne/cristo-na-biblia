
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PencilRuler, BookText, Info, ChartPie, Book, Grid } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TabProps {
  books: any[];
}

const CategoryTabs = ({ books }: TabProps) => {
  const [activeTab, setActiveTab] = useState("about");
  const { t } = useLanguage();
  
  // Calculate category statistics
  const getCategoryStats = () => {
    const oldTestamentBooks = books.filter(book => book.testament === 'old').length;
    const newTestamentBooks = books.filter(book => book.testament === 'new').length;
    
    return {
      oldTestament: oldTestamentBooks,
      newTestament: newTestamentBooks,
      total: oldTestamentBooks + newTestamentBooks
    };
  };
  
  const stats = getCategoryStats();

  const getGradient = (index: number) => {
    const gradients = [
      "from-blue-50 to-blue-100",
      "from-green-50 to-green-100",
      "from-red-50 to-red-100",
      "from-purple-50 to-purple-100",
      "from-yellow-50 to-yellow-100",
      "from-indigo-50 to-indigo-100",
      "from-pink-50 to-pink-100",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div>
      <div className="mb-12 flex justify-center">
        <div className="flex bg-secondary/20 p-1 rounded-lg mb-8">
          <button 
            onClick={() => setActiveTab("about")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "about" ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-primary"}`}
          >
            {t('about-categories')}
          </button>
          <button 
            onClick={() => setActiveTab("greidanus")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "greidanus" ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-primary"}`}
          >
            {t('who-is-greidanus')}
          </button>
          <button 
            onClick={() => setActiveTab("stats")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "stats" ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-primary"}`}
          >
            {t('statistics')}
          </button>
        </div>
      </div>
      
      {activeTab === "about" && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 max-w-4xl mx-auto bg-secondary/10 p-6 rounded-lg"
        >
          <div className="flex items-start mb-4">
            <BookOpen className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">{t('seeing-christ')}</h3>
              <p className="text-muted-foreground">
                {t('greidanus-proposed')}
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-4">
            <PencilRuler className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">{t('solid-methods')}</h3>
              <p className="text-muted-foreground">
                {t('categories-represent')}
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <BookText className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">{t('christocentric-tool')}</h3>
              <p className="text-muted-foreground">
                {t('guide-created')}
              </p>
            </div>
          </div>
        </motion.div>
      )}
      
      {activeTab === "greidanus" && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 max-w-4xl mx-auto bg-secondary/10 p-6 rounded-lg"
        >
          <div className="flex items-start">
            <Info className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">{t('dr-greidanus')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('greidanus-bio')}
              </p>
              
              <h4 className="font-semibold text-primary mb-2">{t('main-works')}:</h4>
              <ul className="text-muted-foreground list-disc pl-5 space-y-1 mb-4">
                <li>"Preaching Christ from the Old Testament: A Contemporary Hermeneutical Method" (1999)</li>
                <li>"The Modern Preacher and the Ancient Text" (1988)</li>
                <li>"Preaching Christ from Genesis" (2007)</li>
                <li>"Preaching Christ from Ecclesiastes" (2010)</li>
                <li>"Preaching Christ from Daniel" (2012)</li>
              </ul>
              
              <p className="text-muted-foreground">
                {t('greidanus-work')}
              </p>
            </div>
          </div>
        </motion.div>
      )}
      
      {activeTab === "stats" && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`glass-card rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden bg-gradient-to-br dark:border-gray-800`}>
              <ChartPie className="h-8 w-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-primary mb-1">7 {t('categories-count-title')}</h3>
              <p className="text-sm text-muted-foreground">{t('different-ways')}</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="text-center bg-white p-2 rounded">
                  <span className="block text-lg font-bold text-accent">3</span>
                  <span className="text-xs text-muted-foreground">{t('promise-based')}</span>
                </div>
                <div className="text-center bg-white p-2 rounded">
                  <span className="block text-lg font-bold text-accent">4</span>
                  <span className="text-xs text-muted-foreground">{t('pattern-based')}</span>
                </div>
              </div>
            </div>
            
            <div className={`glass-card rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden bg-gradient-to-br dark:border-gray-800`}>
              <Book className="h-8 w-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-primary mb-1">{stats.total} {t('bible-books-count')}</h3>
              <p className="text-sm text-muted-foreground">{stats.oldTestament} {t('old-testament-count')}, {stats.newTestament} {t('new-testament-count')}</p>
              <div className="mt-4 w-full bg-white p-2 rounded">
                <div className="flex justify-between items-center text-xs text-muted-foreground mb-1">
                  <span>{t('old-testament')}</span>
                  <span>{t('new-testament')}</span>
                </div>
                <div className="w-full bg-muted/30 h-4 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent/70 rounded-full flex items-center justify-end pr-2 text-xs text-white font-bold"
                    style={{ width: `${(stats.oldTestament / stats.total) * 100}%` }}
                  >
                    {Math.round((stats.oldTestament / stats.total) * 100)}%
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`glass-card rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden bg-gradient-to-br dark:border-gray-800`}>
              <Grid className="h-8 w-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-primary mb-1">{t('distribution-by-category')}</h3>
              <p className="text-sm text-muted-foreground">{t('occurrences-by-category')}</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">{t('typology')}</span>
                  <span className="font-medium text-primary">29</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">{t('promise-fulfillment')}</span>
                  <span className="font-medium text-primary">37</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">{t('new-testament-refs')}</span>
                  <span className="font-medium text-primary">45</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CategoryTabs;
