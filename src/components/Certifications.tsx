
import { Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Certifications = () => {
  const certifications = [
    { title: 'Introduction to Machine Learning', issuer: 'NPTEL', color: 'bg-blue-500' },
    { title: 'Data Analysis Using Python', issuer: 'APSSDC', color: 'bg-green-500' },
    { title: 'AI Fundamentals', issuer: 'IBM SkillsBuild', color: 'bg-purple-500' },
    { title: 'Deep Learning for NLP', issuer: 'NPTEL', color: 'bg-red-500' },
    { title: 'Android App Development', issuer: 'APSSDC', color: 'bg-orange-500' }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6">
            Continuous learning and professional development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full ${cert.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-500 flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
