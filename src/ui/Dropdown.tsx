import clsx from "clsx";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Button, ButtonProps } from "./Button";

interface DropdownProps extends ButtonProps {
  multiple?: boolean;
}

export const Dropdown = React.forwardRef<HTMLButtonElement, DropdownProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const [open, setOpen] = React.useState(false);

    const closeDropdown = React.useCallback(() => setOpen(false), [setOpen]);

    const toggleDropdown = React.useCallback(() => setOpen((open) => !open), [
      setOpen,
    ]);

    return (
      <div className={clsx("relative", "inline-block", "text-left", className)}>
        <div>
          <Button
            {...props}
            className={clsx("inline-flex", "justify-center", "w-full")}
            tabIndex={0}
            onBlur={closeDropdown}
            onClick={toggleDropdown}
            ref={ref}
            variant={variant}>
            Options
            <BsChevronDown className="-mr-1 ml-2 h-5 w-5" size="20" />
          </Button>
        </div>
        <div
          className={clsx(
            "origin-top-left",
            "absolute",
            "left-0",
            "w-56",
            "rounded-md",
            "shadow-lg",
            "ring-1",
            "ring-black",
            "ring-opacity-5",
            "transition-all",
            "z-20",
            "text-white",
            {
              "opacity-0": !open,
              "opacity-100": open,
              "mt-0": !open,
              "mt-2": open,
              invisible: !open,
              visible: open,
              "border-gray-300": variant === "default",
              "text-gray-500":
                variant === "transparent" ||
                variant === "default" ||
                variant === "light-gray",
              "bg-white": variant === "transparent" || variant === "default",
              "bg-gray-300": variant === "light-gray",
              "hover:bg-gray-400": variant === "light-gray",
              "hover:bg-gray-200": variant === "default",
              "bg-primary": variant === "primary",
              "hover:bg-primary-dark": variant === "primary",
              "bg-secondary": variant === "secondary",
              "hover:bg-secondary-dark": variant === "secondary",
              "bg-gray-400": variant === "gray",
              "hover:bg-gray-500": variant === "gray",
            },
          )}>
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu">
            <a
              href="#"
              className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              role="menuitem">
              Account settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              role="menuitem">
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              role="menuitem">
              License
            </a>
            <form method="POST" action="#">
              <button
                type="submit"
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem">
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  },
);
