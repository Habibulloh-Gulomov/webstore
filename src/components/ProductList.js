import React from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <div className='flex gap-4 flex-wrap justify-center my-5'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}

export default ProductList