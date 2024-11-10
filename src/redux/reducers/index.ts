import { combineReducers } from 'redux';
import cart from './cart';
import product from './product';

// 루트 리듀서
const rootReducer = combineReducers({ cart, product });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
