import React from 'react';
import useSWR, { cache } from 'swr';
import { PaginationResponse } from '../../api/hotels/types';
import { getHotels, GetHotelsResponse, Hotel, postHotel } from '../../api/hotels';

export const useHotels = () => {
  const { data, error, mutate } = useSWR('/hotel', () => getHotels().then(r => r.data));

  const addHotel = async (hotel: Hotel) => {
    const res = await postHotel(hotel);
    const cached: PaginationResponse<Hotel> = cache.get('/hotel');

    mutate(
      {
        ...cached,
        items: [...cached.items, { ...hotel, id: res.data.objectId }],
        total: cached.total + 1
      },
      false
    );
    console.log(res);
  };

  return {
    data,
    loading: !data && !error,
    addHotel
  };
};
