import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <React.Fragment>
    <main>{children}</main>
  </React.Fragment>
);
