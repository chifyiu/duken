import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTag, FaStar } from 'react-icons/fa';
import './css/Outfit.css'; 

const Clothing = () => {
  const all = [
    { id: 1, name: 'Худи с принтом', description: 'Хаки · Артикул. 7220/538/505', image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/7220/538/505/7a3bba9a2c63764c5f8945cf7d5f5ba8-7220538505_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 6000, category: 'Худи', isNew: false },
    { id: 2, name: 'Футболка с принтом AC/DC', description: 'Серый · Артикул. 7556/160/810', image: 'https://static.bershka.net/4/photos2/2024/I/0/1/p/7556/160/810/ae55dc0cbd64ce7a437513c8377071a2-7556160810_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 3500, category: 'Футболка', isNew: true },
    { id: 3, name: 'Длинное платье из полупрозрачной ткани с принтом', description: 'Фиолетовый · Артикул. 5626/187/610', image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/5626/187/610//01/9b5f81d5a4cd229aecf483845b148f2d-5626187610_2_24_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 7000, category: 'Платье', isNew: false },
    { id: 4, name: 'Джинсовая мини-юбка', description: 'Синий застиранный · Артикул. 6053/166/428', image: 'https://static.bershka.net/4/photos2/2024/I/0/1/p/6053/166/428/ced2e3e718ff4945947d0b2a5640c3e5-6053166428_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 5500, category: 'Юбки', isNew: true },
    { id: 5, name: 'Худи с принтом', description: 'Серый · Артикул. 2003/538/810', image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/2003/538/810/569342fbf8b3f36eba9d0c0bf3dc4faa-2003538810_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 6000, category: 'Худи', isNew: true },
    { id: 6, name: 'Футболка оверсайз с принтом', description: 'Бежевый · Артикул. 2778/187/712', image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/2778/187/712/5911558132da67728472e5c06e24f8c2-2778187712_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 3500, category: 'Футболка', isNew: false },
    { id: 7, name: 'Платье миди со сборкой и разрезом', description: 'Черный · Артикул. 5569/019/800', image: 'https://static.bershka.net/4/photos2/2024/I/0/1/p/5569/019/800/bb7bc52ccec7daa43319f95dd2739434-5569019800_2_24_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 7500, category: 'Платье', isNew: true },
    { id: 8, name: 'Юбка миди с эластичным поясом', description: 'Белый · Артикул. 6070/335/250', image: 'https://static.bershka.net/4/photos2/2024/I/0/1/p/6070/335/250/a9cbf53fbac991b1c8abba4765a76828-6070335250_2_24_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 6000, category: 'Юбки', isNew: false },
    { id: 9, name: 'Худи с принтом', description: 'Коричневый · Артикул. 7215/173/700', image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/7215/173/700//04/b221989a3510b3a5c2310961a54d2c98-7215173700_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 6000, category: 'Худи', isNew: true },
    { id: 10, name: 'Футболка с воротником-поло и принтом', description: 'Белый · Артикул. 2779/660/251', image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/2779/660/251/507577220eb7395b3d5a6a78109804d5-2779660251_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 4000, category: 'Футболка', isNew: false },
    { id: 11, name: 'Платье миди из атласа с отделкой кружевом', description: 'Желтый · Артикул. 5869/692/319', image: 'https://static.bershka.net/4/photos2/2024/I/0/1/p/5869/692/319/e05c5dfb3ee9d2a4bafdcffcfe754199-5869692319_2_24_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 8000, category: 'Платье', isNew: true },
    { id: 12, name: 'Юбка миди в стиле рустик из рельефной ткани', description: 'Белый · Артикул. 1107/218/251', image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/1107/218/251/18ae73a3959c843a5ee1276e89608548-1107218251_2_24_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 8500, category: 'Юбки', isNew: false },
  ];

  const [sortedClothing, setSortedClothing] = useState([...all]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  

  const sortByCategory = (category) => {
    let sorted;
    if (category === 'all') {
      sorted = [...all];
    } else {
      sorted = all.filter(item => item.category === category);
    }

    sorted = sortClothing(sorted);
    setSortedClothing(sorted);
    setSelectedCategory(category);
  };

  const sortByPriceAscending = () => {
    const sorted = sortClothing([...sortedClothing], 'asc');
    setSortedClothing(sorted);
  };

  const sortByPriceDescending = () => {
    const sorted = sortClothing([...sortedClothing], 'desc');
    setSortedClothing(sorted);
  };

  const sortByNewness = () => {
    const sorted = [...all].filter(item => item.isNew);
    setSortedClothing(sorted);
    setSelectedCategory('new');
  };

  const sortClothing = (clothingArray, order = 'asc') => {
    return clothingArray.sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  };

  return (
    <div className="catalog-page">
      <h1>Одежда</h1>
      <div className="category-filter">
        <button onClick={() => sortByCategory('all')} className={selectedCategory === 'all' ? 'active' : ''}>Все категории</button>
        <button onClick={() => sortByCategory('Футболка')} className={selectedCategory === 'Футболка' ? 'active' : ''}>Футболки</button>
        <button onClick={() => sortByCategory('Юбки')} className={selectedCategory === 'Юбки' ? 'active' : ''}>Юбки</button>
        <button onClick={() => sortByCategory('Платье')} className={selectedCategory === 'Платье' ? 'active' : ''}>Платья</button>
        <button onClick={() => sortByCategory('Худи')} className={selectedCategory === 'Худи' ? 'active' : ''}>Худи</button>
        <button onClick={sortByNewness} className={selectedCategory === 'new' ? 'active' : ''}>Новинки</button>
      </div>
      <div className="sort-filter">
        <label>Сортировка по цене:</label>
        <button onClick={sortByPriceAscending}>По возрастанию</button>
        <button onClick={sortByPriceDescending}>По убыванию</button>
      </div>
      <div className="clothing-items">
        {sortedClothing.map((clothing) => (
          <Link key={clothing.id} to={`/odezhda/${clothing.id}`} className="clothing-item-link">
            <div className="clothing-item">
              {clothing.isNew && <div className="new-badge"><FaStar /> New</div>}
              <img src={clothing.image} alt={clothing.name} />
              <div className="clothing-details">
                <h2>{clothing.name}</h2>
                <p>{clothing.description}</p>
                <div className="clothing-price">
                  <FaTag /> {clothing.price} тг.
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Clothing;
