import React from 'react'
import '../styles/AdminAddProducts.css'

export default function AdminAddProducts() {
  return (
    <div className='addproducts'>
        <form action="">
            <fieldset> 
                <label htmlFor="">
                    Category:
                </label>
                <select name="" id="">
                    <option>Dress</option>
                    <option>Mobile</option>
                    <option>Mobile Accessories</option>
                    <option>Electronics</option>
                    <option>Groceries</option>
                    <option></option>
                </select>
                <label>
                    Product Name:
                </label>
                <input type="text" placeholder='Enter the Product'/>
                <label>
                    Product Price:
                </label>
                <input type="text" placeholder='Enter the Price'/>
                <label>
                    Description:
                </label>
                <textarea rows='2' cols='30'></textarea>
                <label>
                    Thumbnail:
                </label>
                <input type="text" placeholder='Enter the image address' />
                <label>
                    Ratings:
                </label>
                <input type="Number" placeholder='Enter the Rating'/>
                <button className='btn btn-danger'>Add Item</button>
            </fieldset>
        </form>
    </div>
  )
}
