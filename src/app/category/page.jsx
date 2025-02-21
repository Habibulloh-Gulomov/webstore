'use client';

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Category from '@/components/Category';
import { useSearchParams } from 'next/navigation';
const page = () => {
  const searchParams = useSearchParams();
    const category_id = searchParams.get('category');
    const title = searchParams.get('title');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  // console.log(title, category_id);
  
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
    <div className=' m-2'>
    {/* <div>
      <ul>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
      </ul>
    </div> */}
    <div className=''>
      {/* <p className='text-black'>{title}</p> */}
     <div className=' flex lg:gap-4 gap-2 flex-wrap align-center justify-center'>
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
