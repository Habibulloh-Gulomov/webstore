'use client'
import React from 'react'
import DeletedCard from './DeletedCard'
import { useState, useEffect } from 'react';
import axios from 'axios';
const AdminList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://thewebstorenode.uz.thewebstore.uz/posts')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [data.response]);
  return (
    <>
    <p className='text-3xl items-center font-bold text-center mt-12 pt-12 subpixel-antialiased '>Hamma Mahsulotlar</p>
    <div className='flex flex-wrap  gap-5 p-5 justify-center'>
    {data.map((item, index) => (
            <DeletedCard 
            key={index} 
            id = {item.postId}
            name={item.product_name} 
            category={item.subcategory}
            price={item.product_cost}
            brand={item.product_brand}
          />
          ))}
    </div>
    </>
  )
}

export default AdminList