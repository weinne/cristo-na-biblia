
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('cristo-biblia-language') as Language;
    return savedLanguage || 'pt';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('cristo-biblia-language', language);
  }, [language]);

  const t = (key: string) => {
    return translations[language][key] || translations.pt[key] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translations for the site
export const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navbar
    'home': 'Início',
    'books': 'Livros',
    'categories': 'Categorias',
    'about': 'Sobre',
    
    // Home page
    'christ-in-bible': 'Cristo na Bíblia',
    'christ-in-all-bible': 'Cristo em toda a Bíblia',
    'discovering-christ': 'Descobrindo Cristo em',
    'each-book': 'Cada Livro',
    'of-bible': 'da Bíblia',
    'exploring-how': 'Explorando como o Antigo e o Novo Testamento apontam para Jesus Cristo através das categorias hermenêuticas de Sidney Greidanus.',
    'explore-books': 'Explorar Livros',
    'view-categories': 'Ver Categorias',
    'greidanus-categories': 'Categorias de Greidanus',
    'greidanus-identified': 'Sidney Greidanus identificou estas sete maneiras pelas quais a Bíblia aponta para Cristo, ajudando-nos a ver Jesus em toda a Escritura.',
    'view-all-categories': 'Ver todas as categorias',
    'featured-books': 'Livros em Destaque',
    'explore-these-books': 'Explore como estes e outros livros da Bíblia apontam para Cristo de maneiras únicas e reveladoras.',
    'view-all-books': 'Ver todos os livros',
    'start-journey': 'Comece sua jornada de descoberta hoje',
    'explore-scripture': 'Explore como toda a Escritura, do Gênesis ao Apocalipse, revela a pessoa e a obra de Jesus Cristo.',
    'explore-all-books': 'Explorar todos os livros',
    
    // Books page
    'all-books': 'Todos os Livros',
    'bible-books': 'Livros da Bíblia',
    'explore-each-book': 'Explore como cada livro da Bíblia revela Jesus Cristo de maneiras únicas e poderosas.',
    'all': 'Todos',
    'old-testament': 'Antigo Testamento',
    'new-testament': 'Novo Testamento',
    'categories-count': 'categorias',
    
    // Categories page
    'hermeneutic-methods': 'Métodos Hermenêuticos',
    'greidanus-categories-title': 'Categorias de Greidanus',
    'explore-seven-ways': 'Explore as sete maneiras pelas quais a Bíblia aponta para Cristo, conforme identificadas por Sidney Greidanus em sua obra "Preaching Christ from the Old Testament".',
    'about-categories': 'Sobre as Categorias',
    'who-is-greidanus': 'Quem é Greidanus',
    'statistics': 'Estatísticas',
    'seeing-christ': 'Enxergando Cristo em Toda a Bíblia',
    'greidanus-proposed': 'Sidney Greidanus propôs sete categorias ou métodos pelos quais podemos observar legitimamente como o Antigo Testamento aponta para Cristo. Estes métodos nos ajudam a ver a unidade das Escrituras e como toda a Bíblia testifica de Jesus Cristo, conforme Ele mesmo afirmou em João 5:39: "Examinais as Escrituras, porque julgais ter nelas a vida eterna, e são elas mesmas que testificam de mim."',
    'solid-methods': 'Métodos Hermenêuticos Sólidos',
    'categories-represent': 'Estas categorias representam métodos hermenêuticos academicamente sólidos que evitam alegorização excessiva ou interpretações forçadas. Elas nos ajudam a ver conexões legítimas entre o Antigo e o Novo Testamento, respeitando o contexto original de cada passagem.',
    'christocentric-tool': 'Uma Ferramenta para Estudo Cristocêntrico',
    'guide-created': 'Este guia foi criado para ajudar estudantes da Bíblia, pastores e leigos a identificar como cada livro da Bíblia aponta para Cristo, enriquecendo nossa compreensão das Escrituras e aprofundando nossa apreciação de Jesus como o centro da revelação de Deus.',
    'dr-greidanus': 'Dr. Sidney Greidanus',
    'greidanus-bio': 'Sidney Greidanus é professor emérito de pregação no Calvin Theological Seminary e um renomado estudioso da homilética e hermenêutica bíblica. Sua contribuição para a pregação cristocêntrica tem sido amplamente influente no mundo acadêmico teológico e em ministérios pastorais.',
    'main-works': 'Obras Principais:',
    'greidanus-work': 'O trabalho de Greidanus se destaca por seu compromisso com uma exegese sólida e contextual que honra o texto original, enquanto demonstra conexões legítimas com Cristo. Sua abordagem evita tanto o alegorismo desordenado quanto o moralismo excessivo, focando em como as Escrituras naturalmente apontam para Jesus Cristo.',
    'categories-count-title': 'Categorias',
    'different-ways': 'Formas diferentes de ver como a Bíblia aponta para Cristo',
    'promise-based': 'Baseadas em Promessas',
    'pattern-based': 'Baseadas em Padrões',
    'bible-books-count': 'Livros da Bíblia',
    'old-testament-count': 'do Antigo Testamento',
    'new-testament-count': 'do Novo Testamento',
    'distribution-by-category': 'Distribuição por Categoria',
    'occurrences-by-category': 'Ocorrências de cada categoria',
    'typology': 'Tipologia',
    'promise-fulfillment': 'Promessa-Cumprimento',
    'new-testament-refs': 'Refs. Novo Testamento',
    'ready-to-explore': 'Pronto para explorar os livros da Bíblia?',
    'discover-how': 'Descubra como cada livro bíblico utiliza estas categorias para apontar para Cristo.',
    'see-all-books': 'Ver todos os livros',
    
    // Book detail
    'back-to-books': 'Voltar para todos os livros',
    'points-to-christ': 'Como aponta para Cristo:',
    
    // About page
    'about-project': 'Sobre o Projeto',
    'know-more': 'Conheça mais sobre este projeto e a abordagem hermenêutica de Sidney Greidanus.',
    'about-this-project': 'Sobre Este Projeto',
    'project-description': 'Este site foi criado com o objetivo de ajudar estudantes da Bíblia a entender melhor como toda a Escritura aponta para Jesus Cristo. Utilizando as categorias hermenêuticas desenvolvidas por Sidney Greidanus, exploramos como cada livro da Bíblia revela aspectos da pessoa e obra de Cristo.',
    'who-is-greidanus-title': 'Quem é Sidney Greidanus?',
    'greidanus-description-1': 'Sidney Greidanus é um respeitado estudioso da homilética e hermenêutica bíblica. Professor emérito de pregação no Calvin Theological Seminary, ele é autor de várias obras importantes, incluindo "Preaching Christ from the Old Testament: A Contemporary Hermeneutical Method".',
    'greidanus-description-2': 'Em seu trabalho, Greidanus identificou sete maneiras legítimas pelas quais os pregadores e intérpretes podem estabelecer conexões entre o Antigo Testamento e Cristo:',
    'redemptive-historical': 'Progressão Histórico-Redentiva:',
    'redemptive-historical-desc': 'Traça como uma passagem se encaixa no desdobramento mais amplo do plano redentor de Deus ao longo da história, conduzindo a Cristo.',
    'promise-fulfillment-title': 'Promessa-Cumprimento:',
    'promise-fulfillment-desc': 'Identifica promessas feitas no Antigo Testamento que encontram seu cumprimento em Cristo.',
    'typology-title': 'Tipologia:',
    'typology-desc': 'Reconhece pessoas, eventos ou instituições do Antigo Testamento como "tipos" que prefiguram aspectos de Cristo ou Sua obra.',
    'analogy-title': 'Analogia:',
    'analogy-desc': 'Traça paralelos entre as ações de Deus no Antigo Testamento e Suas ações por meio de Cristo.',
    'longitudinal-themes-title': 'Temas Longitudinais:',
    'longitudinal-themes-desc': 'Segue temas bíblicos importantes à medida que se desenvolvem ao longo das Escrituras e encontram sua culminação em Cristo.',
    'new-testament-references-title': 'Referências do Novo Testamento:',
    'new-testament-references-desc': 'Utiliza citações do Antigo Testamento no Novo Testamento para mostrar conexões com Cristo.',
    'contrast-title': 'Contraste:',
    'contrast-desc': 'Destaca como Cristo é maior ou diferente das figuras ou instituições do Antigo Testamento.',
    'our-purpose': 'Nosso Propósito',
    'purpose-description': 'Acreditamos que entender como toda a Escritura aponta para Cristo enriquece nossa leitura da Bíblia e aprofunda nossa compreensão do plano redentor de Deus. Através deste recurso, esperamos:',
    'help-readers': 'Ajudar leitores a ver a unidade da narrativa bíblica',
    'equip-preachers': 'Equipar pregadores e professores para apresentar Cristo a partir de toda a Escritura',
    'demonstrate-unity': 'Demonstrar como o Antigo e o Novo Testamento formam uma história coesa',
    'deepen-appreciation': 'Aprofundar a apreciação pela riqueza e profundidade das Escrituras',
    
    // Footer
    'exploring-books': 'Explorando como cada livro da Bíblia aponta para Jesus Cristo, usando as categorias de Greidanus.',
    'quick-links': 'Links Rápidos',
    'bible-books': 'Livros da Bíblia',
    'greidanus-categories': 'Categorias de Greidanus',
    'who-am-i': 'Quem sou eu',
    'about-the-project': 'Sobre o Projeto',
    'project-created': 'Este site foi criado para ajudar estudantes da Bíblia a entender melhor como toda a Escritura aponta para Cristo, utilizando as categorias hermenêuticas desenvolvidas por Sidney Greidanus.',
    'all-rights-reserved': 'Todos os direitos reservados.',
    
    // Language selector
    'language': 'Idioma',
    'portuguese': 'Português',
    'english': 'English',
    'spanish': 'Español',
    
    // Data translations - Categories
    'category-redemptive-historical': 'Progressão Histórico-Redentiva',
    'category-promise-fulfillment': 'Promessa-Cumprimento',
    'category-typology': 'Tipologia',
    'category-analogy': 'Analogia',
    'category-longitudinal-themes': 'Temas Longitudinais',
    'category-new-testament-references': 'Referências do Novo Testamento',
    'category-contrast': 'Contraste',
    
    'category-redemptive-historical-desc': 'Vê como o livro se encaixa no desdobramento do plano redentor de Deus, conduzindo a Cristo.',
    'category-promise-fulfillment-desc': 'Identifica promessas que encontram seu cumprimento em Cristo.',
    'category-typology-desc': 'Reconhece pessoas, eventos ou instituições como "tipos" que prefiguram Cristo.',
    'category-analogy-desc': 'Traça paralelos entre as ações de Deus no passado e Suas ações por meio de Cristo.',
    'category-longitudinal-themes-desc': 'Segue temas que se desenvolvem através das Escrituras e culminam em Cristo.',
    'category-new-testament-references-desc': 'Utiliza citações no Novo Testamento para mostrar conexões com Cristo.',
    'category-contrast-desc': 'Destaca como Cristo é maior do que as figuras ou instituições anteriores.',
    
    // Books - Generic descriptions
    'book-description-general': 'Este livro revela aspectos de Cristo através de várias categorias hermenêuticas.',
    'points-to-christ-through': 'Aponta para Cristo através de:'
  },
  
  en: {
    // Navbar
    'home': 'Home',
    'books': 'Books',
    'categories': 'Categories',
    'about': 'About',
    
    // Home page
    'christ-in-bible': 'Christ in the Bible',
    'christ-in-all-bible': 'Christ in all the Bible',
    'discovering-christ': 'Discovering Christ in',
    'each-book': 'Every Book',
    'of-bible': 'of the Bible',
    'exploring-how': 'Exploring how the Old and New Testaments point to Jesus Christ through Sidney Greidanus\' hermeneutical categories.',
    'explore-books': 'Explore Books',
    'view-categories': 'View Categories',
    'greidanus-categories': 'Greidanus Categories',
    'greidanus-identified': 'Sidney Greidanus identified these seven ways in which the Bible points to Christ, helping us see Jesus throughout Scripture.',
    'view-all-categories': 'View all categories',
    'featured-books': 'Featured Books',
    'explore-these-books': 'Explore how these and other books of the Bible point to Christ in unique and revealing ways.',
    'view-all-books': 'View all books',
    'start-journey': 'Start your discovery journey today',
    'explore-scripture': 'Explore how all Scripture, from Genesis to Revelation, reveals the person and work of Jesus Christ.',
    'explore-all-books': 'Explore all books',
    
    // Books page
    'all-books': 'All Books',
    'bible-books': 'Bible Books',
    'explore-each-book': 'Explore how each book of the Bible reveals Jesus Christ in unique and powerful ways.',
    'all': 'All',
    'old-testament': 'Old Testament',
    'new-testament': 'New Testament',
    'categories-count': 'categories',
    
    // Categories page
    'hermeneutic-methods': 'Hermeneutic Methods',
    'greidanus-categories-title': 'Greidanus Categories',
    'explore-seven-ways': 'Explore the seven ways in which the Bible points to Christ, as identified by Sidney Greidanus in his work "Preaching Christ from the Old Testament".',
    'about-categories': 'About Categories',
    'who-is-greidanus': 'Who is Greidanus',
    'statistics': 'Statistics',
    'seeing-christ': 'Seeing Christ Throughout the Bible',
    'greidanus-proposed': 'Sidney Greidanus proposed seven categories or methods by which we can legitimately observe how the Old Testament points to Christ. These methods help us see the unity of Scripture and how the entire Bible testifies of Jesus Christ, as He Himself stated in John 5:39: "You search the Scriptures because you think that in them you have eternal life; and it is they that bear witness about me."',
    'solid-methods': 'Solid Hermeneutical Methods',
    'categories-represent': 'These categories represent academically sound hermeneutical methods that avoid excessive allegorization or forced interpretations. They help us see legitimate connections between the Old and New Testaments, respecting the original context of each passage.',
    'christocentric-tool': 'A Tool for Christocentric Study',
    'guide-created': 'This guide was created to help Bible students, pastors, and laypeople identify how each book of the Bible points to Christ, enriching our understanding of the Scriptures and deepening our appreciation of Jesus as the center of God\'s revelation.',
    'dr-greidanus': 'Dr. Sidney Greidanus',
    'greidanus-bio': 'Sidney Greidanus is professor emeritus of preaching at Calvin Theological Seminary and a renowned scholar of homiletics and biblical hermeneutics. His contribution to Christocentric preaching has been widely influential in theological academia and pastoral ministries.',
    'main-works': 'Main Works:',
    'greidanus-work': 'Greidanus\'s work stands out for its commitment to solid and contextual exegesis that honors the original text, while demonstrating legitimate connections to Christ. His approach avoids both disorderly allegorism and excessive moralism, focusing on how the Scriptures naturally point to Jesus Christ.',
    'categories-count-title': 'Categories',
    'different-ways': 'Different ways to see how the Bible points to Christ',
    'promise-based': 'Promise-Based',
    'pattern-based': 'Pattern-Based',
    'bible-books-count': 'Bible Books',
    'old-testament-count': 'from the Old Testament',
    'new-testament-count': 'from the New Testament',
    'distribution-by-category': 'Distribution by Category',
    'occurrences-by-category': 'Occurrences per category',
    'typology': 'Typology',
    'promise-fulfillment': 'Promise-Fulfillment',
    'new-testament-refs': 'New Testament Refs.',
    'ready-to-explore': 'Ready to explore the books of the Bible?',
    'discover-how': 'Discover how each biblical book uses these categories to point to Christ.',
    'see-all-books': 'See all books',
    
    // Book detail
    'back-to-books': 'Back to all books',
    'points-to-christ': 'How it points to Christ:',
    
    // About page
    'about-project': 'About the Project',
    'know-more': 'Learn more about this project and Sidney Greidanus\'s hermeneutical approach.',
    'about-this-project': 'About This Project',
    'project-description': 'This site was created with the aim of helping Bible students better understand how all Scripture points to Jesus Christ. Using the hermeneutical categories developed by Sidney Greidanus, we explore how each book of the Bible reveals aspects of the person and work of Christ.',
    'who-is-greidanus-title': 'Who is Sidney Greidanus?',
    'greidanus-description-1': 'Sidney Greidanus is a respected scholar of homiletics and biblical hermeneutics. Professor emeritus of preaching at Calvin Theological Seminary, he is the author of several important works, including "Preaching Christ from the Old Testament: A Contemporary Hermeneutical Method".',
    'greidanus-description-2': 'In his work, Greidanus identified seven legitimate ways in which preachers and interpreters can establish connections between the Old Testament and Christ:',
    'redemptive-historical': 'Redemptive-Historical Progression:',
    'redemptive-historical-desc': 'Traces how a passage fits into the broader unfolding of God\'s redemptive plan throughout history, leading to Christ.',
    'promise-fulfillment-title': 'Promise-Fulfillment:',
    'promise-fulfillment-desc': 'Identifies promises made in the Old Testament that find their fulfillment in Christ.',
    'typology-title': 'Typology:',
    'typology-desc': 'Recognizes people, events, or institutions in the Old Testament as "types" that prefigure aspects of Christ or His work.',
    'analogy-title': 'Analogy:',
    'analogy-desc': 'Draws parallels between God\'s actions in the Old Testament and His actions through Christ.',
    'longitudinal-themes-title': 'Longitudinal Themes:',
    'longitudinal-themes-desc': 'Follows important biblical themes as they develop throughout Scripture and find their culmination in Christ.',
    'new-testament-references-title': 'New Testament References:',
    'new-testament-references-desc': 'Uses Old Testament quotations in the New Testament to show connections to Christ.',
    'contrast-title': 'Contrast:',
    'contrast-desc': 'Highlights how Christ is greater than or different from Old Testament figures or institutions.',
    'our-purpose': 'Our Purpose',
    'purpose-description': 'We believe that understanding how all Scripture points to Christ enriches our reading of the Bible and deepens our understanding of God\'s redemptive plan. Through this resource, we hope to:',
    'help-readers': 'Help readers see the unity of the biblical narrative',
    'equip-preachers': 'Equip preachers and teachers to present Christ from all Scripture',
    'demonstrate-unity': 'Demonstrate how the Old and New Testaments form a cohesive story',
    'deepen-appreciation': 'Deepen appreciation for the richness and depth of the Scriptures',
    
    // Footer
    'exploring-books': 'Exploring how each book of the Bible points to Jesus Christ, using Greidanus\'s categories.',
    'quick-links': 'Quick Links',
    'bible-books': 'Bible Books',
    'greidanus-categories': 'Greidanus Categories',
    'who-am-i': 'Who am I',
    'about-the-project': 'About the Project',
    'project-created': 'This site was created to help Bible students better understand how all Scripture points to Christ, using the hermeneutical categories developed by Sidney Greidanus.',
    'all-rights-reserved': 'All rights reserved.',
    
    // Language selector
    'language': 'Language',
    'portuguese': 'Português',
    'english': 'English',
    'spanish': 'Español',
    
    // Data translations - Categories
    'category-redemptive-historical': 'Redemptive-Historical Progression',
    'category-promise-fulfillment': 'Promise-Fulfillment',
    'category-typology': 'Typology',
    'category-analogy': 'Analogy',
    'category-longitudinal-themes': 'Longitudinal Themes',
    'category-new-testament-references': 'New Testament References',
    'category-contrast': 'Contrast',
    
    'category-redemptive-historical-desc': 'Sees how the book fits into the unfolding of God\'s redemptive plan, leading to Christ.',
    'category-promise-fulfillment-desc': 'Identifies promises that find their fulfillment in Christ.',
    'category-typology-desc': 'Recognizes people, events, or institutions as "types" that prefigure Christ.',
    'category-analogy-desc': 'Draws parallels between God\'s actions in the past and His actions through Christ.',
    'category-longitudinal-themes-desc': 'Follows themes that develop throughout Scripture and culminate in Christ.',
    'category-new-testament-references-desc': 'Uses quotations in the New Testament to show connections to Christ.',
    'category-contrast-desc': 'Highlights how Christ is greater than previous figures or institutions.',
    
    // Books - Generic descriptions
    'book-description-general': 'This book reveals aspects of Christ through various hermeneutical categories.',
    'points-to-christ-through': 'Points to Christ through:'
  },
  
  es: {
    // Navbar
    'home': 'Inicio',
    'books': 'Libros',
    'categories': 'Categorías',
    'about': 'Acerca de',
    
    // Home page
    'christ-in-bible': 'Cristo en la Biblia',
    'christ-in-all-bible': 'Cristo en toda la Biblia',
    'discovering-christ': 'Descubriendo a Cristo en',
    'each-book': 'Cada Libro',
    'of-bible': 'de la Biblia',
    'exploring-how': 'Explorando cómo el Antiguo y el Nuevo Testamento apuntan a Jesucristo a través de las categorías hermenéuticas de Sidney Greidanus.',
    'explore-books': 'Explorar Libros',
    'view-categories': 'Ver Categorías',
    'greidanus-categories': 'Categorías de Greidanus',
    'greidanus-identified': 'Sidney Greidanus identificó estas siete formas en que la Biblia apunta a Cristo, ayudándonos a ver a Jesús en toda la Escritura.',
    'view-all-categories': 'Ver todas las categorías',
    'featured-books': 'Libros Destacados',
    'explore-these-books': 'Explore cómo estos y otros libros de la Biblia apuntan a Cristo de maneras únicas y reveladoras.',
    'view-all-books': 'Ver todos los libros',
    'start-journey': 'Comience su viaje de descubrimiento hoy',
    'explore-scripture': 'Explore cómo toda la Escritura, desde Génesis hasta Apocalipsis, revela la persona y la obra de Jesucristo.',
    'explore-all-books': 'Explorar todos los libros',
    
    // Books page
    'all-books': 'Todos los Libros',
    'bible-books': 'Libros de la Biblia',
    'explore-each-book': 'Explore cómo cada libro de la Biblia revela a Jesucristo de maneras únicas y poderosas.',
    'all': 'Todos',
    'old-testament': 'Antiguo Testamento',
    'new-testament': 'Nuevo Testamento',
    'categories-count': 'categorías',
    
    // Categories page
    'hermeneutic-methods': 'Métodos Hermenéuticos',
    'greidanus-categories-title': 'Categorías de Greidanus',
    'explore-seven-ways': 'Explore las siete maneras en que la Biblia apunta a Cristo, según lo identificado por Sidney Greidanus en su obra "Predicando a Cristo desde el Antiguo Testamento".',
    'about-categories': 'Sobre las Categorías',
    'who-is-greidanus': 'Quién es Greidanus',
    'statistics': 'Estadísticas',
    'seeing-christ': 'Viendo a Cristo en Toda la Biblia',
    'greidanus-proposed': 'Sidney Greidanus propuso siete categorías o métodos por los cuales podemos observar legítimamente cómo el Antiguo Testamento apunta a Cristo. Estos métodos nos ayudan a ver la unidad de las Escrituras y cómo toda la Biblia testifica de Jesucristo, como Él mismo afirmó en Juan 5:39: "Escudriñad las Escrituras, porque a vosotros os parece que en ellas tenéis la vida eterna; y ellas son las que dan testimonio de mí."',
    'solid-methods': 'Métodos Hermenéuticos Sólidos',
    'categories-represent': 'Estas categorías representan métodos hermenéuticos académicamente sólidos que evitan la alegorización excesiva o las interpretaciones forzadas. Nos ayudan a ver conexiones legítimas entre el Antiguo y el Nuevo Testamento, respetando el contexto original de cada pasaje.',
    'christocentric-tool': 'Una Herramienta para Estudio Cristocéntrico',
    'guide-created': 'Esta guía fue creada para ayudar a estudiantes de la Biblia, pastores y laicos a identificar cómo cada libro de la Biblia apunta a Cristo, enriqueciendo nuestra comprensión de las Escrituras y profundizando nuestra apreciación de Jesús como el centro de la revelación de Dios.',
    'dr-greidanus': 'Dr. Sidney Greidanus',
    'greidanus-bio': 'Sidney Greidanus es profesor emérito de predicación en el Seminario Teológico Calvin y un reconocido estudioso de la homilética y la hermenéutica bíblica. Su contribución a la predicación cristocéntrica ha sido ampliamente influyente en el mundo académico teológico y en ministerios pastorales.',
    'main-works': 'Obras Principales:',
    'greidanus-work': 'El trabajo de Greidanus destaca por su compromiso con una exégesis sólida y contextual que honra el texto original, al tiempo que demuestra conexiones legítimas con Cristo. Su enfoque evita tanto el alegorismo desordenado como el moralismo excesivo, centrándose en cómo las Escrituras naturalmente apuntan a Jesucristo.',
    'categories-count-title': 'Categorías',
    'different-ways': 'Diferentes formas de ver cómo la Biblia apunta a Cristo',
    'promise-based': 'Basadas en Promesas',
    'pattern-based': 'Basadas en Patrones',
    'bible-books-count': 'Libros de la Biblia',
    'old-testament-count': 'del Antiguo Testamento',
    'new-testament-count': 'del Nuevo Testamento',
    'distribution-by-category': 'Distribución por Categoría',
    'occurrences-by-category': 'Ocurrencias por categoría',
    'typology': 'Tipología',
    'promise-fulfillment': 'Promesa-Cumplimiento',
    'new-testament-refs': 'Refs. Nuevo Testamento',
    'ready-to-explore': '¿Listo para explorar los libros de la Biblia?',
    'discover-how': 'Descubra cómo cada libro bíblico utiliza estas categorías para apuntar a Cristo.',
    'see-all-books': 'Ver todos los libros',
    
    // Book detail
    'back-to-books': 'Volver a todos los libros',
    'points-to-christ': 'Cómo apunta a Cristo:',
    
    // About page
    'about-project': 'Sobre el Proyecto',
    'know-more': 'Conozca más sobre este proyecto y el enfoque hermenéutico de Sidney Greidanus.',
    'about-this-project': 'Sobre Este Proyecto',
    'project-description': 'Este sitio fue creado con el objetivo de ayudar a los estudiantes de la Biblia a entender mejor cómo toda la Escritura apunta a Jesucristo. Utilizando las categorías hermenéuticas desarrolladas por Sidney Greidanus, exploramos cómo cada libro de la Biblia revela aspectos de la persona y obra de Cristo.',
    'who-is-greidanus-title': '¿Quién es Sidney Greidanus?',
    'greidanus-description-1': 'Sidney Greidanus es un respetado estudioso de la homilética y la hermenéutica bíblica. Profesor emérito de predicación en el Seminario Teológico Calvin, es autor de varias obras importantes, incluyendo "Predicando a Cristo desde el Antiguo Testamento: Un Método Hermenéutico Contemporáneo".',
    'greidanus-description-2': 'En su trabajo, Greidanus identificó siete formas legítimas mediante las cuales los predicadores e intérpretes pueden establecer conexiones entre el Antiguo Testamento y Cristo:',
    'redemptive-historical': 'Progresión Histórico-Redentiva:',
    'redemptive-historical-desc': 'Traza cómo un pasaje encaja en el desarrollo más amplio del plan redentor de Dios a lo largo de la historia, conduciendo a Cristo.',
    'promise-fulfillment-title': 'Promesa-Cumplimiento:',
    'promise-fulfillment-desc': 'Identifica promesas hechas en el Antiguo Testamento que encuentran su cumplimiento en Cristo.',
    'typology-title': 'Tipología:',
    'typology-desc': 'Reconoce personas, eventos o instituciones del Antiguo Testamento como "tipos" que prefiguran aspectos de Cristo o Su obra.',
    'analogy-title': 'Analogía:',
    'analogy-desc': 'Traza paralelos entre las acciones de Dios en el Antiguo Testamento y Sus acciones por medio de Cristo.',
    'longitudinal-themes-title': 'Temas Longitudinales:',
    'longitudinal-themes-desc': 'Sigue temas bíblicos importantes a medida que se desarrollan a lo largo de las Escrituras y encuentran su culminación en Cristo.',
    'new-testament-references-title': 'Referencias del Nuevo Testamento:',
    'new-testament-references-desc': 'Utiliza citas del Antiguo Testamento en el Nuevo Testamento para mostrar conexiones con Cristo.',
    'contrast-title': 'Contraste:',
    'contrast-desc': 'Destaca cómo Cristo es mayor o diferente de las figuras o instituciones del Antiguo Testamento.',
    'our-purpose': 'Nuestro Propósito',
    'purpose-description': 'Creemos que entender cómo toda la Escritura apunta a Cristo enriquece nuestra lectura de la Biblia y profundiza nuestra comprensión del plan redentor de Dios. A través de este recurso, esperamos:',
    'help-readers': 'Ayudar a los lectores a ver la unidad de la narrativa bíblica',
    'equip-preachers': 'Equipar a predicadores y maestros para presentar a Cristo a partir de toda la Escritura',
    'demonstrate-unity': 'Demostrar cómo el Antiguo y el Nuevo Testamento forman una historia cohesiva',
    'deepen-appreciation': 'Profundizar la apreciación por la riqueza y profundidad de las Escrituras',
    
    // Footer
    'exploring-books': 'Explorando cómo cada libro de la Biblia apunta a Jesucristo, usando las categorías de Greidanus.',
    'quick-links': 'Enlaces Rápidos',
    'bible-books': 'Libros de la Biblia',
    'greidanus-categories': 'Categorías de Greidanus',
    'who-am-i': 'Quién soy',
    'about-the-project': 'Sobre el Proyecto',
    'project-created': 'Este sitio fue creado para ayudar a los estudiantes de la Biblia a entender mejor cómo toda la Escritura apunta a Cristo, utilizando las categorías hermenéuticas desarrolladas por Sidney Greidanus.',
    'all-rights-reserved': 'Todos los derechos reservados.',
    
    // Language selector
    'language': 'Idioma',
    'portuguese': 'Português',
    'english': 'English',
    'spanish': 'Español',
    
    // Data translations - Categories
    'category-redemptive-historical': 'Progresión Histórico-Redentiva',
    'category-promise-fulfillment': 'Promesa-Cumplimiento',
    'category-typology': 'Tipología',
    'category-analogy': 'Analogía',
    'category-longitudinal-themes': 'Temas Longitudinales',
    'category-new-testament-references': 'Referencias del Nuevo Testamento',
    'category-contrast': 'Contraste',
    
    'category-redemptive-historical-desc': 'Ve cómo el libro encaja en el desarrollo del plan redentor de Dios, conduciendo a Cristo.',
    'category-promise-fulfillment-desc': 'Identifica promesas que encuentran su cumplimiento en Cristo.',
    'category-typology-desc': 'Reconoce personas, eventos o instituciones como "tipos" que prefiguran a Cristo.',
    'category-analogy-desc': 'Traza paralelos entre las acciones de Dios en el pasado y Sus acciones a través de Cristo.',
    'category-longitudinal-themes-desc': 'Sigue temas que se desarrollan a lo largo de las Escrituras y culminan en Cristo.',
    'category-new-testament-references-desc': 'Utiliza citas en el Nuevo Testamento para mostrar conexiones con Cristo.',
    'category-contrast-desc': 'Destaca cómo Cristo es mayor que las figuras o instituciones anteriores.',
    
    // Books - Generic descriptions
    'book-description-general': 'Este libro revela aspectos de Cristo a través de varias categorías hermenéuticas.',
    'points-to-christ-through': 'Apunta a Cristo a través de:'
  }
};
