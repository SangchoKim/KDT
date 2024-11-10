import { useDispatch, useSelector } from 'react-redux';
import { addCart, removeCart } from '../redux/action';
import { RootState } from '../redux/reducers';
import { TProduct } from '../redux/reducers/cart';

const useCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  // 장바구니에 상품 추가
  const handleAddToCart = (clickedItem: TProduct) => {
    dispatch(addCart(clickedItem));
  };

  // 장바구니에서 상품 삭제
  const handleRemoveFromCart = (id: number) => {
    dispatch(removeCart(id));
  };

  return { handleAddToCart, handleRemoveFromCart, cartItems };
};

export default useCart;
