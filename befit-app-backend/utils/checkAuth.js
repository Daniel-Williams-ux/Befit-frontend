import axios from "axios";

const checkAuth = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return false;

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/verify-token`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.status === 200; // Return true if token is valid
  } catch (error) {
    console.error("Authentication check failed:", error);
    return false; // Return false if the token is invalid or an error occurs
  }
};

export default checkAuth;