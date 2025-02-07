import React, { useState } from 'react';
import "./Login.css"
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();
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
      

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        navigate('/');
      } else {
        console.log('Login failed:', data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('This is a frontend error:', err);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container">
              <div className="login-image">
                <img src="login.jpg" alt=" login image" width="400px" height="400" />

              </div>
              <div className="login-form">
              <h1 className="main-heading">Login Form</h1>
              <br />
                <form onSubmit={handleSubmit} className='form'>
                <div className="col">
                <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    required
                  />
                </div>
                

                  <div className="col">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="text"  // Changed from "text" to "password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    required
                  />
                  </div>
                  

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </main>

      </section>


    </>

  );
};

export default Login;
