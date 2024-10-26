import React from "react";
import { Link } from "react-router-dom";
import AdminAccount from './AccountDropdown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/AdminNavbar.css'

export default function AdminNavbar() {
  return (
    <div className="AdminNavbar">
        <div className="logo">
            <h1>E<span>kart</span></h1>
        </div>
        <div className="links">
            <Link to='./viewproducts'>ShoppingList</Link>
            <Link to='./viewcart'><ShoppingCartIcon/>Cart</Link>
        </div>
        <div className="account">
            <AdminAccount/>
        </div>
    </div>
  )
}
