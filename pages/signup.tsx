import { gql, useApolloClient } from "@apollo/client";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { Layout } from "@components/Layout";
import { RegisterUser, RegisterUserVariables } from "@generated/graphql/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import NextLink from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { GiOctopus } from "react-icons/gi";
import * as yup from "yup";

export default function SignUp() {
  const client = useApolloClient();
  const router = useRouter();
  const callbackUrl = React.useMemo(
    () =>
      typeof router.query.callbackUrl == "string"
        ? router.query.callbackUrl
        : router.query.callbackUrl?.[0] ?? null,
    [router],
  );

  const schema = yup
    .object()
    .shape({
      username: yup.string().required("Username is required"),
      password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      passwordConfirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Password confirmation is required"),
    })
    .required();

  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = async ({
    username,
    password,
  }: yup.TypeOf<typeof schema>) => {
    try {
      await client.mutate<RegisterUser, RegisterUserVariables>({
        mutation: gql`
          mutation RegisterUser($input: RegisterUserInput!) {
            register(input: $input) {
              user {
                id
              }
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

      const { ok } = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (ok) {
        router.push(callbackUrl ?? "/");
      }
    } catch (error) {
      setError("username", { message: error.message, type: "validate" });
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
                id="passwordConfirmation"
                isInvalid={!!errors.passwordConfirmation}
                isRequired>
                <FormLabel>Password Confirmation</FormLabel>
                <Input
                  ref={register}
                  name="passwordConfirmation"
                  type="password"
                />
                <FormErrorMessage>
                  {errors.passwordConfirmation?.message}
                </FormErrorMessage>
              </FormControl>
              <br />
              <Button type="submit" colorScheme="primary" mr={4}>
                Register
              </Button>
              <NextLink
                href={
                  callbackUrl ? `/login?callbackUrl=${callbackUrl}` : "/login"
                }
                passHref>
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
