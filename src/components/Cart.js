import { useContext, useState } from 'react';
import Counts from './Counts';
import { Context } from './Context';

export default function Cart() {
  const $ = useContext(Context);
  return (
    <div className="cart__container">
      <div className="cart__information">
        <span></span>
        <span>Product Name</span>
        <span>Product Price</span>
        <span>Count</span>
        <span>Total</span>
        <span></span>
      </div>
      <div className="cart">
        <div className="cart-container">
          {$.cart.map(item => {
            return <div className="cart-item">
              <img src={item.picture} alt="" />
              <h2>{item.name}</h2>
              <span>{item.price}$</span>
              <Counts item={item} />
              <span>{item.price * item.isQuan}$</span>
              <button onClick={() => {
                $.removeCart(item.id);
                $.setTotal($.total - (item.price * item.isQuan))
                item.isQuan = 1;
              }}>x</button>
            </div>
          })}
        </div>
      </div>
      <div className="grand__total">
        <h3>Cart count is {$.cart.length}</h3>
        <span>
          <h2>Total</h2>
          <h2>{$.total}$</h2>
        </span>
        <span>
          <h2>Delivery</h2>
          <h2>2$</h2>
        </span>
        <h4>Grand total {$.total + 2}$</h4>
        <button>Pay Now</button>
      </div>
    </div>
  )
}
