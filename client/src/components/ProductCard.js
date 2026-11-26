import { useContext } from 'react';

import { ShopContext } from '../context/ShopContext';

const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useContext(ShopContext);

  return (
    <div className='product'>
      <div className='imgContainer'>
        <img
          alt='product'
          src={
            product?.photo ||
            'https://seetruetechnology.com/wp-content/uploads/2022/02/BG-7.jpg'
          }
        />
      </div>
      <div className='description'>
        <p>
          <b>{product?.name}</b>
        </p>
        <p>${product?.price}</p>
      </div>
      <button onClick={() => addToCart(product?._id)} className='addToCartBttn'>
        Add to Cart{' '}
        {cartItems[product?._id] !== 0 && '(' + cartItems[product?._id] + ')'}
      </button>
    </div>
  );
};

export default ProductCard;
