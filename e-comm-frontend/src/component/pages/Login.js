

import React, { useState } from 'react';
import './login.css'
//import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({   
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  
    try {
      const response = await fetch('http://192.168.68.23:8080/login', {
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
      <h2>Login page</h2>
      <form onSubmit={handleSubmit}>
       
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
