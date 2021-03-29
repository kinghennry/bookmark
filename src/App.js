import React from "react"
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import FaQs from "./components/FaQs";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
function App() {
return (
    <div className="app">
   <Header/> 
    <Hero/>
    <Tabs/>
    <Grid/>
    <FaQs/>
    <Newsletter/>
  <Footer/>
    </div>
  );
}

export default App;