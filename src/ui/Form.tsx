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
  variant?: colorVariant;
  outline?: colorVariant;
  pill?: boolean;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ variant = "default", outline = "default", pill, className, ...props }) => (
    <input
      className={clsx([
        "py-2",
        "px-4",
        "text-white",
        "outline-none",
        {
          "text-gray-500": variant === "default" || variant === "light-gray",
          "bg-gray-300": variant === "light-gray",
          "border-b": variant === "default",
          "border-gray-300": outline === "default" || outline === "light-gray",
          "border-primary": outline === "primary",
          "border-secondary": outline === "secondary",
          "border-gray-400": outline === "gray",
          rounded: variant !== "default",
          "rounded-full": !!pill,
          "bg-primary": variant === "primary",
          "bg-secondary": variant === "secondary",
          "bg-gray-400": variant === "gray",
        },
        className,
      ])}
      {...props}
    />
  ),
);
