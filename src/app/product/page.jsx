"use client";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Suspense } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import logo from '../../images/logo.svg'
import Image from "next/image";
import { addMonths, format } from "date-fns";


const page = () => {
	
	const [text, setText] = useState(true)
	const [cost, setCost] = useState(true)
	let date = !cost ? "6 Default" : "12 Default"
	const searchParams = useSearchParams();
	const id = searchParams.get('id');
	const subcategory = searchParams.get('category');
	const [data, setData] = useState(null)
  const [error, setError] = useState(false)
	
	// uzum market ariza
	const [formData, setFormData] = useState({
		phone: "",
		amount: '',

	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSelfieSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://thewebstorenode.uz.thewebstore.uz/order", {
				phone: formData.phone,
				period: date,
				products: [{
					amount: formData.amount,
					name: data.product_name,
					imei: "213421341234134",
					price: data.product_cost,
					category: data.subcategory,
					unit_id: "1",
					product_id: id,
				}]
			}, {
				headers: { 'Content-Type': 'application/json' }

			});
			console.log(response);
			window.open(response.data)


		} catch (error) {
      setError(true)
			console.log(error);

		}
	};

  // get future date
	const sixMonthsLater = format(addMonths(new Date(), 6), "yyyy-MM-dd");
	const twelveMonthsLater = format(addMonths(new Date(), 12), "yyyy-MM-dd");
	
	console.log("6 Months Later:", sixMonthsLater);
	console.log("12 Months Later:", twelveMonthsLater);
	

	// get and design

	useEffect(() => {
		axios.get(`https://thewebstorenode.uz.thewebstore.uz/post/${id}`)
			.then(response => {
				setData(response.data);
			})
			.catch(error => {
				console.log(error.message);
			});
	}, []);
	const [isModalOpen, setIsModalOpen] = useState(false);


	const [category, setCategory] = useState([])
	useEffect(() => {
		axios.get(`https://thewebstorenode.uz.thewebstore.uz/posts?subcategory=${subcategory}`)
			.then(response => {
				setCategory(response.data.data);
				console.log(response.data)

			})
			.catch(error => {
				console.log(error.message);
			});
	}, []);

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
							onSubmit={handleSelfieSubmit}
							className="space-y-4 text-black" method="POST">
							<input name="phone" placeholder="Telefon raqami" onChange={handleChange} className="w-full p-2 border rounded" autoComplete="off" />
							<input name="amount" placeholder="Mahsulot soni" onChange={handleChange} className="w-full p-2 border rounded" type="number" />
							<div className="flex gap-4">
								<button
									onClick={() => setIsModalOpen(!isModalOpen)}
									type="button"
									className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-blue-600">
									Bekor qilish
								</button>
								<button
									// onClick={() => setIsModalOpen(!isModalOpen)}
									type="submit"
									className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-600">
									Buyurtma qilish
								</button>
								
							</div>
							{error && (
        <p className="text-red-600 text-sm mt-3 bg-red-100 p-3 rounded-lg text-center">
            Muammo yuzaga keldi! <br /> Qayta urinib ko'ring yoki raqam registratsiyasini tekshirib ko'ring
        </p>
    )}
						</form>
					</div>
				</div>
			)}
			<Header />
			<div className="p-6 max-w-6xl mx-auto text-black mt-12 pt-12">
				{/* Product Title */}
				<h1 className="text-2xl font-bold sm:text-3xl">{data ? data.product_name : 'Mahsulot nomi'}</h1>

				{/* Main Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
					{/* Left Section: Images */}
					<div className="space-y-4">
						<div className="rounded-lg flex  gap-3">
							<img src={data ? `https://thewebstorenode.uz.thewebstore.uz//view/${data.postImg[0]}` : '...'} alt="" className=" border w-full hover:shadow-md rounded object-none.69639" />
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
						<div className="">
							<p className="text-gray-400">Mahsulot Narxi:</p>
							<p className="text-xl mt-px sm:text-2xl font-bold">{data ? data.product_cost : 'Mahsulot narxi'}</p>
							<p className="text-gray-400">Muddati to'lov:</p>
							<p className="text-xl mt-px sm:text-2xl font-bold">{cost ? data?.product_monthly_pay_month : data?.product_monthly_pay_year} so'm</p>
						</div>

						<div className=" flex flex-col gap-3 mt-3">
							<h3 className="text-lg font-semibold">
								Muddati to'lovga rasmiylashtirish
							</h3>
							<div className="flex  mt-2 w-full block">
								<button onClick={handleCost} className={cost ? ` px-4 py-2 rounded-l-lg w-full border transition` : "bg-blue-600 text-white px-4 py-2 rounded-l-lg w-full "}>
									6 oy
								</button>
								<button onClick={handleCost} className={!cost ? ` px-4 py-2 rounded-r-lg w-full border` : "bg-blue-600 text-white px-4 py-2 rounded-r-lg w-full "}>
									12 oyga
								</button>
							</div>
							<div className="border-primary border-2 overflow-hidden cursor-pointer w-full p-2 rounded-lg" ><div className="bg-gray-100 transition-400 rounded-lg flex px-3 py-3 items-center justify-between">
								<Image alt="UZUM" loading="lazy" width="11755" height="7541" decoding="async" data-nimg="1" className="h-8 w-auto" src={logo} />
								<p className="text-sm xl:text-base font-semibold">{cost ? data?.product_monthly_pay_month : data?.product_monthly_pay_year} so'mdan X {cost ? "12" : "6"}</p></div><div className="overflow-hidden grid grid-cols-2 mt-2 pl-4 gap-y-1 sm:gap-y-px text-xs sm:text-sm font-medium">
									<p className="break-all line-clamp-1">To’lov muddati</p>
									<p className="break-all line-clamp-1">{cost ? "12 oy": "6 oy"}</p>
									<p className="break-all line-clamp-1">Oylik to’lov</p>
									<p className="break-all line-clamp-1">{cost ? data?.product_monthly_pay_month : data?.product_monthly_pay_year} so’m</p>
									<p className="break-all line-clamp-1">To’lovning oxirgi sanasi</p>
									<p className="break-all line-clamp-1">{cost ? twelveMonthsLater : sixMonthsLater}</p>
								</div>
							</div>
							<button className="bg-green-500 text-white w-full py-3 rounded-lg mt-4 pulse rounded-full" onClick={() => setIsModalOpen(true)} >
								Muddati to'lovga xarid qilish
							</button>
						</div>

						{/* Availability & Delivery */}
						<ul className="mt-6 border rounded-lg border-b-2 border-black-700 p-2">
							<li className="flex items-center border-b-2 border-black-700 p-2">
								<img src="https://www.piyolamarket.uz/_next/static/media/double-check.4be17432.svg" alt="" className="w-[35px] mr-5" />
								<div>
									<p className="text-foreground-500 text-medium">Mahsulot Do'konda mavjud!</p>
									<p className="text-foreground-200 font-normal text-xs">sifat va mavjudlik kafolati</p>
								</div>
							</li>
							<li className="flex items-center border-b-2 border-black-700 p-2">
								<img src="https://www.piyolamarket.uz/_next/static/media/shield.789624c8.svg" className="w-[35px] mr-5" alt="" />
								<div>
									<p className="text-foreground-500 text-medium">Rasmiy Kafolat</p>
									<p className="text-foreground-200 font-normal text-xs">1 yil</p>
								</div>
							</li>
							<li className="flex items-center p-2">
								<img src="https://www.piyolamarket.uz/_next/static/media/delivery.531e5f06.svg" className="w-[35px] mr-5" alt="" />
								<div>
									<p className="text-foreground-500 text-medium">Yetkazib berish xizmati</p>
									<p className="text-foreground-200 font-normal text-xs">O'zbekiston berish xizmati</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/* Product Details */}
				<div className="mt-8">
					<div className="border-b flex">
						<button onClick={handleActive} className={!text ? "text-xl font-semibold  pb-2  border-b-2 border-black-500 transition mr-3" : "text-xl font-semibold  pb-2 mr-3 "}>
							Mahsulot xususiyatlari
						</button>
						<button onClick={handleActive} className={text ? "text-xl font-semibold  pb-2  border-b-2 border-black-500 transition" : "text-xl font-semibold  pb-2  "}>
							Tavsif
						</button>
					</div>
					<p className="mt-4 text-gray-600 lg:w-3/6 md:w-full">
						{text ? data?.product_description : data?.product_info}
					</p>
				</div>
			</div>
			<div className="p-12">
				<p className="text-2xl font-semibold  pb-2 text-black  mb-3 transition mr-3">Sizga yoqishi mumkin</p>
				<div className="flex flex-wrap">
				<ul className="flex gap-5 ">
					{category.map((item, index) => (
						<ProductCard
							key={index}
							img={item.postImg}
							id={item.postId}
							name={item.product_name}
							category={item.subcategory}
							price={item.product_cost}
							brand={item.product_brand}
						/>
					))}
				</ul>
				</div>
			</div>
			<Footer />

		</div>
	);
}

export default page
