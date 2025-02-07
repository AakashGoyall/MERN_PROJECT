import { useState } from 'react'
import "./Registration.css";
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Store/auth';

const Registration = () => {

  const {StoreTokenInLS} = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({

    username: "", email: "", phone: "", password: ""
  })

  const HandleInput = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    setUser({ ...user, [name]: value });


  }

  const HandleSubmit = async (event) => {

    event.preventDefault()
    if (!user.username || !user.email || !user.phone || !user.password) {
      alert("All fields are required!");
      return;
    }

    try{

    const response = await fetch('http://localhost:3000/api/auth/register',
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      }
    );
    // alert("hellow")
    console.log(response);
    console.log("hello")
    if(response.ok ){
      const data = await response.json();
      console.log(data)
      console.log(data.token)
      StoreTokenInLS(data.token);
      // setUser({ username: "", email: "", phone: "", password: ""})
      navigate('/login');

    }
    else{
      console.error("Registration failed:", data);
    }
  }catch(err){
    console.log("this is registration frondend error");
  }
  }



  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img src="registration.jpg" alt="A man on the computer" width="400" height="400" />
              </div>
              <div className="registration-form">
                <h1 className="main-heading center">Registration Form</h1>
                <br />
                <form className="form " onSubmit={HandleSubmit} >

                  <div className="col">
                    <label htmlFor="username">username : </label>
                    <input type="text" name="username" value={user.username} onChange={HandleInput} />
                  </div>

                  <div className="col">
                    <label htmlFor="email">email :</label>
                    <input type="text" name="email" value={user.email} onChange={HandleInput} />
                  </div>

                  <div className="col">
                    <label htmlFor="phone">phone : </label>
                    <input type="text" name="phone" value={user.phone} onChange={HandleInput} />
                  </div>

                  <div className="col">
                    <label htmlFor="password">password : </label>
                    <input type="text" name="password" value={user.password} onChange={HandleInput} />

                  </div>

                  
                    <button type="submit" className='center submit'>Submit</button>
              

                </form>
              </div>
            </div>
          </div>
        </main>

      </section>
    </>
  )
}

export default Registration
