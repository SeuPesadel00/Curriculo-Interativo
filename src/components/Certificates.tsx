import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  institution: string;
  date: string;
  image: string;
  type: "certificate" | "diploma";
}

// Lista de certificados e diplomas - adicione seus dados aqui
const certificates: Certificate[] = [
  {
    id: "1",
    title: "Lógica de Programação com JavaScript",
    institution: "Plataforma de Ensino Online",
    date: "Janeiro 2024",
    image: "/certificates/logica-de-programacao.jpg", // Coloque seu certificado na pasta public/certificates
    type: "certificate"
  },
  {
    id: "2",
    title: "Análise de Dados com Power BI",
    institution: "Instituição de Referência",
    date: "Junho 2023",
    image: "/certificates/power-bi.jpg",
    type: "certificate"
  },
  {
    id: "3",
    title: "Ciência da Computação",
    institution: "Universidade Fictícia",
    date: "2023",
    image: "/diplomas/ciencia-da-computacao.jpg",
    type: "diploma"
  }
];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    // Atualiza o indicador com a seleção do carousel
    setCurrentIndex(api.selectedScrollSnap());
    const onSelect = () => setCurrentIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  if (certificates.length === 0) {
    return (
      <section id="certificados" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certificados e Diplomas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Adicione seus certificados na pasta <code>public/certificates/</code> e 
              atualize a lista no componente Certificates.tsx
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="certificados" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Certificados e Diplomas
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minhas conquistas acadêmicas e profissionais que demonstram 
            meu comprometimento com o aprendizado contínuo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
          >
            <CarouselContent>
              {certificates.map((certificate, index) => (
                <CarouselItem key={certificate.id}>
                  <div className="p-1">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="relative">
                        {/* Imagem do certificado */}
                        <div className="aspect-[4/3] overflow-hidden rounded-t-lg bg-muted flex items-center justify-center">
                          <img
                            src={certificate.image}
                            alt={`${certificate.title} - ${certificate.institution}`}
                            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzY2NzM4NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNlcnRpZmljYWRvPC90ZXh0Pgo8L3N2Zz4K";
                            }}
                          />
                        </div>
                        
                        {/* Badge do tipo */}
                        <div className="absolute top-4 right-4">
                          <Badge 
                            variant={certificate.type === "diploma" ? "default" : "secondary"}
                            className="text-xs font-medium"
                          >
                            {certificate.type === "diploma" ? "Diploma" : "Certificado"}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Informações do certificado */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {certificate.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          {certificate.institution}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{certificate.date}</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
          
          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {certificates.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir para certificado ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {certificates.filter(c => c.type === "certificate").length}
            </div>
            <div className="text-muted-foreground">Certificados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {certificates.filter(c => c.type === "diploma").length}
            </div>
            <div className="text-muted-foreground">Diplomas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {certificates.length}
            </div>
            <div className="text-muted-foreground">Total</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;