'use client'

import Admin from '@/components/Admin'
import AdminList from '@/components/AdminList'
import NewCategory from '@/components/NewCategory'
import Order from '@/components/Order'
import React from 'react'

const Control = () => {
  return (
    <div className='text-black '>
      <Admin/>
      <NewCategory/>
      <AdminList/>
    </div>
  )
}

export default Control