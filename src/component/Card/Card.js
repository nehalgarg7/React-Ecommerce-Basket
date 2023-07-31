import React, { useEffect, useState,useContext } from 'react'
import Product from '../Product/Product'
import {Cart} from "../../../src/Context"
export default function Card() {
  
  const [total, setTotal] = useState();

  const {cart, setCart} = useContext(Cart);
  useEffect(() =>{
    setTotal(cart.reduce((acc,curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <span>My Cart</span>
      <br />
      <span>Total : ${total}</span>
      <div className="productContainer">
        {
          cart.map((prod)=>(
            <Product prod={prod} key={prod.id} cart={cart} setCart = {setCart}/>
          ))
        }
      </div>
    </div>
  )
}
