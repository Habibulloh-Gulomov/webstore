import Link from "next/link";

export default function ProductCard() {
  return (
    <div className="bg-white border shadow-md rounded-xl  p-4 w-64">
      {/* Favorite Icon */}
      <div className="flex justify-end">
        <button className="text-gray-500 hover:text-gray-700">
          ❤️
        </button>
      </div>

      {/* Product Image */}
      <div className="flex justify-center">
        <div className="w-40 h-40 bg-gray-200 rounded-lg"></div>
      </div>

      {/* Badge */}
      {/* <span className="bg-green-200 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mt-2 inline-block">
        Ko'p sotilgan
      </span> */}

      {/* Category */}
      <span className="bg-gray-300 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mt-2 inline-block">
        Quloqchin
      </span>

      {/* Product Title */}
      <h3 className="text-lg font-semibold mt-2 text-black">Airpods</h3>

      {/* Installment Price */}
      <p className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-lg mt-2 inline-block">
        88.888 so'mdan 12 oy
      </p>

      {/* Buy Link Instead of Button */}
      <Link
        href="/ProductPage"
        className="bg-gray-700 text-white flex justify-center items-center w-full py-3 rounded-lg mt-3 hover:bg-gray-900 transition"
      >
        🛒 SOTIB OLISH
      </Link>
    </div>
  );
}
