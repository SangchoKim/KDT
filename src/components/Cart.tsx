import { Box, List, Typography } from '@mui/material';
import { CartItemType } from '../App';
import CartItem from './CartItem';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart = ({ cartItems, addToCart, removeFromCart }: Props) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  return (
    <Box>
      <Typography variant="h4" padding={3}>
        CART
      </Typography>
      <List>
        {cartItems.length === 0 ? <p>No items in cart.</p> : null}
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </List>
      <Typography textAlign={'right'} marginRight={5} variant="h6">
        Total: ${calculateTotal(cartItems).toFixed(2)}
      </Typography>
    </Box>
  );
};

export default Cart;
