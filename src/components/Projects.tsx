
import { Github, Rocket } from 'lucide-react';
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
      type: 'Machine Learning'
    },
    {
      title: 'Weather App Webpage',
      description: 'Real-time weather updates based on user input with temperature, humidity, wind speed, and icon display.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
      github: 'https://github.com/Satya-durgaa/Weather_app_webpage',
      type: 'Web Development'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Showcasing my journey in data science and web development through hands-on projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs font-medium">
                    {project.type}
                  </Badge>
                  <Rocket className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={20} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="mr-2" size={16} />
                  View on GitHub
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
