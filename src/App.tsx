import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Box, Button, Drawer, Grid2 as Grid, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Cart from './components/Cart';
import Item from './components/Item';
import Data from './data/index.json';
import useCart from './hook/useCart';
import { loadProducts } from './redux/action';
import { RootState } from './redux/reducers';
import { TProduct } from './redux/reducers/cart';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useCart();
  const productItems = useSelector((state: RootState) => state.product.productItems);

  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const data = Data.map((item) => ({ ...item, amount: 0 }));
    dispatch(loadProducts(data));
    setLoading(false);
  }, [dispatch]);

  const getTotalItems = (items: TProduct[]) => items.reduce((acc, item) => acc + item.amount, 0);

  if (loading) {
    return (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {new Array(15).fill(0).map((_, index) => (
          <Grid key={index} size={3}>
            <Skeleton sx={{ bgcolor: 'grey.200' }} variant="rectangular" width={300} height={500} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Box>
      <Drawer
        sx={{ flexShrink: 0, '& .MuiDrawer-paper': { width: '30%' } }}
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      >
        <Cart />
      </Drawer>

      <Button
        style={{ position: 'absolute', right: 20, top: 20, zIndex: 50 }}
        onClick={() => setCartOpen(true)}
      >
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <ShoppingCartIcon color="warning" fontSize="medium" />
        </Badge>
      </Button>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {productItems?.map((item, index) => (
          <Grid key={index} size={3}>
            <Item item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;
