import axios from 'axios';

const checkAuth = async () => {
  const token = localStorage.getItem('token');  // Get token from localStorage
  if (!token) {
    console.error('Token missing, redirecting to login...');
    return false; // No token, user is not authenticated
  }

  try {
    // Make a GET request to the backend API to verify the token
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/check-token`, {
      headers: {
        Authorization: `Bearer ${token}`,  // Pass token to backend for validation
      },
    });

    // If the response status is 200, the token is valid
    return res.status === 200;
  } catch (error) {
    console.error('Token validation failed:', error.response?.data || error.message);
    localStorage.removeItem('token');  // Clear invalid token
    return false; // If an error occurs, token is invalid
  }
};

export default checkAuth;