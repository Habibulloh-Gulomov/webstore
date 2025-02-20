'use client'
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
const Category = () => {
	const [categories, setCategories] = useState([]);
	
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://thewebstorenode.uz.thewebstore.uz/subcategory");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);
	return (
		<div className="p-6 text-black mt-[100px] px-[50px]">
			<h2 className="font-bold sm:text-xl lg:text-2xl mb-3">Mahsulotlar kategoriyasi</h2>
			<div className="flex space-x-4 overflow-x-auto scrollbar-hide">
				{categories?.map((category) => (
					<Link
					href={{
						pathname: '/category',
						query: { 'category': category.subcategory_id }, // Query parameter
					}}
						className="flex flex-col-reverse text-center sm:text-start sm:flex-row sm:gap-3 bg-gray-100 py-1 px-2 rounded sm:rounded-xl min-w-20 sm:min-w-40 md:min-w-52">
						<p className="flex-1 mt-1 md:pl-1 h-max text-xs line-clamp-1 break-all sm:text-sm md:text-base font-semibold">{category.title}</p>
						<img src={`https://thewebstorenode.uz.thewebstore.uz//view/${category.img}`} alt="" className="h-14 w-14 sm:h-16 sm:w-16 object-contain md:h-20 md:w-20" />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Category;
