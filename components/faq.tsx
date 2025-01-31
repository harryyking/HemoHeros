



export default function FAQ() {
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

  return (
    <div className="flex flex-col items-center py-24 sm:py-32 text-center">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="w-full space-y-2">
          
            <div className="collapse collapse-plus bg-base-200 border">
              <input
                type="radio"
                name="my-accordion-3"
                
              />
              <div className="collapse-title text-lg font-medium">What is included in the free trial?</div>
              <div className="collapse-content">
                <p>Our free trial includes full access to all features for 14 days. You can create projects, invite team members, and explore all the tools we offer.</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-200 border">
              <input
                type="radio"
                name="my-accordion-3"
                
              />
              <div className="collapse-title text-lg font-medium">How does billing work?</div>
              <div className="collapse-content">
                <p>Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes will be reflected in your next billing cycle.</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-200 border">
              <input
                type="radio"
                name="my-accordion-3"
                
              />
              <div className="collapse-title text-lg font-medium">Can I change my plan later?</div>
              <div className="collapse-content">
                <p>Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes will be reflected in your next billing cycle.</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-200 border">
              <input
                type="radio"
                name="my-accordion-3"
                
              />
              <div className="collapse-title text-lg font-medium">Is there a limit to how many projects I can create?</div>
              <div className="collapse-content">
                <p>The number of projects you can create depends on your plan. Our Enterprise plan offers unlimited projects..</p>
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-200 border">
              <input
                type="radio"
                name="my-accordion-3"
                
              />
              <div className="collapse-title text-lg font-medium">Do you offer discounts for non-profits or educational institutions?</div>
              <div className="collapse-content">
                <p>Yes, we offer special pricing for non-profits and educational institutions. Please contact our sales team for more information.</p>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}
