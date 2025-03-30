"use client";
import { useUser } from "@clerk/nextjs";
import { createContext } from "react";
import React from "react";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const { user } = useUser();
  const value = {
    user,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
