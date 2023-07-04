import { Link, NavLink } from 'react-router-dom';
import { AiTwotoneShopping, AiTwotoneHeart } from 'react-icons/ai';
import { useContext } from 'react';
import { Context } from './Context';
export default function Header() {
  const $ = useContext(Context);
  return (
    <header>
      <Link to='/'>Global<span>Electronics</span></Link>
      <ul className="navigation__menu">
        <li onClick={() => $.setForLoader(!$.forLoader)}><NavLink to='/'>Home</NavLink></li>
        <li onClick={() => $.setForLoader(!$.forLoader)}><NavLink to='/About'>About</NavLink></li>
        <li onClick={() => $.setForLoader(!$.forLoader)}><NavLink to='/Products'>Products</NavLink></li>
        <li onClick={() => $.setForLoader(!$.forLoader)}><NavLink to='/Credit'>Credit</NavLink></li>
        <li onClick={() => $.setForLoader(!$.forLoader)}><NavLink to='/Contact'>Contact</NavLink></li>
      </ul>
      <div className="navbar__social__icons">
        <span className="shopping__cart__count">
          <Link to='/Shopping Cart'><AiTwotoneShopping /></Link>
          <span className='shopping__cart__count__point'>{$.cart.length}</span>
        </span>
        <Link to='/Favorite Products'><AiTwotoneHeart style={{ fill: $.favorite.length === 0 ? '#fff' : 'gold' }} /></Link>
        <span className='phone__number'>+374 99 88 99 88</span>
      </div>
    </header>
  )
}
