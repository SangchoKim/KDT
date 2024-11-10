import { ADD_CART, LOAD_PRODUCTS, REMOVE_CART } from './actionTypes';
import { TProduct } from './reducers/cart';

// 장바구니에 상품 추가
export const addCart = (clickedItem: TProduct) => {
  return { type: ADD_CART, payload: clickedItem };
};

// 장바구니에서 상품 삭제
export const removeCart = (id: number) => {
  return { type: REMOVE_CART, payload: id };
};

// 상품 목록 불러오기
export const loadProducts = (items: TProduct[]) => {
  return { type: LOAD_PRODUCTS, payload: items };
};
