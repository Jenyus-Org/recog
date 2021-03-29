import React, { createContext, useState } from "react";

interface AuthContextValue {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
  refreshToken: string;
  setRefreshToken: (refreshToken: string) => void;
}

export const AuthContext = createContext({} as AuthContextValue);

export const AuthProvider = (props: any) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken: setAccessToken,
        refreshToken,
        setRefreshToken,
      }}
      {...props}
    />
  );
};
