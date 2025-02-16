'use client'
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ name, category, price, installment,id, img }) => {
  let photo = `http://thewebstorenode.uz.thewebstore.uz//view/${img[0]}`
  console.log(img[0]);
  
  return (
    <div className="bg-white border shadow-md rounded-xl p-4 w-64">
      {/* Favorite Icon */}
      <div className="flex justify-end">
        <button className="text-gray-500 hover:text-gray-700">❤️</button>
      </div>
      {/* Product Image Placeholder */}
      <div className="flex justify-center">
        <img src={photo} alt="" />
      </div>
      {/* Category */}
      <span className="bg-gray-300 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mt-2 inline-block">
        {category}
      </span>
      {/* Product Title */}
      <h3 className="text-lg font-semibold mt-2 text-black">{name}</h3>
      {/* Price */}
      <p className="text-md font-semibold text-gray-900">{price}</p>
      {/* Installment Price */}
      <p className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-lg mt-2 inline-block">
        {installment}
      </p>
      {/* Buy Link */}
      <Link  href={{
              pathname: '/product',
              query: { "id":id, "name":name, "category":category, "installment":installment, "price": price }, // Query parameter
            }} className="bg-gray-700 text-white flex justify-center items-center w-full py-3 rounded-lg mt-3 hover:bg-gray-900 transition">
        🛒 SOTIB OLISH
      </Link>
    </div>
  );
};

export default ProductCard;
