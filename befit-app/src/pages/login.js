import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import GoogleImage from "/public/images/google-icon.png";
import { GoogleLogin } from "react-google-login";

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleGoogleLogin = async (googleData) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/google/callback`,
        {
          method: "POST",
          body: JSON.stringify({ token: googleData.tokenId }),
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        router.push("/2");
      } else {
        setError(data.message || "Authentication failed");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    }
  };

  const handleContinue = async () => {
    setIsLoading(true); // Start loading
    try {
      setError(null); // Clear previous errors

      const response = await fetch("http://localhost:5001/api/auth/login", {
        // Ensure the URL matches the backend route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        router.push("/2"); // Proceed to the next step
      } else {
        setError(
          data.message || "Invalid email or password. Please try again."
        );
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false); // End loading
    }
  };

  // UseEffect to check token validity when the page loads or the user logs in
  useEffect(() => {
    checkAuth();
  }, []); // Empty dependency array to run only once when component mounts

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage

      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await fetch(
        "http://localhost:5001/api/auth/check-token",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Token is valid:", data); // Token is valid
      } else {
        console.error("Token validation failed:", response.statusText);
        localStorage.removeItem("token"); // Optional: Remove token if invalid
      }
    } catch (error) {
      console.error("An error occurred while checking token:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Step Section */}
      <div className="bg-white text-center mb-6 shadow-lg rounded-lg p-3 w-full max-w-lg sm:max-w-xl">
        <p className="text-xs font-archivoSemi font-normal text-helpColor">
          STEP 1/5
        </p>
        <h1 className="text-sm font-medium font-archivoSemi text-black">
          Authentication
        </h1>
      </div>

      {/* Main Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg sm:max-w-xl space-y-6">
        <h2 className="text-left text-xl font-bold font-archivoSemi text-formColor">
          Let’s get you in
        </h2>

        {/* Show error message if any */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Email Field */}
        <div className="space-y-2">
          <label className="text-sm font-normal text-formColor" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 text-xs text-headerColor font-archivoSemi rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label
            className="text-sm font-normal text-formColor"
            htmlFor="password"
          >
            Password
          </label>
          <div className="flex items-center w-full border border-gray-300 rounded-lg">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 focus:ring-2 text-xs text-headerColor font-archivoSemi focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="p-3 text-headerColor font-archivoSemi text-sm text-nowrap font-normal hover:underline"
            >
              {passwordVisible ? "Hide Password" : "Reveal Password"}
            </button>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          disabled={isLoading} // Disable button while loading
          className={`w-full bg-headerColor text-white py-3 rounded-full hover:bg-blue-700 text-center text-sm font-medium ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Logging in..." : "Continue →"} {/* Show loading text */}
        </button>
      </div>

      {/* Google Login Button */}
      <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        buttonText="Continue with Google"
        onSuccess={handleGoogleLogin}
        onFailure={(error) => setError("Google login failed.")}
        cookiePolicy="single_host_origin"
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="bg-white max-w-lg sm:max-w-xl flex items-center justify-center mt-6 space-x-2 shadow-lg rounded-lg p-3 w-full"
          >
            <Image src={GoogleImage} alt="Google" className="w-6 h-6" />
            <p className="text-base font-archivoSemi font-medium text-formColor">
              Continue with Google
            </p>
          </button>
        )}
      />

      <p className="text-sm text-gray-600 mt-4">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline font-medium">
          Sign up
        </a>
      </p>

      {/* Help Center */}
      <div className="text-left w-full mt-40">
        <a
          href="/help"
          className="text-sm text-helpColor font-archivoSemi font-normal hover:underline"
        >
          * Help Center
        </a>
      </div>
    </div>
  );
}

export default LoginPage;