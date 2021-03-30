import React from 'react';
import { registerUser, loginUser } from '../../api/auth';

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

  return (
    <div>
      <p>Register page</p>
      <button onClick={createUser}>Register</button>
      <button onClick={login}>Login</button>
    </div>
  );
};
