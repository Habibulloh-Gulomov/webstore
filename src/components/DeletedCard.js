
export default function DeletedCard() {
  return (
    <div className="bg-white border shadow-md rounded-xl  p-4 w-64">
      <div className="flex justify-end">
      </div>
      <div className="flex justify-center">
        <div className="w-40 h-40 bg-gray-200 rounded-lg"> mahsulot rasmi</div>
      </div>

      {/* Badge */}
      {/* <span className="bg-green-200 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mt-2 inline-block">
        Ko'p sotilgan
      </span> */}

      <span className="mr-2 bg-gray-300 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mt-2 inline-block">
        kategoriyasi
      </span>
      <span className="bg-gray-300 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mt-2 inline-block">
        Brand
      </span>
      <h3 className="text-lg font-semibold mt-2 text-black">Mahsulot Nomi</h3>
      <button
        className="bg-gray-500 text-white flex justify-center items-center w-full py-3 rounded-lg mt-3 hover:bg-red-500 transition"
      >
        Olib tashlash 🗑️
      </button>
    </div>
  );
}
