import React, { useState, useContext } from 'react';
import { Product } from './Products';
import CartContext from './context';

export function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState(0);

  const deleteProduct = (item: Product) => {
    console.log(item);
    console.log(cart);
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
