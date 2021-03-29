import { Box, Flex, Link, Spacer } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { BsBellFill } from "react-icons/bs";
import { HiOutlineChatAlt } from "react-icons/hi";

export const Header = () => {
  return (
    <Flex
      as="header"
      background="white"
      px={6}
      align="center"
      h={16}
      position="fixed"
      top={0}
      right={0}
      left={0}
      sx={{ zIndex: 40 }}
      shadow="sm">
      <Box w={64} flexShrink={0} />
      <Spacer />
      <Input
        bgColor="gray.200"
        placeholder="Search..."
        mr={4}
        width="xs"
        sx={{ _focus: { width: "full" } }}
      />
      <NextLink href="/chat" passHref>
        <Link p={2} display="flex" alignItems="center" fontSize="3xl">
          <HiOutlineChatAlt />
        </Link>
      </NextLink>
      <NextLink href="/notifications" passHref>
        <Link p={2} display="flex" alignItems="center" mr={2} fontSize="3xl">
          <BsBellFill />
        </Link>
      </NextLink>
    </Flex>
  );
};
