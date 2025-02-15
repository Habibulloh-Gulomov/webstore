'use client';

import { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
const perfumes = [
  {
    name: 'Bvlgari Le Gemme - Tygar',
    category: 'Luxury Parfum',
    price: '1,200,000 so‘m',
    installment: '100,000 so‘m x 12 oy',
    id: '1'
  },
  {
    name: 'Tilia Marc-Antoine Barrois',
    category: 'Luxury Parfum',
    price: '1,500,000 so‘m',
    installment: '125,000 so‘m x 12 oy',
    id: '2'
  },
  {
    name: 'With You Intensely',
    category: 'Premium Parfum',
    price: '980,000 so‘m',
    installment: '81,666 so‘m x 12 oy',
    id: '3'
  },
  {
    name: 'Tom Ford Lost Cherry',
    category: 'Luxury Parfum',
    price: '2,000,000 so‘m',
    installment: '166,666 so‘m x 12 oy',
    id: '4'
  },
  {
    name: 'Symphony Louis Vuitton',
    category: 'Designer Parfum',
    price: '1,750,000 so‘m',
    installment: '145,833 so‘m x 12 oy',
    id: '5'
  },
  {
    name: 'Louis Vuitton Imagination',
    category: 'Designer Parfum',
    price: '1,900,000 so‘m',
    installment: '158,333 so‘m x 12 oy',
    id: '6'
  },
  {
    name: 'Chanel Bleu de Chanel',
    category: 'Classic Parfum',
    price: '1,100,000 so‘m',
    installment: '91,666 so‘m x 12 oy',
    id: '7'
  },
  {
    name: 'Dior Sauvage',
    category: 'Classic Parfum',
    price: '1,250,000 so‘m',
    installment: '104,166 so‘m x 12 oy',
    id: '8'
  },
];

export default function ProductList() {
  
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
    const newStartIndex = Math.min(startIndex + itemsPerPage, perfumes.length - itemsPerPage);
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
    axios.get('http://thewebstorenode.uz.thewebstore.uz/posts')
      .then(response => {
        setData(response.data.data);
  console.log(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  

  return (
    <div className="w-full p-5 text-black">
      <h2 className="text-3xl font-bold mb-4">Parfyum</h2>
      <div className="relative flex items-center justify-center"> {/* Relative for positioning arrows */}
        {startIndex > 0 && (
          <button onClick={prevSlide} className="absolute left-0 z-10 bg-gray-300 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400">⬅</button>
        )}
        <div ref={carouselRef} className={`flex overflow-x-auto scroll-smooth gap-6`} style={{ scrollSnapType: 'x mandatory' }}> {/* Carousel container */}
          {data.slice(startIndex, startIndex + itemsPerPage).map((item, index) => (
            <ProductCard 
            key={index} 
            id = {item.postId}
            name={item.product_name} 
            category={item.category}
            price={item.product_cost}
            installment={item.product_brand}
          />
          ))}
        </div>
        {startIndex + itemsPerPage < perfumes.length && (
          <button onClick={nextSlide} className="absolute right-0 z-10 bg-gray-300 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400">➡</button>
        )}
      </div>
    </div>
  );
}