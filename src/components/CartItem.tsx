import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { CartItemType } from '../App';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem = ({ item, addToCart, removeFromCart }: Props) => (
  <ListItem alignItems="center">
    <ListItemAvatar>
      <Avatar style={{ width: 100, height: 100 }} src={item.image} alt={item.title} />
    </ListItemAvatar>
    <ListItemText
      style={{ marginLeft: 20 }}
      primary={item.title}
      secondary={
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <div>
            <Typography variant="body1">Price: ${item.price}</Typography>
            <Typography variant="body1">Total: ${(item.amount * item.price).toFixed(2)}</Typography>
          </div>
          <Box display={'flex'} alignItems={'center'}>
            <Button
              size="small"
              disableElevation
              variant="text"
              onClick={() => removeFromCart(item.id)}
            >
              <Typography variant="h5">-</Typography>
            </Button>
            <Typography variant="body1">{item.amount}</Typography>
            <Button size="small" disableElevation variant="text" onClick={() => addToCart(item)}>
              <Typography variant="h5">+</Typography>
            </Button>
          </Box>
        </Box>
      }
    />
  </ListItem>
);

export default CartItem;
