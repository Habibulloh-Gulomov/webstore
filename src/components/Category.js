import React from 'react'
import img from '../images/search.png'
const Category = () => {
  const categories = [
    "Parfyum",
    "Audiotexnika",
    "Aqlli soatlar",
    "Mobil telefonlar",
    "WIFI",
    "Sumkalar",
    "Sumkalar",
    "Sumkalar",
    "Sumkalar",
    "Sumkalar",
    "Sumkalar",
  ];
  return (
    <div className="p-6 text-black mt-12 pt-12">
    <h2 className="text-3xl font-bold mb-4">Mahsulotlar kategoriyasi</h2>
    <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-gray-100 px-6 py-4 rounded-lg min-w-[150px] text-center font-medium "
        >
          {category}
          <img src="" alt="" />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Category