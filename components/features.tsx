import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Smartphone, Zap, Search, Sparkles, HeadphonesIcon, RefreshCw } from "lucide-react";

const FeatureCard = ({ icon, title, description }: {icon: any, title: any, description: any}) => (
  <Card className="group transition-all duration-300 hover:shadow-lg">
    <CardHeader>
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default function Features() {
  const features = [
    {
      title: "Responsive Design",
      description: "Our websites look great on any device, from mobile to desktop.",
      icon: <Smartphone className="w-6 h-6 text-primary" />,
    },
    {
      title: "Fast Performance",
      description: "Lightning-fast load times for an optimal user experience.",
      icon: <Zap className="w-6 h-6 text-primary" />,
    },
    {
      title: "SEO Optimized",
      description: "Built-in SEO features to help your site rank higher in search results.",
      icon: <Search className="w-6 h-6 text-primary" />,
    },
    {
      title: "Custom Animations",
      description: "Engage your visitors with smooth, custom animations.",
      icon: <Sparkles className="w-6 h-6 text-primary" />,
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to assist you whenever you need help.",
      icon: <HeadphonesIcon className="w-6 h-6 text-primary" />,
    },
    {
      title: "Regular Updates",
      description: "Stay current with regular updates and new features.",
      icon: <RefreshCw className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}