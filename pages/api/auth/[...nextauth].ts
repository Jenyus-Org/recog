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
  callbacks: {},
  pages: {
    signIn: "/login",
    error: "/login",
  },
});
