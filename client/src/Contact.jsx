import React, { useState } from 'react'
// import User from '../../backend/model/user-schema'

const Contact = () => {
    const [user, setUser] = useState({username:"" ,email : "", msg : ""});
    const HandleInput = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setUser({...user,[name] :value});
    }
    const HandleSubmit = async (event) =>{
        event.preventDefault();

        const response = await fetch('http://localhost:3000/api/auth/contact',{
            method:"POST",
            headers : {'Content-Type' : 'application/json'} ,
            body : JSON.stringify(user)
        })
        console.log(response);
    }
  return (
    <>
    <form onSubmit={HandleSubmit}>
    <div>
        <label htmlFor="username">Username : </label>
        <input type="text" name= "username" value={user.username} onChange={HandleInput}/>
    </div>
    <div>
        <label htmlFor="email">Email : </label>
        <input type="text" name= "email" value={user.email} onChange={HandleInput}/>
    </div>
    <div>
        <label htmlFor="msg">Message : </label>
        <textarea cols="30" rows="10" name= "msg" value={user.msg} onChange={HandleInput}/>
    </div>
    <button type='submit'>submit</button>
        
    </form>

      
    </>
  )
}

export default Contact
