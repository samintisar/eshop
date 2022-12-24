import React from "react"
import "./CheckoutProduct.css"

function CheckoutProduct() {
    return (
        <div className="checkoutProduct">
            <img src="https://m.media-amazon.com/images/I/71+g-qsSOsS._AC_UL1500_.jpg" alt="" className="checkoutProduct_image" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">Bag</p>

                <p className="checkoutProduct_price">
                  <small>$</small>
                  <strong>20</strong>
                </p>

                <div className="checkoutProduct_rating">
                  ⭐⭐⭐⭐⭐
                </div>

                <button>Remove from basket</button>
            </div>
        </div>    
    )
}

export default CheckoutProduct