import React from "react";

export type variant = "primary" | "secondary";

export interface CustomComponentProps<T> extends React.HTMLProps<T> {}
