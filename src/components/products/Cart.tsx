import React, { useState, useContext } from 'react';
import { Product } from './Products';
import CartContext from './context';

export function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, product) => {
    if (product.quantity) {
      return sum + product.price * product.quantity;
    } else {
      return sum + product.price;
    }
  }, 0);

  const deleteProduct = (product: Product) => {
    if (product.quantity! > 1) {
      product.quantity!--;
      setCart([...cart]);
    } else {
      setCart(cart.filter((item: Product) => item.id !== product.id));
    }
  };

  return (
    <div>
      {cart.length > 0 ? <h2>Products in cart: </h2> : <h2>No products in cart </h2>}
      {(cart as Product[]).map((item: Product, index: number) => {
        return (
          <div key={index}>
            <h3>
              {item.name} ({item.quantity ? item.quantity : 1})
            </h3>
            <p>price: {item.price}</p>
            <button onClick={() => deleteProduct(item)}>Delete from cart</button>
          </div>
        );
      })}
      <h2>Total price: {totalPrice}</h2>
    </div>
  );
}
