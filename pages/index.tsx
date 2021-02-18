import { Layout } from "@components/Layout";
import { Dropdown } from "@ui/Dropdown";
import { BiStats } from "react-icons/bi";
import clsx from "clsx";
import { Post } from "@components/Post";

export default function Home() {
  const posts = [
    { title: "Title", body: "Post" },
    { title: "Title", body: "Post" },
    { title: "Title", body: "Post" },
    { title: "Title", body: "Post" },
    { title: "Title", body: "Post" },
    { title: "Title", body: "Post" },
    { title: "Title", body: "Post" },
    { title: "Title", body: "Post" },
    { title: "Title", body: "Post" },
    { title: "Title", body: "Post" },
    { title: "Title", body: "Post" },
    { title: "Title", body: "Post" },
    { title: "Title", body: "Post" },
    { title: "Title", body: "Post" },
  ];

  return (
    <div>
      <Layout>
        <div className={clsx("my-10", "flex", "items-center", "mx-auto")}>
          <div className={clsx("flex", "items-center", "mx-6")}>
            <span>Sort</span>
            <BiStats className={clsx("mx-3", "text-3xl")} />
            <Dropdown variant="light-gray" />
          </div>
          <div className={clsx("flex", "items-center", "mx-6")}>
            <span className={clsx("px-3")}>Flair</span>
            <Dropdown variant="light-gray" />
          </div>
        </div>
        <div className={clsx("mx-3") }>
          {posts.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </div>
      </Layout>
    </div>
  );
}
