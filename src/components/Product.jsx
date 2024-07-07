import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Product = ({ datas, setCart, cart }) => {

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
            <div className="container my-5">
                <div className="row">
                    {datas?.map((e) => <div className='col-lg-4 col-md-6 col-sm-12 my-3 text-center' key={e.id}>
                        <div className="card bg-dark text-light" style={{ width: '18rem' }}>
                            <Link to={`/product/${e.title}`} className="img">
                                <img src={e.imgSrc} className="card-img-top" />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <p className="card-text">{e.description}</p>
                                <button className="btn btn-primary mx-3">{e.price} ₹</button>
                                <button className="btn btn-warning" onClick={() => addCart(e.id, e.price, e.title, e.description, e.imgSrc)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>)}

                </div>
            </div>
        </>
    )
}

export default Product