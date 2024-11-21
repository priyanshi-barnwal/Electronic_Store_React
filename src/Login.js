import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const navigate = useNavigate();

  // Initialize state to store form values
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // Update the corresponding form field
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Login Data Submitted:', formData); // Display form data in the console
    props.setIsLoggedIn(true);
    localStorage.setItem("username", formData.username);
    navigate("/home");
    // Add your authentication logic here
  };

  return (
    <div className="container" id="login">
      <div className="row">
        <div className="col-md-5 py-3 py-md-0" id="side1">
          <h3 className="text-center">Welcome Back!</h3>
        </div>
        <div className="col-md-7 py-3 py-md-0" id="side2">
          <h3 className="text-center">Account Login</h3>
          <div className="input2 text-center">
            {/* Form starts here */}
            <form id="loginForm" onSubmit={handleSubmit} style={{color: "black"}}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              /> <br />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              /> <br />

              <input
                className="text-center"
                id="btnlogin"
                type="submit"
                value="Submit"
              />
            </form>
            {/* Form ends here */}
          </div>
        </div>
      </div>
    </div>
  );
}
