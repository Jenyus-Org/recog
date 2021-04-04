import { gql } from "@apollo/client";
import { JWT } from "next-auth/jwt";
import { initializeApollo } from "./apolloClient";

export const refreshAccessToken = async ({ refreshToken, ...token }: JWT) => {
  const apolloClient = initializeApollo();

  try {
    const {
      data: { refreshToken: response },
    } = await apolloClient.mutate({
      mutation: gql`
        mutation($input: RefreshTokenInput!) {
          refreshToken(input: $input) {
            accessToken
            accessTokenExpiresAt
          }
        }
      `,
      variables: {
        input: {
          refreshToken,
        },
      },
    });

    return {
      ...token,
      ...response,
      refreshToken,
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      ...token,
      refreshToken,
      error: "RefreshAccessTokenError",
    };
  }
};
