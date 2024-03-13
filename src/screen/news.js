import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Berita() {

 
  const article = {
    title: "Sejarah Komputer",
    imageUrl: "https://via.placeholder.com/400", 
    publishDate: "11 Maret 2024",
    author: "John Doe",
    tags: ["Komputer", "Sejarah", "Teknologi"],
    description: "Sejarah singkat tentang perkembangan komputer dari masa ke masa.",
    content: "Di tengah majunya perkembangan teknologi dan komputer saat ini, rasanya aneh ya kalau ketemu seseorang yang tidak tahu atau tidak pernah menggunakan komputer. Bagaimana tidak? Komputer sudah mengisi keseharian kita, mulai dari digunakan untuk bekerja, belajar, hingga bermain.\n\nKomputer sekarang ini pun sudah lebih canggih dengan dilengkapi berbagai fitur dan aspek yang bisa kita manfaat dalam kehidupan sehari-hari. Tapi, penasaran gak sih, bagaimana perkembangan komputer?\n\nOke, langsung saja kita simak sejarah perkembangan komputer dari masa ke masa. Sebelum lebih jauh, yuk ketahui dulu apa itu komputer.\n\nSederhananya, komputer merupakan sekumpulan alat elektronik yang bekerjasama untuk menerima, mengolah, dan menampilkan data kepada pengguna. Komputer pertama kali ditemukan pada tahun 1822 oleh seorang matematikawan dan ilmuwan dari Inggris bernama Charles Babbage.\n\nNah, dari awal penemuannya, sebetulnya banyak ilmuwan lain yang ikut berkontribusi dalam sejarah komputer. Seperti Alan Turing dan Lovelace.\n\nJadi, bentuk maupun fitur komputer yang saat ini kita gunakan pasti jauh berbeda dengan komputer jaman dulu. Perkembangannya dari pertama masuk pasar hingga sekarang dibagi jadi lima generasi.\n\nSetiap generasi komputer mempunyai inovasinya yang memungkinkan perangkat ini bisa berkembang pesat. Menarik sekali kan?"
  };

  const [data, setData] = useState({ status: 0, category: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedSubMenu, setSelectedSubMenu] = useState("");
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch('https://jakpost.vercel.app/api/category');
        const jsonData = await resp.json();
        setData(jsonData);
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
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold text-center">{article.title}</h1>
        <div className="p-4 bg-white rounded-md shadow-md">
          <img src={article.imageUrl} alt="Cover Berita" className="mx-auto mb-4 rounded-md" style={{ width: "50%" }} />
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-600">Tanggal Publish: {article.publishDate}</p>
          </div>
          <p className="text-gray-600">Penulis: {article.author}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 text-sm bg-gray-200 rounded-full">{tag}</span>
            ))}
          </div>
          <p className="text-gray-600">{article.description}</p>
          <p className="text-gray-600">{article.content}</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 mt-10 text-center text-white bg-gray-800">
        <div className="container mx-auto">
          <p>&copy; 2024 JKTNEWS. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
