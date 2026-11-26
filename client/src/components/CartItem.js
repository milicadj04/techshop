import { useContext } from 'react';

import { ShopContext } from '../context/ShopContext';

const CartItem = ({ product }) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className='cartItem'>
      <img
        alt='product'
        src={
          product?.photo ||
          'https://seetruetechnology.com/wp-content/uploads/2022/02/BG-7.jpg'
        }
      />
      <div className='description'>
        <p>
          <b>{product?.name}</b>
        </p>
        <p>${product?.price}</p>
        <div className='countHandler'>
          <button onClick={() => removeFromCart(product._id)}> - </button>
          <input
            value={cartItems[product._id]}
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value), product._id)
            }
          />
          <button onClick={() => addToCart(product._id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
