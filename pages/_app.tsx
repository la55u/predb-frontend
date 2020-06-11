// import App from 'next/app'
import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import { AppProps } from "next/app";
import "../style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
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
