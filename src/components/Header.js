'use client'
import Like from "../images/heart.png";
import Search from "../images/search.png";
import Logo from "../images/logo.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Searched from "./Searched";
const Header = () => {
	const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  let typingTimer;
	
	
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://thewebstorenode.uz.thewebstore.uz/posts");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    clearTimeout(typingTimer);
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setIsOpen(false);
      setFilteredData([]);
      return;
    }

    typingTimer = setTimeout(() => {
      const regex = new RegExp(value.split('').join('.*'), 'i');
      const results = data.filter((item) => regex.test(item.product_name));
      setFilteredData(results);
			console.log(results);
			
      setIsOpen(results.length > 0);
    }, 300); // Delay to avoid excessive filtering
  };
	return (
		<>
		
		<div className="flex items-center justify-around border drop-shadow-md fixed bg-white top-0 right-0 left-0 z-50">
			<Image
				src={Logo}
				width={120}
				height={50}
				alt="about image "
				className="h-auto"
				priority={true}
			/>
			<div className="inline w-2/5 relative">
				<label
					htmlforfor="search"
					className=" hidden mb-2 text-sm font-medium text-gray-900 dark:text-white">
					search input
				</label>
				<input
				autoComplete="off"
					type="text"
					id="search"
					className="border text-black p-2 px-5 rounded-md w-full pl-12"
					placeholder="Mahsulotlarni qidirish..."
					value={query}
        onChange={handleInputChange}
				/>
				<Image
					src={Search}
					width={23}
					height={25}
					alt="about image "
					className="absolute bottom-3 left-4 h-auto "
				/>
			</div>
			<a
				className=" p-2 border-l-2 pl-5 "
				href="/">
				<Image
					src={Like}
					width={40}
					height={40}
					alt="about image "
					className=" bg-gray-100 rounded-full p-2 h-auto "
				/>
			</a>
			
		</div>
		{isOpen && (
        <div onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-20 flex w5/6 ">
          <div className="  p-4 bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
           <div className="flex  gap-5  flex-col max-h-60 overflow-y-auto">
					 {filteredData.map((item) => (
              <Searched
							key={item.product_id} 
							img={item.postImg}
							name={item.product_name} 
							id={item.postId}
							category={item.subcategory}
							price={item.product_cost}
						/>
            ))}
					 </div>
          </div>
        </div>
      )}
		</>
	);
};

export default Header;
