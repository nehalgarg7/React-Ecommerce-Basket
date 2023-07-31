import React, { useContext } from 'react'
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import Product from '../Product/Product';
import "./Home.css";
import {Cart} from "../../../src/Context"
faker.seed(100);

export default function Home() {

  const {cart, setCart} = useContext(Cart);
  console.log(useContext(Cart))

  const productsArray = [...Array(20)].map(()=>({
    id : faker.string.uuid(),
    name :faker.commerce.product(),
    description : faker.commerce.productDescription(),
    price : faker.commerce.price(),
    image : faker.image.avatarLegacy()
  }))

  
  console.log(cart)
  const [products] = useState(productsArray)

  //console.log(productsArray);
  return (
    <div className='productContainer'>
      {products.map((prod => (
        <Product prod = {prod} key={prod.id} />
      )))}
    </div>
  )
}
