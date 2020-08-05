// import App from 'next/app'
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import Head from "next/head";
import "../style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PREdb | The Scene PRE & NFO database</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider>
        <ColorModeProvider>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
