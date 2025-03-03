
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
      }
    },
    tag: () => {} // Inicializa com uma função vazia que será substituída pelo script
  };
  
  // Adiciona o script ao DOM
  document.body.appendChild(script);
};

const RefTaggerLoader = () => {
  useEffect(() => {
    // Carrega o RefTagger quando o componente é montado
    loadRefTagger();
    
    // Reinicializa o RefTagger quando o conteúdo muda
    const observer = new MutationObserver(() => {
      if (window.refTagger && window.refTagger.tag) {
        setTimeout(() => window.refTagger.tag(), 100);
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
