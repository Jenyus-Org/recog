import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { useApollo } from "@lib/apolloClient";
import { theme } from "@utils/chakraTheme";
import "highlight.js/styles/atom-one-dark.css";
import { Provider as NextAuthProvider } from "next-auth/client";
import { AppProps } from "next/app";
import "quill/dist/quill.snow.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <NextAuthProvider session={pageProps.session}>
          <Component {...pageProps} />
        </NextAuthProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
