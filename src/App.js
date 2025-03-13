import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

import Recommend from "./recommended/Recommend";

import Home from "./components/Home";

import Details from "./details/Details";

import { SearchProvider } from "./components/searchContent";



function App() {

return (

<SearchProvider>

<Router>

<div>

<Routes>

<Route path="/" element={<Home />} />

<Route path="/recommend" element={<Recommend />} />

<Route path="/details/:movieId" element={<Details />} />

</Routes>

</div>

</Router>

</SearchProvider>

 );

}



export default App;






// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import "./index.css";
// import Recommend from "./recommended/Recommend";
// import Home from './components/Home';
// import Details from "./details/Details";


// function App() {

//   return (
//     <Router>
//     <div>
//    <Routes>
//     <Route path="/" element={<Home />}/>
//     <Route path="/recommend" element={<Recommend/>} />
//     <Route path="/details" element={<Details/>} />
//    </Routes>
//     </div>
//     </Router>
//   );
// }

// export default App;
