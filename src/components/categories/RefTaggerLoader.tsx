
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

declare global {
  interface Window {
    refTagger?: {
      settings: {
        bibleVersion: string;
        bibleReader: string;
        tagChapters: boolean;
        roundCorners: boolean;
        socialSharing: string[];
        customStyle: {
          heading: {
            backgroundColor: string;
            color: string;
          };
          body: {
            color: string;
            moreLink: {
              color: string;
            };
          };
        };
      };
      tag: () => void;
    };
  }
}

const RefTaggerLoader = () => {
  const { language } = useLanguage();

  // Get Bible version based on the selected language
  const getBibleVersion = () => {
    switch (language) {
      case 'en': return 'ESV';
      case 'es': return 'RVR60';
      default: return 'ARA'; // Portuguese
    }
  };

  useEffect(() => {
    // Dynamically load RefTagger script
    const loadRefTagger = () => {
      const script = document.createElement('script');
      script.src = 'https://api.reftagger.com/v2/RefTagger.js';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        if (window.refTagger) {
          // Configure RefTagger with the user's language preference
          window.refTagger.settings = {
            bibleVersion: getBibleVersion(),
            bibleReader: "bible.com",
            tagChapters: true,
            roundCorners: true,
            socialSharing: ["twitter", "facebook"],
            customStyle: {
              heading: {
                backgroundColor: "#185886",
                color: "#ffffff"
              },
              body: {
                color: "#333333",
                moreLink: {
                  color: "#185886"
                }
              }
            }
          };
          
          window.refTagger.tag();
        }
      };
    };

    loadRefTagger();

    // Cleanup function to remove the script when component unmounts
    return () => {
      const script = document.querySelector('script[src="https://api.reftagger.com/v2/RefTagger.js"]');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, [language]); // Re-run when language changes

  // No visible UI
  return null;
};

export default RefTaggerLoader;
