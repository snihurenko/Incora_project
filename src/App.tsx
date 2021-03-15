import React, { useEffect } from 'react';
import './App.scss';
import { Pagination } from './components/pagination/Pagination';
import css from './components/pagination/Pagination.module.scss';
import { Timer } from './components/timer/Timer';
import timerCss from './components/timer/Timer.module.scss';
import { useProducts, Product, IFilterOptions } from './hooks/useProducts';
import { MainComponentProvider } from './components/context/MainComponent';
import { Component1, Component2 } from './components/context/Component';

function App() {
  return (
    <div className='App'>
      <MainComponentProvider>
        <Component1 />
        <Component2 />
      </MainComponentProvider>
    </div>
  );
}

export default App;
