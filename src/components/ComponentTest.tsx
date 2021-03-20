import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, deleteAllProducts, editProduct } from '../state/actions/products';
import { allProductsSelector } from '../state/selectors/products';
import { AppState } from '../state/store';

export function ComponentTest() {
  const products = useSelector<AppState>(allProductsSelector);
  console.log(products);

  const dispatch = useDispatch();

  const addProductItem = () => {
    dispatch(addProduct({ id: Date.now(), name: 'new product' }));
  };

  const deleteProductItem = () => {
    dispatch(deleteProduct({ name: 'test' }));
  };

  const deleteAll = () => {
    dispatch(deleteAllProducts());
  };

  const editProductItem = () => {
    dispatch(editProduct({ id: 1, name: 'changed one' }));
  };

  return (
    <div>
      <button onClick={addProductItem}>Add product</button>
      <button onClick={editProductItem}>Edit product</button>
      <br />
      <button onClick={deleteProductItem}>Delete product</button>
      <button onClick={deleteAll}>Delete all products</button>
    </div>
  );
}
