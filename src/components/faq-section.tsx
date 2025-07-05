"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "What are your fees?",
      answer: "My fees are $200 for individual, $240 for couple.",
    },
    {
      question: "Do you take insurance?",
      answer: "No, but a superbill is provided for self-submission.",
    },
    {
      question: "Are online sessions available?",
      answer: " Yes all virtual sessions via Zoom.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required.",
    },
    {
      question: "What geographic areas do you serve?",
      answer: "I serve clients in Maplewood Drive, Los Angeles, and online clients from anywhere.",
    }
  ];

  return (
    <section id="faqs" className="bg-[#c2e8e9] py-12 md:py-20 px-4 md:px-10 lg:px-24">
      <div className="w-full">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>

        {/* Accordion for FAQs */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-300 py-4"
            >
              <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 hover:no-underline py-3">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base md:text-lg lg:text-xl py-2 pr-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
