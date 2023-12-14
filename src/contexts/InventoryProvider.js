import React, { createContext } from 'react';
import Bookstore from '../util/Bookstore';

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const inventory = new Bookstore();

  return (
    <InventoryContext.Provider value={inventory}>
      {children}
    </InventoryContext.Provider>
  );
};