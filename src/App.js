import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Newsletter from './Newsletter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Register from './Register';
import Login from './Login';
import { useState, useEffect } from 'react';
import Cart from './Cart';

function App() {
  const [mode, setMode] = useState('light');

  const [isLoggedIn,  setIsLoggedIn] = useState(false);


  const toggleMode = (event) => {
    event.preventDefault();
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
  };

  useEffect(() => {
    const backgroundColor = mode === 'light' ? 'white' : 'rgb(68, 68, 68)';
    const textColor = mode === 'light' ? 'black' : 'white';

    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
  }, [mode]);

  const [isVisible, setIsVisible] = useState(true);

  const handleCart = () => {
      setIsVisible(prevState => !prevState); // Toggle visibility
  };

  const [items, setItems] = useState(0);


  const [cart, setCart] = useState([]);


  return (
    <Router>
      <Navbar toggleMode={toggleMode} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} mode={mode} handleCart={handleCart} items={items}/>
      <div id="about" style={{ color: mode === 'light' ? 'black' : 'white' }}>
        {/* <Cart handleCart={handleCart} isVisible={isVisible} /> */}
        <Routes>
          <Route path="/home" element={<Home cart={cart} setCart={setCart} setItems={setItems}/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/product" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/cart" element={<Cart cart={cart}/>} />
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
      <Newsletter />
      <Footer />
      <a href="#" className="arrow" aria-label="Scroll to top">
        <img src="./images/arrow.png" alt="Arrow icon" />
      </a>
    </Router>
  );
}

export default App;
