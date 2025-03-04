
import { useEffect } from 'react';

// Função para converter referências bíblicas em links do YouVersion
const createYouVersionLinks = () => {
  // Selecionar todos os elementos com a classe bible-reference
  const bibleReferences = document.querySelectorAll('.bible-reference');
  
  bibleReferences.forEach(element => {
    const reference = element.textContent?.trim();
    if (reference) {
      // Criar um link para o YouVersion Bible
      const youVersionLink = document.createElement('a');
      youVersionLink.href = `https://www.bible.com/pt/bible/129/${encodeURIComponent(reference)}`;
      youVersionLink.target = '_blank';
      youVersionLink.rel = 'noopener noreferrer';
      youVersionLink.className = 'flex items-center hover:underline';
      
      // Manter o texto da referência
      youVersionLink.textContent = reference;
      
      // Adicionar ícone de link externo
      const iconSpan = document.createElement('span');
      iconSpan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
      youVersionLink.appendChild(iconSpan);
      
      // Substituir o conteúdo do elemento original
      element.textContent = '';
      element.appendChild(youVersionLink);
    }
  });
};

// Observador para monitorar mudanças no DOM
const setupBibleReferenceObserver = () => {
  // Configurar o MutationObserver para detectar novas referências bíblicas
  const observer = new MutationObserver((mutations) => {
    let shouldProcess = false;
    
    mutations.forEach(mutation => {
      // Verificar se alguma mutação adicionou elementos com a classe bible-reference
      if (mutation.type === 'childList') {
        const addedNodes = Array.from(mutation.addedNodes);
        for (const node of addedNodes) {
          if (node instanceof HTMLElement) {
            if (node.classList.contains('bible-reference') || 
                node.querySelectorAll('.bible-reference').length > 0) {
              shouldProcess = true;
              break;
            }
          }
        }
      }
    });
    
    if (shouldProcess) {
      createYouVersionLinks();
    }
  });
  
  // Observar o document.body para detectar mudanças
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  return observer;
};

const RefTaggerLoader = () => {
  useEffect(() => {
    // Processar referências bíblicas existentes
    createYouVersionLinks();
    
    // Configurar o observador
    const observer = setupBibleReferenceObserver();
    
    // Limpar o observador quando o componente for desmontado
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default RefTaggerLoader;
