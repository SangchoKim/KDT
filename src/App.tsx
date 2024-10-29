import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Box, Button, Drawer, Grid2 as Grid, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Item from './components/Item';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [items, setItems] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const products = await getProducts();
      setItems(products);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc, item) => acc + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    );
  };

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
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
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
        {items?.map((item, index) => (
          <Grid key={index} size={3}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;
