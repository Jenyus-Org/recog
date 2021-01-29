import clsx from "clsx";
import React from "react";
import { CustomComponentProps, colorVariant } from "./helpers";

interface FormProps extends CustomComponentProps<HTMLFormElement> {
  prevent?: boolean;
}

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ onSubmit, prevent, ...props }) => {
    const customOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      if (prevent) {
        event.preventDefault();
      }
      onSubmit && onSubmit(event);
    };

    return <form onSubmit={customOnSubmit} {...props} />;
  },
);

interface FormInputProps extends CustomComponentProps<HTMLInputElement> {
  fill?: colorVariant;
  variant?: colorVariant;
  pill?: boolean;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ fill = "default", variant = "default", pill, className, ...props }) => (
    <input
      className={clsx(
        "py-2",
        "px-4",
        "text-white",
        "focus:outline-none",
        {
          "placeholder-gray-200": fill !== "default" && fill !== "light-gray",
          "placeholder-gray-400": fill === "light-gray",
          "text-gray-500": fill === "default" || fill === "light-gray",
          "bg-gray-300": fill === "light-gray",
          "border-b": fill === "default",
          "border-gray-300": variant === "default" || variant === "light-gray",
          "border-primary": variant === "primary",
          "border-secondary": variant === "secondary",
          "border-gray-400": variant === "gray",
          rounded: fill !== "default",
          "rounded-full": !!pill,
          "bg-primary": fill === "primary",
          "bg-secondary": fill === "secondary",
          "bg-gray-400": fill === "gray",
        },
        className,
      )}
      {...props}
    />
  ),
);
