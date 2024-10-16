import React, { useState } from 'react'
import '../styles/UserLogin.css'
export default function UserLogin() {
  let [username,setUsername] = useState("");
  let [password,setPassword] = useState("");
  console.log(username);
  console.log(password);
  function Login(){
    if(username === "Satyaki" && password === "12345"){
      alert("User logged in");
    }else{
      alert("Invalid credentials");
    }
  }
  return (
    <div className="UserLogin">
      <div className="form_container">
        <div>
          <img src="../user_logo.png" alt="" />
          <h2>User Login</h2>
        </div>
        <form action="">
          <label>Username: </label>
          {/* r.target.value = r is the event and terget is used to target the element on which event in happening na dvalue is uded to get the value */}
          <input type="text" value={username} onChange={(r)=>{setUsername(r.target.value)}} placeholder="Enter the username" required />
          <label>Password: </label>
          <input type="text" value={password} onChange={(r)=>{setPassword(r.target.value)}} placeholder="Enter the password" required />
          <button onClick={Login}>Login</button>
        </form>
      </div>
    </div>
  )
}
