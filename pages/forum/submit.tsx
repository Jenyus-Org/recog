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
import clsx from "clsx";
import dynamic from "next/dynamic";
import React from "react";
import { useForm } from "react-hook-form";
import { TiDocumentText, TiEdit } from "react-icons/ti";
import * as yup from "yup";

export default function Submit() {
  const schema = yup.object().shape({
    title: yup.string().required(),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [text, setText] = React.useState("");

  const onSubmit = (data: any) => {
    console.log({ ...data, text });
  };

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
              <QuillNoSSRWrapper onChange={setText} value={text} />
            </TabPanel>
            <TabPanel>
              <Box p={4}>
                <div
                  dangerouslySetInnerHTML={{ __html: text }}
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

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
