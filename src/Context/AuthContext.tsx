import React, { createContext, useState } from "react";

interface AuthContextProps {
  children: any;
}

export const AuthContext = createContext({});

export const AuthContextProvider = (props: AuthContextProps) => {
  const { children } = props;
  const [accessToken, setAccessToken] = useState<string>();

  const storeAccessToken = (contactData: any) => {
    setAccessToken(contactData);
  };

  const value = {
    accessToken,
    storeAccessToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
