import { Box } from "@chakra-ui/layout";
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
    <Box as="main" p={6} ml={64} mt={16}>
      {children}
    </Box>
    <footer></footer>
  </React.Fragment>
);
