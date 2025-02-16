import React from "react";
import Like from "../images/heart.png";
import Search from "../images/search.png";
import Logo from "../images/logo.svg";
import Image from "next/image";
const Header = () => {
	return (
		<div className="flex items-center justify-around border drop-shadow-md fixed bg-white top-0 right-0 left-0 z-10">
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
					type="text"
					id="search"
					className="border text-black p-2 px-5 rounded-md w-full pl-12"
					placeholder="Mahsulotlarni qidirish..."
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
	);
};

export default Header;
