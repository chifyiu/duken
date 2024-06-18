// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
// import './App.css';
// import NewArrivals from './pages/NewArrivals';
// import Clothing from './pages/Clothing';
// import Footwear from './pages/Footwear';
// import Cart from './pages/Cart';
// import Home from './pages/Home';
// import SearchResults from './pages/SearchResults';
// import { FaCartShopping } from "react-icons/fa6";
// //фотки Худи
// import hudiImage1 from './pages/images/hudi.jpg'; 
// import hudiImage2 from './pages/images/hudi1.jpg'; 
// import hudiImage3 from './pages/images/hudi2.jpg';
// import hudiImage4 from './pages/images/hudi3.jpg';
// import hudiImage5 from './pages/images/hudi4.jpg';
// //фотки Ветровок
// import veterImage1 from './pages/images/ветровка.jpg'; 
// import veterImage2 from './pages/images/ветровка1.jpg'; 
// import veterImage3 from './pages/images/ветровка2.jpg';
// import veterImage4 from './pages/images/ветровка3.jpg';
// import veterImage5 from './pages/images/ветровка4.jpg';
// //Фотки Шортиков
// import shortiImage1 from './pages/images/шорты.jpg'; 
// import shortiImage2 from './pages/images/шорты1.jpg'; 
// import shortiImage3 from './pages/images/шорты2.jpg'; 
// import shortiImage4 from './pages/images/шорты3.jpg';
// import shortiImage5 from './pages/images/шорты4.jpg';
// import shortiImage6 from './pages/images/шорты5.jpg';
// //фотки Футболки
// import futbolkaImage1 from './pages/images/футболка.jpg'; 
// import futbolkaImage2 from './pages/images/футболка1.jpg'; 
// import futbolkaImage3 from './pages/images/футболка2.jpg'; 
// import futbolkaImage4 from './pages/images/футболка3.jpg'; 
// import futbolkaImage5 from './pages/images/футболка4.jpg';
// import futbolkaImage6 from './pages/images/футболка5.jpg';
// //Тапочки
// import tapImage from './pages/images/тапочки4.jpg'; 
// import tapImage1 from './pages/images/тапочки.jpg';
// import tapImage2 from './pages/images/тапочки1.jpg';
// import tapImage3 from './pages/images/тапочки2.jpg';
// import tapImage4 from './pages/images/тапочки3.jpg';
// //Ботинки
// import botiImage from './pages/images/ботинки5.jpg'; 
// import botiImage1 from './pages/images/ботинки.jpg';
// import botiImage2 from './pages/images/ботинки1.jpg';
// import botiImage3 from './pages/images/ботинки2.jpg';
// import botiImage4 from './pages/images/ботинки3.jpg';
// import botiImage5 from './pages/images/ботинки4.jpg';
// //Туфли
// import tufliImage from './pages/images/туфли6.jpg'; 
// import tufliImage1 from './pages/images/туфли.jpg';
// import tufliImage2 from './pages/images/туфли1.jpg';
// import tufliImage3 from './pages/images/туфли2.jpg';
// import tufliImage4 from './pages/images/туфли3.jpg';
// import tufliImage5 from './pages/images/туфли4.jpg';
// import tufliImage6 from './pages/images/туфли5.jpg';
// //Кроссовки
// import krossiImage from './pages/images/кроссы.jpg'; 
// import krossiImage1 from './pages/images/кроссы1.jpg';
// import krossiImage2 from './pages/images/кроссы2.jpg';
// import krossiImage3 from './pages/images/кроссы3.jpg';
// import krossiImage4 from './pages/images/кроссы4.jpg';
// import krossiImage5 from './pages/images/кроссы5.jpg';
// import krossiImage6 from './pages/images/кроссы6.jpg';

// const clothingItems = [
//   { id: 1, name: 'Худи', description: '...', image: hudiImage1, category: 'Худи', price: 3000 },
//   { id: 2, name: 'Худи', description: '...', image: hudiImage2, category: 'Худи', price: 3000 },
//   { id: 3, name: 'Ветровка', description: '...', image: veterImage1, category: 'Ветровка', price: 5000 },
//   { id: 4, name: 'Ветровка', description: '...', image: veterImage2, category: 'Ветровка', price: 5000 },
//   { id: 5, name: 'Шорты', description: '...', image: shortiImage1, category: 'Шорты', price: 3000 },
//   { id: 6, name: 'Шорты', description: '...', image: shortiImage2, category: 'Шорты', price: 3000 },
//   { id: 7, name: 'Шорты', description: '...', image: shortiImage3, category: 'Шорты', price: 3000 },
//   { id: 8, name: 'Футболка', description: '...', image: futbolkaImage1, category: 'Футболка', price: 2500 },
//   { id: 9, name: 'Футболка', description: '...', image: futbolkaImage2, category: 'Футболка', price: 2500 },
//   { id: 10, name: 'Футболка', description: '...', image: futbolkaImage3, category: 'Футболка', price: 2500 },
//   { id: 11, name: 'Футболка', description: '...', image: futbolkaImage4, category: 'Футболка', price: 3500 },
//   { id: 12, name: 'Шорты', description: '...', image: shortiImage4, category: 'Шорты', price: 4000},
//   { id: 13, name: 'Худи', description: '...', image: hudiImage4, category: 'Худи', price: 4500},
//   { id: 14, name: 'Худи', description: '...', image: hudiImage5, category: 'Худи', price: 4000 },
//   { id: 15, name: 'Шорты', description: '...', image:  shortiImage5, category: 'Шорты', price: 4500 },
//   { id: 16, name: 'Шорты', description: '...', image:  shortiImage6, category: 'Шорты', price: 4500 },
//   { id: 17, name: 'Худи', description: '...', image: hudiImage3, category: 'Худи', price: 5000 },
//   { id: 18, name: 'Футболка', description: '...', image: futbolkaImage5, category: 'Футболка', price: 4500 },
//   { id: 19, name: 'Ветровка', description: '...', image: veterImage3, category: 'Ветровка', price: 7000 },
//   { id: 20, name: 'Ветровка', description: '...', image: veterImage4, category: 'Ветровка', price: 7000 },
//   { id: 21, name: 'Ветровка', description: '...', image: veterImage5, category: 'Ветровка', price: 7000 },
//   { id: 22, name: 'Футболка', description: '...', image: futbolkaImage6, category: 'Футболка', price: 4500 },
// ];
// const footwearItems = [
//   { id: 23, name: 'Шлепанцы', description: '...', image: tapImage, category: 'Шлепанцы', price: 2500 },
//   { id: 24, name: 'Ботинки', description: '...', image: botiImage, category: 'Ботинки', price: 5000},
//   { id: 25, name: 'Туфли', description: '...', image: tufliImage, category: 'Туфли', price: 3000},
//   { id: 26, name: 'Кроссовки ', description: '...', image: krossiImage, category: 'Кроссовки', price: 4500},
//   { id: 27, name: 'Кроссовки', description: '...', image:  krossiImage6, category: 'Кроссовки', price: 4500 },
//   { id: 28, name: 'Ботинки', description: '...', image:  botiImage1, category: 'Ботинки', price: 6000 },
//   { id: 29, name: 'Ботинки', description: '...', image: botiImage2, category: 'Ботинки', price: 6500 },
//   { id: 30, name: 'Ботинки', description: '...', image: botiImage3, category: 'Ботинки', price: 7000 },
//   { id: 31, name: 'Ботинки', description: '...', image: botiImage4, category: 'Ботинки', price: 6000 },
//   { id: 32, name: 'Ботинки', description: '...', image: botiImage5, category: 'Ботинки', price: 7500 },
//   { id: 33, name: 'Туфли', description: '...', image: tufliImage6, category: 'Туфли', price: 6500 },
//   { id: 34, name: 'Туфли', description: '...', image: tufliImage1, category: 'Туфли', price: 7000 },
//   { id: 35, name: 'Туфли', description: '...', image: tufliImage2, category: 'Туфли', price: 6000 },
//   { id: 36, name: 'Туфли', description: '...', image: tufliImage3, category: 'Туфли', price: 6500},
//   { id: 37, name: 'Туфли', description: '...', image: tufliImage4, category: 'Туфли', price: 6500},
//   { id: 38, name: 'Туфли', description: '...', image: tufliImage5, category: 'Туфли', price: 7500 },
//   { id: 39, name: 'Шлепанцы', description: '...', image:  tapImage1, category: 'Шлепанцы', price: 4500 },
//   { id: 40, name: 'Шлепанцы', description: '...', image:  tapImage2, category: 'Шлепанцы', price: 4500 },
//   { id: 41, name: 'Шлепанцы', description: '...', image: tapImage3, category: 'Шлепанцы', price: 5000 },
//   { id: 42, name: 'Шлепанцы', description: '...', image: tapImage4, category: 'Шлепанцы', price: 6000 },
//   { id: 43, name: 'Кроссовки', description: '...', image: krossiImage1, category: 'Кроссовки', price: 6500 },
//   { id: 44, name: 'Кроссовки', description: '...', image: krossiImage2, category: 'Кроссовки', price: 7000 },
//   { id: 45, name: 'Кроссовки', description: '...', image: krossiImage3, category: 'Кроссовки', price: 6500 },
//   { id: 46, name: 'Кроссовки', description: '...', image: krossiImage4, category: 'Кроссовки', price: 7500 },
//   { id: 47, name: 'Кроссовки', description: '...', image: krossiImage5, category: 'Кроссовки', price: 6500 },
// ];



// function NavBar() {
//   return (
//     <nav className="App-nav">
//       <ul>
//         <li><Link to="/">Главная</Link></li>
//         <li><Link to="/novinki">Новинки</Link></li>
//         <li><Link to="/odezhda">Одежда</Link></li>
//         <li><Link to="/obuv">Обувь</Link></li>
//         <li ><Link to="/cart"><FaCartShopping />Корзина</Link></li>
//       </ul>
//     </nav>
//   );
// }

// function SearchBar({ searchQuery, setSearchQuery }) {
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     if (e.key === 'Enter') {
//       navigate(`/search?query=${searchQuery}`);
//     }
//   };

//   return (
//     <input
//       type="text"
//       placeholder="Поиск..."
//       value={searchQuery}
//       onChange={(e) => setSearchQuery(e.target.value)}
//       onKeyDown={handleSearch}
//       className="App-search"
//     />
//   );
// }

// function App() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

//     if (existingItemIndex !== -1) {
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingItemIndex].count++;
//       setCartItems(updatedCartItems);
//     } else {
//       setCartItems([...cartItems, { ...item, count: 1 }]);
//     }
//   };

//   const removeFromCart = (id) => {
//     const existingItem = cartItems.find((item) => item.id === id);
  
//     if (existingItem.count > 1) {
//       const updatedCartItems = cartItems.map((item) =>
//         item.id === id ? { ...item, count: item.count - 1 } : item
//       );
//       setCartItems(updatedCartItems);
//     } else {
//       const updatedCartItems = cartItems.filter((item) => item.id !== id);
//       setCartItems(updatedCartItems);
//     }
//   };
  

//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <NavBar />
//           <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//         </header>
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/novinki" element={<NewArrivals searchQuery={searchQuery} addToCart={addToCart}  />} />
//             <Route path="/odezhda" element={<Clothing searchQuery={searchQuery} addToCart={addToCart} clothingItems={clothingItems}/>} />
//             <Route path="/obuv" element={<Footwear searchQuery={searchQuery} addToCart={addToCart} footwearItems={footwearItems} />} />
//             <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
//             <Route path="/search" element={
//               <SearchResults 
//                 searchQuery={searchQuery}
//                 clothingItems={clothingItems}
//                 footwearItems={footwearItems}
//                 addToCart={addToCart}
//               />
//             } />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;
