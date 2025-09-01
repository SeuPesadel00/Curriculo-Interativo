import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Users, Server } from "lucide-react";

interface Skill {
  name: string;
  category: string;
  level: number;
  icon: React.ReactNode;
  description: string;
}

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [animatedSkills, setAnimatedSkills] = useState<boolean>(false);

  const allSkills: Skill[] = [
    {
      name: 'Gerenciamento de Projetos',
      category: 'Gestão & Análise',
      level: 70,
      icon: <Users className="w-4 h-4" />,
      description: 'Liderança de projetos end-to-end'
    },
    {
      name: 'Análise de Sistemas',
      category: 'Gestão & Análise',
      level: 95,
      icon: <Code className="w-4 h-4" />,
      description: 'Levantamento de requisitos e soluções'
    },
    {
      name: 'Inteligência de negócios',
      category: 'Gestão & Análise',
      level: 60,
      icon: <Database className="w-4 h-4" />,
      description: 'Análise de dados e insights'
    },
    {
      name: 'Power BI',
      category: 'Gestão & Análise',
      level: 80,
      icon: <Database className="w-4 h-4" />,
      description: 'Dashboards e relatórios avançados'
    },
    {
      name: 'SAP (Associate)',
      category: 'Gestão & Análise',
      level: 50,
      icon: <Server className="w-4 h-4" />,
      description: 'Administração e suporte SAP'
    },
    {
      name: 'SQL',
      category: 'Desenvolvimento',
      level: 70,
      icon: <Database className="w-4 h-4" />,
      description: 'Consultas complexas e otimização'
    },
    {
      name: 'Python',
      category: 'Desenvolvimento',
      level: 50,
      icon: <Code className="w-4 h-4" />,
      description: 'Automação e análise de dados'
    },
    {
      name: 'HTML',
      category: 'Desenvolvimento',
      level: 90,
      icon: <Code className="w-4 h-4" />,
      description: 'Interface e experiência do usuário'
    },
    {
      name: 'CSS',
      category: 'Desenvolvimento',
      level: 85,
      icon: <Code className="w-4 h-4" />,
      description: 'Interface e experiência do usuário'
    },
    {
      name: 'JavaScript',
      category: 'Desenvolvimento',
      level: 60,
      icon: <Code className="w-4 h-4" />,
      description: 'Interface e experiência do usuário'
    },
    {
      name: 'C/C#',
      category: 'Desenvolvimento',
      level: 40,
      icon: <Code className="w-4 h-4" />,
      description: 'Interface e experiência do usuário'
    },
    {
      name: 'Redes e Infraestrutura',
      category: 'Infraestrutura & Suporte',
      level: 95,
      icon: <Server className="w-4 h-4" />,
      description: 'Administração completa de redes'
    },
    {
      name: 'Administração de Servidores',
      category: 'Infraestrutura & Suporte',
      level: 80,
      icon: <Server className="w-4 h-4" />,
      description: 'Windows Server e Linux'
    },
    {
      name: 'Suporte Técnico',
      category: 'Infraestrutura & Suporte',
      level: 100,
      icon: <Users className="w-4 h-4" />,
      description: 'Atendimento especializado'
    },
    {
      name: 'Suporte Remoto',
      category: 'Infraestrutura & Suporte',
      level: 100,
      icon: <Server className="w-4 h-4" />,
      description: 'Ferramentas VNC, AnyDesk, LogMeIn'
    }
  ];

  const categories = [
    { id: 'all', label: 'Todas as Competências' },
    { id: 'Gestão & Análise', label: 'Gestão & Análise' },
    { id: 'Desenvolvimento', label: 'Desenvolvimento' },
    { id: 'Infraestrutura & Suporte', label: 'Infraestrutura' }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedSkills) {
          setAnimatedSkills(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('competencias');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, [animatedSkills]);

  return (
    <section id="competencias" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-text mb-4">
            Principais Competências
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Habilidades desenvolvidas ao longo de XX+ anos de experiência em TI
          </p>
        </div>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-in-right">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="hover-lift"
              translate="no"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Grade de habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <Card 
              key={skill.name} 
              className="hover-lift glow-effect group animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    {skill.icon}
                  </div>
                  <div>
                    <CardTitle className="text-base" translate="no">{skill.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs mt-1" translate="no">
                      {skill.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="mb-4">
                  {skill.description}
                </CardDescription>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiência</span>
                    <span className="font-semibold text-primary" translate="no">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={animatedSkills ? skill.level : 0} 
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resumo das habilidades */}
        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-muted-foreground text-lg">
            <strong className="text-primary" translate="no">{allSkills.length}</strong> competências especializadas •{' '}
            <strong className="text-primary" translate="no">{categories.length - 1}</strong> áreas de expertise •{' '}
            <strong className="text-primary" translate="no">XX+</strong> anos de experiência
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;