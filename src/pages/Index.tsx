import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-dark-section">
      <Header />
      <main>
        <div className="bg-dark-section">
          <Hero />
        </div>
        <div className="bg-light-section">
          <Skills />
        </div>
        <div className="bg-dark-section">
          <Experience />
        </div>
        <div className="bg-light-section">
          <Education />
        </div>
        <div className="bg-dark-section">
          <Certificates />
        </div>
        <div className="bg-light-section">
          <Contact />
        </div>
      </main>
      <div className="bg-dark-section">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
