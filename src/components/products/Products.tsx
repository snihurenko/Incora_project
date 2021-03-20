import React, { useState } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
}

const productsList: Product[] = [
  {
    id: 1,
    name: 'apple',
    price: 10
  },
  {
    id: 2,
    name: 'tomato',
    price: 15
  },
  {
    id: 3,
    name: 'cherry',
    price: 20
  },
  {
    id: 4,
    name: 'cucumber',
    price: 4
  },
  {
    id: 5,
    name: 'kiwi',
    price: 9
  },
  {
    id: 6,
    name: 'guava',
    price: 8
  },
  {
    id: 7,
    name: 'lemon',
    price: 10
  },
  {
    id: 8,
    name: 'grape',
    price: 16
  },
  {
    id: 9,
    name: 'fig',
    price: 12
  }
];

export function Products() {
  const [products, setProducts] = useState<Product[]>(productsList);
  const addToCart = (item: Product) => {
    console.log(item);
  };

  return (
    <div>
      {(products as Product[]).map((item: Product, index: number) => {
        return (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>price: {item.price}</p>
            <button onClick={() => addToCart(item)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
}
