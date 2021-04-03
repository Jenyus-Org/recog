import { gql, useApolloClient } from "@apollo/client";
import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Center, Heading, Link, SimpleGrid } from "@chakra-ui/layout";
import { Layout } from "@components/Layout";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { GiOctopus } from "react-icons/gi";
import * as yup from "yup";
import { useAuthenticatedUser } from "../src/hookes/useAuthenticatedUser";
import { useJwt } from "../src/hookes/useJwt";

export default function Login() {
  const client = useApolloClient();
  const [, setUser] = useAuthenticatedUser();
  const { setAccessToken, setRefreshToken } = useJwt();
  const router = useRouter();

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (credentials: any) => {
    try {
      const {
        data: { login },
      } = await client.mutate({
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
        variables: { input: credentials },
      });

      setUser(login.user);
      setAccessToken(login.accessToken);
      setRefreshToken(login.refreshToken);
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
        borderRadius={4}
        shadow="sm"
        width={["100%", "100%", "100%", "70%"]}>
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={10}>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Heading>Login</Heading>
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
              <Button type="submit" colorScheme="primary" mr={4}>
                Login
              </Button>
              <NextLink href="/signup" passHref>
                <Link colorScheme="secondary">Sign Up</Link>
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
