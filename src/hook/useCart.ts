import { TProduct } from '../redux/reducers/cart';

const useCart = () => {
  // TODO: 13. 장바구니 상태 조회 셀렉터
  const cartItems: TProduct[] = [];

  // TODO: 11. 장바구니에 상품 추가 함수
  const handleAddToCart = (clickedItem: TProduct) => {};

  // TODO: 12. 장바구니에 상품 추가 함수
  const handleRemoveFromCart = (id: number) => {};

  return { handleAddToCart, handleRemoveFromCart, cartItems };
};

export default useCart;
