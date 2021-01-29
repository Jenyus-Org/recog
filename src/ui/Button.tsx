import clsx from "clsx";
import React from "react";
import { CustomComponentProps, colorVariant } from "./helpers";

interface ButtonProps extends CustomComponentProps<HTMLButtonElement> {
  icon?: React.ReactNode;
  pill?: boolean;
  variant?: colorVariant | "transparent";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { icon, children, pill = false, variant = "default", className, ...props },
    ref,
  ) => (
    <button
      className={clsx([
        className,
        "px-4",
        "py-2",
        "border",
        "border-transparent",
        "text-base",
        "text-white",
        "font-medium",
        "flex",
        "items-center",
        "focus:outline-none",
        {
          "border-gray-300": variant === "default",
          "text-gray-500":
            variant === "transparent" ||
            variant === "default" ||
            variant === "light-gray",
          "bg-gray-300": variant === "light-gray",
          "hover:bg-gray-400": variant === "light-gray",
          "hover:bg-gray-200": variant === "default",
          "bg-primary": variant === "primary",
          "hover:bg-primary-dark": variant === "primary",
          "bg-secondary": variant === "secondary",
          "hover:bg-secondary-dark": variant === "secondary",
          "bg-gray-400": variant === "gray",
          "hover:bg-gray-500": variant === "gray",
          "rounded-full": !!pill,
          "rounded-md": !pill,
        },
      ])}
      {...props}
      ref={ref}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  ),
);
