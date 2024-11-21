import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    machine: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Check if data is correct
    
    emailjs
      .send('service_iideinu', 'template_6r0qx6j', formData, 'NZAgbKReX_fF9Yc0_')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Your enquiry has been sent!');
          setFormData({ name: '', machine: '', phone: '', message: '' });
        },
        (error) => {
          console.log('Email sending error:', error.text);
          alert('Failed to send enquiry. Please try again later.');
        }
      );
  };
  

  return (
    <div className="container" id="contact">
      <div className="row" style={{ marginTop: '50px' }}>
        <div className="col-md-4 py-3 py-md-0">
          <div className="card">
            <i className="fas fa-phone"> Phone</i>
            <h6>+919835129004</h6>
          </div>
        </div>
        <div className="col-md-4 py-3 py-md-0">
          <div className="card">
            <i className="fas fa-envelope"> Email</i>
            <h6>vedanshraj903@gmail.com</h6>
          </div>
        </div>
        <div className="col-md-4 py-3 py-md-0">
          <div className="card">
            <i className="fas fa-location-dot"> Address</i>
            <h6>Vaishali market, chas, Bokaro, Jharkhand, India</h6>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row" style={{ marginTop: '30px' }}>
          <div className="col-md-4 py-3 py-md-0">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <select
              name="machine"
              className="form-control"
              value={formData.machine}
              onChange={handleChange}
            >
              <option>Select Electronic Gadget to enquire</option>
              <option value="Fridge">Fridge</option>
              <option value="Washing Machine">Washing Machine</option>
              <option value="Air Conditioner">Air Conditioner</option>
              <option value="Air Coolers">Air Coolers</option>
              <option value="Home Theatre">Home Theatre</option>
              <option value="Inverter-Battery">Inverter-Battery</option>
              <option value="Microwave Oven">Microwave Oven</option>
              <option value="Laptops">Laptops</option>
              <option value="Smart Phones">Smart Phones</option>
              <option value="Kitchen Appliances">Kitchen Appliances</option>
              <option value="Printers">Printers</option>
              <option value="Soundbars">Soundbars</option>
              <option value="Music System">Music System</option>
              <option value="Water Purifier">Water Purifier</option>
              <option value="Smart TV">Smart TV</option>
              <option value="Geyser">Geyser</option>
            </select>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group" style={{ marginTop: '30px' }}>
            <textarea
              name="message"
              className="form-control"
              rows="5"
              placeholder="Enter your enquiry, we will get in touch with you."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="messagebtn text-center">
            <button type="submit">Message</button>
          </div>
        </div>
      </form>
    </div>
  );
}
