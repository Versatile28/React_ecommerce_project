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
        <form action="">
          <label>Username: </label>
          <input type="text" value={username} onChange={(r)=>{setUsername(r.target.value)}} placeholder="Enter the username" required />
          <label>Password: </label>
          <input type="text" value={password} onChange={(r)=>{setPassword(r.target.value)}} placeholder="Enter the password" required />
          <button onClick={Login}>Login</button>
        </form>
      </div>
    </div>
  )
}
