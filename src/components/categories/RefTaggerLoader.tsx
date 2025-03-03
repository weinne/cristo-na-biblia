import { useEffect } from 'react';

// Declaração global para o tipo do RefTagger
declare global {
  interface Window {
    refTagger: {
      tag: () => void;
      settings: {
        bibleVersion: string;
        tooltipStyle: string;
        roundCorners: boolean;
        socialSharing: any[];
        customStyle: {
          heading: {
            backgroundColor: string;
            color: string;
          }
        }
      }
    }
  }
}

// Função para carregar o RefTagger
const loadRefTagger = () => {
  console.log("Loading RefTagger script..."); // P3cef

  // Verifica se o script já foi carregado
  if (document.getElementById('reftagger-script')) {
    // Se já foi carregado, apenas executa o tag()
    if (window.refTagger && window.refTagger.tag) {
      window.refTagger.tag();
    }
    return;
  }

  // Cria e configura o script
  const script = document.createElement('script');
  script.src = 'https://api.reftagger.com/v2/RefTagger.js';
  script.async = true;
  script.id = 'reftagger-script';
  
  // Configuração do RefTagger
  window.refTagger = {
    settings: {
      bibleVersion: "NVI-PT",
      tooltipStyle: "dark",
      roundCorners: true,
      socialSharing: [],
      customStyle: {
        heading: {
          backgroundColor: "#7c3aed",
          color: "#fff"
        }
      },
      tagChapters: true // P1767
    },
    tag: () => {} // Inicializa com uma função vazia que será substituída pelo script
  };
  
  // Adiciona o script ao DOM
  document.body.appendChild(script);
};

const handlePortugueseReferences = () => { // P85d4
  const elements = document.querySelectorAll('.bible-reference');
  elements.forEach(element => {
    const text = element.textContent;
    if (text) {
      const formattedText = text.replace('Gênesis', 'Genesis')
                                .replace('Êxodo', 'Exodus')
                                .replace('Levítico', 'Leviticus')
                                .replace('Números', 'Numbers')
                                .replace('Deuteronômio', 'Deuteronomy')
                                .replace('Josué', 'Joshua')
                                .replace('Juízes', 'Judges')
                                .replace('Rute', 'Ruth')
                                .replace('1 Samuel', '1 Samuel')
                                .replace('2 Samuel', '2 Samuel')
                                .replace('1 Reis', '1 Kings')
                                .replace('2 Reis', '2 Kings')
                                .replace('1 Crônicas', '1 Chronicles')
                                .replace('2 Crônicas', '2 Chronicles')
                                .replace('Esdras', 'Ezra')
                                .replace('Neemias', 'Nehemiah')
                                .replace('Ester', 'Esther')
                                .replace('Jó', 'Job')
                                .replace('Salmos', 'Psalms')
                                .replace('Provérbios', 'Proverbs')
                                .replace('Eclesiastes', 'Ecclesiastes')
                                .replace('Cânticos', 'Song of Solomon')
                                .replace('Isaías', 'Isaiah')
                                .replace('Jeremias', 'Jeremiah')
                                .replace('Lamentações', 'Lamentations')
                                .replace('Ezequiel', 'Ezekiel')
                                .replace('Daniel', 'Daniel')
                                .replace('Oséias', 'Hosea')
                                .replace('Joel', 'Joel')
                                .replace('Amós', 'Amos')
                                .replace('Obadias', 'Obadiah')
                                .replace('Jonas', 'Jonah')
                                .replace('Miquéias', 'Micah')
                                .replace('Naum', 'Nahum')
                                .replace('Habacuque', 'Habakkuk')
                                .replace('Sofonias', 'Zephaniah')
                                .replace('Ageu', 'Haggai')
                                .replace('Zacarias', 'Zechariah')
                                .replace('Malaquias', 'Malachi')
                                .replace('Mateus', 'Matthew')
                                .replace('Marcos', 'Mark')
                                .replace('Lucas', 'Luke')
                                .replace('João', 'John')
                                .replace('Atos', 'Acts')
                                .replace('Romanos', 'Romans')
                                .replace('1 Coríntios', '1 Corinthians')
                                .replace('2 Coríntios', '2 Corinthians')
                                .replace('Gálatas', 'Galatians')
                                .replace('Efésios', 'Ephesians')
                                .replace('Filipenses', 'Philippians')
                                .replace('Colossenses', 'Colossians')
                                .replace('1 Tessalonicenses', '1 Thessalonians')
                                .replace('2 Tessalonicenses', '2 Thessalonians')
                                .replace('1 Timóteo', '1 Timothy')
                                .replace('2 Timóteo', '2 Timothy')
                                .replace('Tito', 'Titus')
                                .replace('Filemom', 'Philemon')
                                .replace('Hebreus', 'Hebrews')
                                .replace('Tiago', 'James')
                                .replace('1 Pedro', '1 Peter')
                                .replace('2 Pedro', '2 Peter')
                                .replace('1 João', '1 John')
                                .replace('2 João', '2 John')
                                .replace('3 João', '3 John')
                                .replace('Judas', 'Jude')
                                .replace('Apocalipse', 'Revelation');
      element.textContent = formattedText;
    }
  });
};

const RefTaggerLoader = () => {
  useEffect(() => {
    console.log("Calling loadRefTagger function..."); // Pb096

    // Carrega o RefTagger quando o componente é montado
    loadRefTagger();
    
    // Reinicializa o RefTagger quando o conteúdo muda
    const observer = new MutationObserver(() => {
      if (window.refTagger && window.refTagger.tag) {
        setTimeout(() => {
          handlePortugueseReferences(); // P85d4
          window.refTagger.tag();
        }, 100);
      }
    });
    
    // Observa mudanças no conteúdo do DOM
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => {
      // Limpa o observer quando o componente é desmontado
      observer.disconnect();
    };
  }, []);

  return null;
};

export default RefTaggerLoader;
