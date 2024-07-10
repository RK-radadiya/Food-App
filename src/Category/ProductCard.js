
import React from 'react';
import { Link } from 'react-router-dom';
import { cartAction } from '../Store/Shoopingcart/CartSlice';
import { useDispatch } from 'react-redux';

export default function ProductCard(props) {
  const { id, image01, title, price } = props.item;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartAction.addProduct({
        id,title,image01,price
      }))
  };

 
  return (
    <div className='product_item  mt-5'>
      <div className='product_img pt-2'>
        <Link to={`/food/${id}`}>
          <img src={image01} alt='Product Img' className='w-50' />
        </Link>
      </div>
      <div className='pt-5'>
        <h5>
          <Link to={`/food/${id}`} className='text-dark title'>
            {title}
          </Link>
        </h5>
        <div className='d-flex align-items-center justify-content-between p-4'>
          <span className='text-danger fw-bold fs-5'>${price}</span>
          <button className='addtocart_btn' onClick={addToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}