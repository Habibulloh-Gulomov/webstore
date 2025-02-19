'use client'
import axios from "axios";
import { useState, useEffect } from "react";
const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);
	
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
  return (
    <div>
      {categories?.map(e=>(
        <p className="text-black">hello world</p>
      ))}
    </div>
  )
}

export default CategoryList
