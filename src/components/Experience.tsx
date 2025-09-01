import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  type?: string;
  details: string[];
  skills: string[];
}

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const experiences: ExperienceItem[] = [
    {
      company: 'Empresa Exemplo 1',
      role: 'Analista de Sistemas Sênior',
      period: 'Jan 2022 - Presente',
      location: 'Sua Cidade, UF',
      type: 'Tempo Integral',
      details: [
        'Liderança de projetos, desde a coleta de requisitos até a entrega dos resultados',
        'Análise de problemas e desenvolvimento de soluções para demandas específicas',
        'Suporte a múltiplos departamentos e infraestrutura de TI',
        'Administração de servidores, AD, Consultas SQL',
        'Gerenciamento de chamados em plataformas de Service Desk'
      ],
      skills: ['SAP', 'Power BI', 'SQL', 'Windows Server', 'Gerenciamento de Projetos']
    },
    {
      company: 'Empresa Exemplo 2',
      role: 'Analista de Suporte Júnior',
      period: 'Abril 2019 - Dez 2021',
      location: 'Sua Cidade, UF',
      type: 'Tempo Integral',
      details: [
        'Suporte técnico de hardware e software para colaboradores',
        'Resolução de problemas de sistemas internos e Pacote Office',
        'Manutenção e configuração de estações de trabalho'
      ],
      skills: ['Suporte Técnico', 'Sistemas Internos', 'Help Desk']
    },
    {
      company: 'Empresa Exemplo 3',
      role: 'Estagiário de TI',
      period: 'Jan 2017 - Mar 2019',
      location: 'Sua Cidade, UF',
      type: 'Estágio',
      details: [
        'Infraestrutura e Manutenção de redes',
        'Suporte a laboratórios de informática e salas de aula',
        'Gerenciamento de usuários em ambiente Active Directory'
      ],
      skills: ['Active Directory', 'Infraestrutura de Redes', 'Suporte Técnico']
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experiencia" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-text mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 7 anos de experiência em tecnologia da informação e análise de sistemas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Linha do tempo */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary/20"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Ponto da linha do tempo */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  
                  <Card className="ml-16 hover-lift group cursor-pointer" onClick={() => toggleExpanded(index)}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            <span translate="no">{exp.role}</span>
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-primary mt-1">
                            <span translate="no">{exp.company}</span>
                          </CardDescription>
                          
                          <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span translate="no">{exp.period}</span>
                            </div>
                            {exp.location && (
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span translate="no">{exp.location}</span>
                              </div>
                            )}
                            {exp.type && (
                              <Badge variant="outline" className="text-xs" translate="no">
                                {exp.type}
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="ml-4">
                          {expandedItems.includes(index) ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </CardHeader>

                    {expandedItems.includes(index) && (
                      <CardContent className="animate-fade-in-up">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm text-muted-foreground mb-2 uppercase tracking-wide" translate="no">
                              Principais Responsabilidades
                            </h4>
                            <ul className="space-y-2">
                              {exp.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-muted-foreground" translate="no">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-sm text-muted-foreground mb-2 uppercase tracking-wide" translate="no">
                              Tecnologias & Competências
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs" translate="no">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-muted-foreground">
            <Briefcase className="w-5 h-5 inline mr-2" />
            <span translate="no">Experiência sólida em <strong className="text-primary">análise de sistemas</strong>, 
            <strong className="text-primary"> infraestrutura</strong> e 
            <strong className="text-primary"> gerenciamento de projetos</strong></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;