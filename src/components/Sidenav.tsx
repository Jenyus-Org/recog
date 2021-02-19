import { Button } from "@ui/Button";
import { FormInput } from "@ui/Form";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { BiBriefcase, BiNotepad } from "react-icons/bi";
import { BsBellFill, BsFillPersonFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { GoCommentDiscussion } from "react-icons/go";
import { HiOutlineChatAlt } from "react-icons/hi";
import { IoMdLogOut } from "react-icons/io";

export const Sidenav = () => (
  <div
    className={clsx(
      "w-72",
      "bg-white",
      "fixed",
      "top-0",
      "left-0",
      "z-50",
      "h-screen",
      "flex",
      "flex-col",
    )}>
    <div className={clsx("h-16", "px-8", "flex", "items-center")}>
      <Link href="/">
        <a className="font-bold font-comfortaa leading-5 text-4xl">
          <span className="text-primary">re</span>
          <br />
          <span className="text-secondary">cog</span>
        </a>
      </Link>
      <div className={clsx("flex", "items-center", "ml-auto")}>
        <Link href="/chat">
          <a>
            <HiOutlineChatAlt className={clsx("text-3xl", "mr-2")} />
          </a>
        </Link>
        <Link href="/notifications">
          <a>
            <BsBellFill className={clsx("text-3xl", "mr-2")} />
          </a>
        </Link>
      </div>
    </div>
    <div
      className={clsx(
        "flex",
        "flex-grow",
        "flex-col",
        "pt-10",
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
        <div className={clsx("flex", "flex-col")}>
          <p className={clsx("font-bold", "mb-10", "text-center")}>
            Contribute to the Community!
          </p>
          <Button
            pill
            elevate
            variant="primary"
            className={clsx(
              "mb-4",
              "text-md",
              "px-6",
              "py-3",
              "uppercase",
              "flex",
              "items-center",
              "justify-center",
              "font-comfortaa",
            )}>
            Submit a Post
          </Button>
          <Button
            pill
            elevate
            variant="secondary"
            className={clsx(
              "text-md",
              "px-6",
              "py-3",
              "uppercase",
              "flex",
              "items-center",
              "justify-center",
              "font-comfortaa",
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
                  "font-comfortaa",
                )}>
                <GoCommentDiscussion className={clsx("text-4xl", "mr-8")} />
                <span className={clsx("text-xl")}>Forum</span>
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
                  "font-comfortaa",
                )}>
                <BiNotepad className={clsx("text-4xl", "mr-8")} />
                <span className={clsx("text-xl")}>Tutorials</span>
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
                  "font-comfortaa",
                )}>
                <BiBriefcase className={clsx("text-4xl", "mr-8")} />
                <span className={clsx("text-xl")}>Jobs</span>
              </a>
            </Link>
          </li>
          <li className={clsx("flex-grow")} />
          <li className={clsx("items-center", "flex", "mx-4", "mb-4")}>
            <BsFillPersonFill className={clsx("text-3xl", "mr-2")} />
            <span className={clsx("text-xl")}>Username</span>
            <div className={clsx("ml-auto")} />
            <Link href="/profile">
              <a>
                <CgProfile className={clsx("text-3xl", "mr-2")} />
              </a>
            </Link>
            <Link href="/logout">
              <a>
                <IoMdLogOut className={clsx("text-3xl")} />
              </a>
            </Link>
          </li>
          <li className={clsx("border-t", "border-gray-300")}>
            <Link href="/settings">
              <a
                className={clsx(
                  "flex",
                  "items-center",
                  "py-6",
                  "px-8",
                  "hover:bg-gray-200",
                  "font-comfortaa",
                )}>
                <FiSettings className={clsx("text-4xl", "mr-8")} />
                <span className={clsx("text-xl")}>Settings</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);
