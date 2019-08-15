import React from "react";
import Header from "./components/Header";
import MainCards from "./components/MainCards";
import MainBanner from "./components/MainBanner";
import LilBanner from "./components/LilBanner";
import Features from "./components/Features";

import LilBanner2 from "./components/LilBanner2";
import CityCards from "./components/CityCards";
import Footer from "./components/Footer";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <MainCards />
      <LilBanner />
      <Features />
      <LilBanner2 />
      <CityCards />
      <Footer />
    </div>
  );
}

export default App;
