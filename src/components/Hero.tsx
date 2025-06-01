
import { ArrowDown, FileText, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
            SD
          </div>
        </div>
        
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Satya Durga
            </span>
            <span className="text-4xl">👋</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-medium">
            Final Year B.Tech Student – Specializing in{' '}
            <span className="text-blue-600 font-semibold">Data Science</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto">
            Passionate about building data-driven solutions & real-world applications
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FileText className="mr-2" size={20} />
              View Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="mr-2" size={20} />
              Explore Projects
            </Button>
          </div>
        </div>
        
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-blue-600" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
