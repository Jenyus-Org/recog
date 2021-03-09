import { ApolloProvider } from "@apollo/client";
import "highlight.js/styles/atom-one-dark.css";
import { AppProps } from "next/app";
import { useApollo } from "src/lib/apolloClient";
import "../styles/globals.css";
import "quill/dist/quill.snow.css";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
