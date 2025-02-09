import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function page() {
  return (
    
    <>
    <Header/>
    <div className="p-6 max-w-6xl mx-auto text-black mt-12 pt-12">
      {/* Product Title */}
      <h1 className="text-2xl font-bold">Parfyum</h1>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {/* Left Section: Images */}
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-lg p-6 flex justify-center">
            <div className="w-64 h-64 bg-gray-200 rounded-lg"></div>
          </div>
          <div className="flex space-x-2">
            <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
            <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
            <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
          </div>
        </div>

        {/* Right Section: Product Info */}
        <div>
          {/* Price Section */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <p className="text-gray-500 line-through">1.888 so'm</p>
            <p className="text-3xl font-bold text-red-600">8888 so'm</p>
            <p className="text-gray-600 mt-2">Muddati to'lov:</p>
            <p className="text-xl font-semibold">96.099 so'm</p>
          </div>

          {/* Installment Plan */}
          <div className="bg-gray-50 p-4 rounded-lg shadow mt-4">
            <h3 className="font-semibold">Muddati to'lovga rasmiylashtirish</h3>
            <div className="flex space-x-4 mt-2">
              <button className="bg-gray-200 px-4 py-2 rounded-lg">6 oy</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                12 oyga bo'lib to'lash
              </button>
            </div>
            <p className="mt-2">33.999 so'mdan x 12</p>
            <button className="bg-green-500 text-white w-full py-3 rounded-lg mt-4">
              Muddati to'lovga xarid qilish
            </button>
          </div>

          {/* Availability & Delivery */}
          <ul className="mt-6 space-y-2">
            <li className="flex items-center">
              ✅ <span className="ml-2">Mahsulot do'konda mavjud!</span>
            </li>
            <li className="flex items-center">
              ✅ <span className="ml-2">Rasmiy kafolat (1 yil)</span>
            </li>
            <li className="flex items-center">
              ✅ <span className="ml-2">Yetkazib berish xizmati bepul</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold border-b pb-2">Mahsulot xususiyatlari</h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, vel! Voluptatem voluptatibus debitis, tenetur quibusdam non et, eaque, esse perferendis eum sed expedita minima saepe. Totam dolorem blanditiis voluptas impedit repellat, quod cumque dolorum molestiae tempore aliquid incidunt ad, sapiente eligendi laudantium earum accusamus. Nemo voluptatem animi molestias illum quaerat?
        </p>
        <p className="mt-4 text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nostrum deleniti natus dolore consequatur, nemo laboriosam quasi quisquam necessitatibus tenetur!
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}
