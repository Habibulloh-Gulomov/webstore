import Link from 'next/link'
import React from 'react'

const Searched = ({id,img, name, price, category}) => {
  console.log(img);
  console.log(id);
  
   let photo = `https://thewebstorenode.uz.thewebstore.uz//view/${img[0]}`
  return (
   <Link href={`/product/productId?id=${id}&category=${category}`} className='bg-gray-100 p-2 rounded-md'>
    <div className='flex text-start items-center  gap-3'>
      <img src={photo} alt="" className='w-16 sm:w-20 max-h-24 object-cover rounded-lg'/>
      <div className='flex flex-col flex-1 gap-1 text-black'>
        <p className='line-clamp-1 break-all font-semibold'>
{name}
        </p>
        <p className='text-black'>
{price} so'm
        </p>
      </div>
    </div>
   </Link>
  )
}

export default Searched
