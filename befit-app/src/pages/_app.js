import Layout from '../components/Layout';
import '../styles/global.css'; // Ensure Tailwind or other global styles are imported here

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;