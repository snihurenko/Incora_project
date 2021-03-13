import { useState, useRef, useEffect } from 'react';

export const useTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);
  const [isPaused, setIsPaused] = useState(false);
  const isFinished = isPaused && time === initialTime;

  const timer = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    timer.current = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);
  };

  useEffect(() => {
    if (time <= 0) {
      clearInterval(timer.current!);
      timer.current = null;
    }
  }, [time]);

  const stopTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
      setTime(initialTime);
    }
  };

  const pauseTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
      setIsPaused(true);
    }
  };

  return {
    time,
    startTimer,
    stopTimer,
    pauseTimer,
    isPaused,
    isFinished
  };
};
