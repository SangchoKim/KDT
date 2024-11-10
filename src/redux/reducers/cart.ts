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

// TODO: 4. 장바구니 상태 초기값

// TODO: 5. 장바구니 상태 리듀서

// TODO: 6. 장바구니에 상품 추가 리듀서

// TODO: 7. 장바구니에서 상품 삭제 리듀서
