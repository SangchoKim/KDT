import { createReducer } from 'typesafe-actions';
import { ADD_CART, REMOVE_CART, TCartAction } from '../actionTypes';

export type TProduct = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  rating: {
    count: number;
    rate: number;
  };
};

export type TCartState = {
  cartItems: TProduct[];
  totalProductInCart?: number;
};

// 장바구니 상태 초기값
const initialState: TCartState = {
  cartItems: [],
};

// 장바구니 리듀서
export default createReducer<TCartState, TCartAction>(initialState, {
  // 장바구니에 상품 추가
  [ADD_CART]: (state, action) => {
    const data = action.payload as TProduct;
    const isItemInCart = state.cartItems.find((item) => item.id === data.id);

    if (isItemInCart) {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === data.id ? { ...item, amount: item.amount + 1 } : item
        ),
      };
    }

    return {
      ...state,
      cartItems: [...state.cartItems, { ...data, amount: 1 }],
    };
  },

  // 장바구니에서 상품 삭제
  [REMOVE_CART]: (state, action) => {
    const id = action.payload as number;
    return {
      ...state,
      cartItems: state.cartItems.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as TProduct[]),
    };
  },
});
