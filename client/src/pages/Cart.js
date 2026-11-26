import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './Cart.css';
import { ShopContext } from '../context/ShopContext';
import CartItem from '../components/CartItem.js';

const Cart = () => {
  const { products, cartItems, getTotalCartAmount, checkout } =
    useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className='cartItems'>
        {products.map((product) => {
          if (cartItems[product._id] !== 0) {
            return <CartItem key={product._id} product={product} />;
          } else return <></>;
        })}
      </div>

      <div className='checkout'>
        <p>Subtotal: ${getTotalCartAmount()} </p>
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          Continue Shopping
        </button>
        <button
          onClick={() => {
            checkout();
            navigate('/');
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
