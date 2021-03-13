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
  const [products, setProducts] = useState<Product[]>(productsList);
  const [page, setPage] = useState<number>(1);
  const [filterOption, setFilterOption] = useState<IFilterOptions>({});

  const total = useMemo(() => Math.ceil(products.length / perPage), [perPage, products]);

  const productsPerPage = useMemo(() => {
    const filteredProducts = products.filter(item => {
      let filter = true;

      if (filterOption.name!) {
        filter = filter && filterOption.name === item.name;
      }
      if (filterOption.priceMore!) {
        filter = filter && item.price > filterOption.priceMore;
      }
      if (filterOption.priceLess!) {
        filter = filter && item.price < filterOption.priceLess;
      }
      return filter;
    });

    const startPage = (page - 1) * perPage;
    const endPage = startPage + perPage;

    return products.slice(startPage, endPage);
  }, [page, products, total]);

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
      setFilterOption(filterOption);
    },
    [products]
  );

  return {
    productsPerPage,
    page,
    total,
    changePage,
    applyFilter,
    editProduct,
    deleteProduct,
    addProduct
  };
};
