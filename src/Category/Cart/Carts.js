import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { cartUiAction } from '../../Store/Shoopingcart/CartSliceUI';
import { Link } from 'react-router-dom';

export default function Carts() {

  const CartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  const dispatch = useDispatch()
  const cartToggle = () => {
    dispatch(cartUiAction.toggle())
  }

  return (
    <div className='cart_container'>
      <div className='list-group cart'>
         <div className='cart_close' onClick={cartToggle}>
            <span><i className="ri-close-fill fs-5"></i></span>
            <h4 className='text-center text-danger'>My Cart</h4>
         </div>
         <div className='cart_item-list'>
            {
              CartItems.map((item) => {
                  return <CartItem item={item} key={item.id}></CartItem>
              })
            }
         </div>
         <div className='cart_bottom d-flex align-items-center justify-content-between fixed'>
            <h6>Subtotal amount: <span>${totalAmount}</span></h6>
            <button className='mb-3 me-3'><Link to='/checkout' className='cart_link'>Checkout</Link></button>
         </div>
      </div>
    </div>
  )
}
