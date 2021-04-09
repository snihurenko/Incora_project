import Axios from '../axios';
import { GetWeatherResponse } from './types';

const API_KEY = '12d2fcdc96ba4f6686c31860ed795f71';

export const getWeather = (city: string): Promise<GetWeatherResponse> => {
  return Axios.instance.get('', {
    params: {
      q: city,
      appid: API_KEY,
      lang: 'ua',
      units: 'metric'
    }
  });
};
