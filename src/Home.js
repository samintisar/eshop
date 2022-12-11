import React from "react"
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div>
          <div className="home">

            <div className="home_container">
                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce.jpg" height="400" width="1280" alt="background-image" className="home_image"/>

                <div className="home_row">
                  <Product/>
                  <Product/>
                </div>

                <div className="home_row">
                  <Product/>
                  <Product/>
                  <Product/>
                </div>

                <div className="home_row">
                  <Product/>
                </div>

            </div>
          </div>
        </div>
    )
}

export default Home