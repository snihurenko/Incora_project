import React, { useState, useContext } from 'react';
import ProductsContext from './context';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}

const productsArray: Product[] = [
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
  const [products, setProducts] = useState<Product[]>(productsArray);
  const { cart, setCart } = useContext(ProductsContext);

  const addToCart = (product: Product) => {
    const addedItemIndex = cart.findIndex(item => item.name === product.name);

    if (addedItemIndex < 0) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      const addedItem = {
        ...cart[addedItemIndex]
      };

      if (addedItem.quantity) {
        addedItem.quantity++;
      }
      cart[addedItemIndex] = addedItem;
    }
  };

  return (
    <div>
      <h2>Products</h2>
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
