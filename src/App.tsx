import React, { useEffect } from 'react';
import './App.scss';
import { useProducts, Product, IFilterOptions } from './hooks/useProducts';
// import { MainComponentProvider } from './components/context/MainComponent';
// import { Component1, Component2 } from './components/context/Component';
import { Router } from './components/products/Router';

function App() {
  return (
    <div className='App'>
      <Router />
    </div>
  );
}

export default App;
