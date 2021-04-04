import { gql } from "@apollo/client";
import { initializeApollo } from "@lib/apolloClient";
import { refreshAccessToken } from "@lib/refreshAccessToken";
import NextAuth, { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import Providers from "next-auth/providers";
import { WithAdditionalParams } from "next-auth/_utils";

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
          const {
            data: { login },
          } = await apolloClient.mutate({
            mutation: gql`
              mutation($input: LoginUserInput!) {
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

          return login;
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    jwt: async (token: any, user: any) => {
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
    session: (session: WithAdditionalParams<Session>, token: JWT) => {
      // don't include refresh token for security purposes
      session.user = token.user as WithAdditionalParams<User>;
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
