import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Mail, Phone } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'competencias', label: 'Competências' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'formacao', label: 'Formação' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo/Marca */}
          <div 
            onClick={() => scrollToSection('sobre')}
            className="text-xl font-bold text-foreground cursor-pointer hover:text-primary transition-colors"
          >
            Seu Portfólio
          </div>

          {/* Navegação Desktop - Centralizada */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Botões de Ação Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="sm" className="hover-lift" asChild>
              <a href="/downloads/curriculo.pdf" download="seu-curriculo.pdf">
                <Download className="w-4 h-4 mr-2" />
                CV PDF
              </a>
            </Button>
            <Button 
              size="sm" 
              className="glow-effect"
              onClick={() => scrollToSection('contato')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contato
            </Button>
          </div>

          {/* Botão do Menu Mobile */}
          <button
            className="md:hidden text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in-up">
            <div className="flex flex-col space-y-3">
               {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;