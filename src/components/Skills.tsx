
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C', 'JavaScript', 'SQL'],
      color: 'bg-blue-500'
    },
    {
      title: 'Frameworks & Tools',
      skills: ['React', 'Node.js', 'Express', 'Scikit-learn'],
      color: 'bg-green-500'
    },
    {
      title: 'Soft Skills',
      skills: ['Problem-solving', 'Adaptability', 'Leadership', 'Event Management', 'Time Management'],
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className={`w-4 h-4 rounded-full ${category.color} mr-3`}></div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors duration-200 px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
