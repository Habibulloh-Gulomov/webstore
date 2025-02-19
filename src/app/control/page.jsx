'use client'

import Admin from '@/components/Admin'
import AdminList from '@/components/AdminList'
import Order from '@/components/Order'
import React from 'react'

const Control = () => {
  return (
    <div className='text-black '>
      <Admin/>
      <AdminList/>
      <Order/>
    </div>
  )
}

export default Control