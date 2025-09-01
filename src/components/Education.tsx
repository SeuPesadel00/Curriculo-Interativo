import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  status: string;
  description?: string;
  highlights?: string[];
}

const Education = () => {
  const education: EducationItem[] = [
    {
      degree: 'Ciência da Computação',
      institution: 'Universidade Fictícia',
      period: 'Jan 2025 - Presente',
      location: 'Sua Cidade, UF',
      status: 'Em Andamento',
      description: 'Formação focada em desenvolvimento de sistemas, programação e análise de requisitos.',
      highlights: [
        'Programação orientada a objetos',
        'Desenvolvimento web e mobile',
        'Banco de dados e SQL',
        'Metodologias ágeis',
        'Engenharia de software'
      ]
    },
    {
      degree: 'Língua e Literatura Inglesa',
      institution: 'Curso de Idiomas Exemplo',
      period: 'Jan 2017 - Jul 2019',
      location: 'Sua Cidade, UF',
      status: 'Concluído',
      description: 'Curso completo de inglês com foco em comunicação empresarial e técnica.',
      highlights: [
        'Conversação avançada',
        'Inglês técnico para TI',
        'Redação empresarial',
        'Certificação internacional'
      ]
    }
  ];

  const certifications = [
    'Certificação Exemplo 1',
    'Certificação Exemplo 2',
    'Certificação Exemplo 3',
    'Certificação Exemplo 4'
  ];

  return (
    <section id="formacao" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-text mb-4">
            Formação Acadêmica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Educação contínua e especialização em tecnologia da informação
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Cartões de Educação */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="hover-lift glow-effect animate-bounce-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <Badge 
                      variant={edu.status === 'Em Andamento' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {edu.status}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl leading-tight">
                    {edu.degree}
                  </CardTitle>
                  
                  <CardDescription className="text-lg font-semibold text-primary">
                    {edu.institution}
                  </CardDescription>

                  <div className="flex flex-col space-y-2 mt-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {edu.description && (
                    <p className="text-muted-foreground mb-4">
                      {edu.description}
                    </p>
                  )}

                  {edu.highlights && (
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                        Principais Disciplinas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Seção de Certificações (Comentada para melhor visualização) */}
          {/*
          <Card className="animate-slide-in-right glow-effect">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-3 bg-success/10 rounded-lg">
                  <Award className="w-6 h-6 text-success" />
                </div>
                <div>
                  <CardTitle className="text-xl">Certificações & Qualificações</CardTitle>
                  <CardDescription>
                    Certificações técnicas e especializações profissionais
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 p-3 bg-accent/20 rounded-lg hover:bg-accent/30 transition-colors"
                  >
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          */}
        </div>

        {/* Resumo da Educação */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span><strong className="text-primary">Superior</strong> em andamento</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-success" />
              <span><strong className="text-primary">4+</strong> certificações técnicas</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-warning" />
              <span><strong className="text-primary">Aprendizado</strong> contínuo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;