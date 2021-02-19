import { FormInput } from "@ui/Form";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { BsBellFill } from "react-icons/bs";
import { HiOutlineChatAlt } from "react-icons/hi";

export const Header = () => (
  <header
    className={clsx(
      "bg-white",
      "px-6",
      "flex",
      "items-center",
      "h-16",
      "fixed",
      "top-0",
      "right-0",
      "left-0",
      "z-40",
      "shadow-sm",
    )}>
    <FormInput
      pill
      fill="light-gray"
      placeholder="Search..."
      className={clsx("mr-4", "ml-auto")}
    />
    <div>
      <Link href="/chat">
        <a className={clsx("p-2", "flex", "items-center")}>
          <HiOutlineChatAlt className={clsx("text-3xl")} />
        </a>
      </Link>
    </div>
    <div>
      <Link href="/notifications">
        <a className={clsx("p-2", "flex", "items-center", "mr-2")}>
          <BsBellFill className={clsx("text-3xl")} />
        </a>
      </Link>
    </div>
  </header>
);
