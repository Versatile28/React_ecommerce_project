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

  // function Login(){
  //   let count = admin.reduce((count,i)=>{
  //     return i.username===username && i.password===password?count+1:count;},0);
  //   if(count===1){
  //     alert('Login successful');
  //   }else{
  //     alert('Login Failed');
  //   }
  // };

  function Login(){
    let val = admin.filter((x)=>{
      return x.username===username && x.password===password;
    });
    if(val.length>0){
      alert('Login Successful');
    }else{
      alert('Login Failed');
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
          {/* r.target.value = r is the event and terget is used to target the element on which event in happening and value is uded to get the value */}
          <input type="text" value={username} onChange={(r)=>{setUsername(r.target.value)}} placeholder="Enter the username" required />
          <label>Password: </label>
          <input type="text" value={password} onChange={(r)=>{setPassword(r.target.value)}} placeholder="Enter the password" required />
          <button onClick={Login}>Login</button>
        </form>
      </div>
    </div>
  )
}
