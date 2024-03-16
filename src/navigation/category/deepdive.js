import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeepDive from '../../screen/category/deepdive';

export default function Berita() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] = useState("");
  const [isContentVisible, setIsContentVisible] = useState(false);

  const data = {
    category: [
      {
        name: 'Indonesia',
        subCategory: [
          { name: 'Jakarta', link: '/Indonesia/Jakarta' },
          { name: 'Archipelago', link: '/ekonomi' },
          { name: 'Politics', link: '/sosial' },
          { name: 'Society', link: '/Business/Markets' },
        ]
      },
      {
        name: 'World',
        subCategory: [
          { name: 'Americas', link: '/Business/Companies' },
          { name: 'Asia - Pacific', link: '/world-politics' },
          { name: 'Europe', link: '/world-business' },
          { name: 'Middle East Africa', link: '/Business/Markets' },
        ]
      },
      {
        name: 'Culture',
        subCategory: [
          { name: 'Arts & Culture', link: '/music' },
          { name: 'Books', link: '/art' },
          { name: 'Entertainment', link: '/food' },
          { name: 'Environment', link: '/Business/Markets' },
          { name: 'Food', link: '/Business/Markets' },
          { name: 'Health', link: '/Business/Markets' },
          { name: 'Lifestyle', link: '/Business/Markets' },
          { name: 'Parenting', link: '/Business/Markets' },
          { name: 'People', link: '/Business/Markets' },
          { name: 'Technology', link: '/Business/Markets' },
        ]
      },
      {
        name: 'Opinion',
        subCategory: [
          { name: 'Academia', link: '/editorial' },
          { name: 'Analysis', link: '/op-ed' },
          { name: 'Commentary', link: '/letters' },
          { name: 'Editorial', link: '/Business/Markets' },
          { name: 'Insight', link: '/Business/Markets' },
          { name: 'Interview', link: '/Business/Markets' },
          { name: 'Podcast', link: '/Business/Markets' },
          { name: 'The Brief', link: '/Business/Markets' },
        ]
      },
      {
        name: 'DeepDive',
        subCategory: [
          { name: 'Dispatch', link: '/investigations' },
          { name: 'Quick', link: '/features' },
        ]
      },
      {
        name: 'Business',
        subCategory: [
          { name: 'Business', link: '/Business/Companies' },
          { name: 'Economy', link: '/Business/Economy' },
          { name: 'Markets', link: '/Business/Markets' },
          { name: 'Regulations', link: '/Business/Regulations' },
          { name: 'Tech', link: '/Business/Tech' },
        ]
      }
    ]
  };

  return (
    <div className={`opacity-${isContentVisible ? '100' : '0'} transition-opacity duration-500`}>
      {/* Navbar */}
      <nav className="p-4 bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <a href="#" className="text-xl font-bold text-white">JKTNEWS</a>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white">Beranda</Link></li>
          <li className="relative group">
            <div className="text-white cursor-pointer" onClick={() => setShowSubMenu(!showSubMenu)}>
              Kategori
            </div>
            {showSubMenu && (
              <ul className="absolute px-4 py-4 ml-10 space-y-3 text-lg text-white transition duration-300 bg-gray-800 rounded-md">
                {data.category.map((category, index) => (
                  <li key={index}>
                    <div
                      className="cursor-pointer group"
                      onClick={() => setSelectedSubMenu(category.name)}
                    >
                      {category.name}
                      {category.subCategory && (
                        <ul className={`absolute top-0 ${selectedSubMenu === category.name ? 'block' : 'hidden'} right-0 mt-10 bg-gray-800 text-white rounded-md mr-4 transition duration-300`}>
                          {category.subCategory.map((sub, subIndex) => (
                            <li key={subIndex}><Link to={sub.link}>{sub.name}</Link></li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li><Link to="/" className="text-white">Tentang</Link></li>
          <li><Link to="/" className="text-white">Kontak</Link></li>
        </ul>
      </div>
    </nav>

      {/* Content */}
      <DeepDive/>

      {/* Footer */}
      <footer className="py-4 mt-10 text-center text-white bg-gray-800">
        <div className="container mx-auto">
          <p>&copy; 2024 JKTNEWS. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
