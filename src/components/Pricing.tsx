
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const features = [
    "Personalized AI tutoring",
    "Voice-interactive lessons",
    "Weekly progress reports",
    "Adaptive practice questions",
    "Parent dashboard access",
    "24/7 unlimited access"
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Affordable SAT Preparation</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get the benefits of premium tutoring at a fraction of the cost
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Pricing Info */}
              <div className="p-8 md:p-12">
                <div className="mb-4">
                  <span className="inline-block bg-nextstep-orange/10 text-nextstep-orange font-semibold px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Monthly Subscription</h3>
                <div className="flex items-end mb-6">
                  <span className="text-5xl font-bold">$29.99</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <p className="text-gray-600 mb-8">
                  <span className="line-through">$200-300/hr</span> for traditional tutoring
                </p>
                
                <div className="mb-8">
                  <Button size="lg" className="w-full bg-nextstep-orange hover:bg-nextstep-orange/90 text-white text-lg rounded-lg">
                    Start 7-Day Free Trial
                  </Button>
                  <p className="text-sm text-center text-gray-500 mt-3">
                    Credit card required. Cancel anytime.
                  </p>
                </div>
                
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10"></path><path d="m14.5 9-5 5"></path><path d="m9.5 9 5 5"></path></svg>
                  Money back guarantee
                </div>
              </div>
              
              {/* Features */}
              <div className="bg-gray-50 p-8 md:p-12">
                <h4 className="font-semibold mb-6">Everything included:</h4>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1">
                        <Check className="h-5 w-5 text-nextstep-blue" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="font-semibold mb-2">Compare to traditional tutoring:</div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Next Step Education</span>
                    <span className="font-semibold">$29.99/month</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Private SAT Tutor</span>
                    <span className="font-semibold">$200-300/hour</span>
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

export default Pricing;
