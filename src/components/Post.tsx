import { Post as PostModel } from "@models/Post";
import { Button } from "@ui/Button";
import {
  Card,
  CardBody,
  CardContent,
  CardFooter,
  CardHeader,
  CardSidebar,
} from "@ui/Card";
import clsx from "clsx";
import React from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

interface PostProps {
  post: PostModel;
}

export const Post = ({ post }: PostProps) => {
  return (
    <Card className={clsx("bg-white")}>
      <CardSidebar className={clsx("grid", "gap-4")}>
        <Button pill>
          <BsArrowUpShort />
        </Button>
        <Button pill>
          <BsArrowDownShort />
        </Button>
      </CardSidebar>
      <CardBody>
        <CardHeader>
          <span>{post.title}</span>
        </CardHeader>
        <CardContent>
          <span>{post.body}</span>
        </CardContent>
      </CardBody>
      <CardFooter>
        <span>Footer</span>
      </CardFooter>
    </Card>
  );
};
