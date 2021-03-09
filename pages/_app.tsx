import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@utils/chakraTheme";
import "highlight.js/styles/atom-one-dark.css";
import { AppProps } from "next/app";
import "quill/dist/quill.snow.css";
import { useApollo } from "src/lib/apolloClient";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
