import React from 'react'
import DeletedCard from './DeletedCard'

const AdminList = () => {
  return (
    <>
    <p className='text-3xl items-center font-bold text-center mt-12 pt-12 subpixel-antialiased'>Hamma Mahsulotlar</p>
    <div className='flex flex-wrap  gap-5 p-5'>
      <DeletedCard/>
      <DeletedCard/>
      <DeletedCard/>
      <DeletedCard/>
      <DeletedCard/>
      <DeletedCard/>
      <DeletedCard/>
      <DeletedCard/>
    </div>
    </>
  )
}

export default AdminList