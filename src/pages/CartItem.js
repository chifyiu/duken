import React from 'react';

const CartItem = ({ item, index, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>Цена: {item.price} тг.</p>
        <p>Количество: {item.quantity}</p>
        <p>Размер: {item.size}</p>
        <button onClick={() => removeFromCart(index)}>Удалить</button>
      </div>
    </div>
  );
};

export default CartItem;
