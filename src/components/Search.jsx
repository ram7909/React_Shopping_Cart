import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from './Data';
import Product from './Product';
const Search = ({cart,setCart}) => {
    const { title } = useParams();
    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        const datas = data.filter((p) => p.title.toLowerCase().includes(title.toLowerCase()))
        setFilterData(datas);
    }, [title])

    return (
        <>
            <Product datas={filterData} cart={cart} setCart={setCart} />
        </>
    )
}

export default Search