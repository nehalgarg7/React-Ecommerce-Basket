import React, { useContext } from 'react'
import "./Product.css"
import { Cart } from "../../../src/Context"
export default function Product({ prod }) {

    const { cart, setCart } = useContext(Cart);

    return (
        <div className='product'>
            <img src={prod.image} alt={prod.name} />
            <div className="product-description">
                <span>{prod.name}</span>
                <span>$ {prod.price}</span>
            </div>
            {cart.includes(prod) ? (
                <button
                    className="add remove"
                    onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
                >Remove from Cart</button>
            ) : (
                <button className="add" onClick={() => {
                    setCart([...cart, prod]);
                }}>Add to Cart</button>
            )}
        </div>
    )
}
