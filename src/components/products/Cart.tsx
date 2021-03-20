import React, { useState } from 'react';
import { Product } from './Products';

export function Cart() {
  const [cart, setCart] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const deleteProduct = (item: Product) => {
    console.log(item);
  };
  return (
    <div>
      <div>Products in cart: </div>
      {(cart as Product[]).map((item: Product, index: number) => {
        return (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>price: {item.price}</p>
            <button onClick={() => deleteProduct(item)}>Delete from cart</button>
          </div>
        );
      })}
      <p>Total price: {totalPrice}</p>
    </div>
  );
}
