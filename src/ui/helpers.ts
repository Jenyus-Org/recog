import React from "react";

export type colorVariant =
  | "primary"
  | "secondary"
  | "gray"
  | "light-gray"
  | "default";

export interface CustomComponentProps<T> extends React.HTMLProps<T> {}
