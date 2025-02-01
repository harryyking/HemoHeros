import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  PhoneCall, 
  ClipboardList, 
  PenTool, 
  Rocket,
  ArrowRight,
  Check,
  Calendar
} from "lucide-react";
import Link from 'next/link';

const ProcessStep = ({ icon, number, title, description, details }: any) => (
  <Card className="relative h-full">
    <CardContent className="pt-6">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <div className="mt-4 text-center mb-4">
        <div className="mb-4 flex justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="text-sm text-left space-y-2">
          {details.map((detail: any, index: any) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);

export default function HowItWorks() {
  const steps = [
    {
      icon: <PhoneCall className="w-8 h-8 text-primary" />,
      number: "1",
      title: "Discovery Call",
      description: "Book a free consultation to discuss your needs",
      details: [
        "30-minute in-depth discussion",
        "Understanding your business goals",
        "Initial requirements gathering",
        "Budget and timeline planning"
      ]
    },
    {
      icon: <PenTool className="w-8 h-8 text-primary" />,
      number: "2",
      title: "Design & Planning",
      description: "We create a tailored solution for your business",
      details: [
        "Detailed project scope",
        "Custom solution design",
        "Timeline establishment",
        "Resource allocation"
      ]
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-primary" />,
      number: "3",
      title: "Development",
      description: "We build your solution with regular updates",
      details: [
        "Agile development process",
        "Regular progress updates",
        "Quality assurance testing",
        "Feedback integration"
      ]
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      number: "4",
      title: "Launch & Support",
      description: "Go live with full support and guaranteed results",
      details: [
        "Smooth deployment",
        "Staff training",
        "Post-launch support",
        "Performance monitoring"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How We Transform Your Business</h2>
          <p className="text-xl text-muted-foreground">
            A simple, proven process to bring your vision to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <ProcessStep {...step} />
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="text-center">
          <Link href="/book">
          <Button 
            size="lg" >
            Schedule Your Free Consultation
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}