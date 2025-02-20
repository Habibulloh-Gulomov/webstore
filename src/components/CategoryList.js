'use client'
import axios from "axios";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import ProductCard from "./ProductCard";
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

  const [data2, setData2] = useState([]);
  const [error2, setError2] = useState(null);

  useEffect(() => {
    axios.get(`https://thewebstorenode.uz.thewebstore.uz/posts`)
      .then(response => {
        setData2(response.data.data);
  console.log(response.data);
      })
      .catch(error => {
        setError2(error.message);
      });
  }, []);
  return (

    <>
    <div>
      {categories?.map((e, index)=>(
        <ul>
          <ProductList
          key={index}
          title = {e.title}
          category_id = {e.subcategory_id}
          />
        </ul>
      ))}
    </div>
    <div className='lg:hidden m-4  flex flex-wrap gap-3 justify-center items-center'>
    {data2.map((item, index) => (
            <ProductCard 
            key={index} 
            img={item.postImg}
            id = {item.postId}
            name={item.product_name} 
            category={item.subcategory}
            price={item.product_cost}
            brand={item.product_brand}
          />
          ))}
    </div>
    </>
    

    
  )
}

export default CategoryList
