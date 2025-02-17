"use client";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Suspense } from "react";
import { useState , useEffect} from "react";
import axios from "axios";

const page = () => {
	const searchParams = useSearchParams();
	const id = searchParams.get('id');
	const [data, setData] = useState(null)
	
	useEffect(() => {
    axios.get(`https://thewebstorenode.uz.thewebstore.uz/post/${id}`)
      .then(response => {
					setData(response.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

	const [formData, setFormData] = useState({
		name: "",
		description: "",
		cost: "",
		brand: "",
	});
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		
		// try {
		// 	const response = await fetch("https://your-backend-api.com/products", {
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify(formData),
		// 	});
		// 	if (!response.ok) {
		// 		throw new Error("Failed to submit form");
		// 	}
		// 	console.log("Form submitted successfully");
		// 	setIsModalOpen(false);
		// } catch (error) {
		// 	console.error("Error submitting form:", error);
		// }
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};
	
		useEffect(() => {
			if (isModalOpen) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
			return () => {
				document.body.style.overflow = "auto";
			};
		}, [isModalOpen]);



		// cost and text changes
		const [text, setText] = useState(true)
		const [cost, setCost] = useState(true)
		const handleActive = (e) => {
      e.preventDefault();
			setText(!text)
		}
		const handleCost = (e) => {
      e.preventDefault();
			setCost(!cost)
		}
			
		
	return (
		<div>
				{isModalOpen && (
				<div className="fixed inset-0 flex items-center z-20 justify-center bg-gray-800 bg-opacity-50 ">
					<div className="bg-white p-6 rounded-lg shadow-lg relative lg:w-1/3 md:w-full">
						<button
							onClick={() => setIsModalOpen(false)}
							className="absolute top-2 right-3 text-3xl text-gray-500 hover:text-black">
							×
						</button>
						<h2 className="text-2xl font-bold mb-4 text-black text-center ">
							Form to'ldiring 
						</h2>
						<form
							onSubmit={handleSubmit}
							className="space-y-4 text-black">

							<input
							type="text"
								name="name"
								placeholder="Ismingiz"
								value={formData.name}
								onChange={handleChange}
								className="w-full p-2 border rounded"
								required
							/>

							<input
								type="text"
								name="description"
								placeholder="description"
								value={formData.description}
								onChange={handleChange}
								className="w-full p-2 border rounded"
								required
							/>

							<input
								type="text"
								name="brand"
								placeholder="brand"
								value={formData.brand}
								onChange={handleChange}
								className="w-full p-2 border rounded"
								required
							/>

<input
								type="text"
								name="cost"
								placeholder="cost"
								value={formData.cost}
								onChange={handleChange}
								className="w-full p-2 border rounded"
								required
							/>
							<div className="flex gap-4">
							<button
							onClick={() => setIsModalOpen(!isModalOpen)}
								type="button"
								className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-blue-600">
								Bekor qilish
							</button>
							<button
							onClick={() => setIsModalOpen(!isModalOpen)}
								type="submit"
								className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-600">
								Buyurtma qilish
							</button>
							</div>
						</form>
					</div>
				</div>
			)}
			<Header />
			<div className="p-6 max-w-6xl mx-auto text-black mt-12 pt-12">
				{/* Product Title */}
				<h1 className="text-2xl font-bold">{data? data.product_name : 'Mahsulot nomi'}</h1>

				{/* Main Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
					{/* Left Section: Images */}
					<div className="space-y-4">
						<div className="rounded-lg flex  gap-3">
							<img src={data ? `https://thewebstorenode.uz.thewebstore.uz//view/${data.postImg[0]}` : '...'} alt="" className=" border w-full hover:shadow-md rounded object-none.69639" />
							<img src={data ? `https://thewebstorenode.uz.thewebstore.uz//view/${data.postImg[1]}` : '...'} alt="" className=" border hover:shadow-md rounded object-none.69639" />
						</div>
						<div className="flex space-x-2">
							<img src={data ? `https://thewebstorenode.uz.thewebstore.uz//view/${data.postImg[0]}` : '...'} alt="" className="w-24 h-32 border hover:shadow-md rounded object-cover" />
							<img src={data ? `https://thewebstorenode.uz.thewebstore.uz//view/${data.postImg[1]}` : '...'} alt="" className="w-24 h-32 border hover:shadow-md rounded object-cover" />
							<img src={data ? `https://thewebstorenode.uz.thewebstore.uz//view/${data.postImg[2]}` : '...'} alt="" className="w-24 h-32 border hover:shadow-md rounded object-cover" />
						</div>
					</div>

					{/* Right Section: Product Info */}
					<div>
						{/* Price Section */}
						<div className="bg-gray-50 p-4 rounded-lg shadow">
							<p className="text-3xl font-bold text-red-600">{data? data.product_cost : 'Mahsulot narxi'}</p>
							<p className="text-gray-600 mt-2">Muddati to'lov:</p>
							<p className="text-xl font-semibold">{cost ? data?.product_monthly_pay_month : data?.product_monthly_pay_year} so'm</p>
						</div>

						{/* Installment Plan */}
						<div className="bg-gray-50 p-4 rounded-lg shadow mt-4">
							<h3 className="font-semibold">
								Muddati to'lovga rasmiylashtirish
							</h3>
							<div className="flex space-x-4 mt-2">
								<button onClick={handleCost} className={cost ? `bg-gray-200 px-4 py-2 rounded-lg`: "bg-blue-600 text-white px-4 py-2 rounded-lg"}>
									6 oy
								</button>
								<button onClick={handleCost} className={!cost ? `bg-gray-200 px-4 py-2 rounded-lg`: "bg-blue-600 text-white px-4 py-2 rounded-lg"}>
									12 oyga
								</button>
							</div>
							<p className="mt-2">{cost ? data?.product_monthly_pay_month : data?.product_monthly_pay_year} so'mdan x 12</p>
							<button className="bg-green-500 text-white w-full py-3 rounded-lg mt-4" onClick={() => setIsModalOpen(true)}>
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
				<div className="border-b flex">
				<button onClick={handleActive} className="text-xl font-semibold border-b-3 border-grey-700 pb-2 mr-5 trasition">
						Mahsulot xususiyatlari
					</button>
					<button onClick={handleActive} className="text-xl font-semibold  pb-2">
						Tavsif
					</button>
				</div>
					<p className="mt-4 text-gray-600 lg:w-3/6 md:w-full">
					{text ? data?.product_description : data?.product_info}
					</p>
				</div>
			</div>
			<Footer />

		</div>
	);
}

export default page
