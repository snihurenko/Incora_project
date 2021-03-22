import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Products } from './Products';
import { Cart } from './Cart';
import CartContext from './context';
import { Product } from './Products';

const initialState: any = {
  cart: []
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const addedItemIndex = state.cart.findIndex((item: Product) => item.id === action.payload.id);

      if (addedItemIndex < 0) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
      } else {
        const addedItem = { ...state.cart[addedItemIndex] };
        if (addedItem.quantity) {
          addedItem.quantity++;
        }
        const newCart = [...state.cart];
        newCart[addedItemIndex] = addedItem;

        return {
          ...state,
          cart: newCart
        };
      }
    }
    case 'DELETE_FROM_CART': {
      if (action.payload.quantity! > 1) {
        action.payload.quantity!--;
        return {
          ...state,
          cart: [...state.cart]
        };
      } else {
        const newState = state.cart.filter((item: Product) => item.id !== action.payload.id);
        return {
          ...state,
          cart: [...newState]
        };
      }
    }

    default:
      return state;
  }
};

export const Router = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <Link to='/products'>Products</Link>
      <br />
      <Link to='/cart'>Cart</Link>

      <CartContext.Provider value={{ state, dispatch }}>
        <Switch>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </CartContext.Provider>
    </BrowserRouter>
  );
};
