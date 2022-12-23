import React from "react"
import "./Product.css"

function Product() {
    return (
        <div>
          <div className="product">

            <div className="product_info">
              <p>Title</p>
              <p className="product_price">
                <small>$</small>
                <strong>30</strong>
              </p>
              <div className="product_rating">⭐⭐⭐⭐⭐</div>
            </div>

            <img src="https://m.media-amazon.com/images/I/71+g-qsSOsS._AC_UL1500_.jpg" alt="product" />
            <button>Add to Basket</button>
          </div>
        </div>
    )
}

export default Product