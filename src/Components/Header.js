import React, {useState } from 'react';
import logo from '../Assets/Image/res-logo.png';
import { NavLink,Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartUiAction } from '../../src/Store/Shoopingcart/CartSliceUI';


const nav_links = [
  {
    display: 'Home',
    path: '/home',
  },
  {
    display: 'Food',
    path: '/allfood',
  },
  {
    display: 'Cart',
    path: '/cart',
  },
  {
    display: 'Contact',
    path: '/contact',
  },
];

export default function Header() {

  const [navlink, setNavlink] = useState('/home')

  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  // console.log(totalQuantity);

  const dispatch = useDispatch();
  const CartToggle = () => {
    dispatch(cartUiAction.toggle())
  }

  // const menuRef = useRef(null)
  // const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

  return (
    <div>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-3 col-sm-12'>
              <div className='logo'>
                <img src={logo} alt='logo' />
                <h5>Tasty Treat</h5>
              </div>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-6'>
              <div className='navigation'>
                <div className='menu d-flex gap-5 justify-content-center p-4'>
                  { nav_links.map((item, index) => {
                    return <NavLink to={item.path} key={index} onClick={() => setNavlink(item.path)} className=
                    {`${navlink === item.path ? "active_menu" : ""}`}>{item.display}</NavLink>
                  })}
                </div>
              </div>
            </div>

            <div className='text-end col-lg-3 col-md-3 col-sm-12 p-2'>
              <span className='cart_icon' onClick={CartToggle}>
                <i className="ri-shopping-basket-fill"></i>
                <span className='cart__badge'>{totalQuantity}</span>
              </span>
              <span className='user ps-4'>
                <Link to="/login" className='text-decoration-none'><i className="ri-user-line"></i></Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // return (
  // <header className='header'>
  //   <div className='container'>
  //     <div className='nav_wrapper d-flex justify-content-between align-items-center'>
  //       <div className='logo'>
  //         <img src={logo} alt='logo' />        
  //         <h5>Tasty Treat</h5>
  //       </div>

  //       {/* -------- Menu ------- */}
  //       <div className='navigation' ref={menuRef}>
  //         <div className='menu d-flex align-items-center gap-5'>
  //           {
  //             nav_links.map((item,index) => (
  //                <NavLink onAuxClick={toggleMenu} to={item.path} key={index} onClick={() => setNavlink(item.path)} className={`${navlink === item.path ? "active_menu" : ""}`}>{item.display}</NavLink>
  //             ))
  //           }
  //         </div>
  //       </div>

  //       {/* -------- nav-right-icon ------ */}
  //       <div className='nav_right d-flex align-items-center gap-4'> 
  //           <span className='cart_icon' onClick={CartToggle}>
  //             <i className="ri-shopping-basket-fill"></i>
  //             <span className='cart__badge'>{totalQuantity}</span>
  //           </span>
  //           <span className='user'>
  //             <Link to="/login"><i className="ri-user-line"></i></Link>
  //           </span>
  //           <span className='mobile_menu' onClick={toggleMenu}>
  //             <i class="ri-menu-line"></i>
  //           </span>
  //       </div>
  //     </div>
  //   </div>
  // </header>
  //)
}
