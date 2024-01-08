import React from 'react'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './pages/about/About'
import CartPage from './pages/cart page/CartPage'
import Contact from './pages/contact us/Contact'
import Shop from './pages/shop/Shop'
import ScrollTop from './components/ScrollTop'
import Navbar from './components/navbar/Navbar'

function App() {
  
  return (
    <>
    <Navbar />
    <ScrollTop />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Signup />} />
      <Route path='/login' element={<Signup />} />
      <Route path='/about' element={<About />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/forgot' element={<Signup />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/shop' element={<Shop />} />
    </Routes>
    <Footer/>   
    </>
  )
}

export default App
