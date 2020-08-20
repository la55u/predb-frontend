import { ChakraProvider, CSSReset } from "@chakra-ui/core";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../style.css";
import { theme } from "../theme";

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

      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <CSSReset />
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
