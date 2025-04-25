
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Boost SAT Scores by <span className="text-nextstep-orange">100+ Points</span> in 1 Month
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                AI-powered tutoring that adapts to your student's unique learning style and needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-nextstep-orange hover:bg-nextstep-orange/90 text-white text-lg px-8 py-6 rounded-lg">
                  Start 7-Day Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-nextstep-blue text-nextstep-blue hover:bg-nextstep-blue/5 text-lg px-8 py-6 rounded-lg">
                  View Pricing
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No commitment. Cancel anytime during your free trial.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-nextstep-orange/10 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-nextstep-blue/10 rounded-full z-0"></div>
              <div className="relative z-10 bg-white p-4 rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Student using Next Step Education platform" 
                  className="w-full h-auto rounded-lg object-cover"
                />
                <div className="absolute bottom-8 left-0 right-0 mx-auto w-4/5 bg-white/95 backdrop-blur p-4 rounded-lg shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900">Emma's Progress</p>
                      <p className="text-sm text-gray-600">SAT Math: +120 points in 4 weeks</p>
                    </div>
                    <div className="h-10 w-10 bg-nextstep-orange/20 rounded-full flex items-center justify-center">
                      <span className="text-nextstep-orange font-bold">+120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
