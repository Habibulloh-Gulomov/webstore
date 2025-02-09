import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-around text-white bg-cyan-900 p-10 md:flex-row'>
      <div className="mb-5">
        <p className="text-lg">Sizda savol bormi?</p>
        <a href='tel:+998999999999' className='text-3xl'>+998 99 999 99 99</a>
        <div className='flex gap-4'>
        <a href="" className='hover:underline'> <img src="..." className='fab fa-instagram  text-2xl' alt="" /> </a>
                          <a href="" className='hover:underline' > <img src="..." className='fab fa-telegram  text-2xl' alt="" /> </a>
                          <a href="" className='hover:underline'> <img src="..." className='fab fa-whatsapp  text-2xl' alt="" /> </a>
        </div>
      </div>
      <div className="flex gap-10">
        <ul className='mr-5'>
          <li className='text-xl'>Xizmatlar</li>
          <li>Yetkazib berish</li>
          <li>Nasiya savdo</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
        <ul>
          <li className='text-xl'>Kategoriyalar</li>
          <li>Telefonlar</li>
          <li>Quloqchinlar</li>
          <li>Televizorlar</li>
          <li>Boshqa</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer