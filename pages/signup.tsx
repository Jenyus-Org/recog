import React from "react";
import { gql, useApolloClient } from "@apollo/client";
import { Layout } from "@components/Layout";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { GiOctopus } from "react-icons/gi";
import NextLink from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthenticatedUser } from "../src/hookes/useAuthenticatedUser";
import * as yup from "yup";
import { useRouter } from "next/dist/client/router";
import { useJwt } from "../src/hookes/useJwt";

export default function SignUp() {
  const client = useApolloClient();
  const [, setUser] = useAuthenticatedUser();
  const { setAccessToken, setRefreshToken } = useJwt();
  const router = useRouter();

  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Password confirmation is required"),
  });

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (credentials: any) => {

    try {
      const {
        data: { register },
      } = await client.mutate({
        mutation: gql`
          mutation($input: RegisterUserInput!) {
            register(input: $input) {
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
            username: credentials!.username,
            password: credentials!.password,
          },
        },
      });
      setUser(register.user);
      setAccessToken(register.accessToken);
      setRefreshToken(register.refreshToken);
      router.push("/");
    } catch (error) {
      setError("password", { message: error.message, type: "validate" });
    }
  };
  return (
    <Layout>
      <Box
        bg="white"
        p={12}
        shadow="sm"
        width={["100%", "100%", "100%", "70%"]}>
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={10}>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Heading>Register</Heading>
              <br />
              <FormControl
                id="username"
                isInvalid={!!errors.username}
                isRequired>
                <FormLabel>Username</FormLabel>
                <Input ref={register} name="username" type="text" />
                <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
              </FormControl>
              <br />
              <FormControl
                id="password"
                isInvalid={!!errors.password}
                isRequired>
                <FormLabel>Password</FormLabel>
                <Input ref={register} name="password" type="password" />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <br />
              <FormControl
                id="password_confirmation"
                isInvalid={!!errors.password}
                isRequired>
                <FormLabel>Password Confirmation</FormLabel>
                <Input
                  ref={register}
                  name="password_confirmation"
                  type="password"
                />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <br />
              <Button type="submit" colorScheme="primary" mr={4}>
                Register
              </Button>
              <NextLink href="/login" passHref>
                <Link colorScheme="secondary">Login</Link>
              </NextLink>
            </form>
          </Box>
          <Center height="full">
            <GiOctopus size="6rem" />
          </Center>
        </SimpleGrid>
      </Box>
    </Layout>
  );
}
