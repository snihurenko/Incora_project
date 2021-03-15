import React from 'react';
import { MainComponentProvider, MainComponentConsumer } from './MainComponent';

export const Component1 = () => {
  return (
    <div>
      <MainComponentConsumer>
        {context => (
          <div>
            <p>First block</p>
            <input type='text' onChange={e => context.setText2(e.target.value)} />
            <p>Second block text: </p>
            <p>{context.text1}</p>
          </div>
        )}
      </MainComponentConsumer>
    </div>
  );
};

export const Component2 = () => {
  return (
    <div>
      <MainComponentConsumer>
        {context => (
          <div>
            <p>Second block</p>
            <input type='text' onChange={e => context.setText1(e.target.value)} />
            <p>First block text: </p>
            <p>{context.text2}</p>
          </div>
        )}
      </MainComponentConsumer>
    </div>
  );
};
