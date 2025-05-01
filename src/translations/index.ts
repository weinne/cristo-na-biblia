
import { pt } from './pt';
import { en } from './en';
import { es } from './es';

export type Language = 'pt' | 'en' | 'es';

// Exported translations object containing all languages
export const translations: Record<Language, Record<string, string>> = {
  pt,
  en,
  es
};
