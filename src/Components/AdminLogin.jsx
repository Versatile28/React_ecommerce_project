import React, { useEffect, useState } from 'react'
import '../styles/AdminLogin.css'
export default function AdminLogin() {
  let [username,setUsername] = useState("");
  let [password,setPassword] = useState("");
  console.log(username);
  console.log(password);

  let [admin,setAdmin] = useState([]);
  useEffect(()=>{
    async function fetchAdmin(){
      let data = await fetch('http://localhost:8000/Admin');
      let res = await data.json();
      setAdmin(res);
    }
    fetchAdmin();
  },[]);

  function login(){

  };

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
          <button onClick={login}>Login</button>
        </form>
      </div>
    </div>
  )
}
