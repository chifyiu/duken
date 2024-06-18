import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTag,  FaStar} from 'react-icons/fa';
import './css/Outfit.css'; 

const Footwear = () => {
  const all = [
    { id: 30, name: 'Комбинированные кроссовки с сетчатыми деталями и бантами', description: 'Белый · Артикул. 1522/360/001', image: 'https://static.bershka.net/4/photos2/2024/I/1/1/p/1522/360/001//01/96c4b45a1954f55d8210bbb9a70e70cb-1522360001_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 6500, category: 'Кроссовки', isNew: false},
    { id: 31, name: 'Остроносые туфли на широком каблуке', description: 'Черный · Артикул. 1388/360/040', image: 'https://static.bershka.net/4/photos2/2024/V/1/1/p/1388/360/040/dab3854247a7e1777269d099c3eaed03-1388360040_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 9000, category: 'Туфли', isNew: true },
    { id: 40, name: 'Ботильоны на широком каблуке и платформе', description: 'Κоричневый · Артикул. 1132/360/100', image: 'https://static.bershka.net/4/photos2/2024/V/1/1/p/1132/360/100//01/01c704fc7437aa1d07a7914170e5bd13-1132360100_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 9000, category: 'Ботильоны', isNew: true },
    { id: 45, name: 'Туфли на широком каблуке с ремешком', description: 'Черный · Артикул. 1327/160/040', image: 'https://static.bershka.net/4/photos2/2024/V/1/1/p/1327/160/040/bad4ff667f6c4fe1226d5e04212323c1-1327160040_2_3_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 8590, category: 'Mary Jane', isNew: false },
    { id: 36, name: 'Кроссовки из разных материалов с прозрачными сетчатыми вставками', description: 'Белый · Артикул. 1526/360/001', image: 'https://static.bershka.net/4/photos2/2024/V/1/1/p/1526/360/001/e99fbd87def29e107d12f6df710c292a-1526360001_2_2_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 6500, category: 'Кроссовки', isNew: true },
    { id: 33, name: 'Туфли на высоком каблуке с металлическим блеском и шнуровкой', description: 'Серебряный · Артикул. 1312/360/092', image: 'https://static.bershka.net/4/photos2/2024/V/1/1/p/1312/360/092/9cba1c3025cd121ea5bc0e19c62330a7-1312360092_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 8500, category: 'Туфли',isNew: false },
    { id: 41, name: 'Ботильоны со шнуровкой на платформе', description: 'Черный · Артикул. 1220/260/040', image: 'https://static.bershka.net/4/photos2/2024/V/1/1/p/1220/260/040/75be0adc4ddfd143a85421914512dd2c-1220260040_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 8000, category: 'Ботильоны',isNew: false  },
    { id: 46, name: 'Балетки с квадратным носом', description: 'Белый · Артикул. 1620/360/001', image: 'https://static.bershka.net/4/photos2/2024/V/1/1/p/1620/360/001/79373e2c322f4f988c845c8ef79085e1-1620360001_2_3_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 7999, category: 'Mary Jane', isNew: false },
    { id: 37, name: 'Кроссовки в стиле ретро', description: 'Синий · Артикул. 1430/460/009', image: 'https://static.bershka.net/4/photos2/2024/I/1/1/p/1430/460/009//01/1430460009_1_1_3.jpg?t=1717407949098', price: 7500, category: 'Кроссовки', isNew: false },
    { id: 32, name: 'Туфли на каблуке с ремешком', description: 'Черный · Артикул. 1302/260/040', image: 'https://static.bershka.net/4/photos2/2024/V/1/1/p/1302/260/040/65ed7d7715736b65471ab2fa73f0033a-1302260040_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 8000, category: 'Туфли',isNew: false  },
    { id: 42, name: 'Зауженные ботильоны на высоком каблуке и платформе', description: 'Черный · Артикул. 1103/160/040', image: 'https://static.bershka.net/4/photos2/2024/V/1/1/p/1103/160/040/a8a86c8aa430742470f054bf96ab9512-1103160040_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 8500, category: 'Ботильоны', isNew: false},
    { id: 47, name: 'Балетки без задника с пряжками', description: 'Черный · Артикул. 1626/360/040', image: 'https://static.bershka.net/4/photos2/2024/V/1/1/p/1626/360/040//01/1626360040_1_1_3.jpg?t=1705934857871', price: 9500, category: 'Mary Jane',isNew: false  },
    { id: 38, name: 'Кроссовки на объемной платформе со шнуровкой и бусинами', description: 'Белый · Артикул. 1516/360/001', image: 'https://static.bershka.net/4/photos2/2024/I/1/1/p/1516/360/001/8a7d3a4974c8bdb22edf627d4fd1e3db-1516360001_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 8000, category: 'Кроссовки', isNew: false },
    { id: 34, name: 'Туфли-мюли на среднем тонком каблуке', description: 'Белый · Артикул. 1302/460/001', image: 'https://static.bershka.net/4/photos2/2024/I/1/1/p/1302/460/001//01/da37bac68ca447daa049db0f4bcc89c7-1302460001_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 8500, category: 'Туфли', isNew: true},
    { id: 43, name: 'Зауженные ботильоны на высоком каблуке и платформе', description: 'Черный · Артикул. 1018/060/040', image: 'https://static.bershka.net/4/photos2/2024/V/1/1/p/1018/060/040/9aef21c8b650f7f486e15e82014714a3-1018060040_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 8999, category: 'Ботильоны', isNew: false  },
    { id: 48, name: 'Комбинированные балетки в спортивном стиле', description: 'Белый · Артикул. 1531/360/001', image: 'https://static.bershka.net/4/photos2/2024/I/1/1/p/1531/360/001/d4fdeb299c49f7646a0a66b705aa4828-1531360001_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmediumhttps://static.bershka.net/4/photos2/2024/I/1/1/p/1531/360/001/d4fdeb299c49f7646a0a66b705aa4828-1531360001_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 10000, category: 'Mary Jane',isNew: true },
    { id: 39, name: 'Кроссовки в спортивном стиле с металлическим блеском', description: 'Серебряный · Артикул. 1532/360/092', image: 'https://static.bershka.net/4/photos2/2024/V/1/1/p/1532/360/092//02/1532360092_2_3_3.jpg?t=1706604962667', price: 9000, category: 'Кроссовки', isNew: true},
    { id: 35, name: 'Туфли на платформе с высоким каблуком и ремешками на подъеме', description: 'Черный · Артикул. 1338/260/040', image: 'https://static.bershka.net/4/photos2/2024/V/1/1/p/1338/260/040/9cec8902ef5a842621f62e082748bc50-1338260040_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 9000, category: 'Туфли',isNew: true },
    { id: 44, name: 'Облегающие ботильоны на каблуке', description: 'Черный · Артикул. 1144/060/040', image: 'https://static.bershka.net/4/photos2/2024/I/1/1/p/1144/060/040/b5291c74c59aeee05353805728d8f72e-1144060040_1_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium', price: 9500, category: 'Ботильоны',isNew: true },
    { id: 49, name: 'Балетки-мюли на широком каблуке', description: 'Черный · Артикул. 1376/360/040', image: 'https://static.bershka.net/4/photos2/2024/V/1/1/p/1376/360/040//01/1376360040_1_1_3.jpg?t=1704990220840', price: 8500, category: 'Mary Jane', isNew: false },
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
      <h1>Обувь</h1>
      <div className="category-filter">
        <button onClick={() => sortByCategory('all')} className={selectedCategory === 'all' ? 'active' : ''}>Все категории</button>
        <button onClick={() => sortByCategory('Кроссовки')} className={selectedCategory === 'Кроссовки' ? 'active' : ''}>Кроссовки</button>
        <button onClick={() => sortByCategory('Туфли')} className={selectedCategory === 'Туфли' ? 'active' : ''}>Туфли</button>
        <button onClick={() => sortByCategory('Ботильоны')} className={selectedCategory === 'Ботильоны' ? 'active' : ''}>Ботильоны</button>
        <button onClick={() => sortByCategory('Mary Jane')} className={selectedCategory === 'Mary Jane' ? 'active' : ''}>Mary Jane</button>
        <button onClick={sortByNewness} className={selectedCategory === 'new' ? 'active' : ''}>Новинки</button>
      </div>
      <div className="sort-filter">
        <label>Сортировка по цене:</label>
        <button onClick={sortByPriceAscending}>По возрастанию</button>
        <button onClick={sortByPriceDescending}>По убыванию</button>
      </div>
      <div className="clothing-items">
        {sortedClothing.map((footwear) => (
          <Link key={footwear.id} to={`/obuv/${footwear.id}`} className="clothing-item-link">
            <div className="clothing-item">
            {footwear.isNew && <div className="new-badge"><FaStar /> New</div>}
              <img src={footwear.image} alt={footwear.name} />
              <div className="clothing-details">
                <h2>{footwear.name}</h2>
                <p>{footwear.description}</p>
                <div className="clothing-price">
                  <FaTag /> {footwear.price} тг.
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footwear;
