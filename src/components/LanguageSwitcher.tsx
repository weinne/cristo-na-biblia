
import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageSelect = (lang: 'pt' | 'en' | 'es') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center text-primary hover:text-accent transition-colors">
          <Globe size={18} className="mr-1" />
          <span className="hidden md:inline text-sm">{t('language')}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem 
          onClick={() => handleLanguageSelect('pt')}
          className={`${language === 'pt' ? 'bg-accent/10 text-accent' : ''}`}
        >
          {t('portuguese')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageSelect('en')}
          className={`${language === 'en' ? 'bg-accent/10 text-accent' : ''}`}
        >
          {t('english')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageSelect('es')}
          className={`${language === 'es' ? 'bg-accent/10 text-accent' : ''}`}
        >
          {t('spanish')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
