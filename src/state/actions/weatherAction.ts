import { WeatherType } from '../actions/types';
import { getWeather } from '../../api/weather';

export const loadWeatherAction = (city: string) => async (dispatch: any) => {
  dispatch({
    type: WeatherType.GET_WEATHER_REQUEST
  });

  try {
    const res = await getWeather(city);
    dispatch({
      type: WeatherType.GET_WEATHER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: WeatherType.GET_WEATHER_FAIL,
      payload: err
    });
  }
};
