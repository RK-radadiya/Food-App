import React from 'react'
import Helmet from '../Components/Helmet'
import CommonSection from './CommonSection/CommonSection'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../Store/Shoopingcart/CartSlice';

export default function Cart() {

  const cartItem = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return <Helmet title="Cart">
    <CommonSection title="Cart"></CommonSection>
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            {
              cartItem.length === 0 ? (<h4 className='text-center'> Cart is empty.....!</h4>)
               : (<table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Title</th>  
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItem.map(item => <Tr items={item} key={item.id}></Tr>
                    ) 
                  }
                </tbody>
              </table>)
            }
            

            <div className='mt-5'>
              <h6 className='fs-5 fw-bold'>Subtotal :<span className='cart_subtotal'>${totalAmount}</span></h6>
              <p className='fs-5'>Taxes and shipping will calculate at checkout</p>
              <div className='cart_page-btn'>
                <button className=' me-4 border-0'><Link to='/foods' className="addtocart_btn">Continue Shopping</Link></button>
                <button className='border-0'><Link to='/checkout' className="addtocart_btn">Proceed to checkout</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Helmet>
}

const Tr = (props) => {
  const {id,image01,title,quantity,price} = props.items

  const dispatch = useDispatch();

  const allDelete = () => {
    dispatch(cartAction.deleteItem(id))
  }

  return (
    <tr>
      <td className="text-center align-middle cart_img-box"><img src={image01} alt=''></img></td>
      <td className="text-center align-middle">{title}</td>
      <td className="text-center align-middle">${price}</td>
      <td className="text-center align-middle">{quantity}x</td>
      <td className="text-center align-middle cart_item-del" onClick={allDelete}><i class="ri-delete-bin-line"></i></td>
    </tr>
  )
}
