'use client'
import React, { useState, useEffect } from 'react';
import DeletedCard from './DeletedCard';
import axios from 'axios';

const AdminList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoginModal, setIsLoginModal] = useState(false);

  // Check for token on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsLoginModal(true);
    }
  }, []);

  // Example: Function to save token after login (call this function on login success)
  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsLoginModal(false);
  };

  useEffect(() => {
    axios.get('https://thewebstorenode.uz.thewebstore.uz/posts')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <>
      {isLoginModal && <div className="modal">Please Login</div>}
      <p className='text-3xl items-center font-bold text-center mt-12 pt-12 subpixel-antialiased'>Hamma Mahsulotlar</p>
      <div className='flex flex-wrap gap-5 p-5 justify-center'>
        {data.map((item, index) => (
          <DeletedCard 
            key={index} 
            id={item.postId}
            name={item.product_name} 
            category={item.subcategory}
            price={item.product_cost}
            brand={item.product_brand}
            img={item.postImg}
          />
        ))}
      </div>
    </>
  );
};

export default AdminList;
