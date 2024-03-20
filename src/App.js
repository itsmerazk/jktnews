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
import ArtsCulture from './navigation/subCategory/Culture/Arts-culture';
import Books from './navigation/subCategory/Culture/Books';
import Entertainment from './navigation/subCategory/Culture/Entertainment';
import Environment from './navigation/subCategory/Culture/Environment';
import Food from './navigation/subCategory/Culture/Food';
import Health from './navigation/subCategory/Culture/Health';
import Lifestyle from './navigation/subCategory/Culture/Lifestyle';
import Parenting from './navigation/subCategory/Culture/Parenting';
import People from './navigation/subCategory/Culture/people';
import Technology from './navigation/subCategory/Culture/Technology';
import Dispatch from './navigation/subCategory/Deepdive/Dispatch';
import Quick from './navigation/subCategory/Deepdive/Quick';
import Archipelago from './navigation/subCategory/Indonesia/Archipelago';
import Jakarta from './navigation/subCategory/Indonesia/Jakarta';
import Politics from './navigation/subCategory/Indonesia/Politics';
import Society from './navigation/subCategory/Indonesia/Society';
import Academia from './navigation/subCategory/Opinion/Academia';
import Analysis from './navigation/subCategory/Opinion/Analysis';
import Commentary from './navigation/subCategory/Opinion/Commentary';
import Editorial from './navigation/subCategory/Opinion/Editorial';
import Insight from './navigation/subCategory/Opinion/Insight';
import Interview from './navigation/subCategory/Opinion/Interview';
import Podcast from './navigation/subCategory/Opinion/Podcast';
import Thebrief from './navigation/subCategory/Opinion/Thebrief';
import Americas from './navigation/subCategory/World/Americas';
import AsiaPasific from './navigation/subCategory/World/Asia-Pasific';
import Europe from './navigation/subCategory/World/Europe';
import MiddleEasAfrica from "./navigation/subCategory/World/Middle-East-Africa";
import About from "./screen/about";
import Contact from "./screen/contact";

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
        <Route path="/Culture/ArtsCulture" element={<ArtsCulture/>}/>
        <Route path="/Culture/Books" element={<Books/>}/>
        <Route path="/Culture/Entertainment" element={<Entertainment/>}/>
        <Route path="/Culture/Environment" element={<Environment/>}/>
        <Route path="/Culture/Food" element={<Food/>}/>
        <Route path="/Culture/Health" element={<Health/>}/>
        <Route path="/Culture/Lifestyle" element={<Lifestyle/>}/>
        <Route path="/Culture/Parenting" element={<Parenting/>}/>
        <Route path="/Culture/People" element={<People/>}/>
        <Route path="/Culture/Technology" element={<Technology/>}/>
        <Route path="/DeepDive/Dispatch" element={<Dispatch/>}/>
        <Route path="/DeepDive/Quick" element={<Quick/>}/>
        <Route path="/Indonesia/Archipelago" element={<Archipelago/>}/>
        <Route path="/Indonesia/Jakarta" element={<Jakarta/>}/>
        <Route path="/Indonesia/Politics" element={<Jakarta/>}/>
        <Route path="/Indonesia/Society" element={<Society/>}/> 
        <Route path="/Opinion/Academia" element={<Academia/>}/>
        <Route path="/Opinion/Analysis" element={<Analysis/>}/>
        <Route path="/Opinion/Commentary" element={<Commentary/>}/>
        <Route path="/Opinion/Editorial" element={<Editorial/>}/>
        <Route path="/Opinion/Insight" element={<Insight/>}/>
        <Route path="/Opinion/Interview" element={<Interview/>}/>
        <Route path="/Opinion/Podcast" element={<Podcast/>}/>
        <Route path="/Opnion/Thebrief" element={<Thebrief/>}/>
        <Route path="/World/Americas" element={<Americas/>}/>
        <Route path="/World/AsiaPasific" element={<AsiaPasific/>}/>
        <Route path="/World/Europe" element={<Europe/>}/>
        <Route path="/World/MiddleEastAfrica" element={<MiddleEasAfrica/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}
