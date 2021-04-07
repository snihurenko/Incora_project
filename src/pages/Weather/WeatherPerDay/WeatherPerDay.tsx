import React from 'react';
import css from './WeatherPerDay.module.scss';

export const WeatherPerDay = ({ data, time, day }: any) => {
  return (
    <table>
      <caption>Дата: {day}</caption>
      <caption>Час: {time}</caption>
      <caption className={css.info}>Опис: {data.weather[0].description}</caption>
      <tbody>
        <tr className={css.tr}>
          <td>Температура, °C</td>
          <td>{Math.ceil(data.main.temp)}</td>
        </tr>
        <tr className={css.tr}>
          <td>відчувається як</td>
          <td>{Math.ceil(data.main.feels_like)}</td>
        </tr>
        <tr className={css.tr}>
          <td>Тиск, мм</td>
          <td>{Math.ceil(data.main.pressure)}</td>
        </tr>
        <tr className={css.tr}>
          <td>Вологість, %</td>
          <td>{Math.ceil(data.main.humidity)}</td>
        </tr>
        <tr className={css.tr}>
          <td>Вітер, м/сек</td>
          <td>{Math.ceil(data.wind.speed)}</td>
        </tr>
        <tr className={css.tr}>
          <td>Ймовірність опадів, %</td>
          <td>{Math.ceil(data.pop)}</td>
        </tr>
      </tbody>
    </table>
  );
};
