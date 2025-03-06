
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PencilRuler, BookText, Info, ChartPie, Book, Grid } from 'lucide-react';

interface TabProps {
  books: any[];
}

const CategoryTabs = ({ books }: TabProps) => {
  const [activeTab, setActiveTab] = useState("about");
  
  // Calcular as estatísticas das categorias
  const getCategoryStats = () => {
    const oldTestamentBooks = books.filter(book => book.testament === 'old').length;
    const newTestamentBooks = books.filter(book => book.testament === 'new').length;
    
    return {
      oldTestament: oldTestamentBooks,
      newTestament: newTestamentBooks,
      total: oldTestamentBooks + newTestamentBooks
    };
  };
  
  const stats = getCategoryStats();

  return (
    <div>
      <div className="mb-12 flex justify-center">
        <div className="flex bg-secondary/20 p-1 rounded-lg mb-8">
          <button 
            onClick={() => setActiveTab("about")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "about" ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-primary"}`}
          >
            Sobre as Categorias
          </button>
          <button 
            onClick={() => setActiveTab("greidanus")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "greidanus" ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-primary"}`}
          >
            Quem é Greidanus
          </button>
          <button 
            onClick={() => setActiveTab("stats")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "stats" ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-primary"}`}
          >
            Estatísticas
          </button>
        </div>
      </div>
      
      {activeTab === "about" && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 max-w-4xl mx-auto bg-secondary/10 p-6 rounded-lg"
        >
          <div className="flex items-start mb-4">
            <BookOpen className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">Enxergando Cristo em Toda a Bíblia</h3>
              <p className="text-muted-foreground">
                Sidney Greidanus propôs sete categorias ou métodos pelos quais podemos observar legitimamente como o Antigo Testamento aponta para Cristo. 
                Estes métodos nos ajudam a ver a unidade das Escrituras e como toda a Bíblia testifica de Jesus Cristo, conforme Ele mesmo afirmou em João 5:39: 
                "Examinais as Escrituras, porque julgais ter nelas a vida eterna, e são elas mesmas que testificam de mim."
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-4">
            <PencilRuler className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">Métodos Hermenêuticos Sólidos</h3>
              <p className="text-muted-foreground">
                Estas categorias representam métodos hermenêuticos academicamente sólidos que evitam alegorização excessiva ou interpretações forçadas. 
                Elas nos ajudam a ver conexões legítimas entre o Antigo e o Novo Testamento, respeitando o contexto original de cada passagem.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <BookText className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">Uma Ferramenta para Estudo Cristocêntrico</h3>
              <p className="text-muted-foreground">
                Este guia foi criado para ajudar estudantes da Bíblia, pastores e leigos a identificar como cada livro da Bíblia 
                aponta para Cristo, enriquecendo nossa compreensão das Escrituras e aprofundando nossa apreciação de Jesus como 
                o centro da revelação de Deus.
              </p>
            </div>
          </div>
        </motion.div>
      )}
      
      {activeTab === "greidanus" && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 max-w-4xl mx-auto bg-secondary/10 p-6 rounded-lg"
        >
          <div className="flex items-start">
            <Info className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">Dr. Sidney Greidanus</h3>
              <p className="text-muted-foreground mb-4">
                Sidney Greidanus é professor emérito de pregação no Calvin Theological Seminary e um renomado 
                estudioso da homilética e hermenêutica bíblica. Sua contribuição para a pregação cristocêntrica 
                tem sido amplamente influente no mundo acadêmico teológico e em ministérios pastorais.
              </p>
              
              <h4 className="font-semibold text-primary mb-2">Obras Principais:</h4>
              <ul className="text-muted-foreground list-disc pl-5 space-y-1 mb-4">
                <li>"Preaching Christ from the Old Testament: A Contemporary Hermeneutical Method" (1999)</li>
                <li>"The Modern Preacher and the Ancient Text" (1988)</li>
                <li>"Preaching Christ from Genesis" (2007)</li>
                <li>"Preaching Christ from Ecclesiastes" (2010)</li>
                <li>"Preaching Christ from Daniel" (2012)</li>
              </ul>
              
              <p className="text-muted-foreground">
                O trabalho de Greidanus se destaca por seu compromisso com uma exegese sólida e contextual 
                que honra o texto original, enquanto demonstra conexões legítimas com Cristo. Sua abordagem 
                evita tanto o alegorismo desordenado quanto o moralismo excessivo, focando em como as Escrituras 
                naturalmente apontam para Jesus Cristo.
              </p>
            </div>
          </div>
        </motion.div>
      )}
      
      {activeTab === "stats" && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden bg-gradient-to-br ${getGradient(index)} dark:border-gray-800">
              <ChartPie className="h-8 w-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-primary mb-1">7 Categorias</h3>
              <p className="text-sm text-muted-foreground">Formas diferentes de ver como a Bíblia aponta para Cristo</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="text-center bg-white p-2 rounded">
                  <span className="block text-lg font-bold text-accent">3</span>
                  <span className="text-xs text-muted-foreground">Baseadas em Promessas</span>
                </div>
                <div className="text-center bg-white p-2 rounded">
                  <span className="block text-lg font-bold text-accent">4</span>
                  <span className="text-xs text-muted-foreground">Baseadas em Padrões</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden bg-gradient-to-br ${getGradient(index)} dark:border-gray-800">
              <Book className="h-8 w-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-primary mb-1">{stats.total} Livros da Bíblia</h3>
              <p className="text-sm text-muted-foreground">{stats.oldTestament} do Antigo Testamento, {stats.newTestament} do Novo Testamento</p>
              <div className="mt-4 w-full bg-white p-2 rounded">
                <div className="flex justify-between items-center text-xs text-muted-foreground mb-1">
                  <span>Antigo Testamento</span>
                  <span>Novo Testamento</span>
                </div>
                <div className="w-full bg-muted/30 h-4 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent/70 rounded-full flex items-center justify-end pr-2 text-xs text-white font-bold"
                    style={{ width: `${(stats.oldTestament / stats.total) * 100}%` }}
                  >
                    {Math.round((stats.oldTestament / stats.total) * 100)}%
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden bg-gradient-to-br ${getGradient(index)} dark:border-gray-800">
              <Grid className="h-8 w-8 text-accent mb-3" />
              <h3 className="text-lg font-bold text-primary mb-1">Distribuição por Categoria</h3>
              <p className="text-sm text-muted-foreground">Ocorrências de cada categoria</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Tipologia</span>
                  <span className="font-medium text-primary">29</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Promessa-Cumprimento</span>
                  <span className="font-medium text-primary">37</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Refs. Novo Testamento</span>
                  <span className="font-medium text-primary">45</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CategoryTabs;
