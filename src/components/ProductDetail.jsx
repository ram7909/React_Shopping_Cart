import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { data } from './Data'
import Product from './Product'
const ProductDetail = ({setCart,cart}) => {
  const { title } = useParams()
  const [product, setProduct] = useState({})
  const [relatedproduct, setRelatedproduct] = useState([])
  useEffect(() => {
    const filterProduct = data.filter((item) => item.title == title)
    setProduct(filterProduct[0])

    const relatedProduct = data.filter((item)=> item.category === product.category)
    setRelatedproduct(relatedProduct)
  }, [title,product.category])

  const addCart = (id, price, title, description, imgSrc) => {
    const obj = { id, price, title, description, imgSrc }
    setCart([...cart, obj])
    toast.success("Item Added Successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
}

  return (
    <>
      <div className="container pd my-5">
        <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        <div className="cards bg-dark text-light">
          <div className="img">
            <img src={product.imgSrc} className="card-img-top" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <button className="btn btn-primary mx-3">{product.price} ₹</button>
            <button className="btn btn-warning" onClick={() => addCart(product.id, product.price, product.title, product.description, product.imgSrc)}>Add to Cart</button>
          </div>
        </div>
      </div>
      <h3 className="container">Related Product</h3>
      <Product datas={relatedproduct} cart={cart} setCart={setCart} />
    </>
  )
}

export default ProductDetail