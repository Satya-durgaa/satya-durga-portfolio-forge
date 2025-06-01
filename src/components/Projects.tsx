
import { Github, Rocket, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Restaurant Reviews (Sentiment Analysis)',
      description: 'ML/NLP project analyzing 1,200+ reviews with keyword extraction, rating prediction, and visual data insights.',
      techStack: ['Python', 'Scikit-learn', 'NLP', 'Data Visualization'],
      github: 'https://github.com/Satya-durgaa/Sentiment__Analysis',
      type: 'Machine Learning',
      gradient: 'from-blue-500 to-indigo-600',
      iconBg: 'bg-blue-500'
    },
    {
      title: 'Weather App Webpage',
      description: 'Real-time weather updates based on user input with temperature, humidity, wind speed, and icon display.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
      github: 'https://github.com/Satya-durgaa/Weather_app_webpage',
      type: 'Web Development',
      gradient: 'from-green-500 to-teal-600',
      iconBg: 'bg-green-500'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-32 h-32 border border-blue-100 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 right-16 w-24 h-24 border border-indigo-100 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 relative">
            Featured Projects
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-ping"></div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto animate-scale-in delay-300"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto animate-fade-in delay-500">
            Showcasing my journey in data science and web development through hands-on projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${(index + 1) * 300}ms` }}
            >
              {/* Animated gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs font-medium group-hover:scale-105 transition-transform duration-300">
                    {project.type}
                  </Badge>
                  <div className={`w-8 h-8 ${project.iconBg} rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <Rocket className="text-white group-hover:scale-110 transition-transform duration-300" size={16} />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-blue-50 text-blue-700 hover:bg-blue-100 hover:scale-105 transition-all duration-300 cursor-default relative overflow-hidden group/badge"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 translate-x-[-100%] group-hover/badge:translate-x-[100%] transition-transform duration-700"></div>
                      <span className="relative z-10">{tech}</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="relative z-10">
                <Button 
                  variant="outline" 
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 group/btn relative overflow-hidden"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300"></div>
                  <Github className="mr-2 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" size={16} />
                  <span className="relative z-10">View on GitHub</span>
                  <ExternalLink className="ml-2 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" size={14} />
                </Button>
              </CardFooter>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-all duration-300"></div>
              <div className="absolute bottom-8 left-8 w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping delay-200 transition-all duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
