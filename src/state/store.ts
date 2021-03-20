import { combineReducers, createStore } from 'redux';
import ProductsReducer from './reducers/productsReducer';

const rootReducer = combineReducers({
  products: ProductsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
