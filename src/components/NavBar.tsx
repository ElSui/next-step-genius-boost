
import { Button } from "@/components/ui/button";
import { useScrollPosition } from "@/hooks/use-scroll-position";

const NavBar = () => {
  const scrollPosition = useScrollPosition();
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrollPosition > 20 
        ? "bg-white shadow-md py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <h1 className="font-bold text-2xl">
              <span className="text-nextstep-orange">Next</span>
              <span className="text-nextstep-blue">Step</span>
            </h1>
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-gray-700 hover:text-nextstep-orange font-medium transition-colors">
            How It Works
          </a>
          <a href="#results" className="text-gray-700 hover:text-nextstep-orange font-medium transition-colors">
            Results
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-nextstep-orange font-medium transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-gray-700 hover:text-nextstep-orange font-medium transition-colors">
            FAQ
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button className="bg-nextstep-orange hover:bg-nextstep-orange/90 text-white rounded-lg">
            Start Free Trial
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
