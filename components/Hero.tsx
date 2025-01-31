"use client";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="hero min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-4xl">
      <h1 className="lg:text-5xl text-3xl font-bold">Transform your business with Smart Automation & Analytics</h1>
      <p className="py-6">
      Launch, Automate, and Grow <br />
       Get a branded website, custom automation workflows, 
      and real-time business analytics tailored to your needs.
       Streamline operations, boost efficiency, and scale effortlessly.
      </p>
      <Button size={"lg"}>Book A Call</Button>
    </div>
  </div>
</div>
  );
}