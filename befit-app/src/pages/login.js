import React, { useState } from 'react';
import { useRouter } from 'next/router';  // Import useRouter for navigation
import Image from 'next/image';
import GoogleImage from '/public/images/google-icon.png';

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();  // Initialize useRouter

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  // Handle continue button click to navigate to Step 2
  const handleContinue = () => {
    router.push('/2');  // Navigate to Step 2 (2.js)
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Step Section */}
      <div className="bg-white text-center mb-6 shadow-lg rounded-lg p-3 w-full max-w-lg sm:max-w-xl">
        <p className="text-xs font-archivoSemi font-normal text-gray-600">STEP 1/5</p>
        <h1 className="text-sm font-medium font-archivoSemi text-black">Authentication</h1>
      </div>

      {/* Main Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg sm:max-w-xl space-y-6">
        {/* Title */}
        <h2 className="text-left text-xl font-bold font-archivoSemi text-formColor">Let’s get you in</h2>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="text-sm font-normal text-formColor" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 text-xs text-headerColor font-archivoSemi rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label className="text-sm font-normal text-formColor" htmlFor="password">
            Password
          </label>
          <div className="flex items-center w-full border border-gray-300 rounded-lg">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              placeholder="••••••••••••"
              className="w-full p-3 focus:ring-2 text-xs text-headerColor font-archivoSemi focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="p-3 text-headerColor font-archivoSemi text-sm text-nowrap font-normal hover:underline"
            >
              {passwordVisible ? 'Hide Password' : 'Reveal Password'}
            </button>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}  // Handle click to navigate to next step
          className="w-full bg-headerColor text-white py-3 rounded-full hover:bg-blue-700 text-center text-sm font-medium"
        >
          Continue →
        </button>
      </div>

      {/* Continue with Google */}
      <a
        href="/api/auth/google"
        className="bg-white max-w-lg sm:max-w-xl flex items-center justify-center mt-6 space-x-2 shadow-lg rounded-lg p-3 w-full"
      >
        <Image src={GoogleImage} alt="Google" className="w-6 h-6" />
        <p className="text-base font-archivoSemi font-medium text-formColor">Continue with Google</p>
      </a>

      {/* Help Center */}
      <div className="text-left w-full mt-40">
        <a href="/help" className="text-sm text-helpColor font-archivoSemi font-normal hover:underline">
          * Help Center
        </a>
      </div>
    </div>
  );
}

export default LoginPage;