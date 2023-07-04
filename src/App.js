import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Headerline from './components/Headerline';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import { Context } from './components/Context';
import { useState } from 'react';
import Cart from './components/Cart';
import Login from './pages/Login';
import Credit from './components/Credit';
import Favorite from './components/Favorite';
import About from './pages/About';
import { useEffect } from 'react';
import Contact from './pages/Contact';

function App() {
  const [cart, setCart] = useState([]);
  const addCart = x => setCart([...cart, x]);
  const removeCart = id => setCart([...cart.filter(item => item.id !== id)])
  const [openCart, setOpenCart] = useState(false);
  const [money, setMoney] = useState(0);
  const [total, setTotal] = useState(0);
  const [favorite, setFavorite] = useState([]);
  const addFavorite = x => setFavorite([...favorite, x]);
  const removeFavorite = id => setFavorite([...favorite.filter(item => item.id !== id)]);
  const [forLoader, setForLoader] = useState(false);

  const props = {
    cart, setCart,
    addCart, removeCart,
    setOpenCart, openCart,
    money, setMoney,
    total, setTotal,
    favorite, setFavorite,
    addFavorite, removeFavorite,
    forLoader, setForLoader
  }

  useEffect(() => {
    let loader = document.querySelector('.loader');
    loader.style.display = 'flex';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 2000);
  }, [forLoader])

  return (
    <Context.Provider value={props}>
      <div className="App">
        <Headerline />
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Products' element={<Products />}></Route>
          <Route path='/Shopping Cart' element={<Cart />}></Route>
          <Route path='/Sign in or Sign up' element={<Login />}></Route>
          <Route path='/Credit' element={<Credit />}></Route>
          <Route path='/Favorite Products' element={<Favorite />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
        <div className="loader">
          <img src="https://cdn.dealereprocess.org/cdn/img/details/img_controls/loading_image.gif" alt="" />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
