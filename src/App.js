import React from "react";
import AboutUs from "./components/aboutUs.jsx/AboutUs";
import ContactUs from "./components/contactUs.jsx/ContactUs";
import Doctors from "./components/doctors/Doctors";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar"
import  Services  from "./components/services/Services";


function App() {
  return (
   <>
   
  
  <Navbar />
   <Home />
   <Services />
   <Doctors/>
   <AboutUs/>
   <ContactUs/>
    </>
   
  );
}

export default App;
