import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import checkAuth from '../utils/checkAuth';

function Step6() {
  const [country, setCountry] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    const authenticateUser = async () => {
      const isAuthenticated = await checkAuth(); // Improved: handle redirection inside checkAuth
      if (!isAuthenticated) return;
    };
    authenticateUser();
  }, []);

  const handleContinue = async () => {
    if (!country) {
      setError('Please enter your country');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/step6`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ country }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push('/dashboard'); // Redirect to the dashboard (end of onboarding)
      } else {
        setError(data.message || 'Failed to save country');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white text-center mb-6 shadow-lg rounded-lg p-3 w-full max-w-lg sm:max-w-xl relative">
        <p className="text-xs font-archivoSemi font-normal text-helpColor">STEP 6/6</p>
        <h1 className="text-sm font-medium font-archivoSemi text-black">Country</h1>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg sm:max-w-xl space-y-6">
        <h2 className="text-left text-xl font-bold font-dmSans text-formColor">Enter your country</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setError(null); // Clear error when user types
          }}
          className="w-full p-3 rounded-lg bg-inputBg text-formColor"
        />

        <button
          onClick={handleContinue}
          className="w-full bg-headerColor text-white py-3 rounded-full hover:bg-blue-700 text-center text-sm font-medium"
        >
          Finish →
        </button>
      </div>
    </div>
  );
}

export default Step6;
