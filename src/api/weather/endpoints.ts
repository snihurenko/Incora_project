import Axios from '../axios';
// import { GetCategoriesRResponse, PostCategoryBody } from './types';

const city = 'Lviv';
const API_KEY = '12d2fcdc96ba4f6686c31860ed795f71';

export const getWeather = (city: string): Promise<any> => {
  return Axios.instance.get('', {
    params: {
      q: city,
      appid: API_KEY,
      lang: 'ua',
      units: 'metric'
    }
  });
};
