import React from 'react';
import useSWR, { cache } from 'swr';
import { PaginationResponse } from '../../api/hotels/types';
import { getPosts } from '../../api/posts';

export const usePosts = () => {
  const { data, error, mutate } = useSWR('/posts', () => getPosts());
  console.log(data);

  // const addHotel = async (hotel: any) => {
  //   const res = await postHotel(hotel);
  //   const cached: PaginationResponse<Hotel> = cache.get('/hotel');

  //   mutate(
  //     {
  //       ...cached,
  //       items: [...cached.items, { ...hotel, id: res.data.objectId }],
  //       total: cached.total + 1
  //     },
  //     false
  //   );
  //   console.log(res);
  // };

  return {
    data,
    loading: !data && !error
    // addHotel
  };
};
