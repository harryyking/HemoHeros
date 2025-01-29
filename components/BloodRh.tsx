"use client"
import React, { useState, useEffect } from 'react';
import { Droplet, Plus } from 'lucide-react';

// Define types
type BloodGroup = 'A' | 'B' | 'AB' | 'O';

interface BloodTypeCombinationProps {}

const BloodTypeCombination: React.FC<BloodTypeCombinationProps> = () => {
  const [showRhCombination, setShowRhCombination] = useState(false);
  const [currentGroup, setCurrentGroup] = useState<BloodGroup>('A');
  const [isAnimating, setIsAnimating] = useState(true);

  const bloodGroups: BloodGroup[] = ['A', 'B', 'AB', 'O'];

  useEffect(() => {
    if (isAnimating) {
      const timer = setInterval(() => {
        setCurrentGroup((prev: BloodGroup): BloodGroup => {
          const index = bloodGroups.indexOf(prev);
          return bloodGroups[(index + 1) % bloodGroups.length];
        });
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isAnimating]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRhCombination(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getBloodTypeColor = (type: BloodGroup): string => {
    const colors: Record<BloodGroup, string> = {
      'A': 'bg-red-500',
      'B': 'bg-blue-500',
      'AB': 'bg-purple-500',
      'O': 'bg-green-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  return (
    <div className="card bg-base-100 shadow-xl w-full max-w-4xl">
      <div className="card-body p-6">
        <h2 className="card-title text-2xl mb-6">Blood Type Formation</h2>
        
        {/* Animation Container */}
        <div className="flex flex-col items-center space-y-12">
          {/* Blood Group + Rh Factor Combination */}
          <div className="flex items-center justify-center space-x-8">
            {/* Blood Group */}
            <div className={`card ${getBloodTypeColor(currentGroup)} text-white p-6 transform transition-all duration-500 hover:scale-105`}>
              <div className="flex items-center space-x-2">
                <Droplet className="w-6 h-6" />
                <span className="text-2xl font-bold">{currentGroup}</span>
              </div>
            </div>

            {/* Plus Sign */}
            <Plus className={`w-8 h-8 ${showRhCombination ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`} />

            {/* Rh Factor */}
            <div className={`card bg-yellow-500 text-white p-6 transform transition-all duration-500 ${showRhCombination ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'} hover:scale-105`}>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold">Rh</span>
                <span className="text-2xl font-bold">+/-</span>
              </div>
            </div>
          </div>

          {/* Result Arrow */}
          <div className={`transform ${showRhCombination ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-500 delay-300`}>
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-base-content border-l-transparent border-r-transparent mx-auto" />
          </div>

          {/* Results Grid */}
          <div className={`grid grid-cols-2 gap-4 w-full ${showRhCombination ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-500 delay-500`}>
            {/* Positive Result */}
            <div className={`card ${getBloodTypeColor(currentGroup)} text-white p-6 transform hover:scale-105`}>
              <div className="flex items-center justify-center space-x-2">
                <Droplet className="w-6 h-6" />
                <span className="text-2xl font-bold">{currentGroup}+</span>
              </div>
            </div>

            {/* Negative Result */}
            <div className={`card ${getBloodTypeColor(currentGroup)} text-white p-6 transform hover:scale-105 opacity-80`}>
              <div className="flex items-center justify-center space-x-2">
                <Droplet className="w-6 h-6" />
                <span className="text-2xl font-bold">{currentGroup}-</span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center mt-8">
          <button 
            className="btn btn-primary"
            onClick={() => setIsAnimating(!isAnimating)}
          >
            {isAnimating ? 'Pause Animation' : 'Resume Animation'}
          </button>
        </div>

        {/* Legend */}
        <div className="alert alert-info mt-6">
          <div>
            <span className="font-bold">How it works: </span>
            Each blood group (A, B, AB, O) combines with the Rh factor to create positive and negative versions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodTypeCombination;