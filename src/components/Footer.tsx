
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted dark:bg-muted/20 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary dark:text-primary">Cristo na Bíblia</h3>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground">
              Explorando como cada livro da Bíblia aponta para Jesus Cristo, usando as categorias de Greidanus.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary dark:text-primary">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/books" className="text-sm text-muted-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary transition-colors">
                  Livros da Bíblia
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-muted-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary transition-colors">
                  Categorias de Greidanus
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary dark:text-primary">Sobre o Projeto</h4>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground">
              Este site foi criado para ajudar estudantes da Bíblia a entender melhor como toda a Escritura aponta para Cristo, utilizando as categorias hermenêuticas desenvolvidas por Sidney Greidanus.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border dark:border-border/50">
          <p className="text-sm text-center text-muted-foreground dark:text-muted-foreground">
            © {new Date().getFullYear()} Cristo na Bíblia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
