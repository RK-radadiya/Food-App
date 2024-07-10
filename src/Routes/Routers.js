import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Allfood from '../Pages/Allfood';
import Cart from '../Pages/Cart';
import Checkout from './../Pages/Checkout';
import Contact from './../Pages/Contact';
import FoodDetails from '../Pages/FoodDetails';
import Login from './../Pages/Login';
import Register from './../Pages/Register';



export default function Routers() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/allfood' element={<Allfood></Allfood>}></Route>
        <Route path='/food/:id' element={<FoodDetails></FoodDetails>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  )
}