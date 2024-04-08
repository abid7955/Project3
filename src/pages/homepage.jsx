import React from "react";
import Navbar from "../components/navbar";
import How from "../components/how";
import Footer from "../components/footer";
import Hero from "../components/hero";
function Homepage(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <How/>
        <Footer/>
        </>
    )
}
export default Homepage;