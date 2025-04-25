
const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h2 className="font-bold text-2xl mb-4">
              <span className="text-nextstep-orange">Next</span>
              <span className="text-nextstep-blue">Step</span>
            </h2>
            <p className="text-gray-600 mb-4">
              AI-powered SAT prep that delivers real results for your student.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-nextstep-orange">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-nextstep-orange">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-nextstep-orange">Pricing</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-nextstep-orange">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-nextstep-orange">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nextstep-orange">Success Stories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nextstep-orange">SAT Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nextstep-orange">Parent Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-nextstep-orange">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nextstep-orange">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nextstep-orange">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nextstep-orange">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Next Step Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
