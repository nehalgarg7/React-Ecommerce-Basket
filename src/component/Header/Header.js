import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"

export default function Header() {
  return (
    <div className='container'>
      <p>Shopping Cart</p>
        <ul className="nav">
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
    </div>
  )
}
