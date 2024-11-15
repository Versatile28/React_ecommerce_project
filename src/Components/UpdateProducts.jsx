import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/UpdateProducts.css';

function UpdateProducts() {
  let [Category, setCategory] = useState('');
  let [Name, setName] = useState('');
  let [Price, setPrice] = useState('');
  let [Desc, setDesc] = useState('');
  let [Rating, setRating] = useState('');
  let [Img, setImg] = useState('');

  let param = useParams();

  let data = { Category, Rating, Price, Img, Desc, Name };
  function updateproducts(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/Product/${param.id}`, data)
      .then((res) => {
        console.log(res);
        toast.success('data added successfully');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Inavlid Data');
      });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8000/Product/${param.id}`)
      .then((res) => {
        console.log(res.data);

        setName(res.data.Name);
        setCategory(res.data.Category);
        setDesc(res.data.Desc);
        setImg(res.data.Img);
        setPrice(res.data.Price);
        setRating(res.data.Raiting);
      })
      .catch((err) => {
        console.log(err);
      });
  },[param.id]);

  return (
    <div className="UpdateProducts">
      <form onSubmit={updateproducts}>
        <fieldset>
          <label>Category</label>
          <select
            required
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Dress Materials">Dress Materials</option>
            <option value="Mobile">Mobile</option>
            <option value="Electronic">Electronic</option>
            <option value="Grocery">Grocery</option>
          </select>

          <label>ProductName</label>
          <input
            required
            type="text"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter the product"
          />
          <label>ProductPrice</label>
          <input
            required
            type="text"
            value={Price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            placeholder="Enter the price"
          />
          <label>Description</label>
          <textarea
            required
            rows={2}
            value={Desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            cols={30}
          />
          <label>Thumbnail</label>
          <input
            type="text"
            value={Img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
            placeholder="Enter the product image address"
          />
          <label htmlFor="">Raiting</label>
          <input
            required
            type="Number"
            value={Rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
            placeholder="Enter the Rating"
          />
          <button className="btn btn-danger"> Add Items</button>
        </fieldset>
      </form>
    </div>
  );
}

export default UpdateProducts;
