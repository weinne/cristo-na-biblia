
import React from 'react';
import { Book, categories } from '@/lib/data';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface BookDetailProps {
  book: Book;
}

const formatBibleReference = (reference: string): string => {
  const bookDictionary: Record<string, string> = {
    'Gênesis': 'GEN', 'Genesis': 'GEN', 'Gên': 'GEN', 'Gen': 'GEN', 'Génesis': 'GEN',
    'Êxodo': 'EXO', 'Exodo': 'EXO', 'Êx': 'EXO', 'Ex': 'EXO', 'Éxodo': 'EXO',
    'Levítico': 'LEV', 'Levitico': 'LEV', 'Lev': 'LEV',
    'Números': 'NUM', 'Numeros': 'NUM', 'Núm': 'NUM', 'Num': 'NUM',
    'Deuteronômio': 'DEU', 'Deuteronomio': 'DEU', 'Deut': 'DEU',
    'Josué': 'JOS', 'Josue': 'JOS', 'Jos': 'JOS',
    'Juízes': 'JDG', 'Juizes': 'JDG', 'Jz': 'JDG', 'Jueces': 'JDG',
    'Rute': 'RUT', 'Rut': 'RUT', 'Ruth': 'RUT',
    '1 Samuel': '1SA', '1Sm': '1SA', '1Sa': '1SA',
    '2 Samuel': '2SA', '2Sm': '2SA', '2Sa': '2SA',
    '1 Reis': '1KI', '1Rs': '1KI', '1 Reyes': '1KI',
    '2 Reis': '2KI', '2Rs': '2KI', '2 Reyes': '2KI',
    '1 Crônicas': '1CH', '1Cr': '1CH', '1 Crónicas': '1CH',
    '2 Crônicas': '2CH', '2Cr': '2CH', '2 Crónicas': '2CH',
    'Esdras': 'EZR', 'Esd': 'EZR',
    'Neemias': 'NEH', 'Ne': 'NEH', 'Nehemías': 'NEH',
    'Ester': 'EST', 'Est': 'EST',
    'Jó': 'JOB', 'Job': 'JOB',
    'Salmos': 'PSA', 'Salmo': 'PSA', 'Sl': 'PSA', 'Slm': 'PSA',
    'Provérbios': 'PRO', 'Proverbios': 'PRO', 'Pv': 'PRO',
    'Eclesiastes': 'ECC', 'Ecles': 'ECC', 'Ec': 'ECC',
    'Cânticos': 'SNG', 'Canticos': 'SNG', 'Ct': 'SNG', 'Cantares': 'SNG',
    'Isaías': 'ISA', 'Isaias': 'ISA', 'Is': 'ISA',
    'Jeremias': 'JER', 'Jr': 'JER',
    'Lamentações': 'LAM', 'Lamentacoes': 'LAM', 'Lm': 'LAM', 'Lamentaciones': 'LAM',
    'Ezequiel': 'EZK', 'Ez': 'EZK',
    'Daniel': 'DAN', 'Dn': 'DAN',
    'Oséias': 'HOS', 'Oseias': 'HOS', 'Os': 'HOS', 'Oseas': 'HOS',
    'Joel': 'JOL', 'Jl': 'JOL',
    'Amós': 'AMO', 'Amos': 'AMO', 'Am': 'AMO',
    'Obadias': 'OBA', 'Ob': 'OBA', 'Abdías': 'OBA',
    'Jonas': 'JON', 'Jn': 'JON', 'Jonás': 'JON',
    'Miquéias': 'MIC', 'Miqueias': 'MIC', 'Mq': 'MIC', 'Miqueas': 'MIC',
    'Naum': 'NAM', 'Na': 'NAM', 'Nahúm': 'NAM',
    'Habacuque': 'HAB', 'Hc': 'HAB', 'Habacuc': 'HAB',
    'Sofonias': 'ZEP', 'Sf': 'ZEP', 'Sofonías': 'ZEP',
    'Ageu': 'HAG', 'Ag': 'HAG', 'Hageo': 'HAG',
    'Zacarias': 'ZEC', 'Zc': 'ZEC',
    'Malaquias': 'MAL', 'Ml': 'MAL', 'Malaquías': 'MAL',
    'Mateus': 'MAT', 'Mt': 'MAT', 'Mateo': 'MAT',
    'Marcos': 'MRK', 'Mc': 'MRK',
    'Lucas': 'LUK', 'Lc': 'LUK',
    'João': 'JHN', 'Joao': 'JHN', 'Jo': 'JHN', 'Juan': 'JHN',
    'Atos': 'ACT', 'At': 'ACT', 'Hechos': 'ACT',
    'Romanos': 'ROM', 'Rm': 'ROM', 'Ro': 'ROM',
    '1 Coríntios': '1CO', '1Cor': '1CO', '1 Corintios': '1CO',
    '2 Coríntios': '2CO', '2Cor': '2CO', '2 Corintios': '2CO',
    'Gálatas': 'GAL', 'Gal': 'GAL', 'Ga': 'GAL',
    'Efésios': 'EPH', 'Ef': 'EPH', 'Efesios': 'EPH',
    'Filipenses': 'PHP', 'Fp': 'PHP', 'Fil': 'PHP',
    'Colossenses': 'COL', 'Cl': 'COL', 'Colosenses': 'COL',
    '1 Tessalonicenses': '1TH', '1Ts': '1TH', '1 Tesalonicenses': '1TH',
    '2 Tessalonicenses': '2TH', '2Ts': '2TH', '2 Tesalonicenses': '2TH',
    '1 Timóteo': '1TI', '1Tm': '1TI', '1 Timoteo': '1TI',
    '2 Timóteo': '2TI', '2Tm': '2TI', '2 Timoteo': '2TI',
    'Tito': 'TIT', 'Tt': 'TIT',
    'Filemom': 'PHM', 'Fm': 'PHM', 'Filemón': 'PHM',
    'Hebreus': 'HEB', 'Hb': 'HEB', 'Hebreos': 'HEB',
    'Tiago': 'JAS', 'Tg': 'JAS', 'Santiago': 'JAS',
    '1 Pedro': '1PE', '1Pd': '1PE', '1Pe': '1PE',
    '2 Pedro': '2PE', '2Pd': '2PE', '2Pe': '2PE',
    '1 João': '1JN', '1Jo': '1JN', '1 Juan': '1JN',
    '2 João': '2JN', '2Jo': '2JN', '2 Juan': '2JN',
    '3 João': '3JN', '3Jo': '3JN', '3 Juan': '3JN',
    'Judas': 'JUD', 'Jd': 'JUD',
    'Apocalipse': 'REV', 'Ap': 'REV', 'Apocalipsis': 'REV'
  };

  const regex = /^((?:\d+\s+)?[A-Za-zÀ-ú]+)(?:\s+(\d+)(?:[:.](\d+)(?:-(\d+))?)?)?/;
  const match = reference.match(regex);
  
  if (!match) return reference;
  
  const [, bookName, chapter, startVerse, endVerse] = match;
  
  const bookCode = bookDictionary[bookName];
  if (!bookCode) return reference;
  
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

const BookDetail = ({ book }: BookDetailProps) => {
  const { t, language } = useLanguage();
  
  const getTestamentTranslation = (testament: string) => {
    return testament === 'old' ? 
      (language === 'pt' ? 'Antigo Testamento' : 
       language === 'en' ? 'Old Testament' : 'Antiguo Testamento') : 
      (language === 'pt' ? 'Novo Testamento' : 
       language === 'en' ? 'New Testament' : 'Nuevo Testamento');
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 md:px-0 animate-fade-in">
      <Link to="/books" className="flex items-center text-primary hover:text-accent mb-6 transition-colors">
        <ArrowLeft size={16} className="mr-2" />
        <span className="text-sm">{t('back-to-books')}</span>
      </Link>

      <div className="mb-8">
        <div className="mb-1">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">
            {getTestamentTranslation(book.testament)}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t(book.nameKey)}</h1>
        <p className="text-lg text-muted-foreground">{t(book.descriptionKey)}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('christ-in')}</h2>
        <div className="space-y-6">
          {book.christPointers.map((pointer, index) => {
            const category = categories.find(cat => cat.id === pointer.category);
            
            return (
              <div key={index} className="glass-card rounded-lg p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                <div className="mb-3">
                  <Link 
                    to="/categories" 
                    className="text-xs rounded-full px-2 py-1 bg-accent/10 text-accent w-fit hover:bg-accent/20 transition-colors"
                  >
                    {t(category?.nameKey || `category-${pointer.category}`)}
                  </Link>
                </div>
                <p className="mb-4 text-foreground">{t(pointer.descriptionKey)}</p>
                <div className="flex flex-wrap gap-2">
                  {pointer.verses.map((verse, idx) => {
                    const formattedVerse = formatBibleReference(verse);
                    return (
                      <a
                        key={idx}
                        href={`https://www.bible.com/pt/bible/1608/${formattedVerse}.ARA`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 bg-muted text-xs rounded text-muted-foreground bible-reference flex items-center hover:bg-muted/80 transition-colors"
                      >
                        {verse}
                        <ExternalLink size={10} className="ml-1" />
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
