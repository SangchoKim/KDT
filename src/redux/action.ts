import { ADD_CART, LOAD_PRODUCTS, REMOVE_CART } from './actionTypes';
import { TProduct } from './reducers/cart';

export const addCart = (clickedItem: TProduct) => {
  return { type: ADD_CART, payload: clickedItem };
};

export const removeCart = (id: number) => {
  return { type: REMOVE_CART, payload: id };
};

export const loadProducts = (items: TProduct[]) => {
  return { type: LOAD_PRODUCTS, payload: items };
};
