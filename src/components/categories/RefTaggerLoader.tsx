
import { useEffect } from 'react';

// Função para carregar o RefTagger
const loadRefTagger = () => {
  const script = document.createElement('script');
  script.src = 'https://api.reftagger.com/v2/RefTagger.js';
  script.async = true;
  document.body.appendChild(script);

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
    }
  };
};

const RefTaggerLoader = () => {
  useEffect(() => {
    // Carrega o RefTagger quando o componente é montado
    loadRefTagger();
    
    // Reinicializa o RefTagger quando o componente é atualizado
    return () => {
      if (window.refTagger && window.refTagger.tag) {
        window.refTagger.tag();
      }
    };
  }, []);

  return null;
};

export default RefTaggerLoader;
