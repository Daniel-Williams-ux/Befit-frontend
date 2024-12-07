import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Fitness instructions & Artificial Intelligence trained for only you." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="BeFit" />
        <meta property="og:description" content="Fitness instructions & Artificial Intelligence trained for only you." />
        <meta property="og:image" content="https://befitweb1.netlify.app/favicon.icon" />
        <meta property="og:image:alt" content="BeFit - Your personalized fitness journey." />

        {/* Twitter Card Tags */}
        <meta name="twitter:title" content="BeFit" />
        <meta name="twitter:description" content="Fitness instructions & Artificial Intelligence trained for only you." />
        <meta name="twitter:url" content="https://befitweb1.netlify.app/?src=twitter" />
        <meta name="twitter:image:src" content="https://befitweb1.netlify.app/favicon.icon" />
        <meta name="twitter:image:alt" content="BeFit" />
        <meta name="twitter:creator" content="@BeFit90524246" />
        <meta name="twitter:site" content="@BeFit90524246" />

        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+SemiExpanded:wght@400;700&display=swap" rel="stylesheet"></link>

        {/* Language Alternate Links */}
        <link rel="alternate" href="https://befitweb1.netlify.app/fr/" hrefLang="fr-FR" />
        <link rel="alternate" href="https://befitweb1.netlify.app/pt/" hrefLang="pt-BR" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://befitweb1.netlify.app/" />


        {/* Google Fonts - DM Sans */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
