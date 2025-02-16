import { useState } from "react";
import axios from "axios";
import { League_Script } from "next/font/google";

export default function PostForm() {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [info, setInfo] = useState("");
	const [brand, setBrand] = useState("");
	const [monthly, setMonthly] = useState("");
	const [yearly, setYearly] = useState("");
	const [image, setImage] = useState([]);
	const [cost, setCost] = useState("");
	const [subcategory, setSubcategory] = useState("");

	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoginOpen, setIsLoginOpen] = useState(false);
	const [username, setLogin] = useState("");
	const [password, setPassword] = useState("");

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
				"http://thewebstorenode.uz.thewebstore.uz/posts",
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
				window.location.reload();
			}
		} catch (err) {
			setError("Muammo yuz berdi");
			alert("Muammo yuz berdi");
			window.location.reload();
		}
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				"http://thewebstorenode.uz.thewebstore.uz/sign",
				{
					username,
					password,
				}
			);
			if (res.status === 200) {
				setIsLoginOpen(false);
				console.log(res.data.token);
			} else {
				setError("Invalid credentials");
			}
		} catch (err) {
			setError("Login failed");
		}
	};

	return (
		<div className="p-6 max-w-md mx-auto">
			{isLoginOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
					<div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
						<h2 className="text-xl font-bold mb-4">Login</h2>
						<form
							onSubmit={handleLogin}
							className="mb-4">
							<input
								type="text"
								value={username}
								onChange={(e) => setLogin(e.target.value)}
								placeholder="Username"
								className="w-full p-2 mb-2 border border-gray-300 rounded"
								required
							/>
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Password"
								className="w-full p-2 mb-2 border border-gray-300 rounded"
								required
							/>
							<button
								type="submit"
								className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
								Login
							</button>
						</form>
						{error && (
							<div className="p-4 border border-red-500 bg-red-100 rounded">
								<p className="text-red-700">Error: {error}</p>
							</div>
						)}
					</div>
				</div>
			)}

			{!isLoginOpen && (
				<button
					onClick={() => setIsModalOpen(true)}
					className="px-4 py-2 mb-4 bg-green-600 text-white rounded hover:bg-green-700">
					Open Form
				</button>
			)}

			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
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
								<option value="" disabled>Kategoriyasi</option>
								<option value="1">Mavsumiy</option>
								<option value="2">Telefon</option>
								<option value="3">Quloqchin</option>
								<option value="4">Televizor</option>
								<option value="5">Boshqa</option>
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
							<input />

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

						{response && (
							<div className="p-4 border border-green-500 bg-green-100 rounded">
								<h2 className="font-semibold">Response:</h2>
								<pre>{JSON.stringify(response, null, 2)}</pre>
							</div>
						)}

						{error && (
							<div className="p-4 border border-red-500 bg-red-100 rounded">
								<p className="text-red-700">Error: {error}</p>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
