import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion" 
  
  const faqItems = [
    {
      question: "Does Shadcn UI Pro Affiliated with Shadcn or Shadcn/ui?",
      answer: "Yes, it is affiliated..." 
    },
    {
      question: "What is Shadcn UI Pro?",
      answer: "Shadcn UI Pro is..." 
    },
    {
      question: "What are the key features of Shadcn UI Pro?",
      answer: "The key features include..." 
    },
    {
      question: "Can Shadcn UI Pro be used for different screen sizes and devices?",
      answer: "Yes, Shadcn UI Pro is designed to be responsive..." 
    },
    {
      question: "Is it easy to customize the styles of Shadcn UI Pro?",
      answer: "Yes, customization is straightforward using Tailwind CSS..." 
    },
    {
      question: "Does Shadcn UI Pro support accessibility?",
      answer: "Accessibility is a core focus..." 
    },
    {
      question: "Will my application built with Shadcn UI Pro work on different browsers?",
      answer: "Yes, it aims for broad browser compatibility..." 
    },
    {
      question: "Does Shadcn UI Pro prioritize performance?",
      answer: "Performance is a key consideration..." 
    },
    {
      question: "Is Shadcn UI Pro suitable for beginners?",
      answer: "It can be suitable, especially if you are familiar with React and Tailwind..." 
    },
    {
      question: "What kind of support is available for Shadcn UI Pro?",
      answer: "Support options include..." 
    },
    {
      question: "Can I join a community of developers using Shadcn UI Pro?",
      answer: "Yes, there are communities available..." 
    },
  ];
  
  export function FaqSection() {
    return (
      <section className="w-full  "> 
        <div className=" px-4 md:px-6 mt-10">
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl mb-8 md:mb-12">
            FAQ
          </h2>
          <div className=" mx-auto"> 
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-left hover:no-underline"> {/* Added text-left */}
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400"> {/* Adjusted answer text color */}
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }
  
  export default FaqSection;