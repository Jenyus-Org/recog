import React, { createContext, useState } from "react";

type UserContextValue = [any, (user: any) => void];

export const UserContext = createContext(([] as unknown) as UserContextValue);

export const UserProvider = (props: any) => {
  const value = useState(null);

  return <UserContext.Provider value={value} {...props} />;
};
