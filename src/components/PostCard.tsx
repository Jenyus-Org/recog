import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { Post as PostModel } from "@models/Post";
import clsx from "clsx";
import React from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

interface PostProps {
  post: PostModel;
}

export const PostCard = ({ post }: PostProps) => {
  return (
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
          <Text>{post.title}</Text>
        </Box>
        <Box>
          <Text>{post.body}</Text>
        </Box>
      </Box>
      <Flex flexGrow={1} borderTop="1px gray.100" pt={2} mt={4}>
        <Text>Footer</Text>
      </Flex>
    </Flex>
  );
};
