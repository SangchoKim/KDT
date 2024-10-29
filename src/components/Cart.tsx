import { Box, List, Typography } from '@mui/material';
import useCart from '../hook/useCart';
import { TProduct } from '../redux/reducers/cart';
import CartItem from './CartItem';

const Cart = () => {
  const calculateTotal = (items: TProduct[]) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  const { cartItems } = useCart();

  return (
    <Box>
      <Typography variant="h4" padding={3}>
        CART
      </Typography>
      <List>
        {cartItems.length === 0 ? <p>No items in cart.</p> : null}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </List>
      <Typography textAlign={'right'} marginRight={5} variant="h6">
        Total: ${calculateTotal(cartItems).toFixed(2)}
      </Typography>
    </Box>
  );
};

export default Cart;
