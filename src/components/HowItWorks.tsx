
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Personalized Assessment",
      description: "Students begin with a diagnostic that identifies strengths and opportunities for improvement.",
      color: "bg-nextstep-orange"
    },
    {
      number: "02",
      title: "Customized Learning Path",
      description: "Our AI creates a personalized study plan focused on the areas that will most impact scores.",
      color: "bg-nextstep-blue"
    },
    {
      number: "03",
      title: "Interactive Practice",
      description: "Students engage with voice-activated lessons and adaptive practice questions.",
      color: "bg-nextstep-orange"
    },
    {
      number: "04",
      title: "Progress Monitoring",
      description: "Parents receive weekly updates while students get real-time feedback and adjustments.",
      color: "bg-nextstep-blue"
    }
  ];

  return (
    <section className="py-16 md:py-24" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Next Step Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our proven 4-step approach breaks down SAT prep into a clear, manageable process
            that consistently delivers results.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative"
              >
                {/* Circle with number */}
                <div className={`h-14 w-14 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 relative z-10`}>
                  {step.number}
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-4 bg-nextstep-lightblue rounded-lg max-w-3xl">
            <p className="text-lg text-nextstep-blue">
              <span className="font-semibold">Students spend just 20-30 minutes per day</span> on focused practice, 
              making Next Step easy to fit into even the busiest schedules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
