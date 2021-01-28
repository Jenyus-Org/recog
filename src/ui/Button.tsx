import clsx from "clsx";
import React from "react";
import { variant } from "./variant";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  icon?: React.ReactNode;
  pill?: boolean;
  variant?: variant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { icon, children, pill = false, variant = "primary", className, ...props },
    ref,
  ) => (
    <button
      className={clsx([
        "px-4",
        "py-2",
        "border",
        "border-transparent",
        "text-base",
        "text-white",
        "font-medium",
        `bg-${variant}`,
        `hover:bg-${variant}-dark`,
        "flex",
        "items-center",
        {
          "rounded-full": pill,
          "rounded-md": !pill,
        },
        className,
      ])}
      {...props}
      ref={ref}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  ),
);
