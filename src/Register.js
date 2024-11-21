import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register(props) {
    const navigate = useNavigate();
  // Initialize state to store form values
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phone: '',
    email: '',
    password: ''
  });

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // Update the field being typed into
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Form Data Submitted:', formData); // Display form data in the console
    props.setIsLoggedIn(true);
    localStorage.setItem("username", formData.username);
    navigate("/home")

    // You can add form validation or submit logic here
  };

  return (
    <div className="container" id="login">
      <div className="row">
        <div className="col-md-5 py-3 py-md-0" id="side1">
          <h3 className="text-center">Register</h3>
        </div>
        <div className="col-md-7 py-3 py-md-0" id="side2">
          <h3 className="text-center">Create Account</h3>
          <div className="input2 text-center">
            {/* Form starts here */}
            <form id="registerForm" onSubmit={handleSubmit} style={{color: "black"}}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              /> <br />
              
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              /> <br />
              
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              /> <br />
              
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
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
              
              <input type="submit" value="Submit" />
            </form>
            {/* Form ends here */}
          </div>
        </div>
      </div>
    </div>
  );
}
