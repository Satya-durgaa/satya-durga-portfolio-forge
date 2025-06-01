
import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:satyadurgamadepalli@gmail.com',
      color: 'text-red-500 hover:text-red-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/satya-durga-madepalli/',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Satya-durgaa',
      color: 'text-gray-800 hover:text-gray-900'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6">
            I'm always open to new opportunities and interesting conversations
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900">
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/70 border-gray-200 focus:border-blue-500 transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/70 border-gray-200 focus:border-blue-500 transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-white/70 border-gray-200 focus:border-blue-500 transition-colors duration-200"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Get in touch
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  I'm currently seeking internship opportunities and exciting projects 
                  to contribute to. Whether you have a question about my work or want 
                  to discuss potential collaborations, I'd love to hear from you.
                </p>
                
                <div className="space-y-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center group hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-gray-200 transition-colors duration-300">
                        <link.icon className={`${link.color} transition-colors duration-300`} size={20} />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-300">
                        {link.label}
                      </span>
                    </a>
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

export default Contact;
