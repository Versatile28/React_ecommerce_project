import React from "react";
import { Link } from "react-router-dom";
import UserAccount from './UserAccountDropdown';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/UserNavBar.css'

export default function UserNavBar() {
  return (
    <div className="UserNavBar">
        <div className="logo">
            <h1>E<span>kart</span></h1>
        </div>
        <div className="links">
            <Link to='/userhomepage/viewproducts'>ShoppingList</Link>
            {/* <Link to='/adminhomepage/viewcart'><ShoppingCartIcon/>Cart</Link> */}
        </div>
        <div className="account">
            <UserAccount/>
        </div>
    </div>
  )
}
