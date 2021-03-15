import React, { useState } from 'react';

interface MainComponentProps {
  children: React.ReactNode;
}

interface TextProps {
  text1: string;
  setText1(value: string): void;
  text2: string;
  setText2(value: string): void;
}

const { Provider, Consumer } = React.createContext<TextProps>({
  text1: '',
  setText1: () => {},
  text2: '',
  setText2: () => {}
});

const MainComponentProvider = ({ children }: MainComponentProps) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  return <Provider value={{ text1, setText1, text2, setText2 }}>{children}</Provider>;
};

export { MainComponentProvider, Consumer as MainComponentConsumer };
