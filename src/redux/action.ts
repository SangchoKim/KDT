import { LOAD_PRODUCTS } from './actionTypes';
import { TProduct } from './reducers/cart';

// TODO: 9. 장바구니에 상품 추가 디스패치 함수

// TODO: 10. 장바구니에 상품 삭제 디스패치 함수

export const loadProducts = (items: TProduct[]) => {
  return { type: LOAD_PRODUCTS, payload: items };
};
