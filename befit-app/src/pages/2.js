import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import checkAuth from "../utils/checkAuth";

function Step2() {
  const [selectedGender, setSelectedGender] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const authenticateUser = async () => {
      const isAuthenticated = await checkAuth();
      if (!isAuthenticated) {
        setError("You must be logged in to proceed.");
        router.replace("/login");
      }
    };
    authenticateUser();
  }, [router]);

  const handleContinue = async () => {
    if (!selectedGender) {
      setError("Please select a gender");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/step2`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ gender: selectedGender }),
        }
      );

      if (!res.ok) {
        const responseData = await res.json();
        setError(responseData.message || "Failed to save data");
        return;
      }

      router.push("/3"); // Navigate to Step 3
    } catch (err) {
      console.error("Error saving gender:", err.message);
      setError("An unexpected error occurred.");
    }
  };

  const handleBack = () => {
    router.push("/login");
  };

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
    setError(null); // Clear errors
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white text-center mb-6 shadow-lg rounded-lg p-3 w-full max-w-lg sm:max-w-xl relative">
        <button
          onClick={handleBack}
          className="absolute top-6 left-6 text-gray-600 text-sm font-archivoSemi"
        >
          ← Back
        </button>
        <p className="text-xs font-archivoSemi font-normal text-helpColor">
          STEP 2/5
        </p>
        <h1 className="text-sm font-medium font-archivoSemi text-black">
          Gender
        </h1>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg sm:max-w-xl space-y-6">
        <h2 className="text-left text-xl font-bold font-dmSans text-formColor">
          Tell us your gender
        </h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="space-y-4">
          <div
            onClick={() => handleGenderChange("male")}
            className={`p-4 cursor-pointer rounded-lg text-center font-dmSans ${
              selectedGender === "male"
                ? "bg-questionColor text-white"
                : "bg-inputBg text-formColor"
            }`}
          >
            Male
          </div>
          <div
            onClick={() => handleGenderChange("female")}
            className={`p-4 cursor-pointer rounded-lg text-center font-dmSans ${
              selectedGender === "female"
                ? "bg-questionColor text-white"
                : "bg-inputBg text-formColor"
            }`}
          >
            Female
          </div>
        </div>

        <button
          onClick={handleContinue}
          className="w-full bg-headerColor text-white py-3 rounded-full hover:bg-blue-700 text-center text-sm font-medium"
        >
          Continue →
        </button>
      </div>

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

export default Step2;