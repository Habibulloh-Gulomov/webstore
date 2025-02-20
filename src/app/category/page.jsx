'use client';

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Category from '@/components/Category';

const page = ({category_id}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://thewebstorenode.uz.thewebstore.uz/posts?subcategory=${category_id}`)
      .then(response => {
        setData(response.data.data);
  console.log(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, data.length);
  return (
    <>
    <Header/>
    <Category/>
    <div className='flex m-4'>
    <div>
      <ul>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
      </ul>
    </div>
    <div className='m-4  flex flex-wrap gap-3 justify-center items-center'>
      
     <div className=' flex gap-5'>
    {data?.map((item, index) => (
            <ProductCard 
            key={index} 
            img={item.postImg}
            id = {item.postId}
            name={item.product_name} 
            category={item.subcategory}
            price={item.product_cost}
            brand={item.product_brand}
          />
          ))}
    </div>
   </div>
    </div>
   <Footer/>
    </>
  )
}

export default page
