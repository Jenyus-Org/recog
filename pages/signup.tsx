import React from "react";
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
import * as yup from "yup";

export default function SignUp() {
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
    password_confirmation: yup.string().required(),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (credentials: any) => {
    console.log("submit", credentials);
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
