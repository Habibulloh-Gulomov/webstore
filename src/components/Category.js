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
		<div className="p-6 text-black mt-12 pt-12">
			<h2 className="text-3xl font-bold mb-4">Mahsulotlar kategoriyasi</h2>
			<div className="flex space-x-4 overflow-x-auto scrollbar-hide">
				{categories.map((category, index) => (
					<div
						key={index}
						className="flex items-center justify-center bg-gray-100  p-2 rounded-lg  text-center font-medium ">
						<p>{category}</p>
						<img src="https://www.piyolamarket.uz/_next/image?url=https%3A%2F%2Fpub-84845a3beb954d788ceee2312654bab2.r2.dev%2Fproducts%2F5125120b-222d-4ce6-a273-7c4410a3740e.webp&w=128&q=100" alt="" className="w-2/5" />
					</div>
				))}
			</div>
		</div>
	);
};

export default Category;
