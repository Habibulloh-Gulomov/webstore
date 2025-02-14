"use client";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Suspense } from "react";
import { useState , useEffect} from "react";

const page = () => {
	const searchParams = useSearchParams();
	const name = searchParams.get("name");
	const category = searchParams.get('category');
	const price = searchParams.get("price");
	const installment = searchParams.get('installment');
	const id = searchParams.get('id');

	const [formData, setFormData] = useState({
		name: "",
		description: "",
		cost: "",
		brand: "",
	});
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("https://your-backend-api.com/products", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			if (!response.ok) {
				throw new Error("Failed to submit form");
			}
			console.log("Form submitted successfully");
			setIsModalOpen(false);
		} catch (error) {
			console.error("Error submitting form:", error);
		}
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
							className="space-y-4">

							<input
							type="text"
								name="tuman"
								placeholder="tuman tanlang"
								value={formData.description}
								onChange={handleChange}
								className="w-full p-2 border rounded"
								required
							/>

							<input
								type="text"
								name="location"
								placeholder="Viloyatni "
								value={formData.cost}
								onChange={handleChange}
								className="w-full p-2 border rounded"
								required
							/>

							<input
								type="text"
								name="brand"
								placeholder="Ismingizni kiriting"
								value={formData.brand}
								onChange={handleChange}
								className="w-full p-2 border rounded"
								required
							/>

<input
								type="text"
								name="brand"
								placeholder="Raqamingiz"
								value={formData.brand}
								onChange={handleChange}
								className="w-full p-2 border rounded"
								required
							/>
							<div className="flex gap-4">
							<button
							onClick={() => setIsModalOpen(false)}
								type="submit"
								className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-blue-600">
								Bekor qilish
							</button>
							<button
							onClick={() => setIsModalOpen(false)}
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
				<h1 className="text-2xl font-bold">{name}</h1>

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
							<p className="text-3xl font-bold text-red-600">{price}</p>
							<p className="text-gray-600 mt-2">Muddati to'lov:</p>
							<p className="text-xl font-semibold">{installment} so'm</p>
						</div>

						{/* Installment Plan */}
						<div className="bg-gray-50 p-4 rounded-lg shadow mt-4">
							<h3 className="font-semibold">
								Muddati to'lovga rasmiylashtirish
							</h3>
							<div className="flex space-x-4 mt-2">
								<button className="bg-gray-200 px-4 py-2 rounded-lg">
									6 oy
								</button>
								<button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
									12 oyga bo'lib to'lash
								</button>
							</div>
							<p className="mt-2">{installment} so'mdan x 12</p>
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
					<h2 className="text-xl font-semibold border-b pb-2">
						Mahsulot xususiyatlari
					</h2>
					<p className="mt-4 text-gray-600">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Necessitatibus, vel! Voluptatem voluptatibus debitis, tenetur
						quibusdam non et, eaque, esse perferendis eum sed expedita minima
						saepe. Totam dolorem blanditiis voluptas impedit repellat, quod
						cumque dolorum molestiae tempore aliquid incidunt ad, sapiente
						eligendi laudantium earum accusamus. Nemo voluptatem animi molestias
						illum quaerat?
					</p>
					<p className="mt-4 text-gray-600">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
						nostrum deleniti natus dolore consequatur, nemo laboriosam quasi
						quisquam necessitatibus tenetur!
					</p>
				</div>
			</div>
			<Footer />

		</div>
	);
}

export default page
