import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from "../../context/StoreContext"
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext)

  const navigate = useNavigate()

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
            if (cartItems[item._id]>0) {
              return(
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt=""/>
                    <p>{item.name}</p>
                    <p>N${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>N${item.price*cartItems[item._id]}</p>
                    <p onClick={()=>removeFromCart(item._id)} className="cross">x</p>
                  </div>
                  <hr />
                 
                </div>
              )
              
            } else {
              
            }
        })}

      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>N${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>N${13}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>N${getTotalCartAmount()+13}</b>
            </div>
          </div>
            <button onClick={()=>navigate('/PlaceOrder')}>Proceed To Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo Code" />
              <button>Redeem</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart