import React, { useState } from 'react';
import './css/CartPage.css';
import CartItem from './CartItem'; 

const CartPage = ({ cartItems, removeFromCart }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (formData.name.trim() === '' || formData.phone.trim() === '' || formData.email.trim() === '') {
      alert('Пожалуйста, заполните все поля.');
      return;
    }

    const success = false; 

    if (success) {
      setShowErrorMessage(false);
      setFormData({ name: '', phone: '', email: '' }); 
    } else {
      setShowErrorMessage(true);
      setFormData({ name: '', phone: '', email: '' }); 
    }
  };

 
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="zinolla">
      <div className="cart">
        <h1>Корзина</h1>
        {cartItems.length === 0 ? (
          <div className="cart-container">
            <img src="https://static.thenounproject.com/png/1700378-200.png" alt="Пустая корзина" />
          </div>
        ) : (
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} index={index} removeFromCart={removeFromCart} />
            ))}
          </div>
        )}
      </div>
      
      <div className="cart">
        {showErrorMessage && (
          <div className="error-message">
            <p>Произошла ошибка при отправке формы. Попробуйте еще раз.</p>
          </div>
        )}
        {cartItems.length > 0 && (
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>Оформление заказа</h2>
            <input type="text" name="name" placeholder="Имя" value={formData.name} onChange={handleChange} />
            <input type="text" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <button type="submit">Подтвердить заказ</button>
            <p className="total-price">Общая сумма: {calculateTotalPrice()} тг.</p>
          </form>
        )}
      </div>
    </div>
  );
};

export default CartPage;
