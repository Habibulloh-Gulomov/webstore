import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around text-white bg-cyan-900 p-10'>
      <div className="">
        <p className="text-lg">Sizda savol bormi?</p>
        <a href='tel:+998999999999' className='text-2xl'>+998 99 999 99 99</a>
        <div>
          <a className=' flex gap-5' href="">Telegram</a>
        </div>
      </div>
      <div className="">
        <p className="text-lg">Mijozlar uchun</p>
        <ul>
          <li>yetkazib berish usullari</li>
          <li>yetkazib berish usullari</li>
          <li>yetkazib berish usullari</li>
          <li>yetkazib berish usullari</li>
        </ul>
      </div>
      <div className="">
      <p className="text-lg">Kategoriyalar</p>
        <ul>
          <li>yetkazib berish usullari</li>
          <li>yetkazib berish usullari</li>
          <li>yetkazib berish usullari</li>
          <li>yetkazib berish usullari</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer