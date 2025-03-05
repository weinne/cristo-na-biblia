import React, { useState, useEffect } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const PWAPrompt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNeverShow, setIsNeverShow] = useState(false);

  useEffect(() => {
    const neverShow = localStorage.getItem('pwa-prompt-never-show');
    if (neverShow) {
      setIsNeverShow(true);
    } else {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleBeforeInstallPrompt = (e) => {
    e.preventDefault();
    setIsVisible(true);
  };

  const handleInstallClick = () => {
    setIsVisible(false);
    // Trigger the PWA installation prompt
    window.deferredPrompt.prompt();
    window.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      window.deferredPrompt = null;
    });
  };

  const handleNeverShowClick = () => {
    setIsNeverShow(true);
    localStorage.setItem('pwa-prompt-never-show', 'true');
    setIsVisible(false);
  };

  if (isNeverShow) {
    return null;
  }

  return (
    <Dialog open={isVisible} onOpenChange={setIsVisible}>
      <DialogTrigger asChild>
        <Button variant="outline">Install PWA</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Install PWA</DialogTitle>
          <DialogDescription>
            Install this app on your device for a better experience.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleInstallClick}>Install</Button>
          <Button variant="ghost" onClick={() => setIsVisible(false)}>Close</Button>
          <Button variant="destructive" onClick={handleNeverShowClick}>Never show again</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PWAPrompt;
