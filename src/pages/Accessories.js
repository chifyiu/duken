import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTag, FaStar } from 'react-icons/fa';
import './css/Outfit.css'; 

const Accessories = () => {
  const all = [
    { id: 60, name: 'Солнцезащитные очки в пластиковой оправе «Кошачий глаз»', description: 'Черный · Артикул. 9208/419/800', image: 'https://static.bershka.net/4/photos2/2024/I/0/1/p/9208/419/800/40c32c6631848e8dc3b3a8e068a0eaf6-9208419800_2_3_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 3000, category: 'Очки', isNew: false },
    { id: 61, name: 'Сумка с длинными ручками и эффектом потертости', description: 'темно-серый · Артикул. 9084/040/829', image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/9084/040/829/25e513bd670a9bd39b7a35727868efef-9084040829_2_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 6000, category: 'Сумка', isNew: true },
    { id: 62, name: 'Цепочка с подвеской «Вишенки»', description: 'Белый · Артикул. 4425/023/250', image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/4425/023/250/b2c74ef8ef1c039d00fde2c435788d32-4425023250_2_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 2500, category: 'Цепочка', isNew: false },
    { id: 63, name: 'Кепка с вышивкой и эффектом потертости', description: 'Зеленый · Артикул. 4292/423/500', image: 'https://static.bershka.net/4/photos2/2024/I/0/1/p/4292/423/500/eb26f2c2ae3614a28f97306a83e6f888-4292423500_2_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 3500, category: 'Кепка', isNew: true },
    { id: 64, name: 'Очки в стиле ретро', description: 'Черный · Артикул. 9213/023/800', image: 'https://static.bershka.net/4/photos2/2024/I/0/1/p/9213/023/800/5c03019fcd6d2dd341f31dc269272478-9213023800_2_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 4000, category: 'Очки', isNew: true },
    { id: 65, name: 'Сумка из искусственной кожи с длинным ремнем', description: 'Черный · Артикул. 9091/669/800', image: 'https://static.bershka.net/4/photos2/2024/I/0/1/p/9091/669/800/47b6fd4493197e410c1659db895e5448-9091669800_2_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 6500, category: 'Сумка', isNew: false },
    { id: 66, name: 'Набор из двух чокеров с цветами', description: 'Золотой · Артикул. 4424/486/302', image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/4424/486/302/bb22effaf5dc53817b8afa4da40135a1-4424486302_2_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 3500, category: 'Цепочка', isNew: true },
    { id: 67, name: 'Кепка с вышивкой и эффектом потертости', description: 'Синий · Артикул. 4272/672/400', image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/4272/672/400/9e90e021e2783154529559754d3b5904-4272672400_2_3_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 3500, category: 'Кепка', isNew: false },
    { id: 68, name: 'Солнцезащитные очки в прямоугольной оправе', description: 'Κоричневый · Артикул. 9206/419/700', image: 'https://static.bershka.net/4/photos2/2024/I/0/1/p/9206/419/700/536eac8c79e025657e6783cd6627edad-9206419700_2_3_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 3500, category: 'Очки', isNew: true },
    { id: 69, name: 'Сумка с контрастными деталями и кольцами', description: 'Синий · Артикул. 9071/668/400', image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/9071/668/400/e3e9c5d263389aeb9ed1fd2e17a25bce-9071668400_2_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 7000, category: 'Сумка', isNew: true },
    { id: 70, name: 'Набор из трех ожерелий с молниями', description: 'Серебряный · Артикул. 4400/248/808', image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/4400/248/808/4c0d3e4bd0b7d5a038c8ad9dce94b89d-4400248808_2_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 3599, category: 'Цепочка', isNew:  false },
    { id: 71, name: 'Кепка с вышивкой High School Musical', description: 'Белый · Артикул. 4276/423/250', image: 'https://static.bershka.net/4/photos2/2024/V/0/1/p/4276/423/250/9e42f08303c58ca484a2b8238f08bf93-4276423250_2_3_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 4000, category: 'Кепка', isNew: true },
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
      <h1>Акссесуары</h1>
      <div className="category-filter">
        <button onClick={() => sortByCategory('all')} className={selectedCategory === 'all' ? 'active' : ''}>Все категории</button>
        <button onClick={() => sortByCategory('Сумка')} className={selectedCategory === 'Сумка' ? 'active' : ''}>Сумка</button>
        <button onClick={() => sortByCategory('Очки')} className={selectedCategory === 'Очки' ? 'active' : ''}>Очки</button>
        <button onClick={() => sortByCategory('Кепка')} className={selectedCategory === 'Кепка' ? 'active' : ''}>Кепка</button>
        <button onClick={() => sortByCategory('Цепочка')} className={selectedCategory === 'Цепочка' ? 'active' : ''}>Цепочка</button>
        <button onClick={sortByNewness} className={selectedCategory === 'new' ? 'active' : ''}>Новинки</button>
      </div>
      <div className="sort-filter">
        <label>Сортировка по цене:</label>
        <button onClick={sortByPriceAscending}>По возрастанию</button>
        <button onClick={sortByPriceDescending}>По убыванию</button>
      </div>
      <div className="clothing-items">
        {sortedClothing.map((accessories) => (
          <Link key={accessories.id} to={`/accessories/${accessories.id}`} className="clothing-item-link">
            <div className="clothing-item">
              {accessories.isNew && <div className="new-badge"><FaStar /> New</div>}
              <img src={accessories.image} alt={accessories.name} />
              <div className="clothing-details">
                <h2>{accessories.name}</h2>
                <p>{accessories.description}</p>
                <div className="clothing-price">
                  <FaTag /> {accessories.price} тг.
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
