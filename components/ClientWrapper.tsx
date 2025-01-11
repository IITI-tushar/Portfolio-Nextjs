"use client";

import React, { createContext, useContext, ReactNode } from "react";

const ClientSideContext = createContext<any>(null);

export function ClientContextProvider({ children }: { children: ReactNode }) {
  // You can add any shared state or functions here
  const value = {};

  return (
    <ClientSideContext.Provider value={value}>
      {children}
    </ClientSideContext.Provider>
  );
}

export function useClientContext() {
  const context = useContext(ClientSideContext);
  if (context === undefined) {
    throw new Error(
      "useClientContext must be used within a ClientContextProvider"
    );
  }
  return context;
}
