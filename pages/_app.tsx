import { AppProps } from "next/dist/next-server/lib/router/router";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";

import "../styles/globals.css";
import "@fontsource/sora";

const theme = extendTheme({
  fonts: {
    body: "Sora",
    heading: "Sora",
  },
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
