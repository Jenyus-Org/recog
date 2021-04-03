import React, { createContext, useEffect, useState } from "react";

interface AuthContextValue {
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
  refreshToken: string;
  setRefreshToken: (refreshToken: string) => void;
}

export const AuthContext = createContext({} as AuthContextValue);

export const AuthProvider = (props: any) => {
  const [accessToken, _setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const at = localStorage.getItem("token");
      if (at) {
        _setAccessToken(at);
      }
    }
  }, [_setAccessToken]);

  const setAccessToken = (token: string | null) => {
    if (typeof window !== "undefined") {
      if (token) {
        localStorage.setItem("token", token);
      } else {
        localStorage.removeItem("token");
      }
    }
    _setAccessToken(token);
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        refreshToken,
        setRefreshToken,
      }}
      {...props}
    />
  );
};
