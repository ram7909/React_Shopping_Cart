import React, { useState } from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom'
import { data } from './Data'
import { IoCart } from "react-icons/io5";
const Navbar = ({ setDatas,cart }) => {
    const [search, setSearch] = useState("")
    const location = useLocation();
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/search/${search}`);
        setSearch('');
    }
    const filterByCategory = (category) => {
        const newProduct = data.filter((c) => c.category === category)
        setDatas(newProduct)
    }
    const filterByPrice = (price) => {
        const newProduct = data.filter((p) => p.price >= price)
        setDatas(newProduct)
    }

    return (
        <>
            <div className="main sticky-top">
                <div className="nav-bar">
                    <Link to={'/'} className="name">Quik.Buy</Link>
                    <form onSubmit={submitHandler}>
                        <input type="search" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
                    </form>
                    <Link to={'/cart'}><button type="button" className="btn btn-primary position-relative">
                    <IoCart className='icons' style={{fontSize:'1.5rem'}} />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cart.length}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button></Link>
                </div>

                {location.pathname == '/' && (
                    <div className="filter">
                    <div className="items" onClick={() => setDatas(data)}>No Filter</div>
                    <div className="items" onClick={() => filterByCategory('mobiles')}>Mobile</div>
                    <div className="items" onClick={() => filterByCategory('tablets')}>Tablet</div>
                    <div className="items" onClick={() => filterByCategory('laptops')}>Laptop</div>
                    <div className="items" onClick={() => filterByPrice('19999')}>&gt;= 19999</div>
                    <div className="items" onClick={() => filterByPrice('49999')}>&gt;= 49999</div>
                    <div className="items" onClick={() => filterByPrice('99999')}>&gt;= 99999</div>
                </div>
                )}
            </div>

        </>
    )
}

export default Navbar