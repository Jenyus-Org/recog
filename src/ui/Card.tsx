import clsx from "clsx";
import React from "react";
import { CustomComponentProps } from "./helpers";

interface CardProps extends CustomComponentProps<HTMLDivElement> {
  elevated?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ elevated, className, ...props }, ref) => (
    <div
      className={clsx(
        "w-full",
        "flex",
        "flex-wrap",
        "content-between",
        "rounded-md",
        "p-4",
        {
          shadow: !!elevated,
          border: !elevated,
          "border-gray-200": !elevated,
        },
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);

interface CardBodyProps extends CustomComponentProps<HTMLDivElement> {}

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => (
    <div className={clsx("flex-1", className)} ref={ref} {...props} />
  ),
);

interface CardHeaderProps extends CustomComponentProps<HTMLDivElement> {}

export const CardHeader = React.forwardRef<
  HTMLParagraphElement,
  CardHeaderProps
>(({ className, ...props }, ref) => (
  <div
    className={clsx("text-lg", "font-bold", className)}
    ref={ref}
    {...props}
  />
));

interface CardContentProps extends CustomComponentProps<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div
      className={clsx("text-base", "text-gray-400", className)}
      ref={ref}
      {...props}
    />
  ),
);

interface CardSidebarProps extends CustomComponentProps<HTMLDivElement> {}

export const CardSidebar = React.forwardRef<HTMLDivElement, CardSidebarProps>(
  ({ className, ...props }, ref) => (
    <div className={clsx("mr-4", "px-4", className)} ref={ref} {...props} />
  ),
);

interface CardFooterProps extends CustomComponentProps<HTMLDivElement> {}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      className={clsx(
        "flex-full",
        "border-t",
        "border-gray-200",
        "pt-2",
        "mt-4",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
