import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Search from './components/Search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import { data } from './components/Data'
const App = () => {

  const [datas, setDatas] = useState([...data])
  const [cart, setCart] = useState([ ])
  return (
    <div>
      <Router>
        <Navbar cart={cart} setDatas={setDatas} />
        <Routes>
          <Route path='/' element={<Product cart={cart} setCart={setCart} datas={datas} />} />
          <Route path='/product/:title' element={<ProductDetail cart={cart} setCart={setCart} />} />
          <Route path='/search/:title' element={<Search cart={cart} setCart={setCart} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App