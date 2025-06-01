
import { GraduationCap, Star, Trophy, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const traits = [
    { icon: Star, label: 'Motivated', color: 'text-yellow-500', bgColor: 'bg-yellow-100' },
    { icon: GraduationCap, label: 'Learner', color: 'text-blue-500', bgColor: 'bg-blue-100' },
    { icon: Trophy, label: 'Explorer', color: 'text-green-500', bgColor: 'bg-green-100' },
    { icon: Users, label: 'Team Player', color: 'text-purple-500', bgColor: 'bg-purple-100' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border border-blue-200/50 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg rotate-45 animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 relative">
            About Me
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto animate-scale-in delay-300"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in delay-500">
            <p className="text-lg text-gray-600 leading-relaxed relative pl-6">
              <div className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              I'm a final year Data Science student at{' '}
              <span className="text-blue-600 font-semibold relative group">
                Aditya College of Engineering and Technology
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500"></div>
              </span>
              . I'm driven by curiosity, passionate about real-world problem-solving, 
              and currently looking for internships and collaboration opportunities.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 mr-3 animate-pulse"></div>
                Education
              </h3>
              <div className="space-y-3">
                <div className="group flex items-center justify-between p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">B.Tech – Data Science</h4>
                    <p className="text-gray-600">2022 – 2026</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300 inline-block">7.88</span>
                    <p className="text-sm text-gray-500">GPA</p>
                  </div>
                </div>
                
                <div className="group flex items-center justify-between p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">Intermediate – MPC</h4>
                    <p className="text-gray-600">2020 – 2022</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300 inline-block">94%</span>
                    <p className="text-sm text-gray-500">Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in delay-700">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  Core Traits
                  <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 animate-pulse"></div>
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {traits.map((trait, index) => (
                    <div key={index} className="text-center group hover:scale-110 transition-all duration-500 cursor-default">
                      <div className={`w-16 h-16 mx-auto mb-3 rounded-full ${trait.bgColor} flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <trait.icon className={`${trait.color} z-10 relative group-hover:scale-110 transition-transform duration-300`} size={32} />
                      </div>
                      <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{trait.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
