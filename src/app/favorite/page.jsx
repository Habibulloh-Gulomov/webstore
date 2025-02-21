"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
const Favorites = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from API
    axios.get("https://thewebstorenode.uz.thewebstore.uz/posts")
      .then(response => {
        setPosts(response.data.data);
        console.log(response.data);
      })
      .catch(error => console.error("Error fetching posts:", error));
  }, []);

  useEffect(() => {
    // Get stored favorite IDs from localStorage
    const storedIds = JSON.parse(localStorage.getItem("favorites")) || [];
    
    // Filter posts to show only those with IDs in storedIds
    if (Array.isArray(posts)) {
      setFilteredPosts(posts.filter(post => storedIds.includes(post.postId)));
    }
    
    console.log(filteredPosts);
    
  }, [posts]);

  return (
    <>
    <Header/>
    <h2>Yoqtirilganlar</h2>
    <div className="flex flex-wrap gap-5 mt-[100px] justify-center mb-5">
      {filteredPosts?.length > 0 ? (
        filteredPosts?.map(item => (
          <ProductCard 
            key={item.postId} 
            img={item.postImg}
            id = {item.postId}
            name={item.product_name} 
            category={item.subcategory}
            price={item.product_cost}
            brand={item.product_brand}
          />
        ))
      ) : (
        <p className="text-3xl mx-auto text-black my-[130px]">Yoqtirilganlar hali mavjud emas.</p>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Favorites;
