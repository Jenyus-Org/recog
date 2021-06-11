import { gql, useQuery } from "@apollo/client";
import {
  Button,
  Center,
  Grid,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Layout } from "@components/Layout";
import { PostCard } from "@components/PostCard";
import { Post as PostModel } from "@models/Post";
import React from "react";
import { BiChevronDown, BiStats } from "react-icons/bi";

export default function Home() {
  const ALL_POSTS_QUERY = gql`
    query AllPosts {
      posts {
        id
        title
        body
      }
    }
  `;
  const { loading, error, data } = useQuery(ALL_POSTS_QUERY);

  if (loading) {
    return <Text>Loading...</Text>;
  } else if (error) {
    return (
      <div>
        <p>
          Oh no!
          <br />
          An error has occured:
        </p>
        <pre>
          <code>{JSON.stringify(error, null, 2)}</code>
        </pre>
      </div>
    );
  }

  const { posts } = data;

  return (
    <Layout>
      <Wrap mb="10" mx="auto" align="center">
        <WrapItem>
          <Center>
            <Wrap mx="6" align="center">
              <WrapItem>
                <span>Sort</span>
              </WrapItem>
              <WrapItem>
                <Text mx={3} fontSize="3xl">
                  <BiStats />
                </Text>
              </WrapItem>
              <WrapItem>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant="menu-button"
                    rightIcon={<BiChevronDown />}>
                    Sort
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create & Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                  </MenuList>
                </Menu>
              </WrapItem>
            </Wrap>
          </Center>
          <Center>
            <Wrap align="center">
              <WrapItem>
                <span>Flair</span>
              </WrapItem>
              <WrapItem>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant="menu-button"
                    rightIcon={<BiChevronDown />}>
                    Flair
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create & Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                  </MenuList>
                </Menu>
              </WrapItem>
            </Wrap>
          </Center>
        </WrapItem>
      </Wrap>
      <Grid ml="4" mr="6" gap={4}>
        {posts.map((post: PostModel) => (
          <PostCard post={post} key={post.id} />
        ))}
      </Grid>
    </Layout>
  );
}
