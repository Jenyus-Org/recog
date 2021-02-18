import clsx from "clsx";
import React from "react";
import { Sidenav } from "./Sidenav";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <React.Fragment>
    <Sidenav />
    <main className={clsx("p-6", "ml-72")}>{children}</main>
    <footer></footer>
  </React.Fragment>
);
