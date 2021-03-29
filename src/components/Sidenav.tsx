import { Button } from "@chakra-ui/button";
import { Divider, Flex, Heading, Link, Spacer, Text } from "@chakra-ui/layout";
import NextLink from "next/link";
import React from "react";
import { BiBriefcase, BiNotepad } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GoCommentDiscussion } from "react-icons/go";
import { IoMdLogOut, IoMdLogIn } from "react-icons/io";
import { useAuthenticatedUser } from "../hookes/useAuthenticatedUser";
import { useJwt } from "../hookes/useJwt";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const NavLink = ({ to, children, icon }: NavLinkProps) => (
  <NextLink href={to} passHref>
    <Heading
      as="a"
      display="flex"
      alignItems="center"
      py={4}
      px={8}
      _hover={{ backgroundColor: "gray.200" }}>
      <Text mr={8}>{icon}</Text>
      <Text fontSize="lg">{children}</Text>
    </Heading>
  </NextLink>
);

export const Sidenav = () => {
  const [user, setUser] = useAuthenticatedUser();
  const { setAccessToken, setRefreshToken } = useJwt();

  return (
    <Flex
      w={64}
      background="white"
      position="fixed"
      top={0}
      left={0}
      sx={{ height: "100vh", zIndex: "50" }}
      direction="column"
      justifyContent="start">
      <Flex h={16} px={8} align="center">
        <NextLink href="/" passHref>
          <Link
            _hover={{ textDecoration: "none" }}
            _focus={{ borderColor: "none" }}>
            <Heading lineHeight={5}>
              <Text color="primary.500">re</Text>
              <Text color="secondary.500">cog</Text>
            </Heading>
          </Link>
        </NextLink>
      </Flex>
      <Flex direction="column" mt={4} align="center" overflowY="auto">
        <Flex direction="column" pb={10} w="full" align="center">
          <Flex direction="column">
            <Text mb={10} fontWeight="bold" textAlign="center">
              Contribute to the Community!
            </Text>
            <NextLink href="/forum/submit" passHref>
              <Button
                as="a"
                colorScheme="primary"
                borderRadius="full"
                color="white"
                fontSize="md"
                fontWeight="medium"
                px={6}
                py={3}
                mb={4}
                sx={{ textTransform: "uppercase" }}>
                Submit Post
              </Button>
            </NextLink>
            <NextLink href="/forum/submit" passHref>
              <Button
                as="a"
                colorScheme="secondary"
                borderRadius="full"
                color="white"
                fontSize="md"
                fontWeight="medium"
                px={6}
                py={3}
                sx={{ textTransform: "uppercase" }}>
                Create a Tutorial
              </Button>
            </NextLink>
          </Flex>
        </Flex>
        <Divider />
        <Flex as="nav" w="full">
          <Flex as="ul" w="full" direction="column">
            <li>
              <NavLink to="/forum" icon={<GoCommentDiscussion />}>
                Forum
              </NavLink>
            </li>
            <li>
              <NavLink to="/tutorials" icon={<BiNotepad />}>
                Tutorials
              </NavLink>
            </li>
            <li>
              <NavLink to="/jobs" icon={<BiBriefcase />}>
                Jobs
              </NavLink>
            </li>
          </Flex>
        </Flex>
      </Flex>
      <Spacer />
      <Divider />
      {user ? (
        <Flex align="center" px={4} py={4} w="full">
          <Text fontSize="3xl" mr={2}>
            <BsFillPersonFill />
          </Text>
          <Text fontSize="lg">{user.username}</Text>
          <Spacer />
          <NextLink href="/profile" passHref>
            <Link fontSize="3xl" mr={2}>
              <FiSettings />
            </Link>
          </NextLink>
          <Button
            fontSize="3xl"
            variant="link"
            colorScheme="black"
            onClick={() => {
              setUser(null);
              setAccessToken("");
              setRefreshToken("");
            }}>
            <IoMdLogOut />
          </Button>
        </Flex>
      ) : (
        <Flex align="center" px={4} py={4} w="full">
          <Spacer />
          <NextLink href="/login" passHref>
            <Button
              as="a"
              colorScheme="primary"
              color="white"
              fontSize="md"
              fontWeight="medium"
              px={6}
              py={3}
              mr={3}
              sx={{ textTransform: "uppercase" }}>
              Login
            </Button>
          </NextLink>
          <NextLink href="/signup" passHref>
            <Button
              as="a"
              colorScheme="secondary"
              color="white"
              fontSize="md"
              fontWeight="medium"
              px={6}
              py={3}
              sx={{ textTransform: "uppercase" }}>
              Sign Up
            </Button>
          </NextLink>
        </Flex>
      )}
    </Flex>
  );
};
