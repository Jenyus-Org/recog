import { gql, useQuery } from "@apollo/client";
import { Layout } from "@components/Layout";
import { PostCard } from "@components/PostCard";
import { Post as PostModel } from "@models/Post";
import { Dropdown } from "@ui/Dropdown";
import clsx from "clsx";
import React from "react";
import { BiStats } from "react-icons/bi";

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
              <PostCardSkeleton />
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
