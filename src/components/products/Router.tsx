import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Products } from './Products';
import { Cart } from './Cart';

export const Router = () => {
  return (
    <BrowserRouter>
      <Link to='/products'>Products</Link>
      <br />
      <Link to='/cart'>Cart</Link>

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
