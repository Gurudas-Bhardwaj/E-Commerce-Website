import React, {  useState } from "react";
import Navbar from './Components/Navbar/Navbar'
import { Context } from "./Context/Context";
import TopNavbar from "./Components/Navbar/TopNavbar";
import Home from "./Components/Home/Home";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

const Layout = () => {
  const [windowScroll, setWindowScroll] = useState();
 

    const handleScroll = () => {
      setWindowScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    

  return (
    <Context.Provider value={windowScroll}>
      <div className="overflow-hidden">
        <TopNavbar/>
        <Navbar />
        <Outlet/>
        <Footer/>
      </div>
      </Context.Provider>
  );
}

export default Layout;
