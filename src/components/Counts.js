import { useContext, useState } from "react";
import { Context } from "./Context";

export default function Counts({ item }) {
  const [count, setCount] = useState(0);
  const $ = useContext(Context);
  const increment = () => {
    setCount(item.isQuan += 1);
    $.setMoney(item.isQuan * item.price);
    if($.cart.includes(item)) {
      $.setTotal($.total + item.data)
    }
  }

  const dicrement = () => {
    if (item.isQuan <= 1) {
      item.isQuan = 1
    }
    else {
      setCount(item.isQuan -= 1);
      $.setMoney(item.isQuan * item.price);
      if($.cart.includes(item)) {
        $.setTotal($.total - item.data);
      }
    }
  }

  return (
    <div className="counts">
      <button onClick={dicrement}>-</button>
      <span>{item.isQuan}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}
