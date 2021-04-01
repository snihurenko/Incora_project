import React from 'react';
import { registerUser, loginUser } from '../../api/auth';
import { useHotels } from '../../hooks/hotels/useHotels';

export const NotFound = () => {
  const createUser = () => {
    registerUser({
      email: 'fhbkh@gbgk.com',
      firstName: 'Fgvjh',
      lastName: 'HJgvkhb',
      password: 'gjvgj02'
    });
  };

  const login = async () => {
    try {
      const res = await loginUser({
        email: 'fhbkh@gbgk.com',
        password: 'gjvgj02'
      });

      const { access_token, refresh_token } = res.data;
      localStorage.setItem('token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const { data, addHotel } = useHotels();
  console.log(data);

  const createHotel = () => {
    addHotel({
      name: 'gvjh5b',
      description: 'hjvh',
      phone: '+380630611758',
      address: {
        country: 'ygkgeg',
        city: 'kjhjk',
        state: 'gygk',
        street: 'yjgkhbkj',
        address1: 'bgkbj',
        address2: 'yghhkj',
        zip: 12345,
        location: {
          latitude: '0',
          longtitude: '0'
        }
      }
    });
  };

  return (
    <div>
      <p>Register page</p>
      <button onClick={createUser}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={createHotel}>Create hotel</button>
    </div>
  );
};
