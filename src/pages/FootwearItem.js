import React, { useState, useEffect, useRef } from 'react';
import ReactStars from 'react-rating-stars-component';
import { FaTag } from 'react-icons/fa';
import './css/category.css'; 

const FootwearItem = ({ footwear, addToCart, secondImage }) => {
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [photo, setPhoto] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [sizeWarning, setSizeWarning] = useState(false);
  const [showComposition, setShowComposition] = useState(false);
  const [showCare, setShowCare] = useState(false);
  const [showOrigin, setShowOrigin] = useState(false);
  const [averageRating, setAverageRating] = useState(0); 
  const fileInputRef = useRef(null); 

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem(`reviews-${footwear.id}`)) || [];
    setReviews(storedReviews);
    calculateAverageRating(storedReviews);
  }, [footwear.id]);

  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) {
      setAverageRating(0);
      return;
    }
    const totalRating = reviews.reduce((accumulator, review) => accumulator + review.rating, 0);
    const average = totalRating / reviews.length;
    setAverageRating(average);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name,
      text: reviewText,
      rating,
      photo,
      date: new Date().getTime(),
    };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews-${footwear.id}`, JSON.stringify(updatedReviews));
    setName('');
    setReviewText('');
    setRating(0);
    setPhoto(null);
    fileInputRef.current.value = ''; 
    calculateAverageRating(updatedReviews);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const showAddToCartNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000); 
  };

  const addToCartHandler = () => {
    if (selectedSize === '') {
      setSizeWarning(true);
      return;
    }
    addToCart(footwear, selectedSize);
    showAddToCartNotification();
  };

  return (
    <div className="catalog-container">
      <div className="movie-card">
        <div className="clothing-image" style={{ backgroundImage: `url(${footwear.image})` }}></div>
        {secondImage && <div className="second-image" style={{ backgroundImage: `url(${secondImage})` }}></div>}
        <div className="clothing-info">
          <h2>
            {footwear.name}{' '}
            {averageRating > 0 && (
              <span style={{ fontSize: '18px', marginLeft: '10px' }}>
                Средний рейтинг: {averageRating.toFixed(1)}
              </span>
            )}
          </h2>
          
          <div className="cloth-description">
            <button onClick={() => setShowComposition(!showComposition)}>Состав</button>
            {showComposition && (
              <div className="description-box">
                {footwear.composition}
              </div>
            )}
            
            <button onClick={() => setShowCare(!showCare)}>Уход</button>
            {showCare && <div className="description-box">{footwear.care}</div>}
            
            <button onClick={() => setShowOrigin(!showOrigin)}>Происхождение</button>
            {showOrigin && <div className="description-box">{footwear.origin}</div>}
          </div>
          
          <div className="cloth-price">
            <FaTag />{footwear.price} тг
          </div>
          
          <div className="size-options">
            <label>Размер:</label>
            <div className="size-buttons">
              {["35", "36", "37", "38", "39"].map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size.toLowerCase() ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedSize(size.toLowerCase());
                    setSizeWarning(false);
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
            {sizeWarning && <p className="size-warning">Выберите размер</p>}
          </div>
          
          <button className="add-to-cart" onClick={addToCartHandler}>
            Добавить в корзину
          </button>
        </div>
      </div>
      
      <div className="add-to-cart-notification" style={{ display: showNotification ? 'block' : 'none' }}>
        <p style={{ backgroundColor: '#a72222', color: '#fff', padding: '10px 20px', borderRadius: '5px', position: 'fixed', top: '10px', right: '10px' }}>
          Товар добавлен в корзину!
        </p>
      </div>
      
      <div className="madina-card">
        <div className="reviews-list">
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <h4>{review.name}</h4>
              <ReactStars
                count={5}
                value={review.rating}
                size={24}
                edit={false}
                activeColor="#ffd700"
              />
              <p>{review.text}</p>
              <p className="review-date">{new Date(review.date).toLocaleDateString()}</p>
              {review.photo && <img src={review.photo} alt="Review" className="review-photo" />}
            </div>
          ))}
        </div>
        
        <div className="reviews-section">
          <h2>Отзывы</h2>
          <form onSubmit={handleReviewSubmit} className="review-form">
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <textarea
              placeholder="Ваш отзыв"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            ></textarea>
            <div className="rating">
              <ReactStars
                count={5}
                value={rating}
                onChange={setRating}
                size={24}
                activeColor="#ffd700"
              />
            </div>
            <input 
              type="file" 
              onChange={handlePhotoChange} 
              ref={fileInputRef} // Присваиваем ref для file input
            />
            <button type="submit">Оставить отзыв</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FootwearItem;
