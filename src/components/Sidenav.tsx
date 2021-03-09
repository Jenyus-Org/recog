import { Button } from "@chakra-ui/button";
import { Divider, Flex, Heading, Link, Spacer, Text } from "@chakra-ui/layout";
import NextLink from "next/link";
import React from "react";
import { BiBriefcase, BiNotepad } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GoCommentDiscussion } from "react-icons/go";
import { IoMdLogOut } from "react-icons/io";

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

export const Sidenav = () => (
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
            <Text color="primary.600">re</Text>
            <Text color="secondary.600">cog</Text>
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
              backgroundColor="primary.600"
              borderRadius="full"
              color="white"
              fontSize="md"
              fontWeight="medium"
              px={6}
              py={3}
              mb={4}
              sx={{ textTransform: "uppercase" }}
              _hover={{ backgroundColor: "primary.400" }}>
              Submit a Post
            </Button>
          </NextLink>
          <NextLink href="/forum/submit" passHref>
            <Button
              as="a"
              backgroundColor="secondary.600"
              borderRadius="full"
              color="white"
              fontSize="md"
              fontWeight="medium"
              px={6}
              py={3}
              sx={{ textTransform: "uppercase" }}
              _hover={{ backgroundColor: "secondary.400" }}>
              Create a Tutorial
            </Button>
          </NextLink>
        </Flex>
      </Flex>
      <Divider color="gray.300" />
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
    <Divider color="gray.300" />
    <Flex align="center" px={4} py={4} w="full">
      <Text fontSize="3xl" mr={2}>
        <BsFillPersonFill />
      </Text>
      <Text fontSize="lg">Username</Text>
      <Spacer />
      <NextLink href="/profile" passHref>
        <Link fontSize="3xl" mr={2}>
          <FiSettings />
        </Link>
      </NextLink>
      <NextLink href="/logout" passHref>
        <Link fontSize="3xl">
          <IoMdLogOut />
        </Link>
      </NextLink>
    </Flex>
  </Flex>
);
