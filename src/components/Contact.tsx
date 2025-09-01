import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Download, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'E-mail',
      value: 'seu.email@exemplo.com',
      href: 'mailto:seu.email@exemplo.com',
      description: 'Resposta em até 24h'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Telefone',
      value: '(XX) XXXXX-XXXX',
      href: 'tel:+55XX9XXXXXXXX',
      description: 'WhatsApp disponível'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Localização',
      value: 'Sua Cidade, UF',
      href: '#',
      description: 'Disponível para remoto'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/seu-perfil',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/seu-usuario/nome-do-repositorio',
      color: 'hover:text-gray-800'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula o envio do formulário
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve.",
      });
      setIsSubmitting(false);
      // Reseta o formulário
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  const handleDownloadCV = () => {
    toast({
      title: "Download iniciado",
      description: "O currículo em PDF será baixado em instantes.",
    });
  };

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-text mb-4">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos desafiadores. 
            Entre em contato e vamos conversar!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Informações de Contato */}
            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h3 className="text-2xl font-bold text-hero-text mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="hover-lift group">
                      <CardContent className="p-6">
                        <a 
                          href={info.href}
                          className="flex items-center space-x-4 group-hover:text-primary transition-colors"
                        >
                          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            {info.icon}
                          </div>
                          <div>
                            <div className="font-semibold">{info.label}</div>
                            <div className="text-lg">{info.value}</div>
                            <div className="text-sm text-muted-foreground">{info.description}</div>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover-lift glow-effect"
                  asChild
                  onClick={handleDownloadCV} 
                >
                  <a href="downloads/curriculo.pdf" download>
                    <Download className="w-5 h-5 mr-2" />
                    Baixar Currículo PDF
                  </a>
                </Button>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className={`flex-1 hover-lift ${social.color}`}
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        {social.icon}
                        <span className="ml-2">{social.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Estatísticas Rápidas */}
              <Card className="glow-effect">
                <CardHeader>
                  <CardTitle className="text-lg">Disponibilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                        Disponível
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tempo de resposta</span>
                      <span className="text-primary font-semibold">24 horas</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Modalidade</span>
                      <span>Presencial / Remoto</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formulário de Contato */}
            <Card className="hover-lift glow-effect animate-bounce-in">
              <CardHeader>
                <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entrarei em contato em breve
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nome *</Label>
                      <Input
                        id="firstName"
                        placeholder="Seu nome"
                        required
                        className="hover:border-primary/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Sobrenome *</Label>
                      <Input
                        id="lastName"
                        placeholder="Seu sobrenome"
                        required
                        className="hover:border-primary/50 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="hover:border-primary/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto *</Label>
                    <Input
                      id="subject"
                      placeholder="Sobre o que gostaria de conversar?"
                      required
                      className="hover:border-primary/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      placeholder="Descreva sua proposta ou dúvida..."
                      className="min-h-32 hover:border-primary/50 focus:border-primary"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover-lift glow-effect"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></div>
                        Enviando...
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;