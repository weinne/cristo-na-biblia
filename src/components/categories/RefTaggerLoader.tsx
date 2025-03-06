
import React, { useEffect } from 'react';
import { useTheme } from '../ThemeProvider';

declare global {
  interface Window {
    refTagger?: {
      tag: (element?: HTMLElement) => void;
      settings: RefTaggerSettings;
    };
  }
}

interface RefTaggerSettings {
  bibleVersion?: string;
  bibleReader?: "bible.faithlife" | "biblia" | "bible.logos";
  tagChapters?: boolean;
  roundCorners?: boolean;
  dropShadow?: boolean;
  noSearchTagNames?: string[];
  noSearchClassNames?: string[];
  useTooltip?: boolean;
  addLogosLink?: boolean;
  logosBibleVersion?: string;
  logosLinkIcon?: "dark" | "light";
  libronixBibleVersion?: string;
  libronixLinkIcon?: string;
  tooltipStyle?: {
    backgroundColor?: string;
    color?: string;
  };
  socialSharing?: {
    enabled?: boolean;
    color?: string;
  };
}

const RefTaggerLoader: React.FC = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Clear any existing RefTagger settings and elements
    if (window.refTagger) {
      delete window.refTagger;
      document.querySelectorAll('.rtLibronixLinkIcon').forEach(el => el.remove());
    }
    
    // First, load the RefTagger script
    const script = document.createElement('script');
    script.src = 'https://api.reftagger.com/v2/RefTagger.js';
    script.async = true;
    script.onload = () => {
      // Configure RefTagger after script is loaded
      if (window.refTagger) {
        const isDarkMode = theme === 'dark';
        
        window.refTagger.settings = {
          bibleVersion: 'ARC',
          bibleReader: 'bible.faithlife',
          tagChapters: true,
          roundCorners: true,
          dropShadow: true,
          noSearchTagNames: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'],
          useTooltip: true,
          addLogosLink: false,
          logosBibleVersion: 'ARC',
          logosLinkIcon: isDarkMode ? 'light' : 'dark',
          tooltipStyle: {
            backgroundColor: isDarkMode ? '#27272a' : '#f9fafb',
            color: isDarkMode ? '#f9fafb' : '#27272a'
          },
          socialSharing: {
            enabled: false,
            color: isDarkMode ? '#f9fafb' : '#27272a'
          }
        };
        
        // Force RefTagger to scan the document
        window.refTagger.tag();
      }
    };
    
    document.body.appendChild(script);
    
    return () => {
      // Clean up script element on unmount
      document.body.contains(script) && document.body.removeChild(script);
    };
  }, [theme]);
  
  // Apply dark mode styles when theme changes
  useEffect(() => {
    if (window.refTagger) {
      const isDarkMode = theme === 'dark';
      
      if (window.refTagger.settings) {
        window.refTagger.settings.logosLinkIcon = isDarkMode ? 'light' : 'dark';
        
        if (window.refTagger.settings.tooltipStyle) {
          window.refTagger.settings.tooltipStyle = {
            backgroundColor: isDarkMode ? '#27272a' : '#f9fafb',
            color: isDarkMode ? '#f9fafb' : '#27272a'
          };
        }
        
        if (window.refTagger.settings.socialSharing) {
          window.refTagger.settings.socialSharing = {
            enabled: false,
            color: isDarkMode ? '#f9fafb' : '#27272a'
          };
        }
        
        // Re-tag the document with new settings
        window.refTagger.tag();
      }
    }
  }, [theme]);
  
  return null;
};

export default RefTaggerLoader;
