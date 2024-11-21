import React, { useState } from 'react';
import Banner from './Banner';
import { Icon } from '@iconify/react';

export default function Home(props) {
  // State to store cart items

  const {cart, setCart} = props;
  
  // Function to handle adding items to the cart
  const addToCart = (product) => {
    props.setItems((prev) => prev + 1)
    props.setCart([...cart, product]);
  };

  return (
    <>
      

      {/* Home content */}
      <section className="home">
        <div className="content">
          <h1>
            <span>Electronic Products</span>
            <br />
            Up To <span id="span2">15%</span> Off
          </h1>
          <p>
            Discover New Music Corner premier electronic machines
            <br /> portable and cart-based systems. Engineered with advanced technology, our products ensure unparalleled
            precision and reliability for daily needs imaging needs.
          </p>
          <div className="btn">
            <button>
              <a href="#product-cards" style={{ textDecoration: 'none', color: 'inherit' }}>Shop Now</a>
            </button>
          </div>
        </div>
        <div className="img">
          <img
            src="https://i.pinimg.com/originals/37/75/11/377511a14c4316c3a859ad46bf530964.png"
            alt="Electronic Products"
          />
        </div>
      </section>

      {/* Product cards */}
      <div className="container" id="product-cards">
        <h1 className="text-center">PRODUCTS</h1>
        <div className="row" style={{ marginTop: '30px' }}>
          {/* Each card with add-to-cart functionality */}
          {[
            { id: 1, name: 'Air Conditioner', price: 45000, image: 'images/ac2.jpeg' },
            { id: 2, name: 'Symphony Air Cooler', price: 5000, image: 'images/cooler.jpeg' },
            { id: 3, name: 'Water Purifier', price: 8000, image: 'images/water-purifier.png' },
            { id: 4, name: 'Inverter Battery', price: 14000, image: 'images/luminous-microtek.webp' },
            { id: 5, name: 'Geyser', price: 5000, image: 'images/geyser.jpg' },
            { id: 6, name: 'Mixer Grinder', price: 1500, image: 'images/mixer grinder.avif' },
            { id: 7, name: 'LED TV', price: 8000, image: 'images/led tv.jpg' },
            { id: 8, name: 'Fan', price: 1200, image: 'images/fan.jpeg' },
            // Add more products here as needed
          ].map((product) => (
            <div className="col-md-3 py-3 py-md-0" key={product.id}>
              <div className="card">
                <img src={product.image} alt={product.name} height="265px" width="350px" />
                <div className="card-body">
                  <h3 className="text-center">{product.name}</h3>
                  <div className="star text-center">
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                  </div>
                  <h2>₹ {product.price.toLocaleString()} <span>
                    <a href="contact.html"><i className="fa-solid fa-cart-shopping"></i></a>
                  </span></h2>
                  <button onClick={() => addToCart(product)}>Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <Banner />
      {/* <div class="container" id="product-cards"> */}

    <div class="row" style={{marginTop: "30px"}}>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src="images/fridge1.png" alt=""/>
          <div class="card-body">
            <h3 class="text-center">Fridge</h3>

            <div class="star text-center">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            </div>
            <h2>₹ 25,000 <span>
              <a  href="contact.html" >  <li  class="fa-solid fa-cart-shopping"></li></a>
              </span></h2>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src="images/phone.png" alt="" height="350px" width="750px"/>
          <div class="card-body">
            <h3 class="text-center">Smart Phones</h3>

            <div class="star text-center">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            </div>
            <h2>₹ 4,000 <span>
              <a  href="contact.html" >  <li  class="fa-solid fa-cart-shopping"></li></a>
              </span></h2>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src="images/earphone.png" alt="" height="350px" width="350px"/>
          <div class="card-body">
            <h3 class="text-center">Earphones</h3>

            <div class="star text-center">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            </div>
            <h2>₹ 500 <span>
              <a  href="contact.html" >  <li  class="fa-solid fa-cart-shopping"></li></a>
              </span></h2>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src="images/pr3.png" alt="" />
          <div class="card-body">
            <h3 class="text-center">Microwave </h3>

            <div class="star text-center">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            </div>
            <h2>₹ 17,000 <span>
              <a  href="contact.html" >  <li  class="fa-solid fa-cart-shopping"></li></a>
              </span></h2>
          </div>
        </div>
      </div>
    </div>
   
    <div class="row" style={{marginTop: "30px"}}>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src="images/Laptop.png" alt="" height="265px" width="350px"/>
          <div class="card-body">
            <h3 class="text-center">Laptops</h3>

            <div class="star text-center">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            </div>
            <h2>₹ 27,000 <span>
              <a  href="contact.html" >  <li  class="fa-solid fa-cart-shopping"></li></a>
              </span></h2>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src="./images/CPU.png" alt="" height="265px" width="350px"/>
          <div class="card-body">
            <h3 class="text-center">CPU</h3>

            <div class="star text-center">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            </div>
            <h2>₹ 10,000 <span>
              <a  href="contact.html" >  <li  class="fa-solid fa-cart-shopping"></li></a>
              </span></h2>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src="./images/watch.png" alt="" height="265px" width="350px"/>
          <div class="card-body">
            <h3 class="text-center">Smart Watch</h3>

            <div class="star text-center">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            </div>
            <h2>₹ 1000 <span>
              <a  href="contact.html" >  <li  class="fa-solid fa-cart-shopping"></li></a>
              </span></h2>
          </div>
        </div>
      </div>
      <div class="col-md-3 py-3 py-md-0">
        <div class="card">
          <img src="./images/iphone.png" alt="" height="265px" width="350px"/>
          <div class="card-body">
            <h3 class="text-center">Iphones</h3>

            <div class="star text-center">
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
              <i class="fa-solid fa-star checked"></i>
            </div>
            <h2  >₹ 65,000 <span>
              <a  href="contact.html" >  <li  class="fa-solid fa-cart-shopping"></li></a>
              </span></h2>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
