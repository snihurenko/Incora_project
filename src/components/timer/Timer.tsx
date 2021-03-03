import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import css from './Timer.module.scss';

interface TimerProps {
  time: number; //time to countdown in seconds
  autostart?: boolean; //If true should start immediately (use useEffect here)
  step: number; //in ms— time to refresh timer in ms (time between ticks)
  onTick: () => void; //executed every 'tick' (every interval)
  onTimeEnd: () => void; //execute when time is gone
  onTimeStart: () => void; //execute when the timer is started
  onTimePause: () => void; //execute when the timer is stopped
}

export const Timer = ({ time, autostart, step, onTick, onTimeEnd, onTimeStart, onTimePause }: TimerProps) => {
  const [currentTime, setCurrentTime] = useState<number>(time);
  const [timerState, setTimerState] = useState<boolean>(false);

  let interval: any;
  const startTimer = (timeLeft: number) => {
    console.log(timeLeft);

    setTimerState(true);

    interval = setInterval(timeLeft => {
      timeLeft--;
      setCurrentTime(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimerState(false);
      }
    }, step);
  };

  const stopTimer = () => {
    clearInterval(interval);
  };

  useEffect(() => {
    if (autostart) {
      startTimer(time);
    }
  }, []);

  const barWidth = `${100 - (100 - currentTime * (100 / time))}%`;

  return (
    <div className={css.timerContainer}>
      <div className={css.timer}>{currentTime}</div>
      {timerState ? (
        <button className={css.toggleTimer} onClick={() => stopTimer()}>
          Stop
        </button>
      ) : (
        <button className={css.toggleTimer} onClick={() => startTimer(time)}>
          Start
        </button>
      )}

      <div className={css.bar} style={{ width: barWidth }}></div>
    </div>
  );
};
