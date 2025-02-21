'use client'
import Link from "next/link";
import Image from "next/image";
import something from '../images/something.png'
import { useState, useEffect } from "react";
import redheart from '../images/heartred.png'
import heart from '../images/heart.png'
import { useParams } from "next/navigation";
const ProductCard = ({ name, category, price, brand, id, img }) => {
  const params = useParams()
 
  let photo = `https://thewebstorenode.uz.thewebstore.uz//view/${img[0]}`
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedIds.includes(id)); // Check if the card is already a favorite
  }, []);

  const handleToggleFavorite = () => {
    const storedIds = JSON.parse(localStorage.getItem("favorites")) || [];
    
    if (storedIds.includes(id)) {
      // Remove ID from the array
      const updatedIds = storedIds.filter(favId => favId !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedIds));
      setIsFavorite(false);
    } else {
      // Add ID to the array
      const updatedIds = [...storedIds, id];
      localStorage.setItem("favorites", JSON.stringify(updatedIds));
      setIsFavorite(true);
    }
  };
  for (const element of img[0]) {
    if (element == ' ') {
      photo = something
    } else {
      
    }
  }
  return (
    <div className="flex-col justify-between min-h-52 h-full relative flex overflow-hidden bg-white cursor-pointer rounded-xl group border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow group lg:w-[260px] md:w-[260px] w-[180px] ">
      {/* Favorite Icon */}
      <div className="flex justify-end">
        <button  onClick={handleToggleFavorite} className="z-0 group inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-2 rounded-full px-0 !gap-0 transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground min-w-10 w-10 h-10 data-[hover=true]:opacity-hover absolute top-2 right-2 bg-transparent"><img			  src={isFavorite ? redheart : heart}
					width={40}
					height={40}
					alt="about image "
					className=" p-2 h-auto "
				/></button>
      </div>
      {/* Product Image Placeholder */}
      <div className="flex justify-center lg:w-[260px] md:w-[260px] w-[180px]">
        <img src={photo} alt="..." className="object-fill lg:h-[260px] h-[160px] "  />
      </div>
      {/* Category */}
      <p className=" bg-lime-300 w-3/6 text-center mt-2 ml-2 px-2.5 py-1 rounded-full text-sm">
        {brand}
      </p>
      {/* Product Title */}
      <p className="font-bold mt-2 text-black ml-3 lg:text-lg text-lg">{name}</p>
      <p className="bg-gray-200 text-gray-700  bold   font-medium px-1 mx-auto font-semibold text-center lg:w-5/6 md:w-5/6  p-2 rounded-3xl  mt-2 inline-block lg:text-md text-sm">
        {price} so'mdan 12 oy
      </p>
      {/* Buy Link */}
      <Link href={`/product/productId?id=${id}&category=${category}`} className="bg-gray-700 text-white flex justify-center items-center  font-bold py-4  mt-3 rounded-t-3xl hover:bg-gray-900 w-full mx-auto transition text-md lg:text-lg">
        🛒 SOTIB OLISH
      </Link>
    </div>
  );
};

export default ProductCard;
