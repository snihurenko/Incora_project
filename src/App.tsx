import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='landing'>
        <div className='container-image'></div>
        <div className='container-login'>
          <div className='login'>
            <h1>Log in</h1>
            <Router>
              <h3>
                If you don't have an account yet, please <Link to='/register'>register</Link> first.
              </h3>
            </Router>
            <form action='' className='login__form'>
              <input
                type='email'
                className='login__form__input'
                id='email'
                name='email'
                placeholder='Your e-mail'
                required
              />
              <input
                type='password'
                className='login__form__input'
                id='password'
                name='password'
                placeholder='Your password'
                required
              />
              <button className='login__form__forgot-pass'>I forgot my password</button>
              <label>
                <input
                  type='checkbox'
                  className='login__form__check'
                  id='remember'
                  name='remember'
                  value='remember'
                />
                Remember me
              </label>
              <button type='submit' className='login__form__btn-submit'>
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
