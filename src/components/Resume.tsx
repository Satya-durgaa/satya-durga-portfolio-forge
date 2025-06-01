
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, skills, and academic background
          </p>
        </div>
        
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <FileText className="text-white" size={40} />
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Satya Durga Madepalli
            </h3>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Final year Data Science student passionate about machine learning, data analysis, 
              and building innovative solutions. Ready to contribute to meaningful projects and 
              grow in a dynamic environment.
            </p>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="mr-2" size={20} />
              Download Resume (PDF)
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resume;
