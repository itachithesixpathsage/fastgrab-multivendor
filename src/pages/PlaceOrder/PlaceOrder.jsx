import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'



const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <div>
      <form action="" className='place-order'>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <input type="email" placeholder='Email Address' />
          <input type="text" placeholder='Street' />
          <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='Region' />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip Code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone Number' />
        </div>

        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>N${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>N${getTotalCartAmount()===0?0:13}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>N${getTotalCartAmount()===0?0:getTotalCartAmount() + 13}</b>
              </div>
            </div>
            <button>Proceed To Payment</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder