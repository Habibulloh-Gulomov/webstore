import React from "react";
import Likeicon from "../images/heart.png";
import searchicon from "../images/search.png";
import logo from '../images/logo.svg'
import Image from "next/image";
const Header = () => {
	return (
		<div className="flex items-center justify-around border drop-shadow-sm ">
			<Image
					src={logo}
					width={150}
					height={50}
					alt="about image "
					className=""
				/>
			<div className="inline w-2/5 relative">
				<label
					htmlForfor="search"
					class=" hidden mb-2 text-sm font-medium text-gray-900 dark:text-white">
					search input
				</label>
				<input
					type="text"
					id="search"
					class="border text-black p-2 px-5 rounded-md w-full pl-12"
					placeholder="Mahsulotlarni qidirish..."
				/>
				<Image
					src={searchicon}
					width={23}
					height={25}
					alt="about image "
					className="absolute bottom-2 left-4"
				/>
			</div>
			<a
				className=" p-2 border-l-2 pl-5"
				href="/">
				<Image
					src={Likeicon}
					width={33}
					height={33}
					alt="about image "
					className=" border  rounded-full p-1"
				/>
			</a>
		</div>
	);
};

export default Header;
