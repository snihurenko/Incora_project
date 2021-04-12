import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { weatherSelector } from '../../state/selectors/weatherSelector';
import { loadWeatherAction } from '../../state/actions/weatherAction';
import { PaginatedData } from './PaginateData';
import css from './Weather.module.scss';

export const WeatherPage = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector(weatherSelector);

  useEffect(() => {
    dispatch(loadWeatherAction('Lviv'));
  }, []);

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={{ city: '' }}
        onSubmit={values => {
          dispatch(loadWeatherAction(values.city));
          values.city = '';
        }}
      >
        <Form>
          <label htmlFor='city'>Виберіть місто: </label>
          <Field id='city' name='city' placeholder='Наприклад: Lviv' />
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
