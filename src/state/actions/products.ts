//import { ADD_PRODUCTS } from './types';
import * as Types from './types';

export interface IProduct {
  id?: number;
  name: string;
}

export const addProduct = (product: IProduct) => {
  return {
    type: Types.ADD_PRODUCTS,
    payload: product
  };
};

export const deleteProduct = (product: IProduct) => {
  return {
    type: Types.DELETE_PRODUCT,
    payload: product
  };
};

export const deleteAllProducts = () => {
  return {
    type: Types.DELETE_ALL_PRODUCTS
  };
};

export const editProduct = (product: IProduct) => {
  return {
    type: Types.EDIT_PRODUCT,
    payload: product
  };
};
