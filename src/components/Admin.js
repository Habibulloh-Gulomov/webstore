import { useState } from "react";
import axios from "axios";
import { League_Script } from "next/font/google";
import Logo from '../images/logo.svg'
import Search from '../images/search.png'
import Image from "next/image";
import { useEffect } from "react";
import AddNewItem from "./addNewItem";

export default function PostForm() {
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
 // searching item
	// const [isSearch, setSearch] = useState(null)
	// const [isSearchData, setSearchData] = useState([])
  // useEffect(() => {
  //   axios.get('https://thewebstorenode.uz.thewebstore.uz/posts')
  //     .then(response => {
  //       setSearchData(response.data.data.product_name);
	// 			console.log(response);
				
  //     })
  //     .catch(error => {
  //       console.log();
	// 			(error.message);
  //     });
  // }, isSearch);
	


	// adding new item
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [info, setInfo] = useState("");
	const [brand, setBrand] = useState("");
	const [monthly, setMonthly] = useState("");
	const [yearly, setYearly] = useState("");
	const [image, setImage] = useState([]);
	const [cost, setCost] = useState("");
	const [subcategory, setSubcategory] = useState("");
	let getToken
	try {
		getToken = localStorage.getItem("token") || ""
	} catch (error) {
		console.log(error);

	}

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSearchOpen, setSearchOpen] = useState(false);
	const [isLoginOpen, setIsLoginOpen] = useState(getToken ? false : true);
	useEffect(() => {
		if (isModalOpen || isLoginOpen == true) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isModalOpen, isLoginOpen]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		for (const element of image) {
			formData.append("postImg", element);
		}

		formData.append("product_name", title);
		formData.append("product_description", body);
		formData.append("subcategory", subcategory);
		formData.append("product_info", info);
		formData.append("product_brand", brand);
		formData.append("product_cost", cost);
		formData.append("product_monthly_pay_month", monthly);
		formData.append("product_monthly_pay_year", yearly);

		try {
			const res = await axios.post(
				"https://thewebstorenode.uz.thewebstore.uz/posts",
				formData,
				{
					headers: {
						token:
							"eyJhbGciOiJIUzI1NiJ9.MQ.1tRPowLx-U0FAddHad0zerSPN41lydQhy7A-toLHzBo",
					},
				}
			);

			if (res.data.status == 201) {
				alert("Mahsulot qo'shildi")
				window?.location.reload();
			}
		} catch (err) {
			setError("Muammo yuz berdi");
			alert("Muammo yuz berdi");
			window?.location.reload();
		}
	};

	
	return (
		<div className="p-6 max-w-md mx-auto">
			{isLoginOpen && (
				<AddNewItem/>
			)}

			{!isLoginOpen && (
				<div className="flex items-center justify-around border drop-shadow-md fixed bg-white top-0 right-0 left-0 z-15">
					<Image
						src={Logo}
						width={120}
						height={50}
						alt="company logo"
						className="h-auto w-[120px]"
						priority={true}
					/>
					<div className="inline w-2/5 relative">
						<label
							htmlforfor="search"
							className=" hidden mb-2 text-sm font-medium text-gray-900 dark:text-white">
							search input
						</label>
					</div>
					<button
						onClick={() => setIsModalOpen(true)}
						className="px-4 py-2 mb-4 bg-green-600 text-white rounded hover:bg-green-700">
						Mahsulot qo'shish
					</button>
				</div>
			)}

			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-15">
					<div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
						<button
							onClick={() => setIsModalOpen(false)}
							className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-black">
							×
						</button>
						<h1 className="text-xl font-bold mb-4">Create a New Product</h1>
						<form
							onSubmit={handleSubmit}
							className="mb-4">
							<input
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								min={5}
								placeholder="Nomi"
								className="w-full p-2 mb-2 border border-gray-300 rounded"
								required
							/>
							<input
								type="text"
								value={brand}
								onChange={(e) => setBrand(e.target.value)}
								placeholder="Brand"
								className="w-full p-2 mb-2 border border-gray-300 rounded"
								required
							/>
							<select
								name="kategoriya"
								value={subcategory}
								onChange={(e) => setSubcategory(e.target.value)}
								className="w-full p-2 mb-2 border border-gray-300 rounded"
								required>
								{categories.map((e)=> (
								<option value={e.subcategory_id}>{e.title}</option>
								))}
							</select>
							<input
								type="text"
								value={info}
								onChange={(e) => setInfo(e.target.value)}
								placeholder="Tavsif"
								className="w-full p-2 mb-2 border border-gray-300 rounded"
								required
							/>
							<textarea
								value={body}
								onChange={(e) => setBody(e.target.value)}
								placeholder="Xususiyatlari"
								className="w-full p-2 mb-2 border border-gray-300 rounded"
								required
							/>
							<input
								type="number"
								value={cost}
								onChange={(e) => setCost(e.target.value)}
								placeholder="Narx"
								className="w-full p-2 mb-2 border border-gray-300 rounded"
								required
							/>
							<input
								type="number"
								value={monthly}
								onChange={(e) => setMonthly(e.target.value)}
								placeholder=" 6 Oylik to'lov"
								className="w-full p-2 mb-2 border border-gray-300 rounded"
								required
							/>
							<input
								type="number"
								value={yearly}
								onChange={(e) => setYearly(e.target.value)}
								placeholder="12 oylik to'lov"
								className="w-full p-2 mb-2 border border-gray-300 rounded"
								required
							/>

							<input
								type="file"
								onChange={(e) => setImage(e.target.files)}
								required
								placeholder="1tadan ko'p bo'lsin va 4tadan kam bo'lsin"
								className="w-full p-2 mb-2 border border-gray-300 rounded"
								multiple
							/>
							<button
								type="submit"
								className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
								Submit
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
