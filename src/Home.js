import React from "react"
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div>
          <div className="home">

            <div className="home_container">
                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce.jpg" alt="background" className="home_image"/>

                <div className="home_row">
                  <Product
                    id="1"
                    title="Bag"
                    price={19.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71+g-qsSOsS._AC_UL1500_.jpg"
                  />
                  <Product 
                    id="2"
                    title="Mass Gainer"
                    price={79.99}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/716eq507NZL._AC_SL1500_.jpg"
                  />
                </div>

                <div className="home_row">
                  <Product 
                    id="3"
                    title="Whey Protein"
                    price={116.54}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61u-qC6Z-mL._AC_SL1500_.jpg"
                  />
                  <Product 
                    id="4"
                    title="Amazon Echo Dot"
                    price={29.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61RNVt9kXUL._AC_SL1000_.jpg"
                  />
                  <Product 
                    id="5"
                    title="Portable Charger"
                    price={59.99}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/71ytBCYHNkL._AC_SX679_.jpg"
                  />
                </div>

                <div className="home_row">
                  <Product 
                    id="1"
                    title="Monitor"
                    price={299.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61B8Lq5NXmL._AC_SX679_.jpg"
                  />
                </div>

            </div>
          </div>
        </div>
    )
}

export default Home