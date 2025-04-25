
import { BarChartHorizontal, Book, Mic, User } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full">
      <div className="h-12 w-12 bg-nextstep-orange/10 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ValueProposition = () => {
  const features = [
    {
      icon: <Book className="h-6 w-6 text-nextstep-orange" />,
      title: "Systematic Skill Development",
      description: "Our platform breaks down the SAT into specific skills that develop progressively, ensuring a solid foundation."
    },
    {
      icon: <Mic className="h-6 w-6 text-nextstep-orange" />,
      title: "Voice Interaction",
      description: "Students engage through natural voice conversations, making learning interactive and more effective."
    },
    {
      icon: <BarChartHorizontal className="h-6 w-6 text-nextstep-orange" />,
      title: "Progress Tracking",
      description: "Real-time analytics show exactly where your student is improving and which areas need more focus."
    },
    {
      icon: <User className="h-6 w-6 text-nextstep-orange" />,
      title: "Parent Involvement",
      description: "Stay informed with weekly email updates and detailed progress reports on your student's journey."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Parents & Students Choose Next Step</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform delivers personalized SAT prep that adapts to each student's unique learning style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="animate-fade-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
