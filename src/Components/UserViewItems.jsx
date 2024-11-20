import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import '../styles/AdminViewItems.css';

// import { setRef } from '@mui/material';

export default function UserViewItems() {
  let [products,setProducts]=useState([])

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
  },[])

  async function addToCart(id){
   const res= await axios.get(`http://localhost:8000/Product/${id}`)

   await axios.post('http://localhost:8000/Cart',res.data)
}

  return (
    <div className='UserViewItems'>
      <h1 className='title'>Products</h1>
      <div className="sub_items">
      {products.map(((product) => (
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
                  <Button  className='m-3' variant='s' onClick={()=>addToCart(product.id)}><EditIcon/>Add To Cart</Button>
                </Card.Body>
              </Card>
        )))}
    </div>
    </div>
  )
}