import { useState } from 'react'

const Registration = () => {

  const [user , setUser] = useState({

    username : "", email : "" , phone : "" ,password : ""
  })

  const HandleInput = (event)=>{

    const name = event.target.name;
    const value = event.target.value;

    setUser({...user, [name] : value});


  }

  const HandleSubmit = async (event) =>{
    event.preventDefault()

    const response = await fetch('http://localhost:3000/api/auth/register',
      {
        method : "POST", 
        headers : { "Content-Type" : "application/json"},
        body : JSON.stringify(user)
      }
    );
    // alert("hellow")
    console.log(response);
  }

  

  return (
    <>
    <section>
    <main>
      <div className="section-registration">
        <div className="container grid grid-two-cols">
          <div className="registration-image">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </main>
    <form onSubmit = { HandleSubmit} >
      <label htmlFor = "username">username</label>
      <input type= "text" name = "username" value = {user.username} onChange={HandleInput} />

      <label htmlFor = "email">email</label>
      <input type= "text" name = "email" value = {user.email} onChange={HandleInput} />

      <label htmlFor = "phone">phone</label>
      <input type= "text" name = "phone" value = {user.phone} onChange={HandleInput} />

      <label htmlFor = "password">password</label>
      <input type= "text" name = "password" value = {user.password} onChange={HandleInput} />

      <button type="submit">Submit</button> 
    </form>    
    </section>  
    </>
  )
}

export default Registration
