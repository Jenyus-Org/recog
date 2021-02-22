import { Layout } from "@components/Layout";
import { PostCard } from "@components/PostCard";
import { Dropdown } from "@ui/Dropdown";
import clsx from "clsx";
import { BiStats } from "react-icons/bi";

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
          {posts.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </div>
      </Layout>
    </div>
  );
}
