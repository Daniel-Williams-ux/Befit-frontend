import axios from 'axios';

const checkAuth = async () => {
  const token = localStorage.getItem('token');  // Get token from localStorage
  if (!token) {
    localStorage.removeItem('token'); // Clear invalid token
    return false; // Indicate the user is not authenticated
  }

  try {
    // Send a request to an API route within your frontend to validate the token
    await axios.get('/api/auth/check-token', {
      headers: {
        Authorization: `Bearer ${token}`,  // Pass token to the backend for validation
      },
    });
    return true; // Token is valid
  } catch (error) {
    localStorage.removeItem('token');  // Clear invalid token
    return false; // Indicate the user is not authenticated
  }
};

export default checkAuth;