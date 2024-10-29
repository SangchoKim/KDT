import { ActionType } from 'typesafe-actions';
import { addCart, loadProducts, removeCart } from './action';

export type TCartAction = ActionType<typeof addCart> | ActionType<typeof removeCart>;

export type TProductAction = ActionType<typeof loadProducts>;

export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
