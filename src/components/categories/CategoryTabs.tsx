
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PencilRuler, BookText, Info, ChartPie, Book, Grid } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ThemeProvider';

interface TabProps {
  books: any[];
}

const CategoryTabs = ({ books }: TabProps) => {
  const [activeTab, setActiveTab] = useState("about");
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  console.log('Current language in CategoryTabs:', language);
  
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
    // Gradientes para modo claro
    const lightGradients = [
      "from-blue-50 to-blue-100",
      "from-green-50 to-green-100",
      "from-red-50 to-red-100",
      "from-purple-50 to-purple-100",
      "from-yellow-50 to-yellow-100",
      "from-indigo-50 to-indigo-100",
      "from-pink-50 to-pink-100",
    ];
    
    // Gradientes para modo escuro
    const darkGradients = [
      "from-blue-900/40 to-blue-800/40",
      "from-green-900/40 to-green-800/40",
      "from-red-900/40 to-red-800/40",
      "from-purple-900/40 to-purple-800/40",
      "from-yellow-900/40 to-yellow-800/40",
      "from-indigo-900/40 to-indigo-800/40",
      "from-pink-900/40 to-pink-800/40",
    ];
    
    return isDark ? darkGradients[index % darkGradients.length] : lightGradients[index % lightGradients.length];
  };

  return (
    <div>
      <div className="flex justify-center mb-8 gap-2">
        <TabButton 
          active={activeTab === "about"} 
          onClick={() => setActiveTab("about")}
        >
          {t('about-categories')}
        </TabButton>
        <TabButton 
          active={activeTab === "greidanus"} 
          onClick={() => setActiveTab("greidanus")}
        >
          {t('who-is-greidanus')}
        </TabButton>
        <TabButton 
          active={activeTab === "stats"} 
          onClick={() => setActiveTab("stats")}
        >
          {t('statistics')}
        </TabButton>
      </div>
      
      {activeTab === "about" && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn(
            "mb-12 max-w-4xl mx-auto p-6 rounded-lg",
            isDark ? "bg-gray-800/50 border border-gray-700 shadow-lg" : "bg-secondary/10"
          )}
        >
          <div className="flex items-start mb-4">
            <BookOpen className={cn("h-6 w-6 mr-3 mt-1 flex-shrink-0", isDark ? "text-indigo-300" : "text-accent")} />
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">{t('seeing-christ')}</h3>
              <p className="text-muted-foreground">
                {t('greidanus-proposed')}
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-4">
            <PencilRuler className={cn("h-6 w-6 mr-3 mt-1 flex-shrink-0", isDark ? "text-indigo-300" : "text-accent")} />
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">{t('solid-methods')}</h3>
              <p className="text-muted-foreground">
                {t('categories-represent')}
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <BookText className={cn("h-6 w-6 mr-3 mt-1 flex-shrink-0", isDark ? "text-indigo-300" : "text-accent")} />
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
          className={cn(
            "mb-12 max-w-4xl mx-auto p-6 rounded-lg",
            isDark ? "bg-gray-800/50 border border-gray-700 shadow-lg" : "bg-secondary/10"
          )}
        >
          <div className="flex items-start">
            <Info className={cn("h-6 w-6 mr-3 mt-1 flex-shrink-0", isDark ? "text-indigo-300" : "text-accent")} />
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
            <div className={cn(
              "rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden bg-gradient-to-br",
              isDark ? "from-gray-800 to-gray-900 border border-gray-700" : "glass-card"
            )}>
              <ChartPie className={cn("h-8 w-8 mb-3", isDark ? "text-indigo-300" : "text-accent")} />
              <h3 className="text-lg font-bold text-primary mb-1">7 {t('categories-count-title')}</h3>
              <p className="text-sm text-muted-foreground">{t('different-ways')}</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className={cn(
                  "text-center p-2 rounded",
                  isDark ? "bg-gray-700" : "bg-white"
                )}>
                  <span className={cn("block text-lg font-bold", isDark ? "text-indigo-300" : "text-accent")}>3</span>
                  <span className="text-xs text-muted-foreground">{t('promise-based')}</span>
                </div>
                <div className={cn(
                  "text-center p-2 rounded",
                  isDark ? "bg-gray-700" : "bg-white"
                )}>
                  <span className={cn("block text-lg font-bold", isDark ? "text-indigo-300" : "text-accent")}>4</span>
                  <span className="text-xs text-muted-foreground">{t('pattern-based')}</span>
                </div>
              </div>
            </div>
            
            <div className={cn(
              "rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden bg-gradient-to-br",
              isDark ? "from-gray-800 to-gray-900 border border-gray-700" : "glass-card"
            )}>
              <Book className={cn("h-8 w-8 mb-3", isDark ? "text-indigo-300" : "text-accent")} />
              <h3 className="text-lg font-bold text-primary mb-1">{stats.total} {t('bible-books-count')}</h3>
              <p className="text-sm text-muted-foreground">{stats.oldTestament} {t('old-testament-count')}, {stats.newTestament} {t('new-testament-count')}</p>
              <div className={cn(
                "mt-4 w-full p-2 rounded",
                isDark ? "bg-gray-700" : "bg-white"
              )}>
                <div className="flex justify-between items-center text-xs text-muted-foreground mb-1">
                  <span>{t('old-testament')}</span>
                  <span>{t('new-testament')}</span>
                </div>
                <div className={cn(
                  "w-full h-4 rounded-full overflow-hidden",
                  isDark ? "bg-gray-800" : "bg-muted/30"
                )}>
                  <div 
                    className={cn(
                      "h-full rounded-full flex items-center justify-end pr-2 text-xs text-white font-bold",
                      isDark ? "bg-indigo-600" : "bg-accent/70"
                    )}
                    style={{ width: `${(stats.oldTestament / stats.total) * 100}%` }}
                  >
                    {Math.round((stats.oldTestament / stats.total) * 100)}%
                  </div>
                </div>
              </div>
            </div>
            
            <div className={cn(
              "rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden bg-gradient-to-br",
              isDark ? "from-gray-800 to-gray-900 border border-gray-700" : "glass-card"
            )}>
              <Grid className={cn("h-8 w-8 mb-3", isDark ? "text-indigo-300" : "text-accent")} />
              <h3 className="text-lg font-bold text-primary mb-1">{t('distribution-by-category')}</h3>
              <p className="text-sm text-muted-foreground">{t('occurrences-by-category')}</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">{t('typology')}</span>
                  <span className={cn("font-medium", isDark ? "text-white" : "text-primary")}>29</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">{t('promise-fulfillment')}</span>
                  <span className={cn("font-medium", isDark ? "text-white" : "text-primary")}>37</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">{t('new-testament-refs')}</span>
                  <span className={cn("font-medium", isDark ? "text-white" : "text-primary")}>45</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TabButton = ({ active, onClick, children }: TabButtonProps) => {
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

export default CategoryTabs;
