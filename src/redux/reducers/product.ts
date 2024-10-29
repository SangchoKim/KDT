import { createReducer } from 'typesafe-actions';
import { LOAD_PRODUCTS, TProductAction } from '../actionTypes';
import { TProduct } from './cart';

export type TProductState = {
  productItems: TProduct[];
};

const initialState: TProductState = {
  productItems: [],
};

export default createReducer<TProductState, TProductAction>(initialState, {
  [LOAD_PRODUCTS]: (state, action) => {
    return {
      ...state,
      productItems: action.payload as TProduct[],
    };
  },
});
