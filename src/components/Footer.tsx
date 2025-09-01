import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground py-8 relative">
      {/* Padrão de fundo (comentado para um design mais limpo) */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-hero-text via-hero-text/95 to-primary/20"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-hero-accent/20 rounded-full blur-2xl"></div>
      */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Conteúdo principal */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Seu Nome Completo</h3>
            <p className="text-foreground/80 text-lg">Seu Título Profissional</p>
          </div>

          {/* Informações de contato */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-foreground/90">
            <a 
              href="mailto:seu.email@exemplo.com" 
              className="hover:text-primary-glow transition-colors"
            >
              seu.email@exemplo.com
            </a>
            <div className="hidden md:block w-1 h-1 bg-foreground/40 rounded-full"></div>
            <a 
              href="tel:+55XX9XXXXXXXX" 
              className="hover:text-primary-glow transition-colors"
            >
              (XX) XXXXX-XXXX
            </a>
            <div className="hidden md:block w-1 h-1 bg-foreground/40 rounded-full"></div>
            <span>Sua Cidade, UF - Brasil</span>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-foreground/20">
            <p className="text-foreground/70 text-sm mb-4">
              © {currentYear} Seu Nome. Todos os direitos reservados.
            </p>
            <p>
              Desenvolvido usando:
            </p>
            <p className="text-foreground/50 text-xs">
              React & Tailwind CSS
            </p>
            <p className="text-foreground/50 text-xs">
              Vite & TypeScript
            </p>
          </div>

          {/* Botão de voltar ao topo */}
          <Button
            onClick={scrollToTop}
            size="sm"
            className="mt-6 bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
            variant="default"
          >
            <ArrowUp className="w-4 h-4 mr-1" />
            Voltar ao topo
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;