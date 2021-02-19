import { FormInput } from "@ui/Form";
import clsx from "clsx";
import React from "react";

export const Header = () => (
  <header
    className={clsx(
      "bg-white",
      "px-6",
      "flex",
      "items-center",
      "h-16",
      "flex-row-reverse",
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
      className={clsx("mr-4")}
    />
  </header>
);
