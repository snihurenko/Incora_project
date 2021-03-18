import React from 'react';
import { Product } from './Products';

interface ProductsContext {
  cart: Product[];
  setCart(value: Product): void;
}

export default React.createContext<ProductsContext>({
  cart: [{ id: 10, name: 'appp', price: 20 }],
  setCart: () => {}
});
