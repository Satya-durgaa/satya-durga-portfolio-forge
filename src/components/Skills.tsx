
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C', 'JavaScript', 'SQL'],
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600',
      icon: '💻'
    },
    {
      title: 'Frameworks & Tools',
      skills: ['React', 'Node.js', 'Express', 'Scikit-learn'],
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600',
      icon: '🛠️'
    },
    {
      title: 'Soft Skills',
      skills: ['Problem-solving', 'Adaptability', 'Leadership', 'Event Management', 'Time Management'],
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600',
      icon: '🎯'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-48 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 relative">
            Skills & Expertise
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full animate-bounce"></div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto animate-scale-in delay-300"></div>
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-ping delay-150"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping delay-300"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="text-2xl mr-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">{category.icon}</div>
                <div className={`w-4 h-4 rounded-full ${category.color} mr-3 group-hover:scale-110 transition-transform duration-300`}></div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-gray-100 text-gray-800 hover:bg-blue-100 hover:text-blue-800 hover:scale-105 transition-all duration-300 px-3 py-1 cursor-default relative overflow-hidden group/badge"
                    style={{ animationDelay: `${(skillIndex + 1) * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 translate-x-[-100%] group-hover/badge:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10">{skill}</span>
                  </Badge>
                ))}
              </div>
              
              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-150 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
