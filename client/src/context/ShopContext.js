import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(null);
  const [products, setProducts] = useState([]);

  const defaultCart = () => {
    let cart = {};
    products.forEach((product) => {
      cart[product._id] = 0;
    });
    setCartItems(cart);
    return cart;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, status } = await axios.get('/api/products');
        if (status === 200) setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products:', err?.message || err);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    defaultCart();
  }, [products]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product._id === item);
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(defaultCart());
  };

  const contextValue = {
    cartItems,
    products,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
