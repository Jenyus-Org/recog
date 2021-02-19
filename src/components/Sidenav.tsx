import { Button } from "@ui/Button";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { BiBriefcase, BiNotepad } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GoCommentDiscussion } from "react-icons/go";
import { IoMdLogOut } from "react-icons/io";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const NavLink = ({ to, children, icon }: NavLinkProps) => (
  <Link href={to}>
    <a
      className={clsx(
        "flex",
        "items-center",
        "py-4",
        "px-8",
        "hover:bg-gray-200",
        "font-comfortaa",
      )}>
      <span className={clsx("text-4xl", "mr-8")}>{icon}</span>
      <span className={clsx("text-lg")}>{children}</span>
    </a>
  </Link>
);

export const Sidenav = () => (
  <div
    className={clsx(
      "w-64",
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
    </div>
    <div
      className={clsx("flex", "flex-grow", "flex-col", "pt-4", "items-center")}>
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
              "text-sm",
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
              "text-sm",
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
            <NavLink to="/forum" icon={<GoCommentDiscussion />}>
              Forum
            </NavLink>
          </li>
          <li>
            <NavLink to="/tutorials" icon={<BiNotepad />}>
              Tutorials
            </NavLink>
          </li>
          <li>
            <NavLink to="/jobs" icon={<BiBriefcase />}>
              Jobs
            </NavLink>
          </li>
          <li className={clsx("flex-grow")} />
          <li
            className={clsx(
              "border-t",
              "border-gray-300",
              "items-center",
              "flex",
              "mx-4",
              "py-4",
            )}>
            <BsFillPersonFill className={clsx("text-3xl", "mr-2")} />
            <span className={clsx("text-lg")}>Username</span>
            <div className={clsx("ml-auto")} />
            <Link href="/profile">
              <a>
                <FiSettings className={clsx("text-3xl", "mr-2")} />
              </a>
            </Link>
            <Link href="/logout">
              <a>
                <IoMdLogOut className={clsx("text-3xl")} />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);
