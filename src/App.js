import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import Recommend from "./recommended/Recommend";
import Home from './components/Home';
import Details from "./details/Details";
import NoMoviesFound from "./components/NoMoviesFound";



function App() {

  return (
    <Router>
    <div>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/recommend" element={<Recommend/>} />
    <Route path="/details" element={<Details/>} />
    <Switch>
      <Route exact path="/recommend" component={NoMoviesFound} />
      <Route exact path="/">
      <h2>Welcome to Movie Search!</h2>
      </Route>
    </Switch>
   </Routes>
    </div>
    </Router>
  );
}

export default App;
