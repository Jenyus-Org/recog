import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { useApollo } from "@lib/apolloClient";
import { theme } from "@utils/chakraTheme";
import "highlight.js/styles/atom-one-dark.css";
import { AppProps } from "next/app";
import "quill/dist/quill.snow.css";
import { AuthProvider } from "@context/auth";
import { UserProvider } from "@context/user";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <UserProvider>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </UserProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
