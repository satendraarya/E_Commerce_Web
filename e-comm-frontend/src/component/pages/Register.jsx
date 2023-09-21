

import React, { useState } from 'react';
import './register.css'
// import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //  await fetch('http://192.168.68.23:8080/signup',{
  //   method:'POST',
  //   body : JSON.stringify(formData)
  //  }).then((res)=>res.json()).then(data => console.log(data,'print data')).catch((err)=>{
  //   console.log(err)
  //  })

  //   axios.post('http://192.168.68.23:8080/signup',{FormData});
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  
    try {
      const response = await fetch('http://192.168.1.18:8080/signup', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json', // Set the Content-Type header
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Response data:', data);
    } catch (err) {
      console.error('Error:', err.message);
    }
  };
  

  return (
    <div className="registration">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Firstname">First Name</label>
          <input
            type="text"
            id="username"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          
        </div>
        <div className='form-group'>
        <label htmlFor="lastname">Last Name </label>
        <input
            type="text"
            id="username"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <select className='select-tool'>
            <option>Buyer</option>
            <option>Saler</option>        
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
