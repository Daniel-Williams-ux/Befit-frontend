import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Step5() {
  const [selectedlifestyle, setSelectedlifestyle] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    // Navigate to the next step (Step 3)
    router.push('/6');
  };

  const handleBack = () => {
    // Navigate back to Step 1
    router.push('/4');
  };

  const handlelifestyleChange = (e) => {
    setSelectedlifestyle(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Step Section */}
      <div className="bg-white text-center mt-10 shadow-lg rounded-lg p-3 w-full max-w-lg sm:max-w-xl relative">
        <button
          onClick={handleBack}  // Back button logic
          className="absolute top-6 left-6 text-gray-600 text-sm font-archivoSemi"
        >
          ← Back
        </button>
        <p className="text-xs font-archivoSemi font-normal text-gray-600">STEP 5/5</p>
        <h1 className="text-sm font-medium font-archivoSemi text-black">Gender</h1>
      </div>

      {/* Main Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg sm:max-w-xl space-y-6">
        {/* Title */}
        <h2 className="text-center text-xl font-bold font-archivoSemi text-formColor">How would you describe your lifestyle over the past 3 months?</h2>

        {/* Gender Selection */}
        <div className="space-y-4">
          <div
            onClick={() => setSelectedlifestyle('sedentary (little or no exercise)')}  // Handle selection
            className={`p-4 cursor-pointer rounded-lg text-center font-archivoSemi ${selectedlifestyle === 'sedentary (little or no exercise)' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-formColor'} `}
          >
           Sedentary (little or no exercise)
          </div>
          <div
            onClick={() => setSelectedlifestyle('lightly active (exercise 1–3 days/week)')}  // Handle selection
            className={`p-4 cursor-pointer rounded-lg text-center font-archivoSemi ${selectedlifestyle === 'lightly active (exercise 1–3 days/week)' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-formColor'} `}
          >
            Lightly active (exercise 1–3 days/week)
          </div>
          <div
            onClick={() => setSelectedlifestyle('moderately active (exercise 3–5 days/week)')}  // Handle selection
            className={`p-4 cursor-pointer rounded-lg text-center font-archivoSemi ${selectedlifestyle === 'moderately active (exercise 3–5 days/week)' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-formColor'} `}
          >
            Moderately active (exercise 3–5 days/week)
          </div>
          <div
            onClick={() => setSelectedlifestyle('active (exercise 6–7 days/week)')}  // Handle selection
            className={`p-4 cursor-pointer rounded-lg text-center font-archivoSemi ${selectedlifestyle === 'active (exercise 6–7 days/week)' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-formColor'} `}
          >
            Active (exercise 6–7 days/week)
          </div>
          <div
            onClick={() => setSelectedlifestyle('very active (hard exercise 6–7 days/week)')}  // Handle selection
            className={`p-4 cursor-pointer rounded-lg text-center font-archivoSemi ${selectedlifestyle === 'very active (hard exercise 6–7 days/week)' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-formColor'} `}
          >
            Very active (hard exercise 6–7 days/week)
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

      {/* Help Center */}
      <div className="text-left w-full mt-40">
        <a href="/help" className="text-sm text-helpColor font-archivoSemi font-normal hover:underline">
          * Help Center
        </a>
      </div>
    </div>
  );
}

export default Step5;