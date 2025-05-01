
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageSelect = (lang: 'pt' | 'en' | 'es') => {
    setLanguage(lang);
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
          className={cn(language === 'pt' ? 'bg-accent/10 text-accent' : '')}
        >
          {t('portuguese')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageSelect('en')}
          className={cn(language === 'en' ? 'bg-accent/10 text-accent' : '')}
        >
          {t('english')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageSelect('es')}
          className={cn(language === 'es' ? 'bg-accent/10 text-accent' : '')}
        >
          {t('spanish')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
