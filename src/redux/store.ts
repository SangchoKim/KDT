import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers';

// 스토어 생성
export default createStore(rootReducer);
