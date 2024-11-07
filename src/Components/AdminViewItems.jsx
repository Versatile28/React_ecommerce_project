import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Card,Button} from 'react-bootstrap';
import '../styles/AdminViewItems.css';
import {toast} from 'react-toastify';

export default function AdminViewItems() {
  let [products, setProducts] = useState([])

  useEffect(() => {
    function fetchdata() {
      axios.get('http://localhost:8000/Product')
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
    }
    fetchdata()
  }, [products])


  function deleteProduct(id,name){
    axios.delete(`http://localhost:8000/Product/${id}`)
    .then(()=>{
      toast.success(`${name} Deleted succesfully`);
    })
    .catch(()=>{
      toast.error();
    })
  }


  console.log(products);
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
                  <Button variant="primary" className='m-3 btn btn-warning'>Update</Button>
                  <Button variant="primary" onClick={()=>{deleteProduct(product.id,product.name)}} className='m-3 btn btn-danger'>Delete</Button>
                </Card.Body>
              </Card>
        )
      }))}
    </div>
    </div>
  )
}