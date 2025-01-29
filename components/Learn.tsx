"use client"
import React, { useState } from 'react';
import { Droplet, AlertCircle, Check, ChevronRight, ChevronLeft } from 'lucide-react';

const BloodTypeEducation = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Understanding Blood Groups",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">The Four Main Blood Groups</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['A', 'B', 'AB', 'O'].map((type) => (
              <div key={type} className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
                <div className="card-body items-center text-center p-6">
                  <div className="flex items-center space-x-2">
                    <Droplet className="text-error" />
                    <span className="text-2xl font-bold">{type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="alert alert-info">
            <span>Blood groups are determined by specific antigens on red blood cells.</span>
          </div>
        </div>
      )
    },
    {
      title: "The Rh Factor",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Positive vs Negative</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center space-x-2">
                  <Check className="text-success" />
                  <h3 className="card-title">Positive (+)</h3>
                </div>
                <p>Has Rh antigen present on red blood cells</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="text-info" />
                  <h3 className="card-title">Negative (-)</h3>
                </div>
                <p>No Rh antigen on red blood cells</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The 8 Blood Types",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Complete Blood Type Classification</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((type) => (
              <div key={type} className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
                <div className="card-body items-center text-center p-6">
                  <div className="flex items-center space-x-2">
                    <Droplet className={type.includes('+') ? 'text-error' : 'text-info'} />
                    <span className="text-2xl font-bold">{type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Universal Donor & Recipient",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Special Blood Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
              <div className="card-body items-center text-center">
                <h3 className="card-title">O Negative (O-)</h3>
                <div className="badge badge-success">Universal Donor</div>
                <div className="my-4">
                  <Droplet className="w-16 h-16 text-success animate-pulse" />
                </div>
                <p>Can donate to all blood types</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
              <div className="card-body items-center text-center">
                <h3 className="card-title">AB Positive (AB+)</h3>
                <div className="badge badge-primary">Universal Recipient</div>
                <div className="my-4">
                  <Droplet className="w-16 h-16 text-primary animate-pulse" />
                </div>
                <p>Can receive from all blood types</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="card bg-base-100 shadow-xl w-full max-w-4xl">
      <div className="card-body p-6">
        <div className="space-y-8">
          {/* Progress bar */}
          <progress 
            className="progress progress-primary w-full"
            value={(currentStep + 1)} 
            max={steps.length}
          />

          {/* Content */}
          <div className="min-h-[400px] flex flex-col justify-between">
            <div className="animate-fadeIn">
              {steps[currentStep].content}
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                disabled={currentStep === 0}
                className="btn btn-ghost btn-sm gap-2"
              >
                <ChevronLeft />
                Previous
              </button>
              <span className="text-base-content opacity-70">
                {currentStep + 1} / {steps.length}
              </span>
              <button
                onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
                disabled={currentStep === steps.length - 1}
                className="btn btn-ghost btn-sm gap-2"
              >
                Next
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodTypeEducation;