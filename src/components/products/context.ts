import React from 'react';
import { Product } from './Products';

interface ProductsContextValue {
  cart: Product[];
  setCart(value: Product[]): void;
}

export default React.createContext<ProductsContextValue>({
  cart: [],
  setCart: () => {}
});
