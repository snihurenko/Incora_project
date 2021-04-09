import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { weatherSelector } from '../../state/selectors/weatherSelector';
import { loadWeatherAction } from '../../state/actions/weatherAction';
import { PaginatedData } from './PaginateData';
import css from './Weather.module.scss';

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
        initialValues={{ city: '' }}
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

      <h2>{weatherData.city.name}</h2>
      {weatherData.city.coord && (
        <p>
          Coordinates: {weatherData.city.coord.lat}, {weatherData.city.coord.lon}
        </p>
      )}
      <div className={css.dataWrap}>{weatherData && <PaginatedData data={weatherData.forecast} />}</div>
    </div>
  );
};
