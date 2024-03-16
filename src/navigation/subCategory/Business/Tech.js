import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tech from '../../../screen/subCategory/Business/tech';

export default function Companies() {
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
          { name: 'Ekonomi', link: '/ekonomi' },
          { name: 'Sosial', link: '/sosial' }
        ]
      },
      {
        name: 'World',
        subCategory: [
          { name: 'News', link: '/world-news' },
          { name: 'Politics', link: '/world-politics' },
          { name: 'Business', link: '/world-business' }
        ]
      },
      {
        name: 'Culture',
        subCategory: [
          { name: 'Music', link: '/music' },
          { name: 'Art', link: '/art' },
          { name: 'Food', link: '/food' }
        ]
      },
      {
        name: 'Opinion',
        subCategory: [
          { name: 'Editorial', link: '/editorial' },
          { name: 'Op-Ed', link: '/op-ed' },
          { name: 'Letters', link: '/letters' }
        ]
      },
      {
        name: 'DeepDive',
        subCategory: [
          { name: 'Investigations', link: '/investigations' },
          { name: 'Features', link: '/features' },
          { name: 'Analysis', link: '/analysis' }
        ]
      },
      {
        name: 'Business',
        subCategory: [
          { name: 'Market', link: '/market' },
          { name: 'Finance', link: '/finance' },
          { name: 'Technology', link: '/technology' }
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
      <Tech/>

      {/* Footer */}
      <footer className="py-4 mt-10 text-center text-white bg-gray-800">
        <div className="container mx-auto">
          <p>&copy; 2024 JKTNEWS. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
