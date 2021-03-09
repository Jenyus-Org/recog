import React from "react";
import { Post as PostModel } from "@models/Post";
import clsx from "clsx";
import { Button } from "@ui/Button";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";
import ReactMarkdown from "react-markdown";

interface PostProps {
  post: PostModel;
}

export const Post = ({ post }: PostProps) => {
  return (
    <div className={clsx("ml-4", "mr-6")}>
      <div className={clsx("flex")}>
        <div className={clsx("grid", "gap-4", "text-center", "mx-2")}>
          <Button pill>
            <BsArrowUpShort />
          </Button>
          <span>{post.upvotes}</span>
          <Button pill>
            <BsArrowDownShort />
          </Button>
        </div>
        <div className={clsx("grid", "gap-3", "mx-2")}>
          <h1 className={clsx("text-3xl")}>{post.title}</h1>
          <span className={clsx("text-gray-400")}>{post.date}</span>
          <div className={clsx("flex")}>
            {post.tags.map((tag) => (
              <span
                key={tag.id}
                className={clsx(
                  `bg-${tag.colour}-100`,
                  "px-2",
                  "mr-2",
                  "text-center",
                  "rounded-full",
                  "text-xs",
                  "flex",
                  "items-center",
                )}>
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={clsx("my-5") }>
        <ReactMarkdown># Hello. *world*!</ReactMarkdown>
      </div>
      <div
        className={clsx(
          "flex",
          "justify-between",
          "my-4",
          "border-b-2",
          "text-sm",
        )}>
        <div className={clsx("flex", "items-center", "pr-4")}>
          <div
            className={clsx(
              "w-5",
              "rounded-full",
              "h-5",
              "bg-blue-100",
              "mr-2",
              "my-2",
            )}></div>
          <span>Posted by {post.author}</span>
        </div>
        <div className={clsx("flex", "items-center")}>
          <div className={clsx("text-lg")}>
            <GoCommentDiscussion />
          </div>
          <span className={clsx("px-2")}>{post.comments.length}</span>
          <div className={clsx("px-2", "text-lg")}>
            <BiShareAlt />
          </div>
        </div>
      </div>
    </div>
  );
};
