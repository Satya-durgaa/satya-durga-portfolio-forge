
import { ArrowDown, FileText, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-32 bg-gradient-to-b from-blue-500/30 dark:from-blue-400/20 to-transparent rotate-12 animate-fade-in delay-500"></div>
        <div className="absolute top-40 right-20 w-1 h-24 bg-gradient-to-b from-indigo-500/30 dark:from-indigo-400/20 to-transparent -rotate-12 animate-fade-in delay-700"></div>
        <div className="absolute bottom-40 left-1/4 w-px h-16 bg-gradient-to-b from-purple-500/30 dark:from-purple-400/20 to-transparent animate-fade-in delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-scale-in">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25 transition-all duration-500 hover:scale-110 group">
            <span className="group-hover:scale-110 transition-transform duration-300">SD</span>
          </div>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight animate-fade-in transition-colors duration-300">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent animate-pulse">
              Satya Durga
            </span>
            <span className="text-4xl animate-bounce inline-block ml-4">👋</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium animate-fade-in delay-300 transition-colors duration-300">
            Final Year B.Tech Student – Specializing in{' '}
            <span className="text-blue-600 dark:text-blue-400 font-semibold relative">
              Data Science
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 animate-scale-in delay-500"></div>
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in delay-500 transition-colors duration-300">
            Passionate about building data-driven solutions & real-world applications
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in delay-700">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group"
              onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FileText className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
              View Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="mr-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              Explore Projects
            </Button>
          </div>
        </div>
        
        <div className="mt-16 animate-bounce delay-1000">
          <ArrowDown className="mx-auto text-blue-600 dark:text-blue-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 cursor-pointer" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
