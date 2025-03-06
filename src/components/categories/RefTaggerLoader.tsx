
import { useEffect } from 'react';

// Function to convert Bible references to YouVersion links
const createYouVersionLinks = () => {
  // Select all elements with the bible-reference class
  const bibleReferences = document.querySelectorAll('.bible-reference');
  
  bibleReferences.forEach(element => {
    const reference = element.textContent?.trim();
    if (reference) {
      // Format the reference for YouVersion URL
      const formattedReference = formatBibleReference(reference);
      
      // Create a link to YouVersion Bible
      const youVersionLink = document.createElement('a');
      youVersionLink.href = `https://www.bible.com/pt/bible/1608/${formattedReference}.ARA`;
      youVersionLink.target = '_blank';
      youVersionLink.rel = 'noopener noreferrer';
      youVersionLink.className = 'flex items-center hover:underline';
      
      // Manter o texto da referência
      youVersionLink.textContent = reference;
      
      // Add external link icon
      const iconSpan = document.createElement('span');
      iconSpan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
      youVersionLink.appendChild(iconSpan);
      
      // Replace the content of the original element
      element.textContent = '';
      element.appendChild(youVersionLink);
    }
  });
};

// Book dictionary for formatting Bible references
const bookDictionary: Record<string, string> = {
  // Old Testament
  'Gênesis': 'GEN', 'Genesis': 'GEN', 'Gên': 'GEN', 'Gen': 'GEN',
  'Êxodo': 'EXO', 'Exodo': 'EXO', 'Êx': 'EXO', 'Ex': 'EXO',
  'Levítico': 'LEV', 'Levitico': 'LEV', 'Lev': 'LEV', 'Lv': 'LEV',
  'Números': 'NUM', 'Numeros': 'NUM', 'Núm': 'NUM', 'Num': 'NUM',
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
  'Jó': 'JOB', 'Jo': 'JOB',
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

// Format Bible references to match YouVersion URL format
const formatBibleReference = (reference: string): string => {
  // Regular expression to extract book name, chapter and verse
  const regex = /^((?:\d+\s+)?[A-Za-zÀ-ú]+)(?:\s+(\d+)(?:[:\.](\d+)(?:-(\d+))?)?)?/;
  const match = reference.match(regex);
  
  if (!match) return reference;
  
  const [, bookName, chapter, startVerse, endVerse] = match;
  
  // Get the English abbreviation for the book
  const bookCode = bookDictionary[bookName];
  if (!bookCode) return reference;
  
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

// Observer to monitor DOM changes
const setupBibleReferenceObserver = () => {
  // Setup MutationObserver to detect new Bible references
  const observer = new MutationObserver((mutations) => {
    let shouldProcess = false;
    
    mutations.forEach(mutation => {
      // Check if any mutation added elements with the bible-reference class
      if (mutation.type === 'childList') {
        const addedNodes = Array.from(mutation.addedNodes);
        for (const node of addedNodes) {
          if (node instanceof HTMLElement) {
            if (node.classList.contains('bible-reference') || 
                node.querySelectorAll('.bible-reference').length > 0) {
              shouldProcess = true;
              break;
            }
          }
        }
      }
    });
    
    if (shouldProcess) {
      createYouVersionLinks();
    }
  });
  
  // Observe document.body for changes
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  return observer;
};

const RefTaggerLoader = () => {
  useEffect(() => {
    // Process existing Bible references
    createYouVersionLinks();
    
    // Setup the observer
    const observer = setupBibleReferenceObserver();
    
    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default RefTaggerLoader;
