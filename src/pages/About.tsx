
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-10 px-6 md:px-12 bg-gradient-to-b from-secondary to-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-block text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
            Sobre o Projeto
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Cristo na Bíblia
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça mais sobre este projeto e a abordagem hermenêutica de Sidney Greidanus.
          </p>
        </div>
      </section>
      
      <section className="py-12 px-6 md:px-12 bg-white flex-grow">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-4">Sobre Este Projeto</h2>
            <p>Este site foi criado com o objetivo de ajudar estudantes da Bíblia a entender melhor como toda a Escritura aponta para Jesus Cristo. Utilizando as categorias hermenêuticas desenvolvidas por Sidney Greidanus, exploramos como cada livro da Bíblia revela aspectos da pessoa e obra de Cristo.</p>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Quem é Sidney Greidanus?</h2>
            <p>Sidney Greidanus é um respeitado estudioso da homilética e hermenêutica bíblica. Professor emérito de pregação no Calvin Theological Seminary, ele é autor de várias obras importantes, incluindo "Preaching Christ from the Old Testament: A Contemporary Hermeneutical Method".</p>
            <p>Em seu trabalho, Greidanus identificou sete maneiras legítimas pelas quais os pregadores e intérpretes podem estabelecer conexões entre o Antigo Testamento e Cristo:</p>
            <ol>
              <li>
                <strong>Progressão Histórico-Redentiva:</strong> Traça como uma passagem se encaixa no desdobramento mais amplo do plano redentor de Deus ao longo da história, conduzindo a Cristo.
              </li>
              <li>
                <strong>Promessa-Cumprimento:</strong> Identifica promessas feitas no Antigo Testamento que encontram seu cumprimento em Cristo.
              </li>
              <li>
                <strong>Tipologia:</strong> Reconhece pessoas, eventos ou instituições do Antigo Testamento como "tipos" que prefiguram aspectos de Cristo ou Sua obra.
              </li>
              <li>
                <strong>Analogia:</strong> Traça paralelos entre as ações de Deus no Antigo Testamento e Suas ações por meio de Cristo.
              </li>
              <li>
                <strong>Temas Longitudinais:</strong> Segue temas bíblicos importantes à medida que se desenvolvem ao longo das Escrituras e encontram sua culminação em Cristo.
              </li>
              <li>
                <strong>Referências do Novo Testamento:</strong> Utiliza citações do Antigo Testamento no Novo Testamento para mostrar conexões com Cristo.
              </li>
              <li>
                <strong>Contraste:</strong> Destaca como Cristo é maior ou diferente das figuras ou instituições do Antigo Testamento.
              </li>
            </ol>
            
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Nosso Propósito</h2>
            <p>Acreditamos que entender como toda a Escritura aponta para Cristo enriquece nossa leitura da Bíblia e aprofunda nossa compreensão do plano redentor de Deus. Através deste recurso, esperamos:</p>
            <ul>
              <li>Ajudar leitores a ver a unidade da narrativa bíblica</li>
              <li>Equipar pregadores e professores para apresentar Cristo a partir de toda a Escritura</li>
              <li>Demonstrar como o Antigo e o Novo Testamento formam uma história coesa</li>
              <li>Aprofundar a apreciação pela riqueza e profundidade das Escrituras</li>
            </ul>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
