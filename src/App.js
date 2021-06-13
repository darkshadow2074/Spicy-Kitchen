import React from 'react';
import Navbar from './components/Navbar.jsx'
import Slider from "./components/Slider"
import About from "./components/About.jsx"
import Menu  from "./components/Menu.jsx"
import Order from "./components/Order"
import Footer from "./components/Footer.jsx"
import "./components/sliderImage"


function App() {
  
  return (
    <div className="App">
          <Navbar />
          <Slider />
          <About />
          <Menu />
          <Order />
          <Footer />
    </div>
  );
}

export default App;
