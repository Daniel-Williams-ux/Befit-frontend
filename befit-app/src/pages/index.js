import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (token) {
      // Store the token
      localStorage.setItem('token', token);
      // Redirect to Step 2
      router.replace('/2');
    }
  }, [token]);

  return null; // Optionally, show a loading spinner
};

export default Home;