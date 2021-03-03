import React from 'react';
import './App.scss';
import { Pagination } from './components/pagination/Pagination';
import css from './components/pagination/Pagination.module.scss';

import { Timer } from './components/timer/Timer';
import timerCss from './components/timer/Timer.module.scss';

function App() {
  return (
    <div className='App'>
      <Pagination
        activePage={2}
        totalItems={10}
        perPage={1}
        withActions={true}
        classes={{ btn: css.btn, activeBtn: css.active }}
        onChangePage={newPage => {}}
      />
      <br />
      <Pagination
        activePage={2}
        totalItems={10}
        perPage={1}
        classes={{ btn: css.btn, activeBtn: css.active }}
        onChangePage={newPage => {}}
      />

      {/* <Timer time={1000} autostart={true} step={3000} onTick={() => {}} onTimeEnd={() => {}}
        onTimeStart={() => {}} onTimePause={() => {}} /> */}
    </div>
  );
}

export default App;
