import React, { useEffect, useState } from 'react';
import './App.scss';
import { NotFound } from './pages/NotFound/NotFound';
import { Posts } from './pages/Posts/Posts';

function App() {
  return (
    <div className='App'>
      <Posts />
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
