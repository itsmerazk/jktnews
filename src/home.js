import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './assets/bg-home.jpg';

function App() {
  const [data, setData] = useState({ status: 0, category: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch('https://jakpost.vercel.app/api/category');
        const jsonData = await resp.json();
        
        const filteredData = { status: jsonData.status, category: jsonData.category.filter(category => category.name.trim() !== "") };
        
        setData(filteredData);
        setIsLoading(false);
       
        setTimeout(() => {
          setIsContentVisible(true);
        }, 300); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-8 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="mb-20 text-3xl font-bold text-center">WELCOME TO JKTNEWS</h1>
      <div className="mt-20">
        {isContentVisible && data.category.map(category => (
          <div key={category.id} className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="mb-2 text-lg font-semibold">{category.name}</h2>
            <p className="text-gray-600">{category.description}</p>
            <Link to={`/category/${category.name}`} className="block mt-2 text-blue-500 hover:underline">See More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
