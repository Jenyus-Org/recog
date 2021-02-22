import clsx from "clsx";
import React from "react";
import { CustomComponentProps, colorVariant } from "./helpers";

export interface ButtonProps extends CustomComponentProps<HTMLButtonElement> {
  icon?: React.ReactNode;
  pill?: boolean;
  outline?: boolean;
  variant?: colorVariant | "transparent";
  elevate?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      icon,
      children,
      pill,
      outline,
      variant = "default",
      className,
      elevate,
      ...props
    },
    ref,
  ) => (
    <button
      className={clsx(
        "px-4",
        "py-2",
        "border",
        "border-transparent",
        "text-white",
        "font-medium",
        "flex",
        "items-center",
        "focus:outline-none",
        {
          "rounded-full": !!pill,
          "rounded-md": !pill,
          "text-gray-500": variant === "transparent" || variant === "default",
          "border-gray-300": variant === "default",
        },
        !outline && {
          "text-gray-500": variant === "light-gray",
          "bg-gray-300": variant === "light-gray",
          "bg-primary": variant === "primary",
          "bg-secondary": variant === "secondary",
          "bg-gray-400": variant === "gray",
        },
        !!outline && {
          "text-primary": variant === "primary",
          "border-primary": variant === "primary",
          "text-secondary": variant === "secondary",
          "border-secondary": variant === "secondary",
          "text-gray-500": variant === "gray",
          "border-gray-500": variant === "gray",
          "text-gray-400": variant === "light-gray",
          "border-gray-300": variant === "light-gray",
        },
        !elevate && [
          !outline && {
            "hover:bg-gray-400": variant === "light-gray",
            "hover:bg-gray-200": variant === "default",
            "hover:bg-primary-dark": variant === "primary",
            "hover:bg-secondary-dark": variant === "secondary",
            "hover:bg-gray-500": variant === "gray",
          },
          !!outline && {
            "hover:bg-primary-light": variant === "primary",
            "hover:bg-secondary-light": variant === "secondary",
            "hover:text-white":
              variant === "primary" || variant === "secondary",
            "hover:bg-gray-200": variant === "gray",
            "hover:bg-gray-100": variant === "light-gray",
          },
        ],
        !!elevate && [
          "hover:ring-1",
          "hover:shadow",
          "transition-shadow",
          "duration-200",
          "ease-in-out",
          !outline && {
            "hover:ring-gray-400": variant === "light-gray",
            "hover:ring-gray-200":
              variant === "default" || variant === "transparent",
            "hover:ring-primary-dark": variant === "primary",
            "hover:ring-secondary-dark": variant === "secondary",
            "hover:ring-gray-500": variant === "gray",
          },
          !!outline && {
            "hover:ring-primary-light": variant === "primary",
            "hover:ring-secondary-light": variant === "secondary",
            "hover:ring-gray-200":
              variant === "gray" ||
              variant === "default" ||
              variant === "transparent",
            "hover:ring-gray-100": variant === "light-gray",
          },
        ],
        className,
      )}
      {...props}
      ref={ref}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  ),
);
