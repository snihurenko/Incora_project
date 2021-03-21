import React, { useContext } from 'react';
import { Product } from './Products';
import ProductsContext from './context';

export function Cart() {
  const { state, dispatch } = useContext(ProductsContext);

  const totalPrice = state.cart.reduce((sum: any, product: any) => {
    if (product.quantity) {
      return sum + product.price * product.quantity;
    } else {
      return sum + product.price;
    }
  }, 0);

  return (
    <div>
      {state.cart.length > 0 ? <h2>Products in cart: </h2> : <h2>No products in cart </h2>}
      {(state.cart as Product[]).map((item: Product, index: number) => {
        return (
          <div key={index}>
            <h3>
              {item.name} ({item.quantity ? item.quantity : 1})
            </h3>
            <p>price: {item.price}</p>
            <button onClick={() => dispatch({ type: 'DELETE_FROM_CART', payload: item })}>
              Delete from cart
            </button>
          </div>
        );
      })}
      <h2>Total price: {totalPrice}</h2>
    </div>
  );
}
