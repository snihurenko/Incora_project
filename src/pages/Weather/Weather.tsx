import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { weatherSelector } from '../../state/selectors/weatherSelector';
import { loadWeatherAction } from '../../state/actions/weatherAction';
import { WeatherPerDay } from './WeatherPerDay/WeatherPerDay';

export const WeatherPage = () => {
  const dispatch = useDispatch();

  const weatherData = useSelector(weatherSelector);
  const [city, setCity] = useState<string>(weatherData.city.name);

  useEffect(() => {
    dispatch(loadWeatherAction(city));
  }, []);

  return (
    <div>
      <Formik
        initialValues={{ email: 'bla' }}
        onSubmit={() => {
          dispatch(loadWeatherAction(city));
          setCity('');
        }}
      >
        <Form>
          <label htmlFor='search'>Виберіть місто: </label>
          <Field
            id='search'
            name='search'
            placeholder='Наприклад: Lviv'
            value={city}
            onChange={(e: any) => setCity(e.target.value)}
          />
          <button type='submit'>Пошук</button>
        </Form>
      </Formik>

      <h2>Weather for {weatherData.city.name}</h2>
      {weatherData.city.coord && (
        <p>
          Coordinates: {weatherData.city.coord.lat}, {weatherData.city.coord.lon}
        </p>
      )}

      {weatherData.forecast.map((data: any) => {
        const date = new Date(data.dt * 1000);
        const day = date.toLocaleDateString('en-GB');
        const time = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
        return <WeatherPerDay data={data} key={data.dt} time={time} day={day} />;
      })}
    </div>
  );
};
