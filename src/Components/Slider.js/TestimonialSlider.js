import React from 'react'
import Slider from 'react-slick'

import ava01 from '../../Assets/Image/ava-1.jpg'
import ava02 from '../../Assets/Image/ava-2.jpg'
import ava03 from '../../Assets/Image/ava-3.jpg'
import ava04 from '../../Assets/Image/ava-4.jpg'

export default function TestimonialSlider() {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        swipeToSlide: true,
        autoplaySpeed : 3000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

  return (
    <Slider {...settings}>
      <div>
        <p className='review_text'>
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the           industry's standard dummy text ever since the 1500s..! "
        </p>
        <div className='slider_content d-flex align-items-center gap-3'>
          <img src={ava01} alt='' className='rounded'></img>
          <h6>Jon Doe</h6>
        </div>
      </div>
      <div>
        <p className='review_text'>
         " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..! "
        </p>
        <div className=' slider_content d-flex align-items-center gap-3'>
          <img src={ava02} alt='' className=' rounded'></img>
          <h6>Steven Crocks</h6>
        </div>
      </div>
      <div>
        <p className='review_text'>
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..! "
        </p>
        <div className='slider_content d-flex align-items-center gap-3'>
          <img src={ava03} alt='' className=' rounded'></img>
          <h6>Prity Shah</h6>
        </div>
      </div>
      <div>
        <p className='review_text'>
          " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..! "
        </p>
        <div className='slider_content d-flex align-items-center gap-3'>
          <img src={ava04} alt='' className=' rounded'></img>
          <h6>Mr. Patel</h6>
        </div>
      </div>
    </Slider>
  )
}
