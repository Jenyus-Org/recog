import { Dropdown } from "@ui/Dropdown";
import { FormInput } from "@ui/Form";
import clsx from "clsx";
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
      "justify-center",
      "col-span-2",
      "h-20",
      "relative",
    )}>
    <div className={clsx("w-72")} />
    <FormInput
      pill
      fill="light-gray"
      placeholder="Search..."
      className={clsx("ml-6")}
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
);
