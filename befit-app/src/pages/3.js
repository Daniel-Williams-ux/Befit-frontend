import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import checkAuth from '../utils/checkAuth';

function Step3() {
  const [formData, setFormData] = useState({ age: '', height: '', weight: '' });
  const [error, setError] = useState(null);
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    const authenticateUser = async () => {
      const isAuthenticated = await checkAuth();
      if (!isAuthenticated) {
        router.replace('/login'); // Redirect to login if not authenticated
      }
    };
    authenticateUser();
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null); // Clear error when input changes
  };

  const handleContinue = async () => {
    const { age, height, weight } = formData;

    // Validate that all fields are filled out
    if (!age || !height || !weight) {
      setError('All fields are required');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/step3`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ age, height, weight }),
      });

      const data = await res.json();

      if (res.ok) {
        setError(null); // Clear any previous error before navigation
        router.push('/4'); // Move to the next step (Step 4)
      } else {
        setError(data.message || 'Failed to save details');
      }
    } catch (err) {
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white text-center mb-6 shadow-lg rounded-lg p-3 w-full max-w-lg sm:max-w-xl relative">
        <p className="text-xs font-archivoSemi font-normal text-helpColor">STEP 3/5</p>
        <h1 className="text-sm font-medium font-archivoSemi text-black">Profile Details</h1>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg sm:max-w-xl space-y-6">
        <h2 className="text-left text-xl font-bold font-dmSans text-formColor">Enter your details</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          name="age"
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={handleInputChange}
          className="w-full p-3 rounded-lg bg-inputBg text-formColor"
        />
        <input
          name="height"
          type="number"
          placeholder="Height (in cm)"
          value={formData.height}
          onChange={handleInputChange}
          className="w-full p-3 rounded-lg bg-inputBg text-formColor"
        />
        <input
          name="weight"
          type="number"
          placeholder="Weight (in kg)"
          value={formData.weight}
          onChange={handleInputChange}
          className="w-full p-3 rounded-lg bg-inputBg text-formColor"
        />

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

export default Step3;