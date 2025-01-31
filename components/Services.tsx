import React from 'react';
import { Button } from "@/components/ui/button";
import { Monitor, Globe, BarChart, ArrowRight, Check } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const ServiceCard = ({ icon, title, description, features, illustration }: any) => (
  <Card className="relative overflow-hidden transition-all hover:shadow-lg">
    <CardHeader>
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-lg text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature: any, index:any) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="h-48 w-full bg-primary/5 rounded-lg flex items-center justify-center mb-4">
        {illustration}
      </div>
      <Button className="w-full group">
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </CardContent>
  </Card>
);

export default function Services() {
  const services = [
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      title: "Business Automation",
      description: "Transform your workflow with intelligent automation solutions",
      features: [
        "Custom workflow automation",
        "Integration with existing tools",
        "Real-time monitoring",
        "Process optimization"
      ],
      illustration: (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <rect x="40" y="20" width="120" height="80" rx="4" fill="#e2e8f0"/>
          <rect x="50" y="30" width="100" height="10" rx="2" fill="#94a3b8"/>
          <rect x="50" y="50" width="40" height="40" rx="2" fill="#cbd5e1"/>
          <rect x="100" y="50" width="40" height="40" rx="2" fill="#cbd5e1"/>
          <path d="M70 70 L90 70 L80 90 Z" fill="#0ea5e9"/>
          <circle cx="120" cy="70" r="10" fill="#0ea5e9"/>
        </svg>
      )
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Website Development",
      description: "Create stunning, high-performance websites that convert",
      features: [
        "Responsive design",
        "SEO optimization",
        "Custom functionality",
        "Content management"
      ],
      illustration: (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <rect x="30" y="20" width="140" height="90" rx="4" fill="#e2e8f0"/>
          <rect x="40" y="30" width="120" height="15" rx="2" fill="#94a3b8"/>
          <rect x="40" y="55" width="50" height="45" rx="2" fill="#cbd5e1"/>
          <rect x="100" y="55" width="50" height="20" rx="2" fill="#cbd5e1"/>
          <rect x="100" y="80" width="50" height="20" rx="2" fill="#cbd5e1"/>
          <circle cx="65" cy="77" r="15" fill="#0ea5e9"/>
        </svg>
      )
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Analytics & Insights",
      description: "Make data-driven decisions with powerful analytics tools",
      features: [
        "Custom dashboards",
        "Performance tracking",
        "User behavior analysis",
        "Revenue insights"
      ],
      illustration: (
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <rect x="40" y="20" width="120" height="90" rx="4" fill="#e2e8f0"/>
          <path d="M50 100 L90 60 L130 80 L170 40" stroke="#0ea5e9" fill="none" strokeWidth="3"/>
          <circle cx="90" cy="60" r="4" fill="#0ea5e9"/>
          <circle cx="130" cy="80" r="4" fill="#0ea5e9"/>
          <rect x="50" y="30" width="30" height="60" rx="2" fill="#cbd5e1"/>
          <rect x="90" y="50" width="30" height="40" rx="2" fill="#cbd5e1"/>
          <rect x="130" y="40" width="30" height="50" rx="2" fill="#cbd5e1"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive solutions to transform your business and drive growth
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}