import React from "react"
import "./Product.css"

function Product() {
    return (
        <div>
          <div className="product">
            <div className="product_info">
              <p>Title</p>
              <p className="product_price">$30</p>
              <div className="product_rating">⭐⭐⭐⭐⭐</div>
            </div>

            <img src="" alt="product-image" />
            
          </div>
        </div>
    )
}

export default Product