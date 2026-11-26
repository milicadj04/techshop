import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { ShopContextProvider } from './context/ShopContext';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
