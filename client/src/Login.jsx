import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });

      const data = await response.json(); // Convert response to JSON
      
      if (response.ok) {
        console.log('Login successful:', data);
      } else {
        console.log('Login failed:', data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('This is a frontend error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input 
        type="email" 
        name="email" 
        value={user.email} 
        onChange={handleInput} 
        required 
      />

      <label htmlFor="password">Password:</label>
      <input 
        type="text"  // Changed from "text" to "password"
        name="password" 
        value={user.password} 
        onChange={handleInput} 
        required 
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
