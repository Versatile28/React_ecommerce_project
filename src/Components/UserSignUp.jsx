import React, { useState } from 'react'
import '../styles/UserSignUp.css'
import axios from 'axios'
const UserSignUp = () => {
    let [username,setUsername] = useState("")
    let [password,setPassword] = useState("")
    let [phone,setPhone] = useState("")
    let [name,setname] = useState("")

   let data =  {username,password,phone,name}

    function addUser(){
        axios.post('http://localhost:8000/User',data)
        .then((res)=>{
            console.log(res);
            alert("User Creates Sucessfull")
        })
        .catch((err)=>{
            console.log(err);
            alert("Invalid Data ")            
        })
    }
  return (
    <div className='UserSignUp'>
        <div className="bg_img"></div>
        <form onSubmit={addUser} action="">
            <label htmlFor="">Name :</label>
            <input type="text" value={name} 
            onChange={(e)=>{setname(e.target.value)}} placeholder='Enter the Name' />
            <label htmlFor="">Email :</label>
            <input type="email" value={username} 
            onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter the Username' />
            <label htmlFor="">Password :</label>
            <input type="password" value={password} 
            onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter the Password' />
            <label htmlFor="">Phone :</label>
            <input pattern='[0-9]{10}' value={phone} 
            onChange={(e)=>{setPhone(e.target.value)}} type="tel" placeholder='Enter the Phone' />
            <button  className='btn btn-primary'>SignUp</button>
        </form>
    </div>
  )}
export default UserSignUp