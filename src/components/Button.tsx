import clsx from "clsx";
import React from "react";

interface ButtonProps {
  icon?: React.ReactNode;
  pill?: boolean;
  color?: "indigo" | "blue";
}

const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
  icon,
  children,
  pill = false,
  color = "blue",
  ...props
}) => {
  return (
    <button
      className={clsx([
        "px-4",
        "py-2",
        "border",
        "border-transparent",
        "text-base",
        "text-white",
        "font-medium",
        `bg-${color}-600`,
        `hover:bg-${color}-700`,
        "flex",
        "items-center",
        {
          "rounded-full": pill,
          "rounded-md": !pill,
        },
      ])}
      aria-haspopup="true"
      {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
