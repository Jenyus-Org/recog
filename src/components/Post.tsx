import React from "react";
import { Post as PostModel } from "@models/Post";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";
import ReactMarkdown from "react-markdown";
import { Box, Flex, Grid, Button, Text } from "@chakra-ui/react";

interface PostProps {
  post: PostModel;
}

export const Post = ({ post }: PostProps) => {
  return (
    <Box ml={4} mr={6}>
      <Flex>
        <Grid gap={4} mx={2} textAlign="center">
          <Button variant="upvote-button" fontSize="3xl">
            <BsArrowUpShort />
          </Button>
          <Text>{post.upvotes}</Text>
          <Button variant="upvote-button" fontSize="3xl">
            <BsArrowDownShort />
          </Button>
        </Grid>
        <Grid gap={3} mx={2}>
          <Box fontWeight="bold" fontSize="lg">
            <Text>{post.title}</Text>
          </Box>
          <Box>
            <Text>{post.date}</Text>
          </Box>
          {post.tags.map((tag) => (
            <Flex key={tag.id} alignItems="center">
              <Text
                px={2}
                mr={2}
                textAlign="center"
                borderRadius="full"
                fontSize="xs"
                backgroundColor={`${tag.colour}`}>
                {tag.name}
              </Text>
            </Flex>
          ))}
        </Grid>
      </Flex>
      <Box my={5}>
        <ReactMarkdown># Hello. *World*!</ReactMarkdown>
      </Box>
      <Flex
        justify="between"
        alignItems="center"
        my={4}
        borderBottomWidth={2}
        fontSize="sm">
        <Flex alignItems="center" pr={4}>
          <Box
            w={5}
            borderRadius="full"
            h={5}
            backgroundColor="blue.100"
            mr={2}
            my={2}></Box>
          <Text>Posted by {post.author}</Text>
        </Flex>
        <Flex align-items="center">
          <Box fontSize="lg">
            <GoCommentDiscussion />
          </Box>
          <Text px={2}>{post.comments.length}</Text>
          <Box px={2} fontSize="lg">
            <BiShareAlt />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
