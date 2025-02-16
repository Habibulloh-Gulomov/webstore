import React from "react";
import img from "../images/search.png";
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
		<div className="p-6 text-black mt-[100px] px-[50px]">
			<h2 className="font-bold sm:text-xl lg:text-2xl mb-3">Mahsulotlar kategoriyasi</h2>
			<div className="flex space-x-4 overflow-x-auto scrollbar-hide">
				{categories.map((category, index) => (
					<div
						key={index}
						className="flex flex-col-reverse text-center sm:text-start sm:flex-row sm:gap-3 bg-gray-100 py-1 px-2 rounded sm:rounded-xl min-w-20 sm:min-w-40 md:min-w-52">
						<p className="flex-1 mt-1 md:pl-1 h-max text-xs line-clamp-1 break-all sm:text-sm md:text-base font-semibold">{category}</p>
						<img src="https://www.piyolamarket.uz/_next/image?url=https%3A%2F%2Fpub-84845a3beb954d788ceee2312654bab2.r2.dev%2Fproducts%2F5125120b-222d-4ce6-a273-7c4410a3740e.webp&w=128&q=100" alt="" className="h-14 w-14 sm:h-16 sm:w-16 object-contain md:h-20 md:w-20" />
					</div>
				))}
			</div>
		</div>
	);
};

export default Category;
