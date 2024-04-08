import React from "react";
import Navbar from "../components/navbar";
import How from "../components/how";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Feedback from "../components/Feedback";
function Homepage(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <How/>
        <Feedback/>
        <Footer/>
        </>
    )
}
export default Homepage;