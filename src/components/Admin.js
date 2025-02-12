'use client'
import { useState, useEffect } from "react";
import searchicon from "../images/search.png";
import logo from '../images/logo.svg'
import Image from "next/image";

export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    cost: "",
    brand: "",
    image: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
  const [inputValue, setInputValue] = useState('');
  const [inputPass, setInputPass] = useState('');
  const [isLogin, setisLogin] = useState(true);

  const password = '12345678'
  const login = '12345678'
  const handlepost = (event) => {
    console.log('Input Value:', inputValue);
    console.log('Input Value:', inputPass);
    if (password == inputPass && login == inputValue) {
      setisLogin(!isLogin)
    }
    
    // Here you can send the inputValue to your API or perform other actions
  };

  const handleLogin = (event) => {
    setInputValue(event.target.value);
  };
  const handlePassword = (event) => {
    setInputPass(event.target.value);
  };

  
  return (
    <>
     { isLogin && (
      <div className="fixed inset-0 flex items-center z-10 justify-center bg-gray-800 z-20 ">
          <div className="bg-white p-6 rounded-lg shadow-lg relative lg:w-2/5 md:w-full">
            <h2 className="text-2xl font-bold mb-4 ">Login Page</h2>
            <form onSubmit={handlepost} className="space-y-4">
              <input 
                type="text" 
                name="login" 
                placeholder="Login kiriting!"  
                className="w-full p-2 border rounded" 
                required
                onChange={handleLogin}
              />
              
              <input 
                type="text" 
                name="password" 
                placeholder="kodni kiriting!!!" 
                className="w-full p-2 border rounded" 
                required
                onChange={handlePassword}

              />
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
     )}



    {!isLogin && (
        <div className="flex items-center justify-around border drop-shadow-md fixed bg-white top-0 right-0 left-0 z-10">
        <Image
            src={logo}
            width={120}
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
            className="absolute bottom-3 left-4"
          />
        </div>
        <button 
      onClick={() => setIsModalOpen(true)} 
      className="bg-green-500 text-white px-4 py-2 rounded"
    >
      Yangi Mahsulot Qo'shish
    </button>
      </div>
    )}
  
      
      
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center z-10 justify-center bg-gray-800 bg-opacity-50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg relative lg:w-2/5 md:w-full">
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-2 right-3 text-3xl text-gray-500 hover:text-black"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 ">Mahsulot ma'lumotlarini kiriting</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Mahsulot Nomi" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full p-2 border rounded" 
                required
              />
              
              <textarea 
                name="description" 
                placeholder="Mahsulot tavsifi" 
                value={formData.description} 
                onChange={handleChange} 
                className="w-full p-2 border rounded" 
                required
              />
              
              <input 
                type="number" 
                name="cost" 
                placeholder="Narx (so'm)" 
                value={formData.cost} 
                onChange={handleChange} 
                className="w-full p-2 border rounded" 
                required
              />
              
              <input 
                type="text" 
                name="brand" 
                placeholder="Brand" 
                value={formData.brand} 
                onChange={handleChange} 
                className="w-full p-2 border rounded" 
                required
              />

<input 
                type="file" 
                name="image" 
                placeholder="Rasmlari 3tagcha" 
                value={formData.image} 
                onChange={handleChange} 
                className="w-full p-2 border rounded" 
                required
                multiple 
                max={3}
              />
              
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
