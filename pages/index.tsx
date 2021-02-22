import { Layout } from "@components/Layout";
import { PostCard } from "@components/PostCard";
import { Post } from "@components/Post";
import { Dropdown } from "@ui/Dropdown";
import clsx from "clsx";
import { BiStats } from "react-icons/bi";

export default function Home() {
  const posts = [
    {
      title: "Title",
      upvotes: 1,
      date: "17.02.2021",
      tags: [
        { id: 1, name: "javascript", colour: "red", },
        { id: 2, name: "react", colour: "blue" },
        { id: 3, name: "nodejs", colour: "green"},
      ],
      comments: [{id:1, comment: "this a comment"}],
      author: "Dan6erbond",
      body: "Post",
    },
    { title: "Title", upvotes: 1, date: "17.02.2021", body: "Post" },
    { title: "Title", upvotes: 1, date: "17.02.2021", body: "Post" },
    { title: "Title", upvotes: 1, date: "17.02.2021", body: "Post" },
    { title: "Title", upvotes: 1, date: "17.02.2021", body: "Post" },
    { title: "Title", upvotes: 1, date: "17.02.2021", body: "Post" },
    { title: "Title", upvotes: 1, date: "17.02.2021", body: "Post" },
    { title: "Title", upvotes: 1, date: "17.02.2021", body: "Post" },
    { title: "Title", upvotes: 1, date: "17.02.2021", body: "Post" },
    { title: "Title", upvotes: 1, date: "17.02.2021", body: "Post" },
    { title: "Title", upvotes: 1, date: "17.02.2021", body: "Post" },
    { title: "Title", upvotes: 1, date: "17.02.2021", body: "Post" },
    { title: "Title", upvotes: 1, date: "17.02.2021", body: "Post" },
    { title: "Title", upvotes: 1, date: "17.02.2021", body: "Post" },
  ];

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
        <Post post={posts[0]} />
        <div className={clsx("ml-4", "mr-6", "grid", "gap-4")}>
          {posts.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </div>
      </Layout>
    </div>
  );
}
