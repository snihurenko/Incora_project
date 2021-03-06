import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import css from './Timer.module.scss';
import moment from 'moment';
interface TimerProps {
  time: number;
  autostart?: boolean;
  step: number;
  onTick?: () => void;
  onTimeEnd?: () => void;
  onTimeStart?: () => void;
  onTimePause?: () => void;
}

export const Timer = ({ time, autostart, step, onTick, onTimeEnd, onTimeStart, onTimePause }: TimerProps) => {
  const [currentTime, setCurrentTime] = useState<number>(time);
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
  const [intervalTimer, setIntervalTimer] = useState<NodeJS.Timeout | null>(null);

  const startTimer = (timeLeft: number) => {
    onTimeStart?.();
    setIsTimerStarted(true);

    const interval = setInterval(() => {
      if (timeLeft === 0) {
        clearInterval(intervalTimer!);
        setIntervalTimer(null);
        setIsTimerStarted(false);
        onTimeEnd?.();
      } else {
        onTick?.();
        timeLeft -= step / 1000;
        setCurrentTime(timeLeft);
      }
    }, step);
    setIntervalTimer(interval);
  };

  const stopTimer = () => {
    onTimePause?.();
    setIsTimerStarted(false);
    clearInterval(intervalTimer!);
    setIntervalTimer(null);
  };

  useEffect(() => {
    if (autostart) {
      startTimer(time);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (intervalTimer) {
        clearInterval(intervalTimer);
      }
    };
  }, []);

  const barWidth = `${100 - (100 - currentTime * (100 / time))}%`;
  const seconds = Math.floor(currentTime % 60);
  const minutes = Math.floor((currentTime / 60) % 60);
  const formatted = `${minutes}:${seconds}`;

  return (
    <div className={css.timerContainer}>
      <div className={css.timer}>{moment(formatted, 'mm:ss').format('mm:ss')}</div>
      {isTimerStarted ? (
        <button className={css.toggleTimer} onClick={stopTimer}>
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
