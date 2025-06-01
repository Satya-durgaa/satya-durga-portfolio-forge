
import { GraduationCap, Star, Trophy, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const traits = [
    { icon: Star, label: 'Motivated', color: 'text-yellow-500' },
    { icon: GraduationCap, label: 'Learner', color: 'text-blue-500' },
    { icon: Trophy, label: 'Explorer', color: 'text-green-500' },
    { icon: Users, label: 'Team Player', color: 'text-purple-500' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a final year Data Science student at{' '}
              <span className="text-blue-600 font-semibold">
                Aditya College of Engineering and Technology
              </span>
              . I'm driven by curiosity, passionate about real-world problem-solving, 
              and currently looking for internships and collaboration opportunities.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Education</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200">
                  <div>
                    <h4 className="font-semibold text-gray-900">B.Tech – Data Science</h4>
                    <p className="text-gray-600">2022 – 2026</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-blue-600">7.88</span>
                    <p className="text-sm text-gray-500">GPA</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200">
                  <div>
                    <h4 className="font-semibold text-gray-900">Intermediate – MPC</h4>
                    <p className="text-gray-600">2020 – 2022</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-green-600">94%</span>
                    <p className="text-sm text-gray-500">Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  Core Traits
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {traits.map((trait, index) => (
                    <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300`}>
                        <trait.icon className={`${trait.color} group-hover:scale-110 transition-transform duration-300`} size={32} />
                      </div>
                      <p className="font-medium text-gray-900">{trait.label}</p>
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
