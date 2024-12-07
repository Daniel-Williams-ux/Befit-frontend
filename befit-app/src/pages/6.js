import React from 'react';
import { useRouter } from 'next/router';

function Step5() {
  const router = useRouter();

  const handleSkip = () => {
    // Logic for skipping or redirecting to another page
    router.push('/dashboard'); // Replace with the appropriate page after skipping
  };

  const handleContinue = () => {
    // Logic for continuing
    router.push('/dashboard'); // Replace with the appropriate page after finishing
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">

      {/* Main Content Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg sm:max-w-xl space-y-6">
        {/* Title */}
        <h3 className="text-lg text-left font-bold font-archivoSemi text-formColor">
          What country do you live in?
        </h3>
        {/* Subtext */}
        <p className="text-sm text-formColor font-archivoSemi text-left">
          This helps us understand you better and provide personalized recommendations.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-6">
          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="text-xs font-medium font-archivoSemi text-gray-600 hover:underline focus:outline-none"
          >
            No, skip
          </button>
          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="bg-headerColor text-white py-3 px-6 rounded-full text-sm font-medium hover:bg-purple-700 focus:outline-none"
          >
            Yes, Let’s go →
          </button>
        </div>
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
