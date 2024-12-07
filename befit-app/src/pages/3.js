import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Step3() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    // Navigate to the next step (Step 4)
    router.push('/4');
  };

  const handleBack = () => {
    // Navigate back to Step 2
    router.push('/2');
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
        <p className="text-xs font-archivoSemi font-normal text-gray-600">STEP 3/5</p>
        <h1 className="text-sm font-medium font-archivoSemi text-black">Onboarding</h1>
      </div>

      {/* Main Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg sm:max-w-xl space-y-6">
        {/* Title */}
        <h2 className="text-left text-xl font-bold font-archivoSemi text-formColor">Enter your age</h2>

        {/* Input Fields */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-normal text-formColor" htmlFor="age">
              Enter your age here
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              className="w-full p-3 border border-gray-300 text-xs text-headerColor font-archivoSemi rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-normal text-formColor" htmlFor="height">
              Enter your height here
            </label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
              className="w-full p-3 border border-gray-300 text-xs text-headerColor font-archivoSemi rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-normal text-formColor" htmlFor="weight">
              Enter your weight here
            </label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
              className="w-full p-3 border border-gray-300 text-xs text-headerColor font-archivoSemi rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
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

export default Step3;
