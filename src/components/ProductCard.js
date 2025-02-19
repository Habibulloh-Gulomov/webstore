'use client'
import Link from "next/link";
import Image from "next/image";
import something from '../images/something.png'

const ProductCard = ({ name, category, price, brand, id, img }) => {
  let photo = `https://thewebstorenode.uz.thewebstore.uz//view/${img[0]}`

  for (const element of img[0]) {
    if (element == ' ') {
      photo = something
      console.log(something.src);
    } else {
      console.log(false);
      
    }
  }
  return (
    <div className="flex-col justify-between min-h-52 h-full relative flex overflow-hidden bg-white cursor-pointer rounded-xl group border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow group">
      {/* Favorite Icon */}
      <div className="flex justify-end">
        <button className="z-0 group inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small gap-2 rounded-full px-0 !gap-0 transition-transform-colors-opacity motion-reduce:transition-none text-default-foreground min-w-10 w-10 h-10 data-[hover=true]:opacity-hover absolute top-2 right-2 bg-transparent">❤️</button>
      </div>
      {/* Product Image Placeholder */}
      <div className="flex justify-center w-[260px]">
        <img src={photo} alt="..." width={260} height={260} className="object-fill h-[260px] hover:w-[275px]" />
      </div>
      {/* Category */}
      <p className=" bg-lime-300 w-3/6 text-center mt-2 ml-2 px-2.5 py-1 rounded-full text-sm">
        {brand}
      </p>
      {/* Product Title */}
      <p className="font-bold mt-2 text-black ml-3 text-xl">{name}</p>
      <p className="bg-gray-200 text-gray-700  bold   font-medium px-1 mx-auto font-semibold text-center w-5/6 py-2 rounded-3xl  mt-2 inline-block">
        {price} so'mdan 12 oy
      </p>
      {/* Buy Link */}
      <Link href={{
        pathname: '/product',
        query: { "id": id, 'category': category }, // Query parameter
      }} className="bg-gray-700 text-white flex justify-center items-center  font-bold py-4  mt-3 rounded-t-3xl hover:bg-gray-900 w-full mx-auto transition">
        🛒 SOTIB OLISH
      </Link>
    </div>
  );
};

export default ProductCard;
