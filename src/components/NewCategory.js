import { useState, useEffect } from "react";
import axios from "axios";

export default function NewCategory() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("subcategory_name", name);
    if (image) {
      formData.append("postImg", image);
    }

    try {
      const response = await axios.post(
        "https://thewebstorenode.uz.thewebstore.uz/subcategory",
        formData,
        {
          headers: {
            token:
							"eyJhbGciOiJIUzI1NiJ9.MQ.1tRPowLx-U0FAddHad0zerSPN41lydQhy7A-toLHzBo",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Success:", response.data);
      setIsOpen(false);
      setName("");
      setImage(null);
      window.location.reload()

    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    
    try {
      await axios.delete(`https://thewebstorenode.uz.thewebstore.uz/subcategory/${id}`, {
        headers: {
          token:
							"eyJhbGciOiJIUzI1NiJ9.MQ.1tRPowLx-U0FAddHad0zerSPN41lydQhy7A-toLHzBo",
        },
      });
      setCategories(categories.filter(category => category.id !== id));
      console.log("Deleted successfully");
      window.location.reload()
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };
  
  return (
    <div className="p-4 mt-[50px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Kategoriyalar</h2>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Yangi Kategoriya
        </button>
      </div>
      <ul className="mb-4 flex flex-wrap gap-2">
        {categories.map((category) => (
          <li key={category.subcategory_id} className="flex  sm:text-start sm:flex-row sm:gap-3 bg-gray-100 py-1 px-2 rounded sm:rounded-xl min-w-20 sm:min-w-40 md:min-w-52 flex-between">
            <span>{category.title}</span>
            <button 
              onClick={() => handleDelete(category.subcategory_id)} 
              className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 ml-auto"
            >  
              Olib tashlash
            </button>
          </li>
        ))}
      </ul>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-15">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
            <div className="flex justify-between mb-3">
              <p>Kategoriya qo'shish
              </p>
              <button type="button" onClick={() => setIsOpen(!isOpen)} >X</button>
            </div>
            <input 
              type="text" 
              placeholder="Kategoriya nomi" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-md mb-2"
              required
            />
            <input 
              type="file" 
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full p-2 border rounded-md mb-2"
              required
            />
            <button 
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Saqlash
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
