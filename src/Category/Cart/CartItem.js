import React from 'react'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../Store/Shoopingcart/CartSlice';
// import productimg from '../../assets/Image/product_01.1.jpg'

export default function CartItem(props) {

  const { id , image01 , price , quantity, title, totalprice } = props.item

  const dispatch = useDispatch();
  const increment = () => {
    dispatch(cartAction.addProduct({
      id,
      price,
      title,
      quantity
    }))
  }

  const decrement = () => {
    dispatch(cartAction.removeProduct(id))
  }
  const allDelete = () => {
    dispatch(cartAction.deleteItem(id))
  }
  

  return (
    <div className='list-group-item border-0 cart_item'>
        <div className='cart_item-info d-flex gap-2 p-4'>
          <img src={image01} alt='product_01.1.jpg'></img>
          <div className='cart_product-info w-100 d-flex align-items-center justify-content-between gap-4'>
            <div>
              <h6 className='cart_product-title'>{title}</h6>
              <p className='d-flex align-items-center gap-5 cart_product-price'>{quantity}  <span>${totalprice}</span></p>
              <div className='d-flex align-items-center justify-content-between inc_dec-btn'>
                <span className='inc_btn' onClick={increment}><i className="ri-add-line"></i></span>
                <span className='quantity'>{quantity}</span>
                <span className='dec_btn' onClick={decrement}><i class="ri-subtract-line"></i></span>
              </div>
            </div>
            <span className='delete_btn'  onClick={allDelete}><i class="ri-close-circle-fill fs-5"></i></span>
          </div>
        </div>
    </div>
  )
}
