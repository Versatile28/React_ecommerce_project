import React, { useState,useEffect } from 'react'
import '../styles/UserLogin.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from 'react-router-dom';

export default function UserLogin() {
  let [username,setUsername] = useState("");
  let [password,setPassword] = useState("");
  console.log(username);
  console.log(password);
  
  let [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      let data = await fetch('http://localhost:8000/User');
      let res = await data.json();
      setUser(res);
    }
    fetchUser();
  }, []);
  console.log(user)

  let navigate = useNavigate();

  function Login() {
    let val = user.filter((x) => {
      return x.username === username && x.password === password;
    });
    console.log(val)
    if (val.length > 0) {
      alert('Login Successful');
      navigate('/userhomepage');
    } else {
      alert('Login Failed');
    }
  }
  return (
    <div className="UserLogin">
      <div>
        <div className="head">
          <img src="../user_logo.png" alt="" />
          <h2>User Login</h2>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={username}
              onChange={(r) => {
                setUsername(r.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(r) => {
                setPassword(r.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={Login}>
            Submit
          </Button>
          <span>Click here to <Link to='/usersignup'>Sign up</Link></span>
        </Form>
      </div>
    </div>
  )
}
