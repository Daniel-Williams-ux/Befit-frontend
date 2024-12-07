import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Step4() {
  const [goal, setGoal] = useState('');
  const router = useRouter();

  const handleGoalSelect = (selectedGoal) => {
    setGoal(selectedGoal);
  };

  const handleContinue = () => {
    // Navigate to the next step (Step 5)
    router.push('/5');
  };

  const handleBack = () => {
    // Navigate back to Step 3
    router.push('/3');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Step Section */}
      <div className="bg-white text-center mb-6 shadow-lg rounded-lg p-3 w-full max-w-lg sm:max-w-xl relative">
        <button
          onClick={handleBack}  // Back button logic
          className="absolute top-6 left-6 text-gray-600 text-sm font-archivoSemi"
        >
          ← Back
        </button>
        <p className="text-xs font-archivoSemi font-normal text-gray-600">STEP 4/5</p>
        <h1 className="text-sm font-medium font-archivoSemi text-black">Fitness goal</h1>
      </div>

      {/* Main Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg sm:max-w-xl space-y-6">
        {/* Title */}
        <h2 className="text-left text-xl font-bold font-archivoSemi text-formColor">What are you trying to achieve</h2>

        {/* Button Group for Fitness Goals */}
        <div className="grid grid-cols-2 gap-4">
          {['Flat Belly', 'Lose Weight', 'Gain Muscle', 'Build Abs', 'Stay fit', 'Others'].map((goalOption) => (
            <button
              key={goalOption}
              onClick={() => handleGoalSelect(goalOption)}
              className={`w-full py-2 rounded-full border-2 ${
                goal === goalOption ? 'bg-purple-600 text-white' : 'bg-white text-gray-600 border-gray-300'
              } text-sm font-semibold hover:bg-purple-700 hover:text-white`}
            >
              {goalOption}
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 text-center text-sm font-medium"
        >
          Continue →
        </button>
      </div>

      {/* Footer Text */}
      <div className="text-center w-full mt-6 text-sm text-blue-500 font-archivoSemi font-normal">
        You can create multiple community with the same email address
      </div>

      {/* Help Center */}
      <div className="text-left w-full mt-40">
        <a href="/help" className="text-sm text-helpColor font-archivoSemi font-normal hover:underline">
          * Help Center
        </a>
      </div>
    </div>
  );
}

export default Step4;