import { gql, useApolloClient } from "@apollo/client";
import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Layout } from "@components/Layout";
import { yupResolver } from "@hookform/resolvers/yup";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import dynamic from "next/dynamic";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TiDocumentText, TiEdit } from "react-icons/ti";
import * as yup from "yup";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Submit() {
  const client = useApolloClient();
  const router = useRouter();

  const schema = yup.object().shape({
    title: yup.string().required(),
    body: yup.string().required(),
  });
  const { register, handleSubmit, errors, control, watch, setError } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const {
        data: { createPost },
      } = await client.mutate({
        mutation: gql`
          mutation {
            createPost(input: { title: "test", body: "test" }) {
              id
              title
              body
              author {
                id
                username
                firstName
                lastName
              }
            }
          }
        `,
        variables: { input: data },
      });
      console.log(createPost);
      router.push("/");
    } catch (error) {
      setError("title", { message: error.message, type: "validate" });
    }
  };

  const body = watch("body");

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.title} isRequired>
          <FormLabel htmlFor="title">Post Title</FormLabel>
          <Input
            type="text"
            name="title"
            placeholder="Post Title"
            ref={register}
            backgroundColor="white"
          />
          <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
        </FormControl>
        <br />
        <Tabs isFitted backgroundColor="white">
          <TabList>
            <Tab>
              <Text mr={2}>
                <TiEdit />
              </Text>
              Editor
            </Tab>
            <Tab>
              <Text mr={2}>
                <TiDocumentText />
              </Text>
              Preview
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Controller
                control={control}
                name="body"
                render={({ onChange, onBlur, value }) => (
                  <QuillNoSSRWrapper
                    onChange={onChange}
                    value={value}
                    onBlur={onBlur}
                  />
                )}
              />
            </TabPanel>
            <TabPanel>
              <Box p={4}>
                <div
                  dangerouslySetInnerHTML={{ __html: body }}
                  style={{ overflowWrap: "break-word" }}
                />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <br />
        <Button type="submit" colorScheme="primary" ml="auto" display="block">
          Submit
        </Button>
      </form>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  return {
    props: { session },
  };
};
