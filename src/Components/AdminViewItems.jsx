import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Card,Button} from 'react-bootstrap';
import '../styles/AdminViewItems.css';
import {toast} from 'react-toastify';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';


// import { setRef } from '@mui/material';

export default function AdminViewItems() {
  let [products,setProducts]=useState([])
  let[force,setForce]=useState(0);

  useEffect(()=>{
    function fetchdata(){
      axios.get('http://localhost:8000/Product')
      .then((res)=>{
        setProducts(res.data)
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    fetchdata()
  },[force])

  function deleteProduct(id,Name){
    axios.delete(`http://localhost:8000/Product/${id}`)
    .then(()=>{
      toast.success(`${Name} delete successfully`)
      setForce(force+1)
    })
    .catch(()=>{
      toast.error(`Data not present`)
    })
  }

  let navigate=useNavigate()
  function editPage(id){
    navigate(`/adminhomepage/updateproducts/${id}`)
  }

  return (
    <div className='AdminViewItems'>
      <h1 className='title'>Products</h1>
      <div className="sub_items">
      {products.map(((product) => {
        return (
              <Card className='card' style={{ width: '18rem' }}>
                <Card.Img className='card-img' variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    Catagory : {product.catagory}
                  </Card.Text>
                  <Card.Text>
                    M.R.P : <strike>{product.price}</strike>
                  </Card.Text>
                  <Card.Text>
                    Offer Price : {Math.round(product.price*.88)}
                  </Card.Text>
                  <Card.Text className='desc'>
                    {product.desc}
                  </Card.Text>
                  <Card.Text>
                    Ratings: {product.rating}
                  </Card.Text>
                  <Button onClick={()=>{editPage(product.id)}} className='m-3' variant='warning'><EditIcon/>Update</Button>
                  <Button variant="danger" onClick={()=>{deleteProduct(product.id,product.Name)}}  ><DeleteForeverIcon/>Delete</Button>
                </Card.Body>
              </Card>
        )
      }))}
    </div>
    </div>
  )
}