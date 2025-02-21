'use client';

import { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';


export default function ProductList({title, category_id}) {
  
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(1); // Show 1 item on smaller screens
      } else if (width < 768) { // Adjust breakpoint as needed
        setItemsPerPage(2);
      } else if (width < 1024) { // Adjust breakpoint as needed
        setItemsPerPage(3);
      } else if(width < 1350){
        setItemsPerPage(4);
      }else{
        setItemsPerPage(5)
      }
    };

    handleResize(); // Set initial items per page
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    const newStartIndex = Math.min(startIndex + itemsPerPage, data.length - itemsPerPage);
    setStartIndex(newStartIndex);
    slideCarousel(newStartIndex);
  };

  const prevSlide = () => {
    const newStartIndex = Math.max(startIndex - itemsPerPage, 0);
    setStartIndex(newStartIndex);
    slideCarousel(newStartIndex);
  };

  const slideCarousel = (index) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * (268 + 16), // Item width + gap
        behavior: 'smooth',
      });
    }
  };


  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://thewebstorenode.uz.thewebstore.uz/posts?subcategory=${category_id}`)
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, data.length);

 
  return (
   <>
    <div className="w-full p-5 text-black px-[50px] lg:block hidden">
      <h2 className="font-bold sm:text-xl lg:text-2xl mb-3">{title}</h2>
      <div className="relative flex items-center justify-center"> {/* Relative for positioning arrows */}
        {startIndex > 0 && (
          <button onClick={prevSlide} className="absolute left-0 z-10 bg-gray-300 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400">⬅</button>
        )}
        <div ref={carouselRef} className={`flex overflow-x-auto scroll-smooth gap-6`} style={{ scrollSnapType: 'x mandatory' }}> {/* Carousel container */}
          {data.slice(startIndex, startIndex + itemsPerPage).map((item, index) => (
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
        {startIndex + itemsPerPage < data.length && (
          <button onClick={nextSlide} className="absolute right-0 z-10 bg-gray-300 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400">➡</button>
        )}
      </div>
    </div>
    
   </>
  );
}