import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import useCart from '../hook/useCart';
import { TProduct } from '../redux/reducers/cart';

type Props = {
  item: TProduct;
};

const Item = ({ item }: Props) => {
  const { handleAddToCart } = useCart();

  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: 500, minHeight: 500, height: '100%', position: 'relative' }}
    >
      <CardMedia component="img" height="300" image={item.image} alt={item.title} />
      <CardContent>
        <Typography variant="h6" sx={{ color: 'text.secondary', height: 100, overflow: 'hidden' }}>
          {item.title}
        </Typography>
        <Typography variant="h6" sx={{ color: 'red' }}>
          ${item.price}
        </Typography>
      </CardContent>
      <Button
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
        onClick={() => handleAddToCart(item)}
      >
        Add to cart
      </Button>
    </Card>
  );
};

export default Item;
