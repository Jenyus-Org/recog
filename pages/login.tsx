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
import { signIn } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { GiOctopus } from "react-icons/gi";
import * as yup from "yup";

export default function Login() {
  const router = useRouter();

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ username, password }: any) => {
    const { error, ok } = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (ok) {
      router.push(
        typeof router.query.callbackUrl == "string"
          ? router.query.callbackUrl
          : router.query.callbackUrl?.[0] ?? "/",
      );
    } else if (error) {
      setError("password", { message: error });
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
