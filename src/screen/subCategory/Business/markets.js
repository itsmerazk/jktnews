import React, {useEffect, useState } from "react";
import axios from "axios";


export default function Markets() {
    const [featuredPost, setFeaturedPost] = useState({});
    const [posts, setPosts] = useState({});
    const [categories, setCategories] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jakpost.vercel.app/api/category/business/markets');
                const data = response.data;
                setFeaturedPost(data.featured_post);
                setPosts(data.posts);
                setCategories(data.category);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return(
        <div className="min-h-screen bg-gray-100"> 
          <div className="container px-4 py-8 mx-auto">
             <div className="mb-8">
                <h1 className="mb-4 text-3xl font-bold">{featuredPost.title}</h1>
                <img src={featuredPost.image} alt="Featured Post" className="w-full h-auto mb-4"/>
                <p className="mb-2 text-gray-700">{featuredPost.headline}</p>
                <p className="mb-2 text-gray-700">{featuredPost.category}</p>
                <p className="mb-2 text-gray-700">{featuredPost.image_desc}</p>
                <p className="mb-2 text-gray-700">{featuredPost.publised_at}</p>
                <a href={featuredPost.link} className="text-blue-700">Read More</a>
             </div>
             <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
             {posts.map((post, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
                <img src={post.image} alt="Post" className="w-full h-auto mb-2"/>
                <p className="mb-2 text-gray-700 ">{post.headline}</p>
                <p className="mb-2 text-gray-700">{post.category}</p>
                <p className="mb-2 text-gray-700">{post.publised_at}</p>
                <a href={post.link} className="text-blue-700">Read More</a>
                </div>
             ))}
             </div>
          </div>
        </div>
    )
}