import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import checkAuth from '../utils/checkAuth';

function Step4() {
  const [goal, setGoal] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    const authenticateUser = async () => {
      const isAuthenticated = await checkAuth(); // Improved: Removed router.push from here
      if (!isAuthenticated) return;
    };
    authenticateUser();
  }, []);

  const handleContinue = async () => {
    if (!goal) {
      setError('Please select your fitness goal');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/step4`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ goal }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push('/5'); // Move to the next step (Step 5)
      } else {
        setError(data.message || 'Failed to save fitness goal');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white text-center mb-6 shadow-lg rounded-lg p-3 w-full max-w-lg sm:max-w-xl relative">
        <p className="text-xs font-archivoSemi font-normal text-helpColor">STEP 4/5</p>
        <h1 className="text-sm font-medium font-archivoSemi text-black">Fitness Goal</h1>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg sm:max-w-xl space-y-6">
        <h2 className="text-left text-xl font-bold font-dmSans text-formColor">Select your fitness goal</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Goal Options */}
        <div
          onClick={() => { setGoal('weight_loss'); setError(null); }} // Clear error when user selects goal
          className={`p-4 rounded-lg text-center ${goal === 'weight_loss' ? 'bg-questionColor text-white' : 'bg-inputBg text-formColor'}`}
        >
          Weight Loss
        </div>
        <div
          onClick={() => { setGoal('muscle_gain'); setError(null); }} // Clear error when user selects goal
          className={`p-4 rounded-lg text-center ${goal === 'muscle_gain' ? 'bg-questionColor text-white' : 'bg-inputBg text-formColor'}`}
        >
          Muscle Gain
        </div>
        <div
          onClick={() => { setGoal('maintain_fitness'); setError(null); }} // Clear error when user selects goal
          className={`p-4 rounded-lg text-center ${goal === 'maintain_fitness' ? 'bg-questionColor text-white' : 'bg-inputBg text-formColor'}`}
        >
          Maintain Fitness
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full bg-headerColor text-white py-3 rounded-full hover:bg-blue-700 text-center text-sm font-medium"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

export default Step4;