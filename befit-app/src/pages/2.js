import React, { useState } from 'react';
import { useRouter } from 'next/router';

function Step2() {
  const [selectedGender, setSelectedGender] = useState('');
  const router = useRouter();

  const handleContinue = () => {
    // Navigate to the next step (Step 3)
    router.push('/3');
  };

  const handleBack = () => {
    // Navigate back to Step 1
    router.push('/login');
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
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
        <p className="text-xs font-archivoSemi font-normal text-helpColor">STEP 2/5</p>
        <h1 className="text-sm font-medium font-archivoSemi text-black">Gender</h1>
      </div>

      {/* Main Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg sm:max-w-xl space-y-6">
        {/* Title */}
        <h2 className="text-left text-xl font-bold font-dmSans text-formColor">Tell us your gender</h2>

        {/* Gender Selection */}
        <div className="space-y-4">
          <div
            onClick={() => setSelectedGender('male')}  // Handle selection
            className={`p-4 cursor-pointer rounded-lg text-center font-dmSans ${selectedGender === 'male' ? 'bg-questionColor text-white' : 'bg-inputBg text-formColor'} `}
          >
            Male
          </div>
          <div
            onClick={() => setSelectedGender('female')}  // Handle selection
            className={`p-4 cursor-pointer  rounded-lg text-center font-dmSans ${selectedGender === 'female' ? 'bg-questionColor text-white' : 'bg-inputBg text-formColor'} `}
          >
            Female
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full bg-headerColor text-white py-3 rounded-full hover:hover:bg-blue-700 text-center text-sm font-medium"
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

export default Step2;