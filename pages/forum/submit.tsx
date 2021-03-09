import { Layout } from "@components/Layout";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, FormInput } from "@ui/Form";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import dynamic from "next/dynamic";
import clsx from "clsx";

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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="text"
          name="title"
          placeholder="Post Title"
          ref={register}
          variant="gray"
          className={clsx("w-full")}
        />
        <p className={clsx("text-red-400")}>{errors.title?.message}</p>
        <br />
        <QuillNoSSRWrapper
          className={clsx("bg-white")}
          onChange={setText}
          value={text}
        />
        <br />
        <div className={clsx("bg-white", "p-4")}>
          <p className={clsx("font-bold")}>Preview</p>
          <hr />
          <br />
          <div
            dangerouslySetInnerHTML={{ __html: text }}
            style={{ overflowWrap: "break-word" }}
          />
        </div>
        <br />
        <FormInput type="submit" />
      </Form>
    </Layout>
  );
}

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
