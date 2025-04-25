
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-nextstep-orange to-nextstep-blue rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your student's SAT prep experience?
          </h2>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 opacity-90">
            Join thousands of parents who've helped their students achieve their target scores.
          </p>
          <div className="max-w-md mx-auto">
            <Button 
              size="lg" 
              className="w-full bg-white text-nextstep-blue hover:bg-white/90 text-lg py-6 rounded-lg"
            >
              Start Your 7-Day Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm mt-4 opacity-80">
              No risk, cancel anytime during your free trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
