import React from 'react';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Electronic Shop</h3>
              <p>
                Vaishali Market, Chas<br />
                Bokaro, Jharkhand<br />
                India<br />
              </p>
              <strong>Phone:</strong> +91 98351 29004<br />
              <strong>Email:</strong> vedanshraj903@gmail.com<br />
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Sitemap</h4>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="register.html">Register</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Product Demonstrations</a></li>
                <li><a href="#">Repairs</a></li>
                <li><a href="#">Technical Support</a></li>
                <li><a href="#">Installations</a></li>
                <li><a href="#">Extended Warranties</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <div className="social-links mt-3">
                <a href="https://wa.me/9608362133" className="whatsapp"><i className="fab fa-whatsapp"></i></a>
                <a href="mailto:vedanshraj903@gmail.com" className="email"><i className="fas fa-envelope"></i></a>
                <a href="https://www.justdial.com/Bokaro/New-Music-Corner-Near-Andhra-Bokaro-Steel-City/9999P6542-6542-170920230746-G9B5_BZDET" className="map"><i className="fas fa-map-marker-alt"></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <hr />
      <div className="container py-4">
        <div className="copyright">
          &copy; Copyright <strong><span>New Music Corner</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">Priyanshi Barnwal</a>
        </div>
      </div>
    </footer>
  );
}
