
import React from 'react';
import { Book, categories } from '@/lib/data';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BookDetailProps {
  book: Book;
}

const formatBibleReference = (reference: string): string => {
  const bookDictionary: Record<string, string> = {
    'Gênesis': 'GEN', 'Genesis': 'GEN', 'Gên': 'GEN', 'Gen': 'GEN',
    'Êxodo': 'EXO', 'Exodo': 'EXO', 'Êx': 'EXO', 'Ex': 'EXO',
    'Levítico': 'LEV', 'Levitico': 'LEV', 'Lev': 'LEV',
    'Números': 'NUM', 'Numeros': 'NUM', 'Núm': 'NUM', 'Num': 'NUM',
    'Deuteronômio': 'DEU', 'Deuteronomio': 'DEU', 'Dt': 'DEU',
    'Josué': 'JOS', 'Josue': 'JOS', 'Jos': 'JOS',
    'Juízes': 'JDG', 'Juizes': 'JDG', 'Jz': 'JDG',
    'Rute': 'RUT', 'Ruth': 'RUT', 'Rt': 'RUT',
    '1 Samuel': '1SA', '1Samuel': '1SA', '1 Sm': '1SA', '1Sm': '1SA',
    '2 Samuel': '2SA', '2Samuel': '2SA', '2 Sm': '2SA', '2Sm': '2SA',
    '1 Reis': '1KI', '1Reis': '1KI', '1 Rs': '1KI', '1Rs': '1KI',
    '2 Reis': '2KI', '2Reis': '2KI', '2 Rs': '2KI', '2Rs': '2KI',
    '1 Crônicas': '1CH', '1Crônicas': '1CH', '1 Cronicas': '1CH', '1Cronicas': '1CH', '1 Cr': '1CH', '1Cr': '1CH',
    '2 Crônicas': '2CH', '2Crônicas': '2CH', '2 Cronicas': '2CH', '2Cronicas': '2CH', '2 Cr': '2CH', '2Cr': '2CH',
    'Esdras': 'EZR', 'Esdras': 'EZR', 'Ed': 'EZR',
    'Neemias': 'NEH', 'Neemias': 'NEH', 'Ne': 'NEH',
    'Ester': 'EST', 'Ester': 'EST', 'Et': 'EST',
    'Jó': 'JOB', 'Jo': 'JOB', 'Jó': 'JOB',
    'Salmos': 'PSA', 'Salmo': 'PSA', 'Sl': 'PSA',
    'Provérbios': 'PRO', 'Proverbios': 'PRO', 'Pv': 'PRO',
    'Eclesiastes': 'ECC', 'Eclesiastes': 'ECC', 'Ec': 'ECC',
    'Cantares': 'SNG', 'Cânticos': 'SNG', 'Canticos': 'SNG', 'Ct': 'SNG',
    'Isaías': 'ISA', 'Isaias': 'ISA', 'Is': 'ISA',
    'Jeremias': 'JER', 'Jeremias': 'JER', 'Jr': 'JER',
    'Lamentações': 'LAM', 'Lamentacoes': 'LAM', 'Lm': 'LAM',
    'Ezequiel': 'EZK', 'Ezequiel': 'EZK', 'Ez': 'EZK',
    'Daniel': 'DAN', 'Daniel': 'DAN', 'Dn': 'DAN',
    'Oséias': 'HOS', 'Oseias': 'HOS', 'Os': 'HOS',
    'Joel': 'JOL', 'Joel': 'JOL', 'Jl': 'JOL',
    'Amós': 'AMO', 'Amos': 'AMO', 'Am': 'AMO',
    'Obadias': 'OBA', 'Obadias': 'OBA', 'Ob': 'OBA',
    'Jonas': 'JON', 'Jonas': 'JON', 'Jn': 'JON',
    'Miquéias': 'MIC', 'Miqueias': 'MIC', 'Mq': 'MIC',
    'Naum': 'NAM', 'Naum': 'NAM', 'Na': 'NAM',
    'Habacuque': 'HAB', 'Habacuque': 'HAB', 'Hc': 'HAB',
    'Sofonias': 'ZEP', 'Sofonias': 'ZEP', 'Sf': 'ZEP',
    'Ageu': 'HAG', 'Ageu': 'HAG', 'Ag': 'HAG',
    'Zacarias': 'ZEC', 'Zacarias': 'ZEC', 'Zc': 'ZEC',
    'Malaquias': 'MAL', 'Malaquias': 'MAL', 'Ml': 'MAL',
    'Mateus': 'MAT', 'Mateus': 'MAT', 'Mt': 'MAT',
    'Marcos': 'MRK', 'Marcos': 'MRK', 'Mc': 'MRK',
    'Lucas': 'LUK', 'Lucas': 'LUK', 'Lc': 'LUK',
    'João': 'JHN', 'Joao': 'JHN', 'Jo': 'JHN',
    'Atos': 'ACT', 'Atos': 'ACT', 'At': 'ACT',
    'Romanos': 'ROM', 'Romanos': 'ROM', 'Rm': 'ROM',
    '1 Coríntios': '1CO', '1Coríntios': '1CO', '1 Corintios': '1CO', '1Corintios': '1CO', '1 Co': '1CO', '1Co': '1CO',
    '2 Coríntios': '2CO', '2Coríntios': '2CO', '2 Corintios': '2CO', '2Corintios': '2CO', '2 Co': '2CO', '2Co': '2CO',
    'Gálatas': 'GAL', 'Galatas': 'GAL', 'Gl': 'GAL',
    'Efésios': 'EPH', 'Efesios': 'EPH', 'Ef': 'EPH',
    'Filipenses': 'PHP', 'Filipenses': 'PHP', 'Fp': 'PHP',
    'Colossenses': 'COL', 'Colossenses': 'COL', 'Cl': 'COL',
    '1 Tessalonicenses': '1TH', '1Tessalonicenses': '1TH', '1 Ts': '1TH', '1Ts': '1TH',
    '2 Tessalonicenses': '2TH', '2Tessalonicenses': '2TH', '2 Ts': '2TH', '2Ts': '2TH',
    '1 Timóteo': '1TI', '1Timóteo': '1TI', '1 Timoteo': '1TI', '1Timoteo': '1TI', '1 Tm': '1TI', '1Tm': '1TI',
    '2 Timóteo': '2TI', '2Timóteo': '2TI', '2 Timoteo': '2TI', '2Timoteo': '2TI', '2 Tm': '2TI', '2Tm': '2TI',
    'Tito': 'TIT', 'Tito': 'TIT', 'Tt': 'TIT',
    'Filemom': 'PHM', 'Filemom': 'PHM', 'Fm': 'PHM',
    'Hebreus': 'HEB', 'Hebreus': 'HEB', 'Hb': 'HEB',
    'Tiago': 'JAS', 'Tiago': 'JAS', 'Tg': 'JAS',
    '1 Pedro': '1PE', '1Pedro': '1PE', '1 Pe': '1PE', '1Pe': '1PE',
    '2 Pedro': '2PE', '2Pedro': '2PE', '2 Pe': '2PE', '2Pe': '2PE',
    '1 João': '1JN', '1Joao': '1JN', '1 Jo': '1JN', '1Jo': '1JN',
    '2 João': '2JN', '2Joao': '2JN', '2 Jo': '2JN', '2Jo': '2JN',
    '3 João': '3JN', '3Joao': '3JN', '3 Jo': '3JN', '3Jo': '3JN',
    'Judas': 'JUD', 'Judas': 'JUD', 'Jd': 'JUD',
    'Apocalipse': 'REV', 'Apocalipse': 'REV', 'Ap': 'REV'
  };

  const regex = /^((?:\d+\s+)?[A-Za-zÀ-ú]+)(?:\s+(\d+)(?:[:\.](\d+)(?:-(\d+))?)?)?/;
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
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 md:px-0 animate-fade-in">
      <Link to="/books" className="flex items-center text-primary hover:text-accent mb-6 transition-colors">
        <ArrowLeft size={16} className="mr-2" />
        <span className="text-sm">Voltar para todos os livros</span>
      </Link>

      <div className="mb-8">
        <div className="mb-1">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">
            {book.testament === 'old' ? 'Antigo Testamento' : 'Novo Testamento'}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{book.name}</h1>
        <p className="text-lg text-muted-foreground">{book.description}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Como aponta para Cristo:</h2>
        <div className="space-y-6">
          {book.christPointers.map((pointer, index) => {
            const category = categories.find(cat => cat.id === pointer.category);
            
            return (
              <div key={index} className="glass-card rounded-lg p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                <div className="mb-3">
                  <Link 
                    to={`/categories/${pointer.category}`} 
                    className="text-xs rounded-full px-2 py-1 bg-accent/10 text-accent w-fit hover:bg-accent/20 transition-colors"
                  >
                    {category?.name}
                  </Link>
                </div>
                <p className="mb-4 text-foreground">{pointer.description}</p>
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
