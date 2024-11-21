import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Navbar(props) {
  const navigate = useNavigate();
  const [itemCount, setItemCount] = useState(0);  // Initialize itemCount

  const toggleMode = (event) => {
    event.preventDefault();
    console.log("Theme toggled");
  };

  const handleLogin = () => {
    navigate('./login');
  };

  const handleRegister = () => {
    navigate('./register');
  };

  const handleLogout = () => {
    props.setIsLoggedIn(false);
    navigate('./login');
  };

  const showCart = () => {
    console.log("Cart clicked");
  };

  return (
    <>
      <div className="top-navbar">
        <p>WELCOME TO OUR SHOP</p>
        <div className="icons">
          {!props.isLoggedIn ? (
            <>
              <button className="btn btn-outline-success" onClick={handleLogin}>Login</button>
              <button className="btn btn-outline-success" onClick={handleRegister}>Register</button>
            </>
          ) : (
            <>
              <img src="./images/profile.png" alt="Profile" height="40px" />
              <button className="btn btn-outline-success" onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      </div>

      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="./home" id="logo">
            <span id="span1">New</span>MUSIC <span id="span1">C</span>ORNER
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span><img src="./images/menu.png" alt="Menu" width="30px" /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="./home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./contact">Contact</Link>
              </li>
            </ul>

            {localStorage.getItem("username") && (
              <p>Welcome, {localStorage.getItem("username")}</p>
            )}

            <div onClick={toggleMode}>
              {props.mode === 'light' ? (
                <img src="./images/toDark.png" style={{ height: "30px" }} alt="Toggle to Dark Mode" />
              ) : (
                <img src="./images/toLight.png" style={{ height: "30px", filter: "invert(1)" }} alt="Toggle to Light Mode" />
              )}
            </div>

            <Link to="./cart" className='cartButton'>
              <p>{props.items}</p>
              <Icon icon="f7:cart" width="25" height="25" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
