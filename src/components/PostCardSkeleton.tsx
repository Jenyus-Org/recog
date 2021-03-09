import { Box, Grid, Button, Wrap, Flex } from "@chakra-ui/react";
import React from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

export const PostCardSkeleton = () => (
  <Flex
    backgroundColor="white"
    w="full"
    justify="items"
    borderRadius="md"
    borderWidth={2}
    borderColor="gray.200"
    p={4}>
    <Grid gap={4} mr={4} px={4}>
      <Button variant="upvote-button">
        <BsArrowUpShort />
      </Button>
      <Button variant="upvote-button">
        <BsArrowDownShort />
      </Button>
    </Grid>
    <Box flexGrow={1}>
      <Box fontWeight="bold" fontSize="lg">
        <Box
          h={6}
          w={3}
          backgroundColor="gray.100"
          borderRadius={2}
          mb={2}></Box>
      </Box>
      <Box>
        <Box
          h={4}
          backgroundColor="gray.100"
          borderRadius={2}
          mb={2}
          mr={2}></Box>
        <Box h={4} backgroundColor="gray.100" borderRadius={2} w={5 / 6}></Box>
      </Box>
    </Box>
    <Flex flexGrow={1} borderTop="1px gray.100" pt={2} mt={4}>
      <Box h={4} backgroundColor="gray.100" borderRadius={2} w={1 / 4}></Box>
    </Flex>
  </Flex>
);
