import React from 'react';
import Header  from './Header';
import Footer from './Footer';
import Routers from '../Routes/Routers';
import { useSelector } from 'react-redux';
import Carts from './../Category/Cart/Carts';

export default function Layout() {

  const cartToggle = useSelector(state => state.cartUi.cartIsVisible)

  return (
    <div>
      <Header></Header>

      {cartToggle === true ? <Carts></Carts> : null}

      <div>
        <Routers></Routers>
      </div>
      <Footer></Footer>
    </div>
  )
}
