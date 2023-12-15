import React, { createContext } from 'react';
import Bookstore from '../util/Bookstore';

export const InventoryContext = createContext();

// The InventoryProvider component is a wrapper for the Bookstore class.
export const InventoryProvider = ({ children }) => {
  const inventory = new Bookstore();

  return (
    <InventoryContext.Provider value={inventory}>
      {children}
    </InventoryContext.Provider>
  );
};