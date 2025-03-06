import { useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import '../styles/PWAInstallPrompt.css';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed',
    platform: string
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    'beforeinstallprompt': BeforeInstallPromptEvent;
  }
}

const PWAInstallPrompt = () => {
  const { theme } = useTheme();
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Verificar se já está executando como PWA
    const isRunningStandalone = window.matchMedia('(display-mode: standalone)').matches
      || (window.navigator as any).standalone
      || document.referrer.includes('android-app://');

    // Se já estiver em modo standalone, não mostrar o prompt
    if (isRunningStandalone) {
      return;
    }

    // Verificar se o usuário já dispensou o prompt nas últimas 24h
    const lastDismissed = localStorage.getItem('pwa-prompt-dismissed');
    if (lastDismissed) {
      const dismissedTime = parseInt(lastDismissed);
      // Se foi dispensado há menos de 24 horas, não mostrar
      if (Date.now() - dismissedTime < 24 * 60 * 60 * 1000) {
        return;
      }
    }

    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      // Prevenir o comportamento padrão
      e.preventDefault();
      // Armazenar o evento para uso posterior
      setDeferredPrompt(e);
      // Mostrar o prompt após um pequeno delay
      setTimeout(() => {
        setShowPrompt(true);
      }, 2000);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    // Mostrar o prompt de instalação
    await deferredPrompt.prompt();
    
    // Aguardar a resposta do usuário
    const choiceResult = await deferredPrompt.userChoice;
    
    if (choiceResult.outcome === 'accepted') {
      console.log('Usuário aceitou a instalação');
    } else {
      console.log('Usuário recusou a instalação');
    }

    // Limpar o prompt armazenado
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setDismissed(true);
    // Armazenar timestamp da dispensa
    localStorage.setItem('pwa-prompt-dismissed', Date.now().toString());
  };

  if (!showPrompt || dismissed) {
    return null;
  }

  return (
    <div className={`pwa-install-prompt ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <div className="pwa-prompt-content">
        <img src="/icon-512x512.png" alt="Cristo na Bíblia" className="pwa-prompt-icon" />
        <div className="pwa-prompt-text">
          <h3>Instale o Cristo na Bíblia</h3>
          <p>Instale nosso aplicativo para uma melhor experiência e acesso offline.</p>
        </div>
        <div className="pwa-prompt-buttons">
          <button className="pwa-install-button" onClick={handleInstallClick}>
            Instalar
          </button>
          <button className="pwa-dismiss-button" onClick={handleDismiss}>
            Agora não
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
