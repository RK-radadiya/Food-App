import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import products from '../Assets/Product'
import ProductCard from './../Category/ProductCard';
import Category from '../Category/Category'

import TestimonialSlider from '../Components/Slider.js/TestimonialSlider';

import heroImg from '../Assets/Image/hero.png'

import serviceImg01 from '../Assets/Image/service-01.png'
import serviceImg02 from '../Assets/Image/service-02.png'
import serviceImg03 from '../Assets/Image/service-03.png'

import foodCateroryImg01 from '../Assets/Image/hamburger.png'
import foodCateroryImg02 from '../Assets/Image/pizza.png'
import foodCateroryImg03 from '../Assets/Image/bread.png'

import location from '../Assets/Image/location.png'

import network from '../Assets/Image/network.png'


export default function Home() {

  const [category , setCategory] = useState('ALL') 
  const [allproducts , setAllProducts] = useState(products)

  const [hotPizza , setHotPizza] = useState([])

  useEffect(() => {
    const fpizza = products.filter(item => item.category === 'Pizza')
    const slicepizza = fpizza.slice(0,4)
    setHotPizza(slicepizza)
  },[])

  useEffect(() => {
    if(category === "ALL"){
      setAllProducts(products)
    }
    if(category === "BURGER"){
      const filterProduct = products.filter(item => item.category === 'Burger');
      setAllProducts(filterProduct)
    }
    if(category === "PIZZA"){
      const filterProduct = products.filter(item => item.category === 'Pizza');
      setAllProducts(filterProduct)
    }
    if(category === "BREAD"){
      const filterProduct = products.filter(item => item.category === 'Bread');
      setAllProducts(filterProduct)
    }
  }, [category])

  return (
    <div>
      {/* section-1 */}
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='hero__content'>
                <h5 className='mb-3'>Easy way to make an order</h5>
                <h1 className='mb-4 hero__title'>
                <span>HUNGRY?</span> Just wait <br></br> food at <span>your door</span>
                </h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. </p>
            
              <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                <button className="order__btn"> Order now <i className="ri-arrow-right-s-line"></i></button>
                <button className="all__foods-btn"><Link to="/foods" className='text-decoration-none'>See all foods</Link></button>
              </div>
             
              <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i class="ri-shield-check-line"></i></span>100% Secure Checkout</p>
                <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i className="ri-car-line"></i></span>No shipping charge</p>
              </div>
            </div>
         </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='hero__img'>
                <img src={heroImg} alt='Hero' className='w-100'></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-2 */}
      <section>
        <Category></Category>
      </section>

      {/* section-3 */}
      <section>
        <div className="container">
          <div className='row'>
            <div className='text-center'>
                <h5 className='text-danger'>What we serve</h5>
                <h2>
                  Just sit back at home<br></br>We will <span className='text-danger'>take care</span>
                </h2>
                <p className='fs-5 mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting <br></br>industry. Lorem Ipsum has been the industry's standard dummy</p>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-lg-4 col-md-4 col-sm-4 '>
              <div className='text-center'>
                  <img src={serviceImg01} alt='service01' className='serviceImg'></img>
                  <h4 className='mt-3'>Quick Delivery</h4>
                  <p className='fs-5 mt-4'>Lorem Ipsum is simply dummy text of <br></br> the printing and typesetting industry. </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4'>
              <div className='text-center'>
                  <img src={serviceImg02} alt='service02' className='serviceImg'></img>
                  <h4 className='mt-3'>Quick Delivery</h4>
                  <p className='fs-5 mt-4'>Lorem Ipsum is simply dummy text of <br></br> the printing and typesetting industry. </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4'>
              <div className='text-center'>
                  <img src={serviceImg03} alt='service03' className='serviceImg'></img>
                  <h4 className='mt-3'>Quick Delivery</h4>
                  <p className='fs-5 mt-4'>Lorem Ipsum is simply dummy text of <br></br> the printing and typesetting industry. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-4 */}
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <h2 className='text-danger pb-4 text-center'>Popular Foods</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='food_category d-flex align-items-center justify-content-center gap-4'>
                <button className={`all_btn ${category === "ALL" ? "foodBtnActive" : ""}`} onClick={() => setCategory("ALL")}>All</button>
                <button className={`d-flex align-items-center gap-2' ${category === "BURGER" ? "foodBtnActive" : ""}`} onClick={() => setCategory("BURGER")}><img src={foodCateroryImg01} alt="burger"></img>Burger</button>
                <button className={`d-flex align-items-center gap-2' ${category === "PIZZA" ? "foodBtnActive" : ""}`} onClick={() => setCategory("PIZZA")}><img src={foodCateroryImg02} alt="pizza"></img>Pizza</button>
                <button className={`d-flex align-items-center gap-2' ${category === "BREAD" ? "foodBtnActive" : ""}`} onClick={() => setCategory("BREAD")}><img src={foodCateroryImg03} alt="bread"></img>Bread</button>
              </div>
            </div>
              {
                allproducts.map((item) => {
                  return (
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12" key={item.id}>
                      <ProductCard item={item}></ProductCard>
                    </div>
                  )
                })
              }
          </div>
        </div>
      </section>

      {/* section - 5 */}
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div >
                <img src={location} alt='location' className='w-100'></img>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='why_tasty_treat'>
                <h2 className='tasty_treat-title mb-4'>Why <span>Tasty Treat ?</span></h2>
                <p className='fs-5 mt-5 tasty_treat-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <ul className='list-group mt-5'>
                  <li className='list-group-item border-0 ps-0'>
                    <p className='fw-bold d-flex align-items-center gap-2 mt-3'><i className="ri-checkbox-circle-line text-danger"></i>Fresh and tasty food </p>
                    <p className='choose_us-desc'>Lorem Ipsum is simply dummy text of the printing</p>
                  </li>
                  
                  <li className='list-group-item border-0 ps-0'>
                    <p className=' fw-bold d-flex align-items-center gap-2 mt-3'><i className="ri-checkbox-circle-line text-danger"></i>Quality support</p> 
                    <p className='choose_us-desc'>Lorem Ipsum is simply dummy text of the printing</p>
                  </li>

                  <li className='list-group-item border-0 ps-0'>
                    <p className='fw-bold d-flex align-items-center gap-2 mt-3'><i className="ri-checkbox-circle-line text-danger"></i>Order from any location </p>
                    <p className='choose_us-desc'>Lorem Ipsum is simply dummy text of the printing</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section-6 */}
      <section className='pt-0'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center mb-3 fw-bold'>
              <h2 className='fs-1'>Hot Pizza</h2>
            </div>
            {
              hotPizza.map(item => (
                <div className='col-lg-3 col-md-4' key={item.id}>
                  <ProductCard item={item}></ProductCard>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* section-7 */}
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='testimonial mb-5'>
                <h5 className='testimonial_sub-title mb-5'>Testimonial</h5>
                <h2 className='testimonial_title mb-4'>What our <span>customer </span> are saying</h2>
                <p className='testimonial_desc mb-5'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
              <TestimonialSlider></TestimonialSlider>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div>
                <img src={network} alt='' className='w-100'></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
