import React, { useContext, useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Products } from './Products';
import { Cart } from './Cart';
import CartContext from './context';
import { Product } from './Products';

export const Router = () => {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, setCart }}>
        <Link to='/products'>Products</Link>
        <br />
        <Link to='/cart'>Cart</Link>
      </CartContext.Provider>

      <Switch>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
