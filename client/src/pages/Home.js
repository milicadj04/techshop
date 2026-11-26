import { useContext } from 'react';

import './Home.css';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Best Quality & Prices</h1>
      </div>
      <div className='products'>
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
