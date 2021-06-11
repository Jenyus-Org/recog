import { gql } from "@apollo/client";
import { LoginUser, LoginUserVariables } from "@generated/graphql/api";
import { initializeApollo } from "@lib/apolloClient";
import { refreshAccessToken } from "@lib/refreshAccessToken";
import NextAuth, { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Recog Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      authorize: async ({ username, password }) => {
        const apolloClient = initializeApollo();
        try {
          const { data } = await apolloClient.mutate<
            LoginUser,
            LoginUserVariables
          >({
            mutation: gql`
              mutation LoginUser($input: LoginUserInput!) {
                login(input: $input) {
                  user {
                    id
                    username
                    firstName
                    lastName
                  }
                  accessToken
                  accessTokenExpiresAt
                  refreshToken
                }
              }
            `,
            variables: {
              input: {
                username,
                password,
              },
            },
          });

          if (!data) throw new Error("Data not returned!");

          return data.login;
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    jwt: async (token: JWT, user: User) => {
      // check if initial sign-in request
      if (user) {
        const {
          accessToken,
          accessTokenExpiresAt,
          refreshToken,
          user: u,
        } = user;

        return {
          accessToken,
          accessTokenExpiresAt,
          refreshToken,
          user: u,
        };
      }

      if (Date.now() < new Date(token.accessTokenExpiresAt).getTime()) {
        return token;
      }

      return await refreshAccessToken(token);
    },
    // @ts-ignore
    session: (session: Session, token: JWT) => {
      // don't include refresh token for security purposes
      session.user = token.user;
      session.accessToken = token.accessToken as string;
      session.error = token.error;

      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
});
