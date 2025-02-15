import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/accordion";
import Heading from "@/components/shared/heading";
import { faqData } from "@/constants/data/index";

function FAQSection() {
  return (
    <section className="py-8 md:py-16 space-y-6 md:space-y-9 px-4 sm:px-6 md:px-8">
      <Heading
        accent="Learn About Us"
        heading1="We’ve created the res"
        heading2="help you thrive."
        center
      />
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 md:gap-x-7">
        <Accordion type="single" collapsible className="w-full">
          {faqData.slice(0, 3).map((item, index) => (
            <AccordionItem key={item.id} value={item.id}>
              <div className="rounded-full bg-white px-4 md:px-8 border mb-2">
                <AccordionTrigger className="text-left font-body text-sm md:text-lg hover:no-underline">
                  <div className="flex items-center gap-2 md:gap-4">
                    <span className="text-primary font-bold text-sm md:text-base">
                      0{index + 1}
                    </span>
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm md:text-base">
                  {item.answer}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          {faqData.slice(3, 6).map((item, index) => (
            <AccordionItem key={item.id} value={item.id}>
              <div className="rounded-full bg-white px-4 md:px-8 border mb-2">
                <AccordionTrigger className="text-left font-body text-sm md:text-lg hover:no-underline">
                  <div className="flex items-center gap-2 md:gap-4">
                    <span className="text-primary font-bold text-sm md:text-base">
                      0{index + 1}
                    </span>
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm md:text-base">
                  {item.answer}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQSection;
