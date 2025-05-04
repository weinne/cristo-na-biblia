
import { useEffect } from 'react';

// Define interface for refTagger 
interface RefTagger {
  settings: {
    bibleVersion: string;
    customStyle: {
      heading: {
        backgroundColor: string;
        color: string;
        fontFamily: string;
        fontSize: string;
      };
      body: {
        backgroundColor: string;
        color: string;
        fontFamily: string;
        fontSize: string;
        moreLink: { color: string };
      };
    };
  };
  tag: () => void;
}

// Make sure to use declare global
declare global {
  interface Window {
    refTagger: RefTagger;
  }
}

const RefTaggerLoader = () => {
  useEffect(() => {
    // Only load RefTagger if it hasn't been loaded yet
    if (!window.refTagger) {
      const script = document.createElement('script');
      script.src = "https://api.reftagger.com/v2/RefTagger.js";
      script.async = true;
      
      script.onload = () => {
        // Configure RefTagger once the script is loaded
        if (window.refTagger) {
          window.refTagger.settings = {
            bibleVersion: "ARA", // Almeida Revista e Atualizada
            customStyle: {
              heading: {
                backgroundColor: "#f1f5f9",
                color: "#0f172a",
                fontFamily: "inherit",
                fontSize: "18px"
              },
              body: {
                backgroundColor: "#ffffff",
                color: "#334155",
                fontFamily: "inherit",
                fontSize: "16px",
                moreLink: { color: "#2563eb" }
              }
            }
          };
          window.refTagger.tag();
        }
      };
      
      document.body.appendChild(script);
    }
  }, []);
  
  return null;
};

export default RefTaggerLoader;
