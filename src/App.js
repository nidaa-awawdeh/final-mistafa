import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ControlPanel from "./components/Controlpanel";
import Dashboard from "./components/Dashbord";
import TrendingFashion from "./components/Trendingfashion";
import RedesignFashion from "./components/Redesignfashion";
import Body1 from "./components/Body1";
import SignOut from "./components/Signout";

//  app serser database
// const mongoose = require("mongoose");

// const Dishes = require("./models/dishes");

// const url = "mongodb://localhost:27017/conFusion";
// const connect = mongoose.connect(url);

// connect.then(
//   (db) => {
//     console.log("Connected correctly to server");
//   },
//   (err) => {
//     console.log(err);
//   }
// );
// end code database

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Products from "./components/Products";

import Cart from "./components/Cart";

import About from "./components/About";
import SignIn from "./components/Signin";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div>
      <h1>{message}</h1>
      {/* <Router> */}
      <Header />

      {/* <Home /> */}

      {/* <Products /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/About" element={<About />} />
          <Route path="/Controlpanel" element={<ControlPanel />} />
          <Route path="/Dashbord" element={<Dashboard />} />
          <Route path="/TrendingFashion" element={<TrendingFashion />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/RedesignFashion" element={<RedesignFashion />} />
          <Route path="/SignOut" element={<SignOut />} />
        </Routes>
      </Router>
      {/* <Body /> */}
      <Footer />
    </div>
  );
}

export default App;
