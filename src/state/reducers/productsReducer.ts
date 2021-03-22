import * as Types from '../actions/types';
import { IProduct } from '../actions/products';

const initialState = {
  products: [
    {
      id: 1,
      name: 'test'
    }
  ]
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case Types.ADD_PRODUCTS: {
      console.log(action);

      return {
        ...state,
        products: [...state.products, action.payload]
      };
    }
    case Types.DELETE_PRODUCT: {
      return {
        ...state,
        products: state.products.filter((product: IProduct) => product.id !== action.payload.id)
      };
    }
    case Types.DELETE_ALL_PRODUCTS: {
      return {
        products: []
      };
    }
    case Types.EDIT_PRODUCT: {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      const newArray = [...state.products];
      newArray[index].name = action.payload.name;

      return {
        ...state,
        products: newArray
      };
    }

    default:
      return state;
  }
};
