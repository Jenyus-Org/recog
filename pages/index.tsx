import React from "react";
import { Layout } from "@components/Layout";
import { PostCard } from "@components/PostCard";
import { Dropdown } from "@ui/Dropdown";
import clsx from "clsx";
import { BiStats } from "react-icons/bi";
import { gql, useQuery } from "@apollo/client";
import { Post as PostModel } from "@models/Post";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { Button } from "@ui/Button";
import {
  Card,
  CardBody,
  CardContent,
  CardFooter,
  CardHeader,
  CardSidebar,
} from "@ui/Card";

export default function Home() {
  const ALL_POSTS_QUERY = gql`
    query {
      posts {
        id
        title
        body
      }
    }
  `;
  const { loading, error, data } = useQuery(ALL_POSTS_QUERY);

  if (loading) {
    return (
      <div>
        <Layout>
          <div className={clsx("mb-10", "flex", "items-center", "mx-auto")}>
            <div className={clsx("flex", "items-center", "mx-6")}>
              <span>Sort</span>
              <BiStats className={clsx("mx-3", "text-3xl")} />
              <Dropdown variant="light-gray" label="Sort" />
            </div>
            <div className={clsx("flex", "items-center")}>
              <span className={clsx("px-3")}>Flair</span>
              <Dropdown variant="light-gray" label="Flair" />
            </div>
          </div>
          <div className={clsx("ml-4", "mr-6", "grid", "gap-4")}>
            {[...Array(10)].map((val) => (
              <Card className={clsx("bg-white", "animate-pulse")} key={val}>
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
                    <div
                      className={clsx(
                        "h-6",
                        "bg-gray-100",
                        "rounded",
                        "w-3/4",
                        "mb-2",
                      )}
                    />
                  </CardHeader>
                  <CardContent>
                    <div
                      className={clsx(
                        "h-4",
                        "bg-gray-100",
                        "rounded",
                        "mb-2",
                        "mr-2",
                      )}
                    />
                    <div
                      className={clsx("h-4", "bg-gray-100", "rounded", "w-5/6")}
                    />
                  </CardContent>
                </CardBody>
                <CardFooter>
                  <div
                    className={clsx("h-4", "bg-gray-100", "rounded", "w-1/4")}
                  />
                </CardFooter>
              </Card>
            ))}
          </div>
        </Layout>
      </div>
    );
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
    <div>
      <Layout>
        <div className={clsx("mb-10", "flex", "items-center", "mx-auto")}>
          <div className={clsx("flex", "items-center", "mx-6")}>
            <span>Sort</span>
            <BiStats className={clsx("mx-3", "text-3xl")} />
            <Dropdown variant="light-gray" label="Sort" />
          </div>
          <div className={clsx("flex", "items-center")}>
            <span className={clsx("px-3")}>Flair</span>
            <Dropdown variant="light-gray" label="Flair" />
          </div>
        </div>
        <div className={clsx("ml-4", "mr-6", "grid", "gap-4")}>
          {posts.map((post: PostModel) => (
            <PostCard post={post} key={post.id} />
          ))}
        </div>
      </Layout>
    </div>
  );
}
