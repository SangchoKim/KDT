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

const initialState: TCartState = {
  cartItems: [],
};

export default createReducer<TCartState, TCartAction>(initialState, {
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
