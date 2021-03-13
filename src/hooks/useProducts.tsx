import React, { useState, useMemo, useCallback } from 'react';

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
  },
  {
    id: 10,
    name: 'candy',
    price: 12
  },
  {
    id: 11,
    name: 'candy',
    price: 20
  },
  {
    id: 12,
    name: 'candy',
    price: 15
  }
];

export interface IFilterOptions {
  name?: string;
  priceMore?: number;
  priceLess?: number;
}

interface IProducts {
  perPage: number;
}

export const useProducts = ({ perPage }: IProducts) => {
  const [products, setProducts] = useState<Product[] | []>(productsList);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const totalCount = useMemo(() => setTotal(Math.floor(productsList.length / perPage)), [perPage]);

  const productsPerPage = useMemo(() => {
    const startPage = (page - 1) * perPage;
    const endPage = startPage + perPage;
    setProducts(productsList.slice(startPage, endPage));
  }, [page]);

  const changePage = useCallback(
    page => {
      setPage(page);
    },
    [page]
  );

  const addProduct = (newProduct: Product) => {
    setProducts(prev => [...prev, newProduct]);
  };

  const deleteProduct = (product: Product) => {
    setProducts(products.filter((item: Product) => item.id !== product.id));
  };

  const editProduct = (newProduct: Product) => {
    const editedProducts = (products as Product[]).map((item: Product) => {
      if (item.id === newProduct.id) {
        return newProduct;
      } else {
        return item;
      }
    });
    setProducts(editedProducts);
  };

  const applyFilter = useCallback(
    (filterOption: IFilterOptions) => {
      if (filterOption.name!) {
        setProducts(products.filter((item: Product) => item.name === filterOption.name));
      }

      if (filterOption.priceMore!) {
        setProducts(products.filter((item: Product) => item.price > filterOption.priceMore!));
      }

      if (filterOption.priceLess!) {
        setProducts(products.filter((item: Product) => item.price < filterOption.priceLess!));
      }
    },
    [products]
  );

  return {
    products,
    page,
    total,
    changePage,
    applyFilter,
    editProduct,
    deleteProduct,
    addProduct
  };
};
