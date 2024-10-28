import axios from 'axios';
import React from 'react'
import '../styles/AdminAddProducts.css'
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function AdminAddProducts() {
    let [category,setCatagory] = useState("");
    let [name,setName] = useState("");
    let [price,setPrice] = useState("");
    let [desc,setDesc] = useState("");
    let [image,setImage] = useState("");
    let [rating,setRating] = useState("");

    let data = {category, name, price, desc, image, rating};

    function addProducts(e){
        e.preventDefault();
        axios.post('http://localhost:8000/Product',data)
        .then((res)=>{
            console.log(res);
            toast.success("Data added succesfully");
        })
        .catch((err)=>{
            console.log(err);
            toast.error("Invalid info");
        })
    }

  return (
    <div className='addproducts'>
        <form onSubmit={addProducts} action="">
            <fieldset> 
                <label htmlFor="">
                    Category:
                </label>
                <select required value={category} onChange={(e)=>{setCatagory(e.target.value)}} name="" id="">
                    <option>Dress</option>
                    <option>Mobile</option>
                    <option>Mobile Accessories</option>
                    <option>Electronics</option>
                    <option>Groceries</option>
                </select>
                <label>
                    Product Name:
                </label>
                <input required type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter the Product'/>
                <label>
                    Product Price:
                </label>
                <input required type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter the Price'/>
                <label>
                    Description:
                </label>
                <textarea required value={desc} onChange={(e)=>{setDesc(e.target.value)}} rows='2' cols='30'></textarea>
                <label>
                    Thumbnail:
                </label>
                <input required type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} placeholder='Enter the image address' />
                <label>
                    Ratings:
                </label>
                <input required type="Number" value={rating} onChange={(e)=>{setRating(e.target.value)}} placeholder='Enter the Rating'/>
                <button className='btn btn-danger'>Add Item</button>
            </fieldset>
        </form>
    </div>
  )
}
