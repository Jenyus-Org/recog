import clsx from "clsx";
import React from "react";
import { Header } from "./Header";
import { Sidenav } from "./Sidenav";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <React.Fragment>
    <Header />
    <Sidenav />
    <main className={clsx("p-6", "ml-72", "mt-16")}>{children}</main>
    <footer></footer>
  </React.Fragment>
);
