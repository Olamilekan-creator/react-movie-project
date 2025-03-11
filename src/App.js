import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import Recommend from "./recommended/Recommend";
import Home from './components/Home';
import Details from "./details/Details";



function App() {

  return (
    <Router>
    <div>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/recommend" element={<Recommend/>} />
    <Route path="/details" element={<Details/>} />
   </Routes>
   <Header />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
