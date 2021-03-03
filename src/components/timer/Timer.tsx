import React, { useState } from 'react';
import cn from 'classnames';
import css from './Timer.module.scss';

interface TimerProps {
  time: number; //time to countdown in seconds
  autostart: boolean; //If true should start immediately (use useEffect here)
  step: number; //in ms— time to refresh timer in ms (time between ticks)
  onTick: () => void; //executed every 'tick' (every interval)
  onTimeEnd: () => void; //execute when time is gone
  onTimeStart: () => void; //execute when the timer is started
  onTimePause: () => void; //execute when the timer is stopped
}

export const Timer = ({ time, autostart, step, onTick, onTimeEnd, onTimeStart, onTimePause }: TimerProps) => {
  return <div></div>;
};
