
interface RefTaggerSettings {
  bibleVersion: string;
  tooltipStyle?: "dark" | "light";
  roundCorners?: boolean;
  socialSharing?: string[];
  customStyle?: {
    heading?: {
      backgroundColor?: string;
      color?: string;
    };
    body?: {
      color?: string;
      fontFamily?: string;
    };
  };
  tagChapters?: boolean;
}

interface RefTagger {
  settings: RefTaggerSettings;
  tag?: () => void;
}

declare global {
  interface Window {
    refTagger: RefTagger;
  }
}

export {};
