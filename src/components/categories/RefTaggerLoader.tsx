
import React, { useEffect } from 'react';

const RefTaggerLoader = () => {
  useEffect(() => {
    // Custom Bible reference formatting function
    window.formatBibleReference = (reference: string): string => {
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
        '1 Crônicas': '1CH', '1 Cronicas': '1CH', '1 Cr': '1CH', '1Cr': '1CH',
        '2 Crônicas': '2CH', '2 Cronicas': '2CH', '2 Cr': '2CH', '2Cr': '2CH',
        'Esdras': 'EZR', 'Ed': 'EZR',
        'Neemias': 'NEH', 'Ne': 'NEH',
        'Ester': 'EST', 'Et': 'EST',
        'Jó': 'JOB', 'Jo': 'JOB',
        'Salmos': 'PSA', 'Salmo': 'PSA', 'Sl': 'PSA',
        'Provérbios': 'PRO', 'Proverbios': 'PRO', 'Pv': 'PRO',
        'Eclesiastes': 'ECC', 'Ec': 'ECC',
        'Cantares': 'SNG', 'Cânticos': 'SNG', 'Canticos': 'SNG', 'Ct': 'SNG',
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
        'Mateus': 'MAT', 'Mt': 'MAT',
        'Marcos': 'MRK', 'Mc': 'MRK',
        'Lucas': 'LUK', 'Lc': 'LUK',
        'João': 'JHN', 'Joao': 'JHN', 'Jo': 'JHN',
        'Atos': 'ACT', 'At': 'ACT',
        'Romanos': 'ROM', 'Rm': 'ROM',
        '1 Coríntios': '1CO', '1 Corintios': '1CO', '1 Co': '1CO', '1Co': '1CO',
        '2 Coríntios': '2CO', '2 Corintios': '2CO', '2 Co': '2CO', '2Co': '2CO',
        'Gálatas': 'GAL', 'Galatas': 'GAL', 'Gl': 'GAL',
        'Efésios': 'EPH', 'Efesios': 'EPH', 'Ef': 'EPH',
        'Filipenses': 'PHP', 'Fp': 'PHP',
        'Colossenses': 'COL', 'Cl': 'COL',
        '1 Tessalonicenses': '1TH', '1 Ts': '1TH', '1Ts': '1TH',
        '2 Tessalonicenses': '2TH', '2 Ts': '2TH', '2Ts': '2TH',
        '1 Timóteo': '1TI', '1 Timoteo': '1TI', '1 Tm': '1TI', '1Tm': '1TI',
        '2 Timóteo': '2TI', '2 Timoteo': '2TI', '2 Tm': '2TI', '2Tm': '2TI',
        'Tito': 'TIT', 'Tt': 'TIT',
        'Filemom': 'PHM', 'Fm': 'PHM',
        'Hebreus': 'HEB', 'Hb': 'HEB',
        'Tiago': 'JAS', 'Tg': 'JAS',
        '1 Pedro': '1PE', '1 Pe': '1PE', '1Pe': '1PE',
        '2 Pedro': '2PE', '2 Pe': '2PE', '2Pe': '2PE',
        '1 João': '1JN', '1 Joao': '1JN', '1 Jo': '1JN', '1Jo': '1JN',
        '2 João': '2JN', '2 Joao': '2JN', '2 Jo': '2JN', '2Jo': '2JN',
        '3 João': '3JN', '3 Joao': '3JN', '3 Jo': '3JN', '3Jo': '3JN',
        'Judas': 'JUD', 'Jd': 'JUD',
        'Apocalipse': 'REV', 'Ap': 'REV'
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

    // Detect Bible references in the document and convert them to links
    const convertBibleReferences = () => {
      document.querySelectorAll('.bible-reference').forEach(element => {
        const reference = element.textContent?.trim() || '';
        
        if (reference) {
          const formattedReference = window.formatBibleReference(reference);
          
          if (formattedReference) {
            const link = document.createElement('a');
            link.href = `https://www.bible.com/pt/bible/1608/${formattedReference}.ARA`;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = reference;
            
            if (element.firstChild) {
              element.replaceChild(link, element.firstChild);
            } else {
              element.appendChild(link);
            }
          }
        }
      });
    };

    // Run once on load
    convertBibleReferences();

    // Run whenever the DOM changes (for dynamic content)
    const observer = new MutationObserver(convertBibleReferences);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default RefTaggerLoader;
