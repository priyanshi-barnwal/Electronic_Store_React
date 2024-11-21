import React from 'react'

export default function Banner() {
  return (
    <section className="banner">
        <div className="content">
          <h1>
            <span>Electronic Services</span>
            <br />
            Up To <span id="span2">20%</span> Off
          </h1>
          <div className="btn">
            <button>
              <a href="#product-cards" style={{ textDecoration: 'none', color: 'inherit' }}>Shop Now</a>
            </button>
          </div>
        </div>
        <div className="img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHk2-DnuiK24g8PVVh30Eff1sKBUNXokk6rVoSEztBbg&s"
            alt="Electronic Services"
          />
        </div>
      </section>
  )
}
