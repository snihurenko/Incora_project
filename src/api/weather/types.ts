import { AxiosResponse } from 'axios';

export interface WeatherData {
  city: object;
  list: Array<object>;
}

interface PaginationResponse<T> {
  config: object;
  data: T;
  headers: object;
  request: object;
  status: number;
  statusText: string;
}

export type GetWeatherResponse = AxiosResponse<PaginationResponse<WeatherData>>;
