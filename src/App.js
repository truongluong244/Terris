import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Course from "./Components/Course/Course";
import Info from "./Components/Info/Info";



const App = () => {
  return (
    <>
      <Navbar />
      
      <Router>
        <Routes>
        <Route path="/Home" element = {<Home/>} />
        <Route path="/Course" element = {<Course/>} />
        <Route path="/Information" element = {<Info/>} />



        </Routes>
      </Router>


      <Footer />
    </>

  );
};

export default App;
