"use client";
import { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredPosts?.length > 0 ? (
        filteredPosts?.map(post => (
          <div key={post.postId} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">nom</h2>
          </div>
        ))
      ) : (
        <p>No favorites saved.</p>
      )}
    </div>
  );
};

export default Favorites;
