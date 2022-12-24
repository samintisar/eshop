import React from "react"
import "./Checkout.css"

import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"

function Checkout() {
    return (
        <div className="checkout">
          <div className="checkout_left">
            <img src="https://blog.bluetuskr.com/hs-fs/hubfs/7-Mar-10-2021-05-13-20-93-PM-1.png?width=600&name=7-Mar-10-2021-05-13-20-93-PM-1.png" height="150" width="700" alt="" className="checkout_ad" />

            <div>
                <h2 className="checkout_title">
                    Your Shopping Basket
                </h2>
            </div>

            <CheckoutProduct />
          </div>

          <div className="checkout_right">
            <Subtotal />
          </div>
        </div>
    )
}

export default Checkout