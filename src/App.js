import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./home";
import News from './screen/news';
import Indonesia from "./navigation/category/Indonesia";
import Business from "./navigation/category/Business";
import Culture from "./navigation/category/Culture";
import World from "./navigation/category/World";
import Deepdive from "./screen/category/deepdive";
import Opinion from "./navigation/category/Opinion";
import Tech from "./navigation/subCategory/Business/Tech";
import Markets from "./navigation/subCategory/Business/Regulations";
import Regulations  from "./navigation/subCategory/Business/Regulations";
import Companies from "./navigation/subCategory/Business/Companies";
import Economy from './navigation/subCategory/Business/Economy';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News/>} />
        <Route path="/Indonesia" element={<Indonesia/>} />
        <Route path="/Business" element={<Business/>}/>
        <Route path="/CULTURE" element={<Culture/>} />
        <Route path="/World" element={<World/>} />
        <Route path="/DEEPDIVE" element={<Deepdive/>}/>
        <Route path= "/Opinion" element={<Opinion/>}/>
        <Route path="/Business/Companies" element={<Companies/>}/>
        <Route path="/Business/Markets" element={<Markets/>}/>
        <Route path="/Business/Regulations" element={<Regulations/>}/>
        <Route path="/Business/Tech" element={<Tech/>}/>
        <Route path="/Business/Economy" element={<Economy/>}/>
        
      </Routes>
    </Router>
  );
}
