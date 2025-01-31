"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs = [
  {
    question: "What is included in the free trial?",
    answer:
      "Our free trial includes full access to all features for 14 days. You can create projects, invite team members, and explore all the tools we offer.",
  },
  {
    question: "How does billing work?",
    answer:
      "We offer monthly and annual billing options. You can choose the plan that works best for you. Annual plans come with a discount.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "Is there a limit to how many projects I can create?",
    answer:
      "The number of projects you can create depends on your plan. Our Enterprise plan offers unlimited projects.",
  },
  {
    question: "Do you offer discounts for non-profits or educational institutions?",
    answer:
      "Yes, we offer special pricing for non-profits and educational institutions. Please contact our sales team for more information.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center py-24 sm:py-32 bg-black">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-2 w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-plus bg-base-100 join-item border border-base-200">
              <input
                type="checkbox"
                checked={openIndex === index}
                onChange={() => toggleAccordion(index)}
              />
              <div className="collapse-title text-lg font-medium">{faq.question}</div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
