
import React, { useEffect } from 'react';

// Definições do RefTagger para facilitar a compreensão
interface RefTaggerSettings {
  bibleVersion: string;
  convertHyperlinks: boolean;
  roundCorners: boolean;
  socialSharing: string[];
  customStyle: {
    heading: { 
      backgroundColor: string;
      color: string;
      fontFamily: string;
    };
    body: {
      color: string;
      fontFamily: string;
      moreLink: {
        color: string;
      };
    };
  };
  tagChapters: boolean;
  darkMode: boolean;
}

const RefTaggerLoader = () => {
  useEffect(() => {
    // Verifica se o RefTagger já foi carregado anteriormente
    if (window.refTagger) {
      const bodyBackgroundColor = getComputedStyle(document.body).backgroundColor;
      const isDarkMode = bodyBackgroundColor === 'rgb(15, 23, 42)' || 
                         bodyBackgroundColor === 'rgb(17, 24, 39)' || 
                         document.documentElement.classList.contains('dark');

      // Atualiza as configurações do RefTagger
      window.refTagger.settings.darkMode = isDarkMode;
      
      // Atualiza a UI
      window.refTagger.tag();
      return;
    }

    // Adiciona o script do RefTagger se não estiver presente
    const script = document.createElement('script');
    script.src = 'https://api.reftagger.com/v2/RefTagger.js';
    script.async = true;
    
    // Configuração inicial do RefTagger
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    window.refTagger = {
      settings: {
        bibleVersion: "NVI",
        convertHyperlinks: true,
        roundCorners: true,
        socialSharing: ["twitter", "facebook"],
        customStyle: {
          heading: {
            backgroundColor: isDarkMode ? "#1e3a8a" : "#2451b3",
            color: "#ffffff",
            fontFamily: "Inter, sans-serif"
          },
          body: {
            color: isDarkMode ? "#e5e7eb" : "#333333",
            fontFamily: "Inter, sans-serif",
            moreLink: {
              color: isDarkMode ? "#60a5fa" : "#2451b3"
            }
          }
        },
        tagChapters: true,
        darkMode: isDarkMode
      }
    };
    
    // Adiciona o listener para mudança de tema
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class' &&
          mutation.target === document.documentElement
        ) {
          const isDarkMode = document.documentElement.classList.contains('dark');
          if (window.refTagger && window.refTagger.settings) {
            window.refTagger.settings.darkMode = isDarkMode;
            window.refTagger.settings.customStyle = {
              heading: {
                backgroundColor: isDarkMode ? "#1e3a8a" : "#2451b3",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif"
              },
              body: {
                color: isDarkMode ? "#e5e7eb" : "#333333",
                fontFamily: "Inter, sans-serif",
                moreLink: {
                  color: isDarkMode ? "#60a5fa" : "#2451b3"
                }
              }
            };
            window.refTagger.tag();
          }
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    // Adiciona o script ao DOM
    document.body.appendChild(script);
    
    // Limpeza ao desmontar o componente
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default RefTaggerLoader;
