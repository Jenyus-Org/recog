import { gql } from "@apollo/client";
import { initializeApollo } from "@lib/apolloClient";
import NextAuth from "next-auth";
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
    jwt: async (token, data: any) => {
      if (data) {
        const { accessToken, refreshToken, user } = data;
        token.user = {
          ...user,
          accessToken,
          refreshToken,
        };
      }
      return token;
    },
    // @ts-ignore
    session: (session: WithAdditionalParams<Session>, token: JWT) => {
      // don't include refresh token for security purposes
      session.user = token.user as WithAdditionalParams<User>;
      session.accessToken = token.accessToken as string;

      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
});
