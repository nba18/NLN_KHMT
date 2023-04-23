import React from "react";
import Footer from "../components/componetChung/footer";
import Headerandnav from "../components/componetChung/headerAndnav";
import Home from "../components/componetRieng/Home";
import Bia from "../assets/images/bia.png";

function Homepage(){
    return(
        <div className="w-10/12 m-auto h-auto">
            <Headerandnav />
            <div className="grid grid-cols-[minmax(900px,_1fr)_300px]">
                <Home />
                <img src={Bia} alt="error" className=" w-[280px] ml-4" />
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;