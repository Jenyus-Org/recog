import styles from "@styles/Layout.module.css";
import { Button } from "@ui/Button";
import { Dropdown } from "@ui/Dropdown";
import { FormInput } from "@ui/Form";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { BiBriefcase, BiNotepad } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GoCommentDiscussion } from "react-icons/go";
import { HiOutlineChatAlt } from "react-icons/hi";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <div className={clsx("grid", styles.wrapper, "min-h-screen", "w-screen")}>
    <header
      className={clsx(
        "bg-white",
        "py-4",
        "px-6",
        "flex",
        "items-center",
        "col-span-2",
      )}>
      <Link href="/">
        <a className="font-bold font-comfortaa leading-5 text-4xl">
          <span className="text-primary">re</span>
          <br />
          <span className="text-secondary">cog</span>
        </a>
      </Link>
      <FormInput
        pill
        fill="light-gray"
        placeholder="Search..."
        className={clsx("ml-60")}
      />
      <div className={clsx("ml-auto")} />
      <div className={clsx("items-center", "flex")}>
        <BsBellFill className={clsx("text-4xl", "mr-2")} />
        <HiOutlineChatAlt className={clsx("text-4xl", "mr-2")} />
        <div className={clsx("mr-2")}>
          <Dropdown label="Username" variant="transparent" />
        </div>
      </div>
    </header>
    <div className={clsx("w-80", "bg-white")}>
      <div
        className={clsx(
          "flex",
          "flex-col",
          "h-screen",
          "-mt-20",
          "pt-32",
          "items-center",
        )}>
        <div
          className={clsx(
            "flex",
            "flex-col",
            "border-b",
            "border-gray-300",
            "pb-10",
            "w-full",
            "items-center",
          )}>
          <p className={clsx("font-bold", "mb-10", "text-center")}>
            Contribute to the Community!
          </p>
          <div className={clsx("flex", "flex-col")}>
            <Button
              pill
              elevate
              variant="primary"
              className={clsx(
                "mb-4",
                "text-xl",
                "px-6",
                "py-3",
                "uppercase",
                "flex",
                "items-center",
                "justify-center",
              )}>
              Submit a Post
            </Button>
            <Button
              pill
              elevate
              variant="secondary"
              className={clsx(
                "text-xl",
                "px-6",
                "py-3",
                "uppercase",
                "flex",
                "items-center",
                "justify-center",
              )}>
              Create a Tutorial
            </Button>
          </div>
        </div>
        <nav className={clsx("flex", "flex-col", "w-full", "flex-grow")}>
          <ul className={clsx("w-full", "flex", "flex-col", "flex-grow")}>
            <li>
              <Link href="/forum">
                <a
                  className={clsx(
                    "flex",
                    "items-center",
                    "py-6",
                    "px-8",
                    "hover:bg-gray-200",
                  )}>
                  <GoCommentDiscussion className={clsx("text-5xl", "mr-8")} />
                  <span className={clsx("text-2xl")}>Forum</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/tutorials">
                <a
                  className={clsx(
                    "flex",
                    "items-center",
                    "py-6",
                    "px-8",
                    "hover:bg-gray-200",
                  )}>
                  <BiNotepad className={clsx("text-5xl", "mr-8")} />
                  <span className={clsx("text-2xl")}>Tutorials</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/jobs">
                <a
                  className={clsx(
                    "flex",
                    "items-center",
                    "py-6",
                    "px-8",
                    "hover:bg-gray-200",
                  )}>
                  <BiBriefcase className={clsx("text-5xl", "mr-8")} />
                  <span className={clsx("text-2xl")}>Jobs</span>
                </a>
              </Link>
            </li>
            <li className={clsx("flex-grow")} />
            <li className={clsx("border-t", "border-gray-300")}>
              <Link href="/settings">
                <a
                  className={clsx(
                    "flex",
                    "items-center",
                    "py-6",
                    "px-8",
                    "hover:bg-gray-200",
                  )}>
                  <FiSettings className={clsx("text-5xl", "mr-8")} />
                  <span className={clsx("text-2xl")}>Settings</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <main className={clsx("p-6")}>{children}</main>
    <footer></footer>
  </div>
);
