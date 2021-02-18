import React from "react";
import { Post as PostModel } from "@models/Post";
import { Card, CardBody, CardContent, CardFooter, CardHeader, CardSidebar } from "@ui/Card";
import clsx from "clsx";
import { Button } from "@ui/Button";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

interface PostProps {
  post: PostModel;
}

export const Post = ({ post }: PostProps) => {

  return (
    <Card>
      <CardSidebar>
        <div className={clsx("flex flex-col")}>
          <Button>
            <BsArrowUpShort/>
          </Button>
          <Button>
            <BsArrowDownShort/>
          </Button>
        </div>
      </CardSidebar>
      <CardBody>
        <CardHeader>
          <span>{ post.title}</span>
        </CardHeader>
        <CardContent>
          <span>{ post.body}</span>
        </CardContent>
      </CardBody>
      <CardFooter>
        <span>Footer</span>
      </CardFooter>
    </Card>
  );
};
