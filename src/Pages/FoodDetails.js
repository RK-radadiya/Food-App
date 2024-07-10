import React, { useState } from 'react'
import Helmet from './../Components/Helmet';
import CommonSection from './CommonSection/CommonSection';
// import ProductImg  from '../../src/Assets/Image/product_01.1.jpg'
import products from './../Assets/Product';
import { useParams } from 'react-router-dom';
import ProductCard from './../Category/ProductCard';
import { useDispatch } from 'react-redux';
import { cartAction } from '../Store/Shoopingcart/CartSlice';


export default function FoodDetails() {

  const { id } = useParams()
  const product = products.find(product => product.id === id)

  const { title , price , category , desc , image01} = product

  const [ prevImg , setprevImg ] = useState (product.image01)

  const [ tab , setTab ] = useState('desc')

  const relatedProduct = products.filter(item => category === item.category);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartAction.addProduct({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return <Helmet title="Food Details">
    <CommonSection title={title}></CommonSection>

    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2 col-md-2'>
            <div className='product_images'>
              <div className='img_item mb-3' onClick={() => setprevImg(product.image01)}>
                <img src={product.image01} alt='' className='w-50'></img>
              </div>
              <div className='img_item mb-3' onClick={() => setprevImg(product.image02)}>
                <img src={product.image02} alt='' className='w-50' ></img>
              </div>
              <div className='img_item mb-3' onClick={() => setprevImg(product.image03)}>
                <img src={product.image03} alt='' className='w-50'></img>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-3'>
            <div className='product_main-img'>
              <img src={prevImg} alt='' className='w-100'></img>
            </div>
          </div>

          <div className='col-lg-6 col-md-6'>
            <div className='single_product-content'>
              <h2 className='product_title'>{title}</h2>
              <p className='product_price'>Price:<span className='product_price'>${price}</span></p>
              <p className='category mb-5'>Category: <span>{category}</span></p>
              <button className='addtocart_btn' onClick={addToCart}>Add to Cart</button>
            </div>
          </div>

          <div className='col-lg-12'>
            <div className='tabs d-flex align-items-center gap-5 py-2 fs-5'>
              <h6 className={`${tab === 'desc' ? 'tab_active': ''}`} onClick={() => setTab('desc')}>Description</h6>
              <h6 className={`${tab === 'review' ? 'tab_active': ''}`} onClick={() => setTab('review')}>Review</h6>
            </div>
          
            {
              tab === 'desc' ? <div className='tab_content'>
              <p>{desc}</p>
              </div> :
              <div className='tab_form'>
                <div className='review'>
                  <p className='user_name mb-0 fw-bold'>Dhruvi</p>
                  <p className='user_email'>dhruvi@gmail.com</p>
                  <p className='feedback_text'>Great Product</p>
                </div>
                <div className='review'>
                  <p className='user_name mb-0 fw-bold'>Dhruvi</p>
                  <p className='user_email'>dhruvi@gmail.com</p>
                  <p className='feedback_text'>Great Product</p>
                </div>
                <div className='review'>
                  <p className='user_name mb-0 fw-bold'>Dhruvi</p>
                  <p className='user_email'>dhruvi@gmail.com</p>
                  <p className='feedback_text'>Great Product</p>
                </div>
                <form className='form'>
                  <div className='form_group'>
                    <input type='text' placeholder='Enter Your Name'></input>
                  </div>
                  <div className='form_group'>
                    <input type='text' placeholder='Enter Your Name'></input>
                  </div>
                  <div className='form_group'>
                    <textarea rows={5} type='text' placeholder='Enter Your Name'></textarea>
                  </div>
                  <button type='submit' className='addtocart_btn'>Submit</button>
                </form> 
              </div>
            }
          </div>
          <div className='col-lg-12 mb-5 mt-5'>
            <h2  className='text-center'>Related Products</h2>
          </div>
          {
            relatedProduct.map(item => (
              <div className='col-lg-3 col-md-4 col-sm-6'>
                <ProductCard item={item}></ProductCard>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  </Helmet>
}

