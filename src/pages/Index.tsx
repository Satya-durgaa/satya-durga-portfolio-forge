
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30 overflow-x-hidden transition-colors duration-500">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-indigo-400/10 dark:bg-indigo-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
