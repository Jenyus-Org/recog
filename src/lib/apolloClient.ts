import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getSession, signIn } from "next-auth/client";
import { useMemo } from "react";

let apolloClient: ApolloClient<any>;

function createApolloClient() {
  const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql",
  });

  const authLink = setContext(async (_, { headers }) => {
    const session = (await getSession()) as any;

    if (session?.error === "RefreshAccessTokenError") {
      signIn(); // Force sign in to hopefully resolve error
    }

    return {
      headers: {
        ...headers,
        authorization: session?.accessToken
          ? `Bearer ${session?.accessToken}`
          : null,
      },
    };
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined", // set to true for SSR
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
