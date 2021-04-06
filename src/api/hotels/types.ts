import { AxiosResponse } from 'axios';

export interface Hotel {
    id?: number;
    name: string;
    description: string;
    phone: string;
    address: {
      country: string;
      city: string;
      state: string;
      street: string;
      address1: string;
      address2: string;
      zip: number;
      location: {
        latitude: string;
        longtitude: string;
      }
    }
}

export interface PaginationResponse<T> {
  items: T[];
  itemsCount: number;
  maxPage: null;
  page: null;
  total: number;
}

export type GetHotelsResponse = AxiosResponse<PaginationResponse<Hotel>>
export type PostHotelResponse = AxiosResponse<{
  message: string;
  objectId: number;
  statusCode: number;
}>
