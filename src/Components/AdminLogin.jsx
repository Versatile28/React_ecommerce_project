import React, { useState } from 'react'
import '../styles/AdminLogin.css'
export default function AdminLogin() {
  let [username,setUsername] = useState("");
  let [password,setPassword] = useState("");
  console.log(username);
  console.log(password);
  function Login(){
    if(username === "Satyaki" && password === "12345"){
      alert("Admin logged in");
    }else{
      alert("Invalid credentials");
    }
  }
  return (
    <div className="AdminLogin">
      <div className="form_container">
        <div>
          <img src="../admin_logo.png" alt="" />
          <h2>Admin Login</h2>
        </div>
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
