import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How much time do I need each week?",
      answer: "Gentheri is designed to save you time, not consume it. Most teams spend just 10-15 minutes per week reviewing AI-generated insights and reports. The platform works continuously in the background, so you only engage when needed.",
    },
    {
      question: "Do I need a tech or coding background?",
      answer: "Not at all. Gentheri is built for everyone, from technical teams to non-technical users. Our intuitive interface requires no coding knowledge. If you can use email, you can use Gentheri.",
    },
    {
      question: "What makes this better than free tutorials?",
      answer: "While tutorials are helpful, Gentheri provides real-time, actionable intelligence tailored to your specific business needs. Instead of generic advice, you get customized insights that directly impact your operations and decision-making.",
    },
    {
      question: "Can I take a break if life gets busy?",
      answer: "Absolutely. Gentheri continues working even when you're away. Your AI agents keep monitoring and gathering insights. When you return, everything is waiting for you, organized and ready to review.",
    },
    {
      question: "Will I get all course updates for free?",
      answer: "Early access members get exclusive benefits including priority access to new features, dedicated support, and the ability to influence our product roadmap. Your feedback directly shapes what we build next.",
    },
  ];

  return (
    <section className="py-32 px-6">
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
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Frequently Asked Questions.
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-900">
              <AccordionTrigger className="text-left hover:no-underline py-6" data-testid={`faq-question-${idx}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-6" data-testid={`faq-answer-${idx}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
