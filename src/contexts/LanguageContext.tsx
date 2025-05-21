
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '@/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('cristo-biblia-language') as Language;
    return savedLanguage || 'pt';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('cristo-biblia-language', language);
    console.log('Language changed to:', language);
  }, [language]);

  const t = (key: string) => {
    // Check if the key exists in the current language
    if (!translations[language][key]) {
      console.log(`Missing translation for key "${key}" in language "${language}"`);
      
      // If missing in current language, try to use Portuguese as fallback
      if (translations.pt[key]) {
        return translations.pt[key];
      }
      
      // If missing in Portuguese too, try English as second fallback
      if (translations.en[key]) {
        return translations.en[key];
      }
      
      // Last resort: return the key itself
      return key;
    }
    
    // Return the translation if it exists
    return translations[language][key];
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Re-export translations for direct use if needed
export { translations };
