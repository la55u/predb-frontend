import { ChakraProvider } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import Head from "next/head";
import { Provider, useDispatch } from "react-redux";
import store from "../redux/store";
import "../styles/global.css";
import { theme } from "../styles";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PREdb | The Scene PRE & NFO database</title>
        <meta
          name="description"
          content="The all in one warez scene PRE tracker, NFO database and notification system"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0b0b13" />
      </Head>

      <Provider store={store}>
        <ChakraProvider theme={theme} resetCSS>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
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
