import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { FaShoppingCart } from 'react-icons/fa'; // Импорт иконки корзины

import Clothing from './pages/Clothing';
import ClothingItemPage from './pages/ClothingItemPage';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import Footwear from './pages/Footwear';
import FootwearItemPage from './pages/FootwearItemPage';
import Accessories from './pages/Accessories';
import AccessoriesItemPage from './pages/AccessoriesItemPage';

function NavBar({ cartCount }) {
  return (
    <nav className="App-nav">
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/odezhda">Одежда</Link></li>
        <li><Link to="/obuv">Обувь</Link></li>
        <li><Link to="/accessories">Акссесуары</Link></li>
        <li>
        <Link to="/cart" className="cart-link">
          <span>Корзина</span>
          <span className="cart-count">{cartCount}</span> 
          <FaShoppingCart className="cart-icon" />
        </Link>

        </li>
      </ul>
    </nav>
  );
}

const App = () => {
  const [cart, setCart] = React.useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

 
  React.useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  
  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, size) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id && cartItem.size === size);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity++;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1, size }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity--;

    if (updatedCart[index].quantity === 0) {
      updatedCart.splice(index, 1);
    }

    setCart(updatedCart);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar cartCount={cartCount} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accessories" element={<Accessories addToCart={addToCart} />} />
            <Route path="/accessories/:id" element={<AccessoriesItemPage addToCart={addToCart} />} />
            <Route path="/odezhda" element={<Clothing addToCart={addToCart} />} />
            <Route path="/odezhda/:id" element= {<ClothingItemPage addToCart={addToCart} />} />
            <Route path="/obuv" element={<Footwear addToCart={addToCart} />} />
            <Route path="/obuv/:id" element={<FootwearItemPage addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cartItems={cart} removeFromCart={removeFromCart} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
