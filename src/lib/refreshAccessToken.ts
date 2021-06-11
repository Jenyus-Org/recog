import { gql } from "@apollo/client";
import { RefreshToken, RefreshTokenVariables } from "@generated/graphql/api";
import { JWT } from "next-auth/jwt";
import { initializeApollo } from "./apolloClient";

export const refreshAccessToken = async ({ refreshToken, ...token }: JWT) => {
  const apolloClient = initializeApollo();

  try {
    const { data } = await apolloClient.mutate<
      RefreshToken,
      RefreshTokenVariables
    >({
      mutation: gql`
        mutation RefreshToken($input: RefreshTokenInput!) {
          response: refreshToken(input: $input) {
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

    if (!data) {
      return {
        error: "RefreshAccessTokenError",
      };
    }

    const { response } = data;

    return {
      ...token,
      ...response,
      refreshToken,
    };
  } catch (error) {
    return {
      error: "RefreshAccessTokenError",
    };
  }
};
