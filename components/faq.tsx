"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs = [
  {
    question: "What services does your agency provide?",
    answer:
      "We specialize in custom software development, web and mobile app development, UI/UX design, cloud solutions, and software maintenance. We also offer consulting services to help businesses optimize their digital presence",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work with a wide range of industries, including healthcare, e-commerce, fintech, real estate, education, and logistics. Our team adapts to industry-specific needs to deliver tailored software solutions.",
  },
  {
    question: "How do I get started with your agency?",
    answer:
      "You can start by booking a free consultation with our team. We’ll discuss your project requirements, goals, and budget, and provide recommendations on the best approach.",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "The cost depends on factors like project scope, complexity, technology stack, and timeline. We provide a detailed quote after understanding your requirements.",
  },
  {
    question: "Do you require an upfront payment?",
    answer:
      "Yes, we typically require an initial deposit before starting the project. The remaining payments are structured in milestones.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center py-24 sm:py-32 px-2">
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-plus bg-gray-50 join-item border border-gray-100 rounded">
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
