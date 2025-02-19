'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";
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
        <ul>
          <ProductList
          key={e.subcategory_id}
          title = {e.title}
          category_id = {e.subcategory_id}
          />
        </ul>
      ))}
    </div>
  )
}

export default CategoryList
