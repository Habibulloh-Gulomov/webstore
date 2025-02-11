'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const perfumes = [
  'Bvlgari Le Gemme - Tygar',
  'Tilia Marc-Antoine Barrois',
  'With You Intensely',
  'Tom Ford Lost Cherry',
  'Symphony Louis Vuitton',
  'Louis Vuitton Imagination',
  'Chanel Bleu de Chanel',
  'Dior Sauvage',
  // ... more perfumes
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


  return (
    <div className="w-full p-5 text-black">
      <h2 className="text-3xl font-bold mb-4">Parfyum</h2>
      <div className="relative flex items-center justify-center"> {/* Relative for positioning arrows */}
        {startIndex > 0 && (
          <button onClick={prevSlide} className="absolute left-0 z-10 bg-gray-300 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400">⬅</button>
        )}
        <div ref={carouselRef} className={`flex overflow-x-auto scroll-smooth gap-6`} style={{ scrollSnapType: 'x mandatory' }}> {/* Carousel container */}
          {perfumes.slice(startIndex, startIndex + itemsPerPage).map((item, index) => (
            <div key={index} className="bg-white border shadow-md rounded-xl p-4 w-64 snap-start shrink-0"> {/* Added shrink-0 and snap-start */}
              {/* ... (rest of your item content) */}
              <div className="flex justify-end">
                <button className="text-gray-500 hover:text-gray-700">❤️</button>
              </div>
              <div className="flex justify-center">
                <span className="w-40 h-40 bg-gray-200 rounded-lg"></span>
              </div>
              <span className="bg-gray-300 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mt-2 inline-block">
                Parfum
              </span>
              <h3 className="text-lg font-semibold mt-2 text-black">{item}</h3>
              <p className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-lg mt-2 inline-block">
                88.888 so'mdan 12 oy
              </p>
              <Link
                href="/ProductPage"
                className="bg-gray-700 text-white flex justify-center items-center w-full py-3 rounded-lg mt-3 hover:bg-gray-900 transition"
              >
                🛒 SOTIB OLISH
              </Link>
            </div>
          ))}
        </div>
        {startIndex + itemsPerPage < perfumes.length && (
          <button onClick={nextSlide} className="absolute right-0 z-10 bg-gray-300 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400">➡</button>
        )}
      </div>
    </div>
  );
}