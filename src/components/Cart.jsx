import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="m">
        <div className="container ct pd my-5">
          {cart.map((product) => <div key={Math.random()}>
            <div className="cards bg-dark text-light">
              <div className="img">
                <img src={product.imgSrc} className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-primary mx-3">{product.price} ₹</button>
                <button className="btn btn-warning">Buy Now</button>
              </div>
            </div>
          </div>)}
        </div>
        <div className="buttons my-5">
          <button type="button" className="btn btn-primary">Checkout</button>
          <Link to={'/'} type="button" className="btn btn-warning">Continue Shopping</Link>
          <button type="button" className="btn btn-danger" onClick={()=>setCart([])}>Clear Cart</button>
        </div>
      </div>

    </>
  )
}

export default Cart