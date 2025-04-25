
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const Results = () => {
  const testimonials = [
    {
      quote: "My daughter's SAT score improved by 180 points after just 6 weeks. The weekly updates kept me informed of her progress the entire time.",
      author: "Sarah M.",
      role: "Parent of 11th Grader",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&auto=format&fit=crop&q=60"
    },
    {
      quote: "As a busy parent, I appreciate how Next Step handles everything. My son enjoys the voice interaction, and I can see his confidence growing each week.",
      author: "David T.",
      role: "Parent of 12th Grader",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&auto=format&fit=crop&q=60"
    },
    {
      quote: "Worth every penny! My twins both improved their scores by over 200 points, which opened doors to scholarships we never thought possible.",
      author: "Jennifer L.",
      role: "Parent of 12th Grade Twins",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&auto=format&fit=crop&q=60"
    }
  ];

  const faqs = [
    {
      question: "How does AI tutoring compare to human tutoring?",
      answer: "Our AI tutoring adapts to each student's learning style and pace, providing personalized instruction 24/7. While human tutors are limited by availability and consistency, our AI platform offers unlimited practice, immediate feedback, and data-driven adjustments to maximize score improvements."
    },
    {
      question: "How much time should my student spend on the platform?",
      answer: "Most students see optimal results with 20-30 minutes of focused practice 4-5 days per week. The platform is designed for efficient learning, eliminating wasted time and focusing only on the areas where your student needs the most improvement."
    },
    {
      question: "What kind of score improvements can we expect?",
      answer: "Students who consistently use Next Step for at least one month typically see score improvements of 100-250 points, depending on their starting level and practice consistency. Our adaptive technology focuses on the specific areas that will have the biggest impact on their overall score."
    },
    {
      question: "Can I track my student's progress?",
      answer: "Yes! Parents receive detailed weekly email reports showing exactly what skills your student has mastered, areas they're working on, and overall progress toward their target score. You can also log in anytime to view real-time progress updates."
    }
  ];

  return (
    <section className="py-16 md:py-24" id="results">
      <div className="container mx-auto px-4 md:px-6">
        {/* Results */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Our students consistently see score improvements of 100-250 points
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-nextstep-orange/10 p-8 rounded-xl">
              <div className="text-4xl font-bold text-nextstep-orange mb-2">100+</div>
              <div className="text-gray-700">point average improvement</div>
            </div>
            <div className="bg-nextstep-blue/10 p-8 rounded-xl">
              <div className="text-4xl font-bold text-nextstep-blue mb-2">30+</div>
              <div className="text-gray-700">days of consistent practice</div>
            </div>
            <div className="bg-nextstep-orange/10 p-8 rounded-xl">
              <div className="text-4xl font-bold text-nextstep-orange mb-2">89%</div>
              <div className="text-gray-700">of students reach their target score</div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12">
            What Parents Are Saying
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="italic text-gray-700">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQs */}
        <div id="faq">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-gray-800">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
