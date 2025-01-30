"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "What is included in the free trial?",
      answer: "Our free trial includes full access to all features for 14 days. You can create projects, invite team members, and explore all the tools we offer."
    },
    {
      question: "How does billing work?",
      answer: "We offer monthly and annual billing options. You can choose the plan that works best for you. Annual plans come with a discount."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Is there a limit to how many projects I can create?",
      answer: "The number of projects you can create depends on your plan. Our Enterprise plan offers unlimited projects."
    },
    {
      question: "Do you offer discounts for non-profits or educational institutions?",
      answer: "Yes, we offer special pricing for non-profits and educational institutions. Please contact our sales team for more information."
    }
  ]

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
