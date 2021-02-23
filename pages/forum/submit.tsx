import { Layout } from "@components/Layout";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, FormInput } from "@ui/Form";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export default function Submit() {
  const schema = yup.object().shape({
    title: yup.string().required(),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput type="text" name="title" ref={register} />
        <p>{errors.title?.message}</p>

        <FormInput type="submit" />
      </Form>
    </Layout>
  );
}
