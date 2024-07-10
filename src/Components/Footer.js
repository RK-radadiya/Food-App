import React from 'react'
import logo from '../Assets/Image/res-logo.png';

export default function Footer() {
  return (
    <div className='bgcolor'>
      <div className='container '>
        <div className='row pt-5'>
          <div className='col-lg-3 col-md-3 col-sm-6 p-3'>
            <div className='f-logo'>
              <img src={logo} alt='logo' />
              <h5>Tasty Treat</h5><br></br>
              <p>Lorem Ipsum is simply dummy<br></br>text of the  printing and <br></br>typesetting industry.</p>
            </div>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6 p-3'>
              <div>
                <h4>Delivery Time</h4>
              </div>
              <div className='mt-4'>
                <h6 className='fw-bold'>Sunday - Thursday</h6>
                <p>10:00AM - 11:00PM</p>

                <h6 className='mt-5 fw-bold'>Friday - Saturday</h6>
                <p>Off Day</p>
              </div>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6 p-3'>
             <div>
                <h4>Contact</h4>
             </div>
             <div className='mt-4'>
              <p>Loaction : Xyz,Varachha-395007,Surat</p>
              <h6 className='fw-bold mt-5'>Phone : 7612345670</h6>
              <h6 className='fw-bold mt-4'>Email : demo.123@gmail.com</h6>
             </div>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6 p-3'>
            <div>
              <h4>Newsletter</h4>
            </div>
            <div className='mt-4'>
              <p>Subscribe our newsletter</p>
              <div className="input-group flex-nowrap">
                <input type="email" className="form-control" placeholder="Enter your email"/>
                <span className="input-group-text bg-danger"><i className="ri-send-plane-fill send-box"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-5 pb-5'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div>
              <p className='text-danger fw-bold'>Copyright - Lorem Ipsum is simply dummy .</p>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
              <span>
                <p className='text-end social-logo'>Follow : <i className="ri-facebook-circle-line"></i> <i className="ri-linkedin-fill"></i> <i className="ri-instagram-line"></i></p>
              </span>
          </div>
        </div>
      </div>
    </div>
  )
}
