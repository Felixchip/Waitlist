import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import patternBg from "@assets/pattern-BG_1763167873077.jpg";
import faqCircles from "@assets/image_1763299180575.png";

export default function FAQ() {
  const faqs = [
    {
      question: "How much time do I need each week?",
      answer: "Loyalist is designed to save you time, not consume it. Most teams spend just 10-15 minutes per week reviewing AI-generated insights and reports. The platform works continuously in the background, so you only engage when needed.",
    },
    {
      question: "Do I need a tech or coding background?",
      answer: "Not at all. Loyalist is built for everyone, from technical teams to non-technical users. Our intuitive interface requires no coding knowledge. If you can use email, you can use Loyalist.",
    },
    {
      question: "What makes this better than free tutorials?",
      answer: "While tutorials are helpful, Loyalist provides real-time, actionable intelligence tailored to your specific business needs. Instead of generic advice, you get customized insights that directly impact your operations and decision-making.",
    },
    {
      question: "Can I take a break if life gets busy?",
      answer: "Absolutely. Loyalist continues working even when you're away. Your AI agents keep monitoring and gathering insights. When you return, everything is waiting for you, organized and ready to review.",
    },
    {
      question: "Will I get all course updates for free?",
      answer: "Early access members get exclusive benefits including priority access to new features, dedicated support, and the ability to influence our product roadmap. Your feedback directly shapes what we build next.",
    },
  ];

  return (
    <section className="py-32 px-6" style={{ backgroundImage: `url(${patternBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="container mx-auto max-w-3xl">
        <div className="flex justify-center mb-6">
          <div 
            className="px-3 py-1.5 text-xs tracking-wider text-white rounded-full backdrop-blur-sm"
            style={{
              background: 'linear-gradient(103deg, #0a0913 0%, rgb(17, 8, 34) 8.75%, rgb(41, 15, 101) 24.32%, rgb(61, 72, 161) 38.77%, rgb(74, 120, 195) 54.74%, rgba(92, 145, 207, 0.7) 66%, rgba(250, 249, 254, 0.5) 83.78%, rgb(209, 214, 226) 100%)',
            }}
            data-testid="badge-faq"
          >
            FAQs
          </div>
        </div>
        
        <div className="relative flex items-center justify-center mb-16">
          <img 
            src={faqCircles} 
            alt="" 
            className="w-full max-w-[720px] h-auto"
          />
          <h2 className="absolute text-[64px] font-display font-medium text-center max-w-4xl leading-[64px]">
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-white bg-clip-text text-transparent">
              Frequently Asked<br />
              Questions.
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl border-0"
              style={{ backgroundColor: '#181725' }}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${idx}`} className="border-0">
                  <AccordionTrigger className="text-left hover:no-underline py-2" data-testid={`faq-question-${idx}`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pt-2" data-testid={`faq-answer-${idx}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
