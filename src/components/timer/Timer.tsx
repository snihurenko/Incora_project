import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import css from './Timer.module.scss';
import moment from 'moment';
interface TimerProps {
  time: number;
  autostart?: boolean;
  step: number;
  onTick: () => void;
  onTimeEnd: () => void;
  onTimeStart: () => void;
  onTimePause: () => void;
}

export const Timer = ({ time, autostart, step, onTick, onTimeEnd, onTimeStart, onTimePause }: TimerProps) => {
  const [currentTime, setCurrentTime] = useState<number>(time);
  const [timerState, setTimerState] = useState<boolean>(false);
  const [intervalTimer, setIntervalTimer] = useState<NodeJS.Timeout>();

  const startTimer = (timeLeft: number) => {
    if (onTimeStart) {
      onTimeStart();
    }
    setTimerState(true);

    const interval = setInterval(() => {
      if (onTick) {
        onTick();
      }
      timeLeft--;
      setCurrentTime(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(intervalTimer!);
        setTimerState(false);
        if (onTimeEnd) {
          onTimeEnd();
        }
      }
    }, step);
    setIntervalTimer(interval);
  };

  const stopTimer = () => {
    if (onTimePause) {
      onTimePause();
    }
    setTimerState(false);
    clearInterval(intervalTimer!);
  };

  useEffect(() => {
    if (autostart) {
      startTimer(time);
    }
  }, []);

  const barWidth = `${100 - (100 - currentTime * (100 / time))}%`;

  const seconds = Math.floor(currentTime % 60),
    minutes = Math.floor((currentTime / 60) % 60);

  const formatted = `${minutes}:${seconds}`;

  return (
    <div className={css.timerContainer}>
      <div className={css.timer}>{moment(formatted, 'mm:ss').format('mm:ss')}</div>
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
