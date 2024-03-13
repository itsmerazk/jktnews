import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./home";
import News from './screen/news';
import Indonesia from "./navigation/Indonesia";
import Business from "./navigation/Business";
import Culture from "./navigation/Culture";
import World from "./navigation/World";
import Deepdive from "./screen/category/deepdive";
import Opinion from "./navigation/Opinion";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News/>} />
        <Route path="/Indonesia" element={<Indonesia/>} />
        <Route path="/CULTURE" element={<Culture/>} />
        <Route path="/World" element={<World/>} />
        <Route path="/DeepDive" element={<Deepdive/>}/>
        <Route path= "/Opinion" element={<Opinion/>}/>
      </Routes>
    </Router>
  );
}
