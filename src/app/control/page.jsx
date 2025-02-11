import Admin from '@/components/Admin'
import AdminList from '@/components/AdminList'
import Header from '@/components/Header'
import ProductList from '@/components/ProductList'
import React from 'react'

const Control = () => {
  return (
    <div className='text-black '>
      {/* <Header/> */}
      <Admin/>
      <AdminList/>
    </div>
  )
}

export default Control