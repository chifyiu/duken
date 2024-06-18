import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import './css/Home.css'; 
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  const items = [
    { id: 1, name: 'Женская одежда', description: 'Доступная цена', image: image1 },
    { id: 2, name: 'Женская одежда', description: 'Доступная цена', image: image2 },
    { id: 3, name: 'Женская одежда', description: 'Доступная цена', image: image3 },
  ];

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Добро пожаловать!</h1>
        <p>Это главная страница нашего интернет-магазина. Здесь вы можете найти различные товары по доступным ценам.</p>
      </div>

      <Carousel className="custom-carousel">
        {items.map(item => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100 carousel-image"
              src={item.image}
              alt={item.name}
            />
            <Carousel.Caption className="carousel-caption">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="site-description">


<h2>О нашем сайте</h2>
<p>
  Добро пожаловать в наш интернет-магазин, где вы найдете широкий ассортимент женской одежды и обуви на любой вкус. Мы гордимся тем, что можем предложить нашим клиентам самые последние модные тенденции и высококачественные товары по доступным ценам.
</p>
<p>
  В нашем магазине вы можете найти всё, что нужно для создания стильного и современного образа — от элегантных платьев и уютных свитеров до стильной обуви и аксессуаров. Наши коллекции включают одежду для любого сезона и случая: будь то повседневные наряды, деловые костюмы или вечерние платья.
</p>
<p>
  Мы стремимся к тому, чтобы каждый наш клиент чувствовал себя особенным. Поэтому мы тщательно подбираем каждый элемент нашего ассортимента, сотрудничая с проверенными брендами и производителями. Наши покупатели могут быть уверены в качестве приобретаемых товаров и их долговечности.
</p>
<p>
  Наш интернет-магазин не только предоставляет разнообразие товаров, но и обеспечивает высокий уровень обслуживания. Мы регулярно обновляем наш каталог, чтобы вы могли первыми получать доступ к новинкам и самым популярным моделям. Наша команда профессионалов всегда готова помочь вам с выбором и ответить на все ваши вопросы.
</p>
<p>
  Присоединяйтесь к нам и откройте для себя мир моды, который мы создаем специально для вас. Покупки в нашем интернет-магазине — это удобство, стиль и уверенность в каждой детали вашего гардероба.
</p>
      </div>
      
      <div className="contacts-section">
        <h2>Контакты</h2>
        <p>Свяжитесь с нами через социальные сети:</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/znmadz/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram size={40} />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=77757827571&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaWhatsapp size={40} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
