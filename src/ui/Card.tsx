import clsx from "clsx";
import React from "react";
import { CustomComponentProps } from "./helpers";

interface CardProps extends CustomComponentProps<HTMLDivElement> {
  elevated?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ elevated, children, className, ...props }) => (
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
      {...props}>
      {children}
    </div>
  ),
);

interface CardBodyProps extends CustomComponentProps<HTMLDivElement> {}

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, ...props }) => (
    <div className={clsx("flex-1", className)} {...props}>
      {children}
    </div>
  ),
);

interface CardHeaderProps extends CustomComponentProps<HTMLParagraphElement> {}

export const CardHeader = React.forwardRef<
  HTMLParagraphElement,
  CardHeaderProps
>(({ children, className, ...props }) => (
  <p className={clsx("text-lg", "font-bold", className)} {...props}>
    {children}
  </p>
));

interface CardContentProps extends CustomComponentProps<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, ...props }) => (
    <div className={clsx("text-base", "text-gray-400", className)} {...props}>
      {children}
    </div>
  ),
);

interface CardSidebarProps extends CustomComponentProps<HTMLDivElement> {}

export const CardSidebar = React.forwardRef<HTMLDivElement, CardSidebarProps>(
  ({ children, className, ...props }) => (
    <div className={clsx("mr-4", "px-4", className)} {...props}>
      {children}
    </div>
  ),
);

interface CardFooterProps extends CustomComponentProps<HTMLDivElement> {}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }) => (
    <div
      className={clsx(
        "flex-full",
        "border-t",
        "border-gray-200",
        "pt-2",
        "mt-4",
        className,
      )}
      {...props}>
      {children}
    </div>
  ),
);
