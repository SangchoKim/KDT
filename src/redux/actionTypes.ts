import { ActionType } from 'typesafe-actions';
import { addCart, loadProducts, removeCart } from './action';

export type TCartAction = ActionType<typeof addCart> | ActionType<typeof removeCart>;

export type TProductAction = ActionType<typeof loadProducts>;

// TODO: 8. 장바구나 액션 타입 정의

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
